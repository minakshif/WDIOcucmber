
import { Given, When, Then } from '@wdio/cucumber-framework';
//import * as varname from '../TestData/data.json';

Given(/^USer searches with (.+)$/, async function (key) {
    browser.url("https://www.google.co.in/");
    const searchEle=await $("//input[@name='q']");
    await searchEle.setValue(key);
    await driver.keys('Enter');
    
  });


// Given(/^USer searches with <key>$/, async (key) => {
//     browser.url("https://www.google.co.in/");
//     const searchEle=await $("//input[@name='q']");
//     await searchEle.setValue(key);
//     await driver.keys('Enter');
	
// });
