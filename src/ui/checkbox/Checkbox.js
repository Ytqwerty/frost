import './Checkbox.css'
import {useEffect, useState} from "react";

function Checkbox(props) {

    const [checked, setChecked] = useState(0);

    useEffect(function () {
        props.setStock(checked)
    }, [checked])

    function handleChange() {
        if (checked === 1) {
            setChecked(0)
        } else {
            setChecked(1)
        }
    }

    return (
        <div className='Checkbox' onClick={handleChange}>
            <div  className={checked === 1 ? 'checkbox_active' : 'checkbox'}> </div>
            <div className="footer_ml">в наличии</div>
        </div>
    )
}

export default Checkbox;