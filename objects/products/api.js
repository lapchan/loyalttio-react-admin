import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

//action
export function getMerchantsProductsSuccess(products){
  console.log(products);
	return {
		type: GET_PRODUCTS_SUCCESS,
		products
	}
}

export function getMerchantsProducts() {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_products', {user_id: skygear._auth._user._id}).then( 
        response => {
          console.log(response);
          dispatch(getMerchantsProductsSuccess({list: APIUtils.recordstoArray(response)}));
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
export default function products(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
      return  Object.assign({}, state, action.products);
    default:
  		return state;
	}
}
