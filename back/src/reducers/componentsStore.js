export default function orderStore(state = [], action) {
    if (action.type === "ADD_COMPONENT") {
        return [...state, action.info];
    }

    if (action.type === "RM_COMPONENT") {
        let arr = state.filter(component => {
            if (component.id !== action.id) {
                return component;
            }
        })

        return arr
    }

    return state;
}