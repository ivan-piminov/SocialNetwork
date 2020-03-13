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
}

const Message = (props)=>{
    return(
        <div className={b.message}> {props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                <DialogItems name='Olga' id="1"/>
                <DialogItems name='Anton' id='2'/>
                <DialogItems name='Vadim' id='3'/>
                <DialogItems name='Andrey' id='4'/>
            </div>
            <div className={b.messages}>
                <Message message="HI"/>
                <Message message="What you think about thi music?"/>
                <Message message="bye-bye"/>
            </div>
        </div>
    )
}
export default Dialogs;