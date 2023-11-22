<template>
  <div :class="$style.hello">
    {{ msg }}
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<style lang="scss" src="./helloWorld.scss" module></style>
