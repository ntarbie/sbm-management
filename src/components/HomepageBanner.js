import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'


const HomepageBanner = ({ bannerContent }) => (
  <section
    className="w-full h-screen flex flex-col items-center justify-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})`,
    }}
  >
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-white font-extrabold text-6xl mb-4">
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

export default HomepageBanner