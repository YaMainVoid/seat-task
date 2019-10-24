export const ADD_ORDER = payload => ({
    type: 'ADD_ORDER',
    payload
})

export const RM_ORDER = id => ({
    type: 'RM_ORDER',
    id
})

export const GET_ERRORS = payload => ({
    type: 'GET_ERRORS',
    payload
})

export const DATA_SENDED_SUCCESSFUL = () => ({
    type: 'DATA_SENDED_SUCCESSFUL',
})

export const ADD_COMPONENTS_ARRAY = payload => ({
    type: 'ADD_COMPONENTS_ARRAY',
    payload
})