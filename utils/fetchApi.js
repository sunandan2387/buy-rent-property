import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '961d1b095fmsh49bae9cf4fa1ddfp170af4jsn95b0218fa64d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    
    return data;
}