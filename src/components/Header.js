import React from "react"

import logo from "../images/tiger_logo.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

const Header = () => {
    return (
        <header>
            <div>
                <img className="animate__animated animate__bounce" src={logo} alt="tiger figure" />
            </div>
            <div>
                <h1 className="logotext">nightnick</h1>
            </div>
            <div>
                <h2 className="medialinks">
                    <a className="iconlink" href="http://www.etsy.com/shop/nightnick"><FontAwesomeIcon className="fa-fw" icon={['fab', 'etsy']} /></a>
                    <a className="iconlink" href="https://www.instagram.com/nightnick_?ltclid="><FontAwesomeIcon className="fa-fw" icon={['fab', 'instagram']} /></a>
                    <a className="iconlink" href="https://vm.tiktok.com/ZMJwQaJDB/?ltclid="><FontAwesomeIcon className="fa-fw" icon={['fab', 'tiktok']} /></a>
                </h2>
            </div>
        </header>
    )
}

export default Header