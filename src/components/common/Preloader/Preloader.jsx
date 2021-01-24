import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={s.wrapper}>
            <svg style={{
                width: props.width,
                height: props.height,
            }}>
                <circle cx={"70"} cy={"70"} r={props.radius} style={{
                    strokeWidth: props.strokeWidth,
                    transform: props.translate,
                    strokeDasharray: props.strokeDasharray,
                    strokeDashoffset: props.strokeDashoffset,
                }}></circle>
            </svg>
        </div>
    )
}

export default Preloader