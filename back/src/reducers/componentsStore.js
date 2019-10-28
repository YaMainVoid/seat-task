export default function orderStore(state = [], action) {
    switch(action.type) {
        case 'ADD_COMPONENT': 
            return [...state, action.info];
        case 'RM_COMPONENT': 
            return state.filter(component => component.id != action.id);
        default:
            return state;
    }
}