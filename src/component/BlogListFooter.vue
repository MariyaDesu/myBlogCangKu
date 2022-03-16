<template>
  <div class="listRightFooter">
    <h3>文章列表</h3>
    <ul>
      <li :key="i.id" v-for="i in lists">
        <div class="listFooterImg">
          <img :src="i.imgSrc" alt="" />
        </div>
        <router-link
          :to="{
            name: 'Content',
            params: {
              id: i.id,
            },
          }"
          >{{ i.title | titleFilter }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BlogListFooter",
  data() {
    return {
      // lists: [],
    };
  },
  computed: {
    ...mapState(["lists"]),
  },
  filters: {
    titleFilter(value) {
      return value.substring(9);
    },
  },
};
</script>
<style lang="css" scope>

.listRightFooter {
  width: 260px;
  padding: 20px 24px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}
.listRightFooter:hover {
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.1);
}
.listRightFooter h3 {
  font-size: 18px;
}
.listRightFooter ul {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow: hidden;
}
.listRightFooter ul li {
  margin: 10px;
  font-size: 14px;
  font-weight: 800;

}
.listRightFooter .listFooterImg {
  margin-right: 10px;
  overflow: hidden;
  float: left;

}
.listRightFooter .listFooterImg img {
  /* display: block; */
  width: 60px;
  height: 60px;
  /* overflow: hidden; */
   transition: all 1s;
}
.listRightFooter .listFooterImg img:hover {
  transform: scale(1.4);
}


</style>
