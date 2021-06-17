import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
import SeO from '../components/SEO'
import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'

const Page = ({ data, transitionStatus, entry, exit }) => {
  if (!data) return null
  const document = data.allPrismicPage.edges[0].node

  const capitalizeFirstLetter = (input) => {
    return input[0].toUpperCase() + input.slice(1)
  }

  // const prismicNavigation = data.prismicNavigation

  return (
    // <Layout isHomepage={false} navigation={prismicNavigation}>
    <>
      <SeO title={capitalizeFirstLetter(document.uid)} />
      <SliceZone sliceZone={document.data.body} />
      </>
    // </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            body {
              ... on PrismicPageBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyQuote {
                slice_type
                primary {
                  quote {
                    raw
                  }
                  citation {
                    raw
                  }
                  job_title {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                  }
                }
              }
              ... on PrismicPageBodyImageGallery {
                slice_type
                primary {
                  gallery_title {
                    raw
                  }
                }
                items {
                  image {
                    url
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
              ... on PrismicPageBodyImageHighlight {
                slice_type
                primary {
                  featured_image {
                    url
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
  }
`

export default withPreview(Page)