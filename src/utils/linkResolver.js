const linkResolver = (doc) => {
  console.log(doc);
  if (doc.isBroken) {
    return 'not-found';
  }
  if (doc.type === 'page' ) {
    return `/${doc.uid}`
  }
  if (doc.type === 'news') {
    return `/article/${doc.uid}`
  } 
  return '/'
}

module.exports = linkResolver