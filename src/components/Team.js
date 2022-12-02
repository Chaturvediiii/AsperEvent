import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';

  export default function Team() {
    return (

    <>
        <section className="team-section text-center px-3 my-5" style={{
        backgroundColor:'#000000',
      }}>
          {/* Section heading */}
          <h1 className="h1-responsive font-weight-bold my-5 text-center" style={{
       color:'#fff',
      }}>Our Amazing Team</h1>

          {/* Grid row */}
          <div className="row text-center">
            {/* Grid column */}
            <div className="col-md-4 mb-md-0 mb-5">
              <div className="avatar mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).webp" className="rounded z-depth-1-half" alt="Sample avatar" />
              </div>
              <h4 className="font-weight-bold dark-grey-text my-4" style={{color: '#d51828', fontWeight: 700, }}>Maria Kate</h4>
              <h6 className="text-uppercase text-light mb-3"><strong>Photographer</strong></h6>
              {/* mdbIconcebook*/}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-fb waves-effect waves-light" style={{
                color: '#fff',
              }}>
              <FaFacebookF/>
              </a>
              {/*Dribbble */}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-dribbble waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaDribbble />
              </a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaTwitter/>
              </a>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 mb-md-0 mb-5">
              <div className="avatar mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).webp" className="rounded z-depth-1-half" alt="Sample avatar" />
              </div>
              <h4 className="font-weight-bold dark-grey-text my-4" style={{color: '#d51828', fontWeight: 700, }}>John Doe</h4>
              <h6 className="text-uppercase text-light mb-3"><strong>Front-end Developer</strong></h6>
              {/*Email*/}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-email waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaEnvelope/>
              </a>
              {/* mdbIconcebook*/}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-fb waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaFacebookF/>
              </a>
              {/* GitHub*/}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-git waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaGithub />
              </a>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4">
              <div className="avatar mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).webp" className="rounded z-depth-1-half" alt="Sample avatar" />
              </div>
              <h4 className="font-weight-bold dark-grey-text my-4" style={{color: '#d51828', fontWeight: 700, }}>Sarah Melyah</h4>
              <h6 className="text-uppercase text-light mb-3"><strong>Web Developer</strong></h6>
              {/*Linkedin */}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-li waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaLinkedin/>
              </a>
              {/* Twitter */}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#fff',
              }}>
                < FaTwitter/>
              </a>
              {/*Pinterest */}
              <a type="button" className="btn-floating btn-sm mx-1 mb-0 btn-pin waves-effect waves-light" style={{
                color: '#fff',
              }}>
                <FaPinterest />
              </a>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </section>
        
      </>
    );
  }
