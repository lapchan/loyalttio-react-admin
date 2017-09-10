import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_LEDGERS_SUCCESS = 'GET_LEDGERS_SUCCESS';

//action
export function getMerchantsLedgersSuccess(ledgers){
  console.log(ledgers);
	return {
		type: GET_LEDGERS_SUCCESS,
		ledgers
	}
}

export function getMerchantsLedgers(customerID) {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_ledgers', {user_id: skygear._auth._user._id, customer_id: customerID}).then( 
        response => {
          console.log(response);
          var type = response["result"]["meta"]["type"]          
          dispatch(getMerchantsLedgersSuccess({list: APIUtils.recordstoArray(response["result"][type])}));
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
export default function ledgers(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_LEDGERS_SUCCESS:
      return  Object.assign({}, state, action.ledgers);
    default:
  		return state;
	}
}
