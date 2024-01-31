"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[758],{1758:(y,c,a)=>{a.r(c),a.d(c,{PokedexModule:()=>C});var p=a(6814),s=a(4581),t=a(5879),g=a(8318),m=a(3365);function d(e,r){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"img",11),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH)}}function l(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.onProfile())}),t._UZ(1,"img",2),t.TgZ(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5)(5,"div",6)(6,"div",7),t._uU(7),t.qZA(),t.TgZ(8,"div",8),t.YNc(9,d,2,1,"span",9),t.qZA()()(),t.TgZ(10,"span",10),t._uU(11),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("src",n.pokemon.sprites.regular,t.LSH),t.xp6(4),t.hij(" ",n.pokemon.name.fr," "),t.xp6(2),t.Q6J("ngForOf",n.pokemon.types),t.xp6(2),t.hij("#",n.pokemon.pokedexId,"")}}let h=(()=>{class e{constructor(n){this.router=n}onProfile(){this.router.navigateByUrl(`profile/${this.pokemon.pokedexId}`)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-pokemon-item"]],inputs:{pokemon:"pokemon"},decls:1,vars:1,consts:[["class","margin display-flex height-100 width-100 border-radius-15 color-card position-relative hand-cursor",3,"click",4,"ngIf"],[1,"margin","display-flex","height-100","width-100","border-radius-15","color-card","position-relative","hand-cursor",3,"click"],["src","assets/images/pokeball.svg","alt","pokeball-img",1,"z-index-0","color-white","svg-position"],[1,"margin-bottom-10","z-index-50"],["alt","pokemon-picture",1,"img-size",3,"src"],[1,"display-flex","flex-direction-column","justify-content-space-around","align-items-end","width-100","margin-left-10","margin-right-100","z-index-50"],[1,"display-flex","flex-direction-column","height-100","gap-10","margin-top-20"],[1,"font-weight-bold","font-size-18","color-white"],[1,"display-flex","gap-10"],[4,"ngFor","ngForOf"],[1,"color-ababab","align-self-flex-end","font-size-18","font-weight-bold","margin"],["alt","pokemon-type-image",1,"img-type-size",3,"src"]],template:function(o,i){1&o&&t.YNc(0,l,12,4,"div",0),2&o&&t.Q6J("ngIf",i.pokemon.pokedexId)},dependencies:[p.sg,p.O5],styles:[".color-white[_ngcontent-%COMP%]{color:#fff}.color-ababab[_ngcontent-%COMP%]{color:#ababab}.background-white[_ngcontent-%COMP%]{background-color:#fff}.margin[_ngcontent-%COMP%]{margin:10px}.margin-left-10[_ngcontent-%COMP%]{margin-left:10px}.margin-right-100[_ngcontent-%COMP%]{margin-right:100px}.padding-type[_ngcontent-%COMP%]{padding:5px 10px}.img-size[_ngcontent-%COMP%]{width:121px;height:121px}.img-size[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.font-weight-bold[_ngcontent-%COMP%]{font-weight:700}.font-size-18[_ngcontent-%COMP%]{font-size:18px}.img-type-size[_ngcontent-%COMP%]{height:30px;width:30px}.color-card[_ngcontent-%COMP%]{background-color:#3a3737}.svg-position[_ngcontent-%COMP%]{position:absolute;bottom:-30px;left:-30px;max-width:100%;max-height:100%}.hand-cursor[_ngcontent-%COMP%]{cursor:pointer}"]})}return e})();function f(e,r){1&e&&t._UZ(0,"app-pokemon-item",4),2&e&&t.Q6J("pokemon",r.$implicit)}const u=function(){return[10,20,30,40,50,60,70,80,90,100]},x=[{path:":id",component:(()=>{class e{constructor(n,o,i){this.pokemonService=n,this.route=o,this.router=i,this.paginatedData=[],this.currentPage=0,this.pageSize=10}ngOnInit(){this.pokemonService.getPokemons().subscribe(n=>{this.pokemons=n,this.currentPage=parseInt(this.route.snapshot.params.id),this.updatePaginatedData()})}updatePaginatedData(){const n=this.currentPage*this.pageSize+1;this.paginatedData=this.pokemons.slice(n,n+this.pageSize)}onPaginateChange(n){this.currentPage=n.pageIndex,this.router.navigateByUrl(`/pokedex/${this.currentPage}`),this.updatePaginatedData()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.f),t.Y36(s.gz),t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-pokemon-list"]],decls:5,vars:5,consts:[[1,"display-flex","flex-wrap-wrap","justify-content-center","gap-30","height-100"],["class","width-400 height-150px z-index-0",3,"pokemon",4,"ngFor","ngForOf"],[1,"display-flex","width-100","justify-content-end"],["pageSize","pageSize","showFirstLastButtons","","hidePageSize","",1,"paginator-style",3,"length","pageIndex","pageSizeOptions","page"],[1,"width-400","height-150px","z-index-0",3,"pokemon"]],template:function(o,i){1&o&&(t.TgZ(0,"div")(1,"div",0),t.YNc(2,f,1,1,"app-pokemon-item",1),t.qZA(),t.TgZ(3,"div",2)(4,"mat-paginator",3),t.NdJ("page",function(v){return i.onPaginateChange(v)}),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",i.paginatedData),t.xp6(2),t.Q6J("length",100)("pageIndex",i.currentPage)("pageSizeOptions",t.DdM(4,u)))},dependencies:[p.sg,m.NW,h],styles:[".width-400[_ngcontent-%COMP%]{width:400px}.height-150[_ngcontent-%COMP%]{height:150px}.margin[_ngcontent-%COMP%]{margin:50px}.display-flex[_ngcontent-%COMP%]{display:flex}.paginator-style[_ngcontent-%COMP%]{width:20%;background-color:gray!important;margin-top:100px;color:#fff}"]})}return e})()}];let k=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]})}return e})();var P=a(4080);let C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[p.ez,k,P.m]})}return e})()}}]);