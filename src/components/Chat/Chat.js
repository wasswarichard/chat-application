import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar'
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import config from "../../Helpers/config.json"
let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    let [messages, setMessages] = useState([]);
    useEffect(()=> {
        console.log(location);
        const {name, room} = queryString.parse(location.search);
        socket = io(config.apiUrl);
        setName(name);
        setRoom(room);
        socket.emit('join', {name, room}, () => {
            
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [config.apiUrl, location.search]);

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

export default Chat;