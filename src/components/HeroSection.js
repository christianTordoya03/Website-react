import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>TORDOYA CAPITAL</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button 
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>     
    </div>
  )
}

export default HeroSection
