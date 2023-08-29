import {Link} from "react-router-dom";

const SecondPage = () => {
    return(
        <>
            <Link to={'/first'} >
                <button>first page</button>
            </Link>
            <h2>Second page</h2>
        </>
    )
}
export default SecondPage
