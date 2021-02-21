import React from 'react'
import { Row, Col, Checkbox, Divider, Image } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [' '];

const ProductDetail = () => {

  const [checkedList, setCheckedList] = React.useState([]);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };


  return (
    <div className="main_detail">
      <div className="cart">
        <Row>
          <Col span={15}>
            <h1 style={{ color: "white" }}>Shopping Cart</h1>
            <hr />

            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} style={{ color: "white", marginTop: "10px" }}>
              Check all
            </Checkbox>
            <Divider />
            <div className="container-cart">
              <Row>
                <Col span={1}>
                  <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

                </Col>
                <Col span={23}>
                  <Row>
                    <Col span={3}><Image
                      width={80}
                      src="./images/6.png"
                    /></Col>
                    <Col span={16}>
                      <div className="product-cart">
                        <p className="label-name">Nama Produk</p>
                        <DeleteOutlined style={{ fontSize: "18px", color: "white", cursor: "pointer" }} />

                      </div>
                      <div className="edit-cart">
                        <MinusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                        <p className="label-quantity">1</p>
                        <PlusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                      </div>
                    </Col>
                    <Col span={4}><p className="cart_price"><span>Rp</span>4000000</p></Col>
                  </Row>
                </Col>
              </Row>
            </div>



            <div className="container-cart">
              <Row>
                <Col span={1}>
                  <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

                </Col>
                <Col span={23}>
                  <Row>
                    <Col span={3}><Image
                      width={80}
                      src="./images/6.png"
                    /></Col>
                    <Col span={16}>
                      <div className="product-cart">
                        <p className="label-name">Nama Produk</p>
                        <DeleteOutlined style={{ fontSize: "18px", color: "white", cursor: "pointer" }} />

                      </div>
                      <div className="edit-cart">
                        <MinusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                        <p className="label-quantity">1</p>
                        <PlusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
                      </div>
                    </Col>
                    <Col span={4}><p className="cart_price"><span>Rp</span>4000000</p></Col>
                  </Row>
                </Col>
              </Row>
            </div>

          </Col>
          <Col span={1}>

          </Col>
          <Col span={6}>
            <h1 style={{ color: "white", textAlign: "center" }}>Subtotal</h1>
            <hr />
            <div className="container-subtotal">
              <p className="cart_subtotal"><span>Rp</span>4000000</p>
              <div className="btn">Proceed to checkout</div>

            </div>

          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductDetail
