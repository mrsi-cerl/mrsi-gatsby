import React, { Component } from "react"
import Layout from "../../../components/layout/layout"
import GoogleMapReact from "google-map-react"
import styles from "./TIA.module.css"

const TechnologyInAction = () => {
  return (
    <Layout path="/sustain/technology-in-action/">
      This is the Technology in action page
      <div className={styles.container}>
        <GoogleMapReact
          defaultCenter={{ lat: 37.27587, lng: -96.6532023 }}
          defaultZoom={3}
          bootstrapURLKeys={{ key: "AIzaSyB6afAiSLEi2h7axw-swZWNXipUYdwT0NA" }}
        />
      </div>
    </Layout>
  )
}
export default TechnologyInAction
