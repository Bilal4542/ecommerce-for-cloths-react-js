import "./NavBar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";

const NavBar = () => {

  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      {/* <div className="navBar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>DressUpDirect</p>
        </div>
        <ul className="nav-menu ">
          <li onClick={()=>{setMenu("shop")}}><Link className="items" to="/">Shop{menu==="shop"?<hr />:<></>}</Link></li>
          <li onClick={()=>{setMenu("mens")}}><Link className="items" to="/mens">Mens{menu==="mens"?<hr />:<></>}</Link></li>
          <li onClick={()=>{setMenu("womens")}}><Link className="items" to="/womens">Womens{menu==="womens"?<hr />:<></>}</Link></li>
          <li onClick={()=>{setMenu("kids")}}><Link className="items" to="/kids">Kids{menu==="kids"?<hr />:<></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="cart"><img src={cartIcon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary navBar  ">
  <div className="container ">
  <div className="nav-logo d-flex align-items-center justify-content-center ">
          <img src={logo} alt="" />
          <p className="mt-4">DressUpDirect</p>
        </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav-menu navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center align-items-center">
      <li className="nav-item" onClick={()=>{setMenu("shop")}}><Link className="items nav-link " to="/">Shop{menu==="shop"?<hr />:<></>}</Link></li>
          <li className="nav-item" onClick={()=>{setMenu("mens")}}><Link className="items nav-link " to="/mens">Mens{menu==="mens"?<hr />:<></>}</Link></li>
          <li className="nav-item" onClick={()=>{setMenu("womens")}}><Link className="items nav-link " to="/womens">Womens{menu==="womens"?<hr />:<></>}</Link></li>
          <li className="nav-item" onClick={()=>{setMenu("kids")}}><Link className="items nav-link " to="/kids">Kids{menu==="kids"?<hr />:<></>}</Link></li>
        
      </ul>
      <div className="nav-login-cart d-flex align-items-center justify-content-center">
          <Link to="/login"><button className="">Login</button></Link>
          <Link to="cart"><img src={cartIcon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  </div>
</nav> 
    </>
  );
};

export default NavBar;
