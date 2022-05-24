<template>
  <div>jobs</div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';
export default {
    data(){
      return{
        jobs:[]
      }   
   },
  created(){
    fetchJobsList()
    .then(response => console.log(response) )
    .catch(error => console.log(error));
  }

}
</script>

<style>

</style>