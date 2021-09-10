import React from "react"
import ReactDOM from "react-dom"

import "animate.css"

// Component
import NightNickContainer from "./components/NightNickContainer"

// Stylesheet
import "./styles/App.css"

ReactDOM.render(
    <React.StrictMode>
        <NightNickContainer />
    </React.StrictMode>, 
    document.getElementById("root")
)