import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href='./#home'>
          Dynamic <b>Form</b>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: {" "} <b>Katerin</b>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
