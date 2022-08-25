import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import "bootstrap-icons/font/bootstrap-icons.css";

import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#000000', }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4' style={{
            outlineColor:'#fff',
           }}>
         <a type="button" className="btn-floating btn-sm mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaFacebookF/>
              </a>

              <a type="button" className="btn-floating btn-sm mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaTwitter/>
              </a>
              <a type="button" className="btn-floating btn-sm mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaGoogle/>
              </a>

              <a type="button" className="btn-floating btn-sm mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaInstagram/>
              </a>

              <a type="button" className="btn-floating btn-sm mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaLinkedin/>
              </a>
              <a type="button" className="btn-floating btn-lg mx-2 mb-0 btn-tw waves-effect waves-light" style={{
                color: '#D51828',
              }}>
                <FaGithub className=''/>
              </a>
        </section>
      </MDBContainer>

      <div className='text-center text-white p-3' >
        © 2022 Copyright: 
        <a className='text-white' href='' style={{
          textDecoration:'none',
          color:'#D51828',
        }}>
           Asper
        </a>
      </div>
    </MDBFooter>
  );
}