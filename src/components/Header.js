import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
  return (
    <nav>
      <div className="logo">CommerceKu</div>
      <div className="cart">
        <ShoppingCartOutlined style={{ fontSize: "30px" }} />
        <p>0</p>
      </div>
    </nav>
  )
}

export default Header
