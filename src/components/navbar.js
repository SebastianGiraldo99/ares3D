import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import HeaderAres from "./header";
import logo from './assets/letter.png';

function NavbarAres(){
    return (
        <div>
            <Navbar color="light">
                <NavbarBrand href="/">
                    <img 
                    alt="castor-logo"
                    src={logo}
                    style={{
                        left : 10,
                        height : 50,
                        width : 70,
                        borderRadius : 50
                    }}
                    >
                    </img>
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink active href="#">
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active href="#">
                            Nosotros
                        </NavLink>    
                    </NavItem>
                    <NavItem>
                        <NavLink active href="#">
                            Contacto
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <HeaderAres/>
        </div>
        
    );
};


export default NavbarAres;