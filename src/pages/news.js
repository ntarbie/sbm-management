import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
import SeO from '../components/SEO'
// import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'
import NewsGallery from '../components/news/NewsGallery';
import NewsHero from '../components/news/NewsHero';


const News = ({ data, transitionStatus, entry, exit }) => {
  if (!data) return null
  const news = data.allPrismicNews.edges
  // const document = {type: "page", uid: 'news'}
  const readingLength = data.allPrismicNews.edges[0].node.data.body.filter(n => n.slice_type === "text").map(t => t.primary.content.text).flat()[0].split(" ").length/200;
  // console.log(readingLength);

  return (
    // <Layout isHomepage={false}>
    <>
      <SeO title="News" body={"news"}/>
      <NewsHero news={news.slice(0,1)} length={readingLength}/>
      <NewsGallery news={news.slice(1,10)}></NewsGallery>
      </>
    // </Layout>
  )
}

export const query = graphql`
query news {
    allPrismicNews(limit: 8, sort: {order: DESC, fields: last_publication_date},) {
      edges {
        node {
          id
          uid
          url
          data {
            title
            hero_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: COVER})
                }
              }
              thumbnails {
                HDx500 {
                  url
                  fluid(imgixParams: {blur: 100}) {
                    src
                  }
                }
                thumb {
                  url
                }
                
              }
            }
            body {
              ... on PrismicNewsBodyText {
                slice_type
                primary {
                  columns
                  content {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
}
`

export default withPreview(News)