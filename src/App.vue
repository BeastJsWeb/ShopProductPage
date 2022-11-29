<template>
  <Header/>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer/>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

button {
  background-color: transparent;
  border: none;
  font-size: inherit;
  cursor: pointer;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
}

ul {
  list-style: none;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 18px;
  font-weight: 600;
}

h5 {
  font-weight: 400;
  font-size: 16px;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

a, button {
  display: flex;
  width: fit-content;
  text-decoration: none;
  text-decoration-color: #333333;
  color: #0000;
  background: 
    linear-gradient(90deg,#1095c1 50%,#000 0) 
    var(--_p,100%)/200% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: .4s;
  &:hover {
    --_p: 0%;
    text-decoration-color: inherit;
  }
  &:active {
    opacity: 0.5;
    text-decoration-color: inherit;
  }
}

input, select {
  &:focus {
    border-color: #1095c1 !important;
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
  &:hover {
    border-color: #1095c1 !important;
  }
}

svg {
  &:hover {
    path, circle {
      stroke: rgba(0, 132, 255, 0.849);
    }
  }
}

img {
  object-fit: cover;
  height: auto;
  width: 100%;
  vertical-align: middle;
  display: inline-block;
}

#app {
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1410px;
  margin: auto;

  main {
    height: 100%;
    width: 100%;
    max-width: 100vw!important;
    padding: 50px 15px 10px 15px;
    @media (max-width: 1000px) {
      padding-top: 80px;
    }
  }
}
</style>