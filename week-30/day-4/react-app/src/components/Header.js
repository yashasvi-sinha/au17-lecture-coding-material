import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/books'>Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cars'>Cars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/electronics'>Electronics</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
