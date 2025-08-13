import { Card, CardBody, CardFooter, CardGroup, CardHeader, CardMedia } from "@trussworks/react-uswds";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { buttonLink, fauxButtonLink, cardMedia, flexAlignCenter, flexAlignTop, homeImage } from "../components/index.module.css";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
  <><Layout title="Home" hideSideNav path="/" centerContent>
    <section className="site-hero">
      <div
        className={cx(homeImage, "grid-container")}
        style={{ height: "400px" }} />
    </section>
    <section className="grid-container" style={{ maxWidth: '75rem'}}>
      <div className="grid-row">
        <h2 className="font-sans" style={{marginBottom: '0', fontSize: '12.5pt', fontWeight: 'normal' }}>
          <p style={{ marginTop: '0', fontSize: 'normal' }}>
            This <em>MILCON Requirements, Standardization, and Integration</em> (MRSI)
            site presents Military Construction policy, regulations,
            standards, and designs in order to provide the facility community with
            the tools they need to build and maintain the Army's vast facility
            infrastructure.
          </p>
          <p style={{ marginTop: '0', fontSize: 'normal' }}>
            This site is part of research initiatives conducted at the <em>Construction
            Engineering Research Laboratory</em> (CERL), the Illinois Site of the <em>Engineer
            Research and Development Center</em>. Partnering with federal and industry
            organizations, our mission is to enhance the proficiency and productivity of the
            Corps’ construction community for planning, design, and execution of the Corps’
            facility acquisition process: we do this by providing tools and curated information
            for this community. This site and the tools provided herein are part of that research,
            as lessons learned from interacting with the community are incorporated into future
            tools and research programs.
          </p>
        </h2>
      </div>
    <span className="font-sans" style={{fontSize: '12.5pt' }}><b>Current research initiatives</b> being investigated based on what
      we have learned from interacting with the community through our tools include:</span>
    <CardGroup style={{ marginTop: '0.5em'}}>
      <Card layout="flagDefault" headerFirst gridLayout={{ tablet: { col: 12 } }}>
        <CardHeader><h3 className="usa-card__heading">Document Generation</h3></CardHeader>
        <CardMedia
          className={flexAlignTop}
          imageClass={cardMedia}
        >
          <StaticImage
            src="../images/wizard-icon.png"
            alt="MRSI Wizard icon" />
        </CardMedia>
        <CardBody>
          <p>
            Our current document generation tool is the MRSI Web Wizard, which is the third
            generation of our Wizard concept. We have created a unified wizard tool, based on
            a current web software development stack that can produce disparate document types with
            a WYSIWYG user interface, while maintaining the capability to support agency-specific
            requirements. Prior experience led us to conclude that most of the documents we were
            being asked to help produce had two common elements:
            a template that defined the format of the standard document and delineated what type of
            document would be produced (i.e., would it be the next great American novel or a
            fast food window receipt?) which was mostly boilerplate, but with sections of it
            being <em>variable text</em> dictated by the specifics of the project gathered as
            user input. The term <em>varitext</em> was coined to represent this second element and
            research commenced on how to use this insight to meet the goals for the new tool.
            <div style={{ marginTop: '0.5em' }}>
              The result of this research was <em>varitext objects</em> embedded within the templates
              that allow us to encapsulate everything about that portion of the document within them:
              the prompt the user is presented to request the needed input, how it is presented, what
              is done with the user’s response, and how the document is modified based on said input.
              By treating the non-boilerplate portions of the document as varitext, we can update our
              documents over time as requirements change without having to change source code. This
              makes not only updates in existing modules faster, less error-prone, and more secure
              but also means new modules/programs for additional document types can be deployed much
              faster than was previously possible.
            </div>
          </p>
        </CardBody>
        <CardFooter>
          <div style={{ textAlign: 'center' }}>
            <span className={fauxButtonLink} title="Link to MRSI Wizard">
              <a href="https://wizards.mrsi.erdc.dren.mil/" target="_blank" rel="noopener noreferrer">Click here to access the MRSI Wizard</a>
            </span>
          </div>
        </CardFooter>
      </Card>
      <Card
        layout="flagDefault"
        headerFirst
        gridLayout={{ tablet: { col: 12 } }}
      >
        <CardHeader><h3 className="usa-card__heading">LEED Scorecard</h3></CardHeader>
        <CardMedia
          className={flexAlignCenter}
          imageClass={cardMedia}
        >
          <StaticImage
            src="../images/leed-certification-logo.png"
            alt="LEED Certification logo" />
        </CardMedia>
        <CardBody>
          <p>
            We are researching the development of a system that can recommend opportunities
            for LEED credits to upcoming projects based on historical location data (e.g.
            installation site or climate zone), where the data can show which LEED credits were
            given for similar projects. Such an endeavor may involve searching knowledge management
            systems across USACE that contain lessons learned, white papers, and other sources
            to help speed decision making.
          </p>
        </CardBody>
      </Card>
      <Card layout="flagDefault" headerFirst gridLayout={{ tablet: { col: 12 } }}>
        <CardHeader><h3 className="usa-card__heading">EPDRDR - Environmental Product Declaration (EPD) Repository Demonstration and Reporting</h3></CardHeader>
        <CardMedia
          className={flexAlignTop}
          imageClass={cardMedia}
        >
          <StaticImage
            src="../images/epd.png"
            alt="Environmental Product Declaration logo" />
        </CardMedia>
        <CardBody>
          <p>
            Environmental Product Declarations, known as EPDs, provide a standard
            way of declaring the impacts of manufacturing and using products through
            Life Cycle Assessment (LCA). Construction products are assessed using a
            single set of Product Category Rules (PCRs) ensuring consistent reporting
            for similar products. EPDs for construction products in Europe use the
            European Standard EN 15804 as their PCR to ensure that the information
            is provided using the same LCA rules with the same environmental indicators
            such that information for disparate products can be brought together to summarize
            the environmental impacts for a building. EPDs should always be independently
            verified by an expert familiar with the product category.
            <div style={{ marginTop: '0.5em' }}>
              The focus of our research would be to compare EPDs across USACE construction
              projects to established baselines to evaulate their effectiveness. Are we failing
              to meet guidelines, or do we exceed them? We have initiated discussions with other
              agencies (GSA and EPA) as they are ahead of DoD using and analyzing EPDs.
            </div><div style={{ marginTop: '0.5em' }}>
              Data collected and analysis provided through this project will influence the development
              and refinement of thresholds for the embodied carbon of building materials used throughout DoD.
            </div>
          </p>
        </CardBody>
      </Card>
    </CardGroup>
    </section><section className="usa-section usa-graphic-list grid-container">
      <div className="grid-row grid-gap" />
    </section>
  </Layout></>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
