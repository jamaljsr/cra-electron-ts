import { Action, action, Thunk, thunk } from 'easy-peasy';

export interface CounterModel {
  count: number;
  increment: Action<CounterModel>;
  decrement: Action<CounterModel>;
  incrementIfOdd: Action<CounterModel>;
  incrementAsync: Thunk<CounterModel, number | void>;
}

const counterModel: CounterModel = {
  // state vars
  count: 0,
  // reducer actions (mutations allowed thx to immer)
  increment: action((state) => {
    state.count += state.count;
  }),
  decrement: action((state) => {
    state.count -= state.count;
  }),
  incrementIfOdd: action((state) => {
    if (state.count % 2 !== 0) {
      state.count += 2;
    }
  }),
  incrementAsync: thunk(async (actions, payload, { getState }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (getState().count !== 3) {
          actions.increment();
          resolve();
        } else {
          reject(new Error('bwahh!!'));
        }
      }, payload || 1000);
    });
  }),
};

export default counterModel;
