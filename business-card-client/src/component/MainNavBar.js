import React from "react";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

function MainNavBar() {
    return (
        <div className="bg-img">
            <Navbar expand="lg" className="sticky-top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto">
                        <FormControl type="text" placeholder="Search" className="border-dark bg-transparent mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav >
                        <Button variant="outline-success" className="mr-sm-2">Home</Button>
                        <Button variant="outline-success" className="mr-sm-2">Contact</Button>
                        <Button variant="info" className="mr-sm-2">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNavBar;