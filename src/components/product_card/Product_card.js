import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Product_card.css';
import check from "./img/check.svg";
import not_check from './img/notcheck.svg'
import Button from "../../ui/button/Button";
import {useEffect, useState} from 'react';
import Modal_product from "../../ui/modal_product/Modal_product";
import Product_card_review from "../product_card_review/Product_card_review";
import axios from "axios";
import {useParams} from "react-router-dom";
import Product_card_compressor from "../product_card_compressor/Product_card_compressor";
import Product_card_dropdown from "../product_card_dropdown/Product_card_dropdown";

// const PRODUCT_ID = 15

function Product_card() {
    const params  = useParams()
    const product_id = params.id
    const [product, setProduct] = useState({})
    const [modalproduct, setModalproduct] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios
            .get(`http://frost.runtime.kz/products/${product_id}`)
            .then(response => {
                    setLoading(true);
                    const data = response.data;
                    setProduct(data);
            });
        setLoading(false);
    }, [product_id]);


    if (!loading) {
        return (
            <div className='Product_card'>
                <Header/>
            <div className='product_card_container'>LOADING...</div>
                <Footer/>
            </div>)
    }
    return (
        <div className='Product_card'>
            <Modal_product open={modalproduct} setOpen={setModalproduct} product={product}/>
            <Header/>
            <div className="product_card_container">
                <div className="product_card_left">
                    <Product_card_compressor/>
                    <Product_card_dropdown product = {product}/>
                </div>
                <div className="product_card_right">
                    <div className="right_top">
                        <div className='product_card_right_description'>
                            <div className='product_card_description'>
                                <div className='product_card_right_name'>{product.name}</div>
                                <div className="product_card_article">Артикул: {product.code}</div>
                                <div className="product_card_article">Производитель:{product.manufacturer}</div>
                                <div className="product_card_article">Описание:{product.description}</div>
                            </div>
                            <div className="product_card_buy">
                                <div className='product_card_price'>{product.price}</div>
                                <div className="green_check">
                                    <img src={product.available ? check : not_check} alt="check"/>
                                    <div>{product.available ? 'в наличии' : 'Нет в наличии'}</div>
                                </div>
                                <div className='product_card_city product_card_city_almaty'>
                                    <div>г.Алматы</div>
                                    <div>г.Астана</div>
                                </div>
                                <Button text='Купить' onClick={function () {
                                    setModalproduct(true)
                                }}/>
                            </div>
                        </div>
                    </div>
                    <Product_card_review id={product_id}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Product_card;
