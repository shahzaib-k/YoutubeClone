import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' ;  

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '066dc42ba3msh45639ce46efbdd6p1391d5jsne94641b6aede',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}


export const fetchFromAPI = async (url) => {
   const {data} =  await axios.get(`${BASE_URL}/${url}`, options)

   return data
}