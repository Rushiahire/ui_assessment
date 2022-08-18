import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='py-2' >
        <div id="footer_part1" className="row row-cols-auto  mx-auto">
            <div id="specify" className="col">SPECIFICATION</div>
            <div className="col">TECHNOLOGIES</div>
            
        </div>
            
        <hr />
    <div id='footer_content' class="container mx-auto my-0">
  <div class="row col-12 col-sm-12 col-xs-12">
    <div class="col">CONSTRUCTION</div>
    <div class="col">In-Mold Technology</div>
    <div class="col">PRODUCT FEATURES</div>
    <div id="footer_optimized" class="col">Optimized & customizable ventilation 3D shaped cheek pad Removable and washable liner & cheek pads</div>
  </div>
  <div className="row col-xs-12">
    <div className="col">COUNTRY OF ORIGIN</div>
    <div className="col">China</div>
    <div className="col"></div>

  </div>
  </div>
    </footer>

    <p id='footer_para'>
    <hr/>
        We reserve the right to make changes to the product information contained on this site at any time without notice,including but not limited to equipment, specifications, models, colors and materials.
    </p>
    </>
  )
}

export default Footer