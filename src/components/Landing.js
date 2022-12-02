import React from 'react'
import './Landing.scss'

const Landing = () => {
  return (
<div className="hero2">
        {/*This feels like the wrong solution here :/ */}
        <fieldset className="hero2-text">
          <legend className="border-text">&nbsp; be impressed</legend>
          <h3>Welcome to the Event Page of <span className='red'>Asper</span></h3>
          <p> </p>
          <a href="#scroll2"><button>Explore</button></a>
        </fieldset></div>
  )
}

export default Landing
