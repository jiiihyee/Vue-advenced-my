import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchJobsList,fetchAsksList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        news:[],
        jobs:[],
        asks:[],
    },
    mutations: {
        SET_NEWS(state , news){
            state.news = news;        //2   news 는 response.data임 다른 이름으로 써도 된다.!
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASK(state, asks){
            state.asks = asks;
        }
    },
    actions:{
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
  });