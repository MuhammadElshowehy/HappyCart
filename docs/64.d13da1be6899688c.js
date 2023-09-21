"use strict";(self.webpackChunkECommerce=self.webpackChunkECommerce||[]).push([[64],{9064:(Z,u,r)=>{r.r(u),r.d(u,{FavoriteModule:()=>A});var d=r(6208),p=r(9310),v=r(6282),t=r(4946),m=r(120),l=r(6814),h=r(6992),g=r(8467),f=r(4131),_=r(1379);function C(e,i){1&e&&t._UZ(0,"app-loading")}function y(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",6)(1,"button",7),t.NdJ("click",function(){t.CHM(s);const a=t.oxw();return t.KtG(a.removeAll())}),t._uU(2," Remove all products "),t.qZA()()}}function F(e,i){if(1&e&&t._UZ(0,"app-cart-or-favorite-empty",8),2&e){const s=t.oxw();t.Q6J("titlePage",s.favorite)}}function x(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",11),t._UZ(1,"app-product",12),t.TgZ(2,"button",13),t.NdJ("click",function(){const n=t.CHM(s).index,c=t.oxw(2);return t.KtG(c.remove(n))}),t._uU(3," Remove from favorites "),t.qZA(),t.TgZ(4,"button",13),t.NdJ("click",function(){const n=t.CHM(s).$implicit,c=t.oxw(2);return t.KtG(c.addToCart(n))}),t._uU(5," Add to cart "),t.qZA()()}if(2&e){const s=i.$implicit;t.xp6(1),t.Q6J("productComp",s)}}function P(e,i){if(1&e&&(t.TgZ(0,"div",9),t.YNc(1,x,6,1,"div",10),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.favoriteProducts)}}const U=[{path:"",canActivate:[v.a],component:(()=>{var e;class i{constructor(o){this.productsService=o,this.isEmpty=!0,this.isLoading=!1,this.favorite="Favorite",this.PopupMessage=""}getAuthUser(){return JSON.parse(localStorage.getItem("authUser"))}setAuthUser(o){localStorage.setItem("authUser",JSON.stringify(o))}ngOnInit(){this.authUser=this.getAuthUser(),this.favoriteProducts=this.authUser.favorite,this.isEmpty=0===this.favoriteProducts.length}receivedFromPopup(o){this.PopupMessage=o}removedSuccessfully(){this.PopupMessage="Product removed successfully"}remove(o){this.isLoading=!0,setTimeout(()=>{this.favoriteProducts.splice(o,1),this.authUser.favorite=this.favoriteProducts,this.removedSuccessfully(),this.setAuthUser(this.authUser),0===this.authUser.favorite.length&&(this.isEmpty=!0),this.isLoading=!1,this.productsService.calcFavLength()},1e3)}removeAll(){this.isLoading=!0,setTimeout(()=>{this.favoriteProducts=[],this.authUser.favorite=[],this.setAuthUser(this.authUser),this.isEmpty=!0,this.isLoading=!1,this.productsService.calcFavLength()},1e3)}alreadyAdded(){this.PopupMessage="This product already in your cart!"}addedSuccessfully(){this.PopupMessage="Product added successfully"}addToCart(o){this.isLoading=!0,setTimeout(()=>{if(this.authUser=this.getAuthUser(),this.authUser.cart.find(n=>n.id===o.id))return this.isLoading=!1,void this.alreadyAdded();this.authUser.cart.push(o),this.setAuthUser(this.authUser),this.isLoading=!1,this.addedSuccessfully(),this.productsService.calcCartLength()},1e3)}}return(e=i).\u0275fac=function(o){return new(o||e)(t.Y36(m.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorite"]],decls:10,vars:5,consts:[[4,"ngIf"],[1,"top"],["class","remove-all",4,"ngIf"],[3,"popupMessage","closePopupMessage"],[3,"titlePage",4,"ngIf"],["class","row",4,"ngIf"],[1,"remove-all"],["type","button",1,"btn","text-light",3,"click"],[3,"titlePage"],[1,"row"],["class","col-sm-6 col-md-6 col-xl-3 col-lg-4",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-6","col-xl-3","col-lg-4"],[3,"productComp"],["type","button",1,"btn","w-100","p-2","text-light",3,"click"]],template:function(o,a){1&o&&(t.YNc(0,C,1,0,"app-loading",0),t.TgZ(1,"div",1)(2,"h1"),t._uU(3,"Your wonderful favorite list"),t.qZA(),t.YNc(4,y,3,0,"div",2),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"app-popup-message",3),t.NdJ("closePopupMessage",function(c){return a.receivedFromPopup(c)}),t.qZA(),t.YNc(7,F,1,1,"app-cart-or-favorite-empty",4),t.TgZ(8,"main"),t.YNc(9,P,2,1,"div",5),t.qZA()),2&o&&(t.Q6J("ngIf",a.isLoading),t.xp6(4),t.Q6J("ngIf",!a.isEmpty),t.xp6(2),t.Q6J("popupMessage",a.PopupMessage),t.xp6(1),t.Q6J("ngIf",a.isEmpty),t.xp6(2),t.Q6J("ngIf",a.favoriteProducts))},dependencies:[l.sg,l.O5,h.N,g.p,f.F,_.h],styles:[".top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media (max-width: 576px){main[_ngcontent-%COMP%]{max-width:360px}main[_ngcontent-%COMP%]{justify-content:center;margin:auto}.top[_ngcontent-%COMP%]{flex-direction:column}}button[_ngcontent-%COMP%]{background-color:var(--darkPurple);border:1px solid var(--orange)}button[_ngcontent-%COMP%]:hover{background-color:var(--orange)}"]}),i})()}];let T=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]}),i})(),A=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[T,d.m]}),i})()}}]);