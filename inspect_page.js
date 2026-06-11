const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function run() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error('AGY_BROWSER_WS_URL env var not found!');
    process.exit(1);
  }
  console.log('Connecting to browser at:', wsUrl);

  const browser = await puppeteer.connect({
    browserWSEndpoint: wsUrl,
    defaultViewport: { width: 1280, height: 800 }
  });

  console.log('Fetching open pages...');
  const pages = await browser.pages();
  console.log(`Found ${pages.length} open page(s)`);
  
  if (pages.length === 0) {
    throw new Error('No open pages found and cannot create new target');
  }

  const page = pages[0];
  console.log('Reusing existing page at URL:', await page.url());

  console.log('Navigating to http://localhost:8080/landing.html...');
  await page.goto('http://localhost:8080/landing.html', { waitUntil: 'networkidle0' });

  console.log('Evaluating page DOM...');
  const result = await page.evaluate(() => {
    // Look for headings or content containing 'How Skip Tiers Work'
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, div, p, section'));
    const matches = headings.filter(el => {
      const text = el.textContent || '';
      return text.includes('How Skip Tiers Work');
    });

    return matches.map(el => {
      // Get outerHTML but truncate if too long
      const outerHTML = el.outerHTML;
      const computedStyle = window.getComputedStyle(el);
      
      // Traverse up to find if any parent is display:none or visibility:hidden or opacity:0
      let parent = el;
      let hiddenByParent = false;
      let hiddenReason = '';
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (style.display === 'none') {
          hiddenByParent = true;
          hiddenReason = `display:none on <${parent.tagName.toLowerCase()} class="${parent.className}">`;
          break;
        }
        if (style.visibility === 'hidden') {
          hiddenByParent = true;
          hiddenReason = `visibility:hidden on <${parent.tagName.toLowerCase()} class="${parent.className}">`;
          break;
        }
        if (parseFloat(style.opacity) === 0) {
          hiddenByParent = true;
          hiddenReason = `opacity:0 on <${parent.tagName.toLowerCase()} class="${parent.className}">`;
          break;
        }
        parent = parent.parentElement;
      }

      return {
        tagName: el.tagName,
        className: el.className,
        textContent: el.textContent.trim().substring(0, 100),
        display: computedStyle.display,
        visibility: computedStyle.visibility,
        opacity: computedStyle.opacity,
        hiddenByParent,
        hiddenReason,
        outerHTMLPreview: outerHTML.substring(0, 300)
      };
    });
  });

  console.log('Result of DOM inspection:', JSON.stringify(result, null, 2));

  // Take screenshot
  const screenshotPath = '/Users/user/.gemini/antigravity/brain/d4f82619-1200-4daf-a6fe-348bbcfa41f4/screenshot.png';
  console.log('Taking screenshot and saving to:', screenshotPath);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await browser.disconnect();
  console.log('Done!');
}

run().catch(err => {
  console.error('Error running script:', err);
  process.exit(1);
});
