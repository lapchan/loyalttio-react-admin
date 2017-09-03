import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'

const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';

//action
export function getMerchantsCustomersSuccess(customers){
	return {
		type: GET_CUSTOMERS_SUCCESS,
		customers
	}
}

export function getMerchantsCustomers() {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_customers', {user_id: skygear._auth._user._id}).then( 
        response => {
          console.log(response);
          dispatch(getMerchantsCustomersSuccess({list: [response[0]]}));
        }, 
        error => {
          console.error(error);
          reject(error);
        }
      )
    });
	}
}

//reducer
export default function customers(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_CUSTOMERS_SUCCESS:
      return  Object.assign({}, state, action.customers);
    default:
  		return state;
	}
}
