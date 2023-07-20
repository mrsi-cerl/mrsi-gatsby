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
                "usa-current": e.slug === window.location.pathname,
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

function getSideNav ( pages: any[], path: string ) {
  let currPage: string = "";
  if ( path.includes( "/cos" ) ) {
    currPage = "COS";
  } else if ( path.includes( "/coe" ) ) {
    currPage = "COE";
  } else if ( path.includes( "/crst" ) ) {
    currPage = "CRST";
  } else if ( path.includes( "/model-rfp" ) ) {
    currPage = "MODELRFP";
  } else if ( path.includes( "/sustain" ) ) {
    currPage = "SUSTAIN";
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
