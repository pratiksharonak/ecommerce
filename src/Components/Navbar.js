import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Navbar = (props) => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories',
      {headers: {'Access-Control-Allow-Origin': '*'}}
    )
    .then((response)=> response.json())
    .then((response)=>{setCategories(response)})   
  },[])

   
  
  
  return(
    <>
    
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Shopping Site</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myprofile">My Profile</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            {categories.map((category, i)=>{
              return <li key={i}><Link className="dropdown-item" to={"/category/"+category}>{category}</Link></li>
            })}
          </ul>
        </li>
      </ul>
      
      <div className="buttons">
                    <Link to="/cart" className="btn btn-outline-success ms-2">
                        <i className="fa fa-shopping-cart me-1"></i>
                        <i className="fa-solid fa-badge">{props.cartCount}</i>
                    </Link>
                </div>
      
    </div>
  </div>
</nav>
</>
    )
}

export default Navbar;
