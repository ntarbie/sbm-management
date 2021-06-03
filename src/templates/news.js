import React, {useLayoutEffect, useRef} from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
import SeO from '../components/SEO'
import SliceZone from '../components/SliceZone'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'gatsby-image'

gsap.registerPlugin(ScrollTrigger)

const News = ({ data, transitionStatus, entry, exit }) => {
  const img = useRef(null);
  const tag = useRef(null);
  const title = useRef(null);
  const social = useRef(null);
  const article = useRef(null);
  useLayoutEffect(() => {
    if (transitionStatus !== 'entered') return;
    gsap.to(img.current, {
      scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        trigger: img.current,
        scrub: 0.5,
        anticipatePin: true,
      },
      scale: 1.05,
      opacity: 0,
      transformOrigin: 'bottom center',
      ease: 'ease'
    })
    // if (transitionStatus === 'entered'){
    //   var tl = gsap.timeline();
    //   tl.fromTo([img.current,tag.current,title.current,social.current,article.current], {opacity: 0},{
    //     opacity: 1,
    //     ease: 'power2.inOut',
    //     duration: 1,
    //     stagger: 0.2
    //   })

    // }
  })
  if (!data) return null
  const document = data.allPrismicNews.edges[0].node

  const capitalizeFirstLetter = (input) => {
    return input[0].toUpperCase() + input.slice(1)
  }

  // const prismicNavigation = data.prismicNavigation
  return (
    // <Layout isHomepage={false} navigation={prismicNavigation}>
    <>
      <SeO title={capitalizeFirstLetter(document.uid)} body="negative-header"/>
      <img ref={img} className="w-full h-96 object-cover" src={document.data.hero_image.thumbnails.HDx500.url}></img>
      <div className="p-4 mt-4">
      <div className="relative max-w-screen-md mx-auto">
        <div ref={social} className="xl:absolute top-0 transform xl:-translate-x-20 flex xl:flex-col">
          <div className="mb-2 mr-2 rounded-full h-12 w-12 bg-blue-300 text-white flex items-center justify-center hover:bg-blue-400 transition duration-300">F</div>
          <div className="mb-2 mr-2 rounded-full h-12 w-12 bg-blue-300 text-white flex items-center justify-center hover:bg-blue-400 transition duration-300">T</div>
          <div className="mb-2 mr-2 rounded-full h-12 w-12 bg-blue-300 text-white flex items-center justify-center hover:bg-blue-400 transition duration-300">I</div>
          <div className="mb-2 mr-2 rounded-full h-12 w-12 bg-blue-300 text-white flex items-center justify-center hover:bg-blue-400 transition duration-300">L</div>
        </div>
      <h3 ref={tag} className="text-primary">Special Feature</h3>
      <h1 ref={title} className="text-4xl font-normal mt-2">{document.data.title[0].text}</h1>
      </div>
      </div>
      <div ref={article}>
      <SliceZone sliceZone={document.data.body} />
      </div>
    </>
    // </Layout>
  )
}

export const query = graphql`
query NewsQuery($uid: String) {
  allPrismicNews(filter: {uid: {eq: $uid}}) {
    edges {
      node {
        uid
        data {
          hero_image {
            thumbnails {
              HDx500 {
                alt
                copyright
                url
              }
            }
          }
          title
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
                  thumbnails {
                    thumb {
                      url
                    }
                  }
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
                  alt
                  thumbnails {
                    thumb {
                      url
                    }
                  }
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

export default News