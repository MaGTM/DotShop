import React, {useState} from "react"
import s from "./Profile.module.css"
import {NavLink} from "react-router-dom";

let Profile = (props) => {

    let [accountTypeModal, setAccountType] = useState('0')
    let [dotAmountModal, setDotAmount] = useState('0')

    let modalOpen = (type) => {
        switch (type) {
            case "account":
                setAccountType('1')
                break
            case "dot":
                setDotAmount('1')
                break
            default:
                break
        }
    }

    let modalClose = (type) => {
        switch (type) {
            case "account":
                setAccountType('0')
                break
            case "dot":
                setDotAmount('0')
                break
            default:
                break
        }
    }

    return (
        <div className={s.wrapper}>
            <h1>Profile</h1>
            <div className={s.profileInfoWrapper}>
                <div className={s.profileInfo}>
                    <p>Username: admin</p>
                    <p>E-mail: admin@test.com</p>
                    <p>
                        Account Type: <span className={s.gold}>gold</span>
                        <div className={s.infoIcon} onMouseEnter={() => {modalOpen("account")}} onMouseLeave={() => {modalClose("account")}}>
                            <div className={s.infoIconModal} style={{opacity: accountTypeModal}}>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <svg width="22.414" height="22.414" viewBox="0 0 22.414 22.414">
                                <path id="Info"
                                      d="M19.207,8A11.207,11.207,0,1,0,30.414,19.207,11.209,11.209,0,0,0,19.207,8Zm0,4.971a1.9,1.9,0,1,1-1.9,1.9A1.9,1.9,0,0,1,19.207,12.971Zm2.531,11.478a.542.542,0,0,1-.542.542H17.219a.542.542,0,0,1-.542-.542V23.364a.542.542,0,0,1,.542-.542h.542V19.93h-.542a.542.542,0,0,1-.542-.542V18.3a.542.542,0,0,1,.542-.542h2.892a.542.542,0,0,1,.542.542v4.519H21.2a.542.542,0,0,1,.542.542Z"
                                      transform="translate(-8 -8)" fill="#270949"/>
                            </svg>
                        </div>

                    </p>
                    <p>
                        DOT Amount: 99999
                        <div className={s.infoIcon} onMouseEnter={() => {modalOpen("dot")}} onMouseLeave={() => {modalClose("dot")}}>
                            <div className={s.infoIconModal} style={{opacity: dotAmountModal}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, provident.</p>
                            </div>
                            <svg width="22.414" height="22.414" viewBox="0 0 22.414 22.414">
                                <path id="Info"
                                      d="M19.207,8A11.207,11.207,0,1,0,30.414,19.207,11.209,11.209,0,0,0,19.207,8Zm0,4.971a1.9,1.9,0,1,1-1.9,1.9A1.9,1.9,0,0,1,19.207,12.971Zm2.531,11.478a.542.542,0,0,1-.542.542H17.219a.542.542,0,0,1-.542-.542V23.364a.542.542,0,0,1,.542-.542h.542V19.93h-.542a.542.542,0,0,1-.542-.542V18.3a.542.542,0,0,1,.542-.542h2.892a.542.542,0,0,1,.542.542v4.519H21.2a.542.542,0,0,1,.542.542Z"
                                      transform="translate(-8 -8)" fill="#270949"/>
                            </svg>
                        </div>

                    </p>
                </div>
                <div className={s.profileButtons} onMouseEnter={() => {
                    console.log('hi')
                }}>
                    <NavLink to={"/password"}>Change Password</NavLink>
                    <NavLink to={"/orders"}>Orders</NavLink>
                    <NavLink to={"/delete"}>Delete Account</NavLink>
                </div>
            </div>
            <div className={s.questionsWrapper}>
                <div className={s.item}>
                    <h2>How to change your account type?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, pellentesque nec
                        vestibulum id, gravida eu eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Vestibulum porttitor diam diam, a pretium lacus lobortis vitae. Duis a aliquam nibh. Nulla sed
                        metus ut leo rhoncus congue. Nulla maximus ornare placerat. Cras varius ut sem id convallis.
                        Maecenas eu eros et massa varius scelerisque. Cras at libero libero. Vestibulum tincidunt
                        rhoncus convallis. Suspendisse at est urna. Sed vel tristique orci. Donec sagittis rhoncus
                        feugiat.

                        Ut auctor mi cursus enim suscipit, in consequat purus tincidunt. Suspendisse non congue risus,
                        vel blandit mauris. Nunc imperdiet tortor id felis gravida consectetur. Suspendisse porta in
                    </p>
                </div>
                <div className={s.item}>
                    <h2>How to get DOT's?</h2>
                    <p>
                        Suspendisse eget mollis lacus. Vestibulum semper, diam vulputate viverra interdum, felis eros
                        eleifend ipsum, et ultricies lacus erat quis magna. Integer dignissim elit lectus, ut fringilla
                        ipsum suscipit a. Cras dui turpis, dapibus ac orci nec, dapibus semper massa. Maecenas dolor
                        nisi, scelerisque eget elit id, vulputate sagittis neque. Sed ornare imperdiet metus in congue.
                        Sed interdum lorem mauris, et efficitur metus iaculis ac. Curabitur feugiat lorem non ligula
                        lobortis viverra. Curabitur ut enim at felis posuere fermentum. Nam ut massa hendrerit,
                        vulputate diam sit amet, congue nibh. Vestibulum quis semper turpis, in convallis elit. Aenean
                        faucibus enim ac congue semper.

                        Proin molestie neque non enim pellentesque ultricies. Etiam erat orci, malesuada vel dictum
                    </p>
                </div>
            </div>
            <NavLink to={"/faq"}>F.A.Q.</NavLink>
        </div>
    )
}

export default Profile