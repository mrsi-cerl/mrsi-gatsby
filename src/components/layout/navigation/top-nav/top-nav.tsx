import React from "react";
import Link from "../../../link";
import cx from "classnames";
import { nav, item, current } from "./top-nav.module.css";
import { Icon } from "@trussworks/react-uswds";

const TopNav = ( { path }: { path: string; } ) => {
  const prefix = "";
  const coe = path.startsWith( prefix + "/coe" );
  const cos = path.startsWith( prefix + "/cos" );
  const crst = path.startsWith( prefix + "/crst" );
  const modelrfp = path.startsWith( prefix + "/model-rfp" );
  const pdrs = path.startsWith( prefix + "/pdrs" );
  const sustain = path.startsWith( prefix + "/sustain" );
  const furniture = path.startsWith( prefix + "/furniture" );

  return (
    <nav className={ cx( nav, "site-nav-secondary" ) }>
      <ul>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: cos,
          } ) }
        >
          <Link to="/cos" title="Centers of Standardization">
            COS
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: crst,
          } ) }
        >
          <Link to="/crst" title="Combat Readiness Support Team">
            CRST
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: pdrs,
          } ) }
        >
          <Link to="/pdrs" title="MILCON Code 2 Process">
            MCA/AFH Code 2
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: coe,
          } ) }
        >
          <Link to="/coe" title="Centers of Expertise">
            CX
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: modelrfp,
          } ) }
        >
          <Link to="/model-rfp" title="Model Request for Proposal">
            Model RFP
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: sustain,
          } ) }
        >
          <Link
            to="/sustain"
            title="Engineering & Construction Sustainability CX"
          >
            Sustainability
          </Link>
        </li>
        <li
          className={ cx( item, "usa-nav__submenu-item", {
            [ current ]: furniture,
          } ) }
        >
          <Link
            to="/furniture"
            title="Furniture Program (HNC)"
          >
            Furniture
          </Link>
        </li>
        <li>
          <form
            className="usa-search usa-search--small"
            acceptCharset="UTF-8"
            action="https://search.usa.gov/search"
            id="search_form"
            method="get"
            style={ {
              marginRight: 14,
              width: 200,
              float: "right",
              marginTop: 7,
            } }
          >
            <div role="search">
              <div>
                <input name="utf8" type="hidden" value="&#x2713;" />
              </div>
              <input
                id="affiliate"
                name="affiliate"
                type="hidden"
                value="mrsi"
              />
              <label className="usa-sr-only" htmlFor="search-field-small">
                Search
              </label>
              <input
                className="usa-input"
                id="search-field-small"
                type="search"
                name="query"
                style={ {
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  borderColor: "#757575",
                } }
              />
              <button
                name="commit"
                value="Search"
                className="usa-button"
                type="submit"
                style={ { backgroundColor: "#3f82d0" } }
              >
                <Icon.Search size={4} />
                <span className="usa-sr-only">Search</span>
              </button>
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
