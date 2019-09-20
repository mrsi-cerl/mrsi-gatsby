import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function detectIE() {
              var ua = window.navigator.userAgent;

              var msie = ua.indexOf('MSIE ');
              var trident = ua.indexOf('Trident/');
              if (msie > 0 || trident > 0) {
                console.log("You're using IE. I'm sad.");
                var msg = "Until we fix a few bugs, our new site works best in Edge, Chrome, or Firefox. ";
                msg += "Please use Edge if you need to use our Wizard applications."
                alert(msg);
              }
          }

          window.onload = detectIE;
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
