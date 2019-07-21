import { Home } from './pages';
import { getPageUrl, getPageTitle, assertNoConsoleErrors, pageUrl } from './helpers';

fixture`Home`.page(pageUrl).afterEach(assertNoConsoleErrors);

test('should open window', async t => {
  await t.expect(getPageTitle()).eql('React App');
});

test('should show success alert when "Click Me" button clicked', async t => {
  await t
    .click(Home.clickMeButton)
    .expect(Home.successAlert.exists)
    .ok();
});

test('should navgiate to /counter', async t => {
  await t
    .click(Home.counterLink)
    .expect(getPageUrl())
    .contains('/counter');
});
