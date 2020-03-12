import React from "react";
import b from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                <div className={b.dialog}>
                    Olga
                </div>
                <div className={b.dialog +' '+ b.active}>
                    Anton
                </div>
                <div className={b.dialog}>
                    Vadim
                </div>
                <div className={b.dialog}>
                    Andrey
                </div>
            </div>
            <div className={b.messages}>
                <div className={b.message}> HI</div>
                <div className={b.message}> What you think about thi music?</div>
                <div className={b.message}> bye-bye </div>
            </div>
        </div>
    )
}
export default Dialogs;