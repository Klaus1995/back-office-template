import Index from '@/components/index/Index.vue'
import Home from '@/components/home/Home.vue'
import MyHome from '@/components/management/home-management/MyHome.vue'
import AddHome from '@/components/management/home-management/AddHome.vue'


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
  path: '/index/management/my-home',
  icon: 'settings',
  title: '管理',
  component: Index,
  children: [{
    path: '/index/management/my-home',
    name: 'management',
    icon: 'ios-home',
    title: '房屋管理',
    component: MyHome,
  }, {
    path: '/index/management/add-home',
    component: AddHome
  }]
}]
