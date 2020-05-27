import React from "react";
import b from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // };
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // };

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={b.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )
};

const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}  />

            </div>
            <div>
                <button> Send</button>
            </div>
        </form>
    )
};
 const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;


