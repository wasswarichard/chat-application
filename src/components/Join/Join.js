import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import config from "../../Helpers/config.json"
import './Join.css';
import {UserJoined} from "../../actions/actions";
import {connect} from "react-redux";


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
                    props.UserJoined({name, room});
                    props.history.push('/chat');
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
const mapReduxStateToComponent = (state) =>({
    info : state
});
export default connect(mapReduxStateToComponent, {UserJoined})(Join);
