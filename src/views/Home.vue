<template>
<div>
  <p>Welcome on the Site of the national police boy</p>
  <DisplaySearch v-bind="{categories}"></DisplaySearch>
</div>
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
