import React from 'react'

import Hero from '..//Hero/Hero'
import ImageSlider from '../ImageSlider/ImageSlider'
import Posts from '../Posts/Posts'
import Programs from '../Programs/Programs'
import Purpose from '../Purpose/Purpose'
import SocialProof from '../SocialProof/SocialProof'

const Home = () => {
  return (
    <>
        <Hero />
        <SocialProof />
        <Purpose />
        <Programs />
        <ImageSlider />
        <Posts />
    </>
  )
}

export default Home