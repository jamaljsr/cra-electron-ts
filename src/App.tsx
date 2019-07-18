import React from 'react';
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

export default App;
