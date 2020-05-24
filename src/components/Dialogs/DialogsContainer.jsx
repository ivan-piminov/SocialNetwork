import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//         (store) => {
//             let state = store.getState().dialogsPage;
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             };
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             };
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}/>
//         }
//     }</StoreContext.Consumer>
// };

let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,

    }
};

let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageBody:(body)=> {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=> {
            dispatch(sendMessageCreator())
        }
    }
};


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);




