import React from 'react';
import AppLayout from './layouts/AppLayout';
import DemoForm from './components/DemoForm';

const App: React.FC = () => {
  return (
    <AppLayout>
      <DemoForm />
    </AppLayout>
  );
};

export default App;
