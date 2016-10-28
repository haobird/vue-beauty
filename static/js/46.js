webpackJsonp([46,49],{3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var t=this,e=this._slotContents["default"].childNodes;e=Array.prototype.filter.call(e,function(t){return 1===t.nodeType}),this.code||(this.code=e.map(function(t){return t.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(t.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},8:function(t,e,o){var n=o(6);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},9:function(t,e){t.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(t,e){t.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(t,e,o){var n,r,i={};o(7),n=o(4),r=o(9),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(a.template=r),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})},12:function(t,e,o){var n,r,i={};o(8),n=o(3),r=o(10),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(a.template=r),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})},243:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(15),i=n(r),a=o(12),s=n(a),p=o(11),l=n(p);e["default"]={data:function(){return{apis:[{parameter:"type",explain:"设置按钮类型，可选值为 primary success error warning ghost dashed 或者不设",type:"String","default":"无"},{parameter:"htmlType",explain:'设置 button 原生的 type 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type" target="_blank">HTML 标准<a/>',type:"string","default":"button"},{parameter:"icon",explain:"设置按钮的图标类型",type:"string","default":"无"},{parameter:"shape",explain:"设置按钮形状，可选值为 circle circle-outline 或者不设",type:"String","default":"无"},{parameter:"size",explain:"设置按钮大小，可选值为 small large 或者不设",type:"String","default":"default"},{parameter:"description",explain:"可选参数，警告提示的辅助性文字介绍",type:"String","default":"无"},{parameter:"loading",explain:"设置按钮载入状态",type:"boolean","default":"false"},{parameter:"onClick",explain:"click 事件的 handler",type:"function","default":""}]}},components:{vButton:i["default"],vButtonGroup:i["default"].Group,codeBox:s["default"],apiTable:l["default"]}}},526:function(t,e){t.exports=' <div> <section class=markdown> <h1>Button 按钮</h1> <p> 按钮用于开始一个即时操作。 </p> <h2>何时使用</h2> <ul> <p> 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。 </p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=按钮类型 describe="按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。"> <v-button type=primary>Primary</v-button> <v-button type=success>success</v-button> <v-button type=error>error</v-button> <v-button type=warning>warning</v-button> <v-button>default</v-button> <v-button type=ghost>Ghost</v-button> <v-button type=dashed>Dashed</v-button> </code-box> <code-box title=按钮尺寸 describe="按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"> <v-button type=primary size=large>Large</v-button> <v-button type=primary>Default</v-button> <v-button type=primary size=small>Small</v-button> </code-box> <code-box title=加载中状态 describe="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"> <v-button type=primary loading>Loading</v-button> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=图标按钮 describe="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。"> <v-button type=primary shape=circle icon=search></v-button> <v-button type=primary icon=search><span>搜索</span></v-button> <br/> <br/> <v-button type=ghost shape=circle-outline icon=search></v-button> <v-button type=ghost icon=search><span>搜索</span></v-button> </code-box> <code-box title=不可用状态 describe="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"> <v-button type=primary>Primary</v-button> <v-button type=primary disabled=disabled>Primary</v-button> </code-box> <code-box title=按钮组合 describe="可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。"> <v-button-group size=large> <v-button>Large</v-button> <v-button>Large</v-button> </v-button-group> <v-button-group> <v-button>Default</v-button> <v-button>Default</v-button> </v-button-group> <v-button-group size=small> <v-button>Small</v-button> <v-button>Small</v-button> </v-button-group> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},645:function(t,e,o){var n,r,i={};n=o(243),r=o(526),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(a.template=r),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})}});