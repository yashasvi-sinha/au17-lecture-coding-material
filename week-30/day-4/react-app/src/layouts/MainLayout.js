import React from 'react'
import { Link, Route } from 'react-router-dom'
import Book from '../components/Book'
import Car from '../components/Car'
import Electronic from '../components/Electronic'
import Header from '../components/Header'

function MainLayout() {
    return (
        <div className="container">
            <Header />
            <section className='row'>

                <div className='col-4 '>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <Link to='/books'>BookS</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to='/cars'>Cars</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to='/electronics'>Electronics</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-8'>

                    <Route exact path="/books/:bookCategory">
                        <Book />
                    </Route>

                    <Route exact path="/cars">
                        <Car />
                    </Route>
                    <Route exact path="/electronics">
                        <Electronic />
                    </Route>

                </div>

            </section>

        </div>
    )
}

export default MainLayout
