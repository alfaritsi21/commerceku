import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'

function Header() {

  let history = useHistory();

  return (
    <nav>
      <div className="logo" onClick={() => history.push('/')}>CommerceKu</div>
      <div className="cart">
        <ShoppingCartOutlined style={{ fontSize: "30px" }} onClick={() => history.push('/cart')} />
        <p>1</p>
      </div>
    </nav>
  )
}

export default Header
