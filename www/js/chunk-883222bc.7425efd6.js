(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-883222bc"],{"02ef":function(e,t,r){},"02f4":function(e,t,r){var n=r("4588"),i=r("be13");e.exports=function(e){return function(t,r){var o,a,s=String(i(t)),c=n(r),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"0d85":function(e,t,r){"use strict";var n=r("02ef"),i=r.n(n);i.a},"11e9":function(e,t,r){var n=r("52a7"),i=r("4630"),o=r("6821"),a=r("6a99"),s=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=o(e),t=a(t,!0),c)try{return l(e,t)}catch(r){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},"1af6":function(e,t,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),o=r("79e5"),a=r("be13"),s=r("2b4c"),c=r("520a"),l=s("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=s(e),p=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),g=p?!o((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[f](""),!t})):void 0;if(!p||!g||"replace"===e&&!u||"split"===e&&!d){var v=/./[f],h=r(a,f,""[e],(function(e,t,r,n,i){return t.exec===c?p&&!i?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),m=h[0],b=h[1];n(String.prototype,e,m),i(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),i=r("cb7c"),o=r("ebd6"),a=r("0390"),s=r("9def"),c=r("5f1b"),l=r("520a"),u=r("79e5"),d=Math.min,f=[].push,p="split",g="length",v="lastIndex",h=4294967295,m=!u((function(){RegExp(h,"y")}));r("214f")("split",2,(function(e,t,r,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[g]||2!="ab"[p](/(?:ab)*/)[g]||4!="."[p](/(.?)(.?)/)[g]||"."[p](/()()/)[g]>1||""[p](/.?/)[g]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(i,e,t);var o,a,s,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=void 0===t?h:t>>>0,m=new RegExp(e.source,u+"g");while(o=l.call(m,i)){if(a=m[v],a>d&&(c.push(i.slice(d,o.index)),o[g]>1&&o.index<i[g]&&f.apply(c,o.slice(1)),s=o[0][g],d=a,c[g]>=p))break;m[v]===o.index&&m[v]++}return d===i[g]?!s&&m.test("")||c.push(""):c.push(i.slice(d)),c[g]>p?c.slice(0,p):c}:"0"[p](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):b.call(String(i),r,n)},function(e,t){var n=u(b,e,this,t,b!==r);if(n.done)return n.value;var l=i(e),f=String(this),p=o(l,RegExp),g=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),y=new p(m?l:"^(?:"+l.source+")",v),w=void 0===t?h:t>>>0;if(0===w)return[];if(0===f.length)return null===c(y,f)?[f]:[];var x=0,j=0,k=[];while(j<f.length){y.lastIndex=m?j:0;var O,L=c(y,m?f:f.slice(j));if(null===L||(O=d(s(y.lastIndex+(m?0:j)),f.length))===x)j=a(f,j,g);else{if(k.push(f.slice(x,j)),k.length===w)return k;for(var P=1;P<=L.length-1;P++)if(k.push(L[P]),k.length===w)return k;j=x=O}}return k.push(f.slice(x)),k}]}))},"40c3":function(e,t,r){var n=r("6b4c"),i=r("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=a(t=Object(e),i))?r:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},"454f":function(e,t,r){r("46a7");var n=r("584a").Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},"456d":function(e,t,r){var n=r("4bf8"),i=r("0d58");r("5eda")("keys",(function(){return function(e){return i(n(e))}}))},"469f":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("7d7b")},"46a7":function(e,t,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"46ee":function(e,t,r){"use strict";var n=r("6d2d"),i=r.n(n);i.a},"520a":function(e,t,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(a=function(e){var t,r,a,u,d=this;return l&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),c&&(t=d[s]),a=i.call(d,e),c&&a&&(d[s]=d.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a}),e.exports=a},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},"5d73":function(e,t,r){e.exports=r("469f")},"5eda":function(e,t,r){var n=r("5ca1"),i=r("8378"),o=r("79e5");e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*o((function(){r(1)})),"Object",a)}},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"6d2d":function(e,t,r){},"6d34":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"data-filter",style:{width:e.wrapWidth+"px"}},[e._t("default"),r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入关键词"},model:{value:e.filter.keyword,callback:function(t){e.$set(e.filter,"keyword",t)},expression:"filter.keyword"}},[r("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.filter.type,callback:function(t){e.$set(e.filter,"type",t)},expression:"filter.type"}},[r("el-option",{attrs:{label:"标题",value:0}}),r("el-option",{attrs:{label:"描述",value:1}})],1),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.onSubmit},slot:"append"})],1)],2)},i=[],o={data:function(){return{filter:{type:0,keyword:""}}},methods:{onSubmit:function(){this.$emit("filter",this.filter)}},computed:{wrapWidth:function(){return this.$slots.default?520:350}}},a=o,s=(r("c317"),r("0d85"),r("2877")),c=Object(s["a"])(a,n,i,!1,null,"2a75b48c",null);t["a"]=c.exports},"768b":function(e,t,r){"use strict";var n=r("a745"),i=r.n(n);function o(e){if(i()(e))return e}var a=r("5d73"),s=r.n(a),c=r("c8bb"),l=r.n(c);function u(e,t){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,c=s()(e);!(n=(a=c.next()).done);n=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){i=!0,o=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(i)throw o}}return r}}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(e,t){return o(e)||u(e,t)||d()}r.d(t,"a",(function(){return f}))},"7cd6":function(e,t,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");e.exports=r("584a").getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},"7d7b":function(e,t,r){var n=r("e4ae"),i=r("7cd6");e.exports=r("584a").getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},"7f7f":function(e,t,r){var n=r("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||r("9e1e")&&n(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"85f2":function(e,t,r){e.exports=r("454f")},"8e6e":function(e,t,r){var n=r("5ca1"),i=r("990b"),o=r("6821"),a=r("11e9"),s=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){var t,r,n=o(e),c=a.f,l=i(n),u={},d=0;while(l.length>d)r=c(n,t=l[d++]),void 0!==r&&s(u,t,r);return u}})},9093:function(e,t,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},"95d5":function(e,t,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(n(t))}},"990b":function(e,t,r){var n=r("9093"),i=r("2621"),o=r("cb7c"),a=r("7726").Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(o(e)),r=i.f;return r?t.concat(r(e)):t}},a745:function(e,t,r){e.exports=r("f410")},aae3:function(e,t,r){var n=r("d3f4"),i=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},ac6a:function(e,t,r){for(var n=r("cadf"),i=r("0d58"),o=r("2aba"),a=r("7726"),s=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(p),v=0;v<g.length;v++){var h,m=g[v],b=p[m],y=a[m],w=y&&y.prototype;if(w&&(w[u]||s(w,u,f),w[d]||s(w,d,m),c[m]=f,b))for(h in n)w[h]||o(w,h,n[h],!0)}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"project"},[r("div",{staticClass:"actions"},[r("el-button",{attrs:{type:"success",icon:"el-icon-folder-add"},on:{click:e.addItem}},[e._v("添加项目")]),r("DataFilter",{on:{filter:e.filterData}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"full-width",attrs:{data:e.rows,stripe:"",border:""}},[e._l(e.columns,(function(t,n){return r("el-table-column",{key:n,attrs:{prop:t.name,label:t.title,width:t.width,"show-overflow-tooltip":!0,sortable:""},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v("\n                "+e._s(t.formatter?t.formatter(r.row[t.name]):r.row[t.name])+"\n            ")]}}],null,!0)})})),r("el-table-column",{attrs:{label:"操作","min-width":"220",width:"250",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",title:"版本更新",icon:"el-icon-upload"},on:{click:function(r){return e.publish(t.row)}}}),r("el-button",{attrs:{size:"mini",type:"warning",title:"项目编辑",icon:"el-icon-edit"},on:{click:function(r){return e.editItem(t.row)}}}),r("el-button",{attrs:{size:"mini",title:"下载资源",type:"success",icon:"el-icon-download"},on:{click:function(r){return e.downloadItem(t.row)}}}),r("el-button",{attrs:{size:"mini",type:"danger",title:"项目删除",icon:"el-icon-delete"},on:{click:function(r){return e.removeItem(t.row)}}})]}}])})],2),r("div",{staticClass:"paging padding"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.filterList.length,"current-page":e.currentPage,"hide-on-single-page":!0},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addFileDialog,width:"450px","modal-append-to-body":!1},on:{"update:visible":function(t){e.addFileDialog=t},closed:function(t){return e.cancel(t,"form")}}},[r("el-form",{ref:"form",attrs:{model:e.proj,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"name",label:"项目名称"}},[r("el-input",{attrs:{placeholder:"请输项目名称"},model:{value:e.proj.name,callback:function(t){e.$set(e.proj,"name",t)},expression:"proj.name"}})],1),r("el-form-item",{attrs:{prop:"desc",label:"项目描述"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入项目描述",rows:5,maxlength:"400","show-word-limit":""},model:{value:e.proj.desc,callback:function(t){e.$set(e.proj,"desc",t)},expression:"proj.desc"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.addFileDialog=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.submit("form")}}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.upgradeDialog,width:"600px","modal-append-to-body":!1},on:{"update:visible":function(t){e.upgradeDialog=t},closed:function(t){return e.cancel(t,"upgrade")}}},[r("el-form",{ref:"upgrade",attrs:{model:e.upgrade,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"version",label:"项目版本"}},[r("el-input",{attrs:{placeholder:"当前版本"+e.tmp.version},model:{value:e.upgrade.version,callback:function(t){e.$set(e.upgrade,"version",t)},expression:"upgrade.version"}})],1),r("el-form-item",{attrs:{prop:"rh_ids",label:"绑定资源"}},[r("el-row",{attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"请选择分类"},on:{change:e.listResource},model:{value:e.selected.alias,callback:function(t){e.$set(e.selected,"alias",t)},expression:"selected.alias"}},e._l(e.aliasList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-col",{attrs:{span:7}},[r("el-select",{attrs:{placeholder:"请选择资源"},on:{change:e.listHistory},model:{value:e.selected.id,callback:function(t){e.$set(e.selected,"id",t)},expression:"selected.id"}},e._l(e.resourcesList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-col",{attrs:{span:9}},[r("el-select",{attrs:{"collapse-tags":"",placeholder:"请选择版本"},on:{change:e.pickItem},model:{value:e.selected.version,callback:function(t){e.$set(e.selected,"version",t)},expression:"selected.version"}},e._l(e.versions,(function(e,t){return r("el-option",{key:t,attrs:{disabled:e.disabled,label:e.version,value:e.id}})})),1)],1)],1),r("div",{staticClass:"selected"},[e.pickedItems.length>0?e._l(e.pickedItems,(function(t){return r("el-tooltip",{key:t.id,attrs:{content:"更新日志："+(t.log||"暂无"),placement:"right-start"}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removePickedItem(t.id)}}},[e._v("\n                                "+e._s(t.name)+" "+e._s(t.version)+"\n                            ")])],1)})):r("p",{style:{color:"#aaa"}},[e._v("暂无绑定的资源")])],2)],1),r("el-form-item",{attrs:{prop:"log",label:"更新日志"}},[r("el-input",{attrs:{type:"textarea",placeholder:e.tmp.log},model:{value:e.upgrade.log,callback:function(t){e.$set(e.upgrade,"log",t)},expression:"upgrade.log"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.upgradeDialog=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",size:"small",loading:e.uploadProcessing},on:{click:function(t){return e.submit("upgrade")}}},[e._v(e._s(e.uploadProcessing?"提交中":"确定"))])],1)],1)],1)},i=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=(r("7f7f"),r("28a5"),r("768b")),s=r("6b6c"),c=r("a74e"),l=r("f940"),u=r("b5ad"),d=[{title:"项目名称",width:180,minWidth:120,name:"name"},{title:"项目描述",minWidth:150,name:"desc"},{title:"更新日志",minWidth:150,name:"log",formatter:function(e){return""===e?"暂无":e}},{title:"版本",width:120,minWidth:100,name:"version",formatter:function(e){return""===e?"未发布":e}},{title:"下载次数",width:120,name:"download"},{title:"创建时间",width:160,name:"created_at",formatter:function(e){return Object(u["a"])(e)}},{title:"更新时间",width:160,name:"updated_at",formatter:function(e){return Object(u["a"])(e)}}],f=r("6d34");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v="0.0.0",h={data:function(){return{columns:d,list:[],filterList:[],currentPage:1,aliasList:[],resourcesList:[],history:[],selected:{alias:"",id:"",version:""},isEdit:!1,dialogTitle:"",addFileDialog:!1,file:{id:"",name:"",desc:""},proj:{name:"",desc:""},rules:{name:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],desc:[{required:!0,message:"描述不能为空",trigger:"blur"}],version:[{required:!0,message:"资源版本不能为空",trigger:"blur"},{validator:function(e,t,r){var n=/^\d+\.\d+\.\d+$/;n.test(t)?r():r(new Error("请输入合法的版本号, 例如 x.x.x "))},trigger:"blur"},{validator:function(e,t,r){var n=t.split("."),i=Object(a["a"])(n,3),o=i[0],s=i[1],c=i[2],l=v.split("."),u=Object(a["a"])(l,3),d=u[0],f=u[1],p=u[2],g=function(e){return parseInt(e)};g(o)>g(d)||g(o)===g(d)&&g(s)>g(f)||g(o)===g(d)&&g(s)===g(f)&&g(c)>g(p)?r():r(new Error("发布的版本号不能低于当前版本号, 当前版本 "+v))},trigger:"blur"}],rh_ids:[{required:!0,message:"需要至少选择一个资源",trigger:"blur"}]},uploadProcessing:!1,loading:!1,upgrade:{project_id:"",version:"",rh_ids:"",log:""},tmp:{version:"",log:""},pickedItems:[],upgradeDialog:!1}},components:{DataFilter:f["a"]},methods:{listProjects:function(){var e=this;this.loading=!0,s["r"]({success:function(t){e.filterList=e.list=t||[],e.loading=!1},fail:function(t){e.$message.error("获取项目列表失败, "+t),e.loading=!1}})},listAlias:function(){var e=this;s["n"]({success:function(t){e.aliasList=t.resource_types?t.resource_types.map((function(e){return{id:e.id,name:e.name}})):[]},fail:function(t){e.$message.error("获取资源分类失败, "+t)}})},listResource:function(e){var t=this;this.selected.id="",this.selected.version="",s["s"]({resource_type:e},{success:function(e){t.resourcesList=e?e.map((function(e){var t=e.id,r=e.name;return{id:t,name:r}})):[]},fail:function(e){t.$message.error("获取资源列表失败, "+e)}})},listHistory:function(e){var t=this;this.selected.version="",s["p"]({resource_id:e},{success:function(e){t.history=e.resources},fail:function(e){t.$message.error(e)}})},projectDetail:function(e){var t=this,r={success:function(e){t.pickedItems=e.map((function(e){var t=e.id,r=e.file,n=e.version,i=e.log;return{id:t,name:r,version:n,log:i}}))},fail:function(e){t.$message.error(e)}};s["v"]({id:e},r)},addItem:function(){this.isEdit=!1,this.proj={},this.dialogTitle="添加项目",this.addFileDialog=!0},publish:function(e){this.upgrade.project_id=e.id,this.projectDetail(e.id),this.dialogTitle="更新版本",this.tmp.version=e.version,this.tmp.log=e.log,v=e.version,this.listAlias(),this.upgradeDialog=!0},editItem:function(e){this.isEdit=!0,this.dialogTitle="编辑项目",this.file=g({},e),this.proj={id:e.id,name:e.name,desc:e.desc},this.addFileDialog=!0},cancel:function(e,t){this.addFileDialog=!1,this.upgradeDialog=!1,this.reset(t),this.selected={alias:"",id:""},this.pickedItems=[],v="0.0.0"},reset:function(e){this.file={name:"",desc:""},this.$refs[e].resetFields()},submit:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return!1;"form"===e?t.saveFile():"upgrade"===e&&t.publishProject()}))},saveFile:function(){var e=this,t={success:function(t){e.addFileDialog=!1,e.listProjects()},fail:function(t){e.$message.error("操作失败, "+t)}},r=Object(l["a"])(this.proj);this.isEdit?s["y"](r,t):s["b"](r,t)},publishProject:function(){var e=this,t={success:function(t){e.uploadProcessing=!1,e.upgradeDialog=!1,e.listProjects()},fail:function(t){e.uploadProcessing=!1,e.$message.error("操作失败, "+t)}};this.uploadProcessing=!0;var r=g({},this.upgrade),n=Object(l["a"])(r);s["B"](n,t)},removeItem:function(e){var t=this;this.$confirm("此操作将永久删除该项目, 是否继续?","提示",{type:"warning"}).then((function(){t.deleteProject(e.id)}))},deleteProject:function(e){var t=this;s["g"]({id:e},{success:function(e){t.listProjects()},fail:function(e){t.$message.error("获取资源失败, "+e)}})},pickItem:function(e){var t=this,r=this.resourcesList.filter((function(e){return e.id===t.selected.id})),n=this.history.filter((function(t){return t.id===e}));this.pickedItems.push({id:e,name:r[0].name,version:n[0].version,log:n[0].log}),this.selected.version=""},removePickedItem:function(e){this.pickedItems=this.pickedItems.filter((function(t){return t.id!==e}))},filterData:function(e){var t=e.type,r=e.keyword,n=r.toLocaleLowerCase();this.filterList=this.list.filter((function(e){return e[0===t?"name":"desc"].toLocaleLowerCase().indexOf(n)>-1}))},downloadItem:function(e){var t=e.id,r=e.version,n=e.file,i=document.createElement("a");i.href=s["l"]()+"project/download?id="+t+"&version="+r+"&token="+Object(c["b"])(),i.download=n,i.click()}},computed:{versions:function(){var e=this;return this.history.map((function(t){var r=e.pickedItems.filter((function(e){return e.id===t.id}));return e.resourcesList===[]?{}:g({},t,{disabled:r.length>0})}))},rows:function(){var e=10*(this.currentPage-1);return this.filterList.slice(e,e+10)}},watch:{pickedItems:function(e){this.upgrade.rh_ids=e.map((function(e){return e.id})).join(",")}},mounted:function(){this.listProjects()}},m=h,b=(r("46ee"),r("2877")),y=Object(b["a"])(m,n,i,!1,null,"ab61adfa",null);t["default"]=y.exports},bd86:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("85f2"),i=r.n(n);function o(e,t,r){return t in e?i()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},c317:function(e,t,r){"use strict";var n=r("f15e"),i=r.n(n);i.a},c8bb:function(e,t,r){e.exports=r("54a1")},f15e:function(e,t,r){},f1ae:function(e,t,r){"use strict";var n=r("86cc"),i=r("4630");e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray},f940:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("ac6a"),r("456d");var n=function(e){var t=new FormData;return Object.keys(e).map((function(r){t.append(r,e[r])})),t}}}]);
//# sourceMappingURL=chunk-883222bc.7425efd6.js.map