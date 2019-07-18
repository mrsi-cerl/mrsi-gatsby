import React from "react"
import Layout from "../../components/layout/layout"

export default () => (
  <Layout path={"/mrsi/privacy"} hideSideNav centerContent MaxWidth={700}>
    <h1>Privacy Policy</h1>
    <div class="container">
      <div>
        Information available at MRSI.ERDC.DREN.MIL is consistent with USACE,
        Army, and DoD policies and The Principles of Information and contains
        information cleared for public release.
        <a href="http://www.us.army.mil/"> </a>
      </div>
      <ul>
        <li>
          <a href="https://www.esd.whs.mil/RIM/" target="_blank">
            Army web site Management Policy (doc)
          </a>
        </li>
        <li>
          <a href="https://www.esd.whs.mil/ODP/" target="_blank">
            Army Records Management Declassificiation Agency (Privacy Act, FOIA,
            etc.)
          </a>
        </li>
        <li>
          <a href="http://www.army.mil/copyright/">
            Army Policy for Using Copyrighted Materials
          </a>
        </li>
      </ul>
      <div>
        This site is provided as a public service by Military Construction
        Requirements and Standardization Integration team as part of the U.S.
        Army Corps of Engineers (USACE).
      </div>
      <div>
        Information presented on this site is considered public information and
        may be distributed or copied unless otherwise specified. Use of
        appropriate byline/photo/image credits is requested.
      </div>
      <div>
        The use of copyrighted material by the Army is subject to U.S. copyright
        law as reflected in Army regulations. It is Army policy to recognize and
        respect the rights of copyright owners.&nbsp;More information on the
        Army's use of{" "}
        <a
          href="https://www.army.mil/terms/"
          target="_blank"
          title="Army Terms of Use"
        >
          copyrighted materials
        </a>
        .
      </div>
      <div>
        For site management, information is collected for statistical purposes
        only. This government computer system uses software programs to create
        summary statistics, which are used for such purposes as assessing what
        information is of most and least interest, determining technical design
        specifications, and identifying system performance or problem areas.
      </div>
      <div>
        For site security purposes and to ensure that this service remains
        available to all users, this government computer system employs software
        programs to monitor network traffic to identify unauthorized attempts to
        upload or change information, or otherwise cause damage.
      </div>
      <div>
        Except for authorized law enforcement investigations, no other attempts
        are made to identify individual users or their usage habits. Raw data
        logs are used for no other purposes and are scheduled for regular
        destruction in accordance with National Archives and Records
        Administration guidelines.
      </div>
      <div>
        Unauthorized attempts to upload information or change information on
        this service are strictly prohibited and may be punishable under the
        Computer Fraud and Abuse Act of 1986 and the National Information
        Infrastructure Protection Act.
      </div>
      <div>
        If you have any questions or comments about the information presented
        here, please forward them to us using the <em>Contact MRSI</em> link in
        the header navigation.
      </div>
      <div>
        <span class="bold">
          <strong>Cookie Disclaimer</strong>
        </span>{" "}
        - The site does not use persistent cookies (persistent tokens that pass
        information back and forth from the client machine to the server). The
        Home Page may use session cookies (tokens that remain active only until
        you close your browser) in order to make the site easier to use. The
        site DOES NOT keep a database of information obtained from these
        cookies. You can choose not to accept these cookies and still use the
        site, but it may take you longer to fill out the same information
        repeatedly and clicking on the banners may not take you to the correct
        link. Refer to the help information in your browser software for
        instructions on how to disable cookies.
      </div>
      <div>
        <span class="bold">
          <strong>External Links Disclaimer</strong>
        </span>{" "}
        - The appearance of hyperlinks to external sites does not constitute
        endorsement of the linked web site or the information, products or
        services contained therein. Such links are provided consistent with the
        stated purpose of this DoD web site.
      </div>
    </div>
  </Layout>
)
