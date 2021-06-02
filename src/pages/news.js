import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
import SeO from '../components/SEO'
// import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'
import NewsGallery from '../components/slices/NewsGallery';
import NewsHero from '../components/news/NewsHero';


const News = ({ data }) => {
  if (!data) return null
  const news = data.allPrismicNews.edges

  return (
    // <Layout isHomepage={false}>
    <>
      <SeO title="News" body={"news"}/>
      <NewsHero news={news.slice(0,1)}/>
      <NewsGallery news={news.slice(1,10)}></NewsGallery>
      </>
    // </Layout>
  )
}

export const query = graphql`
query news {
    allPrismicNews(limit: 9) {
      edges {
        node {
          id
          uid
          url
          data {
            title
            hero_image
          }
        }
      }
    }
}
`

export default withPreview(News)