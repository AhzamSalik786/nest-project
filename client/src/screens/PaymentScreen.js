import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/bagActions'

const PaymentScreen = ({ history }) => {
  const bag = useSelector((state) => state.bag)
  const { shippingAddress } = bag
  const { shippingLocation} = bag

  if (!shippingAddress || !shippingLocation ) {
    history.push('/user/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState(
    'strip',
    'PayPal',
    'Cash On Delivery',
    
  )

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    // console.log('submit')
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/user/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>
          <Form.Check
              type='radio'
              label='Strip'
              id='Strip'
              name='paymentMethod'
              value='Strip'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            <Form.Check
              type='radio'
              label='Cash On Delivery'
              id=' Cash On Delivery'
              name='paymentMethod'
              value='Cash On Delivery'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue...
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
