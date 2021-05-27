import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = ({ news }) => {
  useEffect( () => {
    gsap.fromTo(".news", {
      opacity: 0,
      y: 24
    }, {
      opacity: 1,
      y: 0, 
      duration: .7,
      stagger: 0.3,
    })
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      {news.map(entry => {
        return (
          <>
          <div className="news" key={entry.uid}>
            <img height="400" width="400" src={entry.node.data.hero_image.thumb.url || null}></img>
            <h2>{entry.node.data.title[0].text || null}</h2>
          </div>
          </>
        )
      })}
      </div>
  )
}

export default ImageGallery