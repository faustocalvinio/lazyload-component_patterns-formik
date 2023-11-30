import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';
export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        {/* rutas hijas */}

        <ul>
            <li>
                <NavLink to="/lazyload/lazy-1">Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to="/lazyload/lazy-2">Lazy 2</NavLink>
            </li>
            <li>
                <NavLink to="/lazyload/lazy-3">Lazy 3</NavLink>
            </li>
        </ul>

        <Routes>
            <Route path="lazy-1" element={<LazyPage1 />} />
            <Route path="lazy-2" element={<LazyPage2 />} />
            <Route path="lazy-3" element={<LazyPage3 />} />

            {/* <Route path='*' element={<h1>Not Found</h1>} /> */}
            <Route path='*' element={ <Navigate to="lazy-1" replace /> } />

        </Routes>

    </div>
  )
}
export default LazyLayout;