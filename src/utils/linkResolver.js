const linkResolver = (doc) => {
  if (doc.type === 'page' || doc.type === 'news') {
    return `/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver