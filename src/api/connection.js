import axios from 'axios';

const config = async({
    method = "get",
    url,
    headers, 
    data}) => {

    try {
        const response = await axios({method, url, headers, data})
        return response.data

    } catch (error) {
        console.log("Axios config: " + error.message)
        if(error.response){
            const { data } = error.response
            return data
        };
    }
}

export default config