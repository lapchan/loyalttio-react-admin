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
import ledgers from '../objects/ledgers/api';


export default {
	router: routerStateReducer,
	app,
	user, 
	customers,
	products,
	stores,
	employees,
	ledgers
}