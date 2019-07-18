import React from "react"

const Alert = ({ message }) => {
  if (message === "") {
    return null
  }

  return (
    <div class="usa-alert usa-alert--info">
      <div class="usa-alert__body">
        <h3 class="usa-alert__heading">Announcement</h3>
        <p class="usa-alert__text">{message}</p>
      </div>
    </div>
  )
}

export default Alert
