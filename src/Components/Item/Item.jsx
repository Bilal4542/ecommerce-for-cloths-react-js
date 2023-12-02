import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const item = ({image, name, newPrice, oldPrice, id}) => {
  return (
    <>
        <div className="item">
            <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-new-price">
                    ${newPrice}
                </div>
                <div className="item-old-price">
                    ${oldPrice}
                </div>
            </div>
        </div> 
    </>
  )
}

export default item
