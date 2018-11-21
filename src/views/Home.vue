<template>
<div class="home">
  <header class="container-header">
    <img class="logo-police-home" src="../assets/logo.png" alt="logo-police">
    <h1 class="font-police-dpt">UK POLICE DEPARTMENT</h1>
  </header>
  <div class="computer-global">
    <div class="computer-child font-console">
      <DisplaySearch v-if="!isResult && !spinnerStatus" v-bind="{categories, paramsSearch, loadSearch}"></DisplaySearch>
      <h2 v-show="spinnerStatus"><span class="">></span> Loading ...</h2>
      <DisplayResults v-if="isResult && !spinnerStatus" v-bind="{categories, date, backToSearch}"></DisplayResults>
    </div>
  </div>
</div>
</template>

<script>
import DisplaySearch from '@/components/DisplaySearch.vue';
import DisplayResults from '@/components/DisplayResults.vue';

export default {
  name: 'home',
  components: {
    DisplaySearch,
    DisplayResults
  },
  data: function() {
    return {
      isResult: false,
      spinnerStatus: false,
      categories: [],
      date: '',
      paramsSearch: {
        crime: 'all-crime',
        month: 1,
        year: 2018,
        force: 'metropolitan'
      }
    }
  },
  methods: {
    loadSearch: function() {
      this.spinnerStatus = true;
      this.date = `${this.paramsSearch.month}/${this.paramsSearch.year}`;
      let data = {
        'category': this.paramsSearch.crime,
        'force': this.paramsSearch.force,
        'date': this.paramsSearch.year + '-' + this.paramsSearch.month
      }
      let querystring = this.encodeQueryData(data);
      this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.crimesNoLoc}?${querystring}`)
        .then(response => {
          this.categories.forEach(e => {
            e.number = 0; //Initialisation des compteurs
          });
          response.data.forEach(crime => {
            this.categories.forEach(b => {
              if (b.url === crime.category) {
                b.number++;
              }
            })
          })
          this.spinnerStatus = false;
          this.isResult = true;
        })
        .catch(() => {
          this.orderedStats = [];
          this.spinnerStatus = false;
          this.isResult = true;
        })
    },
    backToSearch: function() {
      this.isResult = false;;
    },
    encodeQueryData: function(data) {
      const ret = [];
      for (let d in data) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
      }
      return ret.join('&');
    }
  },
  mounted() {
    this.$http.get(`${this.API_URL}${this.API_ENDPOINTS.categories}`)
      .then((response) => {
        this.categories = response.data;
        this.categories.splice(0, 1); //On enleve all Crimes
      }).catch((err) => {
        console.log(err);
      })
  }
}
</script>

<style scoped lang="less">
.home {
    width: 100%;
    height: 100%;
    .container-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: #F2DB4D solid 1rem;
        height: 20vh;
        .logo-police-home {
            height: 80%;
        }
        .loader-spinner-radio {
            display: flex;
            width: 70px !important;
            margin: 10rem auto auto !important;
        }
        h1 {
            margin-right: 2rem;
        }
    }
    .computer-global {
        width: 100%;
        margin-top: -1rem;
        height: 80vh;
        display: flex;
        justify-content: center;
        .computer-child {
            overflow-y: scroll;
            background-color: #2A2929;
            border: 5px solid #30333F;
            border-radius: 5px;
            width: 60%;
            height: 60vh;
            margin-top: 10vh;
            -webkit-box-shadow: 0 0 38px 3px rgba(0,0,0,0.75);
            -moz-box-shadow: 0 0 38px 3px rgba(0,0,0,0.75);
            box-shadow: 0 0 38px 3px rgba(0,0,0,0.75);
        }
    }
}
</style>
