import './Checkbox.css'
import {useState} from "react";

function Checkbox(props) {

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(prevState => !prevState);
        props.setStock(!checked)
    }

    return (
        <div onClick={handleChange} className={checked ? 'checkbox_active' : 'checkbox'}></div>
    )
}

export default Checkbox;