import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <Navbar
                    bg="dark"
                    expand="lg"
                    variant="dark"
                    style={stickyHeader}>
                    <Navbar.Brand>
                        <Link to="/artists">Artist Manager</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/artists">Artists</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/api">All Albums</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/api">Browse API</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

const stickyHeader = {
    position: 'sticky',
    top: 0,
    zIndex: 99
};

export default Header;
