import React, { Component } from "react"
import Layout from "../../components/layout/layout"

class PDRSHome extends Component {
  state = {}
  render() {
    return (
      <Layout hideSideNav>
        <h3>About the PDRS</h3>
        <p>
          The Code 2&nbsp;and/or Code 3&nbsp;Design Directives for Army
          MILCON&nbsp;requires the submission and approval of the Parametric
          Design Report (PDR) and ENG Form 3086 cost estimate. This Parametric
          Design Report System (PDRS) Wizard is a web-based tool for the
          preparation, submission, reporting and storage of the required PDR.
          The PDR must be approved first before the ENG Form 3086 is submitted.
          Although ENG3086 status is also tracked in PDRS, it is not prepared in
          this system.
        </p>
        <p>
          This tool was developed by ERDEC-CERL at the request of HQ USACE. If
          you have questions about the software or the website, please email our{" "}
          <a href="mailto:MRSI_Support@usace.army.mil">support team</a> and
          we'll help you as soon as we're able.
        </p>
        <p>
          For PDR support, including access to projects, please contact either{" "}
          <a href="mailto:Donna.L.Thompson@usace.army.mil">Donna Thompson</a> or{" "}
          <a href="mailto:Amanda.H.Weinert@usace.army.mil">Amanda Weinert</a>
        </p>
        <p>
          <strong>Please Note:&nbsp; </strong>In order to log in to the{" "}
          <em>PDRS Wizard </em>application, you will need a MRSI account. To
          request a MRSI account, please send an email to{" "}
          <a
            href="mailto:mrsi_support@usace.army.mil?subject=MRSI%20Account%20Request"
            target="_blank"
          >
            MRSI Support
          </a>{" "}
          from the email address you wish to use as your account login
          (preferably a .mil or .gov address) and we will set one up for you.
        </p>
        <p>&nbsp;</p>
      </Layout>
    )
  }
}

export default PDRSHome
