// /* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */
//
// import { createStore } from 'redux';
// import { combineReducers } from 'redux-immutable';
// import { expect } from 'chai';
// import { describe, it, beforeEach } from 'mocha';
// import dogReducer from '../../client/reducers/dog-reducer';
// import { makeBark } from '../../client/actions/dog-actions';
//
// let store;
//
//
// describe('App State', () => {
//   describe('Dog', () => {
//     beforeEach(() => {
//       store = createStore(combineReducers({
//         dog: dogReducer,
//       }));
//     });
//     describe('makeBark', () => {
//       it('should make hasBarked go from false to true', () => {
//         expect(store.getState().getIn(['dog', 'hasBarked'])).to.be.false;
//         store.dispatch(makeBark());
//         expect(store.getState().getIn(['dog', 'hasBarked'])).to.be.true;
//       });
//     });
//   });
// });
"use strict";