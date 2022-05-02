/* eslint @typescript-eslint/no-var-requires: "off" */
import * as assert from 'assert';
const { Builder, By } = require('selenium-webdriver');

async function runWithDriver(test) {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await test(driver);
  } finally {
    await driver.quit();
  }
}

describe('Create Account and Post Article', function () {
  jest.setTimeout(10000);
  it('Create Account and Post', async function () {
    await runWithDriver(async function (driver) {
      await driver.get('http://localhost:3000/#/register');

      // username
      const random_number = Math.floor(Math.random() * 99999);
      const userName = 'UserName-' + random_number;
      await driver.findElement(By.xpath("(//input[@value=''])[1]")).sendKeys(userName);

      // email
      const eMail = userName + '@gmail.com';
      await driver.findElement(By.xpath("(//input[@value=''])[1]")).sendKeys(eMail);

      // password
      await driver.findElement(By.xpath("(//input[@value=''])[1]")).sendKeys(userName);

      // Sign Up button
      await driver.findElement(By.xpath('//button')).click();
      await driver.sleep(2000);
      const listedUser = await driver.findElement(By.linkText(userName));
      assert.notEqual(listedUser, null);

      // REMOVED THIS CONSOLE OUTPUT DUE TO LINT NO-CONSOLE RULE
      // let outputString = 'Test executed creating user with attributes:';
      // outputString += '\nUsername: ' + userName;
      // outputString += '\nEmail: ' + eMail;
      // outputString += '\nPassword: ' + userName;
      // console.log(outputString);

      // click new article
      await driver.findElement(By.linkText('New Article')).click();

      // article title
      const listedTitle = 'I ate ' + random_number + ' apples today!';
      await driver.findElement(By.xpath("(//input[@value=''])[1]")).sendKeys(listedTitle);

      // article subject
      const listedSubject = 'I love apples!';
      await driver.findElement(By.xpath("(//input[@value=''])[1]")).sendKeys(listedSubject);

      // article post
      const listedPost =
        'I consumed ' + random_number + ' apples today and it was delicious!\n\nEveryone should eat apples every day!';
      await driver.findElement(By.xpath("//textarea[@type='text']")).sendKeys(listedPost);

      // article submit
      await driver.findElement(By.xpath('//button')).click();
      await driver.sleep(2000);
      const listedArticle = await driver.findElement(By.className('article-page'));
      assert.notEqual(listedArticle, null);

      // REMOVED THIS CONSOLE OUTPUT DUE TO LINT NO-CONSOLE RULE
      // outputString = 'Test executed creating article with attributes:';
      // outputString += '\nTitle: ' + listedTitle;
      // outputString += '\nSubject: ' + listedSubject;
      // outputString += '\nPost: ' + listedPost;
      // console.log(outputString);
    });
  });
});
