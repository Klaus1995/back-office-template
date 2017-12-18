import Index from '@/components/index/Index.vue'
import Home from '@/components/home/Home.vue'
import TablePage from '@/components/table_page/TablePage.vue'

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
  path: '/index/table',
  icon: 'ios-list',
  title: '表格',
  component: Index,
  children: [{
    path: '/index/table',
    name: 'table',
    icon: 'ios-list',
    title: '带图表表格',
    component: TablePage
  }]
}]
