"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[870],{3870:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(9439),r=t(2791),a=t(7689),s=t(4373),o=t(5372),l=t(4554),d=t(9174),c=t(493),u=t(4220),f=t(3433),m=t(7630),p=t(890),g=t(4913),h=t(2911),v=t(5806),x=t(184),Z=(0,m.ZP)(l.Z)({padding:"0 0 0 10px",background:"#f2f6fc",display:"flex",alignItems:"center",cursor:"pointer","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),b=(0,m.ZP)(p.Z)({fontSize:"12px !important",background:"#ddd",color:"#222",padding:"0 4px",marginRight:6}),y=(0,m.ZP)(p.Z)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5f6368"}),S=function(e){var n=e.email,t=e.selectedEmails,i=e.setRefreshScreen,r=e.setSelectedEmails,c=(0,a.s0)(),u=(0,s.Z)(o.Y.toggleStarredEmail),m=function(){u.call({id:n._id,value:!n.starred}),i((function(e){return!e}))};return(0,x.jsxs)(Z,{children:[(0,x.jsx)(d.Z,{size:"small",checked:t.includes(n._id),onChange:function(){t.includes(n._id)?r((function(e){return e.filter((function(e){return e!=n._id}))})):r((function(e){return[].concat((0,f.Z)(e),[n._id])}))}}),n.starred?(0,x.jsx)(g.Z,{fontSize:"small",style:{marginRight:10,color:"#FFF200"},onClick:function(){return m()}}):(0,x.jsx)(h.Z,{fontSize:"small",style:{marginRight:10},onClick:function(){return m()}}),(0,x.jsxs)(l.Z,{onClick:function(){return c(v._.view.path,{state:{email:n}})},children:[(0,x.jsx)(p.Z,{style:{width:200,overflow:"hidden"},children:n.name}),(0,x.jsx)(b,{children:"Inbox"}),(0,x.jsxs)(p.Z,{children:[n.subject,n.body&&"-"," ",n.body]}),(0,x.jsxs)(y,{children:[new window.Date(n.date).getDate(),new window.Date(n.date).toLocaleString("default",{month:"long"})]})]})]})},w=t(7924),j=(0,m.ZP)(l.Z)({display:"flex",alignItems:"center",flexDirection:"column",marginTop:50,opacity:"0.8",width:"100%"}),k=(0,m.ZP)(w.Z)({}),E=function(e){var n=e.message;return(0,x.jsxs)(j,{children:[(0,x.jsx)(p.Z,{children:n.heading}),(0,x.jsx)(p.Z,{children:n.subHeading}),(0,x.jsx)(k,{})]})},T=t(6148),_=function(){var e,n,t=(0,r.useState)([]),f=(0,i.Z)(t,2),m=f[0],p=f[1],g=(0,r.useState)(!1),h=(0,i.Z)(g,2),v=h[0],Z=h[1],b=(0,a.bx)(),y=(0,a.UO)().type,w=(0,s.Z)(o.Y.getEmailFromType),j=(0,s.Z)(o.Y.moveEmailsToBin),k=(0,s.Z)(o.Y.deleteEmail);(0,r.useEffect)((function(){w.call({},y)}),[y,v]);return(0,x.jsxs)(l.Z,{style:b?{marginLeft:250,width:"calc(100% - 250px)",marginTop:"65px"}:{width:"100%",marginTop:"65px"},children:[(0,x.jsxs)(l.Z,{style:{padding:"20px 10px 0px 10px",display:"flex",alignItems:"center"},children:[(0,x.jsx)(d.Z,{size:"small",onChange:function(e){return function(e){if(e.target.checked){var n,t=null===w||void 0===w||null===(n=w.response)||void 0===n?void 0:n.map((function(e){return e._id}));p(t)}else p([])}(e)}}),(0,x.jsx)(u.Z,{onClick:function(e){return"bin"===y?k.call(m):j.call(m),void Z((function(e){return!e}))}})]}),(0,x.jsx)(c.Z,{children:null===w||void 0===w||null===(e=w.response)||void 0===e?void 0:e.map((function(e){return(0,x.jsx)(S,{email:e,selectedEmails:m,setRefreshScreen:Z,setSelectedEmails:p},e._id)}))}),0===(null===w||void 0===w||null===(n=w.response)||void 0===n?void 0:n.length)&&(0,x.jsx)(E,{message:T.Fr[y]})]})}},6148:function(e,n,t){t.d(n,{Fr:function(){return a},Pv:function(){return i},RJ:function(){return r}});var i="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",r="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",a={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(4165),r=t(5861),a=t(9439),s=t(2791),o=t(1243),l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,t,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(r),data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),d=l,c=function(e){var n=(0,s.useState)(null),t=(0,a.Z)(n,2),o=t[0],l=t[1],c=(0,s.useState)(""),u=(0,a.Z)(c,2),f=u[0],m=u[1],p=(0,s.useState)(!1),g=(0,a.Z)(p,2),h=g[0],v=g[1],x=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){var r,a,s=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"",l(null),m(""),v(!0),n.prev=4,n.next=7,d(e,t,r);case 7:a=n.sent,l(a.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),m(n.t0.message);case 14:return n.prev=14,v(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[4,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return{call:x,response:o,error:f,isLoading:h}}},5372:function(e,n,t){t.d(n,{Y:function(){return i}});var i={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=870.a598b489.chunk.js.map