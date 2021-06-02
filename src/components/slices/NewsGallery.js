import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = ({ news }) => {
  useEffect( () => {
    // gsap.fromTo(".news", {
    //   opacity: 0,
    //   y: 24
    // }, {
    //   opacity: 1,
    //   y: 0, 
    //   duration: .7,
    //   stagger: 0.3,
    // })
    ScrollTrigger.batch('.news', {
      start: "top 75%",
      onEnter: (elements, triggers) => {
        gsap.to(elements, {opacity: 1, y: 0, stagger: 0.15, ease: 'power2.Out'});
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {opacity: 0, y: '24px', stagger: 0.15, ease: 'power2.inOut'})
      }
    })
  }, []);

  return (
    <div class="grid grid-rows-1 grid-cols-3 gap-4 max-w-screen-xl mx-auto my-16">
      {news.map(entry => {
        return (
          <>
          <div className="news opacity-0 translate-y-12 transform rounded-lg overflow-hidden" key={entry.uid}>
            <img alt={`${entry.node.data.title[0].text || null}`} height="400" className="w-full object-cover" src={entry.node.data.hero_image.thumb.url || null}></img>
            <h2>{entry.node.data.title[0].text || null}</h2>
          </div>
          </>
        )
      })}
      </div>
  )
}

export default ImageGallery