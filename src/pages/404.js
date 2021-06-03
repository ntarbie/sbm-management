import React from 'react'
// import Layout from '../components/Layout'
import SeO from '../components/SEO'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
// import Homepage from './index'
// import {Page} from '../templates/Page'
// import {News} from '../templates/news'


const NotFoundPage = () => (
  // <Layout>
  <>
    <SeO title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
    </>
  // </Layout>
)

export default withUnpublishedPreview(NotFoundPage)
