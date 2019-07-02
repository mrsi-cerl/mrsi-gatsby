// load fs to write to disk
var fs = require("fs")
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk")

// load aws credentials from json
var config = require("./AWS-Config.json")
AWS.config.loadFromPath("./AWS-Config.json")

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" })

// store all keys here
var allKeys = []

// function to get all keys from bucket
function listAllKeys(token, cb) {
  var opts = { Bucket: config.bucket }
  if (token) opts.ContinuationToken = token

  s3.listObjectsV2(opts, function(err, data) {
    allKeys = allKeys.concat(data.Contents)

    if (data.IsTruncated) listAllKeys(data.NextContinuationToken, cb)
    else cb()
  })
}

// get keys and print out how many afterwards
listAllKeys(null, () => {
  console.log(allKeys.length.toString() + " objects found")
  saveKeys()
})

// save keys to file in contents folder
function saveKeys() {
  var json = JSON.stringify(allKeys)
  fs.writeFile("./src/content/s3ListBucket.json", json, "utf8", err => {
    if (err) {
      console.log(err)
    } else {
      console.log("list saved to disk")
    }
  })
}
