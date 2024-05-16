import './Button.css'


function Button(props) {

    return (
        <button className={props.classname} onClick={props.onClick} disabled ={props.disabled}>
            {props.text}
        </button>
    )


}


export default Button;