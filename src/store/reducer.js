export default ( state = [], action ) => {
	switch(action.type){
		case 'NICE':
			return action.list
		default:
			return state
	}
};