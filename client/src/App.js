import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/bookScreen'
import BagScreen from './screens/BagScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          {/* <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/orders/:id' component={OrderScreen} />

        <Route path='/profile' component={ProfileScreen} /> */}
          <Route path='/books/:id' component={ProductScreen} />
        <Route path='/user/shipping' component={ShippingScreen} />
        <Route path='/Bag/:id?' component={BagScreen} />
        <Route path='/' component={HomeScreen} exact />
          <Route path='/user/login' component={LoginScreen}  />
          <Route path='/user/register' component={RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
