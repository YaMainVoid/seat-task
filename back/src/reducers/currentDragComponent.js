export default function currentDragComponent(state = {}, action) {
    switch(action.type) {
        case 'SET_DRAG_COMPONENT':
            return action.info;
        case 'RM_DRAG_COMPONENT':
            return {};
        default: 
            return state;
    }
}