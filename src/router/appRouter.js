import Index from '@/components/index/Index.vue'
import Home from '@/components/home/Home.vue'
import Test from '@/components/home/Test.vue'

export default [{
  path: '/index/home',
  icon: 'home',
  title: '主页',
  component: Index,
  children: [{
    path: '/index/home',
    name: 'home',
    icon: 'home',
    title: '主页',
    component: Home,
  }]
}, {
  path: '/index/two',
  icon: 'flag',
  title: '测试一级目录',
  component: Index,
  children: [{
    path: '/index/two',
    name: 'two',
    icon: 'star',
    title: '测试二级目录1',
    component: Test
  }, {
    path: '/index/two2',
    name: 'two',
    icon: 'star',
    title: '测试二级目录2',
    component: Test
  }]
}]
