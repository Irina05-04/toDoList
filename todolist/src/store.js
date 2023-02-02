// import { configureStore } from '@reduxjs/toolkit'
import {combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/task.reducer';
import filterReducer from './reducers/filter.reducer';

const reducer = combineReducers({
    tasks: tasksReducer,
    filters: filterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;