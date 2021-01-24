import React from "react";
import s from "./Home.module.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";

import sliderImgMac from "../../../assets/MacBook.png"
import samsungImg from "../../../assets/BlackSamsung.png"
import macBookImg from "../../../assets/MacBookOne.png"
import monitorImg from "../../../assets/TV.png"
import iphoneImg from "../../../assets/Iphone.png"

let Home = (props) => {
    let [currentSlide, setCurrentSlide] = useState(0)

    let changeCurrentSlide = (value) => {
        setCurrentSlide(value)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.sliderWrapper}>
                <div className={s.sliderItems} style={{left: String(-1322*currentSlide) + 'px'}}>
                    <div className={s.item}>
                        <div className={s.itemDescription}>
                            <h1>Big Sales</h1>
                            <p>Ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et
                                odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
                                scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum
                                arcu vitae</p>
                            <NavLink to={"/"}>See more</NavLink>
                        </div>
                        <div className={s.itemImg}>
                            <img src={sliderImgMac} alt=""/>
                        </div>
                    </div>
                    <div className={s.item} style={{background: "black"}}>
                        <div className={s.itemDescription}>
                            <h1>Big Sales</h1>
                            <p>Ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et
                                odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
                                scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum
                                arcu vitae</p>
                            <NavLink to={"/"}>See more</NavLink>
                        </div>
                        <div className={s.itemImg}>
                            <img src={sliderImgMac} alt=""/>
                        </div>
                    </div>
                    <div className={s.item} style={{background: "orange"}}>
                        <div className={s.itemDescription}>
                            <h1>Big Sales</h1>
                            <p>Ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et
                                odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
                                scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum
                                arcu vitae</p>
                            <NavLink to={"/"}>See more</NavLink>
                        </div>
                        <div className={s.itemImg}>
                            <img src={sliderImgMac} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={s.dots} style={{width: "60px"}}>
                    <span className={currentSlide === 0 ? s.item + ' ' + s.active : s.item} onClick={() => {changeCurrentSlide(0)}}></span>
                    <span className={currentSlide === 1 ? s.item + ' ' + s.active : s.item} onClick={() => {changeCurrentSlide(1)}}></span>
                    <span className={currentSlide === 2 ? s.item + ' ' + s.active : s.item} onClick={() => {changeCurrentSlide(2)}}></span>
                </div>
            </div>
            <div className={s.offersWrapper}>
                <div className={s.title}>
                    <h1>Hot Offers</h1>
                    <span></span>
                </div>
                <div className={s.offers}>
                    <div className={s.item}>
                        <h2>Samsung Galaxy A20</h2>
                        <img src={samsungImg} alt=""/>
                        <p>1.499$</p>
                        <NavLink to={"/"}>1.099$</NavLink>
                    </div>
                    <div className={s.item}>
                        <h2>MacBook Pro</h2>
                        <img src={macBookImg} alt=""/>
                        <p>1.999$</p>
                        <NavLink to={"/"}>1.699$</NavLink>
                    </div>
                    <div className={s.item}>
                        <h2>Benq Zowie XL2411P</h2>
                        <img src={monitorImg} alt=""/>
                        <p>1.299$</p>
                        <NavLink to={"/"}>1.099$</NavLink>
                    </div>
                    <div className={s.item}>
                        <h2>IPhone 11 Pro</h2>
                        <img src={iphoneImg} alt=""/>
                        <p>1.899$</p>
                        <NavLink to={"/"}>1.499$</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home