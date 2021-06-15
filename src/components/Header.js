import React, {useRef, useState} from 'react'
// import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import  TransitionLink from 'gatsby-plugin-transition-link'
import sbmBlack from '../images/sbm_black.svg'
import sbmWhite from '../images/sbm_white.svg'
import './nav.css'
import gsap from 'gsap';
import { Slant as Hamburger } from 'hamburger-react'


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
    <header className={`site-header ${homepageClass} w-full p-6 px-8`}>
      <div className="container mx-auto max-w-screen-xl flex flex-row items-center justify-between">
      <TransitionLink 
      exit={{
        length: 1,
        trigger: ({node, e, exit, entry}) => {
          // console.log(node);
          gsap.to(node.children, {y: 100, opacity: 0, duration: 0.4, stagger: -0.1, ease: 'power2.inOut'});
        }
      }}
      entry={{
        delay: 0.5,
        trigger: ({node, e, exit, entry}) => {
          // console.log(node);
          gsap.from(node, {opacity: 0, duration: 0.4, ease: 'power2.inOut'});
        }
      }}
      to="/">
        <img className="h-6 lg:h-8 dark:hidden" src={sbmBlack} alt='SBM'></img>
        <img className="h-6 lg:h-8 hidden dark:block" src={sbmWhite} alt='SBM'></img>
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
                to={index === 4 ? "/news" : navItem.link.url} 
                className={"py-6 uppercase font-medium block hover:text-primary transition duration-300"}
                exit={{
                  length: 1,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.to(node.children, {y: 100, opacity: 0, duration: 0.4, stagger: -0.1, ease: 'power2.inOut'});
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
      </nav>
          <button className="hidden lg:block uppercase text-primary border-primary border-2 rounded-full px-4 py-1 font-bold flex-shrink-0 font-sm transition duration-300 hover:bg-primary hover:text-white">Contact Us</button>
          <div className="block lg:hidden z-90">
          <Hamburger color={isOpen ? 'red' : 'white'} direction="right" label="Open Menu" onToggle={toggleNav}/>
          </div>
          <div ref={mobileNav} className="fixed lg:hidden w-full top-0 left-0 transition duration-300 ease-in-out transform -translate-y-full opacity-0 bg-white dark:bg-dark-bg z-80 p-6">
            <ul class="text-black dark:text-white w-full">
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
                to={index === 4 ? "/news" : navItem.link.url} 
                className={"py-2 uppercase font-medium block hover:text-primary transition duration-300 text-center"}
                exit={{
                  length: 1,
                  trigger: ({node, e, exit, entry}) => {
                    // console.log(node);
                    gsap.to(node.children, {y: 100, opacity: 0, duration: 0.4, stagger: -0.1, ease: 'power2.inOut'});
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