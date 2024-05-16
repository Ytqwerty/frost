

function Input(props) {
    return (
        <div className='Input'>
            <input placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange} defaultValue={props.defaultValue} disabled={props.disabled}/>
        </div>
    )
}

export default Input;