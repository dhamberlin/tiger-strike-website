import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <StaticImage
      src="../images/tiger-strike-logo.jpg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Tiger Strike logo"
      style={{ marginBottom: `2rem` }}
      layout='fullWidth'
    />
    <p>
      Tiger Strike was formally founded in the colder months of 2014, when Will inappropriately asked a school to host a loud alternative rock band at a family event. While we were not invited back, the music was here to stay.
    </p>
    <p>
      After several years of jamming in makeshift studios with friends in rotation, Casey joined forces in the winter of 2019 and has brought infectious energy and a killer sound. This band has always been about friends and creativity, never about egos. We are fortunate to be playing music with the same people we grew up with in the beautiful Green Mountains of central Vermont.
    </p>
    <p>
      We write, record, engineer and perform our own music. This is not showboating, it is just pretty cool! It also makes it easier to share with our small but ardent fanbase. We hope you enjoy our music as much as we do!
    </p>
    <p>
      John Griffith - Vocals, Guitar, Drums <br />
      Casey Ryan - Vocals, Bass guitar <br />
      Will Carlson - Vocals, Guitar, Drums
    </p>
  </Layout>
)

export default AboutPage;
