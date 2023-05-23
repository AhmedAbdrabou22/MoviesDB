import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom'
//اللينك مش هيشتغل علي navbarbrand 
//لان النافبار مش جوا ال BrowserRouter 
//الحل : نستخدم <a></a>
const NavBar = ({ searchByquery }) => {
    const [dataSearch, setDataSearch] = useState("")
    const searchNow = () => {
        searchByquery(dataSearch)
    }

    return (
        <div>
            <Navbar bg="dark" expand="lg" className='navs'>
                <Container>
                    <Navbar.Brand href="/" className='text-light'>شاهد</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="ابحث عن فلمك المفضل"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) =>{
                                    setDataSearch(e.target.value)
                                    searchNow();
                                }}
                            />
                            <Button variant="outline-light mx-2" onClick={() => searchNow()}>ابحث </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
