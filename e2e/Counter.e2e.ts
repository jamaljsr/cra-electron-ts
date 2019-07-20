import { Selector } from 'testcafe';

const counterSelector = Selector('[data-tid="counter"]');
const getCounterText = () => counterSelector().innerText;
const clickToCounterLink = (t: TestController) =>
  t.click(Selector('a').withExactText('Counter'));

const incrementButton = Selector('[data-tid="incr-btn"]');
const decrementButton = Selector('[data-tid="decr-btn"]');
const oddButton = Selector('[data-tid="odd-btn"]');
const asyncButton = Selector('[data-tid="async-btn"]');
const asyncLoader = Selector('[data-tid="async-loader"]');

const assertNoConsoleErrors = async (t: TestController) => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};

fixture`Counter`
  .page('../build/index.html')
  .beforeEach(clickToCounterLink)
  .afterEach(assertNoConsoleErrors);

test('should display updated count after increment button click', async t => {
  await t
    .click(incrementButton)
    .expect(getCounterText())
    .eql('1');
});

test('should display updated count after descrement button click', async t => {
  await t
    .click(decrementButton)
    .expect(getCounterText())
    .eql('-1');
});

test('should not change when count is even and odd button clicked', async t => {
  await t
    .click(oddButton)
    .expect(getCounterText())
    .eql('0');
});

test('should change when count is odd and odd button clicked', async t => {
  await t
    .click(incrementButton)
    .click(oddButton)
    .expect(getCounterText())
    .eql('3');
});

test('should change if async button clicked and a second later', async t => {
  await t
    .click(asyncButton)
    .expect(asyncLoader)
    .ok()
    .expect(getCounterText())
    .eql('1');
});
