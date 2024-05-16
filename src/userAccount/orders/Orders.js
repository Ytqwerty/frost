import React, {useEffect, useState} from 'react';
import './Orders.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";


function Orders() {
    const {user, login, logout} = useAuth();
    const params = useParams()
    const product_id = params.id
    const [information, setInformation] = useState([])
    useEffect(() => {
        axios.get('https://frost.runtime.kz/api/orders', {
            params: {
                productId: product_id
            }
        }).then(function (res) {
            setInformation(res.data)
        })
    }, []);
    return (
        <div className='Orders'>
            <Header/>
            <div className="basket_container">
                <div className='personal_account'>Личный кабинет</div>
                <div className='order_title'>
                    <div className='order_left'>
                        <div>Мои заказы</div>
                        <div>Контактные данные</div>
                        <div>Доставка</div>
                    </div>
                    <div className='order_right'>
                        <div className='order_h'>История заказов</div>
                        <div className='order_table'>
                            <div className='order_table_header'>
                                <div>Номер заказа</div>
                                <div>Наименование товара</div>
                                <div>Дата заказа</div>
                                <div>Стоимость</div>
                            </div>
                            {user ? information.map(function (item) {
                                let total=0
                                return (
                                    <div key={item.id} className='order_item'>
                                        <div className='item_id'>{item.id}</div>
                                        <div className='item_name'>
                                            {item.items.map(function (item2,index2) {
                                                total+=item2.count*item2.product.price
                                                return(
                                                    <div key={index2}>{item2.product.name}</div>
                                                )
                                            })}</div>
                                        <div className='item_date'>{new Date(item.created_at).toLocaleDateString()}</div>
                                        <div className='item_cost'>{total}</div>
                                    </div>
                                )
                            }) :null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Orders;