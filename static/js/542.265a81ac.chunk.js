"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{1916:function(t,e,a){a.d(e,{w:function(){return d}});var n=a(4420),s=a(487),i=a(5984),o={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw",contactsPhone:"Filter_contactsPhone__hxyN-",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-",checkbox:"Filter_checkbox__wp-8y"},c=a(458),r=a(5075),l=a(184),d=function(){var t=(0,i.x0)(),e=(0,n.v9)(s.Af),a=(0,n.v9)(s.kL),d=(0,n.v9)(s.WS),u=(0,n.v9)(s.YI),m=(0,n.I0)(),_=e.filter((function(t){return t.name.toLowerCase().includes(u.trim().toLowerCase())&&""!==u.trim()})),h=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");m((0,r.he)(e)),m((0,r.h7)())}},g=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),m((0,r.GK)(t.target.name))};return(0,l.jsxs)("div",{className:o.contactList,children:[(0,l.jsxs)("label",{htmlFor:t,children:[(0,l.jsx)("span",{className:o.formLabel,children:"Search Tasks By Title:"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter Task title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,onChange:function(t){m((0,c.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:o.formInput,value:u})]}),""!==u&&0!==_.length&&(0,l.jsx)("ul",{className:o.contactsList,children:_.map((function(t){var e=_.indexOf(t);if(e>=d&&e<a)return(0,l.jsxs)("li",{"data-id":t._id,className:o.contactsItem,onClick:h,children:[(0,l.jsxs)("span",{className:o.contactsData,"data-id":t._id,children:[(0,l.jsx)("input",{type:"checkbox",className:o.checkbox}),":"," ",(0,l.jsx)("span",{className:o.contactsPhone,"data-id":t._id,children:t.name})]}),(0,l.jsx)("span",{className:o.contactsButtonArea,children:(0,l.jsx)("button",{type:"submit",className:o.contactsButton,name:t._id,onClick:g,children:"Delete"})})]},t._id)}))})]})}},4542:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return F},default:function(){return A}});var n=a(1413),s=a(4925),i=a(4942),o=a(3433),c=a(9439),r=a(4420),l=a(2791),d=a(487),u=a(5075),m="TasksPendingList_notification__2rkT4",_="TasksPendingList_contactsSection__CqPij",h="TasksPendingList_contactsTitle__RZMsU",g="TasksPendingList_contactsList__eTg0L",f="TasksPendingList_contactsListAlt__bBtUA",p="TasksPendingList_contactsData__eWahK",x="TasksPendingList_contactsPhone__kq-C-",k="TasksPendingList_contactsItem__FNPIO",S="TasksPendingList_checkbox__wJk3n",N="TasksPendingList_contactsButtonArea__f01sK",j="TasksPendingList_contactsButton__XjUHY",b="TasksPendingList_navigationArea__qKRwx",v="TasksPendingList_navigationButton__iIIqW",T=a(184),P=function(t){var e=t.children,a=(0,r.v9)(d.Af),n=((0,r.v9)(d.kL),(0,r.v9)(d.WS)),s=(0,r.v9)(d.xU),i=(0,r.v9)(d.zh),o=(0,r.I0)(),P=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),o((0,u.GK)(t.target.name))},I=(0,r.v9)(d.YI),w=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");o((0,u.uF)(e)),o((0,u.u8)())}},C=(0,l.useState)(0),y=(0,c.Z)(C,2),L=y[0],D=y[1],Z=(0,l.useState)(4),W=(0,c.Z)(Z,2),F=W[0],A=W[1],B=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),D(L-4),A(F-4)},V=function(t){o((0,u.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))},q=(a.filter((function(t){return t.name.toLowerCase().includes(I.trim().toLowerCase())&&""!==I.trim()})),a.filter((function(t){return!1===t.status})));return(0,T.jsxs)("div",{className:_,children:[(0,T.jsx)("h3",{className:h,children:"Pending Tasks"}),e,0===q.length&&(0,T.jsxs)("div",{className:f,children:[s&&!i&&(0,T.jsx)("b",{className:m,children:"Loading Tasks..."}),!s&&!i&&(0,T.jsx)("b",{className:m,children:"No Tasks Here!!!"}),!s&&i&&(0,T.jsx)("b",{className:m,children:"Error!!!"})]}),0!==q.length&&(0,T.jsx)("ul",{className:g,children:q.map((function(t){var e=q.indexOf(t);if(e>=L&&e<F)return(0,T.jsxs)("li",{"data-id":t._id,className:k,onClick:w,children:[(0,T.jsxs)("span",{className:p,"data-id":t._id,children:[(0,T.jsx)("input",{type:"checkbox",className:S,checked:t.status,name:t._id,onChange:V}),":"," ",(0,T.jsx)("span",{className:x,"data-id":t._id,children:t.name})]}),(0,T.jsx)("span",{className:N,children:(0,T.jsx)("button",{type:"submit",className:j,name:t._id,onClick:P,children:"Delete"})})]},t._id)}))}),(0,T.jsxs)("div",{className:b,children:[0!==L&&(0,T.jsx)("button",{className:v,onClick:B,children:"Prev"}),!(F>q.length)&&F!==q.length&&(0,T.jsx)("button",{className:v,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),D(L+4),A(F+4)},children:"Forward"})]}),""!==I&&(0,T.jsx)("div",{className:b,children:0!==n&&(0,T.jsx)("button",{className:v,onClick:B,children:"Prev"})})]})},I=(a(1916),a(3733)),w={notification:"SortedPendingTasks_notification__RXfw7",notificationShow:"SortedPendingTasks_notificationShow__glMEO",sortedWrapper:"SortedPendingTasks_sortedWrapper__+GkAa",coverWrapper:"SortedPendingTasks_coverWrapper__4NC-O",contactsWrapperSpace:"SortedPendingTasks_contactsWrapperSpace__JDLq+",selected:"SortedPendingTasks_selected__mH8+g",contactsDetailsHide:"SortedPendingTasks_contactsDetailsHide__zh1Sq",contactsDetailsShow:"SortedPendingTasks_contactsDetailsShow__mr-6d",closeModal:"SortedPendingTasks_closeModal__Z49UB",contactsDetailsArea:"SortedPendingTasks_contactsDetailsArea__-KiZv",contactImage:"SortedPendingTasks_contactImage__c4HP9",detailsSection:"SortedPendingTasks_detailsSection__YiEPA",detailsImageWrapper:"SortedPendingTasks_detailsImageWrapper__1PLqS",detailsImage:"SortedPendingTasks_detailsImage__CW2fF",detailsImageButton:"SortedPendingTasks_detailsImageButton__QhPm1",detailsImageInput:"SortedPendingTasks_detailsImageInput__By2iY",detailsSectionTitle:"SortedPendingTasks_detailsSectionTitle__+IcKF",detailsWrapper:"SortedPendingTasks_detailsWrapper__TkUR9",detailsItem:"SortedPendingTasks_detailsItem__-r3p3",detailsCover:"SortedPendingTasks_detailsCover__MeP9S",detailsInfo:"SortedPendingTasks_detailsInfo__F8NoU",details:"SortedPendingTasks_details__1z--R",detailsVal:"SortedPendingTasks_detailsVal__sCJZD",detailsDetailsVal:"SortedPendingTasks_detailsDetailsVal__j+tbb",detailsValPhone:"SortedPendingTasks_detailsValPhone__U59Pk",detailsValInput:"SortedPendingTasks_detailsValInput__AJjzR",detailsDetailsValInput:"SortedPendingTasks_detailsDetailsValInput__GGwfg",detailsValInputPhone:"SortedPendingTasks_detailsValInputPhone__C+cze",backDrop:"SortedPendingTasks_backDrop__qgnr7",loader:"SortedPendingTasks_loader__Xsfvz",detailButton:"SortedPendingTasks_detailButton__2FUQh",buttonWrapper:"SortedPendingTasks_buttonWrapper__MprnN",detailsEditClose:"SortedPendingTasks_detailsEditClose__FTYNV"};var C=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",y=a(4137),L=a(7694),D=a.n(L),Z=a(9557),W=(a(1107),["defaultValue"]),F=function(){var t=(0,l.useState)(new Date),e=(0,c.Z)(t,2),a=e[0],m=e[1],_=(0,l.useState)(!1),h=(0,c.Z)(_,2),g=h[0],f=h[1],p=(0,l.useState)(""),x=(0,c.Z)(p,2),k=x[0],S=x[1],N=(0,l.useState)(!1),j=(0,c.Z)(N,2),b=j[0],v=j[1],L=(0,r.v9)(d.qs),F=(0,l.useState)(L.email),A=(0,c.Z)(F,2),B=A[0],V=A[1],q=(0,l.useState)(!1),E=(0,c.Z)(q,2),M=E[0],U=E[1],z=(0,l.useState)(""),H=(0,c.Z)(z,2),R=H[0],Y=H[1],K=(0,r.I0)(),O=(0,r.v9)(d.xU),X=(0,r.v9)(d.Qc),G=(0,r.v9)(d.zh),Q=(0,r.v9)(d.F6);return(0,l.useEffect)((function(){K((0,u.yF)())}),[K]),(0,l.useEffect)((function(){V(L.email)}),[L.email]),(0,l.useEffect)((function(){S(L.name)}),[L.name]),(0,l.useEffect)((function(){var t=navigator.language,e=new Date(L.phone),a=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});Y(a.format(e))}),[L.phone]),(0,T.jsxs)("div",{className:(0,I.Z)(w.coverWrapper,(0,i.Z)({},w.contactsWrapperSpace,Q)),children:[(0,T.jsx)("b",{className:(0,I.Z)(w.notification,(0,i.Z)({},w.notificationShow,O&&!G)),children:"Please wait..."}),G&&(0,T.jsx)("b",{className:w.notificationShow,children:"There was an error, logout and login again!!!"}),(0,T.jsxs)("div",{className:(0,I.Z)(w.contactsDetailsHide,(0,i.Z)({},w.contactsDetailsShow,Q)),children:[X&&(0,T.jsx)("div",{className:w.backDrop,children:(0,T.jsx)(y.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:w.loader})}),(0,T.jsx)("button",{className:w.closeModal,onClick:function(){K((0,u.Eq)()),f(!1),v(!1)},children:(0,T.jsx)("svg",{width:"10px",height:"10px",className:w.modalIcon,children:(0,T.jsx)("use",{href:"".concat(C,"#icon-cross")})})}),(0,T.jsx)("div",{className:w.detailsImageWrapper,children:(0,T.jsx)("img",{className:w.detailsImage,src:"http://localhost:8000".concat(L.avatarURL),alt:"Contact"})}),(0,T.jsx)("input",{className:w.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&K((0,u.oC)({myFile:e,myId:a}))},id:"2","data-id":L._id}),(0,T.jsx)("label",{className:w.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,T.jsxs)("ul",{className:w.detailsWrapper,children:[(0,T.jsx)("li",{className:w.detailsItem,children:(0,T.jsxs)("span",{className:w.detailsCover,children:[(0,T.jsxs)("span",{className:w.detailsInfo,children:[(0,T.jsx)("span",{className:w.details,children:"Task Title:"})," ",!1===g?(0,T.jsx)("span",{className:w.detailsVal,children:(0,T.jsx)("i",{className:w.detail,children:L.name})}):(0,T.jsx)("input",{type:"text",className:w.detailsValInput,required:!0,onChange:function(t){S(t.target.value);var e,a=t.target.value,n=!1;a.length>45&&((e=(0,o.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&D().Notify.warning("Maximum Charater limit is 45")},"data-id":L._id,name:"username",defaultValue:L.name})]}),(0,T.jsxs)("span",{className:w.buttonWrapper,children:[!0===g&&(0,T.jsx)("button",{className:w.detailsEditClose,onClick:function(){f(!1)},children:(0,T.jsx)("svg",{width:"5px",height:"5px",className:w.modalIcon,children:(0,T.jsx)("use",{href:"".concat(C,"#icon-cross")})})}),!1===g?(0,T.jsx)("button",{className:w.detailButton,onClick:function(t){f(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},children:"Edit"}):(0,T.jsx)("button",{name:L._id,className:w.detailButton,onClick:function(t){if(""!==k.trim()){var e=t.target.name;K((0,u.YX)({name:k,myUpdateId:e})),f(!1)}else""===k.trim()&&D().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,T.jsx)("li",{className:w.detailsItem,children:(0,T.jsxs)("span",{className:w.detailsCover,children:[(0,T.jsxs)("span",{className:w.detailsInfo,children:[(0,T.jsx)("span",{className:w.details,children:"Task Details:"})," ",!1===b?(0,T.jsxs)("pre",{className:w.detailsDetailsVal,children:[(0,T.jsx)("i",{className:w.detail,children:L.email}),console.log(L.email)]}):(0,T.jsx)("textarea",{type:"text",className:w.detailsDetailsValInput,required:!0,onChange:function(t){V(t.target.value);var e,a=t.target.value,n=!1;a.length>200&&((e=(0,o.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&D().Notify.warning("Maximum Charater limit is 200")},"data-id":L._id,name:"email",title:"Enter the details of your task",defaultValue:L.email})]}),(0,T.jsxs)("span",{className:w.buttonWrapper,children:[!0===b&&(0,T.jsx)("button",{className:w.detailsEditClose,onClick:function(){v(!1),V(L.email)},children:(0,T.jsx)("svg",{width:"5px",height:"5px",className:w.modalIcon,children:(0,T.jsx)("use",{href:"".concat(C,"#icon-cross")})})}),!1===b?(0,T.jsx)("button",{className:w.detailButton,onClick:function(t){v(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},children:"Edit"}):(0,T.jsx)("button",{name:L._id,className:w.detailButton,onClick:function(t){if(""!==B.trim()){var e=t.target.name;K((0,u.d)({email:B,myUpdateId:e})),v(!1)}else""===B.trim()&&D().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,T.jsx)("li",{className:w.detailsItem,children:(0,T.jsxs)("span",{className:w.detailsCover,children:[(0,T.jsxs)("span",{className:w.detailsInfo,children:[(0,T.jsx)("span",{className:w.details,children:"Due Date:"})," ",!1===M?(0,T.jsx)("span",{className:w.detailsValPhone,children:(0,T.jsx)("i",{className:w.detail,children:R})}):(0,T.jsx)(Z.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?D().Notify.warning("Choose a date in the future"):D().Notify.success("Due Date Selected"),m(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,W);return(0,T.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:w.detailsValInputPhone,required:!0,"data-id":L._id,name:"date"}))}})]}),(0,T.jsxs)("span",{className:w.buttonWrapper,children:[!0===M&&(0,T.jsx)("button",{className:w.detailsEditClose,onClick:function(){U(!1)},children:(0,T.jsx)("svg",{width:"5px",height:"5px",className:w.modalIcon,children:(0,T.jsx)("use",{href:"".concat(C,"#icon-cross")})})}),!1===M?(0,T.jsx)("button",{className:w.detailButton,onClick:function(t){U(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="date"]').focus()}),100)},children:"Edit"}):(0,T.jsx)("button",{name:L._id,className:w.detailButton,onClick:function(t){var e=t.target.name,n=new Date;a<=n?D().Notify.failure("Invalid date, choose a date in the future"):K((0,u.y7)({phone:a,myUpdateId:e})),U(!1),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})})]})]}),(0,T.jsxs)("div",{className:(0,I.Z)(w.sortedWrapper,(0,i.Z)({},w.selected,Q)),children:[(0,T.jsx)("div",{}),(0,T.jsx)(P,{})]})]})},A=F},487:function(t,e,a){a.d(e,{Af:function(){return n},D1:function(){return m},F6:function(){return l},NX:function(){return u},Q9:function(){return c},Qc:function(){return p},U3:function(){return f},WR:function(){return g},WS:function(){return k},YI:function(){return s},Z6:function(){return r},_4:function(){return d},kL:function(){return x},qs:function(){return h},xL:function(){return _},xU:function(){return i},zh:function(){return o}});var n=function(t){return t.contacts.contacts.items},s=function(t){return t.filter},i=function(t){return t.contacts.contacts.isLoading},o=function(t){return t.contacts.contacts.error},c=function(t){return t.contacts.contacts.openMyModal},r=function(t){return t.contacts.contacts.openMyAllModal},l=function(t){return t.contacts.contacts.openMyPendingModal},d=function(t){return t.contacts.contacts.openMyCompletedModal},u=function(t){return t.contacts.contacts.openMyPastDueModal},m=function(t){return t.contacts.contacts.selectedContact},_=function(t){return t.contacts.contacts.selectedSortedAllContact},h=function(t){return t.contacts.contacts.selectedSortedPendingContact},g=function(t){return t.contacts.contacts.selectedSortedCompletedContact},f=function(t){return t.contacts.contacts.selectedSortedPastDueContact},p=function(t){return t.contacts.contacts.isSlideLoading},x=function(t){return t.contacts.contacts.filterUpLimit},k=function(t){return t.contacts.contacts.filterDownLimit}}}]);
//# sourceMappingURL=542.265a81ac.chunk.js.map