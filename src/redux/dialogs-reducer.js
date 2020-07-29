import {dialogsAPI} from "../API/api";

const SEND_MESSAGE = "socialNetwork/dialogs/SEND-MESSAGE";
const GET_DIALOG_SUCCESS = "socialNetwork/dialogs/GET_DIALOG_SUCCESS";

let initialState = {
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
    currentDialogId:null
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        // case GET_DIALOG_SUCCESS:
        //             return {
        //                 ...state,
        //                ...action.payload,
        //             };
        default:
            return state
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
// export const getDialogsSuccess = (dialogs) => ({type: GET_DIALOG_SUCCESS, payload:{dialogs}});
//
// export const getDialogs=()=>(dispatch)=>{
//     dialogsAPI.getDialogs().then(dialogs =>
//     dispatch(getDialogsSuccess(dialogs)))
// };


export default dialogsReducer