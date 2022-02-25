(this.webpackJsonpwatchlist=this.webpackJsonpwatchlist||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(11),i=c.n(n),r=c(6),l=c(2),o=c(0),d=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"inner-content",children:[Object(o.jsx)("div",{className:"brand",children:Object(o.jsx)(r.b,{to:"/",children:"Watchlist"})}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Watch List"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/watched",children:"Watched"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/add",className:"btn",children:"+ Add"})})]})]})})})},j=c(4),h=c(9),b=c(5),O=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(h.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(h.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(b.a)(Object(b.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},u={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},m=Object(a.createContext)(u),x=function(e){var t=Object(a.useReducer)(O,u),c=Object(j.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(s.watchlist)),localStorage.setItem("watched",JSON.stringify(s.watched))}),[s]);return Object(o.jsx)(m.Provider,{value:{watchlist:s.watchlist,watched:s.watched,addMovieToWatchlist:function(e){n({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){n({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){n({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){n({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){n({type:"REMOVE_FROM_WATCHED",payload:e})}},children:e.children})},v=function(e){var t=e.movie,c=e.type,s=Object(a.useContext)(m),n=s.removeMovieFromWatchlist,i=s.addMovieToWatched,r=s.moveToWatchlist,l=s.removeFromWatched;return Object(o.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(t)},children:Object(o.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return n(t.id)},children:Object(o.jsx)("i",{className:"fa-fw fa fa-times"})})]}),"watched"===c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return r(t)},children:Object(o.jsx)("i",{className:"fa-fw far fa-eye-slash"})}),Object(o.jsx)("button",{className:"ctrl-btn",onClick:function(){return l(t.id)},children:Object(o.jsx)("i",{className:"fa-fw fa fa-times"})})]})]})},f=function(e){var t=e.movie,c=e.type;return Object(o.jsxs)("div",{className:"movie-card",children:[Object(o.jsx)("div",{className:"overlay"}),t.poster_path?Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.poster," Poster")}):Object(o.jsx)("div",{className:"filter-poster"}),Object(o.jsx)(v,{type:c,movie:t})]})},p=function(){var e=Object(a.useContext)(m).watchlist;return Object(o.jsx)("div",{className:"movie-page",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(o.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"movie":"movies"]})]}),e.length?Object(o.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(o.jsx)(f,{movie:e,type:"watchlist"})}))}):Object(o.jsx)("h2",{className:"no-movies",children:"No movies in ypur list"})]})})},N=function(){var e=Object(a.useContext)(m).watched;return Object(o.jsx)("div",{className:"movie-page",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(o.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"movie":"movies"]})]}),e.length?Object(o.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(o.jsx)(f,{movie:e,type:"watched"})}))}):Object(o.jsx)("h2",{className:"no-movies",children:"No movies in your list"})]})})},w=function(e){var t=e.movie,c=Object(a.useContext)(m),s=c.addMovieToWatchlist,n=c.addMovieToWatched,i=c.watchlist,r=c.watched,l=i.find((function(e){return e.id===t.id})),d=r.find((function(e){return e.id===t.id})),j=!!l||!!d,h=!!d;return Object(o.jsxs)("div",{className:"result-card",children:[Object(o.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.poster," Poster")}):Object(o.jsx)("div",{className:"filter-poster"})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h3",{className:"title",children:t.title}),Object(o.jsx)("h4",{className:"release-date",children:t.release_date?t.release_date.substring(0,4):"-"})]}),Object(o.jsxs)("div",{className:"controls",children:[Object(o.jsx)("button",{className:"btn",disabled:j,onClick:function(){return s(t)},children:"Add to Watchlist"}),Object(o.jsx)("button",{className:"btn",disabled:h,onClick:function(){return n(t)},children:"Add to Watched"})]})]})]})},g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(o.jsx)("div",{className:"add-page",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"add-content",children:[Object(o.jsx)("div",{className:"input-wrapper",children:Object(o.jsx)("input",{type:"text",placeholder:"Search for a movie",value:c,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("6258dfae2cf9670ac922100596ebe973","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?l([]):l(e.results)}))}})}),r.length>0&&Object(o.jsx)("ul",{className:"results",children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(w,{movie:e})},e.id)}))})]})})})};c(17),c(18);var y=function(){return Object(o.jsx)(x,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",element:Object(o.jsx)(p,{})}),Object(o.jsx)(l.a,{path:"/watched",element:Object(o.jsx)(N,{})}),Object(o.jsx)(l.a,{path:"/add",element:Object(o.jsx)(g,{})})]})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),_()}},[[19,1,2]]]);
//# sourceMappingURL=main.9ffa0d04.chunk.js.map