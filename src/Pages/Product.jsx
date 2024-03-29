import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e) => e.id === Number(productId))


  return (
    <>
     <BreadCrums product={product} /> 
     <ProductDisplay product={product} />
     <DescriptionBox />
     <RelatedProducts />
    </>
  )
}

export default Product
