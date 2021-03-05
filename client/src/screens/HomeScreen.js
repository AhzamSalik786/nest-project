import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Book from '../components/Book'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { ListBooks } from '../actions/bookActions'
const HomeScreen = () => {
  const dispatch = useDispatch()

  const bookList = useSelector((state) => state.bookList)
  const { loading, error, books } = bookList
  console.log('bookList', bookList)

  useEffect(() => {
    dispatch(ListBooks())
  }, [dispatch])

  return (
    <>
      <h1>New Books Collection</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {books.map((book) => (
            <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
