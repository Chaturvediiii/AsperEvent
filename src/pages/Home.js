import React from 'react'

import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Landing from '../components/Landing';
import Header from '../components/Header';
import Join from '../components/Join';
import Team from '../components/Team';
import Testimonials from '../components/Testimonial';
import Carddiff from '../components/Carddiff';



export default function Home() {
  return (
    <>
      <Header/>
      <Landing/>
    <Carddiff/>
      {/* <Gallery/> */}
      <Team/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </>
  )
}
