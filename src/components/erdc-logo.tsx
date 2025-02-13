import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ErdcLogo = () => {
  return (
    <a href="https://www.erdc.usace.army.mil/" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/ERDC-USACE-logo.png"
        alt="ERDC Logo"
        layout="fixed"
        width={ 250 }
        quality={ 95 }
      />
    </a>
  );
};

export { ErdcLogo };
