(window.webpackJsonptodolist2=window.webpackJsonptodolist2||[]).push([[0],{36:function(e,t,n){e.exports=n(55)},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(20),o=n.n(r),c=(n(41),n(12)),l=n(7),s=n(13),d=n(14),u=n(16),m=n(19),h=n(69),p=(n(42),function(e){return i.a.createElement("div",{className:"Headers"},i.a.createElement(h.a,null,i.a.createElement(m.b,{to:"/add-todo",exact:!0,style:{color:"white",textDecoration:"inherit"},activeStyle:{color:"#FFD801",textDecoration:"inherit"}},"Home")),i.a.createElement(h.a,null,i.a.createElement(m.b,{to:"/done-lists",style:{color:"white",textDecoration:"inherit"},activeStyle:{color:"#FFD801",textDecoration:"inherit"}},"Done Lists")),i.a.createElement(h.a,null,i.a.createElement(m.b,{to:"/history",style:{color:"white",textDecoration:"inherit"},activeStyle:{color:"#FFD801",textDecoration:"inherit"}},"History ")))}),y=n(68),E=(n(48),Object(y.a)((function(e){return{button:{margin:e.spacing(.5)},input:{display:"none"}}}))),f=function(e){var t=E();return i.a.createElement("div",{className:"AddTodo"},i.a.createElement("input",{type:"text",onChange:e.changed,value:e.value,placeholder:"INPUT SOME TODO"}),i.a.createElement("div",null,i.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",onClick:e.clicked,className:t.button},"ADD"),i.a.createElement(h.a,{type:"submit",variant:"contained",color:"secondary",onClick:e.cleared,className:t.button},"CLEAR ALL")))},b=(n(49),function(e){return i.a.createElement("div",{className:"DoneList"},i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{borderRadius:"10px 0px 0px 0px"}},"Finished Lists"),i.a.createElement("th",{style:{borderRadius:"0px 10px 0px 0px"}},"Time Stamps"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{borderRadius:"0px 0px 0px 10px"}},e.finishList),i.a.createElement("td",{style:{borderRadius:"0px 0px 10px 0px"}},e.getTime)))))}),v=(n(50),Object(y.a)((function(e){return{button:{margin:e.spacing(.5)}}}))),x=function(e){var t=v();return i.a.createElement("div",null,i.a.createElement(h.a,{onClick:e.doneSet,variant:"contained",className:t.button},"DONE"),i.a.createElement(h.a,{onClick:e.editSet,variant:"contained",color:"primary",className:t.button},"EDIT"),i.a.createElement(h.a,{onClick:e.deleteSet,variant:"contained",color:"secondary",className:t.button},"DELETE"))},T=(n(51),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={textSomething:"",isEdit:!1},n.clickDoneList=function(){return n.props.clickDone},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props.todoName,a=null,r=i.a.createElement(x,{doneSet:this.props.clickDone,editSet:function(){return t.setState({isEdit:!t.state.isEdit})},deleteSet:this.props.delete}),o=this.state.isDoneYet?null:r;return this.state.isEdit&&(n=null,e=i.a.createElement("input",{className:"EditBox",type:"text",onChange:function(e){return t.setState({textSomething:e.target.value})},value:this.props.editValue,placeholder:this.props.todoName}),a=i.a.createElement(h.a,{variant:"contained",onClick:function(){return t.props.editTextChange(t.state.textSomething)+t.setState({isEdit:!1})}}," OK ")),i.a.createElement("div",{className:"TodoItem"},i.a.createElement("h3",null,"List No. ",this.props.itemID+1),i.a.createElement("ul",null,null,i.a.createElement("li",null,n),e,a),o)}}]),t}(a.Component)),k=(n(52),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"History",key:new Date},i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{borderRadius:"10px 0px 0px 0px"}},"Actions"),i.a.createElement("th",{style:{borderRadius:"0px 10px 0px 0px"}},"Time"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{borderRadius:"0px 0px 0px 10px"}},this.props.action),i.a.createElement("td",{style:{borderRadius:"0px 0px 10px 0px"}},this.props.time)))))}}]),t}(a.Component)),g=n(18),D=(n(53),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={addTodo:"",addList:[],editText:"",historyAction:["App Starting"],historyTime:["".concat((new Date).toLocaleString())],doneLists:[],doneTime:[]},n.addItemHandler=function(e){console.log("[ADD] : {"+e+"}");var t=i.a.createElement("h4",{key:e,style:{color:"green"}},"Add ITEM"),a=i.a.createElement("h4",{key:e,style:{color:"green"}},n.getTime());n.setState({addList:n.state.addList.concat(e),addTodo:"",historyAction:n.state.historyAction.concat(t),historyTime:n.state.historyTime.concat(a)})},n.deleteItemHandler=function(e){var t=i.a.createElement("h4",{key:e,style:{color:"red"}},"Delete ITEM"),a=i.a.createElement("h4",{key:e,style:{color:"red"}},n.getTime()),r=n.state.addList;r.splice(e,1),n.setState({addList:r,historyAction:n.state.historyAction.concat(t),historyTime:n.state.historyTime.concat(a)})},n.editItemHandler=function(e,t){console.log("Edit Start! @ "+e+t);var a=i.a.createElement("h4",{key:t,style:{color:"#FF5722"}},"Edit ITEM"),r=i.a.createElement("h4",{key:t,style:{color:"#FF5722"}},n.getTime()),o=n.state.addList;o.splice(t,1),o.splice(t,0,e),n.setState({addList:o,historyAction:n.state.historyAction.concat(a),historyTime:n.state.historyTime.concat(r)})},n.ClearItemHandler=function(){var e=i.a.createElement("h4",{key:"clear",style:{color:"#3F51B5"}},"Clear All List"),t=i.a.createElement("h4",{key:"clear",style:{color:"#3F51B5"}},n.getTime());n.setState({addList:[],historyAction:n.state.historyAction.concat(e),historyTime:n.state.historyTime.concat(t)})},n.DoneListHandler=function(e,t){var a=i.a.createElement("h4",{key:t,style:{color:"#009688"}},"Task Finished"),r=i.a.createElement("h4",{key:t,style:{color:"#009688"}},n.getTime()),o=e,c=n.state.addList;c.splice(t,1),n.setState({doneLists:n.state.doneLists.concat(o),addList:c}),n.updateTimeAction(a,r),alert("This task was finish! You can see it at DoneList")},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getTime",value:function(){return(new Date).toLocaleString()}},{key:"updateTimeAction",value:function(e,t){this.setState({historyAction:this.state.historyAction.concat(e),historyTime:this.state.historyTime.concat(t),doneTime:this.state.doneTime.concat(t)})}},{key:"render",value:function(){var e=this,t=this.state.addList.map((function(t,n){return i.a.createElement(T,{todoName:t,key:n,itemID:n,clickDone:function(){return e.DoneListHandler(t,n)},editTextChange:function(t){return e.editItemHandler(t,n)},delete:function(){return e.deleteItemHandler(n)}})})),n=i.a.createElement("div",null,i.a.createElement(k,{action:this.state.historyAction,time:this.state.historyTime,key:this.state.historyAction.map((function(e,t){return t}))})),a=i.a.createElement("div",null,i.a.createElement(b,{finishList:this.state.doneLists.map((function(e){return i.a.createElement("h4",{key:e,style:{color:"#009688"}},e)})),getTime:this.state.doneTime,key:this.state.doneLists.map((function(e,t){return t}))}));return i.a.createElement("div",null,i.a.createElement(g.b,{exat:!0,path:"/add-todo",render:function(){return i.a.createElement("div",null,i.a.createElement(f,{value:e.state.addTodo,changed:function(t){return e.setState({addTodo:t.target.value})},clicked:function(){return e.addItemHandler(e.state.addTodo)},cleared:e.ClearItemHandler,key:e.state.addList.map((function(e,t){return t}))}),t)}}),i.a.createElement(g.b,{path:"/done-lists",render:function(){return i.a.createElement("div",{style:{textAlign:"center"}},a)}}),i.a.createElement(g.b,{path:"/history",render:function(){return i.a.createElement("div",null,n)}}),i.a.createElement(g.a,{from:"/",to:"/add-todo"}))}}]),t}(a.Component)),L=(n(54),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(D,null)),i.a.createElement("h4",{className:"Credit",onClick:function(){return alert("Version 1.01 Date 24/Sep/2019")}},"V. 1.01 BY MJDC"))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.4e14b627.chunk.js.map