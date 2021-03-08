import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ListBookDetails } from '../actions/bookActions'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Form,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'

const BookScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const bookDetails = useSelector((state) => state.bookDetails)
  const { loading, error, book } = bookDetails
  console.log("get data", book)
  useEffect(() => {
    dispatch(ListBookDetails(match.params.id))
  }, [dispatch, match])
  const addToCardHandler = () => {
    history.push(`/Bag/${match.params.id}?qty=${qty}`)
  }

  // const product = products.find((p) => p._id === match.params.id);
  console.log("book.countInStock",book.countInStock)

  return (
    <>
    <h1>Hello!</h1>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row>
            <Col md={4}>
              <Image src={book.image} alt={book.bookName} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{book.bookName}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={book.rating}
                    text={`${book.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Writter: {book.writter}</ListGroup.Item>

                <ListGroup.Item>Page: {book.pages} Pages</ListGroup.Item>

                <ListGroup.Item>Price: ${book.price}/Per.Day</ListGroup.Item>
                <ListGroup.Item>
                  Description: {book.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
              {book.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Days:</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            // placeholder="name"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            
                            {[...Array(10).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}  Day!
                                </option>
                              ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${book.price * qty}/For {qty} Day!</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {!!book.countInStock
                          ? 'Avalible'
                          : 'Not Avaliable'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <Button
                      onClick={addToCardHandler}
                      className='btn-block'
                      type='button'
                      disabled={book.countInStock === false}
                    >
                      Add To Borrowing Bag! <span> </span> <span> </span>
                <i className="fas fa-suitcase-rolling">  </i>
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          {/* <Row className='py-5'>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{book.bookName}</h3>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </Container>
      )}
    </>
  )
}

export default BookScreen
