import React from "react"
import Icon from "../Icon"

function ServiceSlide(props) {
  console.log(props.imageurl)
  //   const style = {
  //     backgroundImage: props.imageurl,
  //   }
  return (
    <div
      className="service-box-outer-container"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
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
            <a href="/" class="title-link">
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
