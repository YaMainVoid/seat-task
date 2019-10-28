export default function inputsStore(state = [], action) {
    switch(action.type) {
        case 'ADD_INPUT':
            return [...state, action.info];
        case 'UPDATE_INPUT':
            return state.map(input => action.info.name === input.name ? action.info : input);
        default:
            return state;
    }
}