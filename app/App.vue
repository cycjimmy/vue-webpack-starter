<template>
  <div :class="$style.app">
    <img
      alt="Vue logo"
      :src="logoSrc"
      :class="$style.logo"
    >
    <HelloWorld v-bind:msg="msg"/>

    <nav :class="$style.nav">
      <h2>Navigation menu</h2>
      <ul :class="$style.mainNavList">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/foo">Foo</router-link>
        </li>
        <li>
          <router-link to="/bar">Bar</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'app',
    data() {
      return {
        logoSrc: require('../static/images/logo.png'),
        msg: "Welcome to Vue.js App",
      };
    },
    components: {
      HelloWorld,
    },
    created() {
      console.log(this.$style);
    },
  };
</script>

<style lang="scss" module>
  @import "./theme/variables";

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    width: 100%;
    text-align: center;
    margin-top: 60px;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .nav {
    margin-top: 30px;

    > h2 {
      font-size: $fontL + 2px;
    }
  }

  .mainNavList {
    margin: 10px 0 30px;

    > li {
      display: inline-block;

      &:nth-child(n+2) {
        margin-left: 10px;
      }
    }
  }

  :global(.main_nav_active) {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
