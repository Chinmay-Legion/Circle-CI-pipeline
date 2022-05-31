import { Selector } from 'testcafe'

fixture`Reset Password`.page`https://opensource-demo.orangehrmlive.com/`

test('Reset Password', async t => {
  await t.maximizeWindow()
  const productVersion = Selector('#footer > div:nth-child(1)')
  const passwordLink = Selector('a').withText('Forgot your password?');
  const forgotPassworkUserName = Selector('#securityAuthentication_userName')
  const resetButton = Selector('#btnSearchValues')

  await t
  .expect(productVersion.innerText).contains('OrangeHRM 4')
  .click(passwordLink)
  .typeText(forgotPassworkUserName, 'username', { paste: true })
  .click(resetButton);
})
