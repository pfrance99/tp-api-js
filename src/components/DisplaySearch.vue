<template>
<div>
  <h2>Select a crime</h2>
  <label>
    <select v-model="paramsSearch.crime">
      <option v-for="category in categories" :key="category.name" v-bind:value="category.url">{{category.name}}</option>
    </select>
  </label>
  <h2>Set a date</h2>
  <label>
    <select v-model="paramsSearch.month">
      <option v-bind:value="1">January</option>
      <option v-bind:value="2">February</option>
      <option v-bind:value="3">March</option>
      <option v-bind:value="4">April</option>
      <option v-bind:value="5">May</option>
      <option v-bind:value="6">June</option>
      <option v-bind:value="7">July</option>
      <option v-bind:value="8">August</option>
      <option v-bind:value="9">September</option>
      <option v-bind:value="10">October</option>
      <option v-bind:value="11">November</option>
      <option v-bind:value="12">December</option>
    </select>
  </label>
  <label>
    <select v-model="paramsSearch.year">
      <option v-bind:value="2015">2015</option>
      <option v-bind:value="2016">2016</option>
      <option v-bind:value="2017">2017</option>
      <option v-bind:value="2018">2018</option>
    </select>
  </label>
  <br><br>
  <button type="submit" v-on:click="loadSearch()">Search</button>
</div>
</template>

<script>
export default {
  name: 'DisplaySearch',
  props: ['categories', 'paramsSearch', 'loadSearch', 'isHome']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
