import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { COUNTER } from '../Routes';

const Home = () => {
  return (
    <div>
      <Card title="Welcome to React App">
        <p>Let&apos;s get you started...</p>
        <p>
          Play with the <Link to={COUNTER}>Counter</Link>
        </p>
      </Card>
    </div>
  );
};

export default Home;
