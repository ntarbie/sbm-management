import React from 'react'
import { RichText } from 'prismic-reactjs'
import './quote.css'

const Quote = ({ slice }) => (
  <section className="p-8 quote-slice">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center">
      <blockquote className="italic font-black px-12 border-l-4 border-gray-300 relative text-lg w-full">{<RichText render={slice.primary.quote.raw}/>}
      {slice.primary.citation && <cite class="block text-primary mt-2 text-base font-bold italic ">{RichText.asText(slice.primary.citation.raw)} {slice.primary.job_title.raw && slice.primary.job_title.raw.length > 0 && (" - " + RichText.asText(slice.primary.job_title.raw))}</cite>}
      </blockquote>
    </div>
  </section>
)

export default Quote