<template>
<header class="container-header">
  <img class="logo-police-home" src="../assets/logo.png" alt="logo-police">
  <h1 class="font-police-dpt">UK POLICE DEPARTMENT</h1>
  <DisplaySearch v-bind="{categories}"></DisplaySearch>
</header>
</template>

<script>
import DisplaySearch from '@/components/DisplaySearch.vue'

export default {
  name: 'home',
  data: function() {
    return {
      categories: []
    }
  },
  components: {
    DisplaySearch
  },
  mounted() {
    this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.categories}`)
      .then((response) => {
        this.categories = response.data;
      }).catch((err) => {
        console.log(err);
      })
  }
}
</script>
