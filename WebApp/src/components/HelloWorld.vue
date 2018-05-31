<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="text" v-model="url" />
    <a href="javascript:;" @click="ajaxTest">ajax</a>
  </div>
</template>
<script>
  import analyze from "../../apis/analyzeUrl"

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        url: 'http://you.163.com'
      }
    },
    methods: {
      ajaxTest: function () {
        if (this.url) {
          analyze(this.url)
        } else {
          alert("请填写待抓取网站url")
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
