import React from "react"

const Alert = ({ message }) => {
  if (message === "") {
    return null
  }

  return (
    <div className="usa-alert usa-alert--info">
      <div className="usa-alert__body">
        <h3 className="usa-alert__heading">Announcement</h3>
        <p className="usa-alert__text">{message}</p>
      </div>
    </div>
  )
}

export default Alert
