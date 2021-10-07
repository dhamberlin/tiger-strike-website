import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const StorePage = () => (
  <Layout>
    <Seo title='Store' />
    <div className='centered-column'>
      <h1>Coming Soon: Sick Merch</h1>
      <StaticImage
        src="../images/tiger-strike-t-shirt.png"
        width={700}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Amazing t-shirt that you will be able to buy soon"
        style={{ marginBottom: `2rem` }}
        placeholder='none'
      />
    </div>
  </Layout>
)

export default StorePage
