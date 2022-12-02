import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function App() {
  return (
    <MDBFooter style={
      {
        backgroundColor:'#000',
        color: '#fff',
      }
    }
       className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>


        <div>
          <a href='' className='me-4 text-reset' >
            <FacebookIcon style={
            {
              color:'#d51828',
            }
          }/>
          </a>
          <a href='' className='me-4 text-reset'>
          <TwitterIcon  style={
            {
              color:'#d51828',
            }
          }/>
          </a>
          <a href='' className='me-4 text-reset'>
          <GoogleIcon  style={
            {
              color:'#d51828',
            }
          }/>
          </a>
          <a href='' className='me-4 text-reset'>
          <InstagramIcon  style={
            {
              color:'#d51828',
            }
          } />
          </a>
          <a href='' className='me-4 text-reset'>
          <LinkedInIcon  style={
            {
              color:'#d51828',
            }
          }/>
          </a>
          <a href='' className='me-4 text-reset'>
          <GitHubIcon  style={
            {
              color:'#d51828',
            }
          }/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'  style={
            {
              color:'#d51828',
            }
          }>
                <MDBIcon color='secondary' icon='gem' className='me-3'  />
                Asper
              </h4>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'  style={
            {
              color:'#d51828',
            }
          }>Products</h6>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'  style={
            {
              color:'#d51828',
            }
          }>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={
                  {
                    textDecoration : 'none',
                  }
                }>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'  style={
            {
              color:'#d51828',
            }
          }>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                UIT-RGPV, Bhopal
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright 
        <a className='text-reset ' href='https://mdbootstrap.com/' style={
                  {
                    textDecoration : 'none',
                  }
                }>
         <br></br>Asper
        </a>
      </div>
    </MDBFooter>
  );
}