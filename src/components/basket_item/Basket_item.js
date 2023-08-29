import './Basket_item.css'
import {useEffect, useState} from "react";

function Basket_item(props) {

    const [count, setCount] = useState(props.product.count);
    useEffect(function () {
        setCount(props.product.count)
    }, [props.product.count])

    function decrement() {
        if (count > 1) {
            setCount(count - 1);
            props.onCount(count - 1)
        }
    }

    function increment() {
        setCount(count + 1);
        props.onCount(count + 1)
    }

    return (
        <div className='basket_item'>
            <div className='basket_item_product'>
                <div className='basket_name'>{props.product.name}</div>
                <div className='basket_item_price'>
                    <div className='basket_count'>
                        <div onClick={decrement}>-</div>
                        <div className='basket_item_count'>{count}</div>
                        <div onClick={increment}>+</div>
                    </div>
                    <div>{props.product.price * count}</div>
                </div>
            </div>
            <div className='basket_item_article'>
                <div className='article'>{props.product.article}</div>
                <div className='basket_item_delete' onClick={props.delete_Item}>Удалить из корзины</div>
            </div>
        </div>
    )
}


export default Basket_item;
