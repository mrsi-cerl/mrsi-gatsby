import React, { Component } from "react"
import Layout from "../../../components/layout/layout"
import GoogleMapReact from "google-map-react"
import styles from "./TIA.module.css"

const TechnologyInAction = () => {
  return (
    <Layout>
      This is the Technology in action page
      <div className={styles.container}>
        <GoogleMapReact
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        />
      </div>
    </Layout>
  )
}
export default TechnologyInAction
