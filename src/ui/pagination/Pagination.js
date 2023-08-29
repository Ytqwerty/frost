import './Pagination.css'
import Left from './img/left.svg'
import Right from './img/right.svg'


function Pagination(props) {


    let page = []
    for (let i = 1; i <= props.totalPages; i++) {
        page.push(i)
    }
    const click_Back = () => props.click(props.currentPage - 1);
    const click_Forward = () => props.click(props.currentPage + 1);

    return (
        <div className="Pagination">
            {props.totalPages === 0 ? <div className='center'>По данному запросу товаров не найдено.</div> : null}
            <div className='pages_container'>
                {props.currentPage !== 1 && props.totalPages !== 0 ?
                    <div className='back_page' onClick={click_Back}><img src={Left} alt="Left"/>Назад</div> : ''}
                {page.map(function (item, index) {
                    return (
                        <div key={index} className={props.currentPage === item ? 'active_page' : 'page'} onClick={
                            function () {
                                props.click(item)
                            }
                        }>{item}</div>
                    )
                })}
                {props.currentPage !== props.totalPages && props.totalPages !== 0 ?
                    <div className='forward_page' onClick={click_Forward}>Вперед<img src={Right} alt="Right"/>
                    </div> : ''}
            </div>
        </div>
    )
}


export default Pagination;
