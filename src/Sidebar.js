import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';


function Sidebar({ user, search, setSearch, messages, contacts, searchedContact, filterContacts, setPerson }) {
    // const [{ user }, dispatch] = useStateValue();

    // const maxTs = Math.max(...messages.map(message => message.time.getTime()));
    // const lastMsg = messages.find(message => message.time.getTime() === maxTs);
    // console.log(lastMsg);
    // const truncate = (text, length) => {
    //     return text.length > length ? `${text.substring(0, length)} ...` : text;
    // };

    console.log(user);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={`${user?.image}`} />
            </div>
            <div className="sidebar_search">
                <div className="search_searchContainer">
                    <input type="text" value={search} onChange={setSearch} />
                    <button type="submit" onClick={() => filterContacts(contacts, search)}>Search</button>
                </div>
            </div>
            <div className="sidebar_chats">
                {!search ?
                    contacts.filter(contact => contact.userId !== user.userId).map(contact =>
                        <Link to={`/chat/${contact.userId}`}>
                            <div key={contact.userId} className="sidebarChat" onClick={() => setPerson(contact)}>
                                <Avatar src={`${contact.image}`} />
                                <div className="sidebarChat_info">
                                    <h3 className="avatar-title">{contact.name}</h3>
                                    {/* <span>{lastMsg.time.toLocaleDateString()}</span> */}
                                    <span className="time-mark">04: 52 pm</span>

                                </div>
                            </div>
                        </Link>
                    ) : searchedContact.map(contact =>
                        <Link to={`/chat/${contact.userId}`}>
                            <div key={contact.userId} className="sidebarChat" onClick={() => setPerson(contact)}>
                                <Avatar src={`${contact.image}`} />
                                <div className="sidebarChat_info">
                                    <h3 className="avatar-title">{contact.name}</h3>
                                    <span className="time-mark">time</span>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            {/* <span className="text">{truncate(lastMsg.message, 30)}</span> */}
            {/* <div className="last-msg">
            </div> */}
        </div>
    );
}

export default Sidebar;

