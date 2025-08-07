import React from "react";
import { mrsiFooter, footerUsace} from "./footer.module.css";
import UsaceLogo from "../../../images/usace-logo-color.svg";
import Link from "../../link";
import classNames from "classnames";

const Footer = () => (
  <div className="usa-footer__primary-section">
    <div className={ mrsiFooter }>
      <span>
        <ul>
          <li>
            <Link to={ "/mrsi/about" }>ABOUT US</Link>
          </li>
          <li>
            <Link to={ "/mrsi/privacy" }>PRIVACY POLICY</Link>
          </li>
          <li>
            <a href="http://www.usace.army.mil/" target="_blank" rel="noopener noreferrer">USACE</a>
          </li>
          <li>
            <a href="https://www.usace.army.mil/FOIA.aspx" target="_blank" rel="noopener noreferrer">FOIA</a>
          </li>
          <li>
            <a href="https://prhome.defense.gov/nofear" target="_blank" rel="noopener noreferrer">No Fear Act</a>
          </li>
          <li>
            <a href="https://www.usainscom.army.mil/isalute/" target="_blank" rel="noopener noreferrer">iSALUTE</a>
          </li>
          <li>
            <Link to={ "/mrsi/faq" }>FAQ</Link>
          </li>
        </ul>
      </span>
    </div>
    <div className={ classNames( "grid-row", footerUsace ) }>
      <div className="grid-col-1">
        <p>
          <a href="https://www.usace.army.mil/" target="_blank" rel="noopener noreferrer">
            <img
              style={ { width: "40px", marginLeft: "20px" } }
              src={ UsaceLogo }
              alt="USACE logo"
            />
          </a>
        </p>
      </div>
      <div className="grid-col-10">
        <p>
          The mission of the U.S. Army Corps of Engineers is to deliver vital
          engineering solutions, in collaboration with our partners, to secure
          our Nation, energize our economy, and reduce disaster risk.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
