import { Link, NavLink } from 'react-router-dom'
import { Cartwidget } from '../Cartwidget/Cartwidget'

const NavBar = () => {
  return (
    <div className="nav">
        <Link className='title' to='/'>Haru <span>Store</span></Link>
        <NavLink className='dslink' to="/category/ds" >Nintendo DS</NavLink>
        <NavLink className='threedslink' to="/category/3ds" >Nintendo 3DS</NavLink>
        <Link className='cart' to='/cart'>
          <Cartwidget/>
        </Link>
    </div>
  )
}

export default NavBar