import {connect} from "react-redux"
import {compose} from "redux";
import Home from "./Home";

let mstp = (state) => {
    return {
        sliderData: state.homePageReducer.sliderData,
        hotOffersData: state.homePageReducer.hotOffersData,
    }
}

export default compose(
    connect(mstp, {})
)(Home)