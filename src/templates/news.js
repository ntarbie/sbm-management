import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SliceZone from '../components/SliceZone'

const News = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicNews.edges[0].node

  const capitalizeFirstLetter = (input) => {
    return input[0].toUpperCase() + input.slice(1)
  }

  const prismicNavigation = data.prismicNavigation

  return (
    <Layout isHomepage={false} navigation={prismicNavigation}>
      <SEO title={capitalizeFirstLetter(document.uid)} />
      <SliceZone sliceZone={document.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query NewsQuery($uid: String) {
    allPrismicNews(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            body {
              ... on PrismicNewsBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicNewsBodyQuote {
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicNewsBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                    thumbnails
                  }
                }
              }
              ... on PrismicNewsBodyImageGallery {
                slice_type
                primary {
                  gallery_title {
                    raw
                  }
                }
                items {
                  image {
                    url
                    thumbnails
                    alt
                  }
                  image_description {
                    raw
                  }
                  link {
                    url
                    type
                    uid
                  }
                  link_label {
                    raw
                  }
                }
              }
              ... on PrismicNewsBodyImageHighlight {
                slice_type
                primary {
                  featured_image {
                    url
                    thumbnails
                    alt
                  }
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                  link {
                    url
                    type
                    uid
                  }
                  link_label {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicNavigation {
      ...HeaderQuery
    }
  }
`

export default News