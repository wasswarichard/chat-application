import {createStore} from "redux";
import reducer from "../reducer/reducer";
const initialState = {
    name: 'test',
    room: 'test',
}
const store = createStore(reducer, initialState);
export default store;