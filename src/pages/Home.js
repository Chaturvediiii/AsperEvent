import React from 'react'
import { ReactDOM } from "react"; 
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
       <Navbar />
      <Team/>
      <Event/>
      <Cards/>
      <Footer/>
    </>
  )
}
