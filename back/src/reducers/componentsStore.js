export default function orderStore(state = [], action) {
    if (action.type === "ADD_COMPONENT") {
        let { id, type, width, height, top, left, spec } = action.info

        const obj = {
            id,
            type,
            width,
            height,
            top,
            left,
            spec
        }
        return [...state, obj];
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