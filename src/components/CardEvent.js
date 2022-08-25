import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Event() {
  return (
    <>
    <div className="heading">
      <h1 className='text-center my-5' style={{
      color: '#D51828',
      backgroundColor: '#000000'
     }}>Events</h1>
    </div>
    <MDBCardGroup  style={{
      backgroundColor: '#000000',
     }}>
      <MDBCard style={{
      backgroundColor: '#000000',
     }} className="m-3">
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
        <MDBCardBody style={{
      backgroundColor: '#000000',
     }}>
                 <MDBCardTitle style={{
      color: '#FF0000',
     }}>Hackathon</MDBCardTitle>
          <MDBCardText style={{
      color: '#fff',
     }}>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted' >Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{
      backgroundColor: '#000000',
     }} className="m-3">
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/042.webp' alt='...' position='top' />
        <MDBCardBody style={{
      backgroundColor: '#000000',
     }}>
          <MDBCardTitle style={{
      color: '#FF0000',
     }}>DesignUX</MDBCardTitle>
          <MDBCardText style={{
      color: '#fff',
     }}>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{
      backgroundColor: '#000000',
     }} className="m-3">
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/043.webp' alt='...' position='top' />
        <MDBCardBody style={{
      backgroundColor: '#000000',
     }}>
        <MDBCardTitle style={{
      color: '#FF0000',
     }}>Ignyte</MDBCardTitle>
          <MDBCardText style={{
      color: '#fff',
     }}>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </>
  );
}