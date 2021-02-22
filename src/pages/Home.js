import React from 'react';
import product_card from "../data/product_data"
import { useHistory } from 'react-router-dom'


function Home() {

  let history = useHistory();

  const listItems = product_card.map((item) =>
    <div className="card" key={item.id} onClick={() => { history.push(`/detail/${item.id}`) }}>
      <div className="card_img">
        <img className="img" src={item.thumb} alt="images" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p className="price"><span>{item.currency}</span>{item.price}</p>
        <div className="btn">Detail</div>
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
