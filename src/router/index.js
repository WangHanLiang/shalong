import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
// 店内风貌

import combo from '@/views/storestyle/combo'
import work_show from '@/views/storestyle/work_show'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      // 店内风貌
      {
        path: 'clerl',
        name: 'clerl',
        component: () => import("@/views/storestyle/clerl")
      },
      {
        path: 'combo',
        name: 'combo',
        component: () => import("@/views/storestyle/combo")
      },
      {
        path: 'work_show',
        name: 'work_show',
        component: () => import("@/views/storestyle/work_show")
      },
      // 人员管理
      {
        path: 'insidepersonmanage',
        name: 'insidepersonmanage',
        component: () => import("@/views/PersonInfos/inside/insidepersonmanage")
      },
      {
        path: 'promote',
        name: 'promote',
        component: () => import("@/views/PersonInfos/inside/promote")
      },
      {
        path: 'vipincrease',
        name: 'provipincreasemote',
        component: () => import("@/views/PersonInfos/vip/vipincrease")
      }, {
        path: 'member_list',
        name: 'member_list',
        component: () => import("@/views/PersonInfos/vip/member_list")
      }, {
        path: 'grade',
        name: 'grade',
        component: () => import("@/views/PersonInfos/vip/grade")
      }, {
        path: 'integral_change',
        name: 'integral_change',
        component: () => import("@/views/PersonInfos/vip/integral_change")
      },
      // 通知管理
      {
        path: 'notesubscribe',
        name: 'notesubscribe',
        component: () => import("@/views/notemanage/notesubscribe")
      }, {
        path: 'notice_show',
        name: 'notice_show',
        component: () => import("@/views/notemanage/notice_show")
      }, {
        path: 'regime',
        name: 'regime',
        component: () => import("@/views/notemanage/regime")
      }, {
        path: 'promote_regime',
        name: 'promote_regime',
        component: () => import("@/views/notemanage/promote_regime")
      },
      // 商品管理
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import("@/views/ProductsManage/productlist")
      },{
        path: 'productcombo',
        name: 'productcombo',
        component: () => import("@/views/ProductsManage/productcombo")
      },{
        path: 'inventoryincom',
        name: 'inventoryincom',
        component: () => import("@/views/ProductsManage/KuCun/inventoryincom")
      },{
        path: 'inventorydelivery',
        name: 'inventorydelivery',
        component: () => import("@/views/ProductsManage/KuCun/inventorydelivery")
      },{
        path: 'inventorycheck',
        name: 'inventorycheck',
        component: () => import("@/views/ProductsManage/KuCun/inventorycheck")
      },{
        path: 'inventorysupplier',
        name: 'inventorysupplier',
        component: () => import("@/views/ProductsManage/KuCun/inventorysupplier")
      },
      // 预约管理
      {
        path: 'hair_cut',
        name: 'hair_cut',
        component: () => import("@/views/BookingManage/hair_cut")
      },
      // 投诉
      {
        path: 'evaluation',
        name: 'evaluation',
        component: () => import("@/views/Evaluation/evaluation")
      },{
        path: 'complain',
        name: 'complain',
        component: () => import("@/views/Evaluation/complain")
      }
    ]
  },

]
export default new Router({
  routes,
  mode: 'history'
})
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
