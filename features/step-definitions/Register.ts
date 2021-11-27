import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User launch register page \"([^\"]*)\" successfully$/, async function (registerURL) {
  await browser.url(registerURL);
  await browser.maximizeWindow();
});

When(/^user enter (.+) and (.+)$/, async function (fname, lastname) {

  const fname_ele = $('#firstName');
  const lastname_ele = $('#lastName');

  await fname_ele.setValue(fname)
  await lastname_ele.setValue(lastname)
});

Then(/^click on Register button$/, async function () {
  await $('#registerbtn').click();
});

When(/^Select (.+)$/, async function (gender: string) {

  const genders = $$("//input[@name='gender']");

  for (const genderElemenet of await genders) {
    const actualGender = await genderElemenet.getAttribute("id");
    if (actualGender.includes(gender)) {
      await genderElemenet.click();
      console.log("Gender selected: " + gender);
      await browser.pause(2000);
      break;
    }
  }

});

When(/^check (.+) known languages$/, async function (languages: string) {
  if (languages === 'English') {
    const eng_ele = $('#englishchbx');
    await eng_ele.click();
    await browser.pause(1000);
    // eng_ele.saveScreenshot('ScreenShot/eng.png')
    await browser.takeScreenshot();

  }
  if (languages === 'Hindi') {
    const hindi_ele = $('#hindichbx');
    if (!await hindi_ele.isSelected()) {
      await hindi_ele.click();
      //hindi_ele.saveScreenshot('ScreenShot/Shindi.png')
      await browser.takeScreenshot();
    }
  }

});


When(/^Enter (.+) and (.+)$/, async function (mailid, password) {
  const mail_ele = $('#email');
  await mail_ele.setValue(mailid);

  const pass_ele = $('#password');
  await pass_ele.setValue(password);

});

Then(/^user verify successful msg$/, async function () {
  const msg_ele = $('#msg');
  await expect(msg_ele).toHaveText("Registration is Successful")
});

