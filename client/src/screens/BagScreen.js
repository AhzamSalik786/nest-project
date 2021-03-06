// import { useEffect } from "react"
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToBag, removeFromBag } from '../actions/bagActions'
// import { cartReducer } from '../reducers/cartReducers'

const BagScreen = ({ match, location, history }) => {
  const bagId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()

  const bag = useSelector((state) => state.bag)
  const { bagItems } = bag
  console.log('bagItems', bagItems)

  useEffect(() => {
    if (bagId) {
      dispatch(addToBag(bagId, qty))
    }
  }, [dispatch, bagId, qty])

  const removeFromBagHandler = (id) => {
    dispatch(removeFromBag(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  // console.log(qty)

  return (
    <Row>
      <Col md={8}>
        <h1>Borrow Bag!</h1>
        {bagItems.length === 0 ? (
          <Message>
            <i class='fas fa-sad-tear'></i> Your Bag Is Empty{' '}
            <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {bagItems.map((item) => (
              <ListGroup.Item key={item.book}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={TimeRanges.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/books/${item.book}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price} / Per.Day!</Col>
                  <Col md={3}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToBag(item.book, Number(e.target.value)))
                      }
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1} Day!
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromBagHandler(item.book)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal:
                {/* {bagItems.reduce((acc, item) => acc + item.qty, 0
               )} books */}
                {bagItems.length} Books
              </h2>
              $
              {bagItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={bagItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}
export default BagScreen
