<template>
<div>
  <h2>> Statistics for {{ date }} <span class="blink cursor-pointer action" v-on:click="backToSearch()"> Click to return</span></h2>
  <h2 v-for="(category, index) in orderedCategories " :key="category.name">{{ index + 1 }}) {{ category.name}} : <span v-bind:class="getClass(category.number)">{{ category.number}}</span></h2>
</div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'DisplayResults',
  props: ['categories', 'date', 'backToSearch'],
  methods: {
    getClass: n => {
      let className = '';
      if (n >= 0 && n <= 20) { //0/20
        className = 'ok';
      } else if (n > 20 && n <= 50) { //20/50
        className = 'warning';
      } else if (n > 50 && n <= 100) { //50/100
        className = 'warning-plus';
      } else {
        className = 'danger';
      }
      return className;
    },
  },
  computed: {
    orderedCategories: function() {
      return _.orderBy(this.categories, 'number').reverse();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ok {
    color: #28a745;
}
.warning {
    color: #fff007;
}
.warning-plus {
    color: #ff9407;
}
.danger {
    color: #bd2130;
}
.action {
    color: #8ac8ff;
}
.blink {
    animation: blink 1.5s infinite linear;
}
.cursor-pointer {
    cursor: pointer;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
