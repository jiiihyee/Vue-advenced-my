import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        news:[],
        jobs:[],
        asks:[],
    },
    getters:{
        fetchedJob(state){
            return state.jobs;
        }
    },
    mutations,
    actions,
  });