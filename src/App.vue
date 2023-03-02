<template>
    <Header class="heading"></Header>
    <router-view></router-view>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
    components: {
        Header,
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:wght@300&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Merriweather', serif;
  color: #19191a;

}

body {
  margin: 0;
}

.heading {
  font-family: 'Open Sans', sans-serif;
}
</style>
