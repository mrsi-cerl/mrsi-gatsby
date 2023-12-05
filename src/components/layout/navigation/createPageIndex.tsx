type PageType = {
  caption: string;
  slug: string;
};

type PageCollection = Record<string, Array<PageType>>;

type PageDataType = { allMarkdownRemark: { edges: any; }; };

const pages: PageCollection = {
  COE: [
    {
      caption: "About CX",
      slug: "/coe/",
    },
    {
      caption: "Points of Contact",
      slug: "/coe/poc",
    },
  ],
  COS: [
    {
      caption: "About COS",
      slug: "/cos/",
    },
    {
      caption: "Facilities",
      slug: "/cos/facilities",
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
      caption: "MILCON Waiver Process",
      slug: "/cos/waiver-process/",
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
      caption: "New Development",
      slug: "/model-rfp/development/",
    },
    {
      caption: "MILCON Waiver Process",
      slug: "/cos/waiver-process/",
    },
  ],
  SUSTAIN: [
    {
      caption: "About Engineering & Construction Sustainability",
      slug: "/sustain/",
    },
    {
      caption: "Points of Contact",
      slug: "/sustain/poc/",
    },
  ],
};

function getAllOfDocType ( data: PageDataType, docType: string ) {
  return data.allMarkdownRemark.edges.filter(
    ( edge: { node: { frontmatter: { doc_type: string; }; }; } ) =>
      edge.node.frontmatter.doc_type === docType
  );
}

function getAllFacilitiesForCOS ( data: any[], cos: string ) {
  return data.filter(
    itm => itm.node.frontmatter.facility_cos_short_name === cos
  );
}

function createFacilityPageIndex ( data: any[], cos: any ) {
  const facilities = getAllFacilitiesForCOS( data, cos.cos_short_name );
  const AboutEntry = [
    {
      slug: cos.slug,
      caption: "About " + cos.cos_long_name,
    },
  ];
  let p: any[] = [];

  facilities.forEach( e => {
    p.push( {
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.facility_long_name,
    } );
  } );

  p.sort( ( a, b ) => {
    if ( a.caption > b.caption ) {
      return 1;
    }
    if ( a.caption < b.caption ) {
      return -1;
    }
    return 0;
  } );

  return AboutEntry.concat( p );
}

function getCOSPages ( data: PageDataType ) {
  const cos = getAllOfDocType( data, "cos_page" );
  const facilities = getAllOfDocType( data, "facility_page" );

  let p: any = [];

  cos.forEach( ( e: any ) => {
    p.push( {
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.cos_long_name,
      children: createFacilityPageIndex( facilities, e.node.frontmatter ),
    } );
  } );

  p.sort( ( a: any, b: any ) => {
    if ( a.caption > b.caption ) {
      return 1;
    }
    if ( a.caption < b.caption ) {
      return -1;
    }
    return 0;
  } );

  return p;
}

function getPagesByDocType ( data: PageDataType, docType: string ) {
  const docTypePages = getAllOfDocType( data, docType ).map( ( e: any ) => ( {
    slug: e.node.frontmatter.slug,
    caption: e.node.frontmatter.title,
  } ) );

  return docTypePages;
}

function getChildPages (data: PageDataType, docType: string, caption: string, slug: string) {
  const dtPages = getPagesByDocType( data, docType );
  const childPages = {
    caption,
    slug,
    children: dtPages,
  };

  return childPages;
}

function getPages ( data: PageDataType, currSlug?: string ) {
  // This *becomes* all pages, but only starts with non-markdown pages
  const allPages = JSON.parse( JSON.stringify( pages ) );

  // console.log( "All Pages: ", allPages );
  // console.log( "Original Pages: ", pages );

  // Get COS markdown pages as nested tree of pages and add to all pages where they belong
  const cosPages = getCOSPages( data );
  allPages.COS = allPages.COS.concat( cosPages );

  // Get MCX/CX markdown pages and add to all pages under top-level section
  const mcxPages = getChildPages( data, "coe_mcx_page", "Mandatory Centers of Expertise", "/coe/mcx" );
  allPages.COE.splice( allPages.COE.length, 0, mcxPages );

  const ctxPages = getChildPages( data, "coe_ctx_page", "Technical Centers of Expertise", "/coe/tcx" );
  allPages.COE.splice( allPages.COE.length, 0, ctxPages );

  // Get Sustainability pages and add to all pages under top-level section
  const cxPages = getChildPages( data, "sustain_cx_page", "Subject Matter Areas", "/sustain/cx" );
  allPages.SUSTAIN.splice( allPages.SUSTAIN.length, 0, cxPages );

  const krPages = getChildPages( data, "sustain_kr_page", "Knowledge Resources", "/sustain/kr" );
  allPages.SUSTAIN.splice( allPages.SUSTAIN.length, 0, krPages );

  return allPages;
}

export default getPages;
