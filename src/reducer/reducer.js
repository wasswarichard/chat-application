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
            const data =  action.payload.description;
            // const newData =  Array.push.apply(state, data)
            // return [{
            //     ...state,
            //     ...data
            // }]

            console.log(data, state);
            return data.push(state);
        default:
            return state;
    }
}

