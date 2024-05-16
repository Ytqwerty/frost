import './Cart_item.css'
import {useEffect, useState} from "react";
import axios from "axios";

// `/orders` -> with auth token
// возвращает в качестве результата оформленные пользователем заказы.

function Cart_item(props) {

    const [loading, setLoading] = useState(true);

    const [count, setCount] = useState(props.count)


    useEffect(function () {
        props.onChange(count)
    }, [count])

    function increase() {
        setLoading(false)
        axios.get('https://frost.runtime.kz/api/cart/increase', {
            // headers:{
            // Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTVhYmE2YzQwNTljMjIzYzZhZjcwNjg0NDU0OGFiN2RkOTQzMTNmYTM0NjI4ZGY3MjgwN2JhNzM2YzE2NDVlZjcwNTA0ZjNkZmI0YzA5YzkiLCJpYXQiOjE2OTc0NjYzMTguNDM0NjU1LCJuYmYiOjE2OTc0NjYzMTguNDM0NjU5LCJleHAiOjE3MjkwODg3MTguNDIxNTM2OSwic3ViIjoiMiIsInNjb3BlcyI6W119.Ilwg4ajfaZC2LztfFvQQCmbFujhe58JoHII0LovhMIZ_0s4U8d_JJk2f3mhww8k0_og7T333bA9LyjjZsx5u3aam7oDJ268szboNtT_8CVK0bw78rvxQ0fCUaa8XcQCMg0vRWHhMvGMoDQrlg7wI3vBFbrpPqdUwvCk_F_s52kKSrKerj1vwWt-hLKjJRWKrqTdIV-MktLISjw0VpKGgWRs59LLPAUEzVVrlNWJDHkgU0T2QOtnyvQLS5bfIzc5cPJCTXyXKai1YhDdOdSSOy0HElPyMgkocrcP40lXJcbATCHWcQa1Citrx20-cZk8wGIizGMVFZhPwm3Le-asIUsAuKnx8_0daQS0v9ob3QqPjfYCe1Qiei4OpBc62HjfinmvEzqosnSrak2aLXWoMrY_cIUe626mMT6QTr2wPtPl3ZczCDrGbhClVBY_7mjNzR4MPO7u5UtR1vtPaGVadQqbgwTEKxukjgST19Om7hSCFOtFEOdv0Ff4Ie9BXaAf8mFUIQfGkfmtR_dfHVmyO_ZWd2R0ZGk4CGp53F-Ubq2_tao39g7qMywYBp2SlHYkIf0F1wuxFSkWVIYdRlf558cMJoo-OiJrSE_z-e2zZiZ6czulDPHk-XrW0RZxeDaZ54K2DbZKb27QUq7FazP4-DLHatz8uYuQ9n87qIoaz-TE'
            // },
            params: {
                productId: props.product.id
            }
        }).then(function () {
            setLoading(true)
            setCount(prev => prev + 1);
        })
    }

    function decrease() {
        setLoading(false)
        axios.get('https://frost.runtime.kz/api/cart/decrease', {
            // headers:{
            // Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTVhYmE2YzQwNTljMjIzYzZhZjcwNjg0NDU0OGFiN2RkOTQzMTNmYTM0NjI4ZGY3MjgwN2JhNzM2YzE2NDVlZjcwNTA0ZjNkZmI0YzA5YzkiLCJpYXQiOjE2OTc0NjYzMTguNDM0NjU1LCJuYmYiOjE2OTc0NjYzMTguNDM0NjU5LCJleHAiOjE3MjkwODg3MTguNDIxNTM2OSwic3ViIjoiMiIsInNjb3BlcyI6W119.Ilwg4ajfaZC2LztfFvQQCmbFujhe58JoHII0LovhMIZ_0s4U8d_JJk2f3mhww8k0_og7T333bA9LyjjZsx5u3aam7oDJ268szboNtT_8CVK0bw78rvxQ0fCUaa8XcQCMg0vRWHhMvGMoDQrlg7wI3vBFbrpPqdUwvCk_F_s52kKSrKerj1vwWt-hLKjJRWKrqTdIV-MktLISjw0VpKGgWRs59LLPAUEzVVrlNWJDHkgU0T2QOtnyvQLS5bfIzc5cPJCTXyXKai1YhDdOdSSOy0HElPyMgkocrcP40lXJcbATCHWcQa1Citrx20-cZk8wGIizGMVFZhPwm3Le-asIUsAuKnx8_0daQS0v9ob3QqPjfYCe1Qiei4OpBc62HjfinmvEzqosnSrak2aLXWoMrY_cIUe626mMT6QTr2wPtPl3ZczCDrGbhClVBY_7mjNzR4MPO7u5UtR1vtPaGVadQqbgwTEKxukjgST19Om7hSCFOtFEOdv0Ff4Ie9BXaAf8mFUIQfGkfmtR_dfHVmyO_ZWd2R0ZGk4CGp53F-Ubq2_tao39g7qMywYBp2SlHYkIf0F1wuxFSkWVIYdRlf558cMJoo-OiJrSE_z-e2zZiZ6czulDPHk-XrW0RZxeDaZ54K2DbZKb27QUq7FazP4-DLHatz8uYuQ9n87qIoaz-TE'
            // },
            params: {
                productId: props.product.id
            }
        }).then(function () {
            setLoading(true);
            if (count > 1) {
                setCount(count - 1);
            } else {
                props.delete_item();
            }
        })
    }

    return (
        <div className='basket_item'>
            <div className='basket_item_product'>
                <div className='basket_name'>{props.product.name}</div>
                <div className='basket_item_price'>
                    <div className={loading ? 'basket_count' : 'disable_basket_count'}>
                        <div className='plus_minus' onClick={loading ? decrease : null}>-
                        </div>
                        <div className='basket_item_count'>{props.count}</div>
                        <div className='plus_minus'
                             onClick={loading ? increase : null}>+
                        </div>
                    </div>
                    <div>{props.product.price * props.count}</div>
                </div>
            </div>
            <div className='basket_item_article'>
                <div className='article'>Артикул: {props.product.code}</div>
                <div className='basket_item_delete' onClick={props.delete_item}>Удалить из корзины
                </div>
            </div>
        </div>
    )
}


export default Cart_item;