export default function inputsStore(state = [], action) {
    if (action.type === 'ADD_INPUT') {
        let { name, value } = action.info

        return [...state, {
                name,
                value
            }
        ]
    }

    if (action.type === 'UPDATE_INPUT') {
        let { name, value } = action.info

        return state.map(obj => {
            if (name === obj.name) {
                return {
                    name,
                    value
                }
            } else {
                return obj;
            }
        })
    }

    return state;
}