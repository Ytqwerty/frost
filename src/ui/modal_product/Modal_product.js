import Button from "../button/Button";
import {useEffect, useState} from "react";
import './../modal/Modal.css'
import './Modal_product.css'



function Modal_product(props) {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState(props.product.name)

    useEffect(function () {
        setProduct(props.product.name)
    }, [props.product.name])
    useEffect(function () {
        setCount(1)
    }, [props.open])
    if (!props.open) {
        return null
    }

    return (
        <div className={props.open ? 'active_modal' : 'modal'} onClick={function () {
            props.setOpen(false)
        }}>
            <div className="modal_content" onClick={function (event) {
                event.stopPropagation()
            }}>
                <div className='recovery'>Товар добавлен в корзину</div>
                <div className='modal_product_compressor'>{product}</div>
                <div className='modal_product_sum'>
                    <div className='sum'>Укажите количество:</div>
                    <div className='modal_count'>
                        <div onClick={() => {
                            if (count > 1) {
                                setCount(count - 1)
                            }
                        }} className='modal_product_minus'>-
                        </div>
                        <div className='count'>{count}</div>
                        <div onClick={() => setCount(count + 1)} className='modal_product_minus'>+</div>
                    </div>
                </div>
                <Button text='Оформить заказ'/>
                <div className='sign_in'>Продолжить выбор товаров</div>
            </div>
        </div>
    )
}

export default Modal_product;
