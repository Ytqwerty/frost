import React, {useEffect} from 'react';
import {useState} from "react";
import Cart_item from "../cart_item/Cart_item";
import Dropdown from "../../ui/dropdown/Dropdown";
import Button from "../../ui/button/Button";
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";

function Cart_product(props) {

    const [product, setProduct] = useState([])

    const [total, setTotal] = useState(0)

    const [payment, setPayment] = useState([])

    const {user, login, logout} = useAuth();

    const [loading, setLoading] = useState(true)

    useEffect(function () {
        let total = 0;
        for (let key of product) {
            total += key.product.price * key.count
        }
        setTotal(total)
    }, [product])
    useEffect(function () {
        setLoading(false)
        axios.get('https://frost.runtime.kz/api/cart', {
            // headers:{
            // Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTVhYmE2YzQwNTljMjIzYzZhZjcwNjg0NDU0OGFiN2RkOTQzMTNmYTM0NjI4ZGY3MjgwN2JhNzM2YzE2NDVlZjcwNTA0ZjNkZmI0YzA5YzkiLCJpYXQiOjE2OTc0NjYzMTguNDM0NjU1LCJuYmYiOjE2OTc0NjYzMTguNDM0NjU5LCJleHAiOjE3MjkwODg3MTguNDIxNTM2OSwic3ViIjoiMiIsInNjb3BlcyI6W119.Ilwg4ajfaZC2LztfFvQQCmbFujhe58JoHII0LovhMIZ_0s4U8d_JJk2f3mhww8k0_og7T333bA9LyjjZsx5u3aam7oDJ268szboNtT_8CVK0bw78rvxQ0fCUaa8XcQCMg0vRWHhMvGMoDQrlg7wI3vBFbrpPqdUwvCk_F_s52kKSrKerj1vwWt-hLKjJRWKrqTdIV-MktLISjw0VpKGgWRs59LLPAUEzVVrlNWJDHkgU0T2QOtnyvQLS5bfIzc5cPJCTXyXKai1YhDdOdSSOy0HElPyMgkocrcP40lXJcbATCHWcQa1Citrx20-cZk8wGIizGMVFZhPwm3Le-asIUsAuKnx8_0daQS0v9ob3QqPjfYCe1Qiei4OpBc62HjfinmvEzqosnSrak2aLXWoMrY_cIUe626mMT6QTr2wPtPl3ZczCDrGbhClVBY_7mjNzR4MPO7u5UtR1vtPaGVadQqbgwTEKxukjgST19Om7hSCFOtFEOdv0Ff4Ie9BXaAf8mFUIQfGkfmtR_dfHVmyO_ZWd2R0ZGk4CGp53F-Ubq2_tao39g7qMywYBp2SlHYkIf0F1wuxFSkWVIYdRlf558cMJoo-OiJrSE_z-e2zZiZ6czulDPHk-XrW0RZxeDaZ54K2DbZKb27QUq7FazP4-DLHatz8uYuQ9n87qIoaz-TE'
            // }
        }).then(function (res) {
            setProduct(res.data.items)
            setLoading(true)
        })
    }, []);
    function delete_item(index) {
        axios.get('https://frost.runtime.kz/api/cart/delete', {
            // headers:{
            // Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTVhYmE2YzQwNTljMjIzYzZhZjcwNjg0NDU0OGFiN2RkOTQzMTNmYTM0NjI4ZGY3MjgwN2JhNzM2YzE2NDVlZjcwNTA0ZjNkZmI0YzA5YzkiLCJpYXQiOjE2OTc0NjYzMTguNDM0NjU1LCJuYmYiOjE2OTc0NjYzMTguNDM0NjU5LCJleHAiOjE3MjkwODg3MTguNDIxNTM2OSwic3ViIjoiMiIsInNjb3BlcyI6W119.Ilwg4ajfaZC2LztfFvQQCmbFujhe58JoHII0LovhMIZ_0s4U8d_JJk2f3mhww8k0_og7T333bA9LyjjZsx5u3aam7oDJ268szboNtT_8CVK0bw78rvxQ0fCUaa8XcQCMg0vRWHhMvGMoDQrlg7wI3vBFbrpPqdUwvCk_F_s52kKSrKerj1vwWt-hLKjJRWKrqTdIV-MktLISjw0VpKGgWRs59LLPAUEzVVrlNWJDHkgU0T2QOtnyvQLS5bfIzc5cPJCTXyXKai1YhDdOdSSOy0HElPyMgkocrcP40lXJcbATCHWcQa1Citrx20-cZk8wGIizGMVFZhPwm3Le-asIUsAuKnx8_0daQS0v9ob3QqPjfYCe1Qiei4OpBc62HjfinmvEzqosnSrak2aLXWoMrY_cIUe626mMT6QTr2wPtPl3ZczCDrGbhClVBY_7mjNzR4MPO7u5UtR1vtPaGVadQqbgwTEKxukjgST19Om7hSCFOtFEOdv0Ff4Ie9BXaAf8mFUIQfGkfmtR_dfHVmyO_ZWd2R0ZGk4CGp53F-Ubq2_tao39g7qMywYBp2SlHYkIf0F1wuxFSkWVIYdRlf558cMJoo-OiJrSE_z-e2zZiZ6czulDPHk-XrW0RZxeDaZ54K2DbZKb27QUq7FazP4-DLHatz8uYuQ9n87qIoaz-TE'
            // },
            params: {
                productId: product[index].product.id
            }
        }).then(function () {
        //     // setProduct(function (prev) {
        //     //     let newState = [...prev]
        //     //     for (let i = 0; i < newState.length; i++) {
        //     //         if (newState[i].product.id === id) {
        //     //             newState.splice(i, 1)
        //     //             i--
        //     //         }
        //     //     }
        //     //     return newState
        //     // })
            setProduct(function(prev) {
                let newState = [...prev];
                newState.splice(index,1);
                return newState;
            })
        })
    }



    function onChange(index, count) {
        setProduct(function (prev) {
            let newState = [...prev];
            newState[index].count = count
            return newState
        })
    }


    if (user === null || product.length === 0 && loading === true) {
        return (
            <div className='basket_title'>В корзине нет товаров</div>
        )
    } else if (loading === false) {
        return (
            <div className='basket_title'>...Loading</div>
        )
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
                        <Cart_item key={item.product.id}
                                   product={item.product}
                                   count={item.count}
                                   onChange={function (count) {
                                       onChange(index, count)
                                   }}
                                   delete_item={() => delete_item(index)}
                        />
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
                <Button classname='Button' text='Оформить заказ' onClick = {()=> props.activeContact_Details()}/>
            </div>
        </div>
    );
}

export default Cart_product;