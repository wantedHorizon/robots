(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=(n(24),n(5)),i=n(6),l=n(9),u=n(7),h=n(10),d=n(8),b=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-s"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(b,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},m=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid white",height:"auto"}},e.children)},g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Opps. That is not good"):this.props.children}}]),t}(r.Component),f=(n(29),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=(e.error,r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return o?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(m,{searchChange:n}),a.a.createElement(p,null,a.a.createElement(g,null,a.a.createElement(E,{robots:c}))))}}]),t}(r.Component)),O=Object(d.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(f),v=n(3),S=n(17),R=n(18);n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},j={isPending:!1,robots:[],error:""},C=Object(v.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),w=Object(S.createLogger)(),_=Object(v.d)(C,Object(v.a)(R.a,w));c.a.render(a.a.createElement(d.a,{store:_},a.a.createElement(O,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7090bae8.chunk.js.map