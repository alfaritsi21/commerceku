import React from 'react';
import product_card from "../data/product_data"
import { useHistory } from 'react-router-dom'
import { formatCurrency } from '../util';


function Home() {

  let history = useHistory();

  const listItems = product_card.map((item) =>
    <div className="card" key={item.id} >
      <div className="card_img">
        <img className="img" src={item.thumb} alt="images" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p className="price"><span>{item.currency}</span>{formatCurrency(item.price)}</p>
        <div className="btn" onClick={() => { history.push(`/detail/${item.id}`) }}>Detail</div>
      </div>
    </div>
  )


  return (
    <div className="main_content">
      {listItems}
    </div>
  );
}

export default Home;
