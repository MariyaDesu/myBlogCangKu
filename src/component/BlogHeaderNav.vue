<template>
  <div class="hearderNav">
    <ul>
      <li>
        <a href="javascript:;" @click="searchPape"
          ><span class="icon-search">Search</span></a
        >
      </li>
      <li>
        <router-link to="/"><span class="icon-home">Home</span></router-link>
      </li>
      <!-- <li>
        <router-link to="/Essays"
          ><span class="icon-books">Essays</span></router-link
        >
      </li> -->
      <li>
        <a href="https://github.com/MariyaDesu/"
          ><span class="icon-link">Link</span></a
        >
      </li>
    </ul>
    <div class="searchHover" v-show="dialog"></div>
    <BlogSearch v-show="dialog" :dialog="dialog" @changedialog='searchPape'></BlogSearch>
  </div>
</template>
<script>

import BlogSearch from './BlogSearch.vue'
export default {
  name: "BlogHeaderNav",
  data() {
    return {
      dialog: false,
      searchMsg: "",
    };
  },
  components:{BlogSearch},
  methods: { 
    searchPape() {
      this.dialog = !this.dialog;
    },
   
  },
};
</script>
<style lang="css" scope>
ul {
  display: flex;
}
ul li {
  margin-left: 20px;
}


</style>
