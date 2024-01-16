import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide carousel-fade"
      style={{ objectFit: "contain !important" }}
      data-bs-ride="carousel"
    >
      <div class="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white bg-primary"
              type="submit"
            >
              Search
            </button>
          </form>
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700?burger"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700?pizza"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700?pastry"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
