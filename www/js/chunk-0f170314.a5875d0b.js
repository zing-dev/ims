(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f170314"],{"781b":function(t,e,i){},"7f7f":function(t,e,i){var n=i("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,l="name";l in o||i("9e1e")&&n(o,l,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},a180:function(t,e,i){"use strict";var n=i("781b"),o=i.n(n);o.a},d888:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"resource"},[i("el-page-header",{attrs:{content:"文件中转"},on:{back:function(e){return t.$router.push("/")}}}),i("div",{staticClass:"actions"},[i("el-button",{attrs:{type:"primary"},on:{click:t.openDialog}},[t._v("上传文件")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"full-width",attrs:{data:t.rows,stripe:"",border:""}},[t._l(t.columns,(function(e,n){return i("el-table-column",{key:n,attrs:{prop:e.name,label:e.title,width:e.width,"min-width":e.minWidth,"show-overflow-tooltip":!0,fixed:e.fixed,sortable:""},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v("\n                "+t._s("alias"===e.name?t.aliasFilter(i.row[e.name]):e.format?e.format(i.row[e.name]):i.row[e.name])+"\n            ")]}}],null,!0)})})),i("el-table-column",{attrs:{label:"操作","min-width":"220",width:"240",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",title:"下载资源",type:"success",icon:"el-icon-download"},on:{click:function(i){return t.downloadItem(e.row)}}})]}}])})],2),i("div",{staticClass:"paging padding"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.filterList.length,"current-page":t.currentPage,"hide-on-single-page":!0},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),i("el-dialog",{attrs:{title:"上传文件",visible:t.dialogShow,width:"450px","modal-append-to-body":!1},on:{"update:visible":function(e){t.dialogShow=e},closed:function(e){t.dialogShow=!1}}},[i("el-form",{ref:"upgrade",attrs:{model:t.file,"label-width":"100px"}},[i("el-form-item",{attrs:{prop:"bin",label:"资源文件"},nativeOn:{click:function(e){return t.pickFile(e)}}},[i("el-input",{attrs:{placeholder:"点击选择一个文件",disabled:t.uploadProcessing},model:{value:t.file.bin,callback:function(e){t.$set(t.file,"bin",e)},expression:"file.bin"}}),i("div",{staticClass:"file-field"},[i("input",{ref:"file_field",attrs:{type:"file"},on:{change:t.setFile}})])],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogShow=!1}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary",size:"small",loading:t.uploadProcessing},on:{click:t.submit}},[t._v(t._s(t.uploadProcessing?"提交中...":"保存"))])],1)],1)],1)},o=[],a=(i("7f7f"),i("6b6c")),l=(i("a74e"),i("b5ad")),s=[{title:"文件名称",name:"name"},{title:"创建时间",name:"time"}],r={data:function(){return{columns:s,loading:!1,dialogShow:!1,currentPage:1,bin:null,file:{bin:""},filterList:[],uploadProcessing:!1}},methods:{openDialog:function(){this.dialogShow=!0,this.bin&&(this.$refs.file_field.value="",this.bin=null,this.file.bin=""),console.log()},listResource:function(){var t=this;this.loading=!0,a["k"]({success:function(e){var i=[];if(e)for(var n in e)i.push(e[n]);else t.list=[];t.filterList=i.length?i.map((function(t){var e=t.key,i=t.name,n=t.time;return{key:e,name:i,time:Object(l["a"])(n)}})):[],t.loading=!1},fail:function(e){t.$message.error("获取资源列表失败, "+e),t.loading=!1}})},pickFile:function(t){var e=this.$refs.file_field;e.click(),setTimeout((function(){t.target.blur()}),100)},setFile:function(t){var e=t.target.files;e.length>0?(this.bin=e[0],this.file.bin=e[0].name):this.bin=null},downloadItem:function(t){var e=t.key;window.location.href=a["l"]()+"tmp/download?key=".concat(e)},submit:function(){var t=this;if(this.bin){this.uploadProcessing=!0;var e=new FormData;e.append("file",this.bin),a["j"](e,{success:function(e){t.dialogShow=!1,t.listResource(),t.uploadProcessing=!1},fail:function(e){t.$message.error("上传失败, "+e),t.uploadProcessing=!1}})}}},computed:{rows:function(){var t=10*(this.currentPage-1);return this.filterList.slice(t,t+10)}},mounted:function(){this.listResource()}},c=r,u=(i("a180"),i("2877")),f=Object(u["a"])(c,n,o,!1,null,"41453638",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-0f170314.a5875d0b.js.map