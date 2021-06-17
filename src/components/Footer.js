import React from 'react'
import sbmWhite from '../images/sbm_white.svg'
import { RichText } from 'prismic-reactjs'
import TransitionLink from "gatsby-plugin-transition-link"
import gsap from 'gsap'

const Footer = ({navigation}) => {
  if (!navigation) return null
  const bottomNav = navigation.data.top_navigation

  return (
  <footer className="bg-primary-footerbg py-24 transition duration-300">
    <div className="mx-auto max-w-screen-xl">
      <img alt="SBM Logo" className="h-8 mx-auto mb-16" src={sbmWhite}></img>
      <hr className="hidden lg:block border-t-1 border-white border-opacity-20"></hr>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        {bottomNav.map((navItem,index) => {
          return (
              // <AniLink cover direction="right" bg='#ffffff' key={`key-${i}`} duration={1} to={i === 4 ? "/news" : navItem.link.url} className="py-6 mx-6 uppercase text-white block hover:text-primary transition duration-300">
              //   {RichText.asText(navItem.link_label.raw)}
              // </AniLink>
              <TransitionLink 
                key={index}
                to={index === 4 ? "/news" : navItem.link.url} 
                className={"py-6 mx-6 uppercase text-white block hover:text-primary transition duration-300"}
                exit={{
                  length: 1,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.to(node, {opacity: 0, duration: 0.4, ease: 'power2.inOut'});
                  }
                }}
                entry={{
                  delay: 0.5,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.from(node, {y: -100, opacity: 0, duration: 0.4, ease: 'power2.inOut'});
                  }
                }}

                >
                  {RichText.asText(navItem.link_label.raw)}
                </TransitionLink>
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
