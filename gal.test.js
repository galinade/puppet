const puppeteer = require('puppeteer');
const { clickElement } = require("./lib/commands.js");

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


  test("Booking one ticket test ", async () => {
    await clickElement(
      page,
      "body > nav > a.page-nav__day.page-nav__day_chosen"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div:nth-child(4) > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(9)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > header > h2");
    expect(actual).toContain("ВЫ ВЫБРАЛИ БИЛЕТЫ:");
  });

  test("Booking multiple tickets test ", async () => {

    await clickElement(
      page,
      "body > nav > a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div:nth-child(2) > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(8) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_selected"
    );
    await clickElement(
      page,  
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(2)"
      );
    await clickElement(page, "body > main > section > button");
  const actual = await getText(page, "body > main > section > header > h2");
  expect(actual).toContain("ВЫ ВЫБРАЛИ БИЛЕТЫ:");
  });
});
