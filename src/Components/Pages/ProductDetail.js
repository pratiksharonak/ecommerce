import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetail = (props) => {
    const [product,setProduct] = useState({})
    const {productId} = useParams();
    
    const addItem = (product) => {
        props.addToCart({
            id:product.id,
            name:product.title,
            image:product.image,
            price:product.price,
            qty:1
        });
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+productId, 
        {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response=>response.json())
        .then(response=>{
            setProduct(response)
        })
    },[])

    return(
        <>
        <h1>{product.category}</h1>
        
        <div className="row">
            <div className="col-md-6">
                <img width="100%" src={product.image}/>
                
            </div>
            <div className="col-md-6">
                <h3 style={{color:'red'}}>{product.title}</h3>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <button className="btn btn-primary" onClick={()=>addItem(product)}>Add to Cart</button>
            </div>
        </div>
        </>
    )

    
}

export default ProductDetail;