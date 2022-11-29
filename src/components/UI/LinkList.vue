<template>
  <div class="link_list">
    <h5><slot></slot></h5>
    <div v-for="el in links">
      <RouterLink to="">{{el}}</RouterLink>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LinkList',
    props: {
      links: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
.link_list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  h5 {
    text-transform: uppercase;
    padding: 10px 0;
  }
}
</style>