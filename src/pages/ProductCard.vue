<template>
  <section class="card_product">
    <div>
      <ProductPhoto/>
      <ProductContent/>
    </div>
    <ProductGalery/>
  </section>
</template>

<script>
  import ProductPhoto from '@/components/ProductPhoto.vue'
  import ProductContent from '@/components/ProductContent.vue'
  import ProductGalery from '@/components/ProductGalery.vue'
  export default {
    components: {
      ProductPhoto,
      ProductContent,
      ProductGalery
    }
  }
</script>

<style scoped lang="scss">
.card_product {
  >:nth-child(1) {
    display: flex;
    align-items:flex-start;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      
      margin: auto;
    }
  }
}
</style>