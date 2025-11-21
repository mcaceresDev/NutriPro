// import axios, { AxiosError } from 'axios';

// interface baseAxiosParams {
//     method?: "get" | "post" | "put" | "delete" | "patch";
//     url: string,
//     headers?: Record<string, string>;
//     data?: any
// }

//  async function apiRequest<T = any>({
//     method = "get",
//     url,
//     headers,
//     data }: baseAxiosParams): Promise<T>{

//     try {
//         const response = await axios({ method, url, headers, data })
//         return response.data as T;

//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error("Axios error:", error.response?.data || error.message);
//             throw new Error(
//                 `Error en la petición Axios: ${error.message}`
//             );
//         } 
//         console.error("Unexpected error:", error);
//         throw new Error("Error inesperado en petición HTTP.");
//     }
// }


// export default apiRequest


import axios, { AxiosError, AxiosHeaders } from 'axios'; 
interface baseAxiosParams { 
    method?: "get" | "post" | "put" | "delete" | "patch"; 
    url: string;
    headers?: Record<string, string>;
    data?: string | any 
} 

function handleAxiosError(error: AxiosError<any, any>) { 
    throw new Error('Error en la peticion asincrona'); 
} 

function handleUnexpectedError(error: unknown) { 
    throw new Error('Error inesperado.'); 
} 
    
const apiRequest = async ({ method = "get", url, headers, data }: baseAxiosParams) => { 
    try { 
        const response = await axios({ method, url, headers, data }) 
        console.log("ERROR EN AXIOS");
        console.log(response);
        
        return response.data 
    } catch (error) { 
        if (axios.isAxiosError(error)) { 
            handleAxiosError(error); 
        } 
        else { handleUnexpectedError(error); } 
    } 
} 
export default apiRequest
