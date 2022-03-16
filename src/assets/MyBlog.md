# Blog学习总结

## 1.目录

## 2.项目错误点

### 2.1组件上绑定事件无法生效

```
<BlogList @click="click()"></BlogList>
```



## 3.项目补充点

#### 3.1.npm run build index页面不生效问题

3.1.1.新建vue.config.js，编写以下代码

```
module.exports = {

  publicPath:"./"

}
```

​                                                 