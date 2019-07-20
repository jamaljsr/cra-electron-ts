import * as React from 'react';
import { Alert, Button, Icon } from 'antd';
import { useStoreState, useStoreActions } from '../../store';
import { useAsyncCallback } from 'react-async-hook';
import styles from './Counter.module.less';

const Counter = () => {
  const { count } = useStoreState(s => s.counter);
  const { increment, decrement, incrementIfOdd, incrementAsync } = useStoreActions(
    a => a.counter,
  );
  const { execute: incrementAsyncCb, loading, error } = useAsyncCallback(() =>
    incrementAsync(),
  );
  const [incrementCb, decrementCb, incrementIfOddCb] = [
    increment,
    decrement,
    incrementIfOdd,
  ].map(x => () => x());

  return (
    <div className={styles.body}>
      {error && <Alert message={error.message} type="error" data-tid="error" />}
      <h1 className={styles.counter} data-tid="counter">
        {loading ? <Icon type="loading" data-tid="async-loader" /> : count}
      </h1>
      <div className={styles.btnGroup}>
        <Button
          type="primary"
          icon="plus"
          className={styles.btn}
          data-tid="incr-btn"
          onClick={incrementCb}
        >
          Increment
        </Button>
        <Button
          type="primary"
          icon="minus"
          className={styles.btn}
          data-tid="decr-btn"
          onClick={decrementCb}
        >
          Decrement
        </Button>
        <Button
          type="primary"
          icon="question"
          className={styles.btn}
          data-tid="odd-btn"
          onClick={incrementIfOddCb}
        >
          Increment Odd
        </Button>
        <Button
          type="primary"
          icon="retweet"
          className={styles.btn}
          data-tid="async-btn"
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
