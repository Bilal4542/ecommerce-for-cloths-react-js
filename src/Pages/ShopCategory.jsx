import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import Item from '../Components/Item/Item'
import {ShopContext} from '../Context/ShopContext'

const ShopCategory = ({banner,category}) => {
  const {allProduct} = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img className='Shop-category-banner' src={banner} alt="" srcset="" />
        <div className="shop-category-products">
          {allProduct.map((item, i) => {
            if(category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            }
            else{
              return null;
            }
          })}
        </div>
        {/* <div className="shop-category-load-more">
          Explore More
        </div> */}
      </div>
    </>
  )
}

export default ShopCategory
