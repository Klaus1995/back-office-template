import Index from '@/components/index/Index.vue'
import Home from '@/components/home/Home.vue'
import Management from '@/components/management/Management.vue'


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
  path: '/index/management',
  icon: 'settings',
  title: '管理',
  component: Index,
  children: [{
    path: '/index/management',
    name: 'management',
    icon: 'settings',
    title: '个人管理',
    component: Management
  }, {
    path: '/index/management1',
    name: 'management',
    icon: 'settings',
    title: '个人管理1',
    component: Management
  }, {
    path: '/index/management2',
    name: 'management',
    icon: 'settings',
    title: '个人管理2',
    component: Management
  }]
}]
