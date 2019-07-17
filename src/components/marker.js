import React, { useState } from "react"
import rainwaterMarker from "../images/markers/rainwater.png"

const Marker = ({ tiaData }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div onClick={() => setShowInfo(!showInfo)}>
      <img src={rainwaterMarker} />
      {showInfo ? (
        <div style={{ backgroundColor: "white", width: 400 }}>
          <button>X Close</button>
          <div
            style={{ backgroundColor: "white" }}
            class={"md"}
            dangerouslySetInnerHTML={{ __html: tiaData.node.html }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Marker
