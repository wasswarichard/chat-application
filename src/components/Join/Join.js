import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import config from "../../Helpers/config.json"
import './Join.css';
// import store from "../../store/store";
// import {loginUser} from "../../actions/actions";
import store from "../../store/store";
import {messageAdded} from "../../actions/actions";
import queryString from "query-string";
import io from "socket.io-client";
// import {useDispatch, useStore} from "react-redux";
import {connect} from "react-redux";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const onsubmit = async () => {
        setError(false);
        setIsLoading(true);
        await axios.post(`${config.apiUrl}/login?name=${name}&room=${room}`)
            .then(response => {
                if(response.data["code"] === 200 ) {
                    props.messageAdded({name, room})
                    // store.dispatch(messageAdded({name, room}));
                    // console.log(store.getState());

                    console.log(props.info)

                    // window.location.href = `/chat`;


                } else {
                    setError(response.data.message);
                }
                setIsLoading(false);
            });
    };
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Real time chat Application</h1>

                    {isLoading && (<div className="loading"><span className="loadingspan" style={{}}>loading..</span></div>)}
                    {error && (<div className="login-error"><span className="error" style={{}}>{error}</span></div>)}

                    <div><input name="name" ref={register({ required: true})} placeholder="username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                    {errors.name && errors.name.type === "required" && <div><span className="error">username is required</span></div>}

                    <div><input name="chatroom"  ref={register({ required: true})} placeholder="chatroom" className="joinInput mt-20" type="text" onChange={(event) =>setRoom(event.target.value)}/></div>
                    {errors.chatroom && errors.chatroom.type === "required" && <div><span className="error">chatroom is required</span></div>}

                    <button className="button mt-20" type="submit"> Login</button>
                    <h3><Link to={`/create`} className="createUser"> Create User Account</Link></h3>
                </div>
            </div>
        </form>
    )
}
const mapDispatchToProps = {messageAdded}
const mapReduxStateToComponent = (state) =>{
    return {info: state}
}
export default connect(mapReduxStateToComponent, mapDispatchToProps)(Join);