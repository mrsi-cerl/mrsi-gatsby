import React from "react"

const RelatedLinks = ({ related_links }) => {
  console.log(related_links)
  if (!related_links || related_links.length == 0) {
    return null
  }
  return (
    <>
      <h2>Related Links</h2>
      <ul>
        {related_links.map((e, idx) => (
          <li key={idx}>
            <a href={e.url}>{e.caption}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RelatedLinks
