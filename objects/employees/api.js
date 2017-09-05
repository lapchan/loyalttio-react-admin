import skygear from 'skygear';
import baseInitialState from '../../reducers/initialState'
import APIUtils from '../../utils/api'

const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';

//action
export function getMerchantsEmployeesSuccess(employees){
  console.log(employees);
	return {
		type: GET_EMPLOYEES_SUCCESS,
		employees
	}
}

export function getMerchantsEmployees() {
	return dispatch => {
		return new Promise((resolve, reject) => {
      skygear.lambda('get_merchants_employees', {user_id: skygear._auth._user._id}).then( 
        response => {
          console.log(response);
          var type = response["result"]["meta"]["type"]          
          dispatch(getMerchantsEmployeesSuccess({list: APIUtils.recordstoArray(response["result"][type])}));
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
export default function employees(state = Object.assign({}, baseInitialState, {list: []}), action) {
	switch (action.type) {
		case GET_EMPLOYEES_SUCCESS:
      return  Object.assign({}, state, action.employees);
    default:
  		return state;
	}
}
