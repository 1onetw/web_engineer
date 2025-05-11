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
              <router-link to="/emp"><el-link :underline="false">
                  <i class="el-icon-menu" style="line-height: 50px;"></i>
                  员工管理
                </el-link></router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/dept"><el-link :underline="false">
                  <i class="el-icon-user-solid" style="line-height: 50px;"></i>
                  部门管理
                </el-link></router-link>
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
          <el-breadcrumb-item style="font-size: 14px; line-height: 50px;">员工管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <!-- 新增员工表单对话框 -->
        <el-button type="text" @click="dialogFormVisible = true">新增员工</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 表格 -->
        <template>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border>
            <el-table-column type="selection" width="75">
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center" width="150">
            </el-table-column>
            <el-table-column prop="username" label="用户名" align="center" width="200">
            </el-table-column>
            <el-table-column prop="gender" label="性别" align="center" width="150">
            </el-table-column>
            <el-table-column prop="job" label="职位" align="center" width="150">
            </el-table-column>
            <el-table-column prop="entrydate" label="入职日期" align="center" width="260">
            </el-table-column>
            <el-table-column prop="updateTime" label="最后操作时间" align="center" width="260">
            </el-table-column>
            <el-table-column label="操作" align="center" width="253">
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
        dialogFormVisible: false, // 控制表单显示的变量
        formLabelWidth: '120px',
        tableData: [
          {
            "name":"Lun"
          }
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      };
    },
    methods: {
      handleEdit(index, row) {
        // 编辑操作逻辑
      },
      handleDelete(index, row) {
        // 删除操作逻辑
      },
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

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #fff;
    border-color: #DCDFE6;
    cursor: not-allowed;
    margin-left: 20px;
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #FFF;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    margin-left: 20px;
}
</style>