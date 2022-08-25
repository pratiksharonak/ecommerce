import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    console.log(category);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+category, 
        {headers: {'Access-Control-Allow-Origin': '*'}}
        )
        .then(response=>response.json())
        .then(response=>setProducts(response))
    },[category])
    
    
    return(
        <>
        <h1>{category}</h1>
        {products.map((product,i)=>{
            return (
                <div className="col-md-3" key={i}>
                    <div className="card" style={{width: "18rem"}}>
                        <Link to={"/product/"+ product.id}>
                            <img src={product.image} className="card-img-top" alt="..."/>
                        </Link> 
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <h5 className="card-title">{product.price}</h5>
                            
                            <Link to={"/product/"+ product.id} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
                
            )
      })}
        
        </>
    )

    
}

export default Products;