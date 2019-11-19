import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const URL_BACK = 'localhost:5000';
    useEffect(()=>{
        //location.search va a representar las variables que estoy mandando por la URL
        const {name, room} = queryString.parse(window.location.search);

        socket = io(URL_BACK);

        setName(name);
        setRoom(room);
        
        socket.emit('join',{name:name, room:room},()=>{
            
        });
        return () =>{
            socket.emit('disconect');
            socket.off();
        }
    },[URL_BACK,window.location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            //obtengo todo los mensajes y le estoy añadiendo un ultio mensaje
            setMessages([...messages,message]);
        },[messages]);
    })
    const sendMessage=(event)=>{
        event.preventDefault();
        if (message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    }
    console.log('ultimo mensaje enviado: ', message);
    console.log('lista de mensajitos ', messages);
    
    
    return (
        <input
            value={message}
            onChange={(event)=> setMessage(event.target.value)}
            onKeyPress={(event)=>event.key==='Enter' ? sendMessage(event):null}
        />
    )
}

export default Chat;