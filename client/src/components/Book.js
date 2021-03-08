import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
const Book = ({ book }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/books/${book.id}`}>
        <Card.Img src={book.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/books/${book.id}`}>
          <Card.Title as='div'>
            <strong>
              <b>{book.bookName}</b>
            </strong>
          </Card.Title>
          <Card.Title as='div'>
            <strong>
              <b>Writter: </b>
              {book.writter}
            </strong>
          </Card.Title>
        </Link>
        
        <Card.Text as='div' className ="font-weight-bolder"><strong><b>${book.price}/</b></strong> Per.Day</Card.Text>
        <Card.Text as='div'>
          <Rating value={book.rating} text={`${book.numReviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book
