import Cookies from "universal-cookie"
import {setIsAuthenticated, setIsSuccessAuth} from "./accountReducer";

const SET_IS_INITIALIZED = "SET_IS_INITIALIZED"

let initialState = {
    isInitialized: false,
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
}

// Action creators
let setIsInitialized = (isInitialized) => ({type: SET_IS_INITIALIZED, isInitialized})

// Thunks
export let appInitializing = () => {
    return (dispatch) => {

        const cookies = new Cookies();

        let cookieToken = cookies.get("token")
        let cookieUserId = cookies.get("userId")

        setTimeout(() => {
            if(cookieToken && cookieUserId) {
                dispatch(setIsAuthenticated(true))
                dispatch(setIsSuccessAuth(true))
                return dispatch(setIsInitialized(true))
            }

            return dispatch(setIsInitialized(true))
        }, 1000)
    }
}

export default appReducer