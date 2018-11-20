<template>
  <div>
    <header class="container-header">
      <img class="logo-police-home" src="../assets/logo.png" alt="logo-police">
      <h1 class="font-police-dpt">UK POLICE DEPARTMENT</h1>
    </header>
    <DisplaySearch v-bind="{categories, paramsSearch}"></DisplaySearch>
  </div>
</template>

<script>
import DisplaySearch from '@/components/DisplaySearch.vue'

export default {
  name: 'home',
  data: function () {
    return {
      categories: [],
      paramsSearch: {
        crime: 'all-crime',
        month: 1,
        year: 2018,
        force: 'metropolitan'
      }
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
