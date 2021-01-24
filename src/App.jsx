import React, {useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./App.module.css"
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/SidebarCategories/Sidebar";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Content/Home/HomeContainer";
import RegisterContainer from "./components/Content/Auth/Register/RegisterContainer";
import LoginContainer from "./components/Content/Auth/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {appInitializing} from "./redux/appReducer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";

const App = (props) => {

    useEffect(() => {
        props.appInitializing()
    }, [])

    if (!props.isInitialized) {
        return <Preloader
                        width={60}
                        height={60}
                        strokeWidth={5}
                        radius={20}
                        translate={"translate(-70%, -67%)"}
                        strokeDasharray={125}
                        strokeDashoffset={125}/>
    }

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <HeaderContainer/>
                <div className={s.content}>
                    <Sidebar/>
                    <div>
                        <Route exact path={"/"} component={HomeContainer}/>
                        <Route path={"/register"} component={RegisterContainer}/>
                        <Route path={"/login"} component={LoginContainer}/>
                        <Route path={"/profile"} component={ProfileContainer}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

let mstp = (state) => {
    return {
        isInitialized: state.appReducer.isInitialized
    }
}

export default compose(
    connect(mstp, {appInitializing})
)(App)