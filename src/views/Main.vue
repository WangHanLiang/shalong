<template>
  <div>
    <el-container>
      <el-header style="height: 80px">
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <!-- 左侧 -->
              <div class="left">
                <el-breadcrumb
                  style="font-size: 20px; color: floralwhite"
                  separator-class="el-icon-arrow-right"
                >
                  <el-breadcrumb-item style="color: floralwhite"
                    >首页</el-breadcrumb-item
                  >
                  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <!-- 右侧4个 -->
              <div style="float: right; padding-top: 10px">
                <div style="display: inline">
                  <img
                    class="img1"
                    src="../icons/message.png"
                    alt="Klematis"
                    width="40"
                    height="40"
                  />
                  <span class="span1">信息</span>
                </div>

                <div style="display: inline">
                  <img
                    class="img2"
                    src="../icons/shop.png"
                    alt="Klematis"
                    width="40"
                    height="40"
                  />
                  <span class="span2">商城</span>
                </div>
                <div style="display: inline">
                  <img
                    class="img3"
                    src="../icons/sport.png"
                    alt="Klematis"
                    width="30"
                    height="30"
                  />
                  <span class="span3">活动</span>
                </div>
                <div style="display: inline">
                  <img
                    class="img4"
                    src="../icons/person.png"
                    alt="Klematis"
                    width="40"
                    height="40"
                  />
                  <span class="span4">个人中心</span>
                </div>
              </div>
            </div></el-col
          >
        </el-row>
      </el-header>
    </el-container>

    <el-container>
      <!-- 测控栏 -->
      <el-aside>
        <!-- 导航栏 -->
        <el-menu
          :default-active="$route.path"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- 风貌 -->
          <el-submenu index="storestyle">
            <template slot="title">
              <img src="../icons/店内风貌.png" style="width: 20px" alt="" />
              <span>店内风貌</span>
            </template>
            <div style="padding-left: 40px">
              <el-menu-item index="clerl">店员面貌</el-menu-item>
              <el-menu-item index="work_show">作品展示</el-menu-item>
              <el-menu-item index="combo">套餐一览</el-menu-item>
            </div>
          </el-submenu>

          <!-- 人员信息管理 -->
          <el-submenu index="person/info">
            <template slot="title">
              <img src="../icons/员工展示.png" style="width: 20px" alt="" />
              <span>人员信息管理</span>
            </template>
            <el-submenu style="padding-left: 40px" index="person/info/insider">
              <template slot="title">店内人员管理</template>
              <el-menu-item index="insidepersonmanage">人员管理</el-menu-item>
              <el-menu-item index="promote">晋升智能分析</el-menu-item>
            </el-submenu>
            <el-submenu
              style="padding-left: 40px"
              index="person_info/vip_manage"
            >
              <template slot="title">会员管理</template>
              <el-menu-item index="vipincrease">新增会员</el-menu-item>
              <el-menu-item index="member_list">会员列表</el-menu-item>
              <el-menu-item index="grade">会员等级</el-menu-item>
              <el-menu-item index="integral_change">积分变动</el-menu-item>
            </el-submenu>
          </el-submenu>

          <!-- 通知管理 -->
          <el-submenu index="person_info/note_manage">
            <template slot="title">
              <img src="../icons/通知管理.png" style="width: 20px" alt="" />
              <span>通知管理</span>
            </template>
            <div style="padding-left: 40px">
              <el-menu-item index="notesubscribe">预约通知</el-menu-item>
              <el-menu-item index="notice_show">公告展示</el-menu-item>
              <el-menu-item index="regime">店内制度</el-menu-item>
              <el-menu-item index="promote_regime">晋升制度</el-menu-item>
            </div>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="product">
            <template slot="title">
              <img src="../icons/商品管理.png" style="width: 20px" alt="" />
              <span>商品管理</span>
            </template>
            <div style="padding-left: 40px">
              <el-menu-item index="productlist">商品列表</el-menu-item>
              <el-menu-item index="productcombo">商品套餐</el-menu-item>
              <el-submenu index="product/inventory">
                <template slot="title">库存管理</template>
                <el-menu-item index="inventoryincom">商品入库</el-menu-item>
                <el-menu-item index="inventorydelivery">商品出库</el-menu-item>
                <el-menu-item index="inventorycheck">库存盘点</el-menu-item>
                <el-menu-item index="inventorysupplier"
                  >供应商管理</el-menu-item
                >
              </el-submenu>
            </div>
          </el-submenu>
          <!-- 预约管理 -->
          <el-submenu index="subscribe">
            <template slot="title">
              <img src="../icons/预约.png" style="width: 20px" alt="" />
              <span>预约管理</span>
            </template>
            <div style="padding-left: 40px">
              <el-menu-item index="hair_cut">美发预约</el-menu-item>
            </div>
          </el-submenu>
          <!-- 评价投诉 -->
          <el-submenu index="aftersale">
            <template slot="title">
              <img src="../icons/投诉.png" style="width: 20px" alt="" />
              <span>评价与投诉</span>
            </template>
            <div style="padding-left: 40px">
              <el-menu-item index="evaluation">服务点评</el-menu-item>
              <el-menu-item index="complain">服务投诉</el-menu-item>
            </div>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-card class="box-card">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  render: function (h) {
    return h();
  },

  name: "Main",
  data() {
    return {
      index: null,
    };
  },
  components: {},
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style scope>
.box-card {
  height: 100%;
  background-color: rgb(197, 165, 99);
}
.left {
  padding-top: 45px;
}
/* 信息 */
.img1 {
  position: absolute;
  right: 202px;
}
.span1 {
  position: absolute;
  display: block;
  top: 30px;
  right: 206px;
}
/* 商城 */
.img2 {
  position: absolute;
  right: 146px;
}
.span2 {
  position: absolute;
  display: block;
  top: 30px;
  right: 150px;
}
/* 活动 */
.img3 {
  position: absolute;
  right: 100px;
  top: 15px;
}
.span3 {
  position: absolute;
  display: block;
  top: 30px;
  right: 100px;
}
/* 个人中心 */
.img4 {
  position: absolute;
  right: 30px;
}
.span4 {
  position: absolute;
  display: block;
  top: 30px;
  right: 20px;
}

.el-header {
  background-color: rgb(33, 202, 101);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  color: #333;
  text-align: left;
  line-height: 200px;
  width: 300px;
}

.el-main {
  text-align: center;
  height: 850px;
}
.menuitem {
  padding-left: 50px;
}
</style>
