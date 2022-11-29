<template>
  <div class="product_galery">
    <RouterLink to="" class="content_link">Посмотреть все стили</RouterLink>
    <ul>
      <li v-for="photo in pictures">
        <RouterLink to="">
          <img alt="" v-lazy="photo" width="335" height="335">
          <div class="styles_photo-hover">
            <FullScreen/>
            <div>
              <Bag/>Узнай что на мне
            </div>
            <div><Favourites/> {{favourites[0]}}</div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
  import photo1 from '@/assets/photo/product_styles/1.webp'
  import photo2 from '@/assets/photo/product_styles/2.webp'
  import photo3 from '@/assets/photo/product_styles/3.webp'
  import photo4 from '@/assets/photo/product_styles/4.webp'
  import photo5 from '@/assets/photo/product_styles/5.webp'
  export default {
    data () {
      return {
        pictures: [photo1, photo2, photo3, photo4, photo5],
        favourites: [200]
      }
    }
  }
</script>

<style scoped lang="scss">
.product_galery {
  display: flex;
  flex-direction: column;
  align-items: center;
  >:nth-child(1) {
    margin: 25px 0 35px 0;
  }
  >:nth-child(2) {
    $margin: 15px;
    display: grid;
    grid-gap: 15px;
    grid-template-areas: 
      'a a b c'
      'a a d e';
    @media (max-width: 1000px) {
      grid-gap: 10px;
      place-items: center;
      grid-template-areas: 
        'a a'
        'a a'
        'b c'
        'd e';
      margin: auto -$margin;
      width: calc(100% + ($margin * 2));
    }
    >:nth-child(1) {
      grid-area: a;
    }
    >:nth-child(2) {
      grid-area: b;
    }
    >:nth-child(3) {
      grid-area: c;
    }
    >:nth-child(4) {
      grid-area: d;
    }
    >:nth-child(5) {
      grid-area: e;
    }
    li {
      width: 100%;
    }
    a {
      position: relative;
      width: 100%;
    }
    .styles_photo-hover {
      display: none;
    }
    @media (min-width: 1000px) {
      .styles_photo-hover {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color:rgba(0, 0, 0, 0.459);
        width: 100%;
        height: 100%;
        color: white;
        letter-spacing: 0.04em;
        opacity: 0;
        transition: opacity .3s;
        &:hover {
          opacity: 1;
        }
        >:nth-child(1) {
          align-self: flex-end;
          margin: 15px;
        }
        >:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          svg {
            stroke: white;
            width: 50px;
            height: auto;
          }
        }
        >:nth-child(3) {
          display: flex;
          align-items: center;
          margin: 15px;
          svg {
            fill: white;
            stroke: white;
            width: 25px;
            height: auto;
          }
        }
      }
    }
  } 
}
.content_link {
  letter-spacing: 0.04em;
  text-decoration-line: underline;
}
</style>