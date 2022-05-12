// import { useStateValue } from './StateProvider';
import Chat from './Chat';
import Login from './Login';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const contacts = [
    {
        userId: 1,
        name: "Abel",
        image: "https://avatars.dicebear.com/api/male/235.svg",
        username: "abel",
        password: 111,
        messages: [{ msgId: 1, name: "abel", time: new Date(), message: "hey" }]
    },
    {
        userId: 2,
        name: "Peter",
        image: "https://avatars.dicebear.com/api/male/345.svg",
        username: "peter",
        password: 222,
        messages: [{ msgId: 1, name: "peter", time: new Date(), message: "Hello" }]
    },
    {
        userId: 3,
        name: "Sarah",
        image: "https://avatars.dicebear.com/api/female/235.svg",
        username: "sarah",
        password: 333,
        messages: [{ msgId: 1, name: "sarah", time: new Date(), message: "hi" }]
    },
];


function App() {
    const [user, setUser] = useState({});
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [currentMessages, setCurrentMessages] = useState([]);
    const [person, setPerson] = useState({});
    const [searchedContact, setSearchedContact] = useState([]);
    console.log(user);

    useEffect(() => {
        const currContact = contacts.find((contact) => contact.userId === person.userId);
        console.log(currContact);
        setCurrentMessages((currContact && currContact.messages) || []);
        filterContacts(contacts, search);
    }, [user, contacts, search]);

    // console.log(currentMessages);
    const filterContacts = (contacts, search) => {
        const result = contacts.filter(contact => {
            return !search || contact.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedContact(result);
    };

    // const sendMessage = () => {
    //     const index = contacts.findIndex(contact => contact.userId === user.userId);
    //     // const sender = contacts[index - 1].messages;
    //     const length = currentMessages.length - 1;
    //     contacts[person.userId].messages.push({ id: length + 1, sender: person.username, message: message, time: new Date().toLocaleDateString() });
    //     setCurrentMessages([...currentMessages, message]);
    //     setMessage('');
    // };

    return (
        <div className="app">
            {/* {
                !user ? <Login contacts={contacts} setUser={setUser} /> :
                    <div className="app_body">
                        <Sidebar user={user} search={search} setSearch={setSearch} contacts={contacts} setPerson={setPerson} searchedContact={searchedContact} messages={currentMessages} filterContacts={filterContacts} />
                        <Chat user={user} message={message} setMessage={setMessage} setPerson={setPerson} person={person} currentMessages={currentMessages} setCurrentMessages={setCurrentMessages} contacts={contacts} />
                    </div>
            } */}
            {!user ?
                <Login contacts={contacts} setUser={setUser} /> :
                <Router>
                    <div className="app_body">
                        <Sidebar user={user} search={search} setSearch={setSearch} contacts={contacts} setPerson={setPerson} searchedContact={searchedContact} messages={currentMessages} filterContacts={filterContacts} />
                        <Switch>
                            <Route path="/chat/:userId">
                                <Chat user={user} message={message} setMessage={setMessage} setPerson={setPerson} person={person} currentMessages={currentMessages} setCurrentMessages={setCurrentMessages} contacts={contacts} />
                            </Route>
                            <Route path="/">
                                <Chat user={user} message={message} setMessage={setMessage} setPerson={setPerson} person={person} currentMessages={currentMessages} setCurrentMessages={setCurrentMessages} contacts={contacts} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            }
        </div>
    );
}

export default App;





