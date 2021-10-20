import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import PaymentForm, { loadSquareSdk } from '../components/paymentForm'
import Seo from '../components/seo'

enum SquareStatus {
  Failure,
  Success,
}

const StorePage = () => {

  const [squareStatus, setSquareStatus] = React.useState<SquareStatus>(null);
  React.useEffect(() => {
    loadSquareSdk().then(() => {
      setSquareStatus(SquareStatus.Success)
    })
    .catch(() => {
      setSquareStatus(SquareStatus.Failure)
    })
  }, []);

  return (
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
      {squareStatus === SquareStatus.Failure &&
        "Failed to load SquareSDK. Please refresh the page."}
      {squareStatus === SquareStatus.Success && (
        <PaymentForm paymentForm={(window as any).SqPaymentForm} />
      )}
    </Layout>
  )
}

export default StorePage
