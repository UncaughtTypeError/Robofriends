(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{121:function(e,t,a){e.exports=a(285)},130:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),i=a.n(o),c=a(33),s=a(34),l=a(98),u=a(99),m=(a(130),a(12)),p=a(13),h=a(15),d=a(14),b=a(16),g=a(21),f=a(9),O=a(39),E=a.n(O),j=a(105),v=a.n(j),y=a(100),w=a.n(y),S=a(103),C=a.n(S),x=a(104),k=a.n(x),R=a(101),N=a.n(R),T=a(102),I=a.n(T),U=a(24),B=a.n(U),L=Object(f.withStyles)((function(e){return{root:{borderBottom:"1px solid ".concat(e.palette.divider),margin:0,padding:2*e.spacing.unit},closeButton:{position:"absolute",right:e.spacing.unit,top:e.spacing.unit,color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose;return r.a.createElement(w.a,{disableTypography:!0,className:a.root},r.a.createElement(B.a,{variant:"h6"},t),n?r.a.createElement(N.a,{"aria-label":"Close",className:a.closeButton,onClick:n},r.a.createElement(I.a,null)):null)})),F=Object(f.withStyles)((function(e){return{root:{margin:0,padding:2*e.spacing.unit}}}))(C.a),_=Object(f.withStyles)((function(e){return{root:{borderTop:"1px solid ".concat(e.palette.divider),margin:0,padding:e.spacing.unit}}}))(k.a),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.name;return r.a.createElement("div",null,r.a.createElement(E.a,{size:"small",color:"default",onClick:this.handleClickOpen},"Learn More"),r.a.createElement(v.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},r.a.createElement(L,{id:"customized-dialog-title",onClose:this.handleClose},a),r.a.createElement(F,null,t),r.a.createElement(_,null,r.a.createElement(E.a,{onClick:this.handleClose,color:"default"},"Close"))))}}]),t}(r.a.Component),z=a(54),P=a.n(z),W=a(51),A=a.n(W),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1,tempUrl:"https://robohash.org/".concat(a.props.id,"?300x350")},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,n=e.id;return this.state.hasError?r.a.createElement(A.a,{component:"img",alt:a,className:t.media,height:"350",image:this.state.tempUrl,"aria-label":a,id:n}):this.props.children}}]),t}(n.Component),G=Object(f.withStyles)({media:{objectFit:"cover",minWidth:300,minHeight:350,zIndex:2,position:"relative"}})(M),H=a(53),q=a.n(H),Q=a(52),J=a.n(Q),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={imgUrl:null,tempUrl:"https://robohash.org/".concat(a.props.id,"?300x350"),elID:"CardMediaWrapper"+a.props.id,imgLoaded:!1,imgTimeout:null},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r=this;return P.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5),o.prev=1,o.next=4,P.a.awrap(fetch("https://robohash.org/".concat(e,"?300x350")));case 4:return(t=o.sent).ok||console.error("(http error)",t.statusText),o.next=8,P.a.awrap(t.url);case 8:a=o.sent,this.setState({imgUrl:a}),(n=document.getElementById(this.state.elID)).onload=function(){r.setState({imgLoaded:!0})},n.onerror=function(e){r.setState({imgUrl:r.state.tempUrl}),console.error(e)},o.next=18;break;case 15:o.prev=15,o.t0=o.catch(1),console.error("(network error)",o.t0);case 18:this.state.imgLoaded||this.setState({imgTimeout:setTimeout((function(){r.forceSetImg()}),3e4)});case 20:case"end":return o.stop()}}),null,this,[[1,15]])}},{key:"forceSetImg",value:function(){this.state.imgLoaded||(this.setState({imgLoaded:!0,imgUrl:this.state.tempUrl}),console.error("(timed out)",this.state))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name;return r.a.createElement(G,{name:a,id:this.state.elID},r.a.createElement(J.a,{classes:{tooltip:t.tooltip},title:this.state.imgUrl?a:"Loading...",placement:"top"},r.a.createElement(A.a,{component:"img",alt:a,className:this.state.imgLoaded?t.media:"".concat(t.media," ").concat(t.mediaTemp),height:"350",image:this.state.imgUrl?this.state.imgUrl:this.state.tempUrl,"aria-label":a,id:this.state.elID})),this.state.imgLoaded?null:r.a.createElement(q.a,{className:t.progress}))}}]),t}(r.a.Component),$=Object(f.withStyles)({tooltip:{fontSize:15},media:{objectFit:"cover",minWidth:300,minHeight:350,zIndex:2,position:"relative"},mediaTemp:{opacity:".2",filter:"grayscale(1)"},mediaLoading:{display:"none"},progress:{position:"absolute",left:0,right:0,margin:"auto",top:0,bottom:0,zIndex:1,color:"#6f6f6f"}})(V),K=a(106),X=a.n(K),Y=a(107),Z=a.n(Y),ee=a(110),te=a.n(ee),ae=a(109),ne=a.n(ae),re=a(108),oe=a.n(re),ie=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,n=e.email,o=e.about,i=e.id;return r.a.createElement(X.a,{className:t.card,id:"robo".concat(i)},r.a.createElement(Z.a,null,r.a.createElement($,{name:a,id:i}),r.a.createElement(oe.a,null),r.a.createElement(ne.a,null,r.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(B.a,{component:"p"},n))),r.a.createElement(te.a,null,r.a.createElement(D,{name:a},r.a.createElement(B.a,{gutterBottom:!0},o))))}}]),t}(r.a.Component),ce=Object(f.withStyles)({card:{minWidth:300,minHeight:350}})(ie),se=a(41),le=a.n(se),ue=(a(254),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={spacing:"16"},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.robots,n=this.state.spacing;return r.a.createElement(le.a,{container:!0,className:t.root,spacing:16},r.a.createElement(le.a,{item:!0,xs:12},r.a.createElement(le.a,{container:!0,className:t.wrapper,justify:"center",spacing:Number(n)},a.map((function(e){return r.a.createElement(le.a,{key:e.id,item:!0},r.a.createElement(ce,{id:e.id,name:e.name,email:e.email,about:e.about}))})))))}}]),t}(r.a.Component)),me=Object(f.withStyles)((function(e){return{root:Object(g.a)({flexGrow:1,maxWidth:"1500px",margin:"auto"},e.breakpoints.down("md"),{maxWidth:"100%"}),wrapper:Object(g.a)({},e.breakpoints.down("md"),{maxWidth:"100%"}),control:{padding:2*e.spacing.unit}}}))(ue),pe=a(112),he=a.n(pe),de=a(111),be=a.n(de),ge=a(27),fe=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.searchChange;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(be.a,null)),r.a.createElement(he.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:a})))}}]),t}(r.a.Component),Oe=Object(f.withStyles)((function(e){var t;return{root:(t={},Object(g.a)(t,e.breakpoints.down("sm"),{flexGrow:1}),Object(g.a)(t,e.breakpoints.down("xs"),{paddingBottom:"15px"}),t),search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ge.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(g.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:200,"&:focus":{width:300}})}}))(fe),Ee=a(113),je=a.n(Ee),ve=a(114),ye=a.n(ve),we=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.onSearchChange;return r.a.createElement("div",{className:t.positionFixed},r.a.createElement(je.a,{position:"fixed",color:"default"},r.a.createElement(ye.a,{className:t.toolbar},r.a.createElement(B.a,{className:"".concat(t.title," robo-title"),variant:"h1",color:"inherit",noWrap:!0},"RoboFriends"),r.a.createElement("div",{className:t.grow}),r.a.createElement(Oe,{searchChange:a}))))}}]),t}(r.a.Component),Se=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(Object(f.withStyles)((function(e){return{positionFixed:Object(g.a)({marginBottom:"125px"},e.breakpoints.down("xs"),{marginBottom:"135px"}),toolbar:Object(g.a)({},e.breakpoints.down("xs"),{flexFlow:"column",alignItems:"stretch"}),grow:{flexGrow:1},title:{textAlign:"center"}}}))(we)),Ce=a(116),xe=a.n(Ce),ke=a(117),Re=a.n(ke),Ne=a(118),Te=a.n(Ne),Ie=a(115),Ue=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(xe.a,{showLabels:!0,className:e.root},r.a.createElement(J.a,{classes:{tooltip:e.tooltip},title:"Repo",placement:"top"},r.a.createElement(Re.a,{icon:r.a.createElement(Te.a,{href:"https://github.com/UncaughtTypeError/Robofriends",className:e.link},r.a.createElement(Ie.a,{icon:["fab","github"],size:"2x",color:"white",className:e.icon}))})))}}]),t}(r.a.Component),Be=Object(f.withStyles)({root:{width:"100%",marginTop:"20px",height:"auto",padding:"5px 0"},icon:{marginBottom:"10px"},label:{color:"white"},tooltip:{fontSize:15}})(Ue),Le=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Error. No bots available."):this.props.children}}]),t}(n.Component),Fe=(a(283),a(65)),_e=a.n(Fe),De=a(40),ze=a(119),Pe=a(120);De.b.add(ze.a,Pe.a);var We=Object(f.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),Ae=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.searchField,n=e.robots,o=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return o?r.a.createElement(f.MuiThemeProvider,{theme:We},r.a.createElement(_e.a,null),r.a.createElement(q.a,{className:t.progress})):r.a.createElement(f.MuiThemeProvider,{theme:We},r.a.createElement(_e.a,null),r.a.createElement(Se,null),r.a.createElement(Le,null,r.a.createElement(me,{robots:i})),r.a.createElement(Be,null))}}]),t}(r.a.Component),Me=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://my-json-server.typicode.com/UncaughtTypeError/MyJasonServer/robots").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(Object(f.withStyles)({root:{flexGrow:1,marginBottom:"10px"},progress:{position:"absolute",left:0,right:0,margin:"auto",top:0,bottom:0,zIndex:1,color:"#6f6f6f"}})(Ae));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=a(42),He={searchField:""},qe={isPending:!1,robots:[],error:""},Qe=Object(l.createLogger)(),Je=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(Ge.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(Ge.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(Ge.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(Ge.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),Ve=Object(s.d)(Je,Object(s.a)(u.a,Qe));i.a.render(r.a.createElement(c.a,{store:Ve},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.5872e47a.chunk.js.map