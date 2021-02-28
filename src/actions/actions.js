import * as actions from "../actionTypes/actionTypes";
export const messageAdded = description => ({
    type: actions.LOGIN_USER,
    payload: {
       description
    }
});