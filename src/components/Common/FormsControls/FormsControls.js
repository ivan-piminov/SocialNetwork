import React from "react";
import b from './FormsControls.module.css'
import {Field} from "redux-form";


export const FormControl = ({input,meta:{touched,error},children})=>{
    const hasError = touched && error;
    return(
        <div className={b.formControl+' '+ (hasError ? b.error :'') }>
            <div>
                {children}
            </div>
            {hasError &&<span>{error}</span>}
        </div>
    )
};

export const Textarea = (props)=>{
    const {input,meta,child,...restProps}=props;
    return <FormControl {...props}> <textarea className={b.textAreaStyle} {...input} {...restProps}/></FormControl>
};
export const Input = (props)=>{
    const {input,meta,child,...restProps}=props;
    return <FormControl {...props}> <input className={b.inputStyle} {...input} {...restProps}/></FormControl>
};

export const createField =(placeholder, name,validators,component, props={}, text="")=>(
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />{text}
    </div>
);

