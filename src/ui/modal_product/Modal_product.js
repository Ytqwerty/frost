import Button from "../button/Button";
import {useEffect, useState} from "react";
import '../modal_registration/Modal_registration.css'
import './Modal_product.css'
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";
import not_check from "../../components/product_card/img/notcheck.svg"
import {useAuthModal} from "../../contexts/AuthModalContext";


function Modal_product(props) {

    const {
        modal_registration,
        setModal_registration,
        modal_sign,
        setModal_sign,
        modal_product,
        setModal_product
    } = useAuthModal();

    const [count, setCount] = useState(1);

    const [product, setProduct] = useState(props.product.name)

    const [loading, setLoading] = useState(false)

    const {user, login, logout} = useAuth();

    useEffect(function () {
        setCount(1)
        setProduct(props.product.name)
    }, [props.open])

    function item_decrease() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function item_increase() {
        setCount(count + 1)
    }

    function click_item() {
        setLoading(true)
        axios.get('https://frost.runtime.kz/api/cart/add', {
            // headers: {
            //     Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzBmZTNhZDZlOTY2NzgyNjE0MjM3MzkyYmEyOWZjNDMyMjE1ZmYwZWE0OTA3ZmU1YjlkNzM2YTk0NjBjMjI4NGY0NjM4NDcwMTNiODZhNzAiLCJpYXQiOjE3MDUzMzg4ODAuNzAzMTY2LCJuYmYiOjE3MDUzMzg4ODAuNzAzMTcyLCJleHAiOjE3MzY5NjEyODAuNjcxMDc2MSwic3ViIjoiMiIsInNjb3BlcyI6W119.nYjYT4E7T3VlqD86YXVp92wgsnyWLSl9QmAT5Ct6YzJqPXqujDOnSVyLHk9Cb00exDgg1br_oG2sJ8evYjzlFBekbkXeJB738vB4ugddzHTQ5_cCuODRppZLzf5rNv_jFi3rRFHWXlS1oqa_o2dIrwUQ8qSb8P4m8aLC4WaaC2FSvt_Yo-5aKNr04hQC4F5IUPtVtZksJCSZp_6OOR_FlCuObSDOsNQOpzmzWsPfKxLQ38GfCBIhaBNNzD3Jl7NBbX6wGQ_qC1hs5T8noDab73ERzRtZJRBH6yzkgNTJWFs4r4kTkDa1IU629MZXlZ4RCHT68_uL7SfUtCluDzPL3TsINrNeaBPNM2hLP25E8TiqxwUeAIM8BqNfRiWK4qEu33xPY6IuqKij4qaXTMvyhEghM7fPeYX1fuKqTKvStQLP01R_nmD2LMWqG6FbN7gbrJjEhMjcRzSngPMmkAH3MYpEYVRaR91yNm6sIqCSQpdQWu_TPZoFmIfgJx8UVCqFECLY4DPjDwv7rqkjR2Q_wysIqV_ePHMs-9qtbZlanvKAd5mKwz4C4UDZN-RgFqfSxalkfTQ0gIavI7lkMfts5SA5k772fDDxU9dEP0MjM_d1-X7F4RweNIA4UJZKNcrjNtngpgo7JGqeD128GnbcWV5lrvBJEnAGiCiJh415dcs'
            // },
            params: {
                productId: props.product.id,
                count: count,
            },
        }).then(
            function (res) {
                props.setOpen(false)
                setLoading(false)
            }
        )
    }

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
                <div className='modal_product_compressor'>{product}</div>
                {props.product.available ? <div className='modal_product_sum'>
                    <div className='sum'>Укажите количество:</div>
                    <div className='modal_count'>
                        <div onClick={item_decrease} className='modal_product_minus'>-
                        </div>
                        <div className='count'>{count}</div>
                        <div onClick={item_increase} className='modal_product_minus'>+</div>
                    </div>
                </div> : <div className='stock'><img src={not_check} alt='not_check'></img>
                    <div>Нет в наличии</div>
                </div>}
                {user && props.product.available ?
                    <Button classname={loading ? 'loader' : 'Button'} text={!loading ? 'Оформить заказ' : null}
                            onClick={click_item}/> : null}
                {!user && props.product.available ?
                    <div className='product_authorization'>Чтобы добавить товар в корзину необходимо
                        <span className='product_card_site_button' onClick={
                            function () {
                                setModal_sign(true)
                                setModal_product(false)
                            }}>авторизоваться</span></div> : null}
                <div className='sign_in' onClick={() => props.setOpen(false)}>Продолжить выбор товаров</div>
            </div>
        </div>
    )
}

export default Modal_product;
