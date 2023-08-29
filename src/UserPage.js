import {useParams} from "react-router-dom";

const UserPage = () => {
    const params = useParams();
    return (
        <>
            <h2>User page({params.login})</h2>
        </>
    )
}
export default UserPage