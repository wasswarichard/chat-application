import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import CreateUser from "./components/CreateUser/CreateUser";
import {Provider} from "react-redux";
import store from "./store/store";

const  App = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
            <Route path="/create" component={CreateUser}/>
        </Router>
    </Provider>
);
export default App;

