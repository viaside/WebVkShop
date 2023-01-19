import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getCookie, removeCookie } from 'typescript-cookie';


// navbar element
export function NavBar(){
    // redirect to vk authorize
    function loginHandler(){
        window.location.href = "https://oauth.vk.com/authorize?client_id=51483485&display=page&redirect_uri=http://localhost:3000&response_type=code&v=5.131";
    }

    // log out func "clear cookie"
    async function logoutHandler(){
        removeCookie("islogin");
        removeCookie('image');
        removeCookie('id');
        removeCookie('ProductId');
        window.location.reload();
    }

    // vk item
    const NavVk = (
        function(){
            if (getCookie("islogin") === "true") {
                return ( 
                    <>
                    <NavLink tag={Link} to="/"><img className='avatar' height={50} width={50} src={ getCookie("image")} alt="" /></NavLink>
                    <button className='VkButton' onClick={ logoutHandler }>Выйти</button>
                    </>
                )
            } else{
                return <button className='VkButton' onClick={ loginHandler }>Войти с помощью Vk</button>
            }
        }
    );

    return (
    <>                      
            <Navbar className="navbar-expand-lg fixed-top navbarBg font" container light>
                <NavbarBrand tag={Link} to="/" className="text-white"><svg className='Favicon' width={100} height={100}/></NavbarBrand>
                <div className="flex-grow-1">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/">Магазин</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/product">Продукты</NavLink>
                        </NavItem>
                    </ul>
                </div>
                <div className="flex-grow-2">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavItem>
                            <NavLink tag={Link} className="text-white" to="/basket">Корзина</NavLink>
                        </NavItem>
                    </ul>
                </div>
                <div className="flex-grow-2 pleft">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavItem >   
                        </NavItem>
                    </ul>
                </div>  
                <div className="flex-grow-2 pleft">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavItem >   
                            <NavVk/>
                        </NavItem>
                    </ul>
                </div>  
            </Navbar>
        </>
        )
}