
import { Selector } from "testcafe";

fixture`Valid login`.page`https://opensource-demo.orangehrmlive.com/`;

test("User Login with valid credentials", async (t) => {
  await t.maximizeWindow();
  const productVersion = Selector("#footer > div:nth-child(1)");
  const loginName = Selector("#divUsername");
  const password = Selector("#txtPassword");
  const submitButton = Selector("#btnLogin");
  const dashboard = Selector("#content > div > div.head > h1");

  await t.expect(productVersion.innerText).contains("OrangeHRM 4");
  await t.typeText(loginName, "Admin", { paste: true });
  await t.typeText(password, "admin123", { paste: true });
  await t.click(submitButton);

  await t.expect(dashboard.exists).ok();
  await t.expect(dashboard.innerText).contains("Dashboard");
});