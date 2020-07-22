import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import b from "../Common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={b.mainLoginPage}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img alt='captcha error' src={captchaUrl} /> }
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {}) }

            {error && <div className={b.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={b.loginButton}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div className={b.mainLoginPage}>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};
const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    });
export default connect(mapStateToProps, {login})(Login)
