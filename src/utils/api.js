import axios from "axios";

 const api =  axios.create({
  baseURL: 'https://yt-api.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
  }, 
  params: {
    geo:"TR",
    lang: "tr",
  }
});

export default api;