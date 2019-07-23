import React, { useState } from 'react';
import { Card, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { COUNTER } from '../Routes';

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleClickMe = () => setShowAlert(true);

  return (
    <div>
      {showAlert && (
        <Alert message="Success Tips" type="success" showIcon data-tid="success" />
      )}
      <Card title="Welcome to React App">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Play with the{' '}
          <Link to={COUNTER} data-tid="counter-link">
            Counter
          </Link>{' '}
          thing
        </p>
        <p>
          <Button type="primary" data-tid="me-btn" onClick={handleClickMe}>
            Click Me!
          </Button>
        </p>
      </Card>
    </div>
  );
};

export default Home;
