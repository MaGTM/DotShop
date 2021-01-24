import React from "react"
import s from "./inputForm.module.css"

const inputForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.wrapper}>
            <input {...input} {...props} className={hasError && s.errorInput}/>
            {hasError &&
            <div className={s.error}>
                <svg width="9.425" height="18.447" viewBox="0 0 9.425 18.447">
                    <path
                        d="M.714,11.414l6.577,6.71a.921.921,0,0,0,1.424,0,3.216,3.216,0,0,0,.712-2.179V2.529A3.216,3.216,0,0,0,8.715.351a.921.921,0,0,0-1.424,0L.714,7.06A3.213,3.213,0,0,0,0,9.237a3.213,3.213,0,0,0,.711,2.177Z"
                        transform="translate(-0.003 -0.013)" fill="#ce0202"/>
                </svg>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
}


export default inputForm