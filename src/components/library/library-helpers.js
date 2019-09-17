import React from "react"

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  if (bytes === 0) return "0 Bytes"
  var ii = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return (
    <>
      {Math.round(bytes / Math.pow(1024, ii), 2)}
      &nbsp;
      {sizes[ii]}
    </>
  )
}

function isfolder(path) {
  return path.endsWith("/")
}

// Convert cars/vw/golf.png to golf.png
function fullpath2filename(path) {
  return path.replace(/^.*[\\/]/, "")
}

// Convert cars/vw/golf.png to cars/vw
function fullpath2pathname(path) {
  return path.substring(0, path.lastIndexOf("/") + 1)
}

function ls(rootDir, dir, data) {
  // filter everything except direct descendants of this dir
  const new_data = data.allS3ListBucketJson.nodes.filter(e => {
    //return e.Key.startsWith(dir)
    const isFileInDir = fullpath2pathname(e.Key) === dir && e.Key !== dir
    const isDirInDir =
      isfolder(e.Key) &&
      e.Key.substring(0, e.Key.lastIndexOf("/", e.Key.length - 2) + 1) === dir
    return isDirInDir || isFileInDir
  })
  // add metadata for listing the dir
  new_data.forEach(e => {
    if (isfolder(e.Key)) {
      e.type = "dir"
      e.name = e.Key.substring(
        e.Key.lastIndexOf("/", e.Key.length - 2) + 1,
        e.Key.length
      )
    } else {
      e.type = "file"
      e.name = fullpath2filename(e.Key)
    }
    e.readableSize = bytesToSize(e.Size)
  })
  // console.log(new_data)

  return new_data
}

export default ls
