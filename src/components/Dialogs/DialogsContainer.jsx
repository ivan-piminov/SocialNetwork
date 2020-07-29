import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage
        // messages: state.dialogsPage.messages,
        // dialogs: state.dialogsPage.dialogs,
        // currentId: state.dialogsPage.currentDialogId
    }
};

const mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage: (newMessageBody)=> {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);




