<template>
  <div>
    <input 
      type="email" 
      placeholder="Адрес электронной почты" 
      required
      v-model="email"
      @change="validateEmail"
    />
    <span class="in-valid">{{msg.email}}</span>
  </div>
</template>

<script>
  export default {
    name: 'InputEmail',
    data() {
      return {
        email: '',
        msg: [],
      }
    },
    watch: {
      email(value) {
        this.email = value
        this.validateEmail(value)
      }
    },
    methods: {
      validateEmail(value) {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        if (!value | valid) return this.msg['email'] = ''
        this.msg['email'] = 'Invalid Email Address'
      }
    }
  }
</script>

<style scoped lang="scss">
  input {
    padding: 15px;
    width: 100%;
    font-size: inherit;
    border: none;
    border-bottom: 1px solid #C4C4C4;
  }
  .in-valid {
    display: flex;
    height: 30px;
    color: red;
  }
</style>