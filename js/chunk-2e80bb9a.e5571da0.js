(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e80bb9a"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,html:t.elm.outerHTML,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},abb4:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs-c"},[s("div",{staticClass:"tabs-c__header"},[s("div",{staticClass:"row m-0"},t._l(t.elements,(function(e,i){return s("div",{key:"tabs-c-menu-"+e.id,staticClass:"col-sm-6 col-lg-4 col-xl tabs-c__tab py-3",class:{"tabs-c__tab--active":t.selected===e.id},attrs:{role:"button"},on:{click:function(s){t.selected=e.id}}},[s("span",[t._v(t._s(e.titulo))])])})),0)]),t._l(t.elements,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.selected===e.id,expression:"selected === elm.id"}],key:"tabs-content-"+e.id,staticClass:"tabs-c__content-item",domProps:{innerHTML:t._s(e.html)}})})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],n=s("ab14"),d={name:"TabsC",mixins:[n["a"]]},r=d,l=s("2877"),o=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2e80bb9a.e5571da0.js.map