import './Button.css'


function Button(props) {

    return (
        <button className='Button' onClick={props.onClick}>
            {props.text}
        </button>
    )


}


export default Button;