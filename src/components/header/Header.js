import './Header.css'
import Frost_logo from "./img/Frost logo.svg";
import basket_logo from "./img/basket.svg";
import Search_button from './img/search.svg'
import {useState} from "react";
import Modal from "../../ui/modal/Modal";
import Modal_sign from "../../ui/modal_sign/Modal_sign";
import {Link} from "react-router-dom";

function Header() {
    const [modalactive, setModalactive] = useState(false)
    const [modalsign, setModalsign] = useState(false)
    return (
        <div className='header'>
            <Modal open={modalactive} setOpen={setModalactive}/>
            <Modal_sign open={modalsign} setOpen={setModalsign}/>
            <div className='container'>
                <Link to ={'/main_page'}>
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
                    <div onClick={function () {
                        setModalsign(true)
                    }}>Вход в личный кабинет
                    </div>
                    <div onClick={function () {
                        setModalactive(true)
                    }}>Зарегистрироваться
                    </div>
                </div>
                <Link to={'/basket'}>
                <div><img src={basket_logo} alt="Logo"/></div>
                </Link>
            </div>
        </div>
    )
}

export default Header;