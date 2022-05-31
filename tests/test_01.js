import { Selector } from "testcafe";

fixture`User Login with valid credentials`.page`https://opensource-demo.orangehrmlive.com/`;

test("Valid Login", async (t) => {
  await t.maximizeWindow();
  const productVersion = Selector("#footer > div:nth-child(1)");
  const loginName = Selector("#divUsername");
  const password = Selector("#txtPassword");
  const submitButton = Selector("#btnLogin");
  const dashboard = Selector("#content > div > div.head > h1");

  await t
  .expect(productVersion.innerText).contains("OrangeHRM 4")
  .typeText(loginName, "Admin", { paste: true })
  .typeText(password, "admin123", { paste: true })
  .click(submitButton)
  .expect(dashboard.exists).ok()
  .expect(dashboard.innerText).contains("Dashboard")
});


test("Invalid Login", async (t) => {
  await t.maximizeWindow();
  const productVersion = Selector("#footer > div:nth-child(1)");
  const loginName = Selector("#divUsername");
  const password = Selector("#txtPassword");
  const submitButton = Selector("#btnLogin");
  const dashboard = Selector("#content > div > div.head > h1")
  const InvalidCred = Selector('span#spanMessage');

  await t
  .expect(productVersion.innerText).contains("OrangeHRM 4")
  .typeText(loginName, "Admin", { paste: true })
  .typeText(password, "IncorrectPassword123", { paste: true })
  .click(submitButton)
  .expect(InvalidCred.innerText).match(/Invalid credentials/i)
  .expect(dashboard.exists).notOk();
  
});