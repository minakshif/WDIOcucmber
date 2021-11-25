import { Given, When, Then } from '@wdio/cucumber-framework';
import { SSL_OP_ALL } from 'constants';

    Given(/^User launch register page \"([^\"]*)\" successfully$/, async function (registerURL) {

      await browser.url(registerURL);
      await browser.maximizeWindow();


    });
  
    When(/^user enter (.+) and (.+)$/, async function (fname, lastname) {

        const fname_ele=await $('#firstName');
        const lastname_ele=await $('#lastName');

        await fname_ele.setValue(fname)
        await browser.pause(1000)
        await lastname_ele.setValue(lastname)
        await browser.pause(1000)
   


      
    });
  
    Then(/^click on Register button$/, async function () {

      await $('#registerbtn').click();
      await browser.pause(5000)
      
    });
  
    When(/^Select (.+)$/,async  function (gender:string) {
     

      const gender_ele=await $$("//input[@name='gender']");

      

for(let i=0;i<gender_ele.length;i++)
{
console.log("length"+gender_ele.length)

  const gender_value=await (gender_ele[i].getText());
  console.log('Gender_value='+gender_value)
  if(gender_value===gender)
  {
    console.log("value of gender"+gender_value)
    await gender_ele[i].click();
    await browser.pause(5000)
    

break;
  }

}

      // if(gender==='male')
      // {
      //   const male_ele=await $('#malerb');
      //   await male_ele.click();
      //  await  male_ele.saveScreenshot('ScreenShot/male.png')

      // }
      // else
      // {
      //   const female_ele=await $('#femalerb');
      //   await female_ele.click();
      //  await female_ele.saveScreenshot('ScreenShot/female.png')

      // }
      
    });
  
    When(/^check (.+) known languages$/,async function (languages:string) {
      if(languages==='English')
      {
        const eng_ele=await $('#englishchbx');
        await eng_ele.click();
        await browser.pause(5000);
       // eng_ele.saveScreenshot('ScreenShot/eng.png')
        await browser.takeScreenshot();

      }
      if(languages==='Hindi')
      {
        
        const hindi_ele=await $('#hindichbx');
        if(!await hindi_ele.isSelected())
        {
          await hindi_ele.click();
          //hindi_ele.saveScreenshot('ScreenShot/Shindi.png')
         await  browser.takeScreenshot();
        }
       


      }
     

      

      
    });
  
  
  When(/^Enter (.+) and (.+)$/,async function (mailid, password) {
    const mail_ele=await $('#email');
      await mail_ele.setValue(mailid);

      const pass_ele=await $('#password');
      await pass_ele.setValue(password);
    
    });
  
    Then(/^user verify successful msg$/, async function () {
       const msg_ele=await $('#msg');
      const msg=await msg_ele.getText();
      expect(msg).toEqual("Registration is Successful")
    });
  
  