import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'
import Prismic from '@prismicio/client'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import NewsGallery from '../components/slices/NewsGallery';

gsap.registerPlugin(ScrollTrigger);

const Homepage = ({ data }) => {
  // const [news, setNews] = useState([])
  // useEffect( () => {
  //   const apiEndpoint = 'https://sbmmanagement.cdn.prismic.io/api/v2'
  //   const client = Prismic.client(apiEndpoint)
  //   async function fetchData() {
  //     const response = await client.query(
  //       Prismic.Predicates.at('document.type', 'news'),
  //       { orderings: '[my.page.date desc]' }
  //     )
  //     if (response) {
  //       // response is the response object, response.results holds the documents
  //       console.log(response.results[0]);
  //       setNews(response.results)
  //     }
  //   }
  //   fetchData();
  // }, []);
    
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data
  const news = data.allPrismicNews.edges
  console.log(news);

  const bannerContent = {
    title: document.banner_title,
    description: document.banner_description,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    background: document.banner_background,
  }

  const prismicNavigation = data.prismicNavigation

  //Client Data


  return (
    <Layout isHomepage navigation={prismicNavigation}>
      <SEO title="Home" />
      <HomepageBanner bannerContent={bannerContent} />
      {news.length > 0 && <NewsGallery news={news}></NewsGallery>}
      {news.length > 0 && <SliceZone sliceZone={document.body} />}
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            banner_title {
              raw
            }
            banner_description {
              raw
            }
            banner_link {
              url
              type
              uid
            }
            banner_link_label {
              raw
            }
            banner_background {
              url
              thumbnails
              alt
            }
            body {
              ... on PrismicHomepageBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyQuote {
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                    thumbnails
                  }
                }
              }
              ... on PrismicHomepageBodyImageGallery {
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
              ... on PrismicHomepageBodyImageHighlight {
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
    allPrismicNews(limit: 4) {
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
    prismicNavigation {
      ...HeaderQuery
    }
  }
`

export default withPreview(Homepage)