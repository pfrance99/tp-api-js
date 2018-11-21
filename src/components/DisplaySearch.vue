<template>
<div>
  <h2><span class="">></span> Welcome to the police archives</h2>
  <h2><span class="">></span> Select the period you want to examinate</h2>
  <h2><span class="">></span> Month <label>
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
    </label></h2>
  <h2><span class="">></span> Year <label>
      <select v-model="paramsSearch.year">
        <option v-bind:value="2015">2015</option>
        <option v-bind:value="2016">2016</option>
        <option v-bind:value="2017">2017</option>
        <option v-bind:value="2018">2018</option>
      </select>
    </label>
  </h2>
  <br>
  <h2 v-on:click="loadSearch()" class="cursor-pointer blink action"> > Click to get stats on crimes </h2>
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
.blink {
    animation: blink 1.5s infinite linear;
}
.cursor-pointer {
    cursor: pointer;
}
.action {
    color: #8ac8ff;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1%;
    }
}
</style>
