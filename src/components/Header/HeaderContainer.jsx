import {connect} from "react-redux"
import {compose} from "redux";
import Header from "./Header";
import {logoutUser} from "../../redux/accountReducer";

let mstp = (state) => {
    return {
        isAuthenticated: state.accountReducer.isAuthenticated
    }
}

export default compose(
    connect(mstp, {logoutUser})
)(Header)