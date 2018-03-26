export default ( state = [], action ) => {
	switch(action.type){
		case 'NICE':
			return state;
		default:
			return [];
	}
};