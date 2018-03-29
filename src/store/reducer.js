export default ( state = [], action ) => {
	switch(action.type){
		case 'NICE':
		return [
			...state,
        	...action.list
		];
		case 'DELETE':
		    return state.filter((item) => item._id !== action._id);
		case 'EDITLIST':
		    return state.filter((item) => item._id == action._id);
		case 'GET_DATA':
			return action.dataList;
		default:
			return state;
	}
};


