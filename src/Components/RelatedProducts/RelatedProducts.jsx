import React from 'react'
import './RelatedProducts.css'
import dataProduct from '../Assets/data'
import Item from '../Item/Item'


const RelatedProducts = () => {
  return (
    <>
     <div className="related-products">
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-items">
                {dataProduct.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
    </div> 
    </>
  )
}

export default RelatedProducts
