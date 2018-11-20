<template>
  <div>
    <header class="container-header">
      <img class="logo-police-home" src="../assets/logo.png" alt="logo-police">
      <h1 class="font-police-dpt">UK POLICE DEPARTMENT</h1>
    </header>
    <DisplaySearch v-if="!isHome" v-bind="{categories, paramsSearch, loadSearch}"></DisplaySearch>
  </div>
</template>

<script>
import DisplaySearch from '@/components/DisplaySearch.vue'

export default {
  name: 'home',
  data: function () {
    return {
      isHome: false,
      isResult: false,
      spinnerStatus: false,
      categories: [],
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
      const data = { 'category': this.paramsSearch.crime, 'force': this.paramsSearch.force, 'date': this.paramsSearch.year + '-' + this.paramsSearch.month }
      const querystring = this.encodeQueryData(data)
      this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.crimesNoLoc}?${querystring}`)
        .then((response) => {
          console.log(response)
          debugger
        })
        .catch((error) => {
          console.error(error)
        })
      this.spinnerStatus = false
    },
    encodeQueryData: function (data) {
      const ret = []
      for (let d in data) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
      }
      return ret.join('&')
    }
  },
  components: {
    DisplaySearch
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
