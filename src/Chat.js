import React, { useState, useEffect, useRef } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import { useParams } from 'react-router-dom';

function Chat({ user, currentMessages, contacts, setCurrentMessages }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const userId = window.location.href.slice(-1);
    const [username, setUsername] = useState("");

    // const [{user}, dispatch] = useStateValue();
    const contactSelected = contacts.find(contact => contact.userId === userId);
    console.log(contactSelected);
    console.log(userId, contacts[userId - 1]);
    useEffect(() => {
        if (userId) {
            const currentUser = contacts[userId - 1];

            // setUsername(currentUser.name);
            console.log(currentUser);

            setMessages(currentUser.messages);
        }
    }, [userId]);


    const sendMessage = (e) => {
        e.preventDefault();
        setCurrentMessages([...currentMessages, input]);
        contacts[userId - 1].messages.push({ message: input });
        setMessages([...messages, input]);

        setInput("");
    };

    console.log(currentMessages);
    return (
        <div className='chat'>
            <div className='chat_header'>
                {/* <Avatar src={`${contacts[userId - 1].image}`} /> */}
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'>{username}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            currentMessages[currentMessages.length - 1]?.time
                        ).toUTCString()}
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className='chat_body'>
                {messages
                    // .sort((a, b) => a.time.getTime() - b.time.getTime())
                    .map((message, i) => (
                        <p className={`chat_message ${message.name !== user.username && 'chat_receiver'}`}>
                            <span className="chat_name">{user?.name}</span>
                            {message.message}
                            <span className="chat_timestemp">{new Date().toLocaleString()}</span>
                        </p >
                    ))
                }
            </div>

            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}


















// import { Avatar } from '@material-ui/core';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './Chat.css';
// // import { useStateValue } from "./StateProvider";


// function Chat({ user, message, contacts, setMessage, currentMessages, sendMessage, setCurrentMessages, setPerson, person }) {
//     // const [person, setPerson] = useState({});

//     const { userId } = useParams();
//     console.log(userId);
//     useEffect(() => {
//         if (userId) {
//             // setPerson(contacts[userId - 1])
//             setPerson(contacts[userId - 1]);

//             setCurrentMessages(person.messages);
//         }
//     }, [userId, contacts]);

//     // const sendMessage = (e) => {
//     //     e.preventDefault();
//     //     alert('Hi');
//     //     currentMessages.push({
//     //         id: person.messages.length,
//     //         message: message,
//     //         time: new Date().toLocaleTimeString(),
//     //     });

//     //     setMessage('');
//     // };

//     function handleKeyDown(e) {
//         if (e.key === 'Enter' && message) {
//             sendMessage();
//         }
//     }

//     console.log(person);

//     return (
//         <div className="chat">
//             <div className="chat_header">
//                 <Avatar src={`${person?.image}`} />
//                 <div className="chat_headerInfo">
//                     <h3 className="chat_room-name">{person.name}</h3>
//                     {/* <span className="chat-room-last-seen">{person?.messages.slice(-1).time}</span> */}
//                 </div>
//                 <div className="chat_body">
//                     <div className="chat__messages">
//                         <p className={`message ${!person.username && 'chat_receiver'}`}>
//                             <span className="chat_name">Name</span>
//                             {currentMessages}
//                             <span className="time_timestemp">{new Date().toLocaleString()}</span>
//                         </p>
//                         {/* {currentMessages.sort((a, b) => a.time - b.time)} */}
//                     </div>
//                 </div>
//                 <div className="chat_footer">
//                     <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message" onKeyDown={handleKeyDown} />
//                     <button type="submit" onClick={sendMessage}>Send message</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Chat;
