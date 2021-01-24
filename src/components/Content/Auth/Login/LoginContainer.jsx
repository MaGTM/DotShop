import React from "react"
import {connect} from "react-redux"
import {compose} from "redux";
import Login from "./Login";
import {loginUser, setIsSuccessAuth} from "../../../../redux/accountReducer";
import {setLoadingReducer} from "../../../../redux/loadingReducer";



let mstp = (state) => {
    return {
        isLoading: state.loadingReducer.isLoading,
        isSuccess: state.accountReducer.isSuccess,
        isAuthenticated: state.accountReducer.isAuthenticated
    }
}

export default compose(
    connect(mstp, {loginUser, setLoadingReducer, setIsSuccessAuth}),
)(Login)