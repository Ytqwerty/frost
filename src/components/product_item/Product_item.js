import './Product_item.css';
import Compressor from "./img/compressor.svg";
import Button from "../../ui/button/Button";
import {useState} from "react";
import Modal_product from "../../ui/modal_product/Modal_product";
import {Link} from "react-router-dom";
import {useAuthModal} from "../../contexts/AuthModalContext";


function Product_item(props) {

    const {
        modal_registration,
        setModal_registration,
        modal_sign,
        setModal_sign,
        modal_product,
        setModal_product
    } = useAuthModal();

    return (
        <div className='Product_item'>
            <Modal_product open={modal_product} setOpen={setModal_product} product = {props.product}/>
            <div className='Product_item_container'>
                <Link to={`/product_card/${props.product.id}`} className='product_list_link'>
                <div className='Compressor'>
                    <img src={Compressor} alt='Compressor'/>
                </div>
                <div className='Compressor_description'>
                    <div>{props.product.name}</div>
                </div>
                </Link>
                <div className='Price'>
                    <div className='Compressor_price'>{props.product.price}</div>
                    <Button classname = {'Button'} text='Купить' onClick={function ()
                    {setModal_product(true)
                    }}/>
                </div>
            </div>
        </div>
    )

}


export default Product_item;
