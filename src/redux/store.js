import { createStore, combineReducers } from 'redux';
import { postReducer, commentReducer } from './reducers';

const store = createStore(combineReducers({post: postReducer, comment: commentReducer}));

export default store;
