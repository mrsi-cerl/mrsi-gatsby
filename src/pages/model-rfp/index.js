import React, { Component } from "react"
import Layout from "../../components/layout/layout"

class ModelRFPHome extends Component {
  state = {}
  render() {
    return (
      <Layout path="/model-rfp/" MaxWidth={700} centerContent>
        <h3>About the Model RFP</h3>
        <p>
          The Model Request for Proposal (RFP) is a set of templates that
          provides USACE the ability to standardize RFP structure and content
          for new Military Construction (MILCON) Design-Build (D-B) and
          Sustainment, Restoration, and Modernization (SRM) projects.
        </p>
        <p>Model RFP Benefits:</p>
        <ul>
          <li>Provides a consistent format for Request for Proposals.</li>
          <li>
            Consistency makes it easier for prospective contractors to submit
            accurate proposals.
          </li>
          <li>
            Ensures criteria and Army Standards compliance during design
            authoring and reviews, contract awards, and delivery of facilities.
          </li>
          <li>
            Supports new acquisition strategies, one change in model updates all
            future RFPs.
          </li>
          <li>
            Criteria updates by USACE Centers of Standardization (COS), SRM and
            Operations and Maintenance (O&amp;M) subject matter experts ensure
            that new policy and best practices are quickly implemented in the
            field.
          </li>
        </ul>
        <p>
          The Model RFP is generated using a web-based application called a
          Wizard.
        </p>
        <p>
          The Wizards provide standardization while letting users define project
          and facility specific Scopes of Work (SOW).
        </p>
      </Layout>
    )
  }
}

export default ModelRFPHome
