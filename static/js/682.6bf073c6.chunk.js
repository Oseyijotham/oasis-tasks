"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[682],{1916:function(t,e,a){a.d(e,{w:function(){return d}});var s=a(4420),n=a(487),o=a(5984),i={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw",contactsPhone:"Filter_contactsPhone__hxyN-",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-",checkbox:"Filter_checkbox__wp-8y"},c=a(458),l=a(5075),r=a(184),d=function(){var t=(0,o.x0)(),e=(0,s.v9)(n.Af),a=(0,s.v9)(n.kL),d=(0,s.v9)(n.WS),u=(0,s.v9)(n.YI),m=(0,s.I0)(),p=e.filter((function(t){return t.name.toLowerCase().includes(u.trim().toLowerCase())&&""!==u.trim()})),_=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");m((0,l.he)(e)),m((0,l.h7)())}},h=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),m((0,l.GK)(t.target.name))};return(0,r.jsxs)("div",{className:i.contactList,children:[(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("span",{className:i.formLabel,children:"Search Tasks By Title:"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Task title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,onChange:function(t){m((0,c.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:i.formInput,value:u})]}),""!==u&&0!==p.length&&(0,r.jsx)("ul",{className:i.contactsList,children:p.map((function(t){var e=p.indexOf(t);if(e>=d&&e<a)return(0,r.jsxs)("li",{"data-id":t._id,className:i.contactsItem,onClick:_,children:[(0,r.jsxs)("span",{className:i.contactsData,"data-id":t._id,children:[(0,r.jsx)("input",{type:"checkbox",className:i.checkbox}),":"," ",(0,r.jsx)("span",{className:i.contactsPhone,"data-id":t._id,children:t.name})]}),(0,r.jsx)("span",{className:i.contactsButtonArea,children:(0,r.jsx)("button",{type:"submit",className:i.contactsButton,name:t._id,onClick:h,children:"Delete"})})]},t._id)}))})]})}},6682:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return V},default:function(){return P}});var s=a(1413),n=a(4925),o=a(4942),i=a(3433),c=a(9439),l=a(4420),r=a(2791),d=a(487),u=a(5075),m="TasksCompletedList_notification__PNe9E",p="TasksCompletedList_contactsSection__zPZf2",_="TasksCompletedList_contactsTitle__C-sbK",h="TasksCompletedList_contactsList__rMpzJ",f="TasksCompletedList_contactsListAlt__1YXeP",x="TasksCompletedList_contactsData__FCbD6",g="TasksCompletedList_contactsPhone__o5lEI",C="TasksCompletedList_contactsItem__gZe57",k="TasksCompletedList_checkbox__86Cgb",S="TasksCompletedList_contactsButtonArea__4SiYs",N="TasksCompletedList_contactsButton__iMJej",j="TasksCompletedList_navigationArea__rMVMK",b="TasksCompletedList_navigationButton__X7vix",v=a(184),T=function(t){var e=t.children,a=(0,l.v9)(d.Af),s=((0,l.v9)(d.kL),(0,l.v9)(d.WS)),n=(0,l.v9)(d.xU),o=(0,l.v9)(d.zh),i=(0,l.I0)(),T=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),i((0,u.GK)(t.target.name))},I=(0,l.v9)(d.YI),y=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");i((0,u.Gh)(e)),i((0,u.og)())}},w=(0,r.useState)(0),L=(0,c.Z)(w,2),D=L[0],Z=L[1],W=(0,r.useState)(4),F=(0,c.Z)(W,2),V=F[0],P=F[1],A=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),Z(D-4),P(V-4)},B=function(t){i((0,u.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))},E=(a.filter((function(t){return t.name.toLowerCase().includes(I.trim().toLowerCase())&&""!==I.trim()})),a.filter((function(t){return!0===t.status})));return(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h3",{className:_,children:"Completed Tasks"}),e,0===E.length&&(0,v.jsxs)("div",{className:f,children:[n&&!o&&(0,v.jsx)("b",{className:m,children:"Loading Tasks..."}),!n&&!o&&(0,v.jsx)("b",{className:m,children:"No Tasks Here!!!"}),!n&&o&&(0,v.jsx)("b",{className:m,children:"Error!!!"})]}),0!==E.length&&(0,v.jsxs)("ul",{className:h,children:[console.log(E),E.map((function(t){var e=E.indexOf(t);if(e>=D&&e<V)return(0,v.jsxs)("li",{"data-id":t._id,className:C,onClick:y,children:[(0,v.jsxs)("span",{className:x,"data-id":t._id,children:[(0,v.jsx)("input",{type:"checkbox",className:k,checked:t.status,name:t._id,onChange:B}),":"," ",(0,v.jsx)("span",{className:g,"data-id":t._id,children:t.name})]}),(0,v.jsx)("span",{className:S,children:(0,v.jsx)("button",{type:"submit",className:N,name:t._id,onClick:T,children:"Delete"})})]},t._id)}))]}),(0,v.jsxs)("div",{className:j,children:[0!==D&&(0,v.jsx)("button",{className:b,onClick:A,children:"Prev"}),!(V>E.length)&&V!==E.length&&(0,v.jsx)("button",{className:b,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),Z(D+4),P(V+4)},children:"Forward"})]}),""!==I&&(0,v.jsx)("div",{className:j,children:0!==s&&(0,v.jsx)("button",{className:b,onClick:A,children:"Prev"})})]})},I=(a(1916),a(3733)),y={notification:"SortedCompletedTasks_notification__6MTf5",notificationShow:"SortedCompletedTasks_notificationShow__Jqwyy",sortedWrapper:"SortedCompletedTasks_sortedWrapper__O6FpK",coverWrapper:"SortedCompletedTasks_coverWrapper__-sMYd",contactsWrapperSpace:"SortedCompletedTasks_contactsWrapperSpace__toNO9",selected:"SortedCompletedTasks_selected__aEOTe",contactsDetailsHide:"SortedCompletedTasks_contactsDetailsHide__N8FQh",contactsDetailsShow:"SortedCompletedTasks_contactsDetailsShow__DR76z",closeModal:"SortedCompletedTasks_closeModal__8X40X",contactsDetailsArea:"SortedCompletedTasks_contactsDetailsArea__jikLk",contactImage:"SortedCompletedTasks_contactImage__I0POj",detailsSection:"SortedCompletedTasks_detailsSection__yjYF9",detailsImageWrapper:"SortedCompletedTasks_detailsImageWrapper__WmOUk",detailsImage:"SortedCompletedTasks_detailsImage__OpuBp",detailsImageButton:"SortedCompletedTasks_detailsImageButton__JU0dd",detailsImageInput:"SortedCompletedTasks_detailsImageInput__Cohik",detailsSectionTitle:"SortedCompletedTasks_detailsSectionTitle__pmpFf",detailsWrapper:"SortedCompletedTasks_detailsWrapper__yjCiP",detailsItem:"SortedCompletedTasks_detailsItem__cGEhF",detailsCover:"SortedCompletedTasks_detailsCover__84U5y",detailsInfo:"SortedCompletedTasks_detailsInfo__1894o",details:"SortedCompletedTasks_details__7ssqe",detailsVal:"SortedCompletedTasks_detailsVal__zsUEv",detailsDetailsVal:"SortedCompletedTasks_detailsDetailsVal__2OV3k",detailsValPhone:"SortedCompletedTasks_detailsValPhone__wz3vy",detailsValInput:"SortedCompletedTasks_detailsValInput__Fi0iS",detailsDetailsValInput:"SortedCompletedTasks_detailsDetailsValInput__ggUq6",detailsValInputPhone:"SortedCompletedTasks_detailsValInputPhone__NYQha",backDrop:"SortedCompletedTasks_backDrop__Pvv+L",loader:"SortedCompletedTasks_loader__7XXH7",detailButton:"SortedCompletedTasks_detailButton__7I7pA",buttonWrapper:"SortedCompletedTasks_buttonWrapper__Tkrr8",detailsEditClose:"SortedCompletedTasks_detailsEditClose__2oCEp"};var w=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",L=a(4137),D=a(7694),Z=a.n(D),W=a(9557),F=(a(1107),["defaultValue"]),V=function(){var t=(0,r.useState)(new Date),e=(0,c.Z)(t,2),a=e[0],m=e[1],p=(0,r.useState)(!1),_=(0,c.Z)(p,2),h=_[0],f=_[1],x=(0,r.useState)(""),g=(0,c.Z)(x,2),C=g[0],k=g[1],S=(0,r.useState)(!1),N=(0,c.Z)(S,2),j=N[0],b=N[1],D=(0,l.v9)(d.WR),V=(0,r.useState)(D.email),P=(0,c.Z)(V,2),A=P[0],B=P[1],E=(0,r.useState)(!1),M=(0,c.Z)(E,2),U=M[0],q=M[1],z=(0,r.useState)(""),O=(0,c.Z)(z,2),X=O[0],Y=O[1],H=(0,l.I0)(),K=(0,l.v9)(d.xU),Q=(0,l.v9)(d.Qc),G=(0,l.v9)(d.zh),J=(0,l.v9)(d._4);return(0,r.useEffect)((function(){H((0,u.yF)())}),[H]),(0,r.useEffect)((function(){B(D.email)}),[D.email]),(0,r.useEffect)((function(){k(D.name)}),[D.name]),(0,r.useEffect)((function(){var t=navigator.language,e=new Date(D.phone),a=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});Y(a.format(e))}),[D.phone]),(0,v.jsxs)("div",{className:(0,I.Z)(y.coverWrapper,(0,o.Z)({},y.contactsWrapperSpace,J)),children:[(0,v.jsx)("b",{className:(0,I.Z)(y.notification,(0,o.Z)({},y.notificationShow,K&&!G)),children:"Please wait..."}),G&&(0,v.jsx)("b",{className:y.notificationShow,children:"There was an error, logout and login again!!!"}),(0,v.jsxs)("div",{className:(0,I.Z)(y.contactsDetailsHide,(0,o.Z)({},y.contactsDetailsShow,J)),children:[Q&&(0,v.jsx)("div",{className:y.backDrop,children:(0,v.jsx)(L.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:y.loader})}),(0,v.jsx)("button",{className:y.closeModal,onClick:function(){H((0,u.VK)()),f(!1),b(!1)},children:(0,v.jsx)("svg",{width:"10px",height:"10px",className:y.modalIcon,children:(0,v.jsx)("use",{href:"".concat(w,"#icon-cross")})})}),(0,v.jsx)("div",{className:y.detailsImageWrapper,children:(0,v.jsx)("img",{className:y.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(D.avatarURL),alt:"Contact"})}),(0,v.jsx)("input",{className:y.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&H((0,u.On)({myFile:e,myId:a}))},id:"2","data-id":D._id}),(0,v.jsx)("label",{className:y.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,v.jsxs)("ul",{className:y.detailsWrapper,children:[(0,v.jsx)("li",{className:y.detailsItem,children:(0,v.jsxs)("span",{className:y.detailsCover,children:[(0,v.jsxs)("span",{className:y.detailsInfo,children:[(0,v.jsx)("span",{className:y.details,children:"Task Title:"})," ",!1===h?(0,v.jsx)("span",{className:y.detailsVal,children:(0,v.jsx)("i",{className:y.detail,children:D.name})}):(0,v.jsx)("input",{type:"text",className:y.detailsValInput,required:!0,onChange:function(t){k(t.target.value);var e,a=t.target.value,s=!1;a.length>45&&((e=(0,i.Z)(a)).pop(),t.target.value=e.join(""),s=!0),!0===s&&Z().Notify.warning("Maximum Charater limit is 45")},"data-id":D._id,name:"username",defaultValue:D.name})]}),(0,v.jsxs)("span",{className:y.buttonWrapper,children:[!0===h&&(0,v.jsx)("button",{className:y.detailsEditClose,onClick:function(){f(!1)},children:(0,v.jsx)("svg",{width:"5px",height:"5px",className:y.modalIcon,children:(0,v.jsx)("use",{href:"".concat(w,"#icon-cross")})})}),!1===h?(0,v.jsx)("button",{className:y.detailButton,onClick:function(t){f(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},children:"Edit"}):(0,v.jsx)("button",{name:D._id,className:y.detailButton,onClick:function(t){if(""!==C.trim()){var e=t.target.name;H((0,u.A0)({name:C,myUpdateId:e})),f(!1)}else""===C.trim()&&Z().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,v.jsx)("li",{className:y.detailsItem,children:(0,v.jsxs)("span",{className:y.detailsCover,children:[(0,v.jsxs)("span",{className:y.detailsInfo,children:[(0,v.jsx)("span",{className:y.details,children:"Task Details:"})," ",!1===j?(0,v.jsx)("pre",{className:y.detailsDetailsVal,children:(0,v.jsx)("i",{className:y.detail,children:D.email})}):(0,v.jsx)("textarea",{type:"text",className:y.detailsDetailsValInput,required:!0,onChange:function(t){B(t.target.value);var e,a=t.target.value,s=!1;a.length>200&&((e=(0,i.Z)(a)).pop(),t.target.value=e.join(""),s=!0),!0===s&&Z().Notify.warning("Maximum Charater limit is 200")},"data-id":D._id,name:"email",title:"Enter the details of your task",defaultValue:D.email})]}),(0,v.jsxs)("span",{className:y.buttonWrapper,children:[!0===j&&(0,v.jsx)("button",{className:y.detailsEditClose,onClick:function(){b(!1),B(D.email)},children:(0,v.jsx)("svg",{width:"5px",height:"5px",className:y.modalIcon,children:(0,v.jsx)("use",{href:"".concat(w,"#icon-cross")})})}),!1===j?(0,v.jsx)("button",{className:y.detailButton,onClick:function(t){b(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},children:"Edit"}):(0,v.jsx)("button",{name:D._id,className:y.detailButton,onClick:function(t){if(""!==A.trim()){var e=t.target.name;H((0,u.ao)({email:A,myUpdateId:e})),b(!1)}else""===A.trim()&&Z().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,v.jsx)("li",{className:y.detailsItem,children:(0,v.jsxs)("span",{className:y.detailsCover,children:[(0,v.jsxs)("span",{className:y.detailsInfo,children:[(0,v.jsx)("span",{className:y.details,children:"Due Date:"})," ",!1===U?(0,v.jsx)("span",{className:y.detailsValPhone,children:(0,v.jsx)("i",{className:y.detail,children:X})}):(0,v.jsx)(W.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?Z().Notify.warning("Choose a date in the future"):Z().Notify.success("Due Date Selected"),m(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,n.Z)(t,F);return(0,v.jsx)("input",(0,s.Z)((0,s.Z)({},a),{},{ref:e,className:y.detailsValInputPhone,required:!0,"data-id":D._id,name:"date"}))}})]}),(0,v.jsxs)("span",{className:y.buttonWrapper,children:[!0===U&&(0,v.jsx)("button",{className:y.detailsEditClose,onClick:function(){q(!1)},children:(0,v.jsx)("svg",{width:"5px",height:"5px",className:y.modalIcon,children:(0,v.jsx)("use",{href:"".concat(w,"#icon-cross")})})}),!1===U?(0,v.jsx)("button",{className:y.detailButton,onClick:function(t){q(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="date"]').focus()}),100)},children:"Edit"}):(0,v.jsx)("button",{name:D._id,className:y.detailButton,onClick:function(t){var e=t.target.name,s=new Date;a<=s?Z().Notify.failure("Invalid date, choose a date in the future"):H((0,u.nW)({phone:a,myUpdateId:e})),q(!1),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})})]})]}),(0,v.jsx)("div",{className:(0,I.Z)(y.sortedWrapper,(0,o.Z)({},y.selected,J)),children:(0,v.jsx)(T,{})})]})},P=V},487:function(t,e,a){a.d(e,{Af:function(){return s},D1:function(){return m},F6:function(){return r},NX:function(){return u},Q9:function(){return c},Qc:function(){return x},U3:function(){return f},WR:function(){return h},WS:function(){return C},YI:function(){return n},Z6:function(){return l},_4:function(){return d},kL:function(){return g},qs:function(){return _},xL:function(){return p},xU:function(){return o},zh:function(){return i}});var s=function(t){return t.contacts.contacts.items},n=function(t){return t.filter},o=function(t){return t.contacts.contacts.isLoading},i=function(t){return t.contacts.contacts.error},c=function(t){return t.contacts.contacts.openMyModal},l=function(t){return t.contacts.contacts.openMyAllModal},r=function(t){return t.contacts.contacts.openMyPendingModal},d=function(t){return t.contacts.contacts.openMyCompletedModal},u=function(t){return t.contacts.contacts.openMyPastDueModal},m=function(t){return t.contacts.contacts.selectedContact},p=function(t){return t.contacts.contacts.selectedSortedAllContact},_=function(t){return t.contacts.contacts.selectedSortedPendingContact},h=function(t){return t.contacts.contacts.selectedSortedCompletedContact},f=function(t){return t.contacts.contacts.selectedSortedPastDueContact},x=function(t){return t.contacts.contacts.isSlideLoading},g=function(t){return t.contacts.contacts.filterUpLimit},C=function(t){return t.contacts.contacts.filterDownLimit}}}]);
//# sourceMappingURL=682.6bf073c6.chunk.js.map