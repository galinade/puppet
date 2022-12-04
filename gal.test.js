const puppeteer = require('puppeteer');
const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Сinema ticket booking tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru");
  });

 const places = beforeEach(async () => {[
  {"row": 3,"chair": 2},
    {"row": 2,"chair": 2},
    {"row": 3,"chair": 3}
 ]});
  


  test("Booking one ticket test ", async () => {
    await clickElement(
      page, "nav > a:nth-child(5)"
    );
    await clickElement(
      page, "main > section:nth-child(1) a");
    
    await clickElement(
        page, ".buying-scheme__wrapper > div:nth-child(4) > span:nth-child(9)");
    await clickElement(page, "main > section > button");
    const actual = await getText(page, "main > section > header > h2");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Booking multiple tickets test ", async () => {

    await clickElement(
      page,
      "nav > a:nth-child(6)"
    );
    await clickElement(
      page,
      " main > section:nth-child(2) > div:nth-child(2) a"
    );
    await clickElement(
      page,
      ".buying-scheme__wrapper > div:nth-child(8) > span:nth-child(1)"
    );
    await clickElement(
      page,  
      ".buying-scheme__wrapper > div:nth-child(4) > span:nth-child(2)"
      );
    await clickElement(page, "main > section > button");
  const actual = await getText(page, "main > section > header > h2");
  expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Seat reservation test ", async () => {
  await clickElement(
    page, "nav > a:nth-child(5)"
  );
  await clickElement(
    page, "main > section:nth-child(1) a");
  
  await clickElement(
      page, ".buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)");
  await clickElement(page, "main > section > button");
  const actual = await getText(page, "h1");
  expect(actual).toContain("Идёмвкино");
  });
});
