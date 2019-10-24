export const RM_COMPONENT = id => ({
    type: 'RM_COMPONENT',
    id
});

export const ADD_COMPONENT = info => ({
    type: 'ADD_COMPONENT',
    info
});

export const SET_DRAG_COMPONENT = info => ({
    type: 'SET_DRAG_COMPONENT',
    info
})

export const RM_DRAG_COMPONENT = () => ({
    type: 'RM_DRAG_COMPONENT',
})

export const UPDATE_INPUT = info => ({
    type: 'UPDATE_INPUT',
    info
})

export const ADD_INPUT = info => ({
    type: 'ADD_INPUT',
    info
})

export const GET_ERRORS = info => ({
    type: 'GET_ERRORS',
    info
})

export const DATA_SENDED_SUCCESSFUL = () => ({
    type: 'DATA_SENDED_SUCCESSFUL'
})

export const DATA_HAS_SANDED_MODAL = info => ({
    type: 'DATA_HAS_SANDED_MODAL',
    info
})

export const DATA_SENDED_SUCCESSFUL_MODAL = info => ({
    type: 'DATA_SENDED_SUCCESSFUL_MODAL',
    info
})

export const DATA_SENDED_UNSECCESSFUL_MODAL = info => ({
    type: 'DATA_SENDED_UNSECCESSFUL_MODAL',
    info
})

export const RESET_MODAL = () => ({
    type: 'RESET_MODAL',
})
