(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),o=a(4),l=a(10),i=a(11),s=a(13),m=a(12),p=a(14),u=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h2",null,"My blog")),r.a.createElement("div",null,this.props.children))}}]),t}(n.Component),d=a(34),h=a.n(d)()("e84c93d1d42633e2defb4eee6fd3e797d7e34931"),E=a(19),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loaded:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"fetchPosts",value:function(e){var t=this;h.post.list({page:e,page_size:10}).then(function(e){t.setState({loaded:!0,resp:e.data})})}},{key:"componentWillMount",value:function(){var e=this.props.params.page||1;this.fetchPosts(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({loaded:!1});var t=e.params.page||1;this.fetchPosts(t)}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.resp.meta,t=e.next_page,a=e.previous_page;return r.a.createElement("div",null,r.a.createElement(E.Helmet,null,r.a.createElement("title",null,"Blog home")),this.state.resp.data.map(function(e){return r.a.createElement("div",{key:e.slug},r.a.createElement(o.b,{to:"/post/".concat(e.slug)},e.title))}),r.a.createElement("br",null),r.a.createElement("div",null,a&&r.a.createElement(o.b,{to:"/p/".concat(a)},"Prev"),t&&r.a.createElement(o.b,{to:"/p/".concat(t)},"Next")))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loaded:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.slug;h.post.retrieve(t).then(function(t){e.setState({loaded:!0,post:t.data.data})})}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.post;return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement(E.Helmet,null,r.a.createElement("meta",{property:"og:title",content:"this is the title"}),r.a.createElement("meta",{property:"description",content:"This a the description"}),r.a.createElement("meta",{name:"og:image",content:"https://cdn.buttercms.com/nxPA8YzQQmOoZUAXKvjd"}),r.a.createElement("meta",{name:"og:url",content:"https://zazuafrica.com".concat(e.slug)}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{property:"og:site_name",content:"Zazu"}),r.a.createElement("meta",{property:"fb:app_id",content:"your_app_id"}),r.a.createElement("meta",{name:"twitter:site",content:"@website-username"})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body}}))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),f=function(e){return r.a.createElement(o.d,e,r.a.createElement(o.c,{path:"/",component:u},r.a.createElement(o.a,{component:v}),r.a.createElement(o.c,{path:"/p/:page",component:v}),r.a.createElement(o.c,{path:"/post/:slug",component:b})))};Object(c.render)(r.a.createElement(f,{history:o.e}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2515cb63.chunk.js.map