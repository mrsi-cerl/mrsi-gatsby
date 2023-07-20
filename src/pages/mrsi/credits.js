import React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/seo";

import cosIcon from "../../images/cos-icon.svg";
import pdrsIcon from "../../images/pdrs-icon.svg";
import sustainIcon from "../../images/sustain-icon.svg";
import rfpIcon from "../../images/wizard-icon.svg";

const MrsiCredits = () => (
  <Layout path={ "/mrsi/credits" } hideSideNav centerContent MaxWidth={ 900 }>
    <h1>Credits</h1>
    <p>
      <img style={ { width: 50 } } src={ rfpIcon } alt="Icon by Freepik" />
      Icon made by Freepik from www.flaticon.com
    </p>
    <p>
      <img style={ { width: 50 } } src={ cosIcon } alt="Icon by Eucalyp" />
      Icon made by&nbsp;
      <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a> from
      www.flaticon.com
    </p>
    <p>
      <img style={ { width: 50 } } src={ pdrsIcon } alt="Icon by Smashicons" />
      Icon made by&nbsp;
      <a href="https://www.flaticon.com/authors/smashicons">Smashicons</a> from
      www.flaticon.com
    </p>
    <p>
      <img style={ { width: 50 } } src={ sustainIcon } alt="Icon by Freepik" />
      Icon made by Freepik from www.flaticon.com
    </p>
  </Layout>
);

export default MrsiCredits;

export const Head = () => <Seo title="Credits" />;
