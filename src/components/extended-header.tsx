import { ExtendedNav, Header, Menu, NavDropDownButton, PrimaryNav, Search } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { mrsiHeaderBody, mrsiHeaderContainer, mrsiHeaderLogo, mrsiHeaderERDCLogo, mrsiHeaderLogin } from "./extended-header.module.css";
import MrsiLogo from "../images/mrsi-blue-logo.svg";
import ErdcLogo from "../images/ERDC-USACE-logo.png";
import MrsiWizardLogin from "../images/logintowizard.png";

const ExtendedHeader = () => {
  return (
    <Header extended={ true }>
      <div className="usa-nav-container">
        <div className={ mrsiHeaderContainer }>
          <a className={ mrsiHeaderLogo } href="/" title="Link to MRSI home page">
            <img
              style={ { width: "145px", marginLeft: "0",  marginTop: "0" } }
              src={ MrsiLogo }
              alt="MRSI logo"
            />
          </a>
          <h1 className={ mrsiHeaderBody } style={{ verticalAlign: 'top', whiteSpace: 'nowrap', marginTop: '0.5em', padding: '0' }}>
            Welcome&nbsp;to&nbsp;MRSI
            <br  style={{ verticalAlign: 'top', margin: '0', padding: '0', visibility: "hidden", height: 0 }} />
            <span className="font-sans" style={{ verticalAlign: 'top', fontSize: 'small', fontWeight: "lighter", whiteSpace: 'nowrap', margin: '0', marginLeft: '1.5em', padding: '0' }}>
              A&nbsp;Military&nbsp;Construction&nbsp;Community&nbsp;R&amp;D&nbsp;Site
            </span>
          </h1>
          <a className={ mrsiHeaderERDCLogo } href="https://www.erdc.usace.army.mil/" target="_blank" rel="noopener noreferrer" title="Link to Engineer Research and Development Center home page (external)">
            <img
              style={ { marginLeft: "0",  marginTop: "2em" } }
              src={ ErdcLogo }
              alt="Engineer Research and Development Center Logo"
            />
          </a>
          <a className={ mrsiHeaderLogin } href="https://wizards.mrsi.erdc.dren.mil/" target="_blank" rel="noopener noreferrer" title="Login to the MRSI Wizard (no login required to view this site)">
            <img
              style={{ padding: '0', marginTop: '0', marginBottom: '0' }}
              src={ MrsiWizardLogin }
              alt="MRSI Wizard Login"
              width={ 145 }
            />
          </a>
        </div>
      </div>
    </Header>
  );
};

export default ExtendedHeader;
