import React from "react"
import "./HeaderBox.css"
function HeaderBox(props) {
  return (
    <div className="header-box" style={props.sectionStyle}>
      {props.children}
    </div>
  )
}

export default HeaderBox
