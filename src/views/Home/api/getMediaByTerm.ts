import { endpoints } from "@/shared/api/endpoints";
import { GET } from "@/shared/api/methods";
import { TMedia } from "@/shared/model/TMusic";
import { TMediaType } from "../model/TMediaType";


interface IResponse {
    resultCount : number,
    results : TMedia[],
}
async function getMediaByTerm(term : string, mediaType : TMediaType) {
    
    const musics = await GET<IResponse>({endpoint : endpoints.searchMusic, headers : {
        "Content-Type" : "application/json",
        "Cache-Control" : 'max-age=3600'
    } , params : {
        term : term,
        country : 'RU',
        media : mediaType,
        limit : '10',
    }}) 

    console.log(term)

    return musics?.results
}

export default getMediaByTerm