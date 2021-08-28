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
    <!-- 表单 -->
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 卡号手机 -->
      <el-row>
        <el-col :span="7"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="会员卡号" :required="true">
              <el-input v-model="form.name"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="7" :offset="1"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="会员手机" :required="true">
              <el-input v-model="form.name"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>
      <!-- 姓名等级 -->
      <el-row>
        <el-col :span="7"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="会员姓名" :required="true">
              <el-input
                placeholder="请输入会员姓名"           
                class="input-with-select"
              >
                <el-select v-model="select" slot="append">
                  <el-option label="男士" value="1"></el-option>
                  <el-option label="女士" value="2"></el-option>
                </el-select>
              </el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="7" :offset="1"
          ><div class="grid-content bg-purple-light">
            <el-form-item label="会员手机" :required="true">
              <el-input v-model="form.name"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>
    </el-form>
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
      select: "1",
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
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
.input-with-select .el-input-group__append {
  background-color: rgb(190, 38, 38);
}
</style>
