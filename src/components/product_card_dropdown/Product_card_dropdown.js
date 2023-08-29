import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

function ProductCardDropdown(props) {
    const [machineList, setMachineList] = useState([])

    useEffect(() => {
        setMachineList([
            {
                name: props.product.brand?.name,
                open: false,
                model: [
                    {
                        name: props.product.model?.name,
                        open: false,
                        generation: [props.product.generation?.name]
                    }
                ]
            }
        ])
    }, [props.product])

    function click_machineName(index1) {
        setMachineList(function (prevState) {
            let newState = [...prevState];
            newState[index1].open = !newState[index1].open;
            if (newState[index1].open === false) {
                for (let key of newState[index1].model) {
                    key.open = false;
                }
            }
            return newState;
        })
    }

    function click_machineModel(index1, index2) {
        setMachineList(function (prevState) {
            let newState = [...prevState];
            newState[index1].model[index2].open = !newState[index1].model[index2].open;
            return newState;
        })
    }

    return (
        <div className='product_card_dropdown'>
            <div className="left_machine">Применим к автомобилям:</div>
            <div className="product_card_machine_list">
                <div className='product_card_machine'>
                    {machineList.map(function (item1, index1) {
                        return (
                            <div key={index1} className='product_card_machine_name'>
                                <div className={item1.open ? 'active_machine_Name' : 'machine_Name'}
                                     onClick={function () {
                                         click_machineName(index1)
                                     }}>{item1.name}</div>
                                <div className={item1.open ? 'active_machine_List' : 'machine_List'}>
                                    {item1.model.map(function (item2, index2) {
                                        return (
                                            <div key={index2}>
                                                <div
                                                    className={item2.open ? 'active_machine_Model' : 'machine_Model'}
                                                    onClick={function () {
                                                        click_machineModel(index1, index2)
                                                    }}>{item2.name}</div>
                                                <div>{item2.generation.map(function (item3, index3) {
                                                    return (
                                                        <div key={index3}
                                                             className={item2.open ? 'active_machine_Kind' : 'machine_Kind'}>{item3}</div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductCardDropdown;