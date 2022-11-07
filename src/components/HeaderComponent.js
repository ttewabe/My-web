import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
                isNavOpen: false,
                
            };
        this.toggleNav = this.toggleNav.bind(this);
        }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark fixed="top" expand="xl">
                    <div className="container">
                        <NavbarBrand className="navbar-head" href="/"></NavbarBrand> 
                        <NavbarToggler onClick={this.toggleNav} style={{color:"blue"}} className="navbar-head"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem className="nav-link1">
                                <NavLink className="nav-link" exact to="/home" style={{color:"white"}}>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" exact to="/project" style={{color:"white"}}>PROJECTS</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" exact to="/contact" style={{color:"white"}}>CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;