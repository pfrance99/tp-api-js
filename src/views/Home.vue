<template>
  <div>
    <header class="container-header">
      <img class="logo-police-home" src="../assets/logo.png" alt="logo-police">
      <h1 class="font-police-dpt">UK POLICE DEPARTMENT</h1>
    </header>
    <DisplaySearch v-if="!isHome" v-bind="{categories, paramsSearch, loadSearch}"></DisplaySearch>
    <grid-loader class="loader-spinner-radio" :loading="spinnerStatus" color="#F2DB4D" size="10px"></grid-loader>
    <DisplayResults v-if="isResult" v-bind="{allCrimes, categories}"></DisplayResults>
  </div>
</template>

<script>
import DisplaySearch from '@/components/DisplaySearch.vue'
import DisplayResults from '@/components/DisplayResults.vue'
import GridLoader from 'vue-spinner/src/GridLoader.vue'

export default {
  name: 'home',
  components: {
    DisplaySearch,
    DisplayResults,
    GridLoader
  },
  data: function () {
    return {
      isHome: false,
      isResult: false,
      spinnerStatus: false,
      categories: [],
      allCrimes: [],
      paramsSearch: {
        crime: 'all-crime',
        month: 1,
        year: 2018,
        force: 'metropolitan'
      }
    }
  },
  methods: {
    loadSearch: function () {
      this.isHome = true
      this.spinnerStatus = true
      // self.setTimeout(function () {}, 1000)
      const data = { 'category': this.paramsSearch.crime, 'force': this.paramsSearch.force, 'date': this.paramsSearch.year + '-' + this.paramsSearch.month }
      const querystring = this.encodeQueryData(data)
      this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.crimesNoLoc}?${querystring}`)
        .then((response) => {
          this.allCrimes = response.data
          this.spinnerStatus = false
          this.isResult = true
        })
        .catch((error) => {
          console.error(error)
        })
    },
    encodeQueryData: function (data) {
      const ret = []
      for (let d in data) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
      }
      return ret.join('&')
    }
  },
  mounted () {
    this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.categories}`)
      .then((response) => {
        this.categories = response.data
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>
