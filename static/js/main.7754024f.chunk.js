(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={today:new Date},t.timerIdToday=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerIdToday=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.name,n="Renamed from ".concat(t.name," to ").concat(e);e!==t.name&&console.debug(n)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdToday)}},{key:"render",value:function(){var t=this.state.today,e=this.props.name;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component),h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},t.timerIdClock=0,t.getRandomName=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("click",(function(){t.setState({hasClock:!0})})),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),this.timerIdClock=window.setInterval((function(){t.setState({clockName:t.getRandomName()})}),3300)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7754024f.chunk.js.map