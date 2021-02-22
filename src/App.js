import React, { useState } from 'react';

import './App.css';
import './App.scss';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import product_card from "./data/product_data"




function App() {

  const [page, setPage] = useState(1);
  const [itemDetail, setItemDetail] = useState();

  const detailPage = (item) => {
    setItemDetail(item)
    setPage(2)
  }



  const listItems = product_card.map((item) =>
    <div className="card" onClick={() => detailPage(item)} key={item.id}>
      <div className="card_img">
        <img className="img" src={item.thumb} alt="images" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p className="price"><span>{item.currency}</span>{item.price}</p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  )


  return (
    <div className="container">
      <Header />

      {
        page === 1 && <div className="main_content">
          {listItems}
        </div>
      }

      {
        page === 2 && <ProductDetail detail={itemDetail} />

      }

      {
        page === 3 && <Cart />
      }

    </div>
  );
}

export default App;
