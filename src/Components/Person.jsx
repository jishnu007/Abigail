import React from "react"
import "./Person.css"
function Person(props) {
  return (
    <div className={`person-wrapper ${props.id}`}>
      <div className="image-desc-wrapper">
        <img src={props.image} alt="person1" />
        <div className="person-desc">
          <h5>{props.name}</h5>
          <span>{props.role}</span>
        </div>
        <div className="full-desc">{props.desc}</div>
      </div>
    </div>
  )
}

export default Person
