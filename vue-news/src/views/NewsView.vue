<template>
  <!-- <div v-for="user in users"> {{user.title}}</div> -->
<div>news</div>
</template>

<script>

export default {
  data(){
    return {
      users:[]
    }
  },
  created() {

    this.$stroe.dispatch('FETCH_NEWS');
  //   var vm = this;
  //  fetchNewsList()
  //   .then(function(response){
  //     console.log(response);
  //     vm.users = response.data;
  //   } )
  //   .catch(function(error){
  //     console.log(error);
  //   })
  }

}
</script>

<style>

</style>