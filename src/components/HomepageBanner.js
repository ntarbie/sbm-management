import React, {useEffect, useRef} from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HomepageBanner = ({ bannerContent, transitionStatus }) => {
  const heroBanner = useRef(null);
  const heroVideo = useRef(null);
  useEffect(() => {
    console.log(transitionStatus)
    heroVideo.current.onloadeddata = (event) => {
      gsap.fromTo(heroVideo.current, {
        opacity: 0,
        scale: 1.05
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'ease'
      })
    }
    // if (transitionStatus === 'entered') {
    //   gsap.fromTo(heroBanner.current, {
    //     height: '100vh',
    //   }, {
    //     scrollTrigger: {
    //       trigger: heroBanner.current,
    //       start: '0% 0%',
    //       end: '100% 30%',
    //       scrub: 0.6,
    //       anticipatePin: true,
    //     },
    //     height: '40vh', 
    //   })
    // }
  });

  return (
  <section
    className="w-full h-screen-75 flex flex-col items-center justify-center relative"  ref={heroBanner}
    // style={{
    //   //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})`,
    //   // backgroundImage: `url(${bannerContent.background.url})`,
    // }}
  > 
    <video ref={heroVideo} autoPlay loop muted src="https://sbmqbrassets.s3.us-west-1.amazonaws.com/videos/pexels-tima-miroshnichenko-6197561.mp4" className="absolute top-0 left-0 h-full w-full object-cover z-back opacity-0"></video>
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-center text-white font-extrabold text-3xl lg:text-6xl mb-4">
        {RichText.asText(bannerContent.title.raw)}
      </h2>
      <p className="text-white text-lg">
        {RichText.asText(bannerContent.description.raw)}
      </p>
      <Link to={bannerContent.link.url} className="text-white border-2 border-white py-1 px-4 uppercase font-bold rounded-full mt-4 hover:bg-white hover:text-black transition duration-300">
        {RichText.asText(bannerContent.linkLabel.raw) || 'Link To Page'}
      </Link>
    </div>
  </section>
)
}

export default HomepageBanner