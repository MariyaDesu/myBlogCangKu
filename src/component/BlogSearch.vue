<template>
  <transition name="showDialog" appear>
    <div class="search-dialog">
      <div class="search-header">
        <span class="search-dialog-title">文章搜索</span>
        <span class="icon-cross" @click="change"></span>
      </div>
      <div class="search-msg">
        <input type="text" v-model="searchMsg" />
      </div>
      <hr class="hr-2" />
      <div class="search-containar">
        <div
          class="search-content"
          :key="item.id"
          v-for="item in content"
          v-show="searchMsg"
        >
          <div>
            <span class="icon-radio-unchecked"></span
            ><a @click="searchContent(item.id)">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BlogSearch",
  props: ["dialog"],
  data() {
    return {
      searchMsg: "",
    };
  },
  computed: {
    ...mapState(["content"]),
  },
  watch: {
    searchMsg(newVal, oldVal) {
      if (newVal.length <= 0) {
        this.list = [];
        console.log('aaa');
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.search(newVal);
      }, 500);
    },
  },
  methods: {
    change() {
        // const event = !this.dialog
        // 点击X按钮 触发父组件changedialog事件，取反dialog值并传递
        this.$emit('changedialog',!this.dialog)
    },
    // 页面跳转并传递新的id
    searchContent(newid) {
      this.change();
      this.$router.push({
        name: "Content",
        params: {
          id: newid,
        },
      });
    },
    search(value) {
      this.$store.dispatch("getMsgArticle", value);
    },
  },
};
</script>
<style lang="css" >
.showDialog-enter-active {
  animation: show 0.5s ease;
}

.showDialog-leave-active {
  animation: show 0.5s ease reverse;
}
@keyframes show {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.searchHover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2000;
}
.search-dialog {
  position: fixed;
  left: 50%;
  top: 100px;
  background-color: #f6f8fa;
  width: 600px;
  margin-left: -300px;
  transform: scale(1);
  z-index: 2001;
  border-radius: 8px;
  padding: 20px;
}
.search-header {
  display: flex;
  justify-content: space-between;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
}
.icon-cross:before {
  height: 25px;
  line-height: 25px;
  cursor: pointer;
}
.search-content {
  cursor: pointer;
}
.search-msg {
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 10px 0px;
}
.search-msg input {
  flex: 1;
  height: 40px;
  border: 2px solid #a4d8fa;
  border-radius: 8px;
  padding: 0 5px;
}
.hr-2 {
  border: 2px dashed #a4d8fa;
  margin: 10px 0;
}
.search-containar {
  max-height: 210px;
  overflow: auto;
}
.search-content {
  height: 50px;
}
</style>
