import {Link} from "react-router-dom";

const FirstPage = () => {
    return(
        <>
            <Link to={'/second'} >
                <button>second page</button>
            </Link>
            <h2>First page</h2>
        </>
    )
}
export default FirstPage;