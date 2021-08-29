<template>
  <div>
    <!-- 基本信息 -->
    <el-row>
      <el-col :span="24" class="baseinfo"
        ><div class="content">
          <span style="color: #21ca65">基本信息</span>
        </div></el-col
      >
    </el-row>
    <!-- 表单和照片 -->
    <el-row>
      <el-col :span="20">
        <!-- 表单 -->
        <el-form ref="form" :model="form" label-width="80px">
          <!-- 卡号手机 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="会员卡号" :required="true">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员卡号"
                  ></el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="会员手机" :required="true">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员的手机号码"
                  ></el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 姓名等级 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="会员姓名" :required="true">
                  <el-input
                    placeholder="请输入会员姓名"
                    class="input-with-select"
                  >
                    <el-select v-model="select" slot="append" class="elselect">
                      <el-option label="男士" value="1"></el-option>
                      <el-option label="女士" value="2"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="会员等级" :required="true">
                  <el-select
                    v-model="form.region"
                    placeholder="请选择会员等级"
                    class="rankselect"
                  >
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 密码 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="初始密码" :required="true">
                  <el-input
                    placeholder="密码不小于8位，由大小写字母、数字和字符组成"
                    class="input-with-select"
                  >
                  </el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="确认密码" :required="true">
                  <el-input
                    placeholder="请再次输入密码"
                    class="input-with-select"
                  >
                  </el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 金额与积分 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="初始金额">
                  <el-input placeholder="请输入初始金额" v-model="input2">
                    <template slot="append">元</template>
                  </el-input>
                </el-form-item>
              </div></el-col
            >
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="初始积分">
                  <el-input placeholder="请输入初始积分" v-model="input2">
                    <template slot="append">分</template>
                  </el-input>
                </el-form-item>
              </div></el-col
            >
          </el-row>
          <!-- 开卡费用与日期 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="开卡费用">
                  <el-input placeholder="0" class="input-with-select">
                    <el-select
                      v-model="select"
                      slot="append"
                      class="moneyselect"
                    >
                      <el-option label="微信记账" value="1"></el-option>
                      <el-option label="女士" value="2"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="开卡日期">
                  <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择开卡的日期时间"
                    class="dateselect"
                  >
                  </el-date-picker>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 邮箱身份证号 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="电子邮箱">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员的电子邮箱"
                  ></el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="身份证号">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员身份证号"
                  ></el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 联系电话与地址 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="联系电话">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员联系电话"
                  ></el-input>
                </el-form-item></div
            ></el-col>
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="联系地址">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入会员联系地址"
                  ></el-input>
                </el-form-item></div
            ></el-col>
          </el-row>
          <!-- 开卡人员、备注信息 -->
          <el-row>
            <el-col :span="10" :offset="1"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="开卡人员">
                  <el-input :disabled="true"
                    ><el-button
                      style="padding-right: 10px"
                      slot="suffix"
                      type="text"
                      >选择</el-button
                    ></el-input
                  >
                </el-form-item>
              </div></el-col
            >
            <el-col :span="10" :offset="2"
              ><div class="grid-content bg-purple-light">
                <el-form-item label="备注信息">
                  <el-input
                    v-model="form.name"
                    placeholder="添加备注"
                  ></el-input>
                </el-form-item></div
            ></el-col>
          </el-row> </el-form
      ></el-col>
      <!-- 照片 -->
      <el-col :span="4">
        <div class="demo-image__placeholder">
          <div class="block">
            <img
              src="~assets/pics/匿名头像.jpeg"
              alt=""
              style="width: 200px; height: 250px"
            />
            <el-button type="success">点击上传图片 </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 下方按钮 -->
    <el-row class="button">
      <el-col :span="24"
        ><div class="grid-content">
          <el-button type="info">取消</el-button>
          <el-button type="success">保存</el-button>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vipincrease",
  data() {
    return {
      form: {
        name: "",
      },
      input1: "1",
      input2: "",
      value1: "",
      select: "1",
      src: "~assets/pics/匿名头像.jpeg",
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
.content {
  border-style: solid;
  border-width: 5px;
  border-color: #cbeb6c;
  border-radius: 4px;
  min-height: 36px;
  background: #ecfcf1;
  padding-left: 10px;
  padding-top: 15px;
}
.baseinfo {
  text-align: left;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.elselect {
  width: 100px;
}
.rankselect,
.dateselect {
  width: 100%;
}
.moneyselect {
  width: 120px;
}
.block {
  margin-top: 50%;
}
.primaryBtn {
}
</style>
