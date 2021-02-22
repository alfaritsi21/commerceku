import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Checkbox, Divider, Image } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { minusQuantity, plusQuantity, removeItem } from '../store/action'

const CheckboxGroup = Checkbox.Group;

const plainOptions = [' '];

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems)
  const dispatch = useDispatch()


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
            {
              cartItems.map((data) => {
                const { item, quantity } = data

                return <div className="container-cart">
                  <Row>
                    <Col span={1}>
                      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

                    </Col>
                    <Col span={23}>
                      <Row>
                        <Col span={4}><Image
                          width={80}
                          src={item.thumb}
                        /></Col>
                        <Col span={14}>
                          <div className="product-cart">
                            <p className="label-name">{item.product_name}</p>
                            <DeleteOutlined style={{ fontSize: "18px", color: "white", cursor: "pointer" }} onClick={() => dispatch(removeItem(item))} />

                          </div>
                          <div className="edit-cart">
                            <MinusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} onClick={() => dispatch(minusQuantity(item))} />
                            <p className="label-quantity">{quantity}</p>
                            <PlusCircleOutlined style={{ fontSize: "20px", color: "white", cursor: "pointer" }} onClick={() => dispatch(plusQuantity(item))} />
                          </div>
                        </Col>
                        <Col span={5}><p className="cart_price"><span>{item.currency} </span>{item.price}</p></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

              })
            }
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

export default Cart
