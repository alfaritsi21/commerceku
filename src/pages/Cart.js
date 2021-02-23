import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Checkbox, Divider, Image, Modal } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { checkItem, minusQuantity, plusQuantity, removeItem, clearCart } from '../store/action'
import { formatCurrency } from '../util';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [' '];

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0
    let isAllCheck = true
    let isAllUncheck = true
    cartItems.forEach(element => {
      if (element.isChecked) {
        total += element.item.price * element.quantity
        isAllUncheck = false
      } else {
        isAllCheck = false
      }
    });
    if (isAllCheck) {
      setCheckAll(true)
      setIsIndeterminate(false)
    } else if (isAllUncheck) {
      setCheckAll(false)
      setIsIndeterminate(false)
    } else {
      setCheckAll(false)
      setIsIndeterminate(true)
    }
    setTotal(total)
  }, [cartItems])

  const [checkAll, setCheckAll] = React.useState(false);
  const [isIndeterminate, setIsIndeterminate] = React.useState(false);

  const onChange = () => {
    if (checkAll) {
      //uncheck all
      cartItems.forEach(element => {
        dispatch(checkItem(element.item))
      });
    } else {
      //check all
      cartItems.forEach(element => {
        if (element.isChecked) {
        } else {
          dispatch(checkItem(element.item))
        }
      });
    }
  };

  const checkout = () => {

    const handleOk = () => {
      dispatch(clearCart())
    };

    Modal.success({
      title: 'Your order has been succesfully created',
      okText: "OK",
      onOk() { handleOk() },

    });
  }


  return (
    <div className="main_detail">
      <div className="cart">
        <Row>
          <Col span={15}>
            <h1 style={{ color: "white" }}>Shopping Cart</h1>
            <hr />
            {
              cartItems.length && <Checkbox indeterminate={isIndeterminate} checked={checkAll} onChange={() => onChange()} style={{ color: "white", marginTop: "10px" }}>
                Check all
            </Checkbox>
            }

            <Divider />
            {
              cartItems.length ? cartItems.map((data) => {
                const { item, quantity, isChecked } = data

                return <div className="container-cart">
                  <Row>
                    <Col span={1}>
                      <Checkbox onChange={() => dispatch(checkItem(item))} checked={isChecked} />

                    </Col>
                    <Col span={23}>
                      <Row>
                        <Col span={4}><Image
                          width={80}
                          src={item.thumb}
                        /></Col>
                        <Col span={13}>
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
                        <Col span={6}><p className="cart_price"><span>{item.currency} </span>{formatCurrency(item.price)}</p></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

              })
                : <p className="cart_empty">Your Cart Is Empty</p>
            }
          </Col>
          <Col span={1}>

          </Col>
          <Col span={6}>
            <h1 style={{ color: "white", textAlign: "center" }}>Subtotal</h1>
            <hr />
            <div className="container-subtotal">
              <p className="cart_subtotal"><span>Rp</span>{formatCurrency(total)}</p>
              {
                cartItems.length && <div className="btn" onClick={checkout}>Proceed to checkout</div>
              }
            </div>

          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Cart
