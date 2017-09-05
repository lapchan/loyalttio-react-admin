import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_SALES_ORDERS_SUCCESS = 'GET_SALES_ORDERS_SUCCESS';

//action
export function getMerchantsSalesOrdersSuccess(sales_orders){
  console.log(sales_orders);
	return {
		type: GET_SALES_ORDERS_SUCCESS,
		sales_orders
	}
}

export function getMerchantsSalesOrders() {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_sales_orders', {user_id: skygear._auth._user._id}).then( 
        response => {
          console.log(response);
          var type = response["result"]["meta"]["type"]          
          dispatch(getMerchantsSalesOrdersSuccess({list: APIUtils.recordstoArray(response["result"][type])}));
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
export default function sales_orders(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_SALES_ORDERS_SUCCESS:
      return  Object.assign({}, state, action.sales_orders);
    default:
  		return state;
	}
}
