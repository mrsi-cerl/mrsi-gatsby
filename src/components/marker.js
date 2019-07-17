import React, { useState } from "react"
import rainwaterMarker from "../images/markers/rainwater.png"

const Marker = ({ tiaData, onclick, $hover }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div onClick={() => onclick()}>
      <img src={rainwaterMarker} />
      {$hover ? (
        <div style={{ width: 100, backgroundColor: "white", zIndex: 9999999 }}>
          {"Click for more info on " + tiaData.node.frontmatter.title}
        </div>
      ) : null}
    </div>
  )
}

export default Marker
