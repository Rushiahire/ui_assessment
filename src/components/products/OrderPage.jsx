import React from "react";
import helmet from "../../images/helmet.jpg";

const OrderPage = () => {
  return (
    <>
      <div class="container hel_container ">
        <div class="row ">
          <div class="col-lg-6 col-12 ">
            <img src={helmet} id="hel_img" alt="image not found" />
          </div>
          <div class="col">
            <h4>NEW SPORTS PLUS HELMET</h4>
            <h5>Model No : 275223</h5>
            <p id="product_price" >₹​18990</p>

            <ul id="product_ul">
                <h6>Key Feature</h6>
              <li>
                <span>-</span> Extended Coverage
              </li>
              <li>
                <span>-</span> Easy adjustment system
              </li>
              <li>
                <span>-</span> MIPS System
              </li>
              <li>
                <span>-</span> Rear light with two different modes
              </li>
              <li>
                <span>-</span> Vogue silver color offers full reflective shell
              </li>
            </ul>

            <div class="row">
              <div class="col">
                <i id="fa_green" className="fa-solid fa-circle-check"></i> <b>Available</b>
              </div>
              <div class="col">
                <i id="fa_orange" className="fa-regular fa-clock"></i> <b>Future Availability</b>
              </div>
              <div class="col">
                <i id="fa_red" className="fa-solid fa-circle-xmark"></i> <b>Sold Out</b>
              </div>
            </div>
            <hr />

            <div class="container text-center">
              <div class="row row-cols-2" >
                <div class="col">SKU Code: 275223-6929006</div>
                <div class="col">Variation: S-Dark Grey Reflective</div>
                <div class="col">Quantity: <input className="quantity_input" type="text"/>
                </div>

                <div class="col">
                <i className="fa-solid fa-circle-check color_green"></i>
                <button type="button" class="btn btn-warning check_color">CHECK COLOR</button>
                </div>
              </div>

              <hr />

              <div class="row row-cols-2">
                <div class="col">SKU Code: 275223-6929007</div>
                <div class="col">Variation: M-Dark Grey Reflective</div>
                <div class="col">Quantity: <input className="quantity_input" type="text"/>
                
                </div>
                <div class="col">
                <i className="fa-solid fa-circle-check color_green"></i>
                <button type="button" class="btn btn-warning check_color">CHECK COLOR</button>
                </div>
              </div>

              <hr/>

              <div class="row row-cols-2">
                <div class="col">SKU Code: 275223-6929008</div>
                <div class="col">Variation: L-Dark Grey Reflective</div>
                <div class="col">Quantity: <input className="quantity_input" type="text"/>
                
                </div>
                <div class="col">
                <i className="fa-solid fa-circle-check color_green "></i>
                <button type="button" class="btn btn-warning check_color">CHECK COLOR</button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
