import { Builder } from 'selenium-webdriver';
async function runWithDriver(test) {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await test(driver);
  } finally {
    await driver.quit();
  }
}

describe('Conduit website', function () {
  //this.timeout(10000);

  describe('Home Page', function () {
    describe('Title', function () {
      it('should be "Conduit"', async function () {
        await runWithDriver(async function (driver) {
          await driver.get('http://localhost:3000/#/');
          const title = await driver.getTitle();
          title.should.equal('Conduit');
        });
      });
    });
  });
});
