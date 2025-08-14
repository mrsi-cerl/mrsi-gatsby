import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const MrsiWizardLogin = () => {
  return (
      <a href="https://wizards.mrsi.erdc.dren.mil/" target="_blank" rel="noopener noreferrer" title="Login to the MRSI Wizard (no login required to view this site)">
        <StaticImage
          style={{ padding: '0', marginTop: '100', marginBottom: '0' }}
          src="../images/logintowizard.png"
          alt="MRSI Wizard Login"
          layout="fixed"
          width={ 145 }
          quality={ 100 }
          tabIndex={0}
        />
      </a>
  )
};

export { MrsiWizardLogin };
