import { ExtendedNav, Header, Menu, NavDropDownButton, PrimaryNav, Search } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { mrsiHeaderBody, mrsiHeaderContainer, mrsiHeaderLogo } from "./extended-header.module.css";
import { MrsiLogo } from "./mrsi-logo";

const ExtendedHeader = () => {
  const [ expanded, setExpanded ] = useState( false );
  const onClick = (): void => setExpanded( ( prvExpanded ) => !prvExpanded );
  const [ isOpen, setIsOpen ] = useState( [ false ] );

  const menuItems: React.ReactNode[] = [
    <a href="https://wizards.mrsi.erdc.dren.mil" key="wizard" target="_blank">
      New MRSI Wizard
    </a>,
    <a href="https://wizards.mrsi.erdc.dren.mil" key="pdrs" target="_blank">
      MCA / AFH Code 2 Wizard
    </a>,
    <a href="https://rfpwizard.mrsi.erdc.dren.mil/wizards/mbpw/Client/MTApp.application" key="modelRfp" target="_blank">
      Original Model RFP
    </a>,
    <a href="https://rfpwizard.mrsi.erdc.dren.mil/wizards/srmw/Client/CirceApp.application" key="smallprojects" target="_blank">
      Small Projects Wizard
    </a>,
    <a href="https://rfpwizard.mrsi.erdc.dren.mil/wizards/pdrsw/Client/WizardApplication.application" key="pdrs" target="_blank">
      Legacy PDRS Wizard
    </a>,
  ];

  const primaryMenuItems = [
    <>
      <NavDropDownButton
        onToggle={ (): void => {
          onToggle( 0 );
        } }
        menuId="applicationDropDown"
        isOpen={ isOpen[ 0 ] }
        label="Applications"
        isCurrent={ true }
      />
      <Menu
        key="one"
        items={ menuItems }
        isOpen={ isOpen[ 0 ] }
        id="testDropDownOne"
      />
    </>,
    <a href="/cos" key="two" className="usa-nav__link" title="Centers of Standardization">
      <span>COS</span>
    </a>,
    <a href="/crst" key="two" className="usa-nav__link" title="Combat Readiness Support Team">
      <span>CRST</span>
    </a>,
    <a href="/coe" key="two" className="usa-nav__link" title="Centers of Expertise">
      <span>MCX/CX </span>
    </a>,
    <a href="/pdrs" key="two" className="usa-nav__link" title="MILCON Code 2 Program">
      <span>MCA/AFH Code 2</span>
    </a>,
    <a href="/model-rfp" key="three" className="usa-nav__link" title="Model Request for Proprosal">
      <span>Model RFP</span>
    </a>,
    <a href="/sustain" key="two" className="usa-nav__link" title="Engineering and Construction Sustainability CX">
      <span>Sustainability</span>
    </a>,

  ];

  const onToggle = ( index: number ): void => {
    setIsOpen( ( prevIsOpen ) => {
      const newIsOpen = [ false, false ];

      newIsOpen[ index ] = !prevIsOpen[ index ];
      return newIsOpen;
    } );
  };

  return (
    <>
      <div className={ `usa-overlay ${expanded ? 'is-visible' : ''}` }></div>
      <Header extended={ true }>
        <div className="usa-navbar">
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
