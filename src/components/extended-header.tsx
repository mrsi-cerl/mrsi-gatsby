import { ExtendedNav, Header, Menu, NavDropDownButton, PrimaryNav, Search } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { mrsiHeaderBody, mrsiHeaderContainer, mrsiHeaderLogo, mrsiHeaderLogin } from "./extended-header.module.css";
import { MrsiLogo } from "./mrsi-logo";
import { ErdcLogo } from "./erdc-logo";
import { MrsiWizardLogin } from "./mrsi-wizard-login";

const ExtendedHeader = () => {
  return (
    <>
      <div className={ "usa-overlay" }></div>
      <Header extended={ true }>
        <div className="usa-nav-container">
          <div className={ mrsiHeaderContainer }>
            <div className={ mrsiHeaderLogo }>
              <MrsiLogo />
            </div>
            <div className={ mrsiHeaderBody }>
              <span className="font-sans" style={{ whiteSpace: 'nowrap', margin: '0px', padding: '0px' }}>Welcome&nbsp;to&nbsp;MRSI </span>
              <hr  style={{ margin: '0px', padding: '0px', visibility: "hidden" }} />
              <span className="font-sans" style={{ verticalAlign: 'top', fontSize: 'small', whiteSpace: 'nowrap', margin: '0px', padding: '0px' }}>A&nbsp;Military&nbsp;Construction&nbsp;Community&nbsp;R&amp;D&nbsp;Site</span>
            </div>
            <div className={ mrsiHeaderLogo }>
              <ErdcLogo />
            </div>
            <div className={ mrsiHeaderLogin }>
              <MrsiWizardLogin />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default ExtendedHeader;
