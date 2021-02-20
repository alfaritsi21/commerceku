import React from 'react'
import { Row, Col, Image } from 'antd';

const ProductDetail = () => {
  return (
    <div className="main_detail">
      <Row>
        <Col span={11}>
          <div className="card_img_detail">
            <Image.PreviewGroup>
              <Image className="img-detail"
                src="./images/6.png"
              />
            </Image.PreviewGroup>
            {/* <img className="img-detail" src="./images/6.png" alt="images" /> */}
          </div>
        </Col>
        <Col span={12}>
          <div className="product_detail">
            <h1>Product Details</h1>
            <hr />
            <div className="detail_header">
              <p className="product_name">Nama Produk</p>
              <p className="product_price"><span>Rp</span>4000000</p>
              <p className="product_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <div className="btn">Add to cart</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail
