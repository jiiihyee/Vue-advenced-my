<template>
<div> 
  <div 
       v-for="(job, index) in jobs" :key="index">{{job.title}}</div>
        </div>
 
</template>

<script>
import {  mapGetters } from 'vuex';

export default {

  computed:{
  //#3-1번 방법 (객체표기법)
  ...mapGetters([ 'jobs'])

  //#3번 방법 (store/index.js 에서 getters 사용)
  // ...mapGetters({
  //   jobs : 'fetchedJob'
  // })

  //#2번 방법
  // ...mapState({
  //   jobs: state => state.jobs
  // }).


  //#1번 방법
  // jobs(){
  //   return this.$store.state.ask;
  // }
  },
  created(){
      this.$store.dispatch('FETCH_JOBS');
  },

}
</script>

<style>

</style>