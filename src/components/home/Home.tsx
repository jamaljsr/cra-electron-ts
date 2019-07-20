import React, { useState } from 'react';
import { Card, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { COUNTER } from '../Routes';

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClickMe = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {showAlert && (
        <Alert message="Success Tips" type="success" showIcon data-tid="success" />
      )}
      <Card title="Welcome to React App">
        <p>Let&apos;s get you started...</p>
        <p>
          Play with the{' '}
          <Link to={COUNTER} data-tid="counter-link">
            Counter
          </Link>
        </p>
        <p>
          <Button data-tid="me-btn" onClick={handleClickMe}>
            Click Me!
          </Button>
        </p>
      </Card>
    </div>
  );
};

export default Home;
