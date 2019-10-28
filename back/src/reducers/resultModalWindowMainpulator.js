// state may contains: '', 'sending', 'success', 'failed' 
let initialState = {
    message: '',
    state: ''
};

export default function resultModalWindowMainpulator(state = initialState, action) {
    switch(action.type) {
        // commented out because sending is rapid
        // case 'DATA_HAS_SANDED_MODAL': 
        //     return action.info;
        case 'DATA_SENDED_SUCCESSFUL_MODAL': 
            return action.info;
        case 'DATA_SENDED_UNSECCESSFUL_MODAL':
            return action.info;
        case 'RESET_MODAL': 
            return initialState;
        default:
            return initialState;
    }
}