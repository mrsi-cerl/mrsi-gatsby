import React from "react"
import Layout from "../../components/layout/layout"

import cosIcon from "../../images/cos-icon.svg"
import pdrsIcon from "../../images/pdrs-icon.svg"
import rfpIcon from "../../images/wizard-icon.svg"
import sustainIcon from "../../images/sustain-icon.svg"

export default () => (
  <Layout path={"/mrsi/contact"} hideSideNav centerContent MaxWidth={700}>
    <div className="container">
      <p>
        The MRSI Team is part of the Engineer Research and Development Center
        (ERDC), Construction Engineering Research Laboratory (CERL).
      </p>
      <p>
        <em>US Army Engineer Research and Development Center</em>
        <br />
        <em>Construction Engineering Research Laboratory</em>
        <br />
        <em>P.O. BOX 9005</em>
        <br />
        <em>Champaign, IL 61826-9005</em>
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>The Program Manager is:</strong> Beth Brucker
      </p>
      <p>&nbsp;</p>
      <p>
        If you have questions about the MRSI site or our applications, please
        contact our support team at:{" "}
        <a href="mailto:mrsi_support@usace.army.mil">
          mrsi_support@usace.army.mil
        </a>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h4>Credits</h4>
      <p>
        <img style={{ width: 50 }} src={rfpIcon} alt="Icon by Freepik" />
        Icon made by Freepik from www.flaticon.com
      </p>
      <p>
        <img style={{ width: 50 }} src={cosIcon} alt="Icon by Eucalyp" />
        Icon made by&nbsp;
        <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a> from
        www.flaticon.com
      </p>
      <p>
        <img style={{ width: 50 }} src={pdrsIcon} alt="Icon by Smashicons" />
        Icon made by&nbsp;
        <a href="https://www.flaticon.com/authors/smashicons">
          Smashicons
        </a>{" "}
        from www.flaticon.com
      </p>
      <p>
        <img style={{ width: 50 }} src={sustainIcon} alt="Icon by Freepik" />
        Icon made by Freepik from www.flaticon.com
      </p>
    </div>
  </Layout>
)
