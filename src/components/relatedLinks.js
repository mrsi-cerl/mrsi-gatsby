import React from "react"

const RelatedLinks = ({ related_links }) => {
  if (!related_links) {
    return null
  }
  return (
    <>
      <h2>Related Links</h2>
      <ul>
        {related_links.map(e => (
          <li>
            <a href={e.url}>{e.caption}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RelatedLinks
