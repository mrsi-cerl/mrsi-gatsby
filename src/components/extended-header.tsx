import { ExtendedNav, Header, Menu, NavDropDownButton, PrimaryNav, Search } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { mrsiHeaderBody, mrsiHeaderContainer, mrsiHeaderLogo } from "./extended-header.module.css";
import { MrsiLogo } from "./mrsi-logo";

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
              Welcome to MRSI
              {/* <p className="font-sans-sm">
                Supporting Military Construction
              </p > */}
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default ExtendedHeader;
