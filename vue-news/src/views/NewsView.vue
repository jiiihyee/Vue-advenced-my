
<template>
 <div> 
  <div 
       v-for="(item, index) in $store.state.news" :key="index">{{item.title}}</div>
        </div>
 
</template>

<script>

export default {

  created() {

    this.$store.dispatch('FETCH_NEWS');
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