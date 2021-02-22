import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

  const cartItems = useSelector(state => state.cartItems)

  let history = useHistory();

  return (
    <nav>
      <div className="logo" onClick={() => history.push('/')}>CommerceKu</div>
      <div className="cart">
        <ShoppingCartOutlined style={{ fontSize: "30px" }} onClick={() => history.push('/cart')} />
        <p>{cartItems.length === 0 ? '' : cartItems.length}</p>
      </div>
    </nav>
  )
}

export default Header
