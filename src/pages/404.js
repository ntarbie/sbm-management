import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Homepage } from './index'
import { Page } from '../templates/Page'
import { News } from '../templates/news'


const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: Page,
    news: News,
    homepage: Homepage,
    prismicPage: Page,
    prismicNews: News,
    prismicHomepage: Homepage,
  },
})
