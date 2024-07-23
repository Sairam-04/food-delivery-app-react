import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>OOP's Something Went Wrong!!!</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;