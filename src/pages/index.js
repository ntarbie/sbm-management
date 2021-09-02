import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SeO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'
import clientVideo from '../assets/videos/SBM_Clients.mp4'
import HomeGrid from '../components/homegrid/homegrid'
import Leadership from '../components/slideshows/leadership';
import LeadershipSlides from '../components/slideshows/leadership2'
// import Prismic from '@prismicio/client'

const Homepage = ({data, transitionStatus, entry, exit}) => {
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
  const bannerContent = {
    title: document.banner_title,
    description: document.banner_description,
    link: document.banner_link,
    linkLabel: document.banner_link_label,
    background: document.banner_background,
  }
 
  // const prismicNavigation = data.prismicNavigation

  //Client Data


  return (
    // <Layout isHomepage navigation={prismicNavigation}>
    <>
      <SeO title="Home" description="None" body="negative-header dark-header"/>
      <HomepageBanner bannerContent={bannerContent} transitionStatus={transitionStatus} />
        <div className="bg-gradient-to-b from-white to-gray-100 p-2">
        <h2 className="mt-24 text-center font-black text-4xl dark:text-black mt-12 mx-auto">Who we are</h2>
        <p className="text-2xl text-center dark:text-black mx-auto" style={{maxWidth: '70ch'}}>At SBM, we are focused on developing empowered associates, standardized processes, management systems, and reporting tools that make our clients lives easier.</p>
      <div className="relative">
      <HomeGrid></HomeGrid>
      </div>
        </div>
      <div className="bg-white p-2">
      <h2 className="mt-24 text-center font-black text-4xl dark:text-black mt-12 mx-auto">Our Leadership</h2>
        <p className="text-2xl text-center dark:text-black mx-auto" style={{maxWidth: '48ch'}}>A few words from our leaders.</p>
      <div className="relative overflow-visible">
    {/* <div className="absolute top-0 left-0 h-full w-full z-100 pointer-events-none py-12"  style={{backgroundImage: 'linear-gradient(90deg, #FBF8F5 10%, transparent 20%, transparent 80%, #FBF8F5 90%)'}}></div> */}
      <div className="max-w-screen-2xl mx-auto overflow-visible relative z-90">
      {Leadership()}
      </div>
      </div>
      </div>

      <SliceZone sliceZone={document.body}/>
      <div className="w-full">
        <div className="relative">
          <div className="px-8 lg:absolute z-20 lg:h-full w-full flex flex-col items-start lg:items-center justify-start">
            <h2 className="font-black dark:text-black mt-12">Our Clients</h2>
            <p className="font-semibold text-center dark:text-black">Our client base includes Life Science, Hi-Tec<br></br>Aerospace and Financial organizations.</p>
          </div>
          <video autoPlay playsInline muted preload="auto" loop className="w-full z-10" src={clientVideo}></video>
        </div>
      </div>
      </>
    // </Layout>
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
                  citation {
                    raw
                  }
                  job_title {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
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

export default Homepage