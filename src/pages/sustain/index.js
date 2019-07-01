import React, { Component } from "react"
import Layout from "../../components/layout/layout"

class SustainHome extends Component {
  state = {}
  render() {
    return (
      <Layout path="/sustain/">
        <h3>About Engineering &amp; Construction Sustainability</h3>
        <p>
          As the Nation's engineer, the U.S. Army Corps of Engineers (USACE) is
          responsible for technical excellence including sustainable design and
          construction. Our passion drives innovative methods and solutions so
          that we consistently produce,
        </p>
        <blockquote class="blockquote-reverse">
          A life cycle cost effective, high performance, sustainable building of
          design and construction quality to perform and function as expected,
          verified, and tested before we leave the project site.​
          <footer>
            George Lea, P.E.{" "}
            <cite title="Position">
              Chief, Military Engineering Headquarters, U.S. Army Corps of
              Engineers
            </cite>
          </footer>
        </blockquote>
      </Layout>
    )
  }
}

export default SustainHome
