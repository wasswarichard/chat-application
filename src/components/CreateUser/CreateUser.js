import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './CreateUser.css'

const CreateUser = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Create User</h1>
                <div><input placeholder="username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder="chatroom" className="joinInput mt-20" type="text" onChange={(event) =>setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/`}>
                    <button className="button mt-20" type="submit"> Create User</button>
                </Link>
            </div>
        </div>
    )
}
export default CreateUser;