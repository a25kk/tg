/*!CK:2553645038!*//*1455220500,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IGemF"]); }

__d('ReactComposerCanvasStore',['ReactComposerCanvasActionType','ReactComposerStoreBase'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i);k=j&&j.prototype;function l(){'use strict';var m;k.constructor.call(this,function(){return {shouldShowCanvasSelector:false};},function(n){switch(n.type){case h.SHOW_CANVAS_SELECTOR:m&&m.$ReactComposerCanvasStore1(n);break;case h.HIDE_CANVAS_SELECTOR:m&&m.$ReactComposerCanvasStore2(n);break;default:break;}});m=this;}l.prototype.$ReactComposerCanvasStore1=function(m){'use strict';var n=m.composerID,o=this.getComposerData(n);o.shouldShowCanvasSelector=true;this.emitChange(n);};l.prototype.$ReactComposerCanvasStore2=function(m){'use strict';var n=m.composerID,o=this.getComposerData(n);o.shouldShowCanvasSelector=false;this.emitChange(n);};l.prototype.shouldShowCanvasSelector=function(m){'use strict';return this.getComposerData(m).shouldShowCanvasSelector;};f.exports=new l();},null);
__d("XPagesLikeCheckupStateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/like_checkup\/store_state\/",{});},null);