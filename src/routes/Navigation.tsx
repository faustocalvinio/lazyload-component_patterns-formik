import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

import logo from '../logo.svg'

import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                                routes.map( ({ to, path, name }) => (
                                    <li key={crypto.randomUUID()}>
                                        <NavLink  to={to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                                    </li>
                                ))
                            }                       
                        </ul>
                    </nav>


                    <Routes>
                        {
                            routes.map( ({ to, path, Component }) => (
                                <Route key={crypto.randomUUID()} path={path} element={ <Component /> } />
                                ))
                            }         
                        <Route key={crypto.randomUUID()} path="/*" element={ <Navigate to={ routes[0].to } />} />           
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
