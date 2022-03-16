<template>
  <div class="listRight">
    <div class="listRightHeader">
      <img src="../assets/avatars.jpg" alt="" />
    </div>
    <div class="listRightCenter">
      <h3>Maria</h3>
      <p>总有想做而又做不到的事</p>
    </div>
    <div class="listRightEnd">
      <a href="https://github.com/MariyaDesu/"><span class="icon-github"></span>GitHub</a>
      <span>文章&nbsp:&nbsp{{ lists.length }}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BlogListRight",
  data() {
    return {};
  },
  mounted() {
    // console.log(lists);
  },
  computed: {
    ...mapState(["lists"]),
  },
};
</script>
<style lang="css" scope>
.listRight {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 260px;
  height: 352px;
  padding: 20px 24px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}
.listRight:hover {
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.1);
}

.listRightHeader img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
.listRightCenter {
  margin: 20px 0;
}
.listRightCenter h3 {
  font-size: 20px;
}
.listRightCenter p {
  margin-top: 5px;
}
.listRightEnd span {
  margin-left: 5px;
}
.listRightEnd a {
  margin-right: 10px;
}
/* .rotateImgs-enter-active {
  animation: rotateImg 0.5s ease;
}

.rotateImgs-leave-active {
  animation: rotateImg 0.5s ease reverse;
} */

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.listRightHeader img:hover {
  animation: spin 0.5s ease-in;
}
</style>
