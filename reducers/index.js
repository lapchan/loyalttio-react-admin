import { routerStateReducer } from 'redux-react-router';
import { combineReducers } from 'redux';

// Outlet reducers

import ReduxOutlet from '../outlets/ReduxOutlet';
import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

// custom reducers
import app from './app';
import user from './user';
import customers from '../objects/customers/api';
import products from '../objects/products/api';
import stores from '../objects/stores/api';
import employees from '../objects/employees/api';
import sales_orders from '../objects/sales_orders/api';

import initialState from './initialState';

// outlets

const boards = LocalReduxOutlet('board').makeReducer(initialState.boards);
const pins = LocalReduxOutlet('pin').makeReducer(initialState.pins);
const notes = LocalReduxOutlet('note').makeReducer(initialState.notes);
const messages = LocalReduxOutlet('messages').makeReducer(initialState.messages);
const emails = LocalReduxOutlet('emails').makeReducer(initialState.emails);

export default {
	router: routerStateReducer,
	app,
	boards,
	pins,
	notes,
	messages,
	emails,
	user, 
	customers,
	products,
	stores,
	employees,
	sales_orders
}