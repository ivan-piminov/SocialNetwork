import React, {useEffect} from "react";
import b from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {useDispatch} from "react-redux";
import {getDialogs} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(getDialogs())
    // },[]);


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem  key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={b.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
};
export default Dialogs;






