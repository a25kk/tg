/*!CK:3336789705!*//*1455136616,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+vTcj"]); }

__d('ReactComposerPhotoTaggerButton.react',['ReactComposerContextMixin','ReactComposerMediaUtils','ComposerTargetData','FileInput.react','ReactComponentWithPureRenderMixin','React','TooltipLink.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=m.PropTypes,s=m.createClass({displayName:'ReactComposerPhotoTaggerButton',mixins:[h,l],propTypes:{mediaAcceptParam:r.shape({photos:r.string,both:r.string}).isRequired,onClick:r.func,onFilesSelected:r.func.isRequired,photoLimit:r.number.isRequired,targetData:r.instanceOf(j).isRequired,hasData:r.bool,selected:r.bool},getDefaultProps:function(){return {hasData:false,mediaAcceptParam:{},selected:false};},render:function(){var t=q("_3xen"+(' '+"_6xd")+(this.props.hasData?' '+"_6xe":'')+(this.props.selected?' '+"_50hx":''),this.props.className),u=this.props.photoLimit>1?p._("Add photos or a video to your post"):p._("Add a photo or a video to your post");return (m.createElement('div',{className:"_3xem _3xen"},m.createElement(k,{accept:this.props.mediaAcceptParam.both,'aria-label':u,multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0'},m.createElement(n,{className:t,onClick:this._onSelect,tooltip:u},m.createElement('span',{className:"accessible_elem"},this.props.photoLimit>1?p._("Fotos hinzuf\u00fcgen"):p._("Foto hinzuf\u00fcgen"))))));},_onFilesSelected:function(event){this.props.onFilesSelected(event,this.refs.fileInput.getFileInput());i.clearInput(this.refs.fileInput.getFileInput());}});f.exports=s;},null);
__d('ReactComposerPhotoTaggerButtonWithOptions.react',['ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerMediaUtils','ReactComposerPhotoCarouselActions','ReactComposerPhotoTaggerButton.react','ComposerTargetData','FileInput.react','Grid.react','LayerHideOnBlur','Link.react','ReactComponentWithPureRenderMixin','React','TooltipLink.react','XUIContextualDialog.react','XUIContextualDialogBody.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa=p.GridItem,ba=t.PropTypes,ca=t.createClass({displayName:'ReactComposerPhotoTaggerButtonWithOptions',mixins:[j,s],propTypes:{mediaAcceptParam:ba.shape({photos:ba.string,both:ba.string}).isRequired,onClick:ba.func,onFilesSelected:ba.func.isRequired,photoLimit:ba.number.isRequired,targetData:ba.instanceOf(n).isRequired,hasData:ba.bool,selected:ba.bool,uploadSize:ba.number},getDefaultProps:function(){return {hasData:false,mediaAcceptParam:{},selected:false};},getInitialState:function(){return {dialogShown:false};},onLinkClick:function(){this.setState({dialogShown:!this.state.dialogShown});},onToggle:function(da){if(da!==this.state.dialogShown)this.setState({dialogShown:da});},render:function(){if(this.props.uploadSize)return (t.createElement(m,this.props));var da=z("_3xen"+(' '+"_6xd")+(this.props.hasData?' '+"_6xe":'')+(this.state.dialogShown?' '+"_50hx":''),this.props.className),ea=this.props.photoLimit>1?y._("F\u00fcge Fotos zu deinem Beitrag hinzu"):y._("F\u00fcge ein Foto zu deinem Beitrag hinzu"),fa=y._("Erstelle ein Fotokarussell"),ga=y._("Fotos\/Video hochladen"),ha=t.createElement(v,{autoFocus:false,behaviors:{LayerHideOnBlur:q},contextRef:(function(){return this.refs.cameraIcon;}).bind(this),offsetY:10,onToggle:this.onToggle,position:'above',shown:this.state.dialogShown,width:v.WIDTH.SMALL},t.createElement(w,null,t.createElement(p,{cols:1,spacing:"_2phz"},t.createElement(aa,null,t.createElement(r,{className:"_3fpv",onClick:this._onCarouselCreationClicked},fa)),t.createElement(aa,null,t.createElement(o,{accept:this.props.mediaAcceptParam.both,multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0'},t.createElement(r,{className:"_3fpv",onClick:this._onSelect},ga))))));return (t.createElement('div',{className:"_3xem _3xen",ref:'cameraIcon'},t.createElement(u,{className:da,onClick:this.onLinkClick,tooltip:ea},t.createElement('span',{className:"accessible_elem"},this.props.photoLimit>1?y._("Fotos hinzuf\u00fcgen"):y._("Foto hinzuf\u00fcgen"))),ha));},_onFilesSelected:function(event){this.props.onFilesSelected(event,this.refs.fileInput.getFileInput());k.clearInput(this.refs.fileInput.getFileInput());},_onCarouselCreationClicked:function(event){h.selectAttachment(this.context.composerID,i.MEDIA,true);l.showPhotoCarouselUrlEditArea(this.context.composerID);}});f.exports=ca;},null);