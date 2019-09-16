import React from "react"
import rainwaterMarker from "../images/markers/rainwater.png"
import changeMarker from "../images/markers/change.png"
const Marker = ({ tiaData, onclick, $hover, listHover }) => {
  return (
    <div onClick={() => onclick()}>
      {listHover ? (
        <img
          style={{ zIndex: listHover ? 9999999 : -9 }}
          src={listHover ? changeMarker : rainwaterMarker}
          alt=""
        />
      ) : null}
      {$hover ? (
        <div style={{ width: 100, backgroundColor: "white", zIndex: 9999999 }}>
          {"Click for more info on " + tiaData.node.frontmatter.title}
        </div>
      ) : null}
    </div>
  )
}

export default Marker
