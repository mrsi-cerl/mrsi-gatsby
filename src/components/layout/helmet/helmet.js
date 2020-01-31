import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

const Helmet = ({ title }) => {
  return (
    <ReactHelmet
      defer={false}
      defaultTitle={"MRSI"}
      titleTemplate={`%s | MRSI`}
    >
      <html lang="en" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
    </ReactHelmet>
  )
}

export default Helmet
