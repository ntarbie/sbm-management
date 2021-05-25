import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Header = ({ isHomepage, navigation }) => {
  if (!navigation) return null
  const homepageClass = isHomepage ? 'homepage-header' : ''
  const topNav = navigation.data.top_navigation

  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                {/* <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link> */}
                <AniLink paintDrip hex='#f28b11' duration={0.5} to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export const query = graphql`
  fragment HeaderQuery on PrismicNavigation {
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
`

export default Header