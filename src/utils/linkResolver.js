const linkResolver = (doc) => {
  if (doc.type === 'page' ) {
    return `/${doc.uid}`
  } else if (doc.type === 'news') {
    return `/news/${doc.uid}`
  } 
  return '/'
}

module.exports = linkResolver