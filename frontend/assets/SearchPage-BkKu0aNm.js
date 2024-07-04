import{j as s,L as c,z as v,g as i,n as f,E as u,f as g,x as b,r as w,Y as k}from"./index-BMh66HCr.js";import{S as y}from"./Search-DRdEgki6.js";import{U as S}from"./UserNavbar-YhX60dNv.js";import{s as _}from"./sliceText-D222lJel.js";import"./clsx-B-dksMZM.js";import"./useCloseOnOutsideClick-BstDWFtL.js";import"./index.esm-ClWcd2Qo.js";import"./x-BzdX7HG_.js";import"./convertDate-DsGWlg30.js";const z=()=>s.jsx("nav",{className:"shadow-sm",children:s.jsx("div",{className:"pcontainer py-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-5 w-full lg:w-fit",children:[s.jsx(c,{to:"/",children:s.jsx("img",{className:"w-14 h-14",src:v,alt:""})}),s.jsx("div",{className:"flex-1 ",children:s.jsx(y,{width:"w-full"})})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx(S,{})})]})})}),E=()=>{const l=i(e=>e.search.data.article);return s.jsxs("div",{className:"py-3",children:[s.jsx("div",{className:"pb-3 font-medium",children:s.jsx("h1",{children:"Articles:"})}),s.jsx("div",{className:"lg:w-1/2 flex flex-col gap-5",children:l.map(e=>s.jsx(c,{to:`/blog/articles/${e._id}`,children:s.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 group",children:[s.jsx("div",{children:s.jsx("div",{className:"w-44",children:s.jsx("img",{className:"rounded-md w-full",src:e.img,alt:""})})}),s.jsxs("div",{className:"flex flex-col gap-3 group-hover:text-blue-600 group-hover:underline",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"font-medium md:text-xl",children:e.title}),s.jsx("p",{className:"text-sm",children:_(e.description,120)})]}),s.jsxs("div",{className:"text-xs",children:["Powerd by ",s.jsx("span",{className:"font-medium underline",children:"Mahmoud Mohamed"})]})]})]})},e._id))})]})},L=()=>{const l=i(e=>e.search.data.doctor);return s.jsxs("div",{children:[s.jsx("div",{className:"pb-3 font-medium",children:s.jsx("h3",{children:"Doctors:"})}),s.jsx("div",{className:"flex flex-col gap-5",children:l==null?void 0:l.map(e=>s.jsx(c,{to:`/profile/${e._id}`,children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden",children:s.jsx("img",{className:"w-full h-full  object-contain",src:e.picture||"./person.jpg",alt:""})}),s.jsxs("div",{className:"flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline",children:[s.jsx("h2",{className:"font-semibold whitespace-nowrap",children:e.name}),s.jsxs("div",{className:"flex gap-2 text-xs",children:[s.jsxs("div",{className:"flex",children:[s.jsx(f,{className:"stroke-none size-5"}),s.jsx("span",{children:"Locaiton:"})]}),s.jsx("span",{className:"font-medium",children:e.country})]}),s.jsxs("div",{className:"flex gap-2 text-xs",children:[s.jsxs("div",{className:"flex",children:[s.jsx(u,{className:"size-5 fill-black-black"}),s.jsx("span",{children:"Specialization:"})]}),s.jsx("span",{className:"font-medium",children:e.specialization})]}),s.jsx("div",{className:"flex gap-2 text-xs",children:s.jsx("span",{className:"font-medium uppercase",children:e.role})})]})]})},e._id))})]})},P=()=>{const l=i(e=>e.search.data.user);return console.log(l),s.jsxs("div",{className:"py-5",children:[s.jsx("div",{className:"pb-3 font-medium",children:s.jsx("h3",{children:"Users:"})}),s.jsx("div",{className:"flex flex-col gap-5",children:l==null?void 0:l.map(e=>s.jsx(c,{to:`/profile/${e._id}`,children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden border border-black-black/30",children:s.jsx("img",{className:"w-full h-full  object-contain",src:e.picture||"./person.jpg",alt:""})}),s.jsxs("div",{className:"flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline",children:[s.jsx("h2",{className:"font-semibold whitespace-nowrap",children:e.name}),s.jsx("div",{className:"flex gap-2 text-xs",children:s.jsx("span",{className:"font-medium uppercase",children:e.role})})]})]})},e._id))})]})},T=()=>{const l=i(e=>e.search.data.pharmacist);return s.jsxs("div",{className:"pt-5",children:[s.jsx("div",{className:"pb-3 font-medium",children:s.jsx("h3",{children:"Pharmacists:"})}),s.jsx("div",{className:"flex flex-col gap-5",children:l==null?void 0:l.map(e=>s.jsx(c,{to:`/profile/${e._id}`,children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden",children:s.jsx("img",{className:"w-full h-full  object-contain",src:e.picture||"./person.jpg",alt:""})}),s.jsxs("div",{className:"flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline",children:[s.jsx("h2",{className:"font-semibold whitespace-nowrap",children:e.name}),s.jsxs("div",{className:"flex gap-2 text-xs",children:[s.jsxs("div",{className:"flex",children:[s.jsx(f,{className:"stroke-none size-5"}),s.jsx("span",{children:"Locaiton:"})]}),s.jsx("span",{className:"font-medium",children:e.country})]}),s.jsxs("div",{className:"flex gap-2 text-xs",children:[s.jsxs("div",{className:"flex",children:[s.jsx(u,{className:"size-5 fill-black-black"}),s.jsx("span",{children:"Specialization:"})]}),s.jsx("span",{className:"font-medium",children:e.specialization})]}),s.jsx("div",{className:"flex gap-2 text-xs",children:s.jsx("span",{className:"font-medium uppercase",children:e.role})})]})]})},e._id))})]})},F=()=>{var d,x,t,o,m,h,p,j;const l=g(),[e]=b(),n=e.get("keyword"),r=e.get("type"),a=i(N=>N.search);return console.log(a),w.useEffect(()=>{l({type:k,payload:{keyword:n,type:r}})},[l,n,r]),s.jsxs("div",{children:[s.jsx(z,{}),s.jsxs("div",{className:"py-5 space-y-5 pcontainer bg-gray-50 min-h-[calc(100svh-80px)]",children:[s.jsx("h4",{className:"text-lg font-medium",children:"The Result :"}),s.jsxs("div",{children:[(x=(d=a==null?void 0:a.data)==null?void 0:d.article)!=null&&x.length?s.jsx(E,{}):"",(o=(t=a==null?void 0:a.data)==null?void 0:t.doctor)!=null&&o.length?s.jsx(L,{}):"",(h=(m=a==null?void 0:a.data)==null?void 0:m.pharmacist)!=null&&h.length?s.jsx(T,{}):"",(j=(p=a==null?void 0:a.data)==null?void 0:p.user)!=null&&j.length?s.jsx(P,{}):""]})]})]})};export{F as default};
