import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300x300/?Biryani" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)",maxWidth: "1400px", maxHeight: "500px"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300x300/?Noodles" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)",maxWidth: "1400px", maxHeight: "500px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300x300/?Paratha" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)",maxWidth: "1400px", maxHeight: "500px" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="position-absolute top-50 start-50 translate-middle-x p-4" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input className="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search" style={{ height: "40px", width:"500px" }} />
            <button className="btn btn-outline-success text-white bg-success" type="submit" style={{ height: "40px" }}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
