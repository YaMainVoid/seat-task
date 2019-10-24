export default function currentDragComponent(state = {}, action) {
    if (action.type === 'SET_DRAG_COMPONENT') {
        return action.info;
    }

    if (action.type === 'RM_DRAG_COMPONENT') {
        return {};
    }

    return state;
}