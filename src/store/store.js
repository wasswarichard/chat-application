import {createStore, applyMiddleware} from "redux";
import reducer from "../reducer/reducer";
const initialState = {
    name: 'test',
    room: 'test',
}
const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
export default store;