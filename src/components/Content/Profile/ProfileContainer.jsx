import {connect} from "react-redux";
import {compose} from "redux";
import Profile from "./Profile";
import {withAuthRedirect} from "../../common/HOC's/authHOC";

let mstp = (state) => {
    return {
        isAuthenticated: state.accountReducer.isAuthenticated
    }
}

export default compose(
    connect(mstp, {}),
    withAuthRedirect,
)(Profile)