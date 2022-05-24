<template>
  <div>ask</div>
</template>

<script>
import {fetchAsksList} from '../api/index';
export default {

  created() {

    var vm = this;

    fetchAsksList()
    .then( function(response){
      console.log(response);
      vm.users = response.data;
    })
  }

}
</script>

<style>

</style>