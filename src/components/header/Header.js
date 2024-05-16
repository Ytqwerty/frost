import './Header.css'
import Frost_logo from "./img/Frost logo.svg";
import basket_logo from "./img/basket.svg";
import Search_button from './img/search.svg'
import {useState} from "react";
import Modal_registration from "../../ui/modal_registration/Modal_registration";
import Modal_sign from "../../ui/modal_sign/Modal_sign";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

function Header() {
    const [modalactive, setModalactive] = useState(false);

    const [modalsign, setModalsign] = useState(false);

    const {user, login, logout} = useAuth();
    return (
        <div className='header'>
            <Modal_registration open={modalactive} setOpen={setModalactive}/>
            <Modal_sign open={modalsign} setOpen={setModalsign}/>
            <div className='container'>
                <Link to={'/main_page'}>
                    <div className='header_logo'><img src={Frost_logo} alt="Logo"/></div>
                </Link>
                <div className='city'>
                    <div>г.Нур-Султан</div>
                    <div>г.Алматы</div>
                </div>
                <div className='phone_number'>
                    <div>+7 777 777 77 77</div>
                    <div>+7 777 777 77 77</div>
                </div>
                <div className='Search'>
                    <input className='search' placeholder='Поиск по каталогу...'/>
                    <div className='search_button'><img src={Search_button} alt="Logo"/></div>
                </div>
                <div className='authorization'>
                    {user ? <Link to={'/orders'}><div className='name_link'>{user.firstName + ' ' + user.lastName}</div></Link>
                        : <div onClick={function () {
                            setModalsign(true)
                        }}>Вход в личный кабинет</div>}
                    {user ? <div onClick={logout}>Выйти</div>
                        : <div onClick={function () {
                            setModalactive(true)
                        }}>Зарегистрироваться</div>}
                </div>
                <Link to={'/cart'}>
                    <div><img src={basket_logo} alt="Logo"/></div>
                </Link>
            </div>
        </div>
    )
}

export default Header;