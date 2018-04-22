/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([25],{CO97:function(e,t,v){"use strict";v.d(t,"a",function(){return _}),v.d(t,"b",function(){return c});var _=function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",[v("h2",[e._v("Checkbox 多选框")]),e._v(" "),v("h3",[e._v("基础 ")]),e._v(" "),v("h4",[e._v("单独使用 ,使用 v-model 可以双向绑定数据。")]),e._v(" "),v("p",[e._v(e._s(e.checked))]),e._v(" "),v("Checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("单选框 ")]),e._v(" "),v("Button",{on:{click:function(t){e.checked=!e.checked}}},[e._v("Click me")]),e._v(" "),v("Code",[e._v(e._s(e.code.base))]),e._v(" "),v("h3",[e._v("组合使用")]),e._v("\n  "+e._s(e.data)),v("br"),e._v(" "),v("CheckboxGroup",{model:{value:e.data,callback:function(t){e.data=t},expression:"data"}},[v("Checkbox",{attrs:{label:"苹果🍎"}}),e._v(" "),v("Checkbox",{attrs:{label:"橘子🍊"}}),e._v(" "),v("Checkbox",{attrs:{label:"香蕉🍌"}}),e._v(" "),v("Checkbox",{attrs:{label:"栗子🌰"}}),e._v(" "),v("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),e._v(" "),v("Checkbox",{attrs:{label:"梨子🍐",disabled:""}})],1),e._v(" "),v("Button",{on:{click:function(t){e.data=[]}}},[e._v("清除")]),e._v(" "),v("Button",{on:{click:function(t){e.data=["苹果🍎"]}}},[e._v("选中苹果")]),e._v(" "),v("Code",[e._v(e._s(e.code.group))]),e._v(" "),v("h3",[e._v("API")]),e._v(" "),e._m(0),e._v(" "),v("h3",[e._v("CheckboxGroup API")]),e._v(" "),e._m(1)],1)},c=[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[e._v("属性")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("默认值")])]),e._v(" "),v("tr",[v("td",[e._v("value")]),e._v(" "),v("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("label")]),e._v(" "),v("td",[e._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),e._v(" "),v("td",[e._v(" String | Number")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("disabled")]),e._v(" "),v("td",[e._v("是否禁用当前项")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("在选项状态发生改变时触发，返回当前状态")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[e._v("属性")]),e._v(" "),v("th",[e._v("说明")]),e._v(" "),v("th",[e._v("类型")]),e._v(" "),v("th",[e._v("默认值")])]),e._v(" "),v("tr",[v("td",[e._v("value")]),e._v(" "),v("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("disabled")]),e._v(" "),v("td",[e._v("是否禁用当前项")]),e._v(" "),v("td",[e._v("Boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])])])])}]},GFwp:function(e,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=v("ijDI"),c=v.n(_);for(var a in _)"default"!==a&&function(e){v.d(t,e,function(){return _[e]})}(a);var n=v("CO97"),d=v("XyMi"),o=Object(d.a)(c.a,n.a,n.b,!1,null,null,null);t.default=o.exports},PfOg:function(e,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _={};_.base='<p>{{checked}}</p>\n<Checkbox v-model="checked">单选框 </Checkbox>\n<Button @click="checked=!checked">Click me</Button>',_.group='<CheckboxGroup v-model="data">\n<Checkbox label="苹果🍎"></Checkbox>\n<Checkbox label="橘子🍊"></Checkbox>\n<Checkbox label="香蕉🍌"></Checkbox>\n<Checkbox label="栗子🌰"></Checkbox>\n<Checkbox label="葡萄🍇" disabled></Checkbox>\n<Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<Button @click="data=[]">清除</Button>\n<Button @click="data=[\'苹果🍎\']">选中苹果</Button>\ndata() {\n    return {\n      checked: true,\n      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n    };\n}',t.default=_},ijDI:function(e,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=v("PfOg"),c=function(e){return e&&e.__esModule?e:{default:e}}(_);t.default={data:function(){return{code:c.default,checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"]}}}}});