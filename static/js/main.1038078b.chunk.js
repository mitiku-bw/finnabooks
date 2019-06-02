(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/finnabooks.861dabee.png"},31:function(e,a,t){e.exports=t(65)},36:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),s=(t(36),t(10)),i=t(6),o=t(28),m=t.n(o),d=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"row navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:m.a,alt:"logo"}),r.a.createElement("span",{className:"bluish"},"Finna"),"Books"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control input-lg",type:"text",id:"quick-search",placeholder:"Search for books by keyword / title / author / ISBN",name:"quik-search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("button",{className:"btn btn-default",type:"submit"},"Advanced Search"))))},u=t(7),f=t(8),h=t(11),p=t(9),b=t(12),E=t(14),g=t.n(E),v=r.a.createContext(),N=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={book_list:[],heading:"Books from Finna API"},t}return Object(b.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.finna.fi/api/v1/search?type=AllFields&field[]=id&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=ratings&filter[]=format%3A0%2FBook%2F&sort=relevance%2Cid%20asc&page=1&limit=100&prettyPrint=false&lng=fi").then(function(a){e.setState({book_list:a.data.records}),console.log(a.data.records)}).catch(function(e){return console.log(e.err)})}},{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=v.Consumer;function y(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}var w=function(e){var a=e.book;return r.a.createElement("div",{className:"card-deck col-md-3"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement(s.b,{to:"details/book/".concat(a.id),className:"card-link"},r.a.createElement("img",{src:"https://api.finna.fi"+a.images,className:"card-img-top",alt:a.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.title),r.a.createElement("p",{className:"card-text"},a.year)))))},j=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.book_list,t=e.heading;return"undefined"===a||0===a.length?r.a.createElement(y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mb-4"},t),r.a.createElement("div",{className:"row"},a.map(function(e){return r.a.createElement(w,{key:e.id,book:e})})))})}}]),a}(n.Component),x=function(){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null)))},O=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={book_details:[],heading:"Book Details"},t}return Object(b.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.finna.fi/api/v1/record?id=".concat(this.props.match.params.id,"&field[]=isbns&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=rating&prettyPrint=false&lng=fi")).then(function(a){e.setState({book_details:a.data.records[0]}),console.log(a.data.records[0])}).catch(function(e){return console.log(e.err)})}},{key:"render",value:function(){var e=this.state.book_details;return void 0===e||0===e.length||null==e?r.a.createElement(y,null):(console.log("Book Details:",e),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-primary btn-sm mb4"},"Go back"),r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"https://api.finna.fi"+e.images,className:"card-img",alt:"Book cover"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Authors: "),e.primaryAuthors),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Publishers: "),e.publishers),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Year: "),e.year),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"ISBN: "),e.isbns),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Rating: ",e.rating.average," "),r.a.createElement("i",{className:"fas fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fas fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"far fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"far fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"far fa-star","aria-hidden":"true"}))))))))}}]),a}(n.Component);t(64);var A=function(){return r.a.createElement(N,null,r.a.createElement(s.a,{basename:"/finnabooks"},r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{exact:!0,path:"/details/book/:id",component:O}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.1038078b.chunk.js.map