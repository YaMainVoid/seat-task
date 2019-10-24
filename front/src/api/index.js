import axios from 'axios';
import { ADD_ORDER,
         RM_ORDER,
         ADD_COMPONENTS_ARRAY,
         GET_ERRORS,
         DATA_SENDED_SUCCESSFUL } from '../actions';

const SERVER_DOMAIN='http://localhost:1234';

export const addOrder = payload => dispatch => {
    dispatch(ADD_ORDER(payload))
}

export const rmOrder = id => dispatch => {
    dispatch(RM_ORDER(id))
}

export const fetchComponents = () => dispatch => {
    axios.get(SERVER_DOMAIN + '/api/components_data')
        .then(res => {
            dispatch(ADD_COMPONENTS_ARRAY(res.data));
        })
        .catch(err => {
            dispatch(GET_ERRORS({
                error: err
            }));
        })
}

export const sendOrders = data => dispatch => {
    axios.post(SERVER_DOMAIN + '/api/order', data)
        .then(res => {
            dispatch(DATA_SENDED_SUCCESSFUL());
        })
        .catch(err => {
            dispatch(GET_ERRORS({
                error: err
            }))
        })
}