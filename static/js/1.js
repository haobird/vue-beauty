webpackJsonp([1,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(e,t,o){var n=o(5);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},8:function(e,t,o){var n=o(6);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},9:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(e,t,o){var n,i,r={};o(7),n=o(4),i=o(9),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(r).forEach(function(e){var t=r[e];a.computed[e]=function(){return t}})},12:function(e,t,o){var n,i,r={};o(8),n=o(3),i=o(10),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(r).forEach(function(e){var t=r[e];a.computed[e]=function(){return t}})},111:function(e,t,o){var n,i,r,a=o(36),c=o(306),l=o(102),s=o(57),d=o(23),p=d.process,u=d.setImmediate,f=d.clearImmediate,h=d.MessageChannel,b=0,v={},m="onreadystatechange",x=function(){var e=+this;if(v.hasOwnProperty(e)){var t=v[e];delete v[e],t()}},g=function(e){x.call(e.data)};u&&f||(u=function(e){for(var t=[],o=1;arguments.length>o;)t.push(arguments[o++]);return v[++b]=function(){c("function"==typeof e?e:Function(e),t)},n(b),b},f=function(e){delete v[e]},"process"==o(39)(p)?n=function(e){p.nextTick(a(x,e,1))}:h?(i=new h,r=i.port2,i.port1.onmessage=g,n=a(r.postMessage,r,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(n=function(e){d.postMessage(e+"","*")},d.addEventListener("message",g,!1)):n=m in s("script")?function(e){l.appendChild(s("script"))[m]=function(){l.removeChild(this),x.call(e)}}:function(e){setTimeout(a(x,e,1),0)}),e.exports={set:u,clear:f}},262:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(288),r=n(i),a=o(12),c=n(a),l=o(11),s=n(l);t["default"]={data:function(){return{modalText:"对话框的内容",confirmLoading:!1,visible:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible51:!1,visible6:!1,confirmLoading2:!1,confirmLoading6:!1,modalStyle:{top:"20px"},wrapClassName:"vertical-center-modal",confirmApis:[{parameter:"title",explain:"标题",type:"React.Element or String","default":"无"},{parameter:"content",explain:"内容",type:"React.Element or String","default":"无"},{parameter:"onOk",explain:"点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",type:"function","default":"无"},{parameter:"onCancel",explain:"取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",type:"function","default":"无"},{parameter:"width",explain:"宽度",type:"String or Number","default":"416"},{parameter:"iconType",explain:"图标 Icon 类型",type:"String","default":"question-circle"},{parameter:"okText",explain:"确认按钮文字",type:"String","default":"确定"},{parameter:"cancelText",explain:"取消按钮文字",type:"String","default":"取消"}],modalApis:[{parameter:"visible",explain:"对话框是否可见",type:"Boolean","default":"无"},{parameter:"confirmLoading",explain:"确定按钮 loading",type:"Boolean","default":"无"},{parameter:"title",explain:"标题",type:"React.Element","default":"无"},{parameter:"closable",explain:"是否显示右上角的关闭按钮",type:"Boolean","default":"true"},{parameter:"onOk",explain:"点击确定回调",type:"function","default":"无"},{parameter:"onCancel",explain:"点击遮罩层或右上角叉或取消按钮的回调",type:"function(e)","default":"无"},{parameter:"width",explain:"宽度",type:"String or Number","default":"520"},{parameter:"footer",explain:"底部内容",type:"React.Element","default":"确定取消按钮"},{parameter:"okText",explain:"确认按钮文字",type:"String","default":"确定"},{parameter:"cancelText",explain:"取消按钮文字",type:"String","default":"取消"},{parameter:"maskClosable",explain:"点击蒙层是否允许关闭",type:"Boolean","default":"true"},{parameter:"style",explain:"可用于设置浮层的样式，调整浮层位置等",type:"Object","default":"-"},{parameter:"wrapClassName",explain:"对话框外层容器的类名",type:"String","default":"-"}]}},components:{codeBox:c["default"],apiTable:s["default"]},methods:{_showModal:function(){this.visible=!0},_handleOk:function(){this.confirmLoading=!1,this.visible=!1},_handleCancel:function(){this.visible=!1},_showModal2:function(){this.visible2=!0},_handleOk2:function(){var e=this;this.modalText="对话框将在两秒后关闭",this.confirmLoading2=!0,setTimeout(function(){e.visible2=!1,e.confirmLoading2=!1},2e3)},_handleCancel2:function(){this.visible2=!1},_showModal3:function(){this.visible3=!0},_handleOk3:function(){this.visible3=!1},_handleCancel3:function(){this.visible3=!1},_showModal4:function(){this.visible4=!0},_handleOk4:function(){this.modalText="对话框将在两秒后关闭",this.visible4=!1},_handleCancel4:function(){this.visible4=!1},_showModal5:function(){this.visible5=!0},_handleOk5:function(){this.visible5=!1},_handleCancel5:function(){this.visible5=!1},_showModal51:function(){this.visible51=!0},_handleOk51:function(){this.visible51=!1},_handleCancel51:function(){this.visible51=!1},_showModal6:function(){this.visible6=!0},_handleOk6:function(){var e=this;this.modalText="对话框将在两秒后关闭",this.confirmLoading6=!0,setTimeout(function(){e.visible6=!1,e.confirmLoading6=!1},2e3)},_handleCancel6:function(){this.visible6=!1},_confirmNation:function(){Vue.$modal.confirm({title:"Confirm",content:"Bla bla ...",okText:"OK",cancelText:"Cancel"})},_showConfirm:function(){Vue.$modal.confirm({title:"您是否确认要删除这项内容",content:"一些解释",onOk:function(){console.log("确定")},onCancel:function(){}})},_showConfirm2:function(){Vue.$modal.confirm({title:"您是否确认要删除这项内容",content:"点确认 1 秒后关闭",onOk:function(){return new r["default"](function(e){setTimeout(e,1e3)})},onCancel:function(){}})},info:function(){Vue.$modal.info({title:"这是一条通知信息",content:"一些附加信息一些附加信息一些附加信息",onOk:function(){}})},success:function(){Vue.$modal.success({title:"这是一条通知信息",content:"一些附加信息一些附加信息一些附加信息"})},error:function(){this.$modal.error({title:"这是一条通知信息",content:"一些附加信息一些附加信息一些附加信息"})},_confirmDestroy:function(){var e=this.$modal.success({title:"这是一条通知信息",content:"一秒后自动移除"});setTimeout(function(){return e.destroy()},1e3)}}}},288:function(e,t,o){e.exports={"default":o(299),__esModule:!0}},299:function(e,t,o){o(332),o(46),o(64),o(333),e.exports=o(20).Promise},301:function(e,t){e.exports=function(e,t,o,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(o+": incorrect invocation!");return e}},304:function(e,t,o){var n=o(36),i=o(105),r=o(104),a=o(24),c=o(62),l=o(63),s={},d={},t=e.exports=function(e,t,o,p,u){var f,h,b,v,m=u?function(){return e}:l(e),x=n(o,p,t?2:1),g=0;if("function"!=typeof m)throw TypeError(e+" is not iterable!");if(r(m)){for(f=c(e.length);f>g;g++)if(v=t?x(a(h=e[g])[0],h[1]):x(e[g]),v===s||v===d)return v}else for(b=m.call(e);!(h=b.next()).done;)if(v=i(b,x,h.value,t),v===s||v===d)return v};t.BREAK=s,t.RETURN=d},306:function(e,t){e.exports=function(e,t,o){var n=void 0===o;switch(t.length){case 0:return n?e():e.call(o);case 1:return n?e(t[0]):e.call(o,t[0]);case 2:return n?e(t[0],t[1]):e.call(o,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(o,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(o,t[0],t[1],t[2],t[3])}return e.apply(o,t)}},309:function(e,t,o){var n=o(23),i=o(111).set,r=n.MutationObserver||n.WebKitMutationObserver,a=n.process,c=n.Promise,l="process"==o(39)(a);e.exports=function(){var e,t,o,s=function(){var n,i;for(l&&(n=a.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(r){throw e?o():t=void 0,r}}t=void 0,n&&n.enter()};if(l)o=function(){a.nextTick(s)};else if(r){var d=!0,p=document.createTextNode("");new r(s).observe(p,{characterData:!0}),o=function(){p.data=d=!d}}else if(c&&c.resolve){var u=c.resolve();o=function(){u.then(s)}}else o=function(){i.call(n,s)};return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,o()),t=i}}},318:function(e,t,o){var n=o(29);e.exports=function(e,t,o){for(var i in t)o&&e[i]?e[i]=t[i]:n(e,i,t[i]);return e}},320:function(e,t,o){"use strict";var n=o(23),i=o(20),r=o(31),a=o(28),c=o(21)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:n[e];a&&t&&!t[c]&&r.f(t,c,{configurable:!0,get:function(){return this}})}},321:function(e,t,o){var n=o(24),i=o(54),r=o(21)("species");e.exports=function(e,t){var o,a=n(e).constructor;return void 0===a||void 0==(o=n(a)[r])?t:i(o)}},332:function(e,t){},333:function(e,t,o){"use strict";var n,i,r,a=o(108),c=o(23),l=o(36),s=o(55),d=o(25),p=o(42),u=o(54),f=o(301),h=o(304),b=o(321),v=o(111).set,m=o(309)(),x="Promise",g=c.TypeError,_=c.process,y=c[x],_=c.process,k="process"==s(_),w=function(){},M=!!function(){try{var e=y.resolve(1),t=(e.constructor={})[o(21)("species")]=function(e){e(w,w)};return(k||"function"==typeof PromiseRejectionEvent)&&e.then(w)instanceof t}catch(n){}}(),C=function(e,t){return e===t||e===y&&t===r},O=function(e){var t;return!(!p(e)||"function"!=typeof(t=e.then))&&t},T=function(e){return C(y,e)?new j(e):new i(e)},j=i=function(e){var t,o;this.promise=new e(function(e,n){if(void 0!==t||void 0!==o)throw g("Bad Promise constructor");t=e,o=n}),this.resolve=u(t),this.reject=u(o)},S=function(e){try{e()}catch(t){return{error:t}}},E=function(e,t){if(!e._n){e._n=!0;var o=e._c;m(function(){for(var n=e._v,i=1==e._s,r=0,a=function(t){var o,r,a=i?t.ok:t.fail,c=t.resolve,l=t.reject,s=t.domain;try{a?(i||(2==e._h&&z(e),e._h=1),a===!0?o=n:(s&&s.enter(),o=a(n),s&&s.exit()),o===t.promise?l(g("Promise-chain cycle")):(r=O(o))?r.call(o,c,l):c(o)):l(n)}catch(d){l(d)}};o.length>r;)a(o[r++]);e._c=[],e._n=!1,t&&!e._h&&L(e)})}},L=function(e){v.call(c,function(){var t,o,n,i=e._v;if(P(e)&&(t=S(function(){k?_.emit("unhandledRejection",i,e):(o=c.onunhandledrejection)?o({promise:e,reason:i}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",i)}),e._h=k||P(e)?2:1),e._a=void 0,t)throw t.error})},P=function(e){if(1==e._h)return!1;for(var t,o=e._a||e._c,n=0;o.length>n;)if(t=o[n++],t.fail||!P(t.promise))return!1;return!0},z=function(e){v.call(c,function(){var t;k?_.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},A=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),E(t,!0))},B=function(e){var t,o=this;if(!o._d){o._d=!0,o=o._w||o;try{if(o===e)throw g("Promise can't be resolved itself");(t=O(e))?m(function(){var n={_w:o,_d:!1};try{t.call(e,l(B,n,1),l(A,n,1))}catch(i){A.call(n,i)}}):(o._v=e,o._s=1,E(o,!1))}catch(n){A.call({_w:o,_d:!1},n)}}};M||(y=function(e){f(this,y,x,"_h"),u(e),n.call(this);try{e(l(B,this,1),l(A,this,1))}catch(t){A.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=o(318)(y.prototype,{then:function(e,t){var o=T(b(this,y));return o.ok="function"!=typeof e||e,o.fail="function"==typeof t&&t,o.domain=k?_.domain:void 0,this._c.push(o),this._a&&this._a.push(o),this._s&&E(this,!1),o.promise},"catch":function(e){return this.then(void 0,e)}}),j=function(){var e=new n;this.promise=e,this.resolve=l(B,e,1),this.reject=l(A,e,1)}),d(d.G+d.W+d.F*!M,{Promise:y}),o(59)(y,x),o(320)(x),r=o(20)[x],d(d.S+d.F*!M,x,{reject:function(e){var t=T(this),o=t.reject;return o(e),t.promise}}),d(d.S+d.F*(a||!M),x,{resolve:function(e){if(e instanceof y&&C(e.constructor,this))return e;var t=T(this),o=t.resolve;return o(e),t.promise}}),d(d.S+d.F*!(M&&o(107)(function(e){y.all(e)["catch"](w)})),x,{all:function(e){var t=this,o=T(t),n=o.resolve,i=o.reject,r=S(function(){var o=[],r=0,a=1;h(e,!1,function(e){var c=r++,l=!1;o.push(void 0),a++,t.resolve(e).then(function(e){l||(l=!0,o[c]=e,--a||n(o))},i)}),--a||n(o)});return r&&i(r.error),o.promise},race:function(e){var t=this,o=T(t),n=o.reject,i=S(function(){h(e,!1,function(e){t.resolve(e).then(o.resolve,n)})});return i&&n(i.error),o.promise}})},368:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".vertical-center-modal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vertical-center-modal .ant-modal{top:0}",""])},429:function(e,t,o){var n=o(368);"string"==typeof n&&(n=[[e.id,n,""]]);o(2)(n,{});n.locals&&(e.exports=n.locals)},544:function(e,t){e.exports=' <div> <section class=markdown> <h1>Modal对话框</h1> <p> 模态对话框。 </p> <h2>何时使用</h2> <ul> <li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li> <li>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 ant.Modal.confirm() 等方法。</li> </ul> <h2>组件演示</h2> </section> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=基本 describe=第一个对话框。 code=""> <v-button type=primary @click=_showModal>显示对话框</v-button> <v-modal title="第一个 Modal" :visible=visible :on-ok=_handleOk :on-cancel=_handleCancel> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> </code-box> <code-box title=自定义页脚 describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。" code=""> <v-button type=primary @click=_showModal2>显示对话框</v-button> <v-modal title=Modal :visible=visible2 :on-cancel=_handleCancel2> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> <div slot=footer> <v-button key=cancel type=ghost size=large @click=_handleCancel2>返 回</v-button> <v-button key=confirm type=primary size=large :loading=confirmLoading2 @click=_handleOk2>提 交</v-button> </div> </v-modal> </code-box> <code-box title=自定义页脚 describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。" code=""> <v-button type=primary @click=_showModal3>显示对话框</v-button> <v-modal title="第一个 Modal" :visible=visible3 :on-ok=_handleOk3 :on-cancel=_handleCancel3> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> </code-box> <code-box title=国际化 describe="设置 okText 与 cancelText 以自定义按钮文字。" code=""> <v-button type=primary @click=_showModal4>show Modal</v-button> <v-modal title=Modal :visible=visible4 :on-ok=_handleOk4 :on-cancel=_handleCancel4 ok-text=ok cancel-text=Cancel> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> <br/> <v-button @click=_confirmNation>confirm</v-button> </code-box> <code-box title=自定义位置 describe="1.0 之后，Modal 的 align 属性被移除，您可以直接使用 style.top 或配合其他样式来设置对话框位置。" code=""> <v-button type=primary @click=_showModal5>显示距离顶部 20px 的对话框</v-button> <v-button type=primary @click=_showModal51>显示垂直居中的对话框</v-button> <v-modal title=Modal :visible=visible5 :on-ok=_handleOk5 :on-cancel=_handleCancel5 :modal-style=modalStyle> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> <v-modal title=Modal :visible=visible51 :on-ok=_handleOk51 :on-cancel=_handleCancel51 wrap-class-name=vertical-center-modal> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=异步关闭 describe=点击确定后异步关闭对话框，例如提交表单。 code=""> <v-button type=primary @click=_showModal6>显示对话框</v-button> <v-modal title="第一个 Modal" :visible=visible6 :on-ok=_handleOk6 :on-cancel=_handleCancel6 :confirm-loading=confirmLoading6> <p>对话框的内容</p> <p>对话框的内容</p> <p>对话框的内容</p> </v-modal> </code-box> <code-box title=自定义页脚 describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。" code=""> <v-button @click=_showConfirm2>确认对话框</v-button> </code-box> <code-box title=信息提示 describe=各种类型的信息提示，只提供一个按钮用于关闭。 code=""> <v-button @click=info>信息提示</v-button> <v-button @click=success>成功提示</v-button> <v-button @click=error>失败提示</v-button> <v-button @click=error>警告提示</v-button> </code-box> <code-box title=手动移除 describe=手动关闭modal。 code=""> <v-button @click=_confirmDestroy>成功提示</v-button> </code-box> </div> <api-table :apis=modalApis></api-table> <api-table :apis=confirmApis , title=Modal.xxx()> <p>包括：</p> <ul><li><p><code>Modal.info</code></p></li><li><p><code>Modal.success</code></p></li><li><p><code>Modal.error</code></p></li><li><p><code>Modal.warning</code></p></li><li><p><code>Modal.confirm</code></p></li></ul> <p>以上均为一个函数，参数为 object，具体属性如下：</p> </api-table> </div> '},663:function(e,t,o){var n,i,r={};o(429),n=o(262),i=o(544),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(r).forEach(function(e){var t=r[e];a.computed[e]=function(){return t}})}});