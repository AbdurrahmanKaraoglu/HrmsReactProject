import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbarItems">
                <Link to='/'>
                    <h1 className="navbar-logo">HRMS <space /><space />
                        <i class="fas fa-users"></i>
                    </h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign In</Button>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}
export default Navbar