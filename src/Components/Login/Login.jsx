import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { CreateField, Element } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import c from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
   const Input = Element('input')
    return (
        <form onSubmit={props.handleSubmit}>
           {CreateField('Login', 'email', Input, [required], 'text')}
           {CreateField('Password', 'password', Input, [required], 'password')}
           {CreateField(null, 'rememberMe', Input, null, 'checkbox', "remember me")}
            
            {props.captcha && <div>
                <img src={props.captcha} alt='captcha'/>
                {CreateField('Symbols from image', 'captcha', Input, [required], 'text')}
                </div>}
           

            {props.error && <div className={c.formSummaryError}>
                        {props.error}
               </div>}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login})(Login)