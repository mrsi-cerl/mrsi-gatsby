import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ls from "./library-helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
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
import Moment from "react-moment"
import moment from "moment"

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
    if (e !== "") {
      crumbs.push({
        title: e,
        path: rootDir + new_dir.slice(0, idx + 1).join("/") + "/",
      })
    }
  })

  // console.log(crumbs)
  return crumbs
}

const getFolderFileCount = (rootDir, data) => {
  return data.filter(
    file => file.Key.indexOf(rootDir) === 0 && file.Size !== ""
  ).length
}

const getMostRecentFileUpdateDate = (rootDir, data) => {
  const folderItems = data.filter(
    file => file.Key.indexOf(rootDir) === 0 && file.Size !== ""
  )
  let latestDate = null
  for (let item of folderItems) {
    if (latestDate) {
      if (moment(item.LastModified).isAfter(latestDate)) {
        latestDate = item.LastModified
      }
    } else {
      latestDate = item.LastModified
    }
  }

  if (latestDate != null) {
    return (
      <Moment
        date={latestDate}
        format="M/D/YYYY"
        withTitle
        titleFormat="DD MMMM YYYY"
        parse="MM/DD/YYYY HH:mm:ss"
      />
    )
  } else {
    return ""
  }
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
          extension
        }
      }
    }
  `)

  if (rootDir === null || rootDir === "") return null

  const bc = getBreadcrumbs(rootDir, dir)
  return (
    <>
      {hideTitle ? null : <h2>Library</h2>}

      <div className={styles.library}>
        {hideBC ? null : (
          <div className={styles.bc}>
            <span
              onClick={() => setDir(rootDir)}
              style={{ paddingRight: 5 }}
              className={cx({
                [styles.pointer]: bc.length > 0,
                [styles.bcGrey]: bc.length === 0,
              })}
            >
              {" "}
              Home
            </span>
            <span>/</span>
            {bc.map((e, idx) => (
              <>
                <span
                  onClick={() => setDir(e.path)}
                  style={{ padding: 5 }}
                  className={cx({
                    [styles.bcGrey]: bc.length === idx + 1,
                    [styles.pointer]: bc.length !== idx + 1,
                  })}
                >
                  {" "}
                  {e.title}
                </span>
                <span>/</span>
              </>
            ))}
          </div>
        )}
        <table
          className="usa-table usa-table--borderless"
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
              if (e.type === "dir") {
                return (
                  <tr key={idx}>
                    <td>
                      <FontAwesomeIcon icon={faFolder} color="#FFDD66" />
                      <span
                        style={{ marginLeft: 10 }}
                        onClick={() => setDir(e.Key + "/")}
                        className={styles.pointer}
                      >
                        {e.name}
                      </span>
                      <span
                        class="usa-tag"
                        style={{
                          padding: "0px 5px",
                          borderRadius: "5px",
                          marginLeft: "5px",
                          fontSize: "13px",
                          backgroundColor: "#565c65b3",
                        }}
                      >
                        {getFolderFileCount(
                          e.Key,
                          data.allS3ListBucketJson.nodes
                        )}
                      </span>
                    </td>
                    <td />
                    <td>
                      {getMostRecentFileUpdateDate(
                        e.Key,
                        data.allS3ListBucketJson.nodes
                      )}
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={idx}>
                    <td>
                      {getFileIcon(e.Key)}
                      <a
                        href={
                          "https://rfpwizard.mrsi.erdc.dren.mil/MRSI/" + e.Key
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: 10 }}
                      >
                        {e.name}
                      </a>
                    </td>
                    <td>{e.readableSize}</td>
                    <td>
                      <Moment
                        date={e.LastModified}
                        format="M/D/YYYY"
                        parse="MM/DD/YYYY HH:mm:ss"
                        withTitle
                        titleFormat="DD MMMM YYYY"
                      />
                    </td>
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
