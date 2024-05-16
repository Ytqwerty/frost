import './Completion.css'
import check from "./img/check.svg";
import {Link} from "react-router-dom";


function Completion(props) {



    return (
        <div className='basket_container'>
            <div className='basket_title'>
                <div className='contact_details'>Заказ успешно создан</div>
                <div className='Order'>
                    <img src={check} alt="check" className='completion_check'/>
                    <div className='order'>Заказ №{props.number} был создан. Вы можете просмотреть список всех ваших заказов в
                        личном кабинете.
                    </div>
                    <Link to={'/orders'}>
                    <div className='kab'>Перейти в личный кабинет</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Completion;