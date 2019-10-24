// state may contains: '', 'sending', 'success', 'failed' 
let initialState = {
    message: '',
    state: ''
};

export default function resultModalWindowMainpulator(state = initialState, action) {
    switch(action.type) {
        // case 'DATA_HAS_SANDED_MODAL': 
        //     return {
        //         message: action.info.message,
        //         state: 'sending'
        //     }
        //     break;
        case 'DATA_SENDED_SUCCESSFUL_MODAL': 
            return {
                message: action.info.message,
                state: 'success'
            }
            break;
        case 'DATA_SENDED_UNSECCESSFUL_MODAL':
            return {
                message: action.info.message,
                state: 'failed'
            }
            break;
        case 'RESET_MODAL': 
            return {
                message: '',
                state: ''
            }
            break;
        default:
            return {
                message: '',
                state: ''
            }
            break;
    }
}