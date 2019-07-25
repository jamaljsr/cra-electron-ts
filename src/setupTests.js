import 'react-i18next';
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { configure } from '@testing-library/react';

// mock the i18n library so that calls to t() always returns the key passed into the first argument
// Ex: t('sample.locale.key') will return 'sample.locale.key'
jest.mock('react-i18next', () => ({
  useTranslation: k => [k, {}] && { t: k => k, i18n: {} },
}));

configure({ testIdAttribute: 'data-tid' });

// FIXME Remove when we upgrade to React >= 16.9
// see https://github.com/testing-library/react-testing-library/issues/281#issuecomment-507584839
const originalConsoleError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalConsoleError(...args);
};
