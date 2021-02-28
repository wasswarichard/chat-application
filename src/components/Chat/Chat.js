import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar'
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import config from "../../Helpers/config.json"
import {connect} from "react-redux";
let socket;

const Chat = (props) => {
    console.log(props);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    let [messages, setMessages] = useState([]);
    useEffect(()=> {
        socket = io(config.apiUrl);
        setName(props.name);
        setRoom(props.room);
        socket.emit('join', {name: props.name, room: props.room}, () => {});
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [config.apiUrl]);

    useEffect(()=> {
        socket.on('roomData', (message) => {
            const modifiedData = message.messages.map(data => {
                data.text = data.message;
                data.user = data.sent_by;
                return data;
            });
            messages = modifiedData.concat(messages);
        });
        socket.on('message', (message) => {
            setMessages([...messages, message]);

        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message , () => {
                setMessage('');
            });
        }
    };
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}
const mapReduxStoreToProps = (state) => {
    return state
}
export default connect(mapReduxStoreToProps)(Chat);