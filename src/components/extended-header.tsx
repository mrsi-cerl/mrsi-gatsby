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
              <span className="font-sans" style={{ verticalAlign: 'top', whiteSpace: 'nowrap', margin: '0', padding: '0' }}>Welcome&nbsp;to&nbsp;MRSI</span>
              <br  style={{ verticalAlign: 'top', margin: '0', padding: '0', visibility: "hidden", height: 0 }} />
              <span className="font-sans" style={{ verticalAlign: 'top', fontSize: 'small', fontWeight: "lighter", whiteSpace: 'nowrap', margin: '0', marginLeft: '2em', padding: '0' }}>A&nbsp;Military&nbsp;Construction&nbsp;Community&nbsp;R&amp;D&nbsp;Site</span>
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
