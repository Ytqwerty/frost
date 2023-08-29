import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Basket.css';
import {useState} from "react";
import Contact_details from "../contact_details/Contact_details";
import Completion from "../completion/Completion";
import Delivery from "../delivery/Delivery";
import BasketProduct from "../basket_product/Basket_product";


function Basket() {


    const [activeElement, setActiveElement] = useState(0);

    function click_Button(index) {
        setActiveElement(index)
    }

    return (
        <div className='Basket'>
            <Header/>
            <div className='basket_container'>
                <div className='basket_checkout'>
                    <div className='checkout'>Оформление заказа</div>
                    <div className='basket_header'>
                        <div className={`basket_buttons ${activeElement === 0 ? "basket_blue_button" : ""}`}
                             onClick={() => click_Button(0)}>Корзина
                        </div>
                        <div className={`basket_buttons ${activeElement === 1 ? "basket_blue_button" : ""}`}
                             onClick={() => click_Button(1)}>Контактые данные
                        </div>
                        <div className={`basket_buttons ${activeElement === 2 ? "basket_blue_button" : ""}`}
                             onClick={() => click_Button(2)}>Доставка
                        </div>
                        <div className={`basket_buttons ${activeElement === 3 ? "basket_blue_button" : ""}`}
                             onClick={() => click_Button(3)}>Завершение
                        </div>
                    </div>
                </div>
                {activeElement !== 0 ? null : <BasketProduct/>}
                {activeElement !== 1 ? null : <Contact_details/>}
                {activeElement !== 2 ? null : <Delivery/>}
                {activeElement !== 3 ? null : <Completion/>}
            </div>
            <Footer/>
        </div>
    )
}


export default Basket;