<template>
  <div class="content">
    <div class="contentTitle">
      {{ list.title }}
    </div>
    <div
      class="contentArticle"
      :key="index"
      v-for="(item, index) in list.content"
    >
      <div class="contentCaption">{{ item.caption }}</div>
      <div
        class="contentParagraph"
        :key="index"
        v-for="(i, index) in item.paragraph"
      >
        {{ i.text }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BlogContent",
  data() {
    return {
      // list:{}
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    getArticle() {
      this.$store.dispatch("getIdArticle", this.$route.params.id);
    },
  },
  mounted() {
    this.getArticle()
  },
  watch: {
    $route(){    
      // 通过更新Vuex中的store的数据，让数据发生变化
      this.getArticle()
    },
  },

};
</script>
<style lang="css" scope>
.content {
  position: relative;
  height: 100%;
  /* margin-top: 70px; */
}
.content .contentTitle {
  font-size: 40px;
  font-weight: 1000;
}
.content .contentSubhead {
  margin: 30px 0;
  font-weight: 400;
}
.content .contentArticle {
  line-height: 60px;
}
.content .contentArticle .contentCaption {
  font-size: 20px;
  font-weight: 600;
}
.content .contentArticle .contentParagraph {
  /* line-height: 50px; */
  font-size: 16px;
}
</style>
