import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hello! How are you?', likesCount: 20},
    {id: 2, message: 'Nice day', likesCount: 0},
    {id: 3, message: 'Go watch football!', likesCount: 15}
];

let messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'What you think about thi music?'},
    {id: 3, message: 'bye-bye'}
];

let dialogs = [
    {id: 1, name: 'Olga'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Vadim'},
    {id: 4, name: 'Andrey'}
];



ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
