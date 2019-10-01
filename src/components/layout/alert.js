import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"

const Alert = () => {
  const data = useStaticQuery(graphql`
    query {
      allSiteAlertJson {
        edges {
          node {
            endDate
            startDate
            message
          }
        }
      }
    }
  `)

  const isSSR = typeof window === "undefined"

  if (isSSR) {
    return null
  }

  const { endDate, startDate, message } = data.allSiteAlertJson.edges[0].node

  if (
    moment().isAfter(startDate, "yyyy-mm-ddThh:mm:ss") &&
    moment().isBefore(endDate, "yyyy-mm-ddThh:mm:ss")
  ) {
    return (
      <div className="usa-alert usa-alert--info" style={{ marginBottom: 10 }}>
        <div className="usa-alert__body">
          <h3 className="usa-alert__heading">Announcement</h3>
          <p className="usa-alert__text">{message}</p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Alert
