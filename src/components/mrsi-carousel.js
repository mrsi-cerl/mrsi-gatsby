import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as CA } from "react-responsive-carousel"

const Carousel = ({ imgs }) => {
  const imgStyle = {
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: 500,
  }
  if (!imgs) {
    return null
  }
  if (imgs.length == 1) {
    return <img style={imgStyle} src={imgs[0].publicURL} />
  } else {
    return (
      <CA emulateTouch dynamicHeight showThumbs={false} autoPlay>
        {imgs.map(e => (
          <img style={imgStyle} src={e.childImageSharp.fixed.src} />
        ))}
      </CA>
    )
  }
}

export default Carousel
