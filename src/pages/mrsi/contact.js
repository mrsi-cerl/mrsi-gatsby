import React from "react"
import Layout from "../../components/layout/layout"

export default () => (
  <Layout path={"/mrsi/contact"} hideSideNav centerContent MaxWidth={700}>
    <div class="container">
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
    </div>
  </Layout>
)
