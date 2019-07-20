import * as React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { createReduxStore } from '../../store';
import Counter from './Counter';

describe('Counter component', () => {
  const renderCounter = () => {
    const store = createReduxStore();
    const app = (
      <StoreProvider store={store}>
        <Provider store={store as any}>
          <ConnectedRouter history={createMemoryHistory()}>
            <Counter />
          </ConnectedRouter>
        </Provider>
      </StoreProvider>
    );

    return render(app);
  };

  it('should contain default counter value of zero', () => {
    const { getByTestId } = renderCounter();
    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('should increment by one when plus btn is clicked', () => {
    const { getByTestId } = renderCounter();
    const btn = getByTestId('incr-btn');
    fireEvent.click(btn);
    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('should decrement by one when minus btn is clicked', () => {
    const { getByTestId } = renderCounter();
    const btn = getByTestId('decr-btn');
    fireEvent.click(btn);
    expect(getByTestId('counter')).toHaveTextContent('-1');
  });

  it('should not increment when odd btn is clicked and count is even', () => {
    const { getByTestId } = renderCounter();
    const btn = getByTestId('odd-btn');
    fireEvent.click(btn);
    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('should increment by two when odd btn is clicked and count is odd', () => {
    const { getByTestId } = renderCounter();

    // first increment to 1 so that the current count is odd
    const incr = getByTestId('incr-btn');
    fireEvent.click(incr);

    const btn = getByTestId('odd-btn');
    fireEvent.click(btn);
    expect(getByTestId('counter')).toHaveTextContent('3');
  });

  it('should show loader when async btn is clicked', async () => {
    const { getByTestId } = renderCounter();
    const btn = getByTestId('async-btn');
    fireEvent.click(btn);
    const loader = await waitForElement(() => getByTestId('async-loader'));
    expect(loader).not.toBeNull();
  });

  it('should increment after some time when async btn is clicked', async () => {
    const { getByTestId } = renderCounter();
    const btn = getByTestId('async-btn');
    fireEvent.click(btn);

    // wait for loader to show and then be removed
    await waitForElement(() => getByTestId('async-loader'));
    await waitForElementToBeRemoved(() => getByTestId('async-loader'));

    expect(btn).toHaveTextContent('Increment Async');
    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('should raise error when count is 3 and async btn is clicked', async () => {
    const { getByTestId } = renderCounter();

    // first increment to 1 so that the current count is odd
    const incr = getByTestId('incr-btn');
    fireEvent.click(incr);
    fireEvent.click(incr);
    fireEvent.click(incr);

    const btn = getByTestId('async-btn');
    fireEvent.click(btn);

    // wait for loader to show and then be removed
    await waitForElement(() => getByTestId('async-loader'));
    await waitForElementToBeRemoved(() => getByTestId('async-loader'));

    expect(btn).toHaveTextContent('Increment Async');
    expect(getByTestId('error')).toHaveTextContent('bwahh!!');
  });

  it('should render the defualt state of the ui correctly', () => {
    const { container } = renderCounter();
    expect(container.firstChild).toMatchSnapshot();
  });
});
