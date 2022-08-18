import React from "react";


const Navbar = () => {
  return (
    <div >
      <nav id="nav" className="navbar navbar-expand-lg bg-light px-5 fixed-top" >
        <div className="container-fluid  ">
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form className="d-flex w-100 pt-2" id="search_bar" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary " type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul_items">
              
              <li className="nav-item">
                <a className="nav-link text-dark " href="#">
                <i class="fa-solid fa-cart-shopping"></i> Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                <i class="fa-solid fa-heart"></i> Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                <i class="fa-solid fa-bars"></i> Order List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                <i class="fa-solid fa-right-from-bracket"></i> Sign-Out
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
