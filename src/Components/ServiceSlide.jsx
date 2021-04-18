import React from "react"
import Icon from "../Icon"

function ServiceSlide(props) {
  console.log(props.imageurl)
  //   const style = {
  //     backgroundImage: props.imageurl,
  //   }
  return (
    <div className="service-box-outer-container">
      <div className="service-box-container">
        <div
          className="overlay-container"
          style={{
            background: `url(${props.imageurl}) `,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="service-box-content">
          <Icon icon={`${props.icon}`} size={50} color="orange" />

          <h4 class="title">
            <a
              href="http://amwal.miraclestudio.design/service/bonds-commodities/"
              class="title-link"
            >
              {props.title}
            </a>
          </h4>
          <div class="desc">{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSlide
