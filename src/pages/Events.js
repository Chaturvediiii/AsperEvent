import React from 'react'
import { ReactDOM } from "react"; 


import Footer from "../components/Footer";
import Header from '../components/Header';
import LandingEvent from '../components/LandingEvent';
import TeamEvent from '../components/TeamEvent';
import GalleryEvent from '../components/GalleryEvent';
import About from '../components/About';
import AboutTech from '../components/AboutTech';

export default function Events() {
  return (
    <>
      <Header/>
      <LandingEvent/>
      <About/>
      <AboutTech/>
      <TeamEvent/>
      <GalleryEvent/>
      <Footer/>
    </>
  )
}