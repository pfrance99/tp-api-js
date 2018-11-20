<template>
  <div>
    <canvas id="crimeChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'DisplayResults',
  props: ['allCrimes', 'categories'],
  mounted () {
    // console.log(this.categories)
    const ctx = document.getElementById('crimeChart')
    const arrLabels = []
    const countLabels = []
    let oldElement = ''
    let i = 0
    let j = 0
    this.allCrimes.forEach(function (element) {
      let currentElement = element.category
      if (oldElement !== currentElement) {
        j = 0
        j++
        oldElement = currentElement
        // countLabels[currentElement] = 1
        countLabels[i].push(j)
        i++
      } else {
        // countLabels[currentElement]++
        i--
        countLabels[i].push(j++)
        i++
      }
    })
    console.log(countLabels)
    this.categories.forEach(function (element) {
      let elementName = element.name
      if (elementName !== 'All crime') {
        arrLabels.push(elementName)
      }
    })
    arrLabels.sort()
    const chartData = {
      type: 'doughnut',
      data: {
        labels: arrLabels,
        datasets: [{
          data: countLabels,
          backgroundColor: [
            'rgba(0,255,0,1',
            'rgba(255,0,0,1',
            'rgba(0,0,255,1',
            'rgba(0,255,255,1)'
          ]
        }]
      },
      options: {

      }
    }
    this.createChart(ctx, chartData)
  },
  methods: {
    createChart: function (chartId, chartData) {
      const myChart = new Chart(chartId, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
