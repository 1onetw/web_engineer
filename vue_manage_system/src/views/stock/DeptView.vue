<template>
  <el-container>
    <el-aside width="230px" style="border: 1px solid #eee; background-color: #545c64;">
      <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="aliceblue"
        active-text-color="dodgerblue">
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title" style="font-weight: bold;">tilas智能学习辅助系统</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>系统信息管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/emp">
                <el-link :underline="false">
                  <i class="el-icon-menu" style="line-height: 50px;"></i>
                  员工管理
                </el-link>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/dept">
                <el-link :underline="false">
                  <i class="el-icon-user-solid" style="line-height: 50px;"></i>
                  部门管理
                </el-link>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container style="height: 900px; border: 1px solid #eee">
      <el-header style="height: 60px; border:1px solid #eee; display: flex;">
        <i class="el-icon-s-unfold" style="line-height: 50px; margin-right: 15px; margin-left: 15px;"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/emp' }" style="font-size: 14px; line-height: 50px;">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/emp" style="font-size: 14px; line-height: 50px;">系统信息管理</a></el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 14px; line-height: 50px;">部门管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <!-- 新增部门 -->
        <el-button type="primary" style="text-align: center; margin-left: 1400px; margin-bottom: 30px">新增部门</el-button>
        <!-- 表格 -->
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="序号" align="center" width="200">
            </el-table-column>
            <el-table-column prop="name" label="部门名称" align="center" width="425">
            </el-table-column>
            <el-table-column prop="updateTime" label="最后操作时间" align="center" width="425">
            </el-table-column>
            <el-table-column label="操作" align="center" width="448">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <br />
      </el-main>
    </el-container>
  </el-container>
</template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        tableData: [
          {
            "name": "学工部"
          }
        ]
      };
    },
    methods: {
      
    },
    mounted() {
      //发送异步请求，获取数据
    //   axios.post("请求地址").then((result) => {
    //     this.tableData = result.data.data;
    //   });
    },
  };
  </script>
  
  <style>
  .el-aside {
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 75px;
  }

  /* 导航栏的小分组是否隐藏 */
  .el-menu-item-group__title {
      display: none;
    }

  .el-link.el-link--default {
    color: aliceblue;
  }

</style>