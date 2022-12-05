import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Menu } from "@material-ui/icons";


const Navbar = () => {
    return (
        <header>
            <nav>
            <Link to='/'><span className="title">DettoStore</span></Link>
                <div className="categ">
                    <Link to='/category/1'><span className="selectCat">Zapatillas</span></Link>
                    <Link to='/category/2'><span className="selectCat">Buzos</span></Link>
                    <Link to='/category/3'><span className="selectCat">Pantalones</span></Link>
                    <div className="menu">
                        <span><Menu /></span>
                    </div>
                </div>
                <div className="cart">
                    <span><CartWidget /></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;