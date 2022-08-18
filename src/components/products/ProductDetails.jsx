import React from "react";
import hel1 from "../../images/helmet sm.jpg";
import hel2 from "../../images/hel3.jpg";
import hel3 from "../../images/hel4.jpg";
import hel4 from "../../images/hel5.jpg";
import helmet1 from "../../images/helmet.jpg";
import helmet2 from "../../images/helmet2.jpg";
import helmet3 from "../../images/helmet3.jpg";
import helmet4 from "../../images/helmet4.jpg";
import helmet5 from "../../images/helmet5.jpg";

import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductDetails = () => {
  const images = [hel1, hel2, hel3, hel4];

  return (
    <>
      <div class="container text-center">
        <div class="row hel_img">
          <div class="col-lg-3 row-sm-8">
            {images.map((value, index) => {
              return (
                <>
                  <div>
                    <img src={value} alt="image not found..." />
                  </div>
                </>
              );
            })}
          </div>
          <div class="col-lg-8 helmet_images">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={helmet1}
                    class="d-block   img-fluid"
                    alt="image not found"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={helmet2}
                    class="d-block img-fluid"
                    alt="not found"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={helmet3}
                    class="d-block  img-fluid"
                    alt="image not found"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={helmet4}
                    class="d-block img-fluid"
                    alt="image not found"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={helmet5}
                    class="d-block  img-fluid"
                    alt="image not found"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev "
                type="button"
                roll="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                roll="button"
                id='slider_button'
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden" >Next</span>
              </button>
            </div>
          </div>
          <LinkContainer to="/orderpage">
            <Nav.Link>
              <button type="button" class="btn btn-warning" id="add_to_cart">
                ADD TO CART
              </button>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
