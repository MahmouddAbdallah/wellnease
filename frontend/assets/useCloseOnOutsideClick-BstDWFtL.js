import{r}from"./index-BMh66HCr.js";function o(t){const e=r.useRef();return r.useEffect(()=>{const n=s=>{e.current&&!e.current.contains(s.target)&&t()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t]),e}export{o as u};
