import {connect} from "react-redux"
import {compose} from "redux";
import Register from "./Register";
import {createUser, setIsSuccessAuth} from "../../../../redux/accountReducer";
import {withNonAuthRedirect} from "../../../common/HOC's/authHOC";


let mstp = (state) => {
    return {
        isLoading: state.loadingReducer.isLoading,
        isSuccess: state.accountReducer.isSuccess,
        isAuthenticated: state.accountReducer.isAuthenticated
    }
}

export default compose(
    connect(mstp, {createUser, setIsSuccessAuth}),
    withNonAuthRedirect
)(Register)