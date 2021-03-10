import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import MapScreen from '../components/MapScreen'
const PlaceOrderScreen = ({ history, props }) => {
  console.log('his', props, history)
  const dispatch = useDispatch()
  const bag = useSelector((state) => state.bag)
  console.log('bag', bag)

  //CAlculate prices

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  bag.itemsPrice = addDecimals(
    bag.bagItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  bag.shippingPrice = addDecimals(bag.itemsPrice > 30 ? 0 : 30)
  bag.taxPrice = addDecimals(Number((0.05 * bag.itemsPrice).toFixed(2)))

  bag.totalPrice = (
    Number(bag.itemsPrice) +
    Number(bag.shippingPrice) +
    Number(bag.taxPrice)
  ).toFixed(2)
  // console.log('state', state)

  const orderCreate = useSelector((state) => state.orderCreate)
  console.log('orderCreate')
  const { order, success, error } = orderCreate
  console.log('order', order)
  console.log('order create', orderCreate)

  useEffect(() => {
    if (success) {
      history.push(`/orders/${order.createOrder._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])
  const PlaceOrderHandler = () => {
    console.log('placeHolder Index')
    dispatch(
      createOrder({
        orderItems: bag.bagItems,
        shippingAddress: bag.shippingAddress,
        shippingLocaion: bag.shippingLocaion,
        paymentMethod: bag.paymentMethod,
        itemsPrice: bag.itemsPrice,
        shippingPrice: bag.shippingPrice,
        taxPrice: bag.taxPrice,
        totalPrice: bag.totalPrice,
      })
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={3}>
          <MapScreen />
        </Col>
        <Col md={6}>
          {/* <Row>
            <Col md={8}>
            </Col>
          </Row> */}
{/* <ListGroup>
  <MapScreen/>
</ListGroup> */}
          <ListGroup variant='flush'>
           
            
            
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {bag.shippingAddress.address
                  ? bag.shippingAddress.address
                  : bag.shippingLocation.latitude}
                ,{' '}
                {bag.shippingAddress.city
                  ? bag.shippingAddress.address
                  : bag.shippingLocation.longitude}
                {bag.shippingAddress.postalCode
                  ? bag.shippingAddress.address
                  : ''}{' '}
                {bag.shippingAddress.country ? bag.shippingAddress.address : ''}
              </p>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong> Method:</strong>
              {bag.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Borrowed Books</h2>
              {bag.bagItems.length === 0 ? (
                <Message> Your bag is empty</Message>
              ) : (
                <ListGroup variarnt='flush'>
                  
                  {bag.bagItems.map((item, index) => (
                    // console.log("img", /client/public/${item.image})
                    // client\public\images\albasit.jpg
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={12}>
                          
                          <Image
                            src={`\client\public${item.image}`}
                            // client\public\images\albasit.jpg
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={5}>
                          <Link to={`/books/${item.book}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty}Day x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Book Price</Col>
                  <Col>${bag.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shippings</Col>
                  <Col>${bag.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${bag.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${bag.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={bag.bagItems === 0}
                  onClick={PlaceOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
