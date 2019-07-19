import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppLayout from './layouts/AppLayout';
// import DemoForm from './components/DemoForm';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
};

export default hot(App);
