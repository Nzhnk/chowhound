const defaultState = [
	
];

export default ( state = defaultState, action ) => {
	switch( action.type ){
		case 'NICE':
			return [
				...state,
	        	...action.list
			];
		case 'DELETE':
		    return state.filter((item) => item._id !== action._id);
		case 'EDITLIST':
		    return state.filter((item) => item._id == action._id);
		    return state.filter((item) => {
		    	if(item.key !== action.id) {
		    		return item;
		    	}
		    });
		case 'GET_DATA':
			return action.dataList;
		case 'SEARCH_REANDER':
			return action.search_data;
		default:
			return state;
	}
};


