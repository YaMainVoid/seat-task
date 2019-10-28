export default function orderStore(state = [], action) {
    switch(action.type) {
        case 'ADD_ORDER': 
            return [...state, action.payload]
        case 'RM_ORDER':
            return state.filter(order => order.id != action.id)
        default:
            return state;
    }
}