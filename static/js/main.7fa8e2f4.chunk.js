(this["webpackJsonpreact-image-board"]=this["webpackJsonpreact-image-board"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(10),s=a.n(c),r=(a(16),a(11)),u=a(3),o=a(4),l=a(2),b=a(6),h=a(5),m=(a(17),a(7)),j=a(9),d=a(0),g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(Object(j.a)(Object(j.a)({},this.state),{},Object(m.a)({},e.target.name,t)))}},{key:"handleSubmit",value:function(e){this.props.addImage(this.state),e.preventDefault()}},{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Image URL:",Object(d.jsx)("input",{name:"url",onChange:this.handleChange})]}),Object(d.jsxs)("label",{children:["Image Caption:",Object(d.jsx)("textarea",{name:"caption",onChange:this.handleChange})]}),Object(d.jsx)("input",{type:"submit",value:"Submit"})]})}}]),a}(n.Component),O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.url}),Object(d.jsx)("p",{children:e.caption})]},t)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:e})})})}}]),a}(n.Component),p=[{caption:"Animal image 1",url:"https://www.randomlists.com/img/animals/deer.webp"},{caption:"Animal image 2",url:"https://www.randomlists.com/img/animals/ocelot.webp"},{caption:"Animal image 3",url:"https://www.randomlists.com/img/animals/dugong.webp"}],v=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={images:[]},n.addImage=n.addImage.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({images:p})}},{key:"addImage",value:function(e){var t=Object(r.a)(this.state.images);t.push(e),this.setState({images:t})}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{addImage:this.addImage}),Object(d.jsx)(O,{images:this.state.images}),Object(d.jsxs)("h1",{children:[" ",this.state.name," "]})]})}}]),a}(n.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.7fa8e2f4.chunk.js.map