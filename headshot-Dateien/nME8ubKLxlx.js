/*!CK:4226766866!*//*1455135359,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xcnbQ"]); }

__d("GroupSellProductDetailsEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PHOTO_CLICK:"photo_click",SHOW_DIALOG:"show_dialog",HIDE_DIALOG:"hide_dialog",PROFILE_LINK_CLICK:"profile_link_click",GROUP_LINK_CLICK:"group_link_click",PERMALINK_CLICK:"permalink_click",ASYNC_DATA_REQUEST_FAIL:"async_data_request_fail",DIALOG_INSTANCE_NULL:"dialog_instance_null",MESSAGE_SELLER_CLICK:"message_seller_click",UFI_CLICK:"ufi_click",MARK_AS_SOLD_CLICK:"mark_as_sold_click",FAILED_SALE_POST_GEN:"failed_sale_post_gen"};},null);
__d("GroupSellProductDetailsImageAspect",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={HORIZONTAL:"horizontal",VERTICAL:"vertical",WIDE_HORIZONTAL:"wide_horizontal",WIDE_VERTICAL:"wide_vertical",SQUARE:"square",HEIGHT_BOUND:"height_bound"};},null);
__d('UFIAddCommentController',['Parent','React','ReactDOM','ShortProfiles','UFIActionTypes','UFIAddComment.react','UFICallbackStore','UFICentralUpdates','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackTargets','UFIInstanceState','UFINewCommentNotifier'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();function u(v,w){this._root=v;this._contextArgs=w;this._contextArgs.rootid=v.id;this._dispatcher=new p();this._stores={UFICallbackStore:new n(this._dispatcher)};this._stores.UFICallbackStore.on(l.ADD_COMMENT.SUBMIT_NEW,(function(x){return t.onNewComment(h.byTag(v,'form'),this._contextArgs,x.comment,x.target,x.replyCommentID,x.timestamp);}).bind(this));this.render();o.subscribe('instance-updated',(function(x,y){var z=y.updates;if(this._contextArgs.instanceid in z)this.render();}).bind(this));o.subscribe('feedback-updated',(function(x,y){var z=y.updates;if(this._contextArgs.ftentidentifier in z)this.render();}).bind(this));o.subscribe('feedback-id-changed',(function(x,y){var z=this._contextArgs.ftentidentifier,aa=y.updates;if(z in aa)this._contextArgs=babelHelpers._extends({},this._contextArgs,{ftentidentifier:aa[z]});}).bind(this));}Object.assign(u.prototype,{render:function(){var v=this._contextArgs,w=s.getKeyForInstance(v.instanceid,'isediting');r.getFeedbackTarget(v.ftentidentifier,(function(x){if(!w&&x.cancomment&&x.actorforpost)k.get(x.actorforpost,(function(y){var z=i.createElement(q,{dispatcher:this._dispatcher,stores:this._stores},i.createElement(m,{viewerActorID:x.actorforpost,replyCommentID:null,targetID:x.ownerid,initialData:null,ref:null,withoutSeparator:null,editingComment:{},isEditing:false,mentionsDataSource:x.mentionsdatasource,showSendOnEnterTip:x.showsendonentertip,allowPhotoAttachments:x.allowphotoattachments&&!v.isstreaming,allowStickerAttachments:x.allowstickerattachments&&!v.isstreaming,contextArgs:v,subtitle:x.subtitle,isQAndA:x.isqanda}));j.render(z,this._root);}).bind(this));}).bind(this));}});f.exports=u;},null);
__d('GroupSellProductDetailActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:GroupSellProductDetailActionsLoggerConfig',this.$GroupSellProductDetailActionsTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$GroupSellProductDetailActionsTypedLogger1={};return this;};k.prototype.updateData=function(m){this.$GroupSellProductDetailActionsTypedLogger1=babelHelpers._extends({},this.$GroupSellProductDetailActionsTypedLogger1,m);return this;};k.prototype.setEvent=function(m){this.$GroupSellProductDetailActionsTypedLogger1.event=m;return this;};k.prototype.setGroupID=function(m){this.$GroupSellProductDetailActionsTypedLogger1.group_id=m;return this;};k.prototype.setReferralSurface=function(m){this.$GroupSellProductDetailActionsTypedLogger1.referral_surface=m;return this;};k.prototype.setStoryID=function(m){this.$GroupSellProductDetailActionsTypedLogger1.story_id=m;return this;};k.prototype.setSurface=function(m){this.$GroupSellProductDetailActionsTypedLogger1.surface=m;return this;};k.prototype.setVC=function(m){this.$GroupSellProductDetailActionsTypedLogger1.vc=m;return this;};var l={event:true,group_id:true,referral_surface:true,story_id:true,surface:true,vc:true};f.exports=k;},null);
__d('GroupCommerceProductDetailImageContainer.react',['DOM','Event','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','Image.react','React','Style','Vector','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r,s;'use strict';var t=n.PropTypes,u=38,v=10,w=483;r=babelHelpers.inherits(x,n.Component);s=r&&r.prototype;function x(y,z){s.constructor.call(this,y,z);var aa=this;aa.$GroupCommerceProductDetailImageContainer1=this.$GroupCommerceProductDetailImageContainer1.bind(this);aa.$GroupCommerceProductDetailImageContainer2=this.$GroupCommerceProductDetailImageContainer2.bind(this);this.state={currentIndex:0,stageWidth:w,stageHeight:558};}x.prototype.render=function(){return (n.createElement('div',null,n.createElement('div',{className:"_57xm"},this.$GroupCommerceProductDetailImageContainer3()),n.createElement('div',{className:"_57xn"},this.props.media.length==0?this.$GroupCommerceProductDetailImageContainer4():this.$GroupCommerceProductDetailImageContainer5())));};x.prototype.componentDidUpdate=function(y,z){if(this.props.media&&this.props.media.length>1&&this.props.media!==y.media){this.$GroupCommerceProductDetailImageContainer6();this.$GroupCommerceProductDetailImageContainer7=i.listen(document.body,'keydown',this.$GroupCommerceProductDetailImageContainer2);}else if(!this.props.media||this.props.media.length<1)this.$GroupCommerceProductDetailImageContainer6();};x.prototype.componentWillUnmount=function(){this.$GroupCommerceProductDetailImageContainer6();};x.prototype.componentWillReceiveProps=function(y){var z=this;if(this.props.media!==y.media){var aa=0;if(y.media.length<1){this.setState({stageWidth:w});}else (function(){var ba=z.props.query;if(ba&&ba.fbid){aa=y.media.findIndex(function(ca){return ca.id.toString()===ba.fbid;});if(aa==-1)aa=0;}z.$GroupCommerceProductDetailImageContainer8(aa,y.media);})();this.setState({currentIndex:aa});}};x.prototype.$GroupCommerceProductDetailImageContainer4=function(){var y=this.props.elem;if(!y)return null;var z=h.scry(y,'img')[0],aa=h.scry(y,'i')[0],ba=null,ca=null;if(z){ba=z.src;ca=p.from(z.naturalWidth,z.naturalHeight);}else if(aa){ba=o.get(aa,'backgroundImage').replace(/.*url\("?([^"]*)"?\).*/,'$1');ca=p.from(z.naturalWidth,z.naturalHeight);}else return null;if(!ca.x||!ca.y||!ba)return null;return (n.createElement(m,{className:"_580_",width:ca.x,height:ca.y,src:ba,style:this.$GroupCommerceProductDetailImageContainer9(ca.x,ca.y)}));};x.prototype.$GroupCommerceProductDetailImageContainer2=function(event){switch(event.keyCode){case 37:case 38:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer10();break;case 39:case 40:event.stopPropagation();this.$GroupCommerceProductDetailImageContainer11();break;}};x.prototype.$GroupCommerceProductDetailImageContainer6=function(){if(this.$GroupCommerceProductDetailImageContainer7){this.$GroupCommerceProductDetailImageContainer7.remove();this.$GroupCommerceProductDetailImageContainer7=null;}};x.prototype.$GroupCommerceProductDetailImageContainer1=function(y){new j().setEvent(k.PHOTO_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.$GroupCommerceProductDetailImageContainer8(y,this.props.media);this.setState({currentIndex:y});};x.prototype.$GroupCommerceProductDetailImageContainer8=function(y,z){var aa=z[y],ba=this.state.stageWidth;switch(aa.aspect){case l.HORIZONTAL:case l.WIDE_HORIZONTAL:ba=744;break;case l.WIDE_VERTICAL:ba=314;break;case l.VERTICAL:ba=419;break;case l.SQUARE:ba=558;break;case l.HEIGHT_BOUND:ba=aa.width;break;}this.props.onResize(aa.aspect,ba);this.setState({stageWidth:ba});};x.prototype.$GroupCommerceProductDetailImageContainer11=function(){var y=this.state.currentIndex+1,z=this.props.media.length-1;if(y>v||y>z)y=0;this.$GroupCommerceProductDetailImageContainer1(y);};x.prototype.$GroupCommerceProductDetailImageContainer10=function(){var y=this.state.currentIndex-1,z=this.props.media.length-1;if(y<0)y=v<z?v:z;this.$GroupCommerceProductDetailImageContainer1(y);};x.prototype.$GroupCommerceProductDetailImageContainer5=function(){var y=[],z=this.props.media.length;for(var aa=0;aa<z&&aa<=v;aa++){var ba=this.props.media[aa];y.push(n.createElement(m,{className:(this.state.currentIndex!=aa?"_5810":'')+(' '+"_580_"),width:ba.width,height:ba.height,src:ba.uri,key:'stage'+ba.id,style:this.$GroupCommerceProductDetailImageContainer9(ba.width,ba.height)}));}return y;};x.prototype.$GroupCommerceProductDetailImageContainer9=function(y,z){var aa=0;if(y>this.state.stageWidth){aa=this.state.stageWidth/y;y*=aa;z*=aa;}if(z>this.state.stageHeight){aa=this.state.stageHeight/z;y*=aa;z*=aa;}return {paddingTop:(this.state.stageHeight-z)/2+'px',paddingLeft:(this.state.stageWidth-y)/2+'px',maxWidth:this.state.stageWidth,maxHeight:this.state.stageHeight};};x.prototype.$GroupCommerceProductDetailImageContainer3=function(){var y=[],z=this.props.media.length;for(var aa=0;aa<z&&aa<=v;aa++){var ba=this.props.media[aa];y.push(n.createElement(m,{className:"_5811"+(this.state.currentIndex==aa?' '+"_5812":''),width:u,height:u,src:ba.uriThumb,onClick:this.$GroupCommerceProductDetailImageContainer1.bind(this,aa),key:'thumbnail'+ba.id}));}return (n.createElement('div',null,y));};x.propTypes={group:t.object.isRequired,media:t.any.isRequired,onResize:t.func.isRequired,storyID:t.string,query:t.object,elem:t.object};f.exports=x;},null);
__d('GroupCommerceProductDetailRHCContent.react',['GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','XUIText.react','cx','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;'use strict';var r=l.PropTypes;p=babelHelpers.inherits(s,l.Component);q=p&&p.prototype;s.prototype.render=function(){var t=this.$GroupCommerceProductDetailRHCContent1(),u=this.$GroupCommerceProductDetailRHCContent2();return (l.createElement('div',{className:"_4g63"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},l.createElement('div',{className:"_4g65"},u,t,l.createElement(m,{className:"_4g66"},this.props.product.price),l.createElement('div',{className:"_4g67"},this.props.description,l.createElement('div',{className:"_4g68"},this.props.actionButton))),l.createElement('div',{className:"_4g6d",ref:'ufi',onClick:(function(){new h().setEvent(i.UFI_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();}).bind(this)},this.props.ufi)));};s.prototype.$GroupCommerceProductDetailRHCContent2=function(){var t=this.props.product.statusText?this.props.product.statusText+' '+this.props.product.title:this.props.product.title;return (l.createElement(m,{id:this.props.titleID,className:"_4g6e"},t));};s.prototype.$GroupCommerceProductDetailRHCContent1=function(){var t=!this.props.product.deliveryNote?null:l.createElement(m,{display:'inline'},this.props.product.deliveryNote),u=t?' \u00b7 ':null,v=t?l.createElement(j,{className:"_4g6g",src:o('images/groups/sell/place_icon_sell.png')}):null;return (l.createElement('div',{className:"_4g6h"},v,l.createElement(m,null,t),u,l.createElement('div',{className:"_4g6i"},l.createElement(k,{href:this.props.product.uri,onClick:(function(){new h().setEvent(i.PERMALINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}).bind(this)},this.props.timestamp))));};function s(){p.apply(this,arguments);}s.propTypes={actor:r.object.isRequired,product:r.object.isRequired,group:r.object.isRequired,feedback:r.object.isRequired,timestamp:r.any.isRequired,ufi:r.any.isRequired,actionButton:r.any.isRequired,storyID:r.string,description:r.any.isRequired,titleID:r.string};f.exports=s;},null);
__d('GroupCommerceProductDetailRHCFooter.react',['Event','MentionsInputTypeaheadView.react','React','ReactDOM','UFIAddCommentController','UFIMentionsInputProxy.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o,p;'use strict';var q=j.PropTypes;o=babelHelpers.inherits(r,j.Component);p=o&&o.prototype;r.prototype.componentDidMount=function(){this.$GroupCommerceProductDetailRHCFooter1=h.listen(k.findDOMNode(this.refs.ufiAddComment),'keydown',this.$GroupCommerceProductDetailRHCFooter2);};r.prototype.createUFIAddComment=function(s){if(s.ufi&&s.ufi.params){s.ufi.params.mentionsinput={inputComponent:m,viewComponent:i};new l(k.findDOMNode(this.refs.ufiAddComment),s.ufi.params).render();}};r.prototype.componentWillUnmount=function(){if(this.$GroupCommerceProductDetailRHCFooter1){this.$GroupCommerceProductDetailRHCFooter1.remove();this.$GroupCommerceProductDetailRHCFooter1=null;}};r.prototype.render=function(){return (j.createElement('div',{className:"_3g6i"+(!this.props.actor.profilePicURI?' '+"_34xy":''),key:this.props.ufiInstanceID,ref:'ufiAddComment'}));};r.prototype.$GroupCommerceProductDetailRHCFooter2=function(event){switch(event.keyCode){case 37:case 38:case 39:case 40:event.stopPropagation();break;}};function r(){o.apply(this,arguments);}r.propTypes={ufiInstanceID:q.string.isRequired,ufi:q.object.isRequired,actor:q.object.isRequired};f.exports=r;},null);
__d('GroupCommerceProductDetailRHCHeader.react',['GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','Image.react','Link.react','React','ReactLayeredComponentMixin','XUIContextualDialog.react','XUIContextualDialogBody.react','classWithMixins','cx','fbt','ix','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v;'use strict';var w=l.PropTypes,x=104,y=56;u=babelHelpers.inherits(z,p(l.Component,t(m)));v=u&&u.prototype;z.prototype.renderLayers=function(){return {contextualDialog:l.createElement(n,{contextRef:(function(){return this.refs.recommendation;}).bind(this),offsetX:-8,shown:true,hoverContextRef:(function(){return this.refs.recommendation;}).bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:n.WIDTH.WIDE,position:'below'},l.createElement(o,null,l.createElement('div',{id:this.props.recommendationID}))),actorDialog:l.createElement(n,{contextRef:(function(){return this.refs.actorName;}).bind(this),shown:true,hoverContextRef:(function(){return this.refs.actorName;}).bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:n.WIDTH.WIDE,position:'below'},l.createElement(o,null,l.createElement('div',{id:this.props.actorHoverID}))),actorImageDialog:l.createElement(n,{contextRef:(function(){return this.refs.actorImage;}).bind(this),shown:true,hoverContextRef:(function(){return this.refs.actorImage;}).bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:n.WIDTH.WIDE,position:'below'},l.createElement(o,null,l.createElement('div',{id:this.props.actorImageHoverID}))),groupDialog:l.createElement(n,{contextRef:(function(){return this.refs.groupName;}).bind(this),shown:true,hoverContextRef:(function(){return this.refs.groupName;}).bind(this),hideOnEscape:true,hoverHideDelay:0,hoverShowDelay:500,autoFocus:false,width:n.WIDTH.WIDE,position:'below'},l.createElement(o,null,l.createElement('div',{id:this.props.groupHoverID})))};};z.prototype.render=function(){var aa=this.$GroupCommerceProductDetailRHCHeader1();return (l.createElement('div',{className:"_34xx"+(!this.props.actor.profilePicURI?' '+"_34xy":'')},l.createElement(j,{className:"_34xz",width:y,height:y,src:this.props.actor.profilePicURI,ref:'actorImage'}),l.createElement('div',{className:"_34x-"},l.createElement('div',{className:"_34x_"},l.createElement('div',{ref:'actorName',className:"_34y0"},l.createElement(k,{href:this.props.actor.uri,onClick:(function(){new h().setEvent(i.PROFILE_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}).bind(this)},this.props.actor.name)),l.createElement(j,{className:"_34y1",src:s('images/icons/wall_arrow.gif')}),l.createElement('div',{ref:'groupName',className:"_34y0"},l.createElement(k,{href:this.props.group.uri,onClick:(function(){new h().setEvent(i.GROUP_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log();this.props.hideDialog();}).bind(this)},this.props.group.name))),l.createElement('div',{ref:'recommendation',className:"_34y2"},aa)),l.createElement('div',{id:this.props.chevronID})));};z.prototype.$GroupCommerceProductDetailRHCHeader1=function(){if(!this.props.actor.hasRecommendations)return null;var aa=this.props.actor.recommendationsCount,ba=this.props.actor.maxRecommendations,ca=aa<ba?aa:r._("{count} +",[r.param('count',ba-1)]),da=aa!==1?r._("{count} Personen haben {short name of user} empfohlen",[r.param('count',ca),r.param('short name of user',this.props.actor.shortName)]):r._("{count} Person hat {short name of user} empfohlen",[r.param('count',ca),r.param('short name of user',this.props.actor.shortName)]);return (l.createElement('div',null,l.createElement('div',{className:"_1my1"+(!aa?' '+"_29jg":'')}),l.createElement('div',{className:"_34y3"},da)));};z.prototype.componentDidUpdate=function(aa,ba){var ca=this.refs.actorName.offsetWidth,da=x-ca;this.refs.groupName.style.maxWidth=x+da+'px';};function z(){u.apply(this,arguments);}z.propTypes={actor:w.object.isRequired,group:w.object.isRequired,storyID:w.string,recommendationID:w.string.isRequired,actorHoverID:w.string.isRequired,actorImageHoverID:w.string.isRequired,groupHoverID:w.string.isRequired,chevronID:w.string.isRequired};f.exports=z;},null);
__d("XGroupCommerceMarketplaceProductDetailController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/marketplace\/product_detail\/",{story_id:{type:"String",required:true},ufi_id:{type:"String",required:true},date_time_id:{type:"String",required:true},action_button_id:{type:"String",required:true},recommendation_dialog_id:{type:"String",required:true},actor_dialog_id:{type:"String",required:true},actor_image_dialog_id:{type:"String",required:true},description_id:{type:"String",required:true},title_id:{type:"String",required:true},group_hover_id:{type:"String",required:true},ufi_instance_id:{type:"String",required:true},chevron_id:{type:"String",required:true}});},null);
__d('GroupCommerceProductDetail.react',['AsyncRequest','GroupSellProductDetailActionsTypedLogger','GroupSellProductDetailsEvent','GroupSellProductDetailsImageAspect','LayerFadeOnHide','LayerHideOnEscape','LeftRight.react','GroupCommerceProductDetailRHCHeader.react','GroupCommerceProductDetailImageContainer.react','GroupCommerceProductDetailRHCContent.react','GroupCommerceProductDetailRHCFooter.react','React','ReactLayeredComponentMixin','ReactRenderer','ResponsiveBlock.react','ScrollableArea.react','XGroupCommerceMarketplaceProductDetailController','XUIDialog.react','XUIDialogTitle.react','XUIDialogBody.react','classWithMixins','cx','fbt','guid','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){if(c.__markCompiled)c.__markCompiled();var ga,ha;'use strict';var ia=495,ja=891;ga=babelHelpers.inherits(ka,ba(s.Component,fa(t)));ha=ga&&ga.prototype;function ka(la,ma){ha.constructor.call(this,la,ma);var na=this;na.hideDialog=this.hideDialog.bind(this);na.showDialog=this.showDialog.bind(this);na.$GroupCommerceProductDetail1=this.$GroupCommerceProductDetail1.bind(this);na.$GroupCommerceProductDetail2=this.$GroupCommerceProductDetail2.bind(this);na.$GroupCommerceProductDetail3=this.$GroupCommerceProductDetail3.bind(this);na.$GroupCommerceProductDetail4=this.$GroupCommerceProductDetail4.bind(this);this.state={isDialogShown:false,width:ja,rhcHeight:200,payload:this.$GroupCommerceProductDetail5(),ufiID:'ufi_detail_'+ea(),datetimeID:'datetime_'+ea(),actionButtonID:'actionButton'+ea(),recommendationDialogID:'recommendationDialogID'+ea(),actorHoverID:'actorHoverID'+ea(),actorImageHoverID:'actorImageHoverID'+ea(),descriptionID:'descriptionID'+ea(),titleID:'titleID'+ea(),groupHoverID:'groupHoverID'+ea(),ufiInstanceID:'ufiInstanceID'+ea(),chevronID:'chevronID'+ea(),query:null,elem:null};}ka.prototype.componentWillUnmount=function(){this.refs.modal.layer.hide();ka.$GroupCommerceProductDetail6=null;};ka.prototype.renderLayers=function(){var la=s.createElement('div',{id:this.state.datetimeID}),ma=s.createElement('div',{id:this.state.ufiID}),na=s.createElement('div',{id:this.state.actionButtonID}),oa=s.createElement('div',{className:"_3g5q",id:this.state.descriptionID});return {dialog:s.createElement(y,{className:"_5p3y",shown:this.state.isDialogShown,onToggle:this.$GroupCommerceProductDetail1,ref:'modal',width:this.state.width,behaviors:{LayerFadeOnHide:l,LayerHideOnEscape:m}},s.createElement(z,null,da._("Produktdetails")),s.createElement(aa,null,s.createElement('div',{className:"_3g6d"},s.createElement(n,null,s.createElement('div',{className:"_3g6e"},s.createElement(p,{group:this.state.payload.group,media:this.state.payload.media,storyID:this.state.payload.storyID,query:this.state.query,elem:this.state.elem,onResize:this.$GroupCommerceProductDetail4})),s.createElement('div',{className:"_3g6f"},s.createElement(w,{className:"_3g6g",height:this.state.rhcHeight},s.createElement(v,{className:"_3g6h",onResize:this.$GroupCommerceProductDetail2},s.createElement(o,{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,recommendationID:this.state.recommendationDialogID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID}),s.createElement(q,{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,timestamp:la,actionButton:na,ufi:ma,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:oa,titleID:this.state.titleID}))),s.createElement(r,{actor:this.state.payload.actor,ref:'rhcFooter',className:"_3g6i",ufiInstanceID:this.state.ufiInstanceID,ufi:this.state.payload.ufi}))))))};};ka.prototype.render=function(){return null;};ka.prototype.showDialog=function(la,ma,na){var oa=x.getURIBuilder().setString('story_id',la).setString('ufi_id',this.state.ufiID).setString('date_time_id',this.state.datetimeID).setString('action_button_id',this.state.actionButtonID).setString('recommendation_dialog_id',this.state.recommendationDialogID).setString('actor_dialog_id',this.state.actorHoverID).setString('actor_image_dialog_id',this.state.actorImageHoverID).setString('description_id',this.state.descriptionID).setString('title_id',this.state.titleID).setString('group_hover_id',this.state.groupHoverID).setString('ufi_instance_id',this.state.ufiInstanceID).setString('chevron_id',this.state.chevronID).getURI();new h().setURI(oa).setMethod('GET').setHandler(this.$GroupCommerceProductDetail3).setErrorHandler(function(pa){new i().setEvent(j.ASYNC_DATA_REQUEST_FAIL).setStoryID(la.toString()).log();}).setReadOnly(true).send();this.setState({payload:this.$GroupCommerceProductDetail5(),query:ma,elem:na,isDialogShown:true,width:ja});};ka.prototype.hideDialog=function(){this.$GroupCommerceProductDetail1(false);};ka.prototype.$GroupCommerceProductDetail4=function(la,ma){var na=this.state.width;switch(la){case k.HORIZONTAL:case k.WIDE_HORIZONTAL:na=1153;break;case k.WIDE_VERTICAL:na=723;break;case k.VERTICAL:na=828;break;case k.SQUARE:na=967;break;case k.HEIGHT_BOUND:na=ma+409;break;}this.setState({width:na});};ka.prototype.$GroupCommerceProductDetail2=function(la,ma){if(ma>ia)ma=ia;this.setState({rhcHeight:ma});};ka.prototype.$GroupCommerceProductDetail1=function(la){if(ka.$GroupCommerceProductDetail6!==null)this.setState({isDialogShown:la});if(!la){new i().setEvent(j.HIDE_DIALOG).setStoryID(this.state.payload.storyID).setGroupID(this.state.payload.group.id).log();if(ka.$GroupCommerceProductDetail6!==null)setTimeout((function(){this.setState({payload:this.$GroupCommerceProductDetail5(),query:null,elem:null});}).bind(this));}};ka.prototype.$GroupCommerceProductDetail5=function(){return {actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}};};ka.prototype.$GroupCommerceProductDetail3=function(la){new i().setEvent(j.SHOW_DIALOG).setStoryID(la.payload.storyID).setGroupID(la.payload.group.id).log();this.refs.rhcFooter.createUFIAddComment(la.payload);this.setState({payload:la.payload,isDialogShown:true});};ka.init=function(la){ka.$GroupCommerceProductDetail7=la;ka.$GroupCommerceProductDetail6=u.constructAndRenderComponent(ka,{},la);if(ka.$GroupCommerceProductDetail8){ka.showDialog(ka.$GroupCommerceProductDetail8,ka.$GroupCommerceProductDetail9,ka.$GroupCommerceProductDetail10);ka.$GroupCommerceProductDetail8=null;ka.$GroupCommerceProductDetail9=null;ka.$GroupCommerceProductDetail10=null;}};ka.showDialog=function(la,ma,na){if(!ka.$GroupCommerceProductDetail6){if(!ka.$GroupCommerceProductDetail7){ka.$GroupCommerceProductDetail8=la;ka.$GroupCommerceProductDetail9=ma;ka.$GroupCommerceProductDetail10=na;return;}ka.init(ka.$GroupCommerceProductDetail7);}if(!ka.$GroupCommerceProductDetail6){new i().setEvent(j.DIALOG_INSTANCE_NULL).setStoryID(la.toString()).log();return;}ka.$GroupCommerceProductDetail6.showDialog(la,ma,na);};ka._instance=null;ka._storyID=null;ka._container=null;ka._elem=null;ka._query=null;f.exports=ka;},null);
__d('GroupCommerceProductDetailLayer',['Layer','GroupCommerceProductDetail.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;'use strict';j=babelHelpers.inherits(l,h);k=j&&j.prototype;l.prototype._buildWrapper=function(m,n){i.init(n);return n;};function l(){j.apply(this,arguments);}f.exports=l;},null);