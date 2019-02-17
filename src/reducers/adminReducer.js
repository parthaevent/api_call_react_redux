export default function (state ={
	users: [],
	fetching:false,
	fetched: false,
	error: null
}, action){
	switch(action.type){
		case "FETCH_USERS_PENDING":{
			return {...state, fetching: true}
		}
		case "FETCH_USERS_FULFILLED":{
            console.log('HHHH');
			return {...state, fetching: false, fetched: true, users: action.payload}
		}
		case "FETCH_USERS_REJECTED":{
			return {...state, fetching: false, error: action.payload}
		}
	}

	return state;
}
