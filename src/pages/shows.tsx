import { StaticImage } from 'gatsby-plugin-image'
import { relative } from 'path/posix'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const shows = [
  {
    id: 0,
    date: '​​October 9, 2021',
    venue: 'The Karma Birdhouse',
    city: 'Burlington, VT',
    time: '7:30PM',
    price: 'FREE'
  }
]

const ShowsPage = () => (
  <Layout>
    <Seo title='Shows' />

    <div style={{ position: 'relative' }}>

      <div style={{
        position: 'absolute',
        top: '3.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '700px',
        zIndex: 10
      }}>
        <h2 style={{ textAlign: 'center' }}>Come watch us live - high probability of free beer, guarantee of a good time</h2>
      </div>

      <StaticImage
        src="../images/band-shot-dusk.jpg"
        width={1115}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="The band, rocking at dusk"
        style={{ marginBottom: `2rem` }}
        transformOptions={{ fit: 'outside' }}
      />



      <ul className='no-bullets'>
        {shows.map(({ id, date, venue, city, time, price }) => (
          <li key={id}>
            <p>
              {date} <br />
              {venue} <br />
              {city} <br />
              {time} <br />
              {price} <br />
            </p>
          </li>
        ))}
      </ul>
    </div>

  </Layout>
)

export default ShowsPage
