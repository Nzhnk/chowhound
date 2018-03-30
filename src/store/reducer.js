export default ( state = [], action ) => {
	switch(action.type){
		case 'NICE':
		return [
			...state,
        	...action.list
		];
		case 'DELETE':
		    return state.filter((item) => item.id !== action.id);
		case 'GET_DATA':
			return action.dataList;
		default:
			return state;
	}
};


