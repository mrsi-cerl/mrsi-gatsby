import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ls from "./library-helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons"
import {
  faFilePdf,
  faFileWord,
  faFileImage,
  faFileVideo,
  faFilePowerpoint,
  faFileArchive,
  faFileExcel,
  faFileAlt,
} from "@fortawesome/free-regular-svg-icons"
import styles from "./library.module.css"
import cx from "classnames"

const fileTypeIcons = {
  pdf: <FontAwesomeIcon icon={faFilePdf} />,
  png: <FontAwesomeIcon icon={faFileImage} />,
  jpg: <FontAwesomeIcon icon={faFileImage} />,
  docx: <FontAwesomeIcon icon={faFileWord} />,
  zip: <FontAwesomeIcon icon={faFileArchive} />,
  ppt: <FontAwesomeIcon icon={faFilePowerpoint} />,
  pptx: <FontAwesomeIcon icon={faFilePowerpoint} />,
  doc: <FontAwesomeIcon icon={faFileWord} />,
  mov: <FontAwesomeIcon icon={faFileVideo} />,
  mp4: <FontAwesomeIcon icon={faFileVideo} />,
  xls: <FontAwesomeIcon icon={faFileExcel} />,
}

const getFileIcon = path => {
  const splitPath = path.split(".")
  const ext = splitPath[splitPath.length - 1].toLowerCase()
  if (fileTypeIcons.hasOwnProperty(ext)) {
    return fileTypeIcons[ext]
  }
  return <FontAwesomeIcon icon={faFileAlt} />
}

const getBreadcrumbs = (rootDir, dir) => {
  var new_dir = dir.replace(rootDir, "").split("/")
  //console.log(new_dir.split("/"))

  const crumbs = []

  new_dir.forEach((e, idx) => {
    if (e != "") {
      crumbs.push({
        title: e,
        path: rootDir + new_dir.slice(0, idx + 1).join("/") + "/",
      })
    }
  })

  console.log(crumbs)
  return crumbs
}

const Library = ({ rootDir, hideBC, hideTitle }) => {
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

  const bc = getBreadcrumbs(rootDir, dir)
  return (
    <>
      {hideTitle ? null : <h2>Library</h2>}

      <div className={styles.library}>
        {hideBC ? null : (
          <div className={styles.bc}>
            <a
              onClick={() => setDir(rootDir)}
              style={{ paddingRight: 5 }}
              className={cx({
                [styles.pointer]: bc.length > 0,
                [styles.bcGrey]: bc.length == 0,
              })}
            >
              {" "}
              Home
            </a>
            <span>/</span>
            {bc.map((e, idx) => (
              <>
                <a
                  onClick={() => setDir(e.path)}
                  style={{ padding: 5 }}
                  className={cx({
                    [styles.bcGrey]: bc.length == idx + 1,
                    [styles.pointer]: bc.length !== idx + 1,
                  })}
                >
                  {" "}
                  {e.title}
                </a>
                <span>/</span>
              </>
            ))}
          </div>
        )}
        <table
          class="usa-table usa-table--borderless"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {ls(rootDir, dir, data).map((e, idx) => {
              if (e.type == "dir") {
                return (
                  <tr key={idx}>
                    <td>
                      <FontAwesomeIcon icon={faFolder} color="#FFDD66" />
                      <span
                        style={{ marginLeft: 10 }}
                        onClick={() => setDir(e.Key)}
                        className={styles.pointer}
                      >
                        {e.name}
                      </span>
                    </td>
                    <td />
                    <td>{e.LastModified}</td>
                  </tr>
                )
              } else {
                return (
                  <tr key={idx}>
                    <td>
                      {getFileIcon(e.Key)}
                      <a
                        href={
                          "https://cg-d19603a8-407d-46f0-a631-c1499a028c87.s3-us-gov-west-1.amazonaws.com/" +
                          e.Key
                        }
                        target="_blank"
                        style={{ marginLeft: 10 }}
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
    </>
  )
}

export default Library
