(()=>{var e={};e.id=549,e.ids=[549,888,660],e.modules={1941:e=>{e.exports={detail:"MeetupDetail_detail__fx3Eg"}},6084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>h,default:()=>S,getServerSideProps:()=>P,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>j,routeModule:()=>k,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>M,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>f});var s={};r.r(s),r.d(s,{default:()=>_meetupId_,getStaticPaths:()=>getStaticPaths,getStaticProps:()=>getStaticProps});var i=r(7093),a=r(5244),n=r(1323),o=r(9209),d=r.n(o),l=r(1444),c=r(997),p=r(8013),u=r(968),m=r.n(u),g=r(1941),_=r.n(g);let meetups_MeetupDetail=e=>(0,c.jsxs)("section",{className:_().detail,children:[c.jsx("img",{src:e.image,alt:e.title}),c.jsx("h1",{children:e.title}),c.jsx("address",{children:e.address}),c.jsx("p",{children:e.description})]}),getStaticPaths=async()=>{let e=await p.MongoClient.connect("mongodb+srv://mohamedatif:uNihCyzvijoKMiwF@cluster0.efrktsx.mongodb.net/meetups?retryWrites=true&w=majority"),t=e.db(),r=t.collection("meetups"),s=await r.find().toArray();return e.close(),{fallback:!1,paths:s.map(e=>({params:{meetupId:e._id.toString()}}))}},getStaticProps=async e=>{let t=e.params.meetupId,r=await p.MongoClient.connect("mongodb+srv://mohamedatif:uNihCyzvijoKMiwF@cluster0.efrktsx.mongodb.net/meetups?retryWrites=true&w=majority"),s=r.db(),i=s.collection("meetups"),a=await i.findOne({_id:new p.ObjectId(t)});return r.close(),{props:{meetup:{id:a._id.toString(),image:a.image,title:a.title,address:a.address,description:a.description}}}},_meetupId_=({meetup:e})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(m(),{children:[c.jsx("title",{children:e.title}),c.jsx("meta",{name:"description",content:e.description})]}),c.jsx(meetups_MeetupDetail,{image:e.image,title:e.title,address:e.address,description:e.description})]}),S=(0,n.l)(s,"default"),x=(0,n.l)(s,"getStaticProps"),b=(0,n.l)(s,"getStaticPaths"),P=(0,n.l)(s,"getServerSideProps"),h=(0,n.l)(s,"config"),j=(0,n.l)(s,"reportWebVitals"),f=(0,n.l)(s,"unstable_getStaticProps"),v=(0,n.l)(s,"unstable_getStaticPaths"),w=(0,n.l)(s,"unstable_getStaticParams"),y=(0,n.l)(s,"unstable_getServerProps"),M=(0,n.l)(s,"unstable_getServerSideProps"),k=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/[meetupId]",pathname:"/[meetupId]",bundlePath:"",filename:""},components:{App:l.default,Document:d()},userland:s})},8013:e=>{"use strict";e.exports=require("mongodb")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[801,209,664,450,444],()=>__webpack_exec__(6084));module.exports=r})();