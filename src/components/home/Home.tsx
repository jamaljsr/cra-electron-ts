import React, { useState } from 'react';
import { Card, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { COUNTER } from '../Routes';

const Home = () => {
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(false);
  const handleClickMe = () => setShowAlert(true);

  return (
    <div>
      {showAlert && (
        <Alert message="Success Tips" type="success" showIcon data-tid="success" />
      )}
      <Card title={t('home.card-title')}>
        <p>{t('home.card-description')}</p>
        <p>
          Play with the{' '}
          <Link to={COUNTER} data-tid="counter-link">
            Counter
          </Link>{' '}
          thing
        </p>
        <p>
          <Button type="primary" data-tid="me-btn" onClick={handleClickMe}>
            {t('home.me-btn')}
          </Button>
        </p>
      </Card>
    </div>
  );
};

export default Home;
