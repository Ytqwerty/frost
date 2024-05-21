import './Product_item.css';
import Compressor from "./img/compressor.svg";
import Button from "../../ui/button/Button";
import {useState} from "react";
import Modal_product from "../../ui/modal_product/Modal_product";
import {Link} from "react-router-dom";


function Product_item(props) {
    const [modalproduct, setModalproduct] = useState(false);

    return (
        <div className='Product_item'>
            <Modal_product open={modalproduct} setOpen={setModalproduct} product = {props.product}/>
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
                    {setModalproduct(true)
                    }}/>
                </div>
            </div>
        </div>
    )

}


export default Product_item;
