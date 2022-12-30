import React, { useState } from 'react'

const ItemCount = ({ stock=10, initial=1, onAdd}) => {
  const [ count, setCount ] = useState(initial)

  const handleCountRemove = () => {
    if (count > initial) {
        setCount(count-1)
    }
  }
  const handleCountAdd = () => {
    if (count < stock) {
      setCount(count+1)
    }
  }

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    <div className='card'>
      <div className="card-header">
        <label htmlFor="">{count}</label>
      </div>
      <div className="card-body">
        <button onClick={handleCountAdd} className='btn btn-outline-danger'>+</button>
        <button onClick={handleCountRemove} className='btn btn-outline-danger'>-</button>
      </div>
      <div className="card-footer">
        <button className='btn btn-outline-success btn-block' onClick={ ()=> onAdd(count) } >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount