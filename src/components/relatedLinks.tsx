import React from "react";

type RelatedLinkType = {
  length: number,
  url: string,
  caption: string;
};

type RelatedLinksProps = {
  related_links: Array<RelatedLinkType>;
}

const RelatedLinks = ( { related_links }: RelatedLinksProps) => {
  if (!related_links || related_links.length === 0) {
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
