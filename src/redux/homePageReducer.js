let initialState = {
    sliderData: [
        {
            id: 1,
            title: "Big Sales for every new user",
            text: "Ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae",
            link: "/new_user_sale",
            img: "https://pngimg.com/uploads/macbook/macbook_PNG30.png",
            imgWidth: "700" + "px",
            imgHeight: "350" + "px",
            color: "#4654a3"
        },
        {
            id: 2,
            title: "Customer's Choice of 2020",
            text: "Anim quis ipsum ut in Lorem amet tempor cupidatat sunt in commodo sunt eiusmod Lorem.Duis tempor do incididunt duis ullamco dolore laboris laborum incididunt ut qui eiusmod non fugiat.Sint deserunt qui proident aute Lorem.Elit nisi non duis in ex nisi anim velit.",
            link: "/customers_choice_2020",
            img: "https://www.seekpng.com/png/full/265-2653258_politically-incorrect-thread-best-choice-icon-png.png",
            imgWidth: "350" + "px",
            imgHeight: "350" + "px",
            color: "#e0b0ff"
        },
        {
            id: 3,
            title: "Winter Collection",
            text: "Duis tempor do incididunt duis ullamco dolore laboris laborum incididunt ut qui eiusmod non fugiat.Sint deserunt qui proident aute Lorem.Elit nisi non duis in ex nisi anim velit.",
            link: "/winter_collection",
            img: "https://i.pinimg.com/originals/5b/bd/42/5bbd42bf7464c0ae04168c568618eed6.png",
            imgWidth: "700" + "px",
            imgHeight: "250" + "px",
            color: "#518fdf"
        },
    ],

    hotOffersData: [
        {
            id: 1,
            title: "Samsung Galaxy A20",
            img: "",
            imgWidth: "0" + "px",
            imgHeight: "110" + "px",
            prevPrice: "1.499" + "$",
            currentPrice: "1.099" + "$",
            link: "/smartphones/samsung_galaxy_a20"
        },
        {
            id: 2,
            title: "MacBook Pro",
            img: "",
            imgWidth: "0" + "px",
            imgHeight: "110" + "px",
            prevPrice: "1.999" + "$",
            currentPrice: "1.699" + "$",
            link: "/laptops/mac_book_pro"
        },
        {
            id: 3,
            title: "Benq Zowie XL2411P",
            img: "",
            imgWidth: "0" + "px",
            imgHeight: "110" + "px",
            prevPrice: "1.299" + "$",
            currentPrice: "1.099" + "$",
            link: "/tv/benq_zowie_xl2411p"
        },
        {
            id: 4,
            title: "IPhone 11 Pro",
            img: "",
            imgWidth: "0" + "px",
            imgHeight: "110" + "px",
            prevPrice: "1.899" + "$",
            currentPrice: "1.499" + "$",
            link: "/smartphones/iphone_11_pro"
        },
    ]
}

let homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default homePageReducer