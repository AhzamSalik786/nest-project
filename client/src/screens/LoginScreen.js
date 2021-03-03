import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
// import Gmail from '../components/Gmail'
import { login, loginWithGmail } from '../actions/userActions'
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gmail, setGmail] = useState('')
  console.log('gmail', gmail)
  // console.log('password' , password)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, userInfo, error } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  const submitHandlerGmail = (e) => {
    e.preventDefault()
    console.log("check")
    // dispatch(loginWithGmail(gmail))
  }
  const responseGoogle = (response) => {
    // console.log('infder', response.profileObj)
    console.log('in', response.profileObj.email)
    console.log('inwerter', response)
    // (e)=> setGmail(e.target.profileObj)
    const gmail = response.profileObj.email
    console.log("com-Gmail", gmail)
    // setGmail(gmail)
    dispatch(loginWithGmail(gmail))

  }

  // function myFunction() {
  //   location.replace("https://localhost:3000")
  // }

  return (
    <FormContainer>
      <h1> Sign In </h1>
      {error && <Message variant='danger'> {error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant>
          Sign In
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link
              // to={redirect ? `/register?redirect=${redirect}` : '/register'}
              to='/user/register'
            >
              Register{' '}
            </Link>
          </Col>
        </Row>
      </Form>
      <Form onSubmit={submitHandlerGmail}>
        {/* <Row> */}
          {/* <Link to='/'> */}
          
            <GoogleLogin
              // onClick={(e)=> setGmail(e.target.profileObj)}
              clientId='891848691954-aiqk6bsmak8us3vvkj2oth5u0dui8mf4.apps.googleusercontent.com'
              buttonText='Sign in with Google'
              onSuccess={responseGoogle}
              // value= {response.profileObj.email}
              // onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          {/* </Link>
        </Row> */}
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
