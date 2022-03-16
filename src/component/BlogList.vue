<template>
  <div class="list">
    <div class="listContent">
      <div class="listLeft" :key="list.id" v-for="list in lists">
        <div class="listImg">
          <img :src="list.imgSrc" alt="" @click="pushLink(list)" />
        </div>
        <div class="list_rightside">
          <div class="list_rightside_title">
            <router-link
              :to="{
                name: 'Content',
                params: {
                  id: list.id,
                },
              }"
              >{{ list.title }}
            </router-link>
          </div>
          <span class="list_rightside_subhead" v-for="item in list.subhead">{{
            item.label
          }}</span>
          <div class="list_rightside_content">
            <div :key="index" v-for="(item, index) in list.content">
              {{ item.caption }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="listRightBox">
      <BlogListRight></BlogListRight>
      <BlogListFooter></BlogListFooter>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BlogListRight from "./BlogListRight.vue";
import BlogListFooter from "./BlogListFooter.vue";

export default {
  name: "BlogList",
  data() {
    return {
    };
  },
  components: { BlogListRight, BlogListFooter },
  methods: {
    pushLink(list) {
      this.$router.push({
        name: "Content",
        params: {
          id: list.id,
        },
      });
    },
  },
  computed: {
    ...mapState(["lists"]),
  },

  mounted() {
    // this.$store.dispatch("saveList");
    // 获取vuex里的axios返回的数据
    
      this.$store.dispatch("saveList");
     
    
  },
};
</script>
<style lang="css" >
.list {
  display: flex;
}
.listContent {
  flex: 1;
  margin-right: 20px;
}
.listLeft {
  display: flex;
  height: 250px;
  border-radius: 12px 8px 8px 12px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}
.listLeft:hover {
  box-shadow: 0 0 10px 0;
}
.listLeft .listImg {
  overflow: hidden;
}
.listLeft .listImg img {
  height: 250px;
  width: 450px;
  display: block;
  transition: all 1s;
}
.listLeft img:hover {
  transform: scale(1.4);
}
.listLeft .list_rightside {
  padding: 30px 20px;
  flex: 1;
}
.listLeft .list_rightside .list_rightside_title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
}
.listLeft .list_rightside .list_rightside_subhead {
  border: 1px solid #49b1f5;
  padding: 5px;
  border-radius: 7px;
  margin-right: 10px;
}
.listLeft .list_rightside_subhead:hover {
  background-color: #49b1f5;
}
.listLeft .list_rightside .list_rightside_content {
  display: -webkit-box;
  font-size: 16px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-top: 20px;
}
.listLeft .list_rightside_content > div {
  margin-top: 20px;
}
.listRightBox {
  display: flex;
  flex-direction: column;
}
</style>
