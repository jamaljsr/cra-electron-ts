import { ClientFunction, Selector } from 'testcafe';
import { waitForReact } from 'testcafe-react-selectors';
import { getPageUrl } from './helpers';

const getPageTitle = ClientFunction(() => document.title);
const counterSelector = Selector('[data-tid="counter"]');
const getCounterText = () => counterSelector().innerText;

const assertNoConsoleErrors = async (t: TestController) => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};

fixture`Home`.page('../build/index.html').afterEach(assertNoConsoleErrors);

test('should open window', async t => {
  await t.expect(getPageTitle()).eql('React App');
});

test("shouldn't have any logs in console of main window", assertNoConsoleErrors);

test('should show Counter page when "Counter" link clicked', async t => {
  await t
    .click('[data-tid=counter-link]')
    .expect(getCounterText())
    .eql('0');
});

test('should navgiate to /counter', async t => {
  await waitForReact();
  await t
    .click('[data-tid=counter-link]')
    .expect(getPageUrl())
    .contains('/counter');
});
