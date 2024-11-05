import * as cheerio from 'cheerio';

interface Versiculo {
    text: string;
    reference: string;
}

export async function GET(req: Request) {
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

        return new Response(JSON.stringify(versiculos), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
