import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const MrsiWizardLogin = () => {
  return (
    <div>
      <a href="https://wizards.mrsi.erdc.dren.mil/" target="_blank" rel="noopener noreferrer" title="Login to the MRSI Wizard (no login required to view this site)">
        <StaticImage
          style={{ padding: '0', marginTop: '100', marginBottom: '0' }}
          src="../images/logintowizard.png"
          alt="MRSI Wizard Login"
          layout="fixed"
          width={ 145 }
          quality={ 100 }
        />
      </a>
      <textarea
        style={{ color: 'blue', backgroundColor: 'Yellow', fontSize: '9pt', padding: '0px', marginTop: '2px',  marginLeft: '15px', border: '0px',  resize: 'none', userSelect:"none" }}
        readOnly
        disabled
      >
        Login is only required
        for MRSI Wizard access.
      </textarea>
    </div>
  )
};

export { MrsiWizardLogin };
