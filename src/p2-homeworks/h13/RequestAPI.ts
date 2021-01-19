import axios from "axios";


const requestAPI = {
    post(success:boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: success}).then(res => {
            console.log(res)
        }).catch(rej => {
            console.log(rej)
        })
    }
}


export default requestAPI;