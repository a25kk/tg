/*!CK:3948421367!*//*1455045696,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ksYzR"]); }

__d('EntityInteractionLogger',['BanzaiLogger','Event','ScriptPath','collectDataAttributes','pageID'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m='EntityInteractionLoggerConfig';function n(event){var q=event.target||event.srcElement,r=o(q);if(r!==false){var s={client_time:Date.now(),event:'generic',session_id:l,surface_tag:j.getScriptPath()};Object.assign(s,r);h.log(m,s);}}function o(q){var r=k(q,['et'],['href']),s=r.normal.href;if((!s||s==='#')&&(!r.et||!r.et.click_point))return false;return r.et;}var p={setup:function(q){i.listen(q,{click:n});},handleEvent:n};f.exports=p;},null);
__d('SaveState',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SAVING:'saving',SAVED:'saved',UNSAVING:'unsaving',UNSAVED:'unsaved'};f.exports=h;},null);
__d('SaveStateHandler',['Run','SaveState'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=null;function k(){'use strict';this.$SaveStateHandler1={};this.$SaveStateHandler2={};h.onLeave(function(){j=null;});}k.prototype.addListener=function(l,m){'use strict';if(!this.$SaveStateHandler1[l])this.$SaveStateHandler1[l]=[];this.$SaveStateHandler1[l].push(m);};k.prototype.setState=function(l,m){'use strict';l.forEach(function(n){this.$SaveStateHandler2[n]=m;if(!this.$SaveStateHandler1[n])return;var o=this.$SaveStateHandler1[n];o.forEach(function(p){try{p.call(window,m);}catch(q){}});},this);};k.prototype.getState=function(l){'use strict';return this.$SaveStateHandler2[l];};k.$SaveStateHandler3=function(){'use strict';if(!j)j=new k();return j;};k.listen=function(l,m){'use strict';this.$SaveStateHandler3().addListener(l,m);};k.getState=function(l){'use strict';this.$SaveStateHandler3().getState(l);};k.saving=function(l){'use strict';this.$SaveStateHandler3().setState(l,i.SAVING);};k.saved=function(l){'use strict';this.$SaveStateHandler3().setState(l,i.SAVED);};k.unsaving=function(l){'use strict';this.$SaveStateHandler3().setState(l,i.UNSAVING);};k.unsaved=function(l){'use strict';this.$SaveStateHandler3().setState(l,i.UNSAVED);};k.isSaveAction=function(l){'use strict';var m=this.$SaveStateHandler3().getState(l);return m==i.UNSAVED||m==i.UNSAVING;};f.exports=k;},null);
__d('CurationToggleButton',['CSS','cx','Event','SaveState','SaveStateHandler','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n="_vu",o="_vv";function p(q,r,s,t,u){'use strict';this.$CurationToggleButton1=false;this.$CurationToggleButton2=u;m([j.listen(r,'click',this.setSaving.bind(this)),j.listen(r,'error',this.setUnsaved.bind(this)),j.listen(s,'click',this.setUnsaving.bind(this)),j.listen(s,'error',this.setSaved.bind(this))]);l.listen(t,(function(v){switch(v){case k.SAVING:h.addClass(q,n);h.addClass(q,o);s.setAttribute('rel','');this.$CurationToggleButton1=true;break;case k.SAVED:h.addClass(q,n);h.removeClass(q,o);s.setAttribute('rel','async-post');this.$CurationToggleButton1=false;break;case k.UNSAVING:h.removeClass(q,n);h.addClass(q,o);r.setAttribute('rel','');this.$CurationToggleButton1=true;break;case k.UNSAVED:h.removeClass(q,n);h.removeClass(q,o);r.setAttribute('rel','async-post');this.$CurationToggleButton1=false;break;}}).bind(this));}p.prototype.setSaving=function(){'use strict';if(!this.$CurationToggleButton1)l.saving(this.$CurationToggleButton2);};p.prototype.setUnsaving=function(){'use strict';if(!this.$CurationToggleButton1)l.unsaving(this.$CurationToggleButton2);};p.prototype.setSaved=function(){'use strict';l.saved(this.$CurationToggleButton2);};p.prototype.setUnsaved=function(){'use strict';l.unsaved(this.$CurationToggleButton2);};f.exports=p;},null);