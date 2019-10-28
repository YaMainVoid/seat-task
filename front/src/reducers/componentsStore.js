export default function componentsStore(state = [], action) {
    switch(action.type) {
        case 'ADD_COMPONENTS_ARRAY': 
            return [...action.payload];
        default:
            return state;
    }
}