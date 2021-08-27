import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// let darkroot = 

const isBrowser = typeof window !== "undefined"


const SEO = ({ description, title, body }) => {
  let [now] = useState(new Date().getHours());
  let [mode, setMode] = useState(null);
  let [dark, setDark] = useState( isBrowser ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false ) : false );
  useEffect(() => {
    if (isBrowser) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        let now = new Date().getHours()
        if (now <= 18 && now >= 6 && !dark) {
          document.body.classList.toggle('dark');
          setDark(true)
        } else {
          setDark(false)
        }
        });
    }
  })
  if ((now <= 6 || now >= 18) && !dark) {
    setDark(true)
  }
  
  
  return(
  <StaticQuery
    query={`${SeoQuery}`}
    render={(data) => {
      const metaTitle = title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title
      const metaDescription = description || data.site.siteMetadata.description


      return (
        <Helmet>
          <title>{metaTitle}</title>
          {/* <body className={(dark ? 'dark ' : '') + body}></body> */}
          <body className={body}></body>
          <meta name="description" content={metaDescription} />
        </Helmet>
      )
    }}
  />
)}

const SeoQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default SEO
