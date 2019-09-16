import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as CA } from "react-responsive-carousel"

const Carousel = ({ imgs }) => {
  // const imgStyle = {
  //   maxWidth: "100%",
  //   minWidth: "100%",
  //   maxHeight: 500,
  // }
  if (!imgs) {
    return null
  }
  if (imgs.length === 1) {
    //console.log(imgs[0].publicURL)
    return (
      <div
        style={{
          backgroundImage: "url(" + imgs[0].publicURL + ")",
          width: "100%",
          height: "300px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    )
  } else {
    return (
      <CA
        emulateTouch
        dynamicHeight
        showThumbs={false}
        infiniteLoop
        autoPlay
        width={"100%"}
      >
        {imgs.map(e => (
          <div
            style={{
              backgroundImage: "url(" + e.publicURL + ")",
              width: "100%",
              height: "300px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </CA>
    )
  }
}

export default Carousel
