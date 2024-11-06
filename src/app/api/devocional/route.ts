import * as cheerio from 'cheerio';

interface Devocional {
    title: string;
    verse: string;
    reference: string;
    text: string;
}

export async function GET(req: Request) {
    try {
        const response = await fetch('https://www.bibliaonline.com.br/devocional-diario?b=nvi');
        const data = await response.text();
        const $ = cheerio.load(data);

        const devocionalDiario: Devocional[] = [];

        // Captura o título do devocional no <h2>
        const title = $('main .block_root__NKXYU h2').first().text().trim();

        // Captura o versículo
        const verse = $('.FragmentView_text__g6Uq2 .t').first().text().trim();

        // Captura a referência do versículo
        const reference = $('.FragmentView_actionLink__l6efd a').first().text().trim();

        // Captura o texto completo do devocional a partir de todos os elementos <p>
        const text = $('div.core-page_area__UCncx main')
            .find('p')
            .map((i, el) => $(el).html()?.trim())
            .get()
            .join(' ');

        // Verifica se todos os campos foram capturados e adiciona ao array
        if (title && verse && reference && text) {
            devocionalDiario.push({
                title,
                verse,
                reference,
                text,
            });
        }

        return new Response(JSON.stringify(devocionalDiario), {
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
