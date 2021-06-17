import React, { useEffect } from 'react'
import { Link } from 'gatsby'
// import { RichText } from 'prismic-reactjs'
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
    ScrollTrigger.batch('div.news', {
      start: "top 80%",
      onEnter: (elements, triggers) => {
        gsap.to(elements, {opacity: 1, y: 0, stagger: 0.15, ease: 'power2.Out'});
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {opacity: 0, y: '24px', stagger: 0.15, ease: 'power2.inOut'})
      }
    })
  }, []);

  

  return (
    <div className="px-6">
    <div className="max-w-screen-xl mx-auto my-16">
      <h3>All Stories</h3>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl mx-auto my-4">
        {news.map((entry,index) => {
          return (
            <div className="news opacity-0 translate-y-12 transform rounded-lg overflow-hidden bg-white dark:bg-dark-card shadow-md" key={index}>
              <img alt={`${entry.node.data.title[0].text || null}`} height="200" className="w-full object-cover h-36" src={entry.node.data.hero_image.thumbnails.thumb.url || null}></img>
              <div className="p-4">
              <p className="text-sm">{entry.node.data.title[0].text || null}</p>
              <p className="text-sm mb-0 p-0"><Link to={entry.node.url} className="read-article">Read Article</Link></p>
              </div>
            </div>
          )
        })}
        </div>
    </div>
    </div>
  )
}

export default ImageGallery