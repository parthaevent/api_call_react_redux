import axios from "axios";

export const fetchUsers = () => dispatch => {
	axios.get('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
		})
		.catch((err) => {
			dispatch({type:'FETCH_USERS_REJECTED', payload:err});
		})
}