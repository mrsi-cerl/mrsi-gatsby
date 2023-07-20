import { Button, Card, CardBody, CardFooter, CardGroup, CardHeader, CardMedia } from "@trussworks/react-uswds";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { buttonLink, cardMedia, flexAlignCenter, homeImage } from "../components/index.module.css";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Link from "../components/link";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
  <Layout title="Home" hideSideNav path="/" centerContent>
    <section className="site-hero">
      <div
        className={ cx( homeImage, "grid-container" ) }
        style={ { height: "400px" } }
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
      <CardGroup>
        <Card
          layout="flagDefault"
          headerFirst
          gridLayout={ { tablet: { col: 12 } } }
        >
          <CardHeader><h3 className="usa-card__heading">COS</h3></CardHeader>
          <CardMedia
            className={ flexAlignCenter }
            imageClass={ cardMedia }
          >
            <StaticImage
              src="../images/cos-icon.png"
              alt=""
            />
          </CardMedia>
          <CardBody>
            <p>
              Find the Army's standardized facility types, the Army Standards and Standard Designs, and reach out to Subject Matter Experts.
            </p>
          </CardBody>
          <CardFooter>
            <Button type="button" className={buttonLink}>
              <Link to={ "/cos" }>Learn about the Army's standardized facilites</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card layout="flagDefault" headerFirst gridLayout={ { tablet: { col: 12 } } }>
          <CardHeader><h3 className="usa-card__heading">MCA/AFH Code 2</h3></CardHeader>
          <CardMedia
            className={ flexAlignCenter }
            imageClass={ cardMedia }
          >
            <StaticImage
              src="../images/pdrs-icon.png"
              alt=""
            />
          </CardMedia>
          <CardBody>
            <p>
              The Army’s Code 2 process supports the programming and budget process in advance
              of budget lock. The PDR document is written, submitted, and reviewed
              within the MCA Code 2 Wizard. Starting with the FY26 MCA/AFH Program, this
              tool is also where the 35% Certification documents will be submitted and reviewed.
            </p>
          </CardBody>
          <CardFooter>
            <Button type="button" className={buttonLink}>
              <Link to={ "/pdrs" }>Learn more about the Code 2 process</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card layout="flagDefault" headerFirst gridLayout={ { tablet: { col: 12 } } }>
          <CardHeader><h3 className="usa-card__heading">Model RFP</h3></CardHeader>
          <CardMedia
            className={ flexAlignCenter }
            imageClass={ cardMedia }
          >
            <StaticImage
              src="../images/wizard-icon.png"
              alt=""
            />
          </CardMedia>
          <CardBody>
            <p>
              Through the use of curated content developed by USACE Subject
              Matter Experts, the Model RFP guides users in the development of
              Requests for Proposal (RFP). This helps ensure compliance with the
              latest policies, regulations, and best practices; improves
              quality; and reduces the time required to develop RFP.
            </p>
          </CardBody>
          <CardFooter>
            <Button type="button" className={buttonLink}>
              <Link to={ "/model-rfp" }>See how we build standardized RFP and other documents</Link>
            </Button>
          </CardFooter>
        </Card>

      </CardGroup>

    </section>
    <section className="usa-section usa-graphic-list grid-container">
      <div className="grid-row grid-gap" />
    </section>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
