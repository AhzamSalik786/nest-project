import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log("userLogin", userLogin)
  console.log("userInfo", userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>The Global Book </Navbar.Brand>
          </LinkContainer>

          <LinkContainer to='/'>
            <Navbar.Brand>
              The largest bookbank of new used and budget printed books in
              Pakistan!
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/bag'>
                <Nav.Link>
                  <i className='fas fa-suitcase-rolling fa-lg'>Bag!</i>
                  {/* <i className='fas fa-shopping-cart'></i>Cart */}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.userData.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile:</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/user/login'>
                  <Nav.Link>
                    <i className='fas fa-user fa-lg'>SignIn</i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
