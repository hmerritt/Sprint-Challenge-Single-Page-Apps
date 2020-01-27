import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='ui centered'>
            <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
            <div>
                <Nav>
                    <NavItem>
                        <Link to='/'>
                            <NavLink>Home</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/characters'>
                            <NavLink>Characters</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </div>
        </header>
    );
}
