import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className='centered-column'>
      <h1>ALL HAIL THE STRANGER</h1>
      <br />
      <StaticImage
        src="../images/tiger-strike-logo.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Tiger Strike logo"
        style={{ marginBottom: `2rem` }}
      />
      <StaticImage
        src="../images/band-shot-1.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="The band, rocking out"
        style={{ marginBottom: `2rem` }}
      />
    </div>
  </Layout>
)

export default IndexPage
