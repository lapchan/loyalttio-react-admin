import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';

//action
export function getMerchantsStoresSuccess(stores){
  console.log(stores);
	return {
		type: GET_STORES_SUCCESS,
		stores
	}
}

export function getMerchantsStores() {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_stores', {user_id: skygear._auth._user._id}).then( 
        response => {
          console.log(response);
          var type = response["result"]["meta"]["type"]          
          dispatch(getMerchantsStoresSuccess({list: APIUtils.recordstoArray(response["result"][type])}));
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
export default function stores(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_STORES_SUCCESS:
      return  Object.assign({}, state, action.stores);
    default:
  		return state;
	}
}
