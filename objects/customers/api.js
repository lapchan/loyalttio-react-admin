import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';

//action
export function getMerchantsCustomersSuccess(customers){
  console.log(customers);
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
          var type = response["result"]["meta"]["type"]          
          dispatch(getMerchantsCustomersSuccess({list: APIUtils.recordstoArray(response["result"][type])}));
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
