const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState ={

    messages: [
    {id: 1, message: 'HI'},
    {id: 2, message: 'What you think about thi music?'},
    {id: 3, message: 'bye-bye'}
],
    dialogs: [
    {id: 1, name: 'Olga'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Vadim'},
    {id: 4, name: 'Andrey'}
],
    newMessageBody: ""
};

const dialogsReducer =(state = initialState,action)=>{


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,
                messages: [...state.messages,{id: 4, message: body}],
                newMessageBody: ""
            };
        default:
            return state
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer