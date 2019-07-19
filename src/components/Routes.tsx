import React from 'react';
import { Switch, Route } from 'react-router';
import { AppLayout } from './layouts';
import { Home } from './home';
import { Counter } from './counter';

export default () => (
  <AppLayout>
    <Switch>
      <Route path={COUNTER} component={Counter} />
      <Route path={HOME} component={Home} />
    </Switch>
  </AppLayout>
);

export const HOME = '/';
export const COUNTER = '/counter';
