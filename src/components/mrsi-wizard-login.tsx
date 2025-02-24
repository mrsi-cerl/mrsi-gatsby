import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const MrsiWizardLogin = () => {
  return (
    <a href="https://wizards.mrsi.erdc.dren.mil/" target="_blank" rel="noopener noreferrer" title="Login to the MRSI Wizard">
      <StaticImage
        src="../images/logintowizard.png"
        alt="MRSI Wizard Login"
        layout="fixed"
        width={ 145 }
        quality={ 95 }
      />
    </a>
  );
};

export { MrsiWizardLogin };
