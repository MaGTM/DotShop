import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../utils/formValidators";
import inputFormWithOutErrorSpan from "../../../common/Forms/inputFormWithOutErrorSpan/inputForm";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../../common/Preloader/Preloader";

let Login = (props) => {

    if(props.isSuccess) {
        return <Redirect to={"/"}/>
    }

    let onLoginFormSubmit = (values) => {
        props.loginUser(values)
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <div className={s.formWrapper}>
                <LoginForm onSubmit={onLoginFormSubmit} loginError={props.loginError} isLoading={props.isLoading}/>
            </div>
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.item}>
                <label htmlFor="username">Username</label>
                <Field
                    name={"username"}
                    id={"username"}
                    type={"text"}
                    validate={[required]}
                    component={inputFormWithOutErrorSpan}/>
            </div>
            <div className={s.item}>
                <label htmlFor="password">Password</label>
                <Field
                    name={"password"}
                    type={"password"}
                    validate={[required]}
                    component={inputFormWithOutErrorSpan}/>
            </div>
            <div className={s.rememberMe}>
                <Field name={"rememberMe"} type={"checkbox"} id={"rememberMe"} component={"input"}/>
                <label htmlFor="rememberMe">
                    <svg width="26.283" height="26.283" viewBox="0 0 26.283 26.283">
                        <path
                            d="M23.467,32H2.816A2.816,2.816,0,0,0,0,34.816V55.467a2.816,2.816,0,0,0,2.816,2.816H23.467a2.816,2.816,0,0,0,2.816-2.816V34.816A2.816,2.816,0,0,0,23.467,32Zm0,23.467H2.816V34.816H23.467Z"
                            transform="translate(0 -32)" fill="#270949"/>
                        <path
                            className={s.checkedArrow}
                            d="M23.467,32H2.816A2.816,2.816,0,0,0,0,34.816V55.467a2.816,2.816,0,0,0,2.816,2.816H23.467a2.816,2.816,0,0,0,2.816-2.816V34.816A2.816,2.816,0,0,0,23.467,32Zm0,23.467H2.816V34.816H23.467Zm-2.1-14.181L11.238,51.33a.7.7,0,0,1-1,0L4.916,45.957a.7.7,0,0,1,0-1l1.333-1.322a.7.7,0,0,1,1,0l3.508,3.536,8.293-8.226a.7.7,0,0,1,1,0l1.322,1.333a.7.7,0,0,1,0,1Z"
                            transform="translate(0 -32)"/>
                    </svg>
                </label>
                <p>Remember me</p>
            </div>
            {props.error &&
            <div className={s.loginError}>
                <p>{props.error}</p>
            </div>
            }
            <button type={"submit"} disabled={props.isLoading}>
                {props.isLoading ? <Preloader
                        width={60}
                        height={60}
                        strokeWidth={5}
                        radius={20}
                        translate={"translate(-70%, -67%)"}
                        strokeDasharray={125}
                        strokeDashoffset={125}/>
                    : "Login"}
            </button>
            <NavLink to={"/"}>Forget Password?</NavLink>
        </form>
    )
}

LoginForm = reduxForm({form: "loginForm"})(LoginForm)

export default Login