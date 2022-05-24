<template>
  <div v-for="ask in this.$store.state.asks">{{ask}}</div>
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