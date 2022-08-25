import React from 'react';


export default function AboutTech()  {
  return (
<>
<h1 className="h1-responsive font-weight-bold my-5 text-center" style={{
  color:'#D51828',
}}>Non-Technical</h1>
    {/* Carousel wrapper */}
    <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
      {/* Controls */}
      <div className="d-flex justify-content-center mb-4">
        <button className="carousel-control-prev position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Inner */}
      <div className="carousel-inner py-4">
        {/* Single item */}
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  
                  <div className="card-body">
                    <h5 className="card-title">Media And Content</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" className="btn" style={{
                      backgroundColor : '#D51828',
                      color : '#fff'
                    }}>Apply</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="card">
                  
                  <div className="card-body">
                    <h5 className="card-title">Marketing And Management</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" className="btn" style={{
                      backgroundColor : '#D51828',
                      color : '#fff'
                    }}>Apply</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="card">
                  
                  <div className="card-body">
                    <h5 className="card-title">Graphic Designing</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" className="btn" style={{
                      backgroundColor : '#D51828',
                      color : '#fff'
                    }}>Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single item */}
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="card">
                 
                  <div className="card-body">
                    <h5 className="card-title">CodeAdept</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" className="btn" style={{
                      backgroundColor : '#D51828',
                      color : '#fff'
                    }}>Button</a>
                  </div>
                </div>
              </div>
          
              
            </div>
          </div>
        </div>
        {/* Single item */}
     
      </div>
      {/* Inner */}
    </div>
    {/* Carousel wrapper */}
    </>
  );

}

