import React from 'react'

import Hero from '..//Hero/Hero'
import Footer from '../Footer/Footer'
import ImageSlider from '../ImageSlider/ImageSlider'
import Posts from '../Posts/Posts'
import SocialProof from '../SocialProof/SocialProof'

const Home = () => {
  return (
    <>
        <Hero />
        <SocialProof />
        <ImageSlider />
        <Posts />
        <Footer />
    </>
  )
}

export default Home