import React from "react"

import LinksList from "./LinksList"
import Header from "./Header"

class NightNickContainer extends React.Component {
    state = {
        links: [
            {
                id: 1,
                title: "visit my shop!",
                link: "http://www.etsy.com/shop/nightnick",
                image: "",
            },
            {
                id: 2,
                title: "custom pocket pal woodland critter",
                link: "https://www.etsy.com/listing/1012764435/customize-your-own-pocket-pal-woodland?ref=shop_home_active_8&ltclid=",
                image: "",
            },
            {
                id: 3,
                title: "request for custom pet kitty",
                link: "https://www.etsy.com/listing/994750181/custom-pet-cat-figurine-customizable?ref=shop_home_feat_1&ltclid=",
                image: "",
            },
            {
                id: 4,
                title: "instagram",
                link: "https://www.instagram.com/nightnick_?ltclid=",
                image: "",
            },
            {
                id: 5,
                title: "tiktok",
                link: "https://vm.tiktok.com/ZMJwQaJDB/?ltclid=",
                image: "",
            },
            {
                id: 6,
                title: "amazon wish list",
                link: "https://www.amazon.com/hz/wishlist/ls/2U9SCZUP9UTYI?ref_=wl_share&ltclid=",
                image: "",
            },
        ]
    }
    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <LinksList links={this.state.links} />
                </div>
            </div>
        )
    }
}

export default NightNickContainer