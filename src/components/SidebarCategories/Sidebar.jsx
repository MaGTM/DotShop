import React from "react";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

let Sidebar = (props) => {
    return (
        <div className={s.wrapper}>
            <h2>Categories</h2>
            <div className={s.listWrapper}>
                <ul>
                    <NavLink to={"/"}>
                        <li>TV and TV-Accessories</li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8.442" viewBox="0 0 15 8.442">
                            <path d="M281.5,0V.876l6.9,3.352L281.5,7.58v.862l8.691-4.221Z"
                                  transform="translate(-275.191)" fill="#270949"/>
                            <path d="M0,.02V.9L6.9,4.248,0,7.6v.862L8.691,4.241Z" transform="translate(0 -0.02)"
                                  fill="#270949"/>
                        </svg>
                    </NavLink>
                    <NavLink to={"/"}>
                        <li>Computers</li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8.442" viewBox="0 0 15 8.442">
                            <path d="M281.5,0V.876l6.9,3.352L281.5,7.58v.862l8.691-4.221Z"
                                  transform="translate(-275.191)" fill="#270949"/>
                            <path d="M0,.02V.9L6.9,4.248,0,7.6v.862L8.691,4.241Z" transform="translate(0 -0.02)"
                                  fill="#270949"/>
                        </svg>
                    </NavLink>
                    <NavLink to={"/"}>
                        <li>Laptops</li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8.442" viewBox="0 0 15 8.442">
                            <path d="M281.5,0V.876l6.9,3.352L281.5,7.58v.862l8.691-4.221Z"
                                  transform="translate(-275.191)" fill="#270949"/>
                            <path d="M0,.02V.9L6.9,4.248,0,7.6v.862L8.691,4.241Z" transform="translate(0 -0.02)"
                                  fill="#270949"/>
                        </svg>
                    </NavLink>
                    <NavLink to={"/"}>
                        <li>Smartphones</li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8.442" viewBox="0 0 15 8.442">
                            <path d="M281.5,0V.876l6.9,3.352L281.5,7.58v.862l8.691-4.221Z"
                                  transform="translate(-275.191)" fill="#270949"/>
                            <path d="M0,.02V.9L6.9,4.248,0,7.6v.862L8.691,4.241Z" transform="translate(0 -0.02)"
                                  fill="#270949"/>
                        </svg>
                    </NavLink>
                    <NavLink to={"/"}>
                        <li>Audio and Video</li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8.442" viewBox="0 0 15 8.442">
                            <path d="M281.5,0V.876l6.9,3.352L281.5,7.58v.862l8.691-4.221Z"
                                  transform="translate(-275.191)" fill="#270949"/>
                            <path d="M0,.02V.9L6.9,4.248,0,7.6v.862L8.691,4.241Z" transform="translate(0 -0.02)"
                                  fill="#270949"/>
                        </svg>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar