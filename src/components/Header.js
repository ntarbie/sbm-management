import React from 'react'
// import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Link from 'gatsby-plugin-transition-link'
import sbmBlack from '../images/sbm_black.svg'
import './nav.css'


const Header = ({ isHomepage, navigation, setActivePage, active }) => {
  if (!navigation) return null
  const homepageClass = isHomepage ? 'homepage-header' : ''
  const topNav = navigation.data.top_navigation

  return (
    <header className={`site-header ${homepageClass} w-full`}>
      <div className="container mx-auto max-w-screen-xl flex flex-row items-center">
      <AniLink cover direction="right" bg='#ffffff' duration={1} duration={1} to="/">
        <img className="h-8" src={sbmBlack} alt='SBM'></img>
       </AniLink>
      <nav className="w-full mx-24"> 
        <ul className="flex flex-row items-baseline justify-around">
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                {/* <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link> */}
                <AniLink cover direction="right" bg='#ffffff' duration={1.5}  to={index === 4 ? "/news" : navItem.link.url} className={"py-6 uppercase font-medium block hover:text-primary transition duration-300"}>
                  {RichText.asText(navItem.link_label.raw)}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
          <button className="uppercase text-primary border-primary border-2 rounded-full px-4 py-1 font-bold flex-shrink-0 font-sm transition duration-300 hover:bg-primary hover:text-white">Contact Us</button>
      </div>
    </header>
  )
}

// export const query = graphql`
//   fragment HeaderQuery on PrismicNavigation {
//     data {
//       top_navigation {
//         link {
//           type
//           uid
//           url
//         }
//         link_label {
//           raw
//         }
//       }
//     }
//   }
// `

export default Header