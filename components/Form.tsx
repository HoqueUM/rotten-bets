
import React from 'react'
import Script from 'next/script'

const Form = () => {
  return (
    <div>
        <iframe
        data-tally-src="https://tally.so/embed/3NLBOO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="274"
        title="Features for RotKings"
        className='text-white'
        ></iframe>
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  )
}

export default Form