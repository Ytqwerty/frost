import Dropdown from "../../ui/dropdown/Dropdown";
import './Filter.css'
import Checkbox from "../../ui/checkbox/Checkbox";
import {useEffect, useState} from "react";
import axios from "axios";

function Filter(props) {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [generation, setGeneration] = useState([])
    useEffect(function () {
        axios
            .get('http://frost.runtime.kz/categories')
            .then(response => {
                let data = response.data;
                setCategories(data);
            });
        axios
            .get('http://frost.runtime.kz/brands')
            .then(response => {
                let data = response.data;
                setBrands(data)
            })
    }, []);

    function click_brands(id) {
        axios
            .get('http://frost.runtime.kz/models', {
                params: {
                    brandId: id,
                }
            })
            .then(response => {
                let data = response.data;
                setModels(data)
                if (id !== 0) {
                    props.setBrandId(id)
                } else {
                    props.setBrandId(null)
                    props.setModelId(null)
                    props.setGenerationId(null)
                }
            })
    }

    function click_models(id) {
        axios
            .get('http://frost.runtime.kz/generations', {
                params: {
                    modelId: id,
                }
            })
            .then(response => {
                let data = response.data;
                setGeneration(data)
                if (id !== 0) {
                    props.setModelId(id)
                } else {
                    props.setModelId(null)
                    props.setGenerationId(null)
                }
            })
    }

    function click_generations(id) {
        if (id !== 0) {
            props.setGenerationId(id)
        } else {
            props.setGenerationId(null)
        }
    }


    return (
        <div className='filter'>
            <div className='filter_container'>
                <div className='filter_header'>
                    <div>
                        <div className='filter_text'>Категория</div>
                        <Dropdown name={'Все категории'} elements={categories}/>
                    </div>
                    <div>
                        <div className='filter_text'>Марка</div>
                        <Dropdown name={'Все марки'} elements={brands} click={click_brands}/>
                    </div>
                    <div className='filter_checkbox'>
                        <Checkbox setStock={props.setStock}/>
                        <div className="footer_ml">в наличии</div>
                    </div>
                </div>
                <div className='filter_footer'>
                    <div className='filter_model'>
                        <div className='filter_text'>Модель</div>
                        <Dropdown name={'Все модели'} elements={models} click={click_models}/>
                    </div>
                    <div className='filter_generation'>
                        <div className='filter_text'>Поколение</div>
                        <Dropdown name={'Все поколения'} elements={generation} click={click_generations}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;