import React, { Component } from "react"
import Layout from "../../../components/layout/layout"
import GoogleMapReact from "google-map-react"
import styles from "./TIA.module.css"

// Removing API key from GoggleMap component will give us development map
// Leaving API key in there will give us production map but we have to
// Whitelist localhost during development
const TechnologyInAction = () => {
  return (
    <Layout path="/sustain/technology-in-action/">
      <div className={styles.mapContainer}>
        <GoogleMapReact
          defaultCenter={{ lat: 37.27587, lng: -96.6532023 }}
          defaultZoom={4}
          bootstrapURLKeys={{ key: "AIzaSyB6afAiSLEi2h7axw-swZWNXipUYdwT0NA" }}
        />
      </div>
      <div className={styles.listContainer}>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    </Layout>
  )
}
export default TechnologyInAction
