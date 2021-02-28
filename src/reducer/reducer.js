import * as actions from "../actionTypes/actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.MESSAGE_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                }
            ]
        case actions.MESSAGE_REMOVED:
            return state.filter(message => message.id !== action.payload.id );
        case actions.LOGIN_USER:
            console.log(action);
            const data = action.payload.description
            return {...state, ...data }
        default:
            return state;
    }
}

