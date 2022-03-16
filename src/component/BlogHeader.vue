<template>
  <header ref="headerScorll">
    <div class="nav">
      <h1>
        <router-link to="/">Maria's Blog</router-link>
      </h1>
      <BlogHeaderNav></BlogHeaderNav>
    </div>
  </header>
</template>
<script>
import BlogHeaderNav from "./BlogHeaderNav.vue";
export default {
  name: "BlogHeader",
  data() {
    return {
      i: 0,
      isShow: true,
    };
  },
  components: {
    BlogHeaderNav,
  },
  methods: {
    scrollDs: function () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scrollTop == 0){
        this.$refs.headerScorll.removeAttribute("class", "showHeader");
        return
      }
        if (scroll < 0) {
          this.$refs.headerScorll.setAttribute("class", "showHeader");
        } else {
          this.$refs.headerScorll.removeAttribute("class", "showHeader");
        }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollDs, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollDs);
  },
};
</script>
<style>
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #fffcfd;
  opacity: 1;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 5px 6px -5px rgb(133 133 133 / 60%);
  font-weight: bold;
  padding: 0 30px;
}
.showHeader {
  position: fixed;
  top: 0;
  left: 0;
  /* height: 60px; */
  width: 100%;
  z-index: 2000;
  animation: showHeader 0.5s;
}
@keyframes showHeader {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0px);
  }
}
</style>