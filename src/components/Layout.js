import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Header from './Header'
import Footer from './Footer'
import './../styles/reset.css'
import './../styles/common.css'
import './../styles/style.css'



const Layout = ({ isHomepage, children }) => {

    
  const data = useStaticQuery(graphql`
  query nav {
    prismicNavigation {
      ...HeaderQuery
    }
  }
`)
  const [activePage, setActivePage] = useState('Home')
  const layoutProps = {
    setActivePage: setActivePage
  };
  // if (!data) return null
  const prismicNavigation = data.prismicNavigation
  return (
  <>
    <Header active={activePage} setActivePage={setActivePage} isHomepage={isHomepage} navigation={prismicNavigation} />
    {children}
    <Footer navigation={prismicNavigation} />
  </>
)
}

export default Layout