import React from "react";

const Gallery = (props : any) => {
    return (
        <div id="portfolio">
            <div className="container section-title">
                <h2>Gallery</h2>
                <p>Berikut kami tampilkan beberapa portofolio desain grafis yang sudah dikerjakan</p>
                <div className=" d-flex justify-content-center">
                    <div
                        id="carouselExampleControlsNoTouching"
                        className="carousel carousel-dark slide mt-5 col-md-8"
                        data-bs-touch="false"
                        data-bs-interval="false"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/portfolio/01-large.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="img/portfolio/02-large.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="img/portfolio/03-large.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="img/portfolio/04-large.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
