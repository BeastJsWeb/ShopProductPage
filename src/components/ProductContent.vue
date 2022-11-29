<template>
  <div class="product_content">

    <div class="content_title">
      <h4>{{product.title}}</h4>
      <span>{{product.article}}</span>
      <RouterLink to="">
        Отзывы
        <Stars/>
        <span>{{product.reviews.count}} отзывов</span>
        <i class="arrow_right"></i>
      </RouterLink>
    </div>

    <div class="content_price">
      <RouterLink to="">
        <h3>{{product.price.current}} ₽</h3>
        <span>{{product.price.old}}</span>
        <i class="arrow_right"></i>
      </RouterLink>
      <div>
        <span>скидка -{{product.price.discount}}%</span>
        <span>акция -{{product.price.stock}}%</span>
      </div>
    </div>

    <div class="content_size">
      <div>
        <select required>
          <option default>Выбрать размер</option>
          <option v-for="size in product.size">{{size}}</option>
        </select>
        <i class="arrow_down"></i>
      </div>
      <RouterLink to="" class="content_link">Определить размер</RouterLink>
    </div>

    <div class="content_buy">
      <div>
        <div class="counter">
          <button @click='addProduct'>+</button>
          <div>{{addedCount}}</div>
          <button @click='removeProduct'>-</button>
        </div>
        <div class="buy_bts">
          <div>
            <ButtonVue @click="addProductTo(product.title, addedCount, 'корзину')">
              Добавить в корзину
            </ButtonVue>
            <ButtonVue @click="addProductTo(product.title, addedCount, 'избранное')">
              <Favourites/>
            </ButtonVue>
          </div>
          <span>{{message}}</span>
        </div>
      </div>
      <RouterLink to="" class="content_link">Купить в 1 клик</RouterLink>
    </div>

    <div class="content_info">
      <RouterLink to="" class="content_link">Описапние товара</RouterLink>
      <RouterLink to="" class="content_link">Доставка и возврат</RouterLink>
      <RouterLink to="" class="content_link">Способы оплаты</RouterLink>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        product: {
          title: 'Пижама для девочек',
          article: 'Арт. 02765/46',
          reviews: {
            count: 14,
            stars: 4
          },
          price: {
            current: '800',
            old: '1 500',
            discount: 36,
            stock: 20
          },
          size: [36, 48, 56]
        },
        message: '',
        timout: null,
        addedCount: 1
      }
    },
    methods: {
      addProduct() {
        this.addedCount += 1
      },
      removeProduct() {
        if (this.addedCount === 1) return
        this.addedCount -= 1
      },
      addProductTo(title, count, addTo) {
        if (!title | !count | !addTo) return console.log('Error in addProductTo')
        this.message = `Товар ${title} в количестве ${count} единиц добавлен в ${addTo}`
        clearTimeout(this.timout)
        this.timout = setTimeout(() => this.message = '', 3000)
      }
    }
  }
</script>

<style scoped lang="scss">
.product_content {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 30px 0;
    max-width: 600px;
  }

  .content_title {
    display: flex;
    flex-direction: column;
    gap: 10px;
    >:nth-child(2) {
      font-size: 12px;
      color: #828282;
      letter-spacing: 0.04em;
    }
    >:nth-child(3) {
      display: flex;
      align-items:center;
      gap: 15px;
      letter-spacing: 0.04em;
      margin: 15px 0;

      svg {
        pointer-events: none;
      }
    }
  }

  .content_price {
    display: flex;
    flex-direction: column;
    gap: 15px;
    >:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 15px;
      letter-spacing: 0.04em;
      span {
        font-size: 14px;
        color: #828282;
        text-decoration-line: line-through;
      }
    }
    >:nth-child(2) {
      display: flex;
      gap: 15px;
      span {
        border: 1px solid #333333;
        padding: 4px 8px;
        letter-spacing: 0.04em;
        font-size: 12px;
        cursor: default;
      }
    }
  }

  .content_size {
    display: flex;
    flex-direction: column;
    gap: 15px;
    >:nth-child(1) {
      position: relative;
      max-width: 315px;
      width: 100%;
      select {
        padding: 10px 15px;
        width: 100%;
      }
      i {
        position: absolute;
        right: 20px;
        top: 10px;
      }
    }
  }

  .content_buy {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 30px;
    border-bottom: 0.5px solid #C4C4C4;
    >:nth-child(1) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 15px;
      .counter {
        display: flex;
        background-color: #F2F2F2;
        width: fit-content;
        button, div {
          padding: 10px 20px;
        }
        button {
          border: 1px solid #F2F2F2;
          &:hover {
            border-color:#333333;
          }
        }
      }
      .buy_bts {
        display: flex;
        flex-direction: column;
        position: relative;
        >:nth-child(1) {
          display: flex;
          gap: 5px;
          button {
            color: white;
            background:#333333;
            border: 1px solid #333333;
            &:hover {
              border-color: white;
            }
          }
          >:nth-child(2) {
            display: flex;
            align-items: center;
            padding: 0 5px;
            svg {
              stroke: white;
            }
          }
        }
        span {
          position: absolute;
          background-color: white;
          top: 100%;
          left: 0;
        }
      }
    }
  }
  .content_info{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .content_link {
    letter-spacing: 0.04em;
    text-decoration-line: underline;
  }
  .arrow_right {
    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .arrow_down {
    border: solid black;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>