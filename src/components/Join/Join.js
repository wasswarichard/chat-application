import React, {useState} from 'react';
import {Link} from "react-router-dom";
import config from "../../Helpers/config.json"
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Real time chat Application</h1>
                <div><input placeholder="username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder="chatroom" className="joinInput mt-20" type="text" onChange={(event) =>setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit"> Login</button>
                </Link>
                <h3><Link to={`/create`} className="createUser"> Create User Account</Link></h3>
            </div>
        </div>
    )
}
export default Join;