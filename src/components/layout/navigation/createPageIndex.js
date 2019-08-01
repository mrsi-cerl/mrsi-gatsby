const pages = {
  COS: [
    {
      caption: "About COS",
      slug: "/cos/",
    },
    {
      caption: "Army Standards",
      slug: "/cos/army-standards",
    },
    {
      caption: "Standard Designs",
      slug: "/cos/standard-designs",
    },
    {
      caption: "Points of Contact",
      slug: "/cos/poc",
    },
  ],
  CRST: [
    {
      slug: "/crst/",
      caption: "About CRST",
    },
    {
      caption: "Subject Matter Experts",
      slug: "/crst/subject-matter-experts",
    },
  ],
  MODELRFP: [
    {
      caption: "About Model RFP",
      slug: "/model-rfp/",
    },
    {
      caption: "MILCON D-B",
      slug: "/model-rfp/milcon",
    },
    {
      caption: "Small Projects",
      slug: "/model-rfp/small-projects/",
    },
    {
      caption: "MILCON Waiver Process",
      slug: "/model-rfp/waiver-process/",
    },
  ],
  SUSTAIN: [
    {
      caption: "About Engineering & Construction Sustainability ",
      slug: "/sustain/",
    },
    {
      caption: "Centers of Expertise POC",
      slug: "/sustain/poc",
    },
    {
      caption: "Upcoming Events",
      slug: "/sustain/events",
    },
    {
      caption: "News & Announcements",
      slug: "/sustain/news",
    },
    {
      caption: "Webinars",
      slug: "/sustain/webinars",
    },
    {
      caption: "Technology in Action",
      slug: "/sustain/technology-in-action/",
    },
  ],
}

function getAllOfDocType(data, docType) {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type == docType
  )
}

function getAllFacilitiesForCOS(data, cos) {
  return data.filter(itm => itm.node.frontmatter.facility_cos_short_name == cos)
}

function createFacilityPageIndex(data, cos) {
  const facilities = getAllFacilitiesForCOS(data, cos.cos_short_name)
  const AboutEntry = [
    {
      slug: cos.slug,
      caption: "About " + cos.cos_long_name,
    },
  ]
  let p = []

  facilities.forEach(e => {
    p.push({
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.facility_long_name,
    })
  })

  p.sort((a, b) => {
    if (a.caption > b.caption) {
      return 1
    }
    if (a.caption < b.caption) {
      return -1
    }
    return 0
  })

  return AboutEntry.concat(p)
}

function getCOSPages(data) {
  const cos = getAllOfDocType(data, "cos_page")
  const facilities = getAllOfDocType(data, "facility_page")

  let p = []

  cos.forEach(e => {
    p.push({
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.cos_long_name,
      children: createFacilityPageIndex(facilities, e.node.frontmatter),
    })
  })

  p.sort((a, b) => {
    if (a.caption > b.caption) {
      return 1
    }
    if (a.caption < b.caption) {
      return -1
    }
    return 0
  })

  return p
}

function getSustainPages(data) {
  const cxPageData = getAllOfDocType(data, "sustain_cx_page").map(e => ({
    slug: e.node.frontmatter.slug,
    caption: e.node.frontmatter.title,
  }))
  const krPageData = getAllOfDocType(data, "sustain_kr_page").map(e => ({
    slug: e.node.frontmatter.slug,
    caption: e.node.frontmatter.title,
  }))

  return {
    cxPageData,
    krPageData,
  }
}

function getPages(data, currSlug) {
  const allPages = JSON.parse(JSON.stringify(pages))
  const cosPages = getCOSPages(data)
  allPages.COS = allPages.COS.concat(cosPages)
  const sustainPages = getSustainPages(data)

  const cxPages = {
    caption: "Centers of Expertise",
    slug: "/sustain/cx",
    children: sustainPages.cxPageData,
  }
  const krPages = {
    caption: "Knowledge Resources",
    slug: "/sustain/kr",
    children: sustainPages.krPageData,
  }

  allPages.SUSTAIN.splice(2, 0, krPages)
  allPages.SUSTAIN.splice(2, 0, cxPages)

  return allPages
}

export default getPages
