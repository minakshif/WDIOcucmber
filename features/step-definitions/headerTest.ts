import { Given, Then } from '@wdio/cucumber-framework';

Given(/^As user I will able to launch (.+) of application$/, async function (homepageUrl) {
  await browser.url(homepageUrl);
  await browser.pause(1000);
});

Then(/^as user I validate (.+) on homePage$/, async function (HeaderText) {
  const header = $('.heading');
  await expect(header).toHaveText(HeaderText);
});