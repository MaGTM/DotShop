import React from "react";
import s from "./Home.module.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import samsungImg from "../../../assets/BlackSamsung.png"
import macBookImg from "../../../assets/MacBookOne.png"
import monitorImg from "../../../assets/TV.png"
import iphoneImg from "../../../assets/Iphone.png"

let Home = (props) => {
    let [currentSlide, setCurrentSlide] = useState(1)

    let changeCurrentSlide = (value) => {
        setCurrentSlide(value)
    }

    // Slider Creation
    let sliderCreator = props.sliderData.map((item) => <SliderItem {...item} />)
    let sliderDotsCreator = props.sliderData.map((item) => <span className={currentSlide === item.id ? s.item + ' ' + s.active : s.item} onClick={() => { changeCurrentSlide(item.id) }}></span>)

    // Hot Offers Creation
    let hotOffersCreator = props.hotOffersData.map((item) => <HotOffersItem {...item}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.sliderWrapper}>
                <div className={s.sliderItems} style={{ left: String(-1322 * (currentSlide - 1)) + 'px' }}>
                    {sliderCreator}
                </div>
                <div className={s.dots} style={{ width: props.sliderData.length * 20 }}>
                    {sliderDotsCreator}
                </div>
            </div>
            <div className={s.offersWrapper}>
                <div className={s.title}>
                    <h1>Hot Offers</h1>
                    <span></span>
                </div>
                <div className={s.offers}>
                    {hotOffersCreator}
                </div>
            </div>
        </div>
    )
}

let SliderItem = (props) => {
    return (
        <div className={s.item} style={{ backgroundColor: props.color }}>
            <div className={s.itemDescription}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <NavLink to={props.link}>See more</NavLink>
            </div>
            <div className={s.itemImg}>
                <img src={props.img} style={{ width: props.imgWidth, height: props.imgHeight }} />
            </div>
        </div>
    )
}

let HotOffersItem = (props) => {
    return (
        <div className={s.item}>
            <h2>{props.title}</h2>
            <img src={props.img} style={{ width: props.imgWidth, height: props.imgHeight }} />
            <p>{props.prevPrice}</p>
            <NavLink to={props.link}>{props.currentPrice}</NavLink>
        </div>
    )
}

export default Home