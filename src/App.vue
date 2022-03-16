<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <div class="container w">
      <router-view></router-view>
    </div>
    <transition name="showGo" appear>
      <div class="go" v-show="isShow" @click="go">
        <span class="icon-arrow-up2"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import BlogHeader from "./component/BlogHeader.vue";

export default {
  name: "app",
  data() {
    return {
      i: 0,
      isShow: false,
    };
  },
  components: {
    BlogHeader,
  },
  methods: {
    scroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop < 60) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    go() {
      let top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const timeTop  = setInterval(()=>{
        document.body.scrollTop = document.documentElement.scrollTop = top -=50;
        if(top<=0){
          clearInterval(timeTop)
        }
      },10)
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
};
</script>

<style>
.w {
  width: 1400px;
  margin: 0 auto;
}
.container {
  margin-top: 40px;
}
.go {
  position: fixed;
  right: 48px;
  bottom: 40px;
  width: 35px;
  height: 35px;
  border: 0;
  border-radius: 4px;
  text-align: center;
  line-height: 35px;
  background-color: #49b1f5;
  color: #fff;
  /* visibility: hidden; */
}

.showGo-enter-active {
  animation: showGo 0.3s linear;
}

.showGo-leave-active {
  animation: showGo 0.3s linear reverse;
}
@keyframes showGo {
  from {
    transform: translateX(48px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
