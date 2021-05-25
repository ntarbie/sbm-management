import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FullWidthImage = ({ slice }) => (
  <section className="full-width-image content-section">
    <img 
      src={slice.primary.full_width_image.url}
      alt={slice.primary.full_width_image.alt}
    />
  </section>
)

export default FullWidthImage