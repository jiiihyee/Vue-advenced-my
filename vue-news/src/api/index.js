import axios from 'axios'; // package.json 에 있는 axios 라이브러리를 들고오는 것임 

const config ={
    baseUrl : 'https://api.hnpwa.com/v0/'
};

function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

export{
    fetchNewsList
}
