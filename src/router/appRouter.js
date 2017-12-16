import Home from './../components/home/Home.vue'

export default [{
  path: '/index/home',
  icon: 'home',
  title: '主页',
  component: Home
}, {
  path: '/one',
  icon: 'flag',
  title: '测试一级目录',
  children: [{
    path: '/two',
    icon: 'star',
    title: '测试二级目录',
    component: Home
  }]
}]
