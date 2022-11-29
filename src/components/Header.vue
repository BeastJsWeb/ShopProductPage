<template>
  <header :class="{'header-hidden' : !showNavbar}">
    <div id="navbar_content">
      <RouterLink to="" id="logo">LOGO</RouterLink>
      <div id='navber_interfase'>
        <RouterLink to=""><Person/></RouterLink>
        <RouterLink to=""><Favourites/></RouterLink>
        <RouterLink to=""><Bag/></RouterLink>
        <button id='navbar_btn'
          @click="toogleMenu"
        >
          <Menu/>
        </button>
        <div id="navbar_menu" 
          v-if='isActiveMenu'
          @click="toogleMenu"
        >
          <div id="menu_content" @click.stop>
            <button @click="toogleMenu"><MenuClose/></button>
            <nav>
              <ul v-for="el in nav">
                <li><RouterLink to="">{{el}}</RouterLink></li>
              </ul>
              <button>Выход</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        nav: ['Постельное белье', 'Одежда для дома', 'Одежда для улицы'],
        isActiveMenu: false,
        showNavbar: true,
        lastScrollPosition: 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      toogleMenu() {
        this.isActiveMenu = !this.isActiveMenu
      },
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) return
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: 0.5s;
    z-index: 1;

    svg {
      stroke: #333333;
    }

    #navbar_content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 5px 10px;
      max-width: 1405px;
      margin: auto;
      @media (max-width: 1000px) {
        padding: 20px 25px;
      }

      #logo {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 22px;
        
      }
    }

    #navber_interfase {
      display: flex;
      gap: 25px;
      align-items: center;

      #navbar_btn {
        display: none;
        @media (max-width: 1000px) {
          display: flex;
        }
      }

      #navbar_menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        #menu_content {
          display: flex;
          flex-direction: column;
          top: 0;
          left: 0;
          right: 0;
          background-color: white;
          padding-top: 15px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

          &>:nth-child(1) {
            align-self:flex-end;
            margin: 8px 25px;
          }

          nav {
            display: flex;
            flex-direction: column;
            gap: 25px;
            font-size: 12px;
            text-transform: uppercase;
            padding: 9% 7% 10% 7%;

            button {
              text-transform: uppercase;
              align-self: flex-start;
            }
          }
        }
      }
    }
  }

  .header-hidden {
    transform: translate3d(0, -700%, 0);
  }
</style>