import './Product_list.css'
import Product_item from "../product_item/Product_item";
import {useEffect, useState} from "react";
import axios from "axios";
import Filter from "../filter/Filter";
import Pagination from "../../ui/pagination/Pagination";

function Product_list(props) {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState([]);
    const [brandId, setBrandId] = useState(null)
    const [modelId, setModelId] = useState(null);
    const [generationId, setGenerationId] = useState(null)
    const [stock, setStock] = useState(false)

    useEffect(function () {
        axios.get('http://frost.runtime.kz/products', {
            params: {
                page: 1,
                size: 6,
                brandId: brandId,
                modelId: modelId,
                generationId: generationId,
                available: stock,
            }
        }).then(function (response) {
            let data = response.data;
            setPage({currentPage: data.currentPage, totalPages: data.totalPages})
            setProducts(data.items)
        })
    }, [brandId, modelId, generationId, stock]);

    function click_Page(page) {
        axios.get('http://frost.runtime.kz/products', {
            params: {
                page: page,
                size: 6,
                brandId: brandId,
                modelId: modelId,
                generationId: generationId,
                available: stock,
            }
        }).then(function (response) {
            let data = response.data;
            setProducts(data.items)
            setPage({currentPage: data.currentPage, totalPages: data.totalPages})
        })
    }
    return (
        <div className='Product_list'>
            <Filter setBrandId={setBrandId} setModelId={setModelId} setGenerationId={setGenerationId}
                    setStock={setStock}/>
            <div className='Product_list_container'>
                {products.map(function (product) {
                    return (
                        <div key={product.id}>
                            <Product_item key={product.id} product={product}/>
                        </div>
                    )
                })}
            </div>
            <Pagination totalPages={page.totalPages} currentPage={page.currentPage} click={click_Page}/>
        </div>
    )
}

export default Product_list;
