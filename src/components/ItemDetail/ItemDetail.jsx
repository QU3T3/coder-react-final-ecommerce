import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

    const { agregarCarrito } = useCartContext()

    const onAdd = (count) => {
        console.log('La cantidad seleccionada es:', count)
        agregarCarrito( { ... product, count } )
    }

  return (
    <div className="container border border-3 border-danger rounded">
        <div className="row">
            <div className="col">
                <img className="w-50" src={product.urlImage} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
            </div>
            <div className="col">
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail