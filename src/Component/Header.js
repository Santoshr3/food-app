import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.png';

// const Logo = () => {
//     return (
//         <div className="log">
//             <a href="/">Logo</a>
//         </div>
//     );
// };

// const Header = () => {
//     return (
//         <div className="header">
//             <Logo />
//             <div>
//                 <ul>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/gallery">Gallery</Link></li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Header;


const Logo = () => {
    return (
       <Link to="/">
         <img className='logo' src={logo} alt="Logo" />
       </Link>
    ); 
};

const Header = () => {
    return (
       <div className='header-wrapper'>
        <div className="container">
            <div className='header'>
            <Logo/>
            <ul>
            <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
            
            </ul>
            <div className='header-right'>
            <p className='login'><Link to="/Login">Login</Link></ p>
            <p>
                <img className='cart' src={cart} alt="cart" />
            </p>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Header;
