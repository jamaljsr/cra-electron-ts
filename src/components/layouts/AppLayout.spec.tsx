import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { createReduxStore } from '../../store';
import AppLayout from './AppLayout';

describe('AppLayout component', () => {
  const history = createMemoryHistory();
  const renderComponent = () => {
    const store = createReduxStore();
    const app = (
      <StoreProvider store={store}>
        <Provider store={store as any}>
          <ConnectedRouter history={history}>
            <AppLayout>
              <p data-tid="hello">Hello World!</p>
            </AppLayout>
          </ConnectedRouter>
        </Provider>
      </StoreProvider>
    );

    return render(app);
  };

  it('should contain a "Hello World!" text', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('hello')).toHaveTextContent('Hello World!');
  });

  it('should contain a collapse trigger', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('trigger')).toBeTruthy();
  });

  it('should be expanded by default', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('sider')).not.toHaveClass('ant-layout-sider-collapsed');
  });

  it('should collapse menu when trigger clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('trigger'));
    expect(getByTestId('sider')).toHaveClass('ant-layout-sider-collapsed');
  });

  it('should navigate to counter page when Counter link clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.click(getByTestId('nav-counter'));
    expect(history.location.pathname).toEqual('/counter');
  });

  it('should navigate to home page when logo clicked', () => {
    const { getByTestId } = renderComponent();
    // first go to counter page
    fireEvent.click(getByTestId('nav-counter'));
    // then click the logo
    fireEvent.click(getByTestId('logo'));

    expect(history.location.pathname).toEqual('/');
  });
});
