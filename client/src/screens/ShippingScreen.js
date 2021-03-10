import React, { useEffect, useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {
  saveShippingAddress,
  saveShippingLocation,
} from '../actions/bagActions'
import { Row, Col, ListGroup, Image, Form, Button, Card ,Container} from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
// import Map from '../components/Map'
import MapScreen from '../components/MapScreen'

const ShippingScreen = ({ history }) => {
  const bag = useSelector((state) => state.bag)
  console.log('bag', bag)
  const { shippingAddress } = bag
  const { shippingLocation } = bag

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const [latitude, setLatitude] = useState(shippingLocation.latitude)
  const [longitude, setLongitude] = useState(shippingLocation.longitude)

  // const [userCurrentLocation, setUserCurrentLocation] = useState(shippingLocation.userCurrentLocation)

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    // console.log('submit')
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/user/payment')
  }

  const submitHandlerWithMap = async (e) => {
    e.preventDefault()
    console.log('submit')
    await navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log('pos', position)
        // var position = position
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log('Latitude is :', position.coords.latitude)
        console.log('Longitude is :', position.coords.longitude)
        console.log(position)
        dispatch(saveShippingLocation({ latitude, longitude }))
        
      },
      
      // setTimeout(()=>(history.push('/user/payment')), 3000)
      // myFunction(){
        //   setTimeout(function(){ alert("Hello"); }, 3000);
        // }
        
        // function (error) {
          //   console.error('Error Code = ' + error.code + ' - ' + error.message)
          // }
          )
          setTimeout(() => {
            history.push('/user/payment')
          }, 3000)
          // e.preventDefault()
    // console.log( "fffffffff",abc)
    // history.push('/payment')
  }

  return (
    <Container>
      <h1>Shippping</h1>
        <CheckoutSteps step1 step2 />
    <Row>
      <Col sm ={12} md={4} >
        <MapScreen />
      </Col>
      <Col md={2}></Col>
      <Col sm={12} md={6}>
        {/* <FormContainer> */}
        <Form onSubmit={submitHandlerWithMap}>
          <Form.Group controlId='location'>
            <Form.Label>Location</Form.Label>
            {/* <AnyReactComponent /> */}
          </Form.Group>
          <Button type='submit' variant='primary'>
            <i class='fas fa-map-marker-alt fa-lg'> Know Your Location</i>
          </Button>
        </Form>
        <hr />

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>

            <Form.Control
              type='text'
              placeholder='Enter Your Address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Your City'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label>PostalCode</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Your PostalCode'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Your Country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>

        {/*  </FormContainer> */}
      </Col>
    </Row>
    </Container>
  )
}

export default ShippingScreen
