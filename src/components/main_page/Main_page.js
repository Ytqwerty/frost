import Footer from "../footer/Footer";
import Header from "../header/Header";
import Header_compressor from "../header_compressor/Header_compressor";
import Product_list from "../product_list/Product_list";
import axios from "axios";


function Main_page() {
    // axios.get('https://frost.runtime.kz/api/cart',{
    //     headers:{
    //         Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNTVhYmE2YzQwNTljMjIzYzZhZjcwNjg0NDU0OGFiN2RkOTQzMTNmYTM0NjI4ZGY3MjgwN2JhNzM2YzE2NDVlZjcwNTA0ZjNkZmI0YzA5YzkiLCJpYXQiOjE2OTc0NjYzMTguNDM0NjU1LCJuYmYiOjE2OTc0NjYzMTguNDM0NjU5LCJleHAiOjE3MjkwODg3MTguNDIxNTM2OSwic3ViIjoiMiIsInNjb3BlcyI6W119.Ilwg4ajfaZC2LztfFvQQCmbFujhe58JoHII0LovhMIZ_0s4U8d_JJk2f3mhww8k0_og7T333bA9LyjjZsx5u3aam7oDJ268szboNtT_8CVK0bw78rvxQ0fCUaa8XcQCMg0vRWHhMvGMoDQrlg7wI3vBFbrpPqdUwvCk_F_s52kKSrKerj1vwWt-hLKjJRWKrqTdIV-MktLISjw0VpKGgWRs59LLPAUEzVVrlNWJDHkgU0T2QOtnyvQLS5bfIzc5cPJCTXyXKai1YhDdOdSSOy0HElPyMgkocrcP40lXJcbATCHWcQa1Citrx20-cZk8wGIizGMVFZhPwm3Le-asIUsAuKnx8_0daQS0v9ob3QqPjfYCe1Qiei4OpBc62HjfinmvEzqosnSrak2aLXWoMrY_cIUe626mMT6QTr2wPtPl3ZczCDrGbhClVBY_7mjNzR4MPO7u5UtR1vtPaGVadQqbgwTEKxukjgST19Om7hSCFOtFEOdv0Ff4Ie9BXaAf8mFUIQfGkfmtR_dfHVmyO_ZWd2R0ZGk4CGp53F-Ubq2_tao39g7qMywYBp2SlHYkIf0F1wuxFSkWVIYdRlf558cMJoo-OiJrSE_z-e2zZiZ6czulDPHk-XrW0RZxeDaZ54K2DbZKb27QUq7FazP4-DLHatz8uYuQ9n87qIoaz-TE'
    //     }
    // }).then(function(res){
    //     console.log(res.data)
    // })
    // axios.get('https://frost.runtime.kz/api/cart/add',{
    //     headers:{
    //         Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiOWVmYTQyZmU0MDNkOWExZjQyMmM5NDdhOTA0NjMyMzRiZTBhMWFjMTAxMjFmM2U4Y2MzM2UwNjQ1YTc5NWI5MmU0OGQ5ZWNkMzgyNDlkZWQiLCJpYXQiOjE2OTcxMTc3MDMuMTQ1MjUwMSwibmJmIjoxNjk3MTE3NzAzLjE0NTI1NTEsImV4cCI6MTcyODc0MDEwMy4xMTk1MjU5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.VtxqQc75KD7U3C8wen7-qFbOVZUM7XFae0Tthw3V7LNpCJYiCik_bibGMX3EjRXBybTAcM4L79ShCjDUJ2BLQmvsfCYoUF36qXZsCJ0s76mAsc5ipNAMfOvE86jgWgDVK_vFO9ni6V0FqETcgJL7DvTnNUNk5HjZb0PEImXUrWLOC_HR71-JzJdNhwrQoYW-R2zsuu6HUanqHrMkpeSlSugy5TWO0NEBEZVAwlDYz6b6TOZ8D4U6hC0FANeL-C8JK49R0vYFaqqbDD9Bj6tmRK8jslDliNrzbylE1vtECRYy_T2caycCbDhQM26R7J0IwB7diSokJLEt5eHaD8acTY-aUOfQfWuYXpj_LoZPLqwOzvvYgSpvggLY8T1uvyBTNVDdDe_miU2WAo4KK7XF5WnoUw5tttWO6upDcr1_9h4WYgfcAr8FzETAKdjDGO3Unj38LrTvuBEyQn5LyqSEuZTB1t0jSvyeqbPMxgPREJXuygTmXgWhfJP48gLffxSbMuPFj_Oi5zudLt2O8ubKMTiXhmIYRCiK7pcHFmOFoJXW2RiTr5LuhTw433FlJ5LxdC-03q1FVTX5fymoi5ALqViuzXqIZOD-fNcQURqtoPMlHIr5MOPxlM4eoDCPYQnc8au21xk5yXyf-moJCUFq28sFyo_EU6TxNr0pPKrp8'
    //     },
    //     params:{
    //         productId:3,
    //     },
    // }).then(
    //     function(res) {
    //
    //     }
    // )

    // axios.
 //     post('https://frost.runtime.kz/oauth/token',{
 //         grant_type:'password',
 //     client_id:2,
 //     client_secret:'XxVdySeTHQ6dKC8hnCh8rnpKL0twqNE9303Wc6Xe',
 //     username:'rath.aaron@example.com',
 //     password:'password'
 // }, {
 //         headers:{
 //             'Content-Type':'application/x-www-form-urlencoded'
 //         },
 // }).then(function(res) {
 //     console.log(res.data)
 //     }
 // )

    return (
        <div className="Main_page">
            <Header/>
            <Header_compressor/>
            <Product_list/>
            <Footer/>
        </div>
    )
}

// Информация о клиенте используемом для наших React приложений:
//     1) `client_id` - 2.
// 2) `client_secret` - XxVdySeTHQ6dKC8hnCh8rnpKL0twqNE9303Wc6Xe.
//
//     `hroberts@example.net` -> `password`.
//     `rath.aaron@example.com` -> `password`.
export default Main_page;