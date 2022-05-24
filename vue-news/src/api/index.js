import axios from 'axios'; // package.json 에 있는 axios 라이브러리를 들고오는 것임 

const config ={
    baseUrl : 'https://api.hnpwa.com/v0/'
};

function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAsksList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}


export{
    fetchNewsList,
    fetchJobsList,
    fetchAsksList
}
