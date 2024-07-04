import{Z as C}from"./index-BMh66HCr.js";var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Xe=e=>typeof e=="object";var S=e=>!L(e)&&!Array.isArray(e)&&Xe(e)&&!se(e),gr=e=>S(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),_r=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function p(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!_r(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=p(e[n]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],x=e=>e===void 0,d=(e,s,t)=>{if(!s||!S(e))return t;const n=fe(s.split(/[,[\].]+?/)).reduce((a,l)=>L(a)?a:a[l],e);return x(n)||n===e?x(e[s])?t:e[s]:n},G=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),Ye=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let n=-1;const a=Le(s)?[s]:Ye(s),l=a.length,g=l-1;for(;++n<l;){const h=a[n];let P=t;if(n!==g){const q=e[h];P=S(q)||Array.isArray(q)?q:isNaN(+a[n+1])?{}:[]}if(h==="__proto__")return;e[h]=P,e=e[h]}return e};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},er=C.createContext(null),pr=()=>C.useContext(er),Pr=e=>{const{children:s,...t}=e;return C.createElement(er.Provider,{value:t},s)};var br=(e,s,t,n=!0)=>{const a={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const g=l;return s._proxyFormState[g]!==I.all&&(s._proxyFormState[g]=!n||I.all),e[g]}});return a},U=e=>S(e)&&!Object.keys(e).length,Fr=(e,s,t,n)=>{t(e);const{name:a,...l}=e;return U(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(g=>s[g]===I.all)},Ee=e=>Array.isArray(e)?e:[e];function Vr(e){const s=C.useRef(e);s.current=e,C.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Ar=(e,s,t,n,a)=>H(e)?(n&&s.watch.add(e),d(t,e,a)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),d(t,l))):(n&&(s.watchAll=!0),t),xr=(e,s,t,n,a)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},$e=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ae=(e,s,t,n)=>{for(const a of t||Object.keys(e)){const l=d(e,a);if(l){const{_f:g,...h}=l;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],a)&&!n)break;if(g.ref&&s(g.ref,g.name)&&!n)break;ae(h,s)}else S(h)&&ae(h,s)}}};var wr=(e,s,t)=>{const n=fe(d(e,t));return A(n,"root",s[t]),A(e,t,n),e},Ce=e=>e.type==="file",J=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>H(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const je={value:!1,isValid:!1},Ze={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!x(e[0].attributes.value)?x(e[0].value)||e[0].value===""?Ze:{value:e[0].value,isValid:!0}:Ze:je}return je};const ze={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Ge(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||G(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var te=e=>S(e)&&!_e(e)?e:{value:e,message:""},Je=async(e,s,t,n,a)=>{const{ref:l,refs:g,required:h,maxLength:P,minLength:q,min:w,max:_,pattern:ce,validate:j,name:O,valueAsNumber:Ve,mount:Z,disabled:z}=e._f,b=d(s,O);if(!Z||z)return{};const W=g?g[0]:l,$=v=>{n&&W.reportValidity&&(W.setCustomValidity(G(v)?"":v||""),W.reportValidity())},E={},Y=Oe(l),de=oe(l),Q=Y||de,ee=(Ve||Ce(l))&&x(l.value)&&x(b)||ve(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,M=xr.bind(null,O,t,E),ye=(v,F,k,T=K.maxLength,B=K.minLength)=>{const N=v?F:k;E[O]={type:v?T:B,message:N,ref:l,...M(v?T:B,N)}};if(a?!Array.isArray(b)||!b.length:h&&(!Q&&(ee||L(b))||G(b)&&!b||de&&!rr(g).isValid||Y&&!tr(g).isValid)){const{value:v,message:F}=he(h)?{value:!!h,message:h}:te(h);if(v&&(E[O]={type:K.required,message:F,ref:W,...M(K.required,F)},!t))return $(F),E}if(!ee&&(!L(w)||!L(_))){let v,F;const k=te(_),T=te(w);if(!L(b)&&!isNaN(b)){const B=l.valueAsNumber||b&&+b;L(k.value)||(v=B>k.value),L(T.value)||(F=B<T.value)}else{const B=l.valueAsDate||new Date(b),N=le=>new Date(new Date().toDateString()+" "+le),ie=l.type=="time",ue=l.type=="week";H(k.value)&&b&&(v=ie?N(b)>N(k.value):ue?b>k.value:B>new Date(k.value)),H(T.value)&&b&&(F=ie?N(b)<N(T.value):ue?b<T.value:B<new Date(T.value))}if((v||F)&&(ye(!!v,k.message,T.message,K.max,K.min),!t))return $(E[O].message),E}if((P||q)&&!ee&&(H(b)||a&&Array.isArray(b))){const v=te(P),F=te(q),k=!L(v.value)&&b.length>+v.value,T=!L(F.value)&&b.length<+F.value;if((k||T)&&(ye(k,v.message,F.message),!t))return $(E[O].message),E}if(ce&&!ee&&H(b)){const{value:v,message:F}=te(ce);if(_e(v)&&!b.match(v)&&(E[O]={type:K.pattern,message:F,ref:l,...M(K.pattern,F)},!t))return $(F),E}if(j){if(J(j)){const v=await j(b,s),F=Ge(v,W);if(F&&(E[O]={...F,...M(K.validate,F.message)},!t))return $(F.message),E}else if(S(j)){let v={};for(const F in j){if(!U(v)&&!t)break;const k=Ge(await j[F](b,s),W,F);k&&(v={...k,...M(F,k.message)},$(k.message),t&&(E[O]=v))}if(!U(v)&&(E[O]={ref:W,...v},!t))return E}}return $(!0),E};function Dr(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=x(e)?n++:e[s[n++]];return e}function Er(e){for(const s in e)if(e.hasOwnProperty(s)&&!x(e[s]))return!1;return!0}function m(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:Ye(s),n=t.length===1?e:Dr(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(S(n)&&U(n)||Array.isArray(n)&&Er(n))&&m(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!Xe(e);function X(e,s){if(be(e)||be(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const a of t){const l=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const g=s[a];if(se(l)&&se(g)||S(l)&&S(g)||Array.isArray(l)&&Array.isArray(g)?!X(l,g):l!==g)return!1}}return!0}var sr=e=>e.type==="select-multiple",kr=e=>Oe(e)||oe(e),me=e=>ve(e)&&e.isConnected,ir=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const n in e)Array.isArray(e[n])||S(e[n])&&!ir(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Fe(e[n],s[n])):L(e[n])||(s[n]=!0);return s}function ur(e,s,t){const n=Array.isArray(e);if(S(e)||n)for(const a in e)Array.isArray(e[a])||S(e[a])&&!ir(e[a])?x(s)||be(t[a])?t[a]=Array.isArray(e[a])?Fe(e[a],[]):{...Fe(e[a])}:ur(e[a],L(s)?{}:s[a],t[a]):t[a]=!X(e[a],s[a]);return t}var ge=(e,s)=>ur(e,s,Fe(s)),lr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>x(e)?e:s?e===""?NaN:e&&+e:t&&H(e)?new Date(e):n?n(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ce(s)?s.files:Oe(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):oe(s)?rr(e.refs).value:lr(x(s.value)?e.ref.value:s.value,e)}var mr=(e,s,t,n)=>{const a={};for(const l of e){const g=d(s,l);g&&A(a,l,g._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ne=e=>x(e)?e:_e(e)?e.source:S(e)?_e(e.value)?e.value.source:e.value:e,Sr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,s,t){const n=d(e,t);if(n||Le(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),g=d(s,l),h=d(e,l);if(g&&!Array.isArray(g)&&t!==l)return{name:t};if(h&&h.type)return{name:l,error:h};a.pop()}return{name:t}}var Tr=(e,s,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Lr=(e,s)=>!fe(d(e,s)).length&&m(e,s);const Cr={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Or(e={}){let s={...Cr,...e},t={submitCount:0,isDirty:!1,isLoading:J(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},a=S(s.defaultValues)||S(s.values)?p(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:p(a),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},P,q=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:ke(),array:ke(),state:ke()},ce=$e(s.mode),j=$e(s.reValidateMode),O=s.criteriaMode===I.all,Ve=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},Z=async r=>{if(w.isValid||r){const i=s.resolver?U((await Q()).errors):await M(n,!0);i!==t.isValid&&_.state.next({isValid:i})}},z=(r,i)=>{(w.isValidating||w.validatingFields)&&((r||Array.from(h.mount)).forEach(u=>{u&&(i?A(t.validatingFields,u,i):m(t.validatingFields,u))}),_.state.next({validatingFields:t.validatingFields,isValidating:!U(t.validatingFields)}))},b=(r,i=[],u,c,f=!0,o=!0)=>{if(c&&u){if(g.action=!0,o&&Array.isArray(d(n,r))){const y=u(d(n,r),c.argA,c.argB);f&&A(n,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=u(d(t.errors,r),c.argA,c.argB);f&&A(t.errors,r,y),Lr(t.errors,r)}if(w.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=u(d(t.touchedFields,r),c.argA,c.argB);f&&A(t.touchedFields,r,y)}w.dirtyFields&&(t.dirtyFields=ge(a,l)),_.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(l,r,i)},W=(r,i)=>{A(t.errors,r,i),_.state.next({errors:t.errors})},$=r=>{t.errors=r,_.state.next({errors:t.errors,isValid:!1})},E=(r,i,u,c)=>{const f=d(n,r);if(f){const o=d(l,r,x(u)?d(a,r):u);x(o)||c&&c.defaultChecked||i?A(l,r,i?o:Se(f._f)):T(r,o),g.mount&&Z()}},Y=(r,i,u,c,f)=>{let o=!1,y=!1;const V={name:r},D=!!(d(n,r)&&d(n,r)._f&&d(n,r)._f.disabled);if(!u||c){w.isDirty&&(y=t.isDirty,t.isDirty=V.isDirty=v(),o=y!==V.isDirty);const R=D||X(d(a,r),i);y=!!(!D&&d(t.dirtyFields,r)),R||D?m(t.dirtyFields,r):A(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||w.dirtyFields&&y!==!R}if(u){const R=d(t.touchedFields,r);R||(A(t.touchedFields,r,u),V.touchedFields=t.touchedFields,o=o||w.touchedFields&&R!==u)}return o&&f&&_.state.next(V),o?V:{}},de=(r,i,u,c)=>{const f=d(t.errors,r),o=w.isValid&&G(i)&&t.isValid!==i;if(e.delayError&&u?(P=Ve(()=>W(r,u)),P(e.delayError)):(clearTimeout(q),P=null,u?A(t.errors,r,u):m(t.errors,r)),(u?!X(f,u):f)||!U(c)||o){const y={...c,...o&&G(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},_.state.next(y)}},Q=async r=>{z(r,!0);const i=await s.resolver(l,s.context,mr(r||h.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return z(r),i},ee=async r=>{const{errors:i}=await Q(r);if(r)for(const u of r){const c=d(i,u);c?A(t.errors,u,c):m(t.errors,u)}else t.errors=i;return i},M=async(r,i,u={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const V=h.array.has(o.name);z([c],!0);const D=await Je(f,l,O,s.shouldUseNativeValidation&&!i,V);if(z([c]),D[o.name]&&(u.valid=!1,i))break;!i&&(d(D,o.name)?V?wr(t.errors,D,o.name):A(t.errors,o.name,D[o.name]):m(t.errors,o.name))}y&&await M(y,i,u)}}return u.valid},ye=()=>{for(const r of h.unMount){const i=d(n,r);i&&(i._f.refs?i._f.refs.every(u=>!me(u)):!me(i._f.ref))&&Ae(r)}h.unMount=new Set},v=(r,i)=>(r&&i&&A(l,r,i),!X(Re(),a)),F=(r,i,u)=>Ar(r,h,{...g.mount?l:x(i)?a:H(r)?{[r]:i}:i},u,i),k=r=>fe(d(g.mount?l:a,r,e.shouldUnregister?d(a,r,[]):[])),T=(r,i,u={})=>{const c=d(n,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(l,r,lr(i,o)),f=ve(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Ce(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:r,values:{...l}})))}(u.shouldDirty||u.shouldTouch)&&Y(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&le(r)},B=(r,i,u)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(n,o);(h.array.has(r)||!be(f)||y&&!y._f)&&!se(f)?B(o,f,u):T(o,f,u)}},N=(r,i,u={})=>{const c=d(n,r),f=h.array.has(r),o=p(i);A(l,r,o),f?(_.array.next({name:r,values:{...l}}),(w.isDirty||w.dirtyFields)&&u.shouldDirty&&_.state.next({name:r,dirtyFields:ge(a,l),isDirty:v(r,o)})):c&&!c._f&&!L(o)?B(r,o,u):T(r,o,u),Ke(r,h)&&_.state.next({...t}),_.values.next({name:g.mount?r:void 0,values:{...l}})},ie=async r=>{g.mount=!0;const i=r.target;let u=i.name,c=!0;const f=d(n,u),o=()=>i.type?Se(f._f):gr(r),y=V=>{c=Number.isNaN(V)||V===d(l,u,V)};if(f){let V,D;const R=o(),re=r.type===We.BLUR||r.type===We.FOCUS_OUT,cr=!Sr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||Tr(re,d(t.touchedFields,u),t.isSubmitted,j,ce),we=Ke(u,h,re);A(l,u,R),re?(f._f.onBlur&&f._f.onBlur(r),P&&P(0)):f._f.onChange&&f._f.onChange(r);const De=Y(u,R,re,!1),dr=!U(De)||we;if(!re&&_.values.next({name:u,type:r.type,values:{...l}}),cr)return w.isValid&&Z(),dr&&_.state.next({name:u,...we?{}:De});if(!re&&we&&_.state.next({...t}),s.resolver){const{errors:qe}=await Q([u]);if(y(R),c){const yr=Qe(t.errors,n,u),He=Qe(qe,n,yr.name||u);V=He.error,u=He.name,D=U(qe)}}else z([u],!0),V=(await Je(f,l,O,s.shouldUseNativeValidation))[u],z([u]),y(R),c&&(V?D=!1:w.isValid&&(D=await M(n,!0)));c&&(f._f.deps&&le(f._f.deps),de(u,D,V,De))}},ue=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let u,c;const f=Ee(r);if(s.resolver){const o=await ee(x(r)?r:f);u=U(o),c=r?!f.some(y=>d(o,y)):u}else r?(c=(await Promise.all(f.map(async o=>{const y=d(n,o);return await M(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&Z()):c=u=await M(n);return _.state.next({...!H(r)||w.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors}),i.shouldFocus&&!c&&ae(n,ue,r?f:h.mount),c},Re=r=>{const i={...g.mount?l:a};return x(r)?i:H(r)?d(i,r):r.map(u=>d(i,u))},Ue=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),nr=r=>{r&&Ee(r).forEach(i=>m(t.errors,i)),_.state.next({errors:r?t.errors:{}})},Me=(r,i,u)=>{const c=(d(n,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:y,type:V,...D}=f;A(t.errors,r,{...D,...i,ref:c}),_.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&c&&c.focus&&c.focus()},ar=(r,i)=>J(r)?_.values.subscribe({next:u=>r(F(void 0,i),u)}):F(r,i,!0),Ae=(r,i={})=>{for(const u of r?Ee(r):h.mount)h.mount.delete(u),h.array.delete(u),i.keepValue||(m(n,u),m(l,u)),!i.keepError&&m(t.errors,u),!i.keepDirty&&m(t.dirtyFields,u),!i.keepTouched&&m(t.touchedFields,u),!i.keepIsValidating&&m(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&m(a,u);_.values.next({values:{...l}}),_.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&Z()},Ne=({disabled:r,name:i,field:u,fields:c,value:f})=>{if(G(r)&&g.mount||r){const o=r?void 0:x(f)?Se(u?u._f:d(c,i)._f):f;A(l,i,o),Y(i,o,!1,!1,!0)}},xe=(r,i={})=>{let u=d(n,r);const c=G(i.disabled);return A(n,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),u?Ne({field:u,disabled:i.disabled,name:r,value:i.value}):E(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(r,i),u=d(n,r);const o=x(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=kr(o),V=u._f.refs||[];if(y?V.find(D=>D===o):o===u._f.ref)return;A(n,r,{_f:{...u._f,...y?{refs:[...V.filter(me),o,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),E(r,!1,void 0,o)}else u=d(n,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(h.array,r)&&g.action)&&h.unMount.add(r)}}},pe=()=>s.shouldFocusError&&ae(n,ue,h.mount),or=r=>{G(r)&&(_.state.next({disabled:r}),ae(n,(i,u)=>{const c=d(n,u);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Pe=(r,i)=>async u=>{let c;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=p(l);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await Q();t.errors=o,f=y}else await M(n);if(m(t.errors,"root"),U(t.errors)){_.state.next({errors:{}});try{await r(f,u)}catch(o){c=o}}else i&&await i({...t.errors},u),pe(),setTimeout(pe);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(n,r)&&(x(i.defaultValue)?N(r,p(d(a,r))):(N(r,i.defaultValue),A(a,r,p(i.defaultValue))),i.keepTouched||m(t.touchedFields,r),i.keepDirty||(m(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,p(d(a,r))):v()),i.keepError||(m(t.errors,r),w.isValid&&Z()),_.state.next({...t}))},Be=(r,i={})=>{const u=r?p(r):a,c=p(u),f=U(r),o=f?a:c;if(i.keepDefaultValues||(a=u),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?A(o,y,d(l,y)):N(y,d(o,y));else{if(Te&&x(r))for(const y of h.mount){const V=d(n,y);if(V&&V._f){const D=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(ve(D)){const R=D.closest("form");if(R){R.reset();break}}}}n={}}l=e.shouldUnregister?i.keepDefaultValues?p(a):{}:p(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!w.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!X(r,a)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&l?ge(a,l):t.dirtyFields:i.keepDefaultValues&&r?ge(a,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ie=(r,i)=>Be(J(r)?r(l):r,i);return{control:{register:xe,unregister:Ae,getFieldState:Ue,handleSubmit:Pe,setError:Me,_executeSchema:Q,_getWatch:F,_getDirty:v,_updateValid:Z,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Ne,_getFieldArray:k,_reset:Be,_resetDefaultValues:()=>J(s.defaultValues)&&s.defaultValues().then(r=>{Ie(r,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:_,_proxyFormState:w,_setErrors:$,get _fields(){return n},get _formValues(){return l},get _state(){return g},set _state(r){g=r},get _defaultValues(){return a},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:xe,handleSubmit:Pe,watch:ar,setValue:N,getValues:Re,reset:Ie,resetField:fr,clearErrors:nr,unregister:Ae,setError:Me,setFocus:(r,i={})=>{const u=d(n,r),c=u&&u._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ue}}function Br(e={}){const s=C.useRef(),t=C.useRef(),[n,a]=C.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Or(e),formState:n});const l=s.current.control;return l._options=e,Vr({subject:l._subjects.state,next:g=>{Fr(g,l._proxyFormState,l._updateFormState)&&a({...l._formState})}}),C.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),C.useEffect(()=>{if(l._proxyFormState.isDirty){const g=l._getDirty();g!==n.isDirty&&l._subjects.state.next({isDirty:g})}},[l,n.isDirty]),C.useEffect(()=>{e.values&&!X(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,a(g=>({...g}))):l._resetDefaultValues()},[e.values,l]),C.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),C.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),C.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=br(n,l),s.current}export{Pr as F,pr as a,Br as u};
