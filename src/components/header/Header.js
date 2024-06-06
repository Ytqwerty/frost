import './Header.css'
import Frost_logo from "./img/Frost logo.svg";
import basket_logo from "./img/basket.svg";
import Search_button from './img/search.svg'
import {useState} from "react";
import Modal_registration from "../../ui/modal_registration/Modal_registration";
import Modal_sign from "../../ui/modal_sign/Modal_sign";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {useAuthModal} from "../../contexts/AuthModalContext";

function Header() {

    const {user, login, logout} = useAuth();

    const { modal_registration, setModal_registration, modal_sign, setModal_sign } = useAuthModal();

    return (
        <div className='header'>
            <Modal_registration open={modal_registration} setOpen={setModal_registration}/>
            <Modal_sign open={modal_sign} setOpen={setModal_sign}/>
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
                            setModal_sign(true)
                        }}>Вход в личный кабинет</div>}
                    {user ? <div onClick={logout}>Выйти</div>
                        : <div onClick={function () {
                            setModal_registration(true)
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