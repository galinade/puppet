const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const {clickElement, getText } = require("./lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on start page",{timeout: 10000}, async function () {
  return await this.page.goto(`http://qamid.tmweb.ru`);
});
When("user clicks on the desired date",{timeout: 10000}, async function () {
  return await clickElement(this.page,"nav > a:nth-child(5)");
});
When("user click on need hall",{timeout: 10000}, async function () {
  return await clickElement(this.page,"main > section:nth-child(1) a");
});
When("user set place in hall",{timeout: 10000}, async function () {
  return await clickElement(this.page,".buying-scheme__wrapper > div:nth-child(4) > span:nth-child(9)");
});
When("user click on submit button",{timeout: 10000}, async function () {
  return await clickElement(this.page,"main > section > button");
});
Then("user sees text",{timeout: 10000}, async function () {
  const actual = await getText(this.page, "main > section > header > h2");
  expect(actual).contain("Вы выбрали билеты:");
});