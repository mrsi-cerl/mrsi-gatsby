const upperFirst = require("lodash/upperFirst")
const camelCase = require("lodash/camelCase")

function titleize(string) {
  //   warning(
  //     typeof string === "string" && string.length > 0,
  //     "titleize(string) expects a non empty string argument."
  //   )

  return string
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function pageToTitle(page) {
  if (page.title === false) {
    return null
  }

  if (page.title) {
    return page.title
  }

  const path = page.subheader || page.pathname
  const name = path.replace(/.*\//, "")

  if (path.indexOf("/api/") !== -1) {
    return upperFirst(camelCase(name))
  }

  return titleize(name)
}

function pageToTitleI18n(page, t) {
  const path = page.subheader || page.pathname
  return t(`pages.${path}`, { ignoreWarning: true }) || pageToTitle(page)
}

module.exports = {
  titleize,
  pageToTitle,
  pageToTitleI18n,
}
