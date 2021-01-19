import React, {useState} from "react";
import requestAPI from "./RequestAPI";


const Request = () => {

    const [checkboxStatus, setCheckboxStatus] = useState(false)

    return (
        <div>
            <input type="checkbox" onClick={()=> setCheckboxStatus(!checkboxStatus)}/> click me!
            <button onClick={()=> requestAPI.post(checkboxStatus)}>Запрос</button>
            <button onClick={()=> console.log(checkboxStatus)}>Console useState</button>
        </div>
    )
}

export default Request;