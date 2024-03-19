import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/3.jpg" className="d-block w-100" alt="..." height='500px'/>
    </div>
    <div className="carousel-item">
      <img src="/image/1.jpg" className="d-block w-100 " alt="..." height='500px'/>
    </div>
    <div className="carousel-item">
      <img src="/image/2.jpg" className="d-block w-100" alt="..." height='500px'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner