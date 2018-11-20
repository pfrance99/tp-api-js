<template>
  <div>
    <canvas id="crimeChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'DisplayResults',
  props: ['allCrimes'],
  mounted () {
    let ctx = document.getElementById('crimeChart')
    var myDoughnutChart = new Chart(ctx, {

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
