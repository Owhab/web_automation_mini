import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto("https://duckduckgo.com/");

  const searchQuery = "Computer Programming";
  await page.type("#searchbox_input", searchQuery);

  await page.click(".searchbox_iconWrapper__suWUe");

  await page.waitForSelector(".react-results--main", { timeout: 5000 });

  await page.screenshot({ path: "search_results.png" });

  await browser.close();
})();
