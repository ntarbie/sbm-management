import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SeO from '../components/SEO'
import HomepageBanner from '../components/HomepageBanner'
import SliceZone from '../components/SliceZone'
import { withPreview } from 'gatsby-source-prismic'
import Capabilities3D from '../components/3d/capabilities'
// import Prismic from '@prismicio/client'

const Capabilities = ({data, transitionStatus, entry, exit}) => {
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

  
  // if (!data) return null
  // const document = data.allPrismicHomepage.edges[0].node.data
  // const bannerContent = {
  //   title: document.banner_title,
  //   description: document.banner_description,
  //   link: document.banner_link,
  //   linkLabel: document.banner_link_label,
  //   background: document.banner_background,
  // }

  // const prismicNavigation = data.prismicNavigation

  //Client Data


  return (
    // <Layout isHomepage navigation={prismicNavigation}>
    <>
      <SeO title="Capabilities" description="None" body="negative-header"/>
      <div>
      <Capabilities3D/>
      </div>
      {/* <SliceZone sliceZone={document.body}/> */}
      <div className="w-full mt-8">
        <div className="">
          <div className="px-8 z-20 lg:h-full w-full flex flex-col items-start lg:items-center justify-start" style={{background: 'linear-gradient(#FBF9F6, #FBF9F680 15%, #FBF9F600 30%)'}}>
            <h2>Our Clients</h2>
          </div>
        </div>
      </div>
      </>
    // </Layout>
  )
}

// export const query = graphql`
//   query Homepage {
//     allPrismicHomepage {
//       edges {
//         node {
//           data {
//             banner_title {
//               raw
//             }
//             banner_description {
//               raw
//             }
//             banner_link {
//               url
//               type
//               uid
//             }
//             banner_link_label {
//               raw
//             }
//             banner_background {
//               url
//               alt
//             }
//             body {
//               ... on PrismicHomepageBodyText {
//                 slice_type
//                 primary {
//                   columns
//                   content {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicHomepageBodyQuote {
//                 slice_type
//                 primary {
//                   quote {
//                     raw
//                   }
//                   citation {
//                     raw
//                   }
//                   job_title {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicHomepageBodyFullWidthImage {
//                 slice_type
//                 primary {
//                   full_width_image {
//                     url
//                   }
//                 }
//               }
//               ... on PrismicHomepageBodyImageGallery {
//                 slice_type
//                 primary {
//                   gallery_title {
//                     raw
//                   }
//                 }
//                 items {
//                   image {
//                     url
//                     alt
//                   }
//                   image_description {
//                     raw
//                   }
//                   link {
//                     url
//                     type
//                     uid
//                   }
//                   link_label {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicHomepageBodyImageHighlight {
//                 slice_type
//                 primary {
//                   featured_image {
//                     url
//                     alt
//                   }
//                   title {
//                     raw
//                   }
//                   description {
//                     raw
//                   }
//                   link {
//                     url
//                     type
//                     uid
//                   }
//                   link_label {
//                     raw
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default withPreview(Capabilities)