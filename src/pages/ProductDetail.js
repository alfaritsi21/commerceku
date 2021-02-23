import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Row, Col, Image, Modal } from 'antd';
import product_card from "../data/product_data"
import { addItem } from '../store/action';
import { formatCurrency } from '../util';

const ProductDetail = () => {

  const dispatch = useDispatch()
  let { id } = useParams();
  const detail = product_card[id - 1]


  let history = useHistory();


  const success = () => {

    const handleOk = () => {
      history.push('/cart')
    };

    Modal.success({
      title: 'Your order has been added into cart',
      okText: "Go to cart",
      onOk() { handleOk() },

    });
  }

  const addToCart = () => {
    dispatch(addItem(detail, 1))
    success()
  }

  return (
    <div className="main_detail">
      <Row>
        <Col span={11}>
          <div className="card_img_detail">
            <Image.PreviewGroup>
              <Image className="img-detail"
                src={detail.thumb}
              />
            </Image.PreviewGroup>
          </div>
        </Col>
        <Col span={12}>
          <div className="product_detail">
            <h1>Product Details</h1>
            <hr />
            <div className="detail_header">
              <p className="product_name">{detail.product_name}</p>
              <p className="product_price"><span>{detail.currency}</span>{formatCurrency(detail.price)}</p>
              <p className="product_description">{detail.description}</p>

              <div className="btn" onClick={() => addToCart()}>Add to cart</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail
