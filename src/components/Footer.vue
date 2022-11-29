<template>
  <footer>
    <LinkList class="list" :links="forClients">
      Покупателям
    </LinkList>
    <LinkList class="list" :links="aboutUs">
      О нас
    </LinkList>
    <div id="footer_subscription">
      <h5>Узнайте первым о новинках и акциях</h5>
      <div>
        <InputEmail/>
        <ButtonVue>Подписаться</ButtonVue>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        forClients: ['Каталог', 'Акции', 'Бренды'],
        aboutUs: ['О компании', 'Новости', 'Комана']
      }
    }
  }
</script>

<style scoped lang="scss">
  footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    padding: 35px 15px 55px 15px;
    @media (max-width: 769px) {
      gap: 50px;
      padding-bottom: 180px;
    }

    .list {
      @media (max-width: 769px) {
        min-width: 40%;
      }
    }

    #footer_subscription {
      width: 100%;
      max-width: 450px;

      h5 {
        text-transform: uppercase;
        padding: 10px 0;
      }
      @media (max-width: 376px) {
        h5 {
          max-width: 250px;
        }
      }

      >div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 35px;
      }

      button {
        margin: auto;
        margin-right: 0;
      }
    }
  }
</style>