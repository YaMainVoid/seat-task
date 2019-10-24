export default function orderStore(state = [], action) {
    switch(action.type) {
        case 'ADD_ORDER': 
            return [...state, {
                type: action.payload.type,
                id: action.payload.id,
                cost: action.payload.cost,
                additionalInfo: action.payload.additionalInfo
            }]
            break;
        case 'RM_ORDER':
            return state.filter(order => order.id != action.id)
            break;
        default:
            return state;
    }
}