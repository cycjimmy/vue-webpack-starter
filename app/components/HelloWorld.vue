<template>
  <div :class="$style.hello">{{ msg }}</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<style lang="scss" src="./helloWorld.scss" module></style>
