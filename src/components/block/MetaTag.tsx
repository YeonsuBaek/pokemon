import React from 'react'
import { Helmet } from 'react-helmet-async'

interface MetaTagProps {
  title: string
  description: string
  keywords: string
}

const MetaTag = ({ title, description, keywords }: MetaTagProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

export default MetaTag
