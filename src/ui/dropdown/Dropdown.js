import './Dropdown.css'
import {useEffect, useRef, useState} from "react";

function Dropdown(props) {

    const [open, setOpen] = useState(false)
    const click_Drop = () => setOpen(!open);
    const [name, setName] = useState(props.name)
    const [elements, setElements] = useState(props.elements)
    const dropDown = useRef(null)

    useEffect(function () {
        setName(props.name)
        setElements(props.elements)
        if (props.click !== undefined) props.click(0)
    }, [props.elements])
    //
    useEffect(function () {
        const click_Dropdown = (event) => {
            if (!dropDown.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', click_Dropdown)

        return () => {
            document.removeEventListener('click', click_Dropdown)
        }
    }, [])


    function click_select(item) {
        setOpen(false)
        if (props.click !== undefined) props.click(item.id)
        setName(item.name)
    }

    function click_name() {
        setOpen(false)
        setName(props.name)
        if (props.click !== undefined) props.click(0);
    }

    return (
        <div className='Dropdown' ref={dropDown}>
            <div className={open ? 'active_check' : 'check'} onClick={click_Drop}>{name}</div>
            <div className={open ? 'active_items' : 'items'}>
                {props.name !== name ? <div onClick={click_name}
                                            className={props.name === name ? 'active_name' : 'name'}>{props.name}</div> : null}
                {
                    elements.map(function (item) {
                        if (item.name !== name) {
                            return (
                                <div className='name'
                                     onClick={function () {
                                         click_select(item)
                                     }} key={item.id}>{item.name !== name ? item.name : null}</div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Dropdown;