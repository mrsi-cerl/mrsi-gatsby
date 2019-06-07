const pages = [
  {
    pathname: "/cos",
    children: [
      { pathname: "/cos/about", title: "Army Standards" },
      { pathname: "/cos/army-standards", title: "USACE Standard Designs" },
      { pathname: "/cos/standard-designs", title: "USACE Standard Designst" },
      { pathname: "/cos/points-of-contact", title: "COS Points of Contact" },
      {
        pathname: "/cos",
        subheader: "/cos/swf",
        title: "Fort Worth",
        children: [
          { pathname: "/cos/swf/about", title: "About" },
          {
            pathname: "/cos/swf/ait",
            title: "Advanced Individual Training Complex",
          },
          {
            pathname: "/cos/swf/bt-osut",
            title: "Basic Training and One Station Unit Training Complex",
          },
          { pathname: "/cos/swf/cif", title: "Central Issue Facility" },
          { pathname: "/cos/swf/dsb", title: "Drill Sergeant Barracks" },
          { pathname: "/cos/swf/gpw", title: "General Purpose Warehouse" },
          { pathname: "/cos/swf/rsb", title: "Reception Barracks" },
          {
            pathname: "/cos/swf/ssa",
            title: "Unit Supply Support Activity Facility",
          },
          { pathname: "/cos/swf/starship", title: "Starship Renovation" },
          {
            pathname: "/cos/swf/ueph",
            title: "Unaccompanied Enlisted Personnel Housing",
          },
          { pathname: "/cos/swf/wt", title: "Warriors in Transition Complex" },
        ],
      },
      {
        pathname: "/cos",
        subheader: "/cos/poh",
        children: [
          { pathname: "/cos/poh/about", title: "About" },
          { pathname: "/cos/poh/", title: "" },
        ],
      },
      {
        pathname: "/cos",
        subheader: "/cos/hnc",
        children: [
          { pathname: "/cos/hnc/about", title: "About" },
          { pathname: "/cos/hnc/", title: "" },
        ],
      },
    ],
  },
]

export default pages
