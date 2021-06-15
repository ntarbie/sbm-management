import React, {useState, useEffect, useRef} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Header from './Header'
import Footer from './Footer'
import './../styles/reset.css'
import './../styles/common.css'
import './../styles/style.css'
// import { Transition, TransitionGroup } from 'react-transition-group';
import gsap from 'gsap';




const Layout = ({ isHomepage, children }) => {
  const page = useRef(null);
  // useEffect( () => {
  //   gsap.to(page.current, {opacity: 1, duration: 1, delay: 1, ease: 'power2.inOut'})
  // });

  const data = useStaticQuery(graphql`
  query nav {
    allPrismicNavigation {
      edges {
        node {
          id
          data {
            top_navigation {
              link {
                type
                uid
                url
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
`)
  // const layoutProps = {
  //   setActivePage: setActivePage
  // };
  // if (!data) return null
  const prismicNavigation = data.allPrismicNavigation.edges[0].node
  return (
    <>
    <Header isHomepage={isHomepage} navigation={prismicNavigation} />
      <div className="" ref={page}>
        {children}
      </div>
    <Footer navigation={prismicNavigation} />
    </>
  )
}

export default Layout