import * as React from 'react';
import { Alert, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../../store';
import { useAsyncCallback } from 'react-async-hook';
import { HOME } from '../Routes';
import './Counter.less';

const Counter = () => {
  const { count } = useStoreState((s) => s.counter);
  const { increment, decrement, incrementIfOdd, incrementAsync } = useStoreActions(
    (a) => a.counter,
  );
  const { execute: incrementAsyncCb, loading, error } = useAsyncCallback(() =>
    incrementAsync(),
  );
  const [incrementCb, decrementCb, incrementIfOddCb] = [
    increment,
    decrement,
    incrementIfOdd,
  ].map((x) => () => x());

  return (
    <div className="counter-body">
      {error && <Alert message={error.message} type="error" />}
      <div className="back-button" data-tid="backButton">
        <Link to={HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <h1 className="counter" data-tid="counter">
        {count}
      </h1>
      <div className="btn-group">
        <Button type="primary" icon="plus" data-tid="incr-btn" onClick={incrementCb}>
          Increment
        </Button>
        <Button type="primary" icon="minus" data-tid="incr-btn" onClick={decrementCb}>
          Decrement
        </Button>
        <Button
          type="primary"
          icon="question"
          data-tid="incr-btn"
          onClick={incrementIfOddCb}
        >
          Increment Odd
        </Button>
        <Button
          type="primary"
          icon="retweet"
          data-tid="incr-btn"
          onClick={incrementAsyncCb}
          loading={loading}
        >
          Increment Async
        </Button>
      </div>
    </div>
  );
};

export default Counter;
