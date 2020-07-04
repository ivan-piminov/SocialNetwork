const SEND_MESSAGE = "socialNetwork/dialogs/SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        default:
            return state
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer