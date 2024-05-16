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
            .get('https://frost.runtime.kz/api/categories')
            .then(response => {
                let data = response.data;
                setCategories(data);
            });
        axios
            .get('https://frost.runtime.kz/api/brands')
            .then(response => {
                let data = response.data;
                setBrands(data)
            })
    }, []);

    function click_brands(id) {
        if (id === 0) {
            setModels([])
            setGeneration([])
            props.setBrandId(null)
            props.setModelId(null)
            props.setGenerationId(null)
        } else {
            axios
                .get('https://frost.runtime.kz/api/models', {
                    params: {
                        brandId: id,
                    }
                })
                .then(response => {
                    let data = response.data;
                    setModels(data)
                    props.setBrandId(id)
                })
        }
    }

    function click_models(id) {
        if (id === 0) {
            setGeneration([]);
            props.setModelId(null)
            props.setGenerationId(null)
        } else {
            axios
                .get('https://frost.runtime.kz/api/generations', {
                    params: {
                        modelId: id,
                    }
                })
                .then(response => {
                    let data = response.data;
                    setGeneration(data)
                    props.setModelId(id)
                })
        }
    }

    function click_generations(id) {
        if (id === 0) {
            props.setGenerationId(null)
        } else {
            props.setGenerationId(id)
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