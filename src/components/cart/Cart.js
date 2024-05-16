import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Cart.css';
import {useState} from "react";
import Contact_details from "../contact_details/Contact_details";
import Completion from "../completion/Completion";
import Delivery from "../delivery/Delivery";
import BasketProduct from "../cart_product/Cart_product";
import Cart_product from "../cart_product/Cart_product";
import Orders from "../../userAccount/orders/Orders";


function Cart() {

    const [number,setNumber] = useState('')

    const[phone,setPhone]= useState('')

    const [activeElement, setActiveElement] = useState(0);

    function click_Button(index) {
        setActiveElement(index)
    }
    function activeContact_details() {
        setActiveElement(1)
    }
    function activeDelivery() {
        setActiveElement(2)
    }
    function activeCompletion() {
        setActiveElement(3)
    }
    return (
        <div className='Basket'>
            <Header/>
            <div className='basket_container'>
                <div className='basket_checkout'>
                    <div className='checkout'>Оформление заказа</div>
                    <div className='basket_header'>
                        <div className = {`basket_buttons ${activeElement === 0 ? "basket_blue_button" : ""}`}>Корзина
                        </div>
                        <div className={`basket_buttons ${activeElement === 1 ? "basket_blue_button" : ""}`}>Контактые данные
                        </div>
                        <div className={`basket_buttons ${activeElement === 2 ? "basket_blue_button" : ""}`}>Доставка
                        </div>
                        <div className={`basket_buttons ${activeElement === 3 ? "basket_blue_button" : ""}`}>Завершение
                        </div>
                    </div>
                </div>
                {activeElement !== 0 ? null : <Cart_product activeContact_Details={activeContact_details}/>}
                {activeElement !== 1 ? null : <Contact_details phone ={phone} setPhone={setPhone} activeDelivery={activeDelivery}/>}
                {activeElement !== 2 ? null : <Delivery phone={phone} activeCompletion={activeCompletion} setNumber={setNumber}/>}
                {activeElement !== 3 ? null : <Completion number={number}/>}
            </div>
            <Footer/>
        </div>
    )
}


export default Cart;