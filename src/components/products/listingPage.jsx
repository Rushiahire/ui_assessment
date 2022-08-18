import React from "react";
import shoes1 from "../../images/shoesl.jpg";
import shoes2 from "../../images/shoes.jpg";
import shoes3 from "../../images/shoesblue.jpg";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ListingPage = () => {
  return (
    <>
      <div className="filter_div">
        <p>Filters</p>
        <h5 className="filter_1">Weight Range</h5>
        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; 40-50
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; 10-20
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; 30-40
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; 20-30
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; 0-10
        </div>

        <h5 className="filter_2">Sub Sub Category</h5>
        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; LRPL
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; LRSO
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; LRST
        </div>

        <div class="input-group mb-3">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="Checkbox for following text input"
          />
          &nbsp; &nbsp; LRTS
        </div>
      </div>

      <div class="container text-center w-75">
        <div class="row">
          <div class="col">
            <div>
            
             
              <img src={shoes1} alt="image" />
              <p className="product_title">
                KINABALU RC SHOE <i class="fa-solid fa-cart-shopping"></i>{" "}
              </p>
              <p className="product_price">₹​10000</p>
            
            <LinkContainer to="/productdetails">
                <Nav.Link className="fs-5">
                <button type="button" class="btn btn-info">view Details</button>
                </Nav.Link>
              </LinkContainer>
            
            </div>
          </div>
          <div class="col">
            <div>
              <img src={shoes2} alt="image" />
              <p className="product_title">
                KINABALU SHOE <i class="fa-solid fa-cart-shopping"></i>{" "}
              </p>
              <p className="product_price">₹​9500</p>
             
              <LinkContainer to="/productdetails">
                <Nav.Link className="fs-5">
                <button type="button" class="btn btn-info">view Details</button>
                </Nav.Link>
              </LinkContainer>

            </div>
          </div>
          <div class="col">
            <div>
              <img src={shoes3} alt="image" />
              <p className="product_title">
                KINABALU POWER SHOE <i class="fa-solid fa-cart-shopping"></i>{" "}
              </p>
              <p className="product_price">₹​12000</p>

              <LinkContainer to="/productdetails">
                <Nav.Link className="fs-5">
                <button type="button" class="btn btn-info">view Details</button>
                </Nav.Link>
              </LinkContainer>

            </div>
          </div>
          <div class="col">
            <div>
              <img src={shoes1} alt="image" />
              <p className="product_title">
                SUPERTRAC RC SHOE{" "}
                <i class="fa-solid fa-cart-shopping"></i>{" "}
              </p>
              <p className="product_price">₹​11000</p>
              
              <LinkContainer to="/productdetails">
                <Nav.Link className="fs-5">
                <button type="button" class="btn btn-info">view Details</button>
                </Nav.Link>
              </LinkContainer>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
