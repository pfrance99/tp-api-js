<template>
<div id="app">
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  <router-view />
</div>
</template>

<style lang="less">
/**
  Jaune : #F2DB4D
  Bleu : #040062
  Blanc : #E3E3E3
  Rouge : #BE2E33
  Gris de base : #2c3e50
   */
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #E3E3E3;
    background-color: #040062;
    height: 100vh;
    width: 100vw;
}

.container-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: #F2DB4D solid 1rem;
}

body {
    padding: 0;
    margin: 0;
}

.font-console {
    font-family: 'VT323', monospace;
}

.font-police-dpt {
    font-family: 'Roboto Slab', serif;
    margin-top: 7rem;
    margin-right: 2rem;
}

.font-styled {
    font-family: 'Allerta Stencil', sans-serif;
}

.logo-police-home {
    height: 10rem;
    margin-top: 3rem;
    margin-left: 2rem;
}
</style>
