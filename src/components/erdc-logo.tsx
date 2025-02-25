import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ErdcLogo = () => {
  return (
    <div style={{float: 'none', margin:'0', verticalAlign: 'top'}}>
      <a href="https://www.erdc.usace.army.mil/" target="_blank" rel="noopener noreferrer">
      <StaticImage
        src="../images/ERDC-USACE-logo.png"
        alt="Engineer Research and Development Center Logo"
        layout="fixed"
        height={ 95 }
        width={ 275 }
        quality={ 95 }
      />
      </a>
    </div>
  );
};

export { ErdcLogo };
