(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/finnabooks.861dabee.png"},33:function(e,a,t){e.exports=t(67)},38:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),i=(t(38),t(13)),s=t(11),o=t(15),m=t(6),u=t(7),d=t(9),f=t(8),h=t(10),p=t(12),b=t.n(p),E=t(29),g=r.a.createContext(),v=function(e,a){switch(a.type){case"SEARCH_BOOKS":return Object(E.a)({},e,{book_list:a.payload,heading:"Search Results"});default:return e}},k=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={book_list:[],heading:"Latest Books from Finna API",dispatch:function(e){return t.setState(function(a){return v(a,e)})}},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.finna.fi/api/v1/search?type=AllFields&field[]=id&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=ratings&filter[]=format%3A0%2FBook%2F&sort=relevance%2Cid%20asc&page=1&limit=100&prettyPrint=false&lng=fi").then(function(a){e.setState({book_list:a.data.records}),console.log(a.data.records)}).catch(function(e){return console.log(e.err)})}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),y=g.Consumer,N=t(30),O=t.n(N),j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={quickSearch:""},t.findBook=function(e,a){a.preventDefault(),b.a.get("https://api.finna.fi/v1/search?lookfor=".concat(t.state.quickSearch)).then(function(a){e({type:"SEARCH_BOOKS",payload:a.data.records})}).catch(function(e){return console.log(e.err)})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"onChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"row navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/",basename:"/finnabooks"},r.a.createElement("img",{src:O.a,alt:"logo"}),r.a.createElement("span",{className:"bluish"},"Finna"),"Books"),r.a.createElement(y,null,function(a){var t=a.dispatch;return r.a.createElement("form",{className:"form-inline",onSubmit:e.findBook.bind(e,t)},r.a.createElement("input",{className:"form-control input-lg",type:"text",id:"quick-search",placeholder:"Search for books by keyword / title / author / ISBN",name:"quickSearch","aria-label":"Search",value:e.state.quickSearch,onChange:e.onChange.bind(e)}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("button",{className:"btn btn-default",type:"submit"},"Advanced Search"))})))}}]),a}(n.Component);function w(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}var S=function(e){var a=e.book;return r.a.createElement("div",{className:"card-deck col-md-3"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement(i.b,{to:"details/book/".concat(a.id),className:"card-link"},r.a.createElement("img",{src:"https://api.finna.fi"+a.images,className:"card-img-top",alt:a.title}))," ",r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.title),r.a.createElement("p",{className:"card-text"},a.year))))},x=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(y,null,function(e){var a=e.book_list,t=e.heading;return"undefined"===a||0===a.length?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mb-4"},t),r.a.createElement("div",{className:"row"},a.map(function(e){return r.a.createElement(S,{key:e.id,book:e})})))})}}]),a}(n.Component),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))},A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={book_details:[],heading:"Book Details"},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.finna.fi/api/v1/record?id=".concat(this.props.match.params.id,"&field[]=isbns&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=rating&prettyPrint=false&lng=fi")).then(function(a){e.setState({book_details:a.data.records[0]}),console.log(a.data.records[0])}).catch(function(e){return console.log(e.err)})}},{key:"render",value:function(){var e=this.state.book_details,a=["far","far","far","far","far"];if(void 0===e||0===e.length||null==e)return r.a.createElement(w,null);console.log("Book Details:",e);for(var t=0;t<e.rating.average;t++)a[t]="fas";return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/",className:"btn btn-primary btn-sm mb4"},"Go back"),r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"https://api.finna.fi"+e.images,className:"card-img",alt:"Book cover"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Authors: "),e.primaryAuthors),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Publishers: "),e.publishers),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Year: "),e.year),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"ISBN: "),e.isbns),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Rating: ",e.rating.average," "),r.a.createElement("i",{className:a[0]+" fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:a[1]+" fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:a[2]+" fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:a[3]+" fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:a[4]+" fa-star","aria-hidden":"true"})))))))}}]),a}(n.Component);t(66);var C=function(){return r.a.createElement(k,null,r.a.createElement(i.a,{basename:"/finnabooks"},r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{exact:!0,path:"/details/book/:id",component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3c20bef6.chunk.js.map