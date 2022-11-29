<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'ButtonVue',
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    padding: 10px 30px;
    border: 1px solid #333333;
  }
</style>