import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ls from "./library-helpers"

const Library = ({ rootDir }) => {
  const [dir, setDir] = useState(rootDir)
  const data = useStaticQuery(graphql`
    query MyQuery {
      allS3ListBucketJson {
        nodes {
          Key
          Size
          LastModified
        }
      }
    }
  `)

  return (
    <div>
      <h2>File Library</h2>
      <button onClick={() => setDir(rootDir)}>Reset</button>
      <table class="usa-table usa-table--borderless" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>File/Dir</th>
            <th>Size</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {ls(rootDir, dir, data).map((e, idx) => {
            if (e.type == "dir") {
              return (
                <tr key={idx} onClick={() => setDir(e.Key)}>
                  <td>{e.name}</td>
                  <td />
                  <td>{e.LastModified}</td>
                </tr>
              )
            } else {
              return (
                <tr key={idx}>
                  <td>
                    <a
                      href={
                        "https://cg-d19603a8-407d-46f0-a631-c1499a028c87.s3-us-gov-west-1.amazonaws.com/" +
                        e.Key
                      }
                      target="_blank"
                    >
                      {e.name}
                    </a>
                  </td>
                  <td>{e.readableSize}</td>
                  <td>{e.LastModified}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Library