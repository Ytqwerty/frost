import React from 'react';
import {useState} from "react";
import Basket_item from "../basket_item/Basket_item";
import Dropdown from "../../ui/dropdown/Dropdown";
import Button from "../../ui/button/Button";

function Basket_product() {

    const [payment, setPayment] = useState([])

    const [product, setProduct] = useState([{
        id: 1,
        name: 'Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;',
        price: '150000',
        article: 'Артикул: AC97701',
        count: 1,
    }, {
        id: 2,
        name: 'Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;',
        price: '140000',
        article: 'Артикул: AC97701',
        count: 1,
    }])

    let total = 0;
    for (let key of product) {
        total += key.price * key.count
    }

    function onCount(count, index) {
        setProduct(function (prev) {
            let newState = [...prev];
            newState[index].count = count;
            return newState
        })
    }

    function delete_Item(index) {
        setProduct(function (prev) {
            let newState = [...prev];
            newState.splice(index, 1);
            return newState;
        })
    }


    return (
        <div className='basket_container'>
            <div className='basket_title'>
                <div className='pannier'>Корзина</div>
                <div className='basket_title_description'>
                    <div>Наименование товара</div>
                    <div className='basket_count_price'>
                        <div className='basket_count'>Количество</div>
                        <div className='basket_price'>Цена</div>
                    </div>
                </div>
                {product.map(function (item, index) {
                    return (
                        <Basket_item key={item.id} product={item} onCount={function (count) {
                            onCount(count, index)
                        }}
                                     delete_Item={function () {
                                         delete_Item(index)
                                     }}/>
                    )
                })}
                <div className='basket_payment_total'>
                    <div className='payment'>
                        <div className='basket_payment'>Способ оплаты</div>
                        <Dropdown name={'Оплата при получении'} elements={payment}/>
                    </div>
                    <div className='basket_total'>
                        <div className='total'>Итого к оплате:</div>
                        <div>{total} тг</div>
                    </div>
                </div>
            </div>
            <div className='basket_button'>
                <Button text='Оформить заказ'/>
            </div>
        </div>
    );
}

export default Basket_product;