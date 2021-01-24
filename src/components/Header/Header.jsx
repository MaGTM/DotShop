import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/Logo.png"
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {useState} from "react";


// Main Component
const Header = (props) => {
    // Account Modal Open
    let [accountModalOpen, setAccountModalOpen] = useState(false)

    let changeAccountModalOpen = () => {
        switch (accountModalOpen) {
            case true:
                setAccountModalOpen(false)
                break
            case false:
                setAccountModalOpen(true)
                break
            default:
                break
        }
    }


    // Account Authorized/Non-Authorized render
    let accountMenu = () => {
        if(!props.isAuthenticated) {
            return (
                <>
                    <p>Login</p>
                    <div className={s.modalWrapper} style={{height: accountModalOpen ? "174px" : "0"}}>
                        <div className={s.modalContent}>
                            <NavLink to={"/login"} className={s.modalLogin}>
                                Login
                            </NavLink>
                            <NavLink to={"/register"} className={s.modalRegister}>
                                Register
                            </NavLink>
                        </div>
                    </div>
                </>
            )
        }

        return (
            <>
                <p>Admin</p>
                <div className={s.modalWrapper} style={{height: accountModalOpen ? "174px" : "0"}}>
                    <div className={s.modalContent}>
                        <NavLink to={"/profile"} className={s.modalLogin}>
                            Profile
                        </NavLink>
                        <span className={s.modalRegister} onClick={props.logoutUser}>
                            Logout
                        </span>
                    </div>
                </div>
            </>
        )
    }

    // Finding items
    let onSearchSubmit = (values) => {
        console.log(values)
    }

    // Main Render
    return (
        <div className={s.wrapper}>
            <NavLink to={"/"}><img src={logo} alt="logo"/></NavLink>
            <div className={s.searchInput}>
                <SearchForm onSubmit={onSearchSubmit}/>
            </div>
            <div className={s.menu}>
                <div>
                    <div className={s.item + ' ' + s.account} onClick={changeAccountModalOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37.199" height="32.443"
                             viewBox="0 0 37.199 32.443">
                            <g transform="translate(-65.466 -56)">
                                <path d="M172.756,58a9,9,0,1,1-9-9A9,9,0,0,1,172.756,58Z"
                                      transform="translate(-80.094 8)"
                                      fill="none" stroke="#270949" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-miterlimit="10" stroke-width="2"/>
                                <path d="M275.38,274.46c8.874.47,15.8,4.373,15.8,9.12"
                                      transform="translate(-189.515 -196.137)" fill="none" stroke="#270949"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                      stroke-width="2"/>
                                <path d="M66.466,284.1c0-4.648,6.679-8.486,15.324-9.066"
                                      transform="translate(0 -196.662)"
                                      fill="none" stroke="#270949" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-miterlimit="10" stroke-width="2"/>
                            </g>
                        </svg>
                        {accountMenu()}
                    </div>
                </div>
                <NavLink to={"/compare"}>
                    <div className={s.item + ' ' + s.compare}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.204" height="29.353" viewBox="0 0 22.204 29.353">
                            <g transform="translate(-3.143 -3.3)">
                                <path d="M0,10H2V22.245H0Z" transform="translate(3.143 10.408)" fill="#270949"/>
                                <path d="M6,6H8V35.353H6Z" transform="translate(7.245 -2.7)" fill="#270949"/>
                                <path d="M12,0h2V22.5H12Z" transform="translate(11.347 10.156)" fill="#270949"/>
                            </g>
                        </svg>
                        <p>Compare</p>
                    </div>
                </NavLink>
                <NavLink to={"/cart"}>
                    <div className={s.item + ' ' + s.cart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27.72" viewBox="0 0 32 27.72">
                            <g transform="translate(0 -19.665)">
                                <path
                                    d="M31.507,26.932A2.887,2.887,0,0,0,29.424,25.8l-24.43-1.7-.947-3.03a.6.6,0,0,0-.568-.568l-2.273-.757A.844.844,0,0,0,.071,20.3.844.844,0,0,0,.639,21.44l1.894.568.947,3.219L7.267,38.294a4.554,4.554,0,0,0,1.591,2.388A3.792,3.792,0,1,0,14.5,41.7h7.308a3.74,3.74,0,0,0-.528,1.894,3.788,3.788,0,1,0,6.5-2.63,4,4,0,0,0,1.835-2.672l2.273-8.9A2.81,2.81,0,0,0,31.507,26.932ZM11.242,45.491a1.894,1.894,0,0,1,0-3.787A1.9,1.9,0,0,1,13.136,43.6,1.789,1.789,0,0,1,11.242,45.491Zm13.824,0A1.894,1.894,0,1,1,26.96,43.6,1.789,1.789,0,0,1,25.066,45.491Zm2.841-7.575a2.591,2.591,0,0,1-2.055,1.979,3.506,3.506,0,0,0-1.905.1H12.361a3.717,3.717,0,0,0-1.119-.189c-.089,0-.172.021-.259.027a3.215,3.215,0,0,1-1.826-1.92L5.748,26.174l23.483,1.7a.984.984,0,0,1,.757.379,1.139,1.139,0,0,1,.189.757l-2.271,8.9Z"
                                    transform="translate(0 0)" fill="#270949"/>
                            </g>
                        </svg>
                        <p>Cart</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

// Search Form Component
let SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="searchText" type="text" placeholder="Search" component="input"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="38.446" height="38.45" viewBox="0 0 38.446 38.45" onClick={props.handleSubmit}>
                <path
                    d="M27.285,13.8a9.513,9.513,0,0,0-13.484,0,9.513,9.513,0,0,0,0,13.484,9.513,9.513,0,0,0,13.484,0A9.532,9.532,0,0,0,27.285,13.8Zm-.431,13.053a8.918,8.918,0,1,1,2.617-6.311A8.874,8.874,0,0,1,26.854,26.854Z"
                    transform="translate(-7.922 -7.922)" fill="#a5a5a5"/>
                <path
                    d="M39.173,36.618,23.75,21.133a12.611,12.611,0,1,0-10.128,5.11,12.375,12.375,0,0,0,7.511-2.494L36.587,39.2a.978.978,0,0,0,.616.246.993.993,0,0,0,.646-.246l1.293-1.293A.869.869,0,0,0,39.173,36.618ZM5.125,22.118a12.006,12.006,0,1,1,16.993,0,11.868,11.868,0,0,1-8.5,3.509A12.05,12.05,0,0,1,5.125,22.118ZM38.742,37.48l-1.293,1.293a.3.3,0,0,1-.431,0L21.626,23.38a11.247,11.247,0,0,0,.924-.831,11.844,11.844,0,0,0,.831-.924L38.742,37.049A.3.3,0,0,1,38.742,37.48Z"
                    transform="translate(-1 -1)" fill="#a5a5a5"/>
            </svg>
        </form>
    )
}

SearchForm = reduxForm({form: "searchHeaderForm"})(SearchForm)


// Export Main Component
export default Header