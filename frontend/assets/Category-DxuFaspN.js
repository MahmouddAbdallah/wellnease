import{m as d,k as n,r as o,j as s,L as r,l as m,t as x,c as h}from"./index-BMh66HCr.js";import{N as p}from"./Navbar-D7rvvHVb.js";import{s as j}from"./sliceText-D222lJel.js";import{S as u}from"./UserNavbar-YhX60dNv.js";import"./clsx-B-dksMZM.js";import"./useCloseOnOutsideClick-BstDWFtL.js";import"./convertDate-DsGWlg30.js";/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=d("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]),c=({product:e})=>{const[i,t]=o.useState(0);return s.jsx("div",{className:"col-span-12 sm:col-span-6 lg:col-span-3 mt-5 sm:mt-0 shadow-sm",children:s.jsxs("div",{className:"px-3 border rounded-xl py-5",children:[s.jsx(r,{to:`/store/product/${e._id}`,className:"block h-60 border border-gray-300",children:s.jsx("img",{src:e.imgs[i],alt:e.title,className:"w-full h-full object-contain"})}),s.jsx("div",{className:"mt-3 space-x-2",children:e.imgs.map((l,a)=>s.jsx("button",{onClick:()=>t(a),className:"w-14 h-14 bg-black-black/5 border-gray-400",children:s.jsx("img",{className:"h-full w-full object-contain",src:l,alt:""})},l))}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("h3",{className:"text-lg font-semibold",children:e.title}),s.jsxs("p",{className:"font-medium",children:["price : ",e.price,"$"]}),s.jsx("p",{className:"text-sm",children:j(e.description,80)})]}),s.jsxs("div",{className:"flex w-full gap-3 mt-5",children:[s.jsx(r,{to:`/store/product/${e._id}`,className:" w-full rounded-full text-white-White bg-blue-500 p-2",children:s.jsxs("div",{className:"flex justify-center relative",children:[s.jsx("div",{className:"absolute left-3 lg:hidden",children:s.jsx(u,{className:"size-6"})}),s.jsx("div",{children:"Add Cart"})]})}),s.jsx("button",{className:" w-full rounded-full text-white-White bg-black-black p-2",children:s.jsxs("div",{className:"flex justify-center relative",children:[s.jsx("div",{className:"absolute left-3 lg:hidden",children:s.jsx(g,{className:"size-6"})}),s.jsx("div",{children:"Save"})]})})]})]})},e._id)};c.propTypes={product:n.any};const C=()=>{const{id:e}=m(),i=async()=>{const{data:a}=await h.get(`/api/store/product/${e}/category?fields=imgs,title,description,price`);return a},{data:t,isLoading:l}=x({queryKey:["storeCategory",e],queryFn:i});return s.jsxs("div",{children:[s.jsx(p,{}),s.jsx("div",{className:"min-h-svh pcontainer py-10",children:s.jsx("div",{className:"grid grid-cols-12 sm:gap-5 md:gap-10 lg:gap-5",children:!l&&t.products.map(a=>s.jsx(c,{product:a},a._id))})})]})};export{C as default};
