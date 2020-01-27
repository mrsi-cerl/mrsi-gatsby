import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"

const Helmet = ({ title }) => (
  <ReactHelmet
    defer={false}
    title={title}
    defaultTitle={"MRSI"}
    titleTemplate={`%s | MRSI`}
  >
    <html lang="en" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />
    <script
      async
      type="text/javascript"
      src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=DOD&subagency=USACE"
      id="_fed_an_ua_tag"
    ></script>
  </ReactHelmet>
)

export default Helmet
