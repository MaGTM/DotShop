import {setLoadingReducer} from "./loadingReducer";
import Cookies from "universal-cookie"
import {stopSubmit} from "redux-form";

// Constants
const SET_IS_SUCCESS_AUTH = "SET_IS_SUCCESS_AUTH"
const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED"

let initialState = {
    isSuccess: null,
    isAuthenticated: false,
}

let accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SUCCESS_AUTH:
            return {
                ...state,
                isSuccess: action.success,
            }
        case SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.auth
            }
        default:
            return state
    }
}

// Action Creators
export let setIsSuccessAuth = (success) => ({type: SET_IS_SUCCESS_AUTH, success})
export let setIsAuthenticated = (auth) => ({type: SET_IS_AUTHENTICATED, auth})


// Thunks
export let createUser = (data) => {
    return (dispatch) => {
        dispatch(setLoadingReducer(true))

        /*FAKE REQUEST*/
        setTimeout(() => {
            dispatch(setLoadingReducer(false))
            dispatch(setIsSuccessAuth(true))
        }, 1000)
    }
}

export const loginUser = (data) => {
    return (dispatch) => {
        dispatch(setLoadingReducer(true))
        dispatch(setIsSuccessAuth(false))

        /*FAKE REQUEST*/
        setTimeout(() => {

            let {username, password, rememberMe} = data
            const cookies = new Cookies()

            if(username === "admin" && password === "123456") {
                debugger
                dispatch(setIsAuthenticated(true))

                if(rememberMe) {
                    cookies.remove("token")
                    cookies.remove("userId")

                    const MONTH = 2629743000 // milliseconds
                    cookies.set("token", "e10adc3949ba59abbe56e057f20f883e", {path: "/", expires: new Date(Date.now() + MONTH)})
                    cookies.set("userId", "1", {path: "/", expires: new Date(Date.now() + MONTH)})

                    dispatch(setIsSuccessAuth(true))

                    return dispatch(setLoadingReducer(false))
                }
                cookies.set("token", "e10adc3949ba59abbe56e057f20f883e", {path: "/"})
                cookies.set("userId", "1", {path: "/"})


                dispatch(setIsSuccessAuth(true))
                return dispatch(setLoadingReducer(false))
            }

            dispatch(stopSubmit("loginForm", {_error: "Username or password is incorrect"}))
            return dispatch(setLoadingReducer(false))
        }, 2000)
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        const cookies = new Cookies()
        dispatch(setIsAuthenticated(false))
        dispatch(setIsSuccessAuth(false))
        cookies.remove("token")
        cookies.remove("userId")
    }
}

export default accountReducer