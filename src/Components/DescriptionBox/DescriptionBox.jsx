import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <>
     <div className="description-box">
        <div className="description-box-navigator">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-box ">Reviews (122)</div>
        </div>
        <div className="description-box-description">
            <p>An E-Commerce website is an online platform to facilitates the buying and selling of products or services over the internet. It server as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions with the need of physical presence. E-Commerce website have immense, popularity due to their convenience, accessibality and the global reach they offer.</p>
            <p>E-Commerce websites typically display products or services along with detailed descriotion, images, prices and any available variations (eg: size, colors). Each product is usually has its own dedicated page with relevant information.</p>
        </div>
    </div> 
    </>
  )
}

export default DescriptionBox
