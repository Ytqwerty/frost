import React from 'react';
import {useState} from "react";
import compressor1 from "../product_card/img/Rectangle1.svg";
import compressor2 from "../product_card/img/Rectangle2.svg";
import compressor3 from "../product_card/img/Rectangle3.svg";
import compressor4 from "../product_card/img/Rectangle4.svg";

function ProductCardCompressor() {
    const [state, setState] = useState([
        compressor1,
        compressor2,
        compressor3,
        compressor4
    ])
    const [state2, setState2] = useState(
        {img: compressor1}
    )

    function click_compressor(index) {
        setState2(function (prevState) {
            let newState = {...prevState};
            newState.img = state[index];
            return newState;
        })
    }

    return (
        <div className='Product_card_compressor'>
            <div className='product_card_main_compressor'>
                <img src={state2.img} alt="compressor" className='main_compressor'/>
            </div>
            <div className="product_card_compressor_details">
                {state.map(function (item, index) {
                    return (
                        <div key={index} onClick={function () {
                            click_compressor(index)
                        }}><img src={item} className='compressor_detail' alt='compressor_detail'/></div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProductCardCompressor;