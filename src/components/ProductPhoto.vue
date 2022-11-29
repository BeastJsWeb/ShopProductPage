<template>
  <div class="product_photo">
    <img alt='' :src='currentPhoto' class="photo_main">
    <div class="photo_list">
      <img alt="" :src='photo.url' v-for="photo in pictures" @click="currentPicture(photo.id)">
    </div>
  </div>
</template>

<script>
  import photo1 from '@/assets/photo/1.jpg'
  import main1 from '@/assets/photo/01.jpg'
  import photo2 from '@/assets/photo/2.jpg'
  import main2 from '@/assets/photo/02.jpg'
  import photo3 from '@/assets/photo/3.jpg'
  import main3 from '@/assets/photo/03.jpg'
  import photo4 from '@/assets/photo/4.jpg'
  import main4 from '@/assets/photo/04.jpg'
  import photo5 from '@/assets/photo/5.jpg'
  import main5 from '@/assets/photo/05.jpg'
  export default {
    data () {
      return {
        pictures: [
          {id: 1, url: photo1, main_url: main1}, 
          {id: 2, url: photo2, main_url: main2}, 
          {id: 3, url: photo3, main_url: main3}, 
          {id: 4, url: photo4, main_url: main4}, 
          {id: 5, url: photo5, main_url: main5}
        ],
        currentPhoto: main1
      }
    },
    methods: {
      currentPicture(id) {
        const current = this.pictures.find(el => el.id === id)
        this.currentPhoto = current.main_url
      }
    }
  }
</script>

<style scoped lang="scss">
.product_photo {
  width: 100%;
  position: relative;
  
  .photo_main {
    $margin: 15px;
    @media (max-width: 1000px) {
      margin: -$margin;
      width: calc(100% + ($margin * 2));
    }
  }

  .photo_list {
    position: absolute;
    padding: 3% 0 0 3%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    img {
      max-width: 10%;
      max-height: 10%;
      cursor: pointer;
    }
  }
}
</style>