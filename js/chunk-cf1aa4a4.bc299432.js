(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf1aa4a4"],{"0911":function(e,r,t){"use strict";t("e3d7")},"56b4":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_form"},[t("el-form",{ref:"loginFormRef",attrs:{rules:e.rules,model:e.model},nativeOn:{submit:function(r){return r.preventDefault(),e.register.apply(null,arguments)}}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入用户名",clearable:""},model:{value:e.model.username,callback:function(r){e.$set(e.model,"username",r)},expression:"model.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码",type:"password","show-password":"",clearable:""},model:{value:e.model.password,callback:function(r){e.$set(e.model,"password",r)},expression:"model.password"}})],1),t("el-form-item",{staticClass:"el-submit"},[t("el-button",{attrs:{type:"primary","native-type":"submit",size:"medium"}},[e._v("立即注册")]),t("el-button",{staticClass:"button_right",attrs:{size:"medium"},on:{click:e.resetForm}},[e._v("重置")]),t("p",{staticClass:"notice"},[e._v("已有账号？"),t("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)],1)],1)},a=[],n=t("1da1"),o=(t("96cf"),{name:"Register",data:function(){return{rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度在 1 到 15 个字符,只能是字母数字下划线中文",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 16 个任意字符",trigger:"blur"}]},model:{username:"",password:""}}},methods:{register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("toRegister",e.model);case 2:if(t=r.sent,"ok"!==t.status){r.next=9;break}return e.$message({type:"success",message:t.msg}),r.next=7,e.$router.push({path:"/"});case 7:r.next=10;break;case 9:e.$message({type:"error",message:t.msg});case 10:case"end":return r.stop()}}),r)})))()},resetForm:function(){this.$refs.loginFormRef.resetFields()}}}),i=o,l=(t("0911"),t("2877")),u=Object(l["a"])(i,s,a,!1,null,"004c7ca5",null);r["default"]=u.exports},e3d7:function(e,r,t){}}]);
//# sourceMappingURL=chunk-cf1aa4a4.bc299432.js.map