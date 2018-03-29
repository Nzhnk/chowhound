export default ( state = [], action ) => {
	switch(action.type){
		case 'GET_DATA':
			return action.dataList;
		default:
			return state
	}
};