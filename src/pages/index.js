import React from "react"
import Link from "../components/link"
import bgImg from "./../images/ResizedUsaceConstruction.jpg"
import Layout from "../components/layout/layout"

import cosIcon from "../images/cos-icon.svg"
import pdrsIcon from "../images/pdrs-icon.svg"
import rfpIcon from "../images/wizard-icon.svg"
//import sustainIcon from "../images/sustain-icon.svg"

const iconStyle = {
  marginBottom: ".5rem",
  marginRight: "1.25rem",
  maxWidth: "4.5rem",
  float: "none",
}

const IndexPage = () => (
  <Layout sidenav title="Home" hideSideNav path="/" centerContent>
    <section className="site-hero">
      <div
        className="grid-container"
        style={{
          backgroundImage: "url(" + bgImg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 400,
        }}
      />
    </section>
    <section className="grid-container">
      <div className="grid-row">
        <p className="font-sans-lg">
          The <em>MILCON Requirements, Standardization, and Integration</em>
          (MRSI) site presents Military Construction policy, regulations,
          standards, and designs in order to provide the facility community with
          the tools they need to build and maintain the Army's vast facility
          infrastructure.
        </p>
      </div>
    </section>
    <section className="usa-section usa-graphic-list grid-container">
      <div className="grid-row grid-gap">
        <div className="desktop:grid-col-4 tablet:grid-col-7 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            className="usa-media-block__img"
            style={iconStyle}
            src={cosIcon}
            alt=""
          />
          <div className="usa-media-block__body">
            <h3>COS</h3>
            <p>
              To learn about facilities standardization, please visit the COS
              pages. All supported facilities are listed, and where available,
              Army Standards and USACE Standard Designs have been uploaded and
              are available for download.
            </p>

            <p>
              <Link to="/cos/">Browse the Standards</Link>
            </p>
          </div>
        </div>
        <div className="desktop:grid-col-4 tablet:grid-col-7 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            className="usa-media-block__img"
            style={iconStyle}
            src={pdrsIcon}
            alt=""
          />
          <div className="usa-media-block__body">
            <h3>MCA/AFH Code 2</h3>
            <p>
              The Army’s Code 2 process supports the programming and budget process in advance
              of budget lock. The PDR document is written, submitted, and reviewed
              within the MCA Code 2 Wizard. Starting with the FY26 MCA/AFH Program, this 
              tool is also where the 35% Certification documents will be submitted and reviewed.
            </p>

            <p>
              <Link to="/pdrs/">MCA/AFH Code 2</Link>
            </p>
          </div>
        </div>
        <div className="desktop:grid-col-4 tablet:grid-col-7 usa-media-block margin-bottom-3 desktop:margin-bottom-0">
          <img
            className="usa-media-block__img"
            style={iconStyle}
            src={rfpIcon}
            alt=""
          />
          <div className="usa-media-block__body">
            <h3>Model RFP</h3>
            <p>
              Through the use of curated content developed by USACE Subject
              Matter Experts, the Model RFP guides users in the development of
              Requests for Proposal (RFP). This helps ensure compliance with the
              latest policies, regulations, and best practices; improves
              quality; and reduces the time required to develop RFP.
            </p>
            
            <p>
              <Link to="/model-rfp/">View the Wizards</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="usa-section usa-graphic-list grid-container">
      <div className="grid-row grid-gap" />
    </section>
  </Layout>
)

export default IndexPage
