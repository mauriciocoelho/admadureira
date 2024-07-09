import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Versiculo {
    text: string;
    reference: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('https://www.bibliaonline.com.br/nvi');
        const data = await response.text();
        const $ = cheerio.load(data);

        const versiculos: Versiculo[] = [];

        $('main .FragmentView_text__g6Uq2').each((i, el) => {
            const text = $(el).find('span.t').text().trim();
            const reference = $(el).next('.FragmentView_actions__RE8YB').find('a').text().trim();
            if (text && reference) {
                versiculos.push({ text, reference });
            }
        });

        res.status(200).json(versiculos);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
