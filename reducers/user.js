/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule user
 */

import {
  USER_AUTH, RECEIVE_ME, USER_SIGNUP, USER_ME_UPDATE
} from '../actions';

const initialState = {
	_id: '23k3kl23kl23kl23j',
	name:'Admin User',
	avatar:'/dist/images/avatar.png',
	username:'@adminuser',
	email:'info@lightsinthesky.io'
};

export default function user(state = initialState, action) {
	console.log("/reducer/user: ", action)
	switch (action.type) {
		case USER_AUTH:
			return Object.assign({}, state, action.res);
		case RECEIVE_ME:
			return Object.assign({}, state, action.res.data);
		case USER_SIGNUP:
			return state;
		case USER_ME_UPDATE:
			return Object.assign({}, state, action.res.data);
		default:
  		return state;
	}
}