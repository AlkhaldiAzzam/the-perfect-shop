(this["webpackJsonpthe-perfect-shop"]=this["webpackJsonpthe-perfect-shop"]||[]).push([[0],{119:function(e,t,a){e.exports=a(1194)},1194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(121),a(19)),c=a.n(l),i=a(11),o=a(12),m=a(34),s=a(13),u=a(14),h=a(1224),p=a(1222),E=a(1198),g=a(1227),d=a(1197),b=a(1225),f=a(1226),v=a(1208),k=a(1221),y=(a(59),a(10)),O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state=e.item,n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{align:"stretch",margin:"small"},r.a.createElement(k.a,{style:{width:"20rem"}},r.a.createElement(k.a.Img,{variant:"top",src:this.state.img}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null," ",r.a.createElement(h.a,{size:"xlarge"},this.state.name)," "),r.a.createElement(k.a.Text,null,r.a.createElement(b.a,{size:"medium"},this.state.desc)),r.a.createElement(k.a.Text,null,"Price: ",this.state.price," SR"),r.a.createElement(y.b,{to:"/the-perfect-shop/item/".concat(this.state.id)}," ",r.a.createElement(f.a,{icon:r.a.createElement(v.a,null),color:"accent-1",focusIndicator:"false",primary:!0,fill:"true",label:"View Page"})))))}}]),a}(n.Component),j=a(96),C=a(1209),w=a(36),S=a.n(w),I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={items:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({items:this.props.items})}},{key:"generateItems",value:function(){for(var e=this,t=[],a=function(a){t.push(r.a.createElement(j.a,null,r.a.createElement(O,{key:e.state.items[a].id,item:e.state.items[a],clickHandler:function(){return e.props.clickHandler(e.state.items[a])}})))},n=0;n<this.state.items.length;n++)a(n);return t}},{key:"render",value:function(){return r.a.createElement(d.a,{margin:"xlarge",alignContent:"center",border:"all"},r.a.createElement(C.a,null,this.generateItems()))}}]),a}(n.Component),x=a(1212),z=a(1213),N=a(1223),q=a(1211),A=a(8),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{align:"center"},r.a.createElement(d.a,{align:"center",margin:"large"},r.a.createElement(A.c,{basis:"medium",focusFirstChild:!1},r.a.createElement(A.b,{label:"Email",name:"email",validation:[A.f.required(),A.f.email()]}),r.a.createElement(A.d,{label:r.a.createElement(d.a,{direction:"row",align:"center",justify:"between"},"Password",r.a.createElement(q.a,{path:"/reset_password",size:"small",label:"Forgot password?"})),description:"Password",name:"password",validation:[A.f.required(),A.f.minLength(5),A.f.alphaNumeric()]}),r.a.createElement(A.a,{label:"Remember me",name:"rememberme",inField:!1}),r.a.createElement(d.a,{pad:{vertical:"medium"},align:"end"},r.a.createElement(y.b,{to:"/the-perfect-shop/"}," ",r.a.createElement(f.a,{hoverIndicator:"background",primary:!0,onClick:function(){return e.props.signin()},label:"Save profile"}))),r.a.createElement(d.a,{direction:"row",alignSelf:"center",gap:"small",align:"center"},r.a.createElement(h.a,null,"Don't have an account yet?"),r.a.createElement(q.a,{path:"/the-perfect-shop/signup",label:"Sign up"})))))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={filterVal:"",items:e.items,visibleItems:e.items},n}return Object(o.a)(a,[{key:"filterHandler",value:function(e){var t=this.props.items.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));console.log(t,"filter"),this.setState({visibleItems:t,filterVal:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(d.a,{margin:"large"},r.a.createElement(x.a,null,"Filter It"),r.a.createElement(z.a,{sice:"lg"},r.a.createElement(N.a,{onChange:function(t){return e.filterHandler(t)},value:this.state.filterVal,placeholder:"Filter","aria-label":"Search","aria-describedby":"basic-addon2",size:"lg"}))),r.a.createElement(I,{items:this.state.visibleItems,clickHandler:this.props.clickHandler}))}}]),a}(n.Component),H=(n.Component,a(32)),F=a(1217),L=a(1218),M=a(1214),R=a(1215),B=a(1219),V=a(1216),W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(M.a,null,r.a.createElement(R.a,{scope:"row"},r.a.createElement(h.a,{textAlign:"center",size:"large"}," ",this.props.item.name," ")),r.a.createElement(R.a,null," ",r.a.createElement(h.a,{textAlign:"center",size:"large"},this.props.item.price,"SR")),r.a.createElement(R.a,null,r.a.createElement(h.a,{textAlign:"center",size:"large"}," ",this.props.item.quantity," ")),r.a.createElement(R.a,null," ",r.a.createElement(h.a,{textAlign:"center",size:"large"}," ",this.props.item.price*this.props.item.quantity,"SR")),r.a.createElement(R.a,null," ",r.a.createElement(f.a,{icon:r.a.createElement(V.a,null),onClick:function(){return e.props.clickHandler(e.props.item)}})," "))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={cart:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({cart:this.props.cart},this.generateCart)}},{key:"generateCart",value:function(){var e,t=this,a=this.state.cart,n=0;if(0==a.length)e=r.a.createElement("h1",null," is Empty");else{var l=[];a.forEach((function(e,a){n+=e.price*e.quantity,l.push(r.a.createElement(W,{key:a,item:e,clickHandler:function(){return t.props.itemRemover(e)}}))})),e=r.a.createElement(d.a,null," ",r.a.createElement(F.a,{alignSelf:"center"},r.a.createElement(L.a,null,r.a.createElement(M.a,null,r.a.createElement(R.a,{size:"medium",scope:"col",border:"bottom"},r.a.createElement(h.a,{textAlign:"center",size:"large"},"  Item ")),r.a.createElement(R.a,{scope:"col",border:"bottom"},r.a.createElement(h.a,{textAlign:"center",size:"large"}," Price")),r.a.createElement(R.a,{scope:"col",border:"bottom"},r.a.createElement(h.a,{textAlign:"center",size:"large"},"Quantity")),r.a.createElement(R.a,{scope:"col",border:"bottom"},r.a.createElement(h.a,{textAlign:"center",size:"large"}," Total")))),r.a.createElement(B.a,null,l,r.a.createElement(M.a,null,r.a.createElement(R.a,{scope:"col",border:"bottom"},r.a.createElement(h.a,{textAlign:"center",size:"large",color:"green"},"    Total Cost: ",n," "))))),r.a.createElement(d.a,{margin:"medium"},r.a.createElement(y.b,{to:"/the-perfect-shop/thanks"}," ",r.a.createElement(f.a,{onClick:function(){return t.props.checkOut()},label:"Checkout"}))))}return e}},{key:"removeItem",value:function(e){var t=this.state.cart.filter((function(t){return t.name!=e.name}));this.setState({cart:t})}},{key:"render",value:function(){return r.a.createElement(d.a,{border:"all",align:"center",alignContent:"center",margin:"large"},r.a.createElement("h1",{className:"m-5"},"Your Cart"),r.a.createElement(d.a,null,this.generateCart(),r.a.createElement(y.b,{className:"my-5",to:"/the-perfect-shop/"}," ",r.a.createElement(f.a,{label:"Back To Main Page"})," ")))}}]),a}(n.Component),D=a(1228),J=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={item:{},quantity:1},n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.allItems,t=this.props.match.params.id,a={};e.forEach((function(e){e.id==t&&(a=e)})),this.setState({item:a})}},{key:"handleChange",value:function(e){console.log(e.target.value);var t=this.state.item;t.quantity=e.target.value,this.setState({item:t,quantity:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{margin:"large",border:"all",height:"xlarge"},r.a.createElement(C.a,null,r.a.createElement(j.a,null,r.a.createElement(d.a,{margin:"large"},r.a.createElement(D.a,{src:this.state.item.img,fit:"contain"}))),r.a.createElement(j.a,null,r.a.createElement(d.a,{align:"end",margin:"large"},r.a.createElement(h.a,{size:"xxlarge"},this.state.item.name),r.a.createElement("div",{className:"mt-5"},r.a.createElement(h.a,null,this.state.item.desc))))),r.a.createElement(C.a,null,r.a.createElement(j.a,null,r.a.createElement(d.a,{align:"center"},r.a.createElement("label",null,"Quantity:"),r.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"number",value:this.state.quantity}),r.a.createElement(d.a,{width:"medium",margin:"medium"},r.a.createElement(y.b,{to:"/the-perfect-shop/thanks"},r.a.createElement(f.a,{label:"Add to Cart",icon:r.a.createElement(v.a,null),color:"accent-1",primary:!0,fill:"true",onClick:function(){return e.props.addItem(e.state.item)}})))))))}}]),a}(n.Component),Q=a(1220),U=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-5"},r.a.createElement(d.a,{align:"center",margin:"xlarge",border:"all"},r.a.createElement("div",{className:"m-5"},r.a.createElement(h.a,{size:"xlarge"},"Thank You")),r.a.createElement("div",{className:"mb-5"},r.a.createElement(Q.a,{size:"xlarge"})),r.a.createElement(y.b,{to:"/the-perfect-shop/cart"}," ",r.a.createElement(f.a,{primary:!0,color:"accent-1",label:"To Cart?"})),r.a.createElement(d.a,{margin:"large"},r.a.createElement(y.b,{to:"/the-perfect-shop/"},r.a.createElement(f.a,{primary:!0,color:"accent-1",label:"To Main Page?"})))))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{align:"center",margin:"large"},r.a.createElement(d.a,{align:"center"},r.a.createElement(A.c,{basis:"medium",focusFirstChild:!1},r.a.createElement(A.e,{label:"User name",name:"username",validation:[A.f.required()]}),r.a.createElement(A.b,{label:"Email",name:"email",validation:[A.f.required(),A.f.email()]}),r.a.createElement(A.d,{label:"Password",name:"password",validation:[A.f.required(),A.f.minLength(5),A.f.alphaNumeric()]}),r.a.createElement(A.d,{label:"Confirm Password",name:"password1",validation:[A.f.equalsField("password")]}),r.a.createElement(A.a,{controlLabel:r.a.createElement(d.a,{direction:"row",gap:"xsmall",align:"center"},"Agree to",r.a.createElement(q.a,{path:"/terms_of_service",label:"terms of service"})),description:"Terms of service",name:"accept_tos",validation:[A.f.required(),A.f.True("Please accept our TOS")]}),r.a.createElement(d.a,{pad:{vertical:"medium"},align:"end"},r.a.createElement(y.b,{to:"/the-perfect-shop/"}," ",r.a.createElement(f.a,{hoverIndicator:"background",primary:!0,onClick:function(){return e.props.signin()},label:"Save profile"}))),r.a.createElement(d.a,{direction:"row",alignSelf:"center",gap:"small",align:"center"},r.a.createElement(h.a,null,"Already have an account?"),r.a.createElement(q.a,{path:"/the-perfect-shop/login",label:"Sign in"})))))}}]),a}(n.Component),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={cart:[],items:[],loggedin:!1,navCon:r.a.createElement("div",null)},n.addItem=n.addItem.bind(Object(m.a)(n)),n.removeItem=n.removeItem.bind(Object(m.a)(n)),n.signin=n.signin.bind(Object(m.a)(n)),n.checkout=n.checkout.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){for(var e=[],t=0;t<30;t++)e.push({name:S.a.name.title(),price:S.a.finance.amount(),img:S.a.image.food(),desc:S.a.lorem.paragraph(),id:S.a.random.number(),quantity:1});this.state.loggedin&&(y.b,h.a),this.setState({items:e})}},{key:"signin",value:function(){console.log("signed inn"),this.setState({loggedin:!0})}},{key:"renderCon",value:function(){var e=this;return this.state.loggedin?r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(y.b,{className:"nav-link",to:"/",onClick:function(){return e.logout()}}," ",r.a.createElement(h.a,{size:"large"}," Log Out")))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(y.b,{className:"nav-link",to:"/the-perfect-shop/login"},r.a.createElement(h.a,{color:"light"}," Log In"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(y.b,{className:"nav-link",to:"/the-perfect-shop/signub"},r.a.createElement(h.a,{color:"light"}," Sign Up"))))}},{key:"logout",value:function(){this.setState({loggedin:!1})}},{key:"addItem",value:function(e){var t=this.state.cart;t.push(e),this.setState({cart:t}),console.log(this)}},{key:"checkout",value:function(){this.setState({cart:[]})}},{key:"removeItem",value:function(e){var t=this.state.cart.filter((function(t){return t.name!=e.name}));this.setState({cart:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{plain:!0},r.a.createElement(y.a,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand"},"Azzam's Shop"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(y.b,{className:"nav-link",to:"/the-perfect-shop/"}," ",r.a.createElement(h.a,{size:"large"}," Home")," "))),r.a.createElement(E.a,{size:"large",color:"brand",reverse:!0,icon:r.a.createElement(g.a,{anchor:"top-right"},r.a.createElement(y.b,{to:"/the-perfect-shop/cart"}," ",r.a.createElement(v.a,{size:"large"})," "),r.a.createElement(d.a,{background:"brand",pad:{horizontal:"xsmall"},round:!0},r.a.createElement(h.a,null,this.state.cart.length)))}),this.renderCon())),r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/the-perfect-shop/",component:function(){return r.a.createElement(P,{items:e.state.items})}}),r.a.createElement(H.a,{path:"/the-perfect-shop/cart",component:function(){return r.a.createElement(_,{checkOut:e.checkout,itemRemover:e.removeItem,cart:e.state.cart})}}),r.a.createElement(H.a,{path:"/the-perfect-shop/item/:id",render:function(t){return r.a.createElement(J,Object.assign({},t,{addItem:e.addItem,allItems:e.state.items}))}}),r.a.createElement(H.a,{path:"/the-perfect-shop/thanks",component:U}),r.a.createElement(H.a,{path:"/the-perfect-shop/login",component:function(){return r.a.createElement(T,{signin:e.signin})}}),r.a.createElement(H.a,{path:"/the-perfect-shop/signup",component:function(){return r.a.createElement(Y,{signin:e.signin})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.69dc004f.chunk.js.map