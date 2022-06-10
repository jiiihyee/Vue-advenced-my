import {fetchNewsList, fetchJobsList,fetchAsksList} from '../api/index.js';


export default {
    FETCH_NEWS(context){    // 항상 늘 actions 은 context라는 인자를 받아옴 
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS' , response.data);  // 1 받아온 context인자를 통해 commmit이라는 함수로 mutations 에 보낼 수 있음 

        })
        .catch(error =>{
            console.log(error);
        })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({data}) => {
            
            commit('SET_JOBS', data)
        })
            .catch(error => {
                console.log(error);
            })
        
    },
    FETCH_ASK(context){
        fetchAsksList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_ASK',response.data)
        })
        .catch(error => {
            console.log(error);
        })

    }
}