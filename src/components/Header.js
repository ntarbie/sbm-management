import React, {useRef, useState} from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import  TransitionLink from 'gatsby-plugin-transition-link'
import sbmBlack from '../images/sbm_black.svg'
import sbmWhite from '../images/sbm_white.svg'
import './nav.css'
import gsap from 'gsap';
import { Slant as Hamburger } from 'hamburger-react'


const isBrowser = typeof window !== "undefined"

const Header = ({ isHomepage, navigation, setActivePage, active }) => {
  const [isOpen, setOpen] = useState(false)
  const mobileNav = useRef(null);
  if (!navigation) return null
  const homepageClass = isHomepage ? 'homepage-header' : ''
  const topNav = navigation.data.top_navigation
  function toggleNav() {
    console.log('toggle');
    mobileNav.current.classList.toggle('opacity-0')
    mobileNav.current.classList.toggle('-translate-y-full')
    setOpen(!isOpen);
  }

  return (
    <header className={`site-header absolute ${homepageClass} w-full px-6`} style={{}}>
      <div className="container mx-auto max-w-screen-xl flex flex-row items-center justify-between">
      <TransitionLink 
      exit={{
        length: 0.4,
        trigger: ({node, e, exit, entry}) => {
          // console.log(node);
          gsap.to(node, {opacity: 0, duration: 0.4, ease: 'ease'});
        }
      }}
      entry={{
        delay: 0.4,
        trigger: ({node, e, exit, entry}) => {
          // console.log(node);
          gsap.from(node, {opacity: 0, duration: 0.3, ease: 'ease'});
        }
      }}
      to="/">
        <img className="h-6 lg:h-8 dark:hidden dark-logo" src={sbmBlack} alt='SBM'></img>
        <img className="h-6 lg:h-8 hidden dark:block light-logo" src={sbmWhite} alt='SBM'></img>
       </TransitionLink>
      <nav className="hidden lg:block w-full mx-24"> 
        <ul className="flex-row items-baseline justify-around hidden lg:flex">
          {topNav.map((navItem, index) => {

            return (
              <li key={`link-${index}`}>
                {/* <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link> */}
                {/* <AniLink cover direction="right" bg='#ffffff' duration={1.5}  to={index === 4 ? "/news" : navItem.link.url} className={"py-6 uppercase font-medium block hover:text-primary transition duration-300"}>
                  {RichText.asText(navItem.link_label.raw)}
                </AniLink> */}
                <TransitionLink 
                to={index === 2 ? "/news" : index === 0 ? "/capabilities" : '/joinus'} 
                className={`py-6 uppercase font-medium block hover:text-primary transition duration-300 ${isBrowser ? window.location.pathname === (index === 4 ? "/news" : navItem.link.url) ? 'active' : '' : ''}`}
                exit={{
                  length: 1,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.to(node, { opacity: 0, duration: 0.4, ease: 'ease'});
                  }
                }}
                entry={{
                  delay: 0.5,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.from(node, {opacity: 0, duration: 0.4, ease: 'ease'});
                  }
                }}
                >
                  {RichText.asText(navItem.link_label.raw)}
                </TransitionLink>
              </li>
            )
          })}
        </ul>
      </nav>
          <button className="hidden lg:block uppercase text-primary border-primary border-2 rounded-full px-4 py-1 font-bold flex-shrink-0 font-sm transition duration-300 hover:bg-primary hover:text-white">Contact Us</button>
          <div className="block lg:hidden z-90 bg-white">
          <Hamburger color={isOpen ? 'red' : 'black'} direction="right" label="Open Menu" onToggle={toggleNav}/>
          </div>
          <div ref={mobileNav} className="fixed lg:hidden w-full top-0 left-0 transition duration-300 ease-in-out transform -translate-y-full opacity-0 bg-white dark:bg-dark-bg z-80 p-6">
            <ul className="text-black dark:text-white w-full">
            {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                {/* <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link> */}
                {/* <AniLink cover direction="right" bg='#ffffff' duration={1.5}  to={index === 4 ? "/news" : navItem.link.url} className={"py-6 uppercase font-medium block hover:text-primary transition duration-300"}>
                  {RichText.asText(navItem.link_label.raw)}
                </AniLink> */}
                <TransitionLink 
                to={index === 1 ? "/news" : index === 0 ? "/capabilities" : navItem.link.url} 
                className={"py-2 uppercase font-medium block hover:text-primary transition duration-300 text-center"}
                exit={{
                  length: 1,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.to(node, { opacity: 0, duration: 0.4, ease: 'power2.inOut', onStart: () => {
                      toggleNav();
                    }});
                  }
                }}
                entry={{
                  delay: 0.5,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.from(node, {opacity: 0, duration: 0.4, ease: 'power2.inOut'});
                  }
                }}

                >
                  {RichText.asText(navItem.link_label.raw)}
                </TransitionLink>
              </li>
            )
          })}
            </ul>
          </div>
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