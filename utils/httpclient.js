import axios from "axios";
export async function get(url,config={}) {
    return await axios.get(url,config)
    .then(response=>response.data)
    .catch(error=>console.log(error))
}