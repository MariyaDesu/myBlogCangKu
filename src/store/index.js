//引入Vue核心库
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
// 引入axios
import axios from "axios";
axios.defaults.baseURL =
  "https://mock.presstime.cn/mock/622ffaf1560ad3002258578f/";

//应用Vuex插件
Vue.use(Vuex);
// Vue.use(axios);
Vue.prototype.axios = axios;
//准备actions对象——响应组件中用户的动作
const actions = {
  // 获取文章列表并保存
  saveList(context) {
    axios
      .get("api/lists")
      .then((res) => {
        context.commit("SAVELIST", res.data.lists);
        // localStorage.setItem('lists',JSON.stringify(res.data.lists))
      })
      .catch((err) => {
        return err;
      });
  },
  // 根据Id获取文章内容
  getIdArticle(context, value) {
    axios
      .get("/api/id", {
        params: {
          id: value,
        },
      })
      .then((res) => {
        context.commit("GETIDARTICLE", res.data.list[0]);
      })
      .catch((err) => {
        return err;
      });
  },
  // 根据文本获取文章内容
  getMsgArticle(context, value) {
    axios
      .get("/api/msg", {
        params: {
          title: value,
        },
      })
      .then((res) => {
        context.commit("GETMSGARTICLE", res.data.list);
        
      })
      .catch((err) => {
        return err;
      });
  },
};
//准备mutations对象——修改state中的数据
const mutations = {
  SAVELIST(state, lists) {
    state.lists = lists;
  },
  GETIDARTICLE(state, list) {
    state.list = list;
  },
  GETMSGARTICLE(state, content) {
    state.content = content;
  },
};
//准备state对象——保存具体的数据
const state = {
  lists: [],
  list: {},
  content: [],
};

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
