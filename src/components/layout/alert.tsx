import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"

const Alert = () => {
  const data = useStaticQuery(graphql`
    query {
      allAlertJson {
        nodes {
          startDate
          message
          endDate
          level
          title
        }
      }
    }
  `)

  // do not render anything if server is building
  const isSSR = typeof window === "undefined"
  if (isSSR) {
    return null
  }

  type AlertProps = {
    endDate: Date;
    startDate: Date;
    message: string;
    level: 'success' | 'warning' | 'error' | 'info';
    title: string;
  }

  const createAlert = ({ endDate, startDate, message, level, title }: AlertProps) => {
    if (
      moment().isAfter(moment(startDate, "HH:mm  MM/DD/YYYY")) &&
      moment().isBefore(moment(endDate, "HH:mm  MM/DD/YYYY"))
    ) {
      return (
        <div
          className={"usa-alert usa-alert--" + level}
          style={{ marginBottom: 10 }}
          key={endDate + message + startDate + level}
        >
          <div className="usa-alert__body">
            <h3 className="usa-alert__heading">{title}</h3>
            <p
              className="usa-alert__text"
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return data.allAlertJson.nodes.map((e: { endDate: Date; startDate: Date; message: string; level: "success" | "warning" | "error" | "info"; title: string; }) => createAlert(e))
}

export default Alert
