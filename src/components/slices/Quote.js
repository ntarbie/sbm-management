import React from 'react'
import { RichText } from 'prismic-reactjs'

const Quote = ({ slice }) => (
  <section className="p-4">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center">
      <blockquote className="text-center text-3xl font-serif">{RichText.asText(slice.primary.quote.raw)}</blockquote>
    </div>
  </section>
)

export default Quote