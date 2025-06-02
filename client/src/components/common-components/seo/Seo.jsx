// src/components/Seo/Seo.jsx
import { Helmet } from 'react-helmet-async'

const Seo = ({ description, keywords = '' }) => {
  return (
    <Helmet>
      <title>Akins</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  )
}

export default Seo
