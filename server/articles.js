const puppeteer = require('puppeteer');

const getArticles = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto('https://ria.ru/', {
    waitUntil: 'domcontentloaded',
  });

  const articleUrls = await page.evaluate(() => {
    const links = document.querySelectorAll('.cell-list__item-link');
    return Array.from(links).map((link) => link.href);
  });

  const articles = [];

  for (const url of articleUrls) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      const articleData = await page.evaluate(() => {
        const title = document.querySelector('.article__title')?.innerText || '';
        const preview = document.querySelector('.article__text')?.innerText || '';
        const description = document.querySelector('.article__body')?.innerText || '';
        const image = document.querySelector('.media img')?.src || '';
        return { title, preview, description, image };
      });

      articles.push({ url, ...articleData });
    } catch (error) {
      console.error(`Failed to scrape ${url}:`, error);
    }
  }

  await browser.close();

  return articles; 
};

module.exports = getArticles;

