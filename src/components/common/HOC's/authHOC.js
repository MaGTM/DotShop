import React from "react"
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    let AuthRedirect = (props) => {
        if(!props.isAuthenticated) return <Redirect to={"/login"}/>

        return <Component {...props}/>
    }

    return AuthRedirect
}

export const withNonAuthRedirect = (Component) => {
    let AuthRedirect = (props) => {
        if(props.isAuthenticated) return <Redirect to={"/profile"}/>

        return <Component {...props}/>
    }

    return AuthRedirect
}