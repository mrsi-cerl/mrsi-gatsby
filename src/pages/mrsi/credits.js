import React from "react"
import Layout from "../../components/layout/layout"

import cosIcon from "../../images/cos-icon.svg"
import crstIcon from "../../images/crst-icon.svg"
import rfpIcon from "../../images/wizard-icon.svg"
import sustainIcon from "../../images/sustain-icon.svg"

export default () => (
  <Layout path={"/mrsi/credits"} hideSideNav centerContent MaxWidth={700}>
    <h1>Credits</h1>
    <p>
      <img style={{ width: 50 }} src={rfpIcon} />
      Icon made by Freepik from www.flaticon.com
    </p>
    <p>
      <img style={{ width: 50 }} src={cosIcon} />
      Icon made by{" "}
      <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a> from
      www.flaticon.com
    </p>
    <p>
      <img style={{ width: 50 }} src={crstIcon} />
      Icon made by{" "}
      <a href="https://www.flaticon.com/authors/smashicons">Smashicons</a> from
      www.flaticon.com
    </p>
    <p>
      <img style={{ width: 50 }} src={sustainIcon} />
      Icon made by Freepik from www.flaticon.com
    </p>
  </Layout>
)
