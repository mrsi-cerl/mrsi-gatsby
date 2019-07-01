import React, { Component } from "react"
import Layout from "../../components/layout/layout"
class cosHome extends Component {
  state = {}
  render() {
    return (
      <Layout path="/cos/" MaxWidth={700} centerContent>
        <div>
          <h1>About the Centers of Standardization </h1>
          <p>
            This website is used by the COS to disseminate all the necessary
            information related to MILCON Business Process (MBP) and standard
            design development. On this site you will find: Points of Contact to
            all the COS and USACE Headquarters All the necessary information
            pertaining to each standard facility developed to date: Army
            Standards Army Standard Designs Adapt-Build Model information 1391
            Templates All pertinent COS policy and procedural documents
            Important website links to other pertinent COS and MBP process
            information
          </p>
        </div>
      </Layout>
    )
  }
}

export default cosHome
