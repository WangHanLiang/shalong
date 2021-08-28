<template>
  <!-- 预约时间、美发师、中意发型、发型要求 -->
  <div>
    <el-row :gutter="80">
      <el-col :span="6" :offset="6">
        <div class="grid-content">
          <h4 class="inline">预约日期：</h4>
          <el-date-picker type="date" placeholder="请选择剪发日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <h4 class="inline">预约时间：</h4>
          <el-time-select
            v-model="value"
            size="large"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="请选择剪发时间"
          >
          </el-time-select>
        </div>
      </el-col>
    </el-row>
    <!-- 发型要求 -->
    <el-row type="flex" class="row-bg">
      <el-col :span="2" :offset="6">
        <div class="grid-content hairrequire">
          <h4>发型要求：</h4>
        </div>
      </el-col>
      <el-col :span="10" class="requireconent">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请对期待的发型进行细致描述"
        >
        </el-input>
      </el-col>
    </el-row>
    <!--类似发型  -->
    <el-row :gutter="20">
      <el-col :span="2" :offset="6" class="simihair"
        ><div class="grid-content">
          <h4 class="hair4">类似发型：</h4>
        </div>
      </el-col>
      <el-col :span="9" class="colnine"
        ><div class="grid-content">
          <el-input
            placeholder="请上传与目标发型类似的发型图片(仅支持.jpg或.png格式)"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="1" class="colbutton"
        ><div class="grid-content">
          <el-button type="primary">选择</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 预约发型师 -->
    <el-row>
      <el-col :span="2" :offset="3"
        ><div class="grid-content">
          <h4>选择发型师：</h4>
        </div></el-col
      >
      <el-col :span="3">
        <el-card shadow="always" class="box-card">
          <div class="imgdiv">
            <img
              style="height: 90%"
              src="~assets/pics/haircuter1.jpg"
              class="image"
            />
          </div>
          <div class="bottom clearfix">
            <el-radio v-model="radio" label="1">选定</el-radio>
            <span class="button">详情</span>
            <i class="el-icon-d-arrow-right" style="color: rgb(0, 0, 255)"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="always" class="box-card">
          <div class="imgdiv">
            <img
              style="height: 90%"
              src="~assets/pics/haircuter2.jpg"
              class="image"
            />
          </div>
          <div class="bottom clearfix">
            <el-radio v-model="radio" label="2">选定</el-radio>
            <span class="button">详情</span>
            <i class="el-icon-d-arrow-right" style="color: rgb(0, 0, 255)"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="always" class="box-card">
          <div class="imgdiv">
            <img
              style="height: 90%"
              src="~assets/pics/haircuter3.jpg"
              class="image"
            />
          </div>
          <div class="bottom clearfix">
            <el-radio v-model="radio" label="2">选定</el-radio>
            <span class="button">详情</span>
            <i class="el-icon-d-arrow-right" style="color: rgb(0, 0, 255)"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="always" class="box-card">
          <div class="imgdiv">
            <img
              style="height: 90%"
              src="~assets/pics/haircuter4.jpg"
              class="image"
            />
          </div>
          <div class="bottom clearfix">
            <el-radio v-model="radio" label="2">选定</el-radio>
            <span class="button">详情</span>
            <i class="el-icon-d-arrow-right" style="color: rgb(0, 0, 255)"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="always" class="box-card">
          <div class="imgdiv">
            <img
              style="height: 90%"
              src="~assets/pics/haircuter5.jpg"
              class="image"
            />
          </div>
          <div class="bottom clearfix">
            <el-radio v-model="radio" label="2">选定</el-radio>
            <span class="button">详情</span>
            <i class="el-icon-d-arrow-right" style="color: rgb(0, 0, 255)"></i>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <el-row style="height: 20px">
      <el-pagination background layout="prev, pager, next" :total="30">
      </el-pagination>
    </el-row>
    <el-row style="height: 20px;margin-top: 50px;">
      <el-button type="warning" round>取消预约</el-button>
      <el-button type="success" round>提交预约</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "hair_cut",
  data() {
    return {
      value: "",
      radio: "1",
    };
  },
};
</script>

<style scoped>
img {
  width: 95%;
}
.box-card {
  height: 100%;
  background-color: rgb(163, 235, 121);
}
.imgdiv {
  margin: -10px;
  height: 180px;
}
.button {
  font-size: 80%;
  color: rgb(0, 0, 255);
}
.bottom {
  margin-top: 0px;
  line-height: 10%;
  text-align: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-row {
  margin-bottom: 20px;
}
.inline {
  display: inline;
}
.coldate {
  text-align: right;
}
.coltime {
  text-align: left;
}

.hair4 {
  padding-left: 10px;
  margin-top: 10px;
}
.requireconent {
  margin-left: -15px;
  margin-top: -30px;
  width: 615px;
}
.grid-content {
  height: 90px;
  border-radius: 4px;
}
.colnine {
  margin-left: -20px;
  width: 36%;
}
.colbutton {
  margin-left: -10px;
}
</style>
