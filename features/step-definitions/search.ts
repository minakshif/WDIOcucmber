
import { Given } from '@wdio/cucumber-framework';
import testdata from '../../TestData/data.json';

Given(/^USer searches with (.+)$/, async function (key) {
  await browser.url(testdata.url);
  const searchEle = $("//input[@name='q']");
  await searchEle.setValue(key);
  await driver.keys('Enter');
});
