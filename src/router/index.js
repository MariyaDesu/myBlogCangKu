// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import BlogEssays from '../component/BlogEssays.vue';
import BLogHome from '../component/BlogHome.vue';
import BlogContent from '../component/BlogContent.vue';
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
  routes: [
    {
      name:'Home',
        path: "/",
        component: BLogHome,
      },
    {
      name:'BlogEssays',
      path: "/Essays",
      component: BlogEssays,
    },
    {
      name:'Content',
      path: "/Content/:id",
      component: BlogContent,
    },

  ],
});
