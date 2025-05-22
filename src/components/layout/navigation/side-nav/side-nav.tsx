import React from "react";
import Link from "../../../link";
import cx from "classnames";
import { nav } from "./side-nav.module.css";
import { Accordion } from '@trussworks/react-uswds';
import { AccordionItemProps } from "@trussworks/react-uswds/lib/components/Accordion/Accordion";


const compareCaption = ( a: { caption: { toLowerCase: () => number; }; }, b: { caption: { toLowerCase: () => number; }; } ) => {
  if ( a.caption.toLowerCase() < b.caption.toLowerCase() ) return -1;
  if ( a.caption.toLowerCase() > b.caption.toLowerCase() ) return 1;
  return 0;
};

function createAcordianList ( p: { children: any[]; caption: any; slug: React.Key | null | undefined; }, idx: number, currPath: string ) {
  const openAccordion = p.children.find( ( e ) => e.slug === currPath )
    ? true
    : false;

  // don't mutate the original
  const children = [ ...p.children ].sort( compareCaption );

  const content = (
    <ul className="usa-sidenav__sublist">
      { children.map( ( e, index ) => {
        return (
          <li
            key={ e.slug }
            className={ cx( "usa-sidenav__item", {
              "usa-current": e.slug === currPath,
            } ) }
          >
            <Link
              to={ e.slug }
              className={ cx( {
                "usa-current": e.slug === "window.location.pathname",
              } ) }
            >
              { e.caption }
            </Link>
          </li>
        );
      } ) }
    </ul> );

  const items: AccordionItemProps[] = [
    {
      id: "1",
      title: p.caption,
      content: content,
      expanded: openAccordion,
      headingLevel: 'h4',
      className: "sideNavAccordion"
    }
  ]

  return (
    <li className="usa-sidenav__items" key={ p.slug }>
      <Accordion bordered={ false } multiselectable={true} items={ items } />
    </li>
  );
}

function createNavList ( menuItems: any[], currPath: string ) {
  const menu = menuItems.map( ( p, idx ) => {
    if ( p.children ) {
      return createAcordianList( p, idx, currPath );
    } else {
      return (
        <li
          key={ p.slug }
          className={ cx( "usa-sidenav__item", {
            "usa-current": p.slug === currPath,
          } ) }
        >
          <Link to={ p.slug }>{ p.caption }</Link>
        </li>
      );
    }
  } );

  return menu;
}

function createPDRSNavList(p: any, currPath: string) {
  return (
    <div>
    <li
      className={cx("usa-sidenav__item", {
        "usa-current": currPath,
      })}
    >
      <Link to=".">About MCA/AFH Code2</Link>
    </li>
    <li className="usa-sidenav__item">
      <Link to="https://www.wbdg.org/ffc/dod/unified-facilities-criteria-ufc/ufc-3-740-05" target="_blank" rel="noopener noreferrer"><b>CSRA Templates and Information</b><br/>
      <small><i>The <b>UFC 3-740-05 Website</b> contains a checklist, the CSRA model template, CSRA Report template, and an example merged CSRA PDF report along with the UFC for CSRAs on MILCON projects.</i></small>
      </Link>
    </li>
    <li className="usa-sidenav__item">
      <Link to="https://usace.dps.mil/sites/KMP-CEC/SitePages/Cost-Tools.aspx" target="_blank" rel="noopener noreferrer"><b>Cost Risk Analysis: HQ Cost CoP website</b><br/>
      <small><i>The HQ Cost CoP website contains a section for <b>Cost Risk Analysis</b> which contains links to the Civil Works guidance manual, CSRA template, ARA template, CSRA report (template + example merged CSRA PDF report), etc.<br/>
      <b>***PLEASE NOTE***</b> this site is only accessible to USACE personnel.</i></small>
      </Link>
    </li>
    </div>
  );
}

function createCOENavList( menuItems: any[], currPath: string ) {
  const menu = createNavList( menuItems, currPath );
  const menu2 = menu.concat(
  <li className="usa-sidenav__item">
    <Link to="https://usace.dps.mil/:f:/s/TDL-CECW-EC-CXEducationalSeries/El0761ugJVhCoYvLFVxEpsQBdDk3iDTZv6U4OvOlEJ_F1A?e=yWW0Yj"
      title = "* NEW * Center of Expertise Master File, Webinars, Schedules" target="_blank" rel="noopener noreferrer">
        <b>* NEW *</b> CX Master File, Webinars, Schedules<br />
        <small><i><b>***PLEASE NOTE***</b> this external site requires CAC login.</i></small>
    </Link>
  </li>
  )
  return menu2;
}

function getSideNav ( pages: any[], path: string ) {
  let currPage: any = "";
  if ( path.includes( "/cos" ) ) {
    currPage = "COS";
  } else if ( path.includes( "/coe" ) ) {
    currPage = "COE";
    return createCOENavList( pages[ currPage ], path );
  } else if ( path.includes( "/crst" ) ) {
    currPage = "CRST";
  } else if ( path.includes( "/model-rfp" ) ) {
    currPage = "MODELRFP";
  } else if ( path.includes( "/sustain" ) ) {
    currPage = "SUSTAIN";
  } else if ( path.includes( "/pdrs" ) ) {
    currPage = "PDRS";
    return createPDRSNavList( pages[ currPage ], path );
  } else {
    return null;
  }
  return createNavList( pages[ currPage ], path );
}

const SideNav = ( { style, pages, path }: { style?: string, pages: any[], path: string} ) => {
  return (
    <aside className={ cx( nav, style ) }>
      <ul className="usa-sidenav">{ getSideNav( pages, path ) }</ul>
    </aside>
  );
};

export default SideNav;
