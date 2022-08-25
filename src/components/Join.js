import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Join() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px', backgroundColor:'#000000',}}>
        <MDBCardBody className='px-5'>
          <h1 className="text-uppercase text-center mb-5" style={{color:'#D51828',}}>Join Us</h1>
          <MDBInput wrapperClass='mb-4' label='Your Name ' size='lg' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' style={{color:'#fff',}}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' style={{color:'#fff',}}/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' style={{color:'#fff',}}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 ' size='lg' style={{backgroundColor:'#D51828',}}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Join;