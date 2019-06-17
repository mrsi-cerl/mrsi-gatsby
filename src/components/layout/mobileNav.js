import React from "react"
import closeImg from "uswds_images/close.svg"

const MobileNav = () => {
  return (
    <nav class="usa-nav sidenav-mobile">
      <button
        class="usa-nav__close"
        style={{
          backgroundImage: "url(" + closeImg + ")",
          backgroundSize: "cover",
        }}
      >
        <span class="usa-sr-only">Close</span>
      </button>
      <div class="usa-nav__inner">
        <ul class="usa-nav__primary usa-accordion">
          <li class="usa-nav__primary-item">
            <button
              class="usa-accordion__button usa-nav__link"
              aria-controls="nav-documentation"
              aria-expanded="false"
            >
              Documentation
            </button>
            <ul id="nav-documentation" class="usa-nav__submenu" hidden="">
              <li class="usa-nav__submenu-item">
                <a href="/documentation/">
                  <span>Overview</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/developers/">
                  <span>For developers</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/designers/">
                  <span>For designers</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/accessibility/">
                  <span>Accessibility</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/performance/">
                  <span>Performance guidelines</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/code-guidelines/">
                  <span>Code guidelines</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/migration/">
                  <span>Migration</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/video-tutorials/">
                  <span>Video tutorials</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/implementations/">
                  <span>Implementations</span>
                </a>
              </li>

              <li class="usa-nav__submenu-item">
                <a href="/documentation/showcase/">
                  <span>Showcase</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
