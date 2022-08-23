import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


  export default function() 
    return (

      <section className="team-section px-3 my-5">
        {/* Section heading */}
        <h2 className="h1-responsive font-weight-bold text-center my-5">Our amazing team</h2>
        {/* Section description */}
        <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
          eum porro a pariatur veniam.</p>
        {/* Grid row*/}
        <div className="row text-center text-md-left">
          {/* Grid column */}
          <div className="col-lg-6 col-md-12 mb-5">
            <div className="col-md-4 col-lg-6 float-left">
              <div className="avatar mx-auto mb-md-0 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).webp" className="rounded z-depth-1" alt="Sample avatar" />
              </div>
            </div>
            <div className="col-md-8 col-lg-6 float-right">
              <h4 className="font-weight-bold mb-3">John Doe</h4>
              <h6 className="font-weight-bold grey-text mb-3">Web Designer</h6>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur.</p>
              {/* mdbIconcebook*/}
              <a className="p-2 fa-lg fb-ic">
                < FaFacebookF/>
              </a>
              {/* Twitter */}
              <a className="p-2 fa-lg tw-ic">
                <FaTwitter/>
              </a>
              {/*Dribbble */}
              <a className="p-2 fa-lg dribbble-ic">
              <FaDribbble/>
              </a>
            </div>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-lg-6 col-md-12 mb-5">
            <div className="col-md-4 col-lg-6 float-left">
              <div className="avatar mx-auto mb-md-0 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).webp" className="rounded z-depth-1" alt="Sample avatar" />
              </div>
            </div>
            <div className="col-md-8 col-lg-6 float-right">
              <h4 className="font-weight-bold mb-3">Maria Kate</h4>
              <h6 className="font-weight-bold grey-text mb-3">Photographer</h6>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur.</p>
              {/* mdbIconcebook*/}
              <a className="p-2 fa-lg fb-ic">
                <FaFacebookF/>
              </a>
              {/*YouTube */}
              <a className="p-2 fa-lg yt-ic">
              <FaYoutube/>
              </a>
              {/*Instagram*/}
              <a className="p-2 fa-lg ins-ic">
              <FaInstagram/>
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}
        {/* Grid row*/}
        <div className="row text-center text-md-left">
          {/* Grid column */}
          <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
            <div className="col-md-4 col-lg-6 float-left">
              <div className="avatar mx-auto mb-md-0 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).webp" className="rounded z-depth-1" alt="Sample avatar" />
              </div>
            </div>
            <div className="col-md-8 col-lg-6 float-right">
              <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
              <h6 className="font-weight-bold grey-text mb-3">Web Developer</h6>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur.</p>
              {/* mdbIconcebook*/}
              <a className="p-2 fa-lg fb-ic">
              <FaFacebookF/>
              </a>
              {/* Twitter */}
              <a className="p-2 fa-lg tw-ic">
              <FaTwitter/>
              </a>
              {/* GitHub*/}
              <a className="p-2 fa-lg git-ic">
              <FaGithub/>
              </a>
            </div>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-lg-6 col-md-12">
            <div className="col-md-4 col-lg-6 float-left">
              <div className="avatar mx-auto mb-md-0 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).webp" className="rounded z-depth-1" alt="Sample avatar" />
              </div>
            </div>
            <div className="col-md-8 col-lg-6 float-right">
              <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
              <h6 className="font-weight-bold grey-text mb-3">Front-end Developer</h6>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur.</p>
              {/* Google +*/}
              <a className="p-2 fa-lg gplus-ic">
                <i className="fab fa-google-plus"> </i>
              </a>
              {/*LinkedIn */}
              <a className="p-2 fa-lg li-ic">
                <i className="fab fa-linkedin-in"> </i>
              </a>
              {/*Email*/}
              <a className="p-2 fa-lg email-ic">
                <i className="fa fa-envelope"> </i>
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}
      </section>
    );
  