import React from "react"
import s from "./Register.module.css"
import {Field, formValueSelector, reduxForm} from "redux-form";
import inputForm from "../../../common/Forms/inputForm/inputForm";
import inputFormWithOutErrorSpan from "../../../common/Forms/inputFormWithOutErrorSpan/inputForm";
import {isMatch, maxLength, minLength, required} from "../../../../utils/formValidators";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";

let Register = (props) => {

    if (props.isSuccess) {
        props.setIsSuccessAuth(false)
        return <Redirect to={"/login"}/>
    }

    let onRegisterFormSubmit = (values) => {
        props.createUser(values)
    }

    return (
        <div className={s.wrapper}>
            <h1>Registration</h1>
            <div className={s.formWrapper}>
                <RegisterForm onSubmit={onRegisterFormSubmit} isLoading={props.isLoading}/>
            </div>
        </div>
    )
}

// UserName Validators
let maxLengthUserName = maxLength(18)
let minLengthUserName = minLength(3)

// Password Validators
let minLengthPassword = minLength(6)
let RegisterForm = (props) => {

    let disabled = !props.isUserAgreement || props.isLoading

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.fullName}>
                <div className={s.item}>
                    <label htmlFor={"firstName"}>First Name</label>
                    <Field
                        name={"firstName"}
                        id={"firstName"}
                        type={"text"}
                        validate={[required]}
                        component={inputFormWithOutErrorSpan}/>
                </div>
                <div className={s.item}>
                    <label htmlFor={"lastName"}>Last Name</label>
                    <Field
                        name={"lastName"}
                        id={"lastName"}
                        type={"text"}
                        validate={[required]}
                        component={inputFormWithOutErrorSpan}/>
                </div>
            </div>
            <div className={s.item}>
                <label htmlFor={"username"}>Username</label>
                <Field
                    name={"username"}
                    id={"username"}
                    type={"text"}
                    validate={[required, maxLengthUserName, minLengthUserName]}
                    component={inputForm}/>
            </div>
            <div className={s.item}>
                <label htmlFor={"email"}>E-mail</label>
                <Field
                    name={"email"}
                    id={"email"}
                    type={"text"}
                    validate={[required]}
                    component={inputForm}/>
            </div>
            <div className={s.item}>
                <label htmlFor={"password"}>Password</label>
                <Field
                    name={"password"}
                    id={"password"}
                    type={"password"}
                    validate={[required, minLengthPassword]}
                    component={inputForm}/>
            </div>
            <div className={s.item}>
                <label htmlFor={"repeatPassword"}>Repeat Password</label>
                <Field
                    name={"repeatPassword"}
                    id={"repeatPassword"}
                    type={"password"}
                    validate={[required, isMatch]}
                    component={inputForm}/>
            </div>
            <div className={s.userAgreement}>
                <Field name={"userAgreement"} type={"checkbox"} id={"userAgreement"} component={"input"}/>
                <label htmlFor="userAgreement">
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
                <p>I agree with <a href="/useragreement">User agreement</a></p>
            </div>
            <div className={s.newsAccess}>
                <Field name={"newsAccess"} type={"checkbox"} id={"newsAccess"} component={"input"}/>
                <label htmlFor="newsAccess">
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
                <p>I agree to receive email with latest news and sales from this site</p>
            </div>
            <button type={"submit"} disabled={disabled}>
                {props.isLoading ? <Preloader
                    width={60}
                    height={60}
                    strokeWidth={5}
                    radius={20}
                    translate={"translate(-70%, -67%)"}
                    strokeDasharray={125}
                    strokeDashoffset={125}/>
                : "Register"}
            </button>
            <p>Already have an account? <NavLink to={"/login"}>Login</NavLink></p>
            {props.error && <span className={s.authError}>{props.error}</span>}
        </form>
    )
}

RegisterForm = reduxForm({form: "registerForm"})(RegisterForm)

const selector = formValueSelector('registerForm')

RegisterForm = connect(state => {
    const isUserAgreement = selector(state, 'userAgreement')
    return {
        isUserAgreement
    }
})(RegisterForm)

export default Register