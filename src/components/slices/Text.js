import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from './../../utils/linkResolver'

const Text = ({ slice }) => {
  const columnClass = slice.primary.columns === '2 Columns'
    ? 'text-section-2col'
    : 'text-section-1col'

  return (
    <div className={`p-4 w-full`}>
      <div className={`max-w-screen-md mx-auto`}>
      <RichText
        render={slice.primary.content.raw}
        linkResolver={linkResolver}
      />
      </div>
    </div>
  )
}

export default Text