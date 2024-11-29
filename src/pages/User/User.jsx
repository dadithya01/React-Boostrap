import Button from "../../component/Button/Button";
import {NavLink, useNavigate} from "react-router-dom";

export default function User () {

    const navigate = useNavigate();
    const clickNavigate = () => {
        navigate('dashboard')
    }

    return(
        <div>
            <h1>User</h1>
            <br/><br/>
            <Button onClick={()=> clickNavigate()} name={'Go to Dashboard'} bgColor={'#af9f0a'}/>
        </div>
    )
}
