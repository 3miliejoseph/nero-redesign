import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';

const app = new FirecrawlApp({ apiKey: 'fc-509640214efe433b9b12dc364fc47a22' });

const result = await app.checkCrawlStatus('019eaece-81d7-715e-9496-2e12bdbe3280');

fs.mkdirSync('pages', { recursive: true });

for (const page of result.data) {
  const slug = page.metadata?.sourceURL
    ?.replace('https://nero.fan', '')
    ?.replace(/\//g, '_')
    || 'index';
  const filename = `pages/${slug || 'index'}.html`;

  // Rewrite asset URLs to point back to nero.fan so images/CSS load
  let html = page.html || '';
  html = html
    .replace(/src="\//g, 'src="https://www.nero.fan/')
    .replace(/href="\//g, 'href="https://www.nero.fan/')
    .replace(/url\('\//g, "url('https://www.nero.fan/")
    .replace(/url\("\//g, 'url("https://www.nero.fan/');

  fs.writeFileSync(filename, html);
  console.log(`Saved: ${filename}`);
}

console.log('Done!');