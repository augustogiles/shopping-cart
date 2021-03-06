import React from 'react';
import { Link } from 'react-router-dom'

// function Navbar(){
const Navbar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div>
                <Link to='/' className="brand-logo">Shopping</Link>
                <ul className="right">
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/cart'>My cart</Link></li>
                    <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;