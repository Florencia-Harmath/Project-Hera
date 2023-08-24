import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/">HERA Cosmetica</Link>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/category/faciales">Faciales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/corporales">Corporales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/capilares">Capilares</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
            <CartWidget notificationCount={notificationCount} />
            </div>
        </div>
    )
}

export default NavBar;