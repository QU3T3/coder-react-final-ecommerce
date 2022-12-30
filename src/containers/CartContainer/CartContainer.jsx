import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  const {cartList, emptyCart, totalPrice} = useCartContext()
  return (
    <div>
      { cartList.length !== 0 ?
      <>
        {cartList.map(prod => <div key={prod.id}>
                                <img src={prod.urlImage} alt="" className="w-25" />
                              Nombre { prod.name } - Precio: { prod.price }
                                </div>)
                                }
                                <h4>El precio total es: {totalPrice()} </h4>
                                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
      </>
      
      :

      <>
        <h2>Su carrito vacio</h2>
        <Link to='/'>Ir al Home</Link>
      </>
}
    </div>
  )
}

export default CartContainer