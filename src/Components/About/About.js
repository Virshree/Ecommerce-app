import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about'>
       <div className="card m-3" style={{width: "18rem"}}>
      <img src={"https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body fs-2">
    <h5 className="card-title fs-2">OPPO A31</h5>
    <p className="card-text fs-5">OPPO A31 price in india starts from 12,990. This Mobile is a decent phone with MediaTek Helio P35 Processor, 4 GB of RAM, and 64 GB of Storage.</p>
    <a href="#/" className="btn btn-primary btn-lg">Add To Cart</a>
  </div>


</div>
  <form className='info'>
    <h2>Mobile Description</h2>
    <p>
      Oppo A31 (2020) mobile was launched on 14th February 2020. The phone comes with a 6.50-inch touchscreen display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Oppo A31 (2020) is powered by a 2.3GHz octa-core MediaTek Helio P35 (MT6765) processor. It comes with 4GB of RAM. The Oppo A31 (2020) runs Android 9 and is powered by a 4230mAh non-removable battery.

As far as the cameras are concerned, the Oppo A31 (2020) on the rear packs a 12-megapixel primary camera with an f/1.8 aperture; a 2-megapixel camera with an f/2.4 aperture and a pixel size of 1.75-micron, and a 2-megapixel camera with an f/2.4 aperture and a pixel size of 1.75-micron. The rear camera setup has autofocus. It sports an 8-megapixel camera on the front for selfies with an f/2.0 aperture.
The Oppo A31 (2020) runs ColorOS 6.1.2 is based on Android 9 and packs 64GB of inbuilt storage that can be expanded via microSD card (up to 256GB) with a dedicated slot. The Oppo A31 (2020) is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Oppo A31 (2020) measures 163.90 x 75.50 x 8.30mm (height x width x thickness) and weighs 180.00 grams. It was launched in Mystery Black and Fantasy White colours. It bears a plastic body.
    </p>
  </form>
        </div>
  )
}

export default About