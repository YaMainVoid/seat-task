import { RM_COMPONENT, 
         ADD_COMPONENT, 
         ADD_INPUT, 
         UPDATE_INPUT, 
         SET_DRAG_COMPONENT, 
         RM_DRAG_COMPONENT,
         DATA_SENDED_SUCCESSFUL,
         GET_ERRORS,
         DATA_SENDED_SUCCESSFUL_MODAL,
         DATA_SENDED_UNSECCESSFUL_MODAL,
         DATA_HAS_SANDED_MODAL,
         RESET_MODAL } from '../actions';
import axios from 'axios';

const SERVER_DOMAIN='http://localhost:1234';

export const addComponent = info => dispatch => {
    dispatch(ADD_COMPONENT(info));
};

export const rmComponent = id => dispatch => {
    dispatch(RM_COMPONENT(id));
};

export const addInput = info => dispatch => {
    dispatch(ADD_INPUT(info));
};

export const updateInput = info => dispatch => {
    dispatch(UPDATE_INPUT(info));
};

export const setDrag = info => dispatch => {
    dispatch(SET_DRAG_COMPONENT(info));
};

export const rmDrag = () => dispatch => {
    dispatch(RM_DRAG_COMPONENT());
};

export const resetModal = () => dispatch => {
    dispatch(RESET_MODAL());
};

export const sendData = data => dispatch => {
    dispatch(DATA_HAS_SANDED_MODAL({
        message: 'SENDING',
        state: 'sanding'
    }))
    axios.post(SERVER_DOMAIN + '/api/admin/constructor/components_data', data)
        .then(res => { 
            dispatch(DATA_SENDED_SUCCESSFUL());
            setTimeout(() => dispatch(RESET_MODAL()), 2000);
            dispatch(DATA_SENDED_SUCCESSFUL_MODAL({
                message: 'SAVE WAS SUCCESSFUL',
                state: 'success'
            }))
        })
        .catch(err => {
            dispatch(GET_ERRORS({
                error: err
            }))
            setTimeout(() => dispatch(RESET_MODAL()), 2000);
            dispatch(DATA_SENDED_UNSECCESSFUL_MODAL({
                message: 'SAVE WAS UNSUCCESSFUL',
                state: 'failed'
            }))
        });
};

