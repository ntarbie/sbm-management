import React, {useEffect, useState, useRef} from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SeO from "../components/SEO";
import HomepageBanner from "../components/HomepageBanner";
import SliceZone from "../components/SliceZone";
import { withPreview } from "gatsby-source-prismic";
import { RichText, Elements } from 'prismic-reactjs'
import Capabilities3D from "../components/3d/capabilities";
import Sidebar from "../components/sidebar/sidebar";
// import Prismic from '@prismicio/client'

const Capabilities = ({ data, transitionStatus, entry, exit }) => {
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
  let container = useRef(null);

  const propsWithUniqueKey = function(props, key) {
    return Object.assign(props || {}, { key });
  };

  const htmlSerializer = function(type, element, content, children, key) {
    var props = {}
    switch(type) {
      case Elements.heading1:
        props = {className: "hero-title text-center text-black font-extrabold text-3xl lg:text-6xl mb-4 max-w-24ch"}
        return React.createElement('h1', propsWithUniqueKey(props, key), children);
    }
  }


  if (!data) return null;
  const document = data.allPrismicCapabilities.edges[0].node.data;
  // console.log(document);

  return (
    // <Layout isHomepage navigation={prismicNavigation}>
    <>
      <SeO
        title="Capabilities"
        description="None"
        body="dark-header negative-header"
      />

      {/* <Capabilities3D/> */}
    <div style={{background: '#EFECE4'}}>

      <section
        className="w-full h-screen-75 flex flex-col items-center justify-center relative"
        style={{
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})`,
          backgroundImage: `url(${document.industries[0].background.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        {/* <video ref={heroVideo} autoPlay loop muted src="https://sbmqbrassets.s3.us-west-1.amazonaws.com/videos/pexels-tima-miroshnichenko-6197561.mp4" className="absolute top-0 left-0 h-full w-full object-cover z-back opacity-0"></video> */}

        <div className="flex flex-col items-center justify-center p-8">

          <RichText
            render={document.industries[0].industry_header}
            htmlSerializer={htmlSerializer}
          />
          {/* <Link to={bannerContent.link.url} className="text-white border-2 border-white py-1 px-4 uppercase font-bold rounded-full mt-4 hover:bg-white hover:text-black transition duration-300">
        {RichText.asText(bannerContent.linkLabel.raw) || 'Link To Page'}
      </Link> */}
        </div>
      </section>

      <h2 className="mt-24 text-center font-black text-4xl dark:text-black mt-12 mx-auto">{RichText.asText(document.capabilities_intro)}</h2>
        <p className="text-2xl text-center dark:text-black mx-auto" style={{maxWidth: '48ch'}}>{RichText.asText(document.capabilities_description)}</p>
      

      <div className="max-w-screen-2xl mx-auto p-4 mt-12 mb-12 flex flex-row">
        {Sidebar((<div>
          <h2  id="hello" className="my-96">Test</h2>
          <h2  id="hello2" className="my-96">Test</h2>
          <h2 id="hello3" className="my-96">Test</h2>
          <h2 id="hello4" className="my-96">Test</h2>
          <h2 id="hello5" className="my-96">Test</h2>
        </div>))}
        
      </div>
      {/* <SliceZone sliceZone={document.body}/> */}
    </div>
    </>
    // </Layout>
  );
};

export const query = graphql`
  query Capabilities {
    allPrismicCapabilities {
      edges {
        node {
          id
          data {
            capabilities_description {
              text
              type
            }
            capabilities_intro {
              text
              type
            }
            industries {
              background {
                url
              }
              industry_header {
                spans {
                  end
                  start
                  type
                }
                text
                type
              }
            }
          }
        }
      }
    }
  }
`;

export default withPreview(Capabilities);
