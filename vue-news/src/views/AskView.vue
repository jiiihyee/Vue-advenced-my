
<template>
 <div> 
  <div 
       v-for="(ask, index) in $store.state.asks" :key="index">{{ask.title}}</div>
        </div>
 
</template>

<script>

export default {

  created() {

    this.$store.dispatch('FETCH_ASK');
  }

}
</script>

<style>

</style>