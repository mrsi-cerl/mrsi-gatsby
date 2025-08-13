import React from "react";
import { mrsiFooter, footerUsace} from "./footer.module.css";
import UsaceLogo from "../../../images/usace-logo-color.svg";
import Link from "../../link";
import classNames from "classnames";

const Footer = () => (
  <footer>
    <div className="usa-footer__primary-section">
      <div className={ mrsiFooter }>
        <span>
          <ul>
            <li>
              <Link to={ "/mrsi/about" } title="About Us">ABOUT US</Link>
            </li>
            <li>
              <Link to={ "/mrsi/privacy" } title="See our Privacy Policy">PRIVACY POLICY</Link>
            </li>
            <li>
              <a href="http://www.usace.army.mil/" target="_blank" rel="noopener noreferrer" title="EXTERNAL LINK to USACE home page">USACE</a>
            </li>
            <li>
              <a href="https://www.usace.army.mil/Resources/FOIA/" title="EXTERNAL LINK to USACE page about the Freedom of Information ACT" target="_blank" rel="noopener noreferrer">FOIA</a>
            </li>
            <li>
              <a href="https://prhome.defense.gov/nofear" title="EXTERNAL LINK to No Fear Act information" target="_blank" rel="noopener noreferrer">No Fear Act</a>
            </li>
            <li>
              <a href="https://www.usainscom.army.mil/isalute/" title="EXTERNAL LINK to iSALUTE page" target="_blank" rel="noopener noreferrer">iSALUTE</a>
            </li>
            <li>
              <Link to={ "/mrsi/faq" } title="Frequently Asked Questions">FAQ</Link>
            </li>
          </ul>
        </span>
      </div>
      <div className={ classNames( "grid-row", footerUsace ) }>
        <div className="grid-col-1">
          <p>
            <a href="https://www.usace.army.mil/" title="EXTERNAL LINK to USACE home page" target="_blank" rel="noopener noreferrer">
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
  </footer>
);

export default Footer;
