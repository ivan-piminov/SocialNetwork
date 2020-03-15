import React from "react";
import b from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={b.dialog + ' ' + b.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={b.message}> {props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Vadim'},
        {id: 4, name: 'Andrey'}
    ];

    let messages = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'What you think about thi music?'},
        {id: 3, message: 'bye-bye'}
    ];
    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={b.messages}>
                {messagesElements}
            </div>
        </div>

    )
};
export default Dialogs;