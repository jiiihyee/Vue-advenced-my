
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

  }

}
</script>

<style>

</style>