import React from 'react'
import sbmWhite from '../images/sbm_white.svg'
import { RichText } from 'prismic-reactjs'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'


const Footer = ({navigation}) => {
  if (!navigation) return null
  const bottomNav = navigation.data.top_navigation

  return (
  <footer className="bg-primary-footerbg py-24">
    <div className="mx-auto max-w-screen-xl">
      <img alt="SBM Logo" className="h-8 mx-auto mb-16" src={sbmWhite}></img>
      <hr className="border-t-1 border-white border-opacity-20"></hr>
      <div className="flex flex-row items-center justify-center w-full">
        {bottomNav.map((navItem,i) => {
          return (
              <AniLink cover direction="right" bg='#ffffff' key={`key-${i}`} duration={1} to={i === 4 ? "/news" : navItem.link.url} className="py-6 mx-6 uppercase text-white block hover:text-primary transition duration-300">
                {RichText.asText(navItem.link_label.raw)}
              </AniLink>
          )
        })}
      </div>
      <address className="text-white opacity-20 text-center text-sm">5241 Arnold Avenue<br></br>McClellan, CA 95652</address>
      <p className="my-4 text-white opacity-20 text-center text-sm">©{new Date().getFullYear()}, SBM Site Services. All rights reserved.</p>
    </div>
  </footer>
)}

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

export default Footer
