"use strict";(self["webpackChunkshop_product_page"]=self["webpackChunkshop_product_page"]||[]).push([[527],{184:function(t,o,u){u.r(o),u.d(o,{default:function(){return nt}});var e=u(252);const n={class:"card_product"};function i(t,o,u,i,d,l){const r=(0,e.up)("ProductPhoto"),c=(0,e.up)("ProductContent"),a=(0,e.up)("ProductGalery");return(0,e.wg)(),(0,e.iD)("section",n,[(0,e._)("div",null,[(0,e.Wm)(r),(0,e.Wm)(c)]),(0,e.Wm)(a)])}const d={class:"product_photo"},l={alt:"",class:"photo_main",width:"685",height:"880"},r={class:"photo_list"},c=["onClick"];function a(t,o,u,n,i,a){const s=(0,e.Q2)("lazy");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e.wy)((0,e._)("img",l,null,512),[[s,{src:i.currentPhoto,loading:i.pictures[0].url}]]),(0,e._)("div",r,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.pictures,(t=>(0,e.wy)(((0,e.wg)(),(0,e.iD)("img",{alt:"",onClick:o=>a.currentPicture(t.id),width:"70",height:"90"},null,8,c)),[[s,t.url]]))),256))])])}var s=u.p+"img/1.2cd1aa5d.jpg",p=u.p+"img/01.3d401352.jpg",_=u.p+"img/2.c610785a.jpg",m=u.p+"img/02.e985217e.jpg",g=u.p+"img/3.7d3c47d9.jpg",w=u.p+"img/03.63377cea.jpg",v=u.p+"img/4.2b4e65e9.jpg",h=u.p+"img/04.70d2f773.jpg",f=u.p+"img/5.a95b8291.jpg",k=u.p+"img/05.7a5fc9ed.jpg",P={data(){return{pictures:[{id:1,url:s,main_url:p},{id:2,url:_,main_url:m},{id:3,url:g,main_url:w},{id:4,url:v,main_url:h},{id:5,url:f,main_url:k}],currentPhoto:p}},methods:{currentPicture(t){const o=this.pictures.find((o=>o.id===t));this.currentPhoto=o.main_url}}},W=u(744);const C=(0,W.Z)(P,[["render",a],["__scopeId","data-v-3e595a11"]]);var b=C,z=u(577);const y=t=>((0,e.dD)("data-v-d712b25e"),t=t(),(0,e.Cn)(),t),D={class:"product_content"},j={class:"content_title"},U=y((()=>(0,e._)("i",{class:"arrow_right"},null,-1))),T={class:"content_price"},I=y((()=>(0,e._)("i",{class:"arrow_right"},null,-1))),Z={class:"content_size"},F={required:""},H=y((()=>(0,e._)("option",{default:""},"Выбрать размер",-1))),K=y((()=>(0,e._)("i",{class:"arrow_down"},null,-1))),Y={class:"content_buy"},$={class:"counter"},B={class:"buy_bts"},G={class:"content_info"};function L(t,o,u,n,i,d){const l=(0,e.up)("Stars"),r=(0,e.up)("RouterLink"),c=(0,e.up)("ButtonVue"),a=(0,e.up)("Favourites");return(0,e.wg)(),(0,e.iD)("div",D,[(0,e._)("div",j,[(0,e._)("h4",null,(0,z.zw)(i.product.title),1),(0,e._)("span",null,(0,z.zw)(i.product.article),1),(0,e.Wm)(r,{to:""},{default:(0,e.w5)((()=>[(0,e.Uk)(" Отзывы "),(0,e.Wm)(l),(0,e._)("span",null,(0,z.zw)(i.product.reviews.count)+" отзывов",1),U])),_:1})]),(0,e._)("div",T,[(0,e.Wm)(r,{to:""},{default:(0,e.w5)((()=>[(0,e._)("h3",null,(0,z.zw)(i.product.price.current)+" ₽",1),(0,e._)("span",null,(0,z.zw)(i.product.price.old),1),I])),_:1}),(0,e._)("div",null,[(0,e._)("span",null,"скидка -"+(0,z.zw)(i.product.price.discount)+"%",1),(0,e._)("span",null,"акция -"+(0,z.zw)(i.product.price.stock)+"%",1)])]),(0,e._)("div",Z,[(0,e._)("div",null,[(0,e._)("select",F,[H,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.product.size,(t=>((0,e.wg)(),(0,e.iD)("option",null,(0,z.zw)(t),1)))),256))]),K]),(0,e.Wm)(r,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Определить размер")])),_:1})]),(0,e._)("div",Y,[(0,e._)("div",null,[(0,e._)("div",$,[(0,e._)("button",{onClick:o[0]||(o[0]=(...t)=>d.addProduct&&d.addProduct(...t))},"+"),(0,e._)("div",null,(0,z.zw)(i.addedCount),1),(0,e._)("button",{onClick:o[1]||(o[1]=(...t)=>d.removeProduct&&d.removeProduct(...t))},"-")]),(0,e._)("div",B,[(0,e._)("div",null,[(0,e.Wm)(c,{onClick:o[2]||(o[2]=t=>d.addProductTo(i.product.title,i.addedCount,"корзину"))},{default:(0,e.w5)((()=>[(0,e.Uk)(" Добавить в корзину ")])),_:1}),(0,e.Wm)(c,{onClick:o[3]||(o[3]=t=>d.addProductTo(i.product.title,i.addedCount,"избранное"))},{default:(0,e.w5)((()=>[(0,e.Wm)(a)])),_:1})]),(0,e._)("span",null,(0,z.zw)(i.message),1)])]),(0,e.Wm)(r,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Купить в 1 клик")])),_:1})]),(0,e._)("div",G,[(0,e.Wm)(r,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Описапние товара")])),_:1}),(0,e.Wm)(r,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Доставка и возврат")])),_:1}),(0,e.Wm)(r,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Способы оплаты")])),_:1})])])}var Q={data(){return{product:{title:"Пижама для девочек",article:"Арт. 02765/46",reviews:{count:14,stars:4},price:{current:"800",old:"1 500",discount:36,stock:20},size:[36,48,56]},message:"",timout:null,addedCount:1}},methods:{addProduct(){this.addedCount+=1},removeProduct(){1!==this.addedCount&&(this.addedCount-=1)},addProductTo(t,o,u){if(!t|!o|!u)return console.log("Error in addProductTo");this.message=`Товар ${t} в количестве ${o} единиц добавлен в ${u}`,clearTimeout(this.timout),this.timout=setTimeout((()=>this.message=""),3e3)}}};const R=(0,W.Z)(Q,[["render",L],["__scopeId","data-v-d712b25e"]]);var S=R;const q={class:"product_galery"},E={alt:"",width:"335",height:"335"},V={class:"styles_photo-hover"};function x(t,o,u,n,i,d){const l=(0,e.up)("RouterLink"),r=(0,e.up)("FullScreen"),c=(0,e.up)("Bag"),a=(0,e.up)("Favourites"),s=(0,e.Q2)("lazy");return(0,e.wg)(),(0,e.iD)("div",q,[(0,e.Wm)(l,{to:"",class:"content_link"},{default:(0,e.w5)((()=>[(0,e.Uk)("Посмотреть все стили")])),_:1}),(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.pictures,(t=>((0,e.wg)(),(0,e.iD)("li",null,[(0,e.Wm)(l,{to:""},{default:(0,e.w5)((()=>[(0,e.wy)((0,e._)("img",E,null,512),[[s,t]]),(0,e._)("div",V,[(0,e.Wm)(r),(0,e._)("div",null,[(0,e.Wm)(c),(0,e.Uk)("Узнай что на мне ")]),(0,e._)("div",null,[(0,e.Wm)(a),(0,e.Uk)(" "+(0,z.zw)(i.favourites[0]),1)])])])),_:2},1024)])))),256))])])}var A=u.p+"img/1.a297448f.webp",J=u.p+"img/2.342f5cbf.webp",M=u.p+"img/3.e3e11528.webp",N=u.p+"img/4.d7a07840.webp",O=u.p+"img/5.9a971f73.webp",X={data(){return{pictures:[A,J,M,N,O],favourites:[200]}}};const tt=(0,W.Z)(X,[["render",x],["__scopeId","data-v-6a7a7108"]]);var ot=tt,ut={components:{ProductPhoto:b,ProductContent:S,ProductGalery:ot}};const et=(0,W.Z)(ut,[["render",i],["__scopeId","data-v-1799a76c"]]);var nt=et}}]);
//# sourceMappingURL=527.4ac11842.js.map