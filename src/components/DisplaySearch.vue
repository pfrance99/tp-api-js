<template>
<div>
  <ul>
    <li v-for="category in categories">{{ category.name }}</li>
  </ul>
  <p>Voici la date</p>
</div>
</template>

<script>
export default {
  name: 'DisplaySearch',
  props: ['categories']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
