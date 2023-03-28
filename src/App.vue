<script>
//libraries
import axios from 'axios';
//function
import { store } from './store';
//components
import AppHeader from './assets/components/header/AppHeader.vue';
import AppMain from './assets/components/main/AppMain.vue';
import AppFooter from './assets/components/footer/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        this.store.cards = response.data.data;
      })
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        console.log(response.data);
        this.store.cardsArchetypes = response.data;
      })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss' as *;
</style>
