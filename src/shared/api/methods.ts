import { HOST } from "./HOST";

interface IGet{
    endpoint : string,
    headers? :  HeadersInit,
    params? : Record<string, string>
}
export async function GET<T>({endpoint, headers, params}:IGet){

    const queryString = params ? new URLSearchParams(params).toString() : '';
    const url = `${HOST}${endpoint}${queryString ? `?${queryString}` : ''}`;

    try{

        const response = await fetch(url, {
            headers : headers
        })

        if (!response.ok){
            console.warn(`Error fetching ${url}: ${response.statusText}`)
            return ;
        }

        const data:T = await response.json()
    
        return data
    }
    catch(e){
        console.warn(`Error fetching ${url}: ${e}`)
        return ;

    }


    
}