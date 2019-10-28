let initialState = {
    error: '',
}

export default function serverCommunication(state = initialState, action) {
    switch(action.type) {
        case 'DATA_SENDED_SUCCESSFUL':
            return { ...state, error: '' }
        case 'GET_ERRORS':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}