import React from "react"
import s from "./inputForm.module.css"

const inputForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.wrapper}>
            <input {...input} {...props} className={hasError && s.errorInput}/>
        </div>
    )
}


export default inputForm