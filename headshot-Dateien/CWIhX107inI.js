/*!CK:4040159363!*//*1455225863,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nIzoX"]); }

__d('SwapButtonDEPRECATED',['Event','Arbiter','CSS','Focus'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o){this._swapperButton=m;this._swappeeButton=n;h.listen(m,'click',this.swap.bind(this));if(o)h.listen(n,'click',this.unswap.bind(this));i.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',this.setFocusOnSwapper.bind(this),i.SUBSCRIBE_ALL);}Object.assign(l.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(m){j.hide(this._swapperButton);j.show(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swappeeButton);},unswap:function(m){j.show(this._swapperButton);j.hide(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swapperButton);},toggle:function(){j.toggle(this._swapperButton);j.toggle(this._swappeeButton);},setFocusOnSwapper:function(){this._swapperButton.focus();}});f.exports=l;},null);
__d('legacy:LayerDestroyOnHide',['LayerDestroyOnHide'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LayerDestroyOnHide=c('LayerDestroyOnHide');},3);