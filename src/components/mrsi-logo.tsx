import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const MrsiLogo = () => {
  return (
    <a href="/">
      <StaticImage
        src="../images/mrsi-blue-logo.png"
        alt="MRSI Logo"
        layout="fixed"
        width={ 145 }
        quality={ 95 }
      />
    </a>
  );
};

export { MrsiLogo };
