export default ( state = [], action ) => {
	switch(action.type){
<<<<<<< HEAD
		case 'NICE':
			return action.list
=======
		case 'GET_DATA':
			return action.dataList;
>>>>>>> master
		default:
			return state
	}
};