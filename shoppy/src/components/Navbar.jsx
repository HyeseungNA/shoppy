import React from 'react';
import {Link} from 'react-router-dom';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';

export default function Navbar() {
    return (
        <header className='flex justify-between'>
            <Link to='/' className='flex items-center text-4xl'>
            <FiShoppingBag/>
            <h1>shoppy</h1>
            </Link>
            <nav>
                <Link to='/products'>products</Link>
                <Link to='/carts'>carts</Link>
                <Link to='/products'>
                    <BsFillPencilFill/>
                </Link>
                <button>Login</button>
            </nav>
        </header>
    );
}

