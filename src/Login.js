import React, { useState } from 'react';
// import { actionTypes } from './reducer';
// import { useStateValue } from './StateProvider';
// import { Button } from '@material-ui/core';
import './Login.css';

function Login({ contacts, setUser }) {
    // const [{ }, dispatch] = useStateValue();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!username || !password) return;
        const curUser = contacts.find(contact => contact.username === username);
        // if (curUser.password !== password) alert("Wrong password");
        console.log(curUser);
        if (curUser && curUser.password === password)
            setUser(curUser);
        setUsername('');
        setPassword('');
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="text">Enter Your Login details below ⬇</div>
                <br />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your username..." />
                    <br />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." />
                    <br />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </div>
    );
}

// import { Button } from '@material-ui/core';
// import React from 'react';
// import './Login.css';
// // import {auth,provider} from './firebase';
// import { actionTypes } from './reducer';
// import { useStateValue } from './StateProvider';

// function Login() {
//     const [{ }, dispatch] = useStateValue();
//     const signIn = () => {
//         auth
//             .signInWithPopup(provider)
//             .then((result) => {
//                 dispatch({
//                     type: actionTypes.SET_USER,
//                     user: result.user,
//                 });
//             })
//             .catch((error) => alert(error.message));
//     };
//     return (
//         <div className="login">
//             <div className="login_container">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
//                 <div className="login_text">
//                     <h1>Sign in to Whatsapp</h1>
//                 </div>
//                 <Button type="submit" onClick={signIn}>Sign in With Google</Button>
//             </div>
//         </div>
//     );
// }

export default Login;
