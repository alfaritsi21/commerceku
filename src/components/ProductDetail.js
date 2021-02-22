import React from 'react'
import { Row, Col, Image } from 'antd';

const ProductDetail = ({ detail }) => {


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
              <p className="product_price"><span>{detail.currency}</span>{detail.price}</p>
              <p className="product_description">{detail.description}</p>
              <div className="btn">Add to cart</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail
