const Cart = (props) => {
    console.log(props);
    return(
        <>
        
        {props.cartData.map((cart,i)=>{
            return (
            <div key = {i} className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
                <img width="100%" src={cart.image}/>
                </div>
            <div className="col-md-5">
                <h6>{cart.name}</h6>
                <p>Price: {cart.price}</p>
                <p>Quantity: {cart.qty}</p>
            </div>
            <div className="col-md-2"></div>
            </div>
            )

            
        })}
        </>
    )

    
}

export default Cart;