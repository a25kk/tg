/*!CK:48060070!*//*1455224060,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["0WBfD"]); }

__d("P2PLinkConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={receiverIneligibleHelpURI:"http:\/\/www.facebook.com\/help\/1495718484027862",addDebitCardHelpURI:"http:\/\/www.facebook.com\/help\/200298266807261",helpCenterURI:"http:\/\/www.facebook.com\/help\/863171203733904",contactSupportURI:"http:\/\/www.facebook.com\/help\/contact\/1491759007768605",disabledPaymentsSupportURI:"http:\/\/www.facebook.com\/help\/contact\/223254857690713",complianceLearnMoreURI:"http:\/\/www.facebook.com\/help\/1555715811351399",complianceLearnMoreMsiteURI:"http:\/\/www.facebook.com\/help\/messenger-app\/369959656515129",contactFraudTeamURI:"http:\/\/www.facebook.com\/help\/contact\/370238886476028",payerProtectionURI:"http:\/\/www.facebook.com\/payer_protection\/",helpTransferSystemFailureURI:"http:\/\/www.facebook.com\/help\/contact\/614010102040957",helpTransferManualReviewURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1463256903894928",helpTransferRecipientCanceledURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1564459413784472",helpTransferCompletedURI:"http:\/\/www.facebook.com\/help\/messenger-app\/750020781733477",helpTransferCanceledSameCardURI:"http:\/\/www.facebook.com\/help\/messenger-app\/818512131561533",settingsWWWURI:"http:\/\/www.facebook.com\/settings?tab=payments",settingsMsiteURI:"http:\/\/m.facebook.com\/settings\/p2p\/",mTermsURI:"http:\/\/www.facebook.com\/legal\/m",mHelpURI:"http:\/\/www.facebook.com\/help\/messenger-app\/870471599656315",disputeURI:"http:\/\/www.facebook.com\/help\/contact\/828169843971429",paymentMethodsURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=settings",paymentHistoryURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=history"};},null);
__d("P2PPasswordProtectionParam",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={STATUS:"status"};},null);
__d("P2PPaymentCampaignNames",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ZANGOOSE:"zangoose",SEVIPER:"seviper",PICHU:"pichu"};},null);
__d("P2PTransferParam",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TRANSFER_ID:"transfer_id",STATUS:"status",SENDER_STATUS:"sender_status",RECEIVER_STATUS:"receiver_status",RISK_RESULT:"risk_result"};},null);
__d('MessengerText.react',['ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'MessengerText',mixins:[h],propTypes:{display:l.oneOf(['inline','block']),type:l.oneOf(['primary','secondary']).isRequired,size:l.oneOf(['small'])},render:function(){return (i.createElement('div',babelHelpers._extends({},this.props,{className:k("_39r5"+(this.props.type==='primary'?' '+"_39r6":'')+(this.props.type==='secondary'?' '+"_39r7":'')+(this.props.size==='small'?' '+"_39r8":'')+(this.props.display==='inline'?' '+"__0d":''),this.props.className)}),this.props.children));}});f.exports=m;},null);
__d('P2PAPIUtils',['CreditCardFormParam','fbt','guid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=[1001,1004,1006,1002],l={getRandomDigits:function(m){return Math.random().toString().slice(2,2+m);},genRequestID:function(){return 'id:'+j()+':'+Date.now();},genOfflineThreadingID:function(){return Date.now()+''+l.getRandomDigits(6);},getUncaughtErrorMessage:function(m){if(m&&k.indexOf(m)!==-1)return i._("Leider konnten wir deine Anfrage nicht durchf\u00fchren. Bitte \u00fcberpr\u00fcfe, ob du mit dem Internet verbunden bist oder aktualisiere die Seite und versuche es erneut.");return i._("Leider ist etwas schief gelaufen. Bitte versuche es sp\u00e4ter noch einmal.");},prepareCardMutationData:function(m){var n={},o=m[h.CARD_NUMBER].replace(/ /g,'');n[h.CARD_NUMBER]=o;if(typeof m[h.CARD_EXPIRATION]==='string'){var p=m[h.CARD_EXPIRATION].split('/');n[h.MONTH]=p[0];n[h.YEAR]=p[1];n[h.CARD_EXPIRATION]={};n[h.CARD_EXPIRATION][h.MONTH]=n[h.MONTH];n[h.CARD_EXPIRATION][h.YEAR]=n[h.YEAR];}else{n[h.MONTH]=m[h.CARD_EXPIRATION][h.MONTH];n[h.YEAR]=m[h.CARD_EXPIRATION][h.YEAR];}return babelHelpers._extends({},m,n);}};f.exports=l;},null);
__d("XMoneypennyPaymentsCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/moneypenny\/payments\/_create\/",{});},null);
__d("XP2PAddressCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/address\/_create\/",{});},null);
__d("XP2PAddressesController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/addresses\/",{});},null);
__d("XP2PBannerDismissalsUpdateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/banner_dismissals\/_update\/",{banner_type:{type:"String",required:true}});},null);
__d("XP2PBannerStatesController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/banner_states\/",{});},null);
__d("XP2PBannerViewsUpdateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/banner_views\/_update\/",{banner_type:{type:"String",required:true}});},null);
__d("XP2PCardBINValidateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/card_bin\/validate\/",{bin_number:{type:"String",required:true}});},null);
__d("XP2PCreditCardCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/credit_cards\/_create\/",{});},null);
__d("XP2PCreditCardDeleteController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/credit_cards\/_delete\/",{});},null);
__d("XP2PCreditCardUpdateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/credit_cards\/_update\/",{});},null);
__d("XP2PCreditCardVerifyController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/credit_cards\/_verify\/",{});},null);
__d("XP2PCreditCardsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/credit_cards\/",{});},null);
__d("XP2PCurrentUserProfileDataController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/current_user_profile_data\/",{});},null);
__d("XP2PExtensiveTransferDetailsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transaction\/details\/",{id:{type:"String",required:true}});},null);
__d("XP2PFriendPickerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/friend_picker\/",{limit:{type:"Int",defaultValue:100},query:{type:"String"}});},null);
__d("XP2PPasswordProtectionStatusController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/password_protection_status\/",{});},null);
__d("XP2PPasswordProtectionStatusUpdateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/password_protection_status\/_update\/",{});},null);
__d("XP2PPaymentRequestCancelController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/payment_requets\/_cancel\/",{});},null);
__d("XP2PPaymentRequestCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/payment_requests\/_create\/",{});},null);
__d("XP2PPaymentRequestDeclineController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/payment_requets\/_decline\/",{});},null);
__d("XP2PPendingPaymentRequestsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/pending_payment_requests\/",{});},null);
__d("XP2PPlatformMsgrCommerceCartCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/platform\/msgr_commerce\/create\/",{});},null);
__d("XP2PPlatformSetShippingAddressController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/platform\/set_shipping_address\/",{});},null);
__d("XP2PPresetCreditCardSetController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/preset_credit_card\/_set\/",{});},null);
__d("XP2PProductItemBannerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/product_item_banner\/",{other_user_id:{type:"String",required:true}});},null);
__d("XP2PProductItemBannerDismissalController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/product_item_banner\/_dismiss\/",{platform_context_id:{type:"String",required:true}});},null);
__d("XP2PProductItemBannerMarkSoldController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/product_item_banner\/_mark_sold\/",{platform_context_id:{type:"String",required:true}});},null);
__d("XP2PTransactionsCampaignCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transactions\/campaign\/_create\/",{});},null);
__d("XP2PTransactionsCancelController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transactions\/_cancel\/",{});},null);
__d("XP2PTransactionsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transactions\/",{since:{type:"Int"}});},null);
__d("XP2PTransactionsCreateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transactions\/_create\/",{});},null);
__d("XP2PTransactionsDeclineController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/transactions\/_decline\/",{});},null);
__d("XP2PUserEligibilityController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/p2p\/user_eligibility\/",{user_ids:{type:"StringVector",required:true}});},null);
__d('P2PAPI',['AsyncRequest','CreditCardFormParam','P2PActions','P2PAPIUtils','P2PLogger','P2PGKValues','P2PPasswordProtectionParam','P2PPaymentCampaignNames','P2PPaymentLoggerEvent','P2PPaymentRequestStatus','P2PTransferParam','PaymentTokenProxyUtils','ImmutableObject','XMoneypennyPaymentsCreateController','XP2PAddressesController','XP2PAddressCreateController','XP2PBannerDismissalsUpdateController','XP2PBannerStatesController','XP2PBannerViewsUpdateController','XP2PCardBINValidateController','XP2PCreditCardDeleteController','XP2PCreditCardUpdateController','XP2PCreditCardCreateController','XP2PCreditCardVerifyController','XP2PCreditCardsController','XP2PCurrentUserProfileDataController','XP2PExtensiveTransferDetailsController','XP2PFriendPickerController','XP2PPasswordProtectionStatusController','XP2PPasswordProtectionStatusUpdateController','XP2PPaymentRequestCancelController','XP2PPaymentRequestCreateController','XP2PPaymentRequestDeclineController','XP2PPendingPaymentRequestsController','XP2PPlatformMsgrCommerceCartCreateController','XP2PPlatformSetShippingAddressController','XP2PPresetCreditCardSetController','XP2PProductItemBannerController','XP2PProductItemBannerDismissalController','XP2PProductItemBannerMarkSoldController','XP2PTransactionsCampaignCreateController','XP2PTransactionsCancelController','XP2PTransactionsCreateController','XP2PTransactionsController','XP2PTransactionsDeclineController','XP2PUserEligibilityController','emptyFunction','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb){'use strict';if(c.__markCompiled)c.__markCompiled();var db=function(fb,event){if(m.P2PWWWClientExceptionLogging)l.log(event,{exception_message:fb.getErrorDescription(),exception_code:fb.getError()});},eb={getAllCreditCards:function(){var fb=fa.getURIBuilder().getURI();new h().setURI(fb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(gb){var hb=gb.getPayload(),ib=!hb.error?hb:[];j.updateCreditCards(ib);}).setErrorHandler(function(gb){j.updateCreditCardsError();}).send();},createTransaction:function(fb){var gb=xa.getURIBuilder().getURI(),hb={},ib=fb.formData,jb=fb.success||bb,kb=fb.error||bb;hb[i.CREDENTIAL_ID]=ib[i.CREDENTIAL_ID];hb.amount=ib.amount;hb.receiver_id=ib.receiverId;hb.offline_threading_id=k.genOfflineThreadingID();hb.group_thread_fbid=ib.group_thread_fbid;hb.platform_context_id=ib.platform_context_id;hb.shipping_address_id=ib.shippingAddressID;hb.shipping_option_id=ib.shippingOptionID;hb.memo_text=ib.memoText;hb.payment_request_id=ib.paymentRequestID;new h().setData(hb).setMethod('POST').setURI(gb).setAllowCrossPageTransition(true).setHandler((function(lb){var mb=lb?lb.getPayload():{};if(mb.error){kb(mb.error);}else{jb(mb);this.getAllCreditCards();if(hb.payment_request_id)j.paymentRequestUpdated({id:hb.payment_request_id,currentStatus:q.TRANSFER_COMPLETED});}}).bind(this)).setErrorHandler(function(lb){kb({message:k.getUncaughtErrorMessage(lb.getError())});db(lb,p.UI_ACTN_CREATE_TRANSFER_EXCEPTION);}).send();},addCreditCard:function(fb){j.ignoreCreditCardChannelEvents();var gb=da.getURIBuilder().getURI().getPath(),hb=fb.onSuccess||bb,ib=fb.onError||bb,jb=s.getURI({tpe:gb});fb=k.prepareCardMutationData(fb);var kb=new t(fb),lb=fb.hasPlatformContext;delete fb.onSuccess;delete fb.onError;j.creditCardSaving();new h().setAllowCrossOrigin(true).setURI(jb).setData(fb).setMethod('POST').setHandler(function(mb){var nb=mb.getPayload();if(!nb.errors){kb=t.set(kb,nb);j.addCreditCard(kb);if(nb.isPreset)j.transferAccepted();if(lb)j.checkoutCreditCardSelected(nb[i.CREDENTIAL_ID]);hb();}else{j.addCreditCardError(babelHelpers._extends({requestID:kb.requestID},nb));ib(nb);}j.allowCreditCardChannelEvents();}).setErrorHandler(function(mb){j.addCreditCardError({requestID:kb.requestID,errors:{general:{message:k.getUncaughtErrorMessage(mb.getError())}}});j.allowCreditCardChannelEvents();db(mb,p.UI_ACTN_ADD_CARD_EXCEPTION);}).send();},getTransactions:function(fb){fb=fb||{};var gb={},hb=fb,ib=ya.getURIBuilder().getURI(),jb=new t(hb);if(hb.since)gb.since=hb.since;return new h().setData(gb).setURI(ib).setMethod('GET').setReadOnly(true).setHandler(function(kb){var lb=kb.getPayload();if(!lb.error){j.updateTransfers(lb);}else j.updateTransfersError(babelHelpers._extends({requestID:jb.requestID},lb));}).setErrorHandler(function(kb){j.updateTransfersError({error:{message:k.getUncaughtErrorMessage(kb.getError())},requestID:jb.requestID});}).send();},getExtensiveTransferDetailsByID:function(fb){var gb=ha.getURIBuilder().setString('id',fb).getURI();new h().setURI(gb).setMethod('GET').setReadOnly(true).setHandler(function(hb){var ib=hb.getPayload();if(!ib.error)j.extensiveTransferDetailsLoaded(ib);}).send();},getNUXTransactions:function(){var fb=new Date(),gb=Math.round(fb.setDate(fb.getDate()-15)/1000),hb=ya.getURIBuilder().getURI();return new h().setData({since:gb}).setURI(hb).setMethod('GET').setReadOnly(true).setHandler(function(ib){var jb=ib.getPayload();if(!jb.error)j.updateNUXTransfers(jb);}).send();},updatePresetCreditCard:function(fb){var gb=ra.getURIBuilder().getURI();new h().setData(fb).setURI(gb).setMethod('POST').setHandler(function(hb){var ib=hb.getPayload();if(!ib.error){j.updatePresetCreditCard(babelHelpers._extends({},ib,{requestID:fb.requestID}));j.transferAccepted();}else j.updatePresetCreditCardError(babelHelpers._extends({},ib,{requestID:fb.requestID}));}).setErrorHandler(function(hb){j.updatePresetCreditCardError({error:{message:k.getUncaughtErrorMessage(hb.getError())},requestID:fb.requestID});db(hb,p.UI_ACTN_UPDATE_PRESET_CARD_EXCEPTION);}).send();},updateCreditCard:function(fb){j.ignoreCreditCardChannelEvents();var gb=ca.getURIBuilder().getURI().getPath(),hb=s.getURI({tpe:gb});fb=k.prepareCardMutationData(fb);var ib=new t(fb);new h().setAllowCrossOrigin(true).setURI(hb).setData(fb).setMethod('POST').setHandler(function(jb){var kb=jb.getPayload();if(!kb.errors){j.updateCreditCard(ib);}else j.updateCreditCardError(babelHelpers._extends({},kb,{requestID:ib.requestID}));j.allowCreditCardChannelEvents();}).setErrorHandler(function(jb){j.updateCreditCardError({errors:{general:{message:k.getUncaughtErrorMessage(jb.getError())}},requestID:ib.requestID});j.allowCreditCardChannelEvents();db(jb,p.UI_ACTN_UPDATE_CARD_EXCEPTION);}).send();},deleteCreditCard:function(fb){var gb=ba.getURIBuilder().getURI();new h().setData(fb).setMethod('POST').setURI(gb).setHandler(function(hb){var ib=hb.getPayload();if(!ib.error){j.deleteCreditCard(babelHelpers._extends({},ib,{requestID:fb.requestID}));}else j.deleteCreditCardError(babelHelpers._extends({},ib,{requestID:fb.requestID}));}).setErrorHandler(function(hb){j.deleteCreditCardError({error:{message:k.getUncaughtErrorMessage(hb.getError())},requestID:fb.requestID});}).send();},getPasswordProtectionSetting:function(fb){var gb=ja.getURIBuilder().getURI(),hb=fb.success||bb,ib=fb.error||bb;new h().setURI(gb).setMethod('GET').setReadOnly(true).setHandler(function(jb){var kb=jb?jb.getPayload():[];if(kb.error){ib();}else hb(kb);}).setErrorHandler(function(jb){ib();}).send();},setPasswordProtectionSetting:function(fb){var gb=ka.getURIBuilder().getURI(),hb=fb.formData,ib=fb.success||bb,jb=fb.error||bb,kb={};kb[n.STATUS]=hb[n.STATUS];new h().setData(kb).setURI(gb).setMethod('POST').setHandler(function(lb){var mb=lb?lb.getPayload():{};if(mb.error){jb(mb.error);}else ib();}).setErrorHandler(function(lb){jb();}).send();},declineTransaction:function(fb){var gb=za.getURIBuilder().getURI(),hb=fb.formData,ib=fb.success||bb,jb=fb.error||bb,kb={};kb[r.TRANSFER_ID]=hb[r.TRANSFER_ID];new h().setData(kb).setURI(gb).setMethod('POST').setHandler(function(lb){var mb=lb?lb.getPayload():{},nb={};if(mb.error){jb(mb.error);}else{ib();nb[r.TRANSFER_ID]=kb[r.TRANSFER_ID];j.transferDeclined(nb);}}).setErrorHandler(function(lb){jb();db(lb,p.UI_ACTN_DECLINE_TRANSFER_EXCEPTION);}).send();},cancelTransaction:function(fb){var gb=wa.getURIBuilder().getURI(),hb=fb.formData,ib=fb.success||bb,jb=fb.error||bb,kb={};kb[r.TRANSFER_ID]=hb[r.TRANSFER_ID];new h().setData(kb).setURI(gb).setMethod('POST').setHandler(function(lb){var mb=lb?lb.getPayload():{};if(mb.error){jb(mb.error);}else ib();}).setErrorHandler(function(lb){jb();}).send();},verifyCreditCard:function(fb){var gb=ea.getURIBuilder().getURI().getPath(),hb=s.getURI({tpe:gb});new h().setAllowCrossOrigin(true).setURI(hb).setData(fb).setMethod('POST').setHandler(function(ib){var jb=ib.getPayload();if(!jb.error){j.verifyCreditCard(babelHelpers._extends({},jb,{requestID:fb.requestID}));}else j.verifyCreditCardError(babelHelpers._extends({},jb,{requestID:fb.requestID}));}).setErrorHandler(function(ib){j.verifyCreditCardError({error:{message:k.getUncaughtErrorMessage(ib.getError())},requestID:fb.requestID});db(ib,p.UI_ACTN_VERIFY_CARD_EXCEPTION);}).send();},validateBINNumber:function(fb){fb=fb||{};var gb=new t(fb),hb=aa.getURIBuilder().setString('bin_number',fb.binNumber).getURI();return new h().setURI(hb).setMethod('GET').setReadOnly(true).setHandler(function(ib){var jb=ib.getPayload();if(!jb.error){j.binNumberValidated(babelHelpers._extends({},jb,{requestID:fb.requestID}));}else j.binNumberValidatedError(babelHelpers._extends({},jb,{requestID:gb.requestID}));}).send();},getUserEligibility:function(fb){fb=fb||{};var gb=ab.getURIBuilder().setStringVector('user_ids',fb.userIDs).getURI();return new h().setURI(gb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(hb){var ib=hb.getPayload();if(!ib.error)j.userEligibilityUpdated(ib);}).send();},getFriendsList:function(fb,gb){var hb=ia.getURIBuilder().setInt('limit',fb).setString('query',gb).getURI();return new h().setURI(hb).setMethod('GET').setReadOnly(true).setHandler(function(ib){var jb=ib.getPayload();if(!jb.error)j.friendsListUpdated({friends:jb,query:gb});}).send();},getBannerStates:function(){var fb=y.getURIBuilder().getURI();new h().setURI(fb).setMethod('GET').setReadOnly(true).setHandler(function(gb){var hb=gb.getPayload();if(!hb.error)j.bannerStatesUpdated(hb);}).send();},incrementBannerViews:function(fb){var gb=z.getURIBuilder().setString('banner_type',fb).getURI();new h().setMethod('POST').setURI(gb).send();},incrementBannerDismissals:function(fb){var gb;j.bannerDismissed(fb);gb=x.getURIBuilder().setString('banner_type',fb).getURI();new h().setMethod('POST').setURI(gb).send();},createMoneypennyTransfer:function(fb){var gb=u.getURIBuilder().getURI();new h().setMethod('POST').setURI(gb).setData({item_id:fb.item_id,credential_id:fb.credential_id,amount:fb.amount,external_request_id:fb.external_request_id}).setHandler((function(hb){var ib=hb.getPayload();if(!ib.error){j.moneypennyTransferCreated(babelHelpers._extends({},ib,{requestID:fb.requestID}));this.getAllCreditCards();}else j.moneypennyTransferCreatedError(babelHelpers._extends({},ib,{requestID:fb.requestID}));}).bind(this)).setErrorHandler(function(hb){j.moneypennyTransferCreatedError({error:{message:k.getUncaughtErrorMessage(hb.getError())},requestID:fb.requestID});db(hb,p.UI_ACTN_CREATE_M_TRANSFER_EXCEPTION);}).send();},createFinancialIncentivesTransfer:function(fb){var gb=va.getURIBuilder().getURI(),hb=fb.success||bb,ib=fb.error||bb,jb={};jb[i.CREDENTIAL_ID]=fb.credential_id;jb.external_request_id=k.genOfflineThreadingID();jb.campaign_name=o.SEVIPER;new h().setData(jb).setURI(gb).setMethod('POST').setHandler(function(kb){var lb=kb.getPayload();if(lb.error){ib(lb.error);}else hb();}).send();},getPlatformContextByOtherUserID:function(fb){fb=fb||{};var gb=sa.getURIBuilder().setString('other_user_id',fb.otherUserID).getURI();return new h().setURI(gb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(hb){var ib=hb.getPayload();if(!ib.error&&!cb(ib))j.addPlatformContext(ib);}).send();},dismissPlatformContextBanner:function(fb){var gb;j.platformContextBannerDismissed(fb);gb=ta.getURIBuilder().setString('platform_context_id',fb).getURI();new h().setMethod('POST').setURI(gb).send();},markSoldPlatformContextProductItem:function(fb){var gb;j.platformContextProductItemSold(fb);gb=ua.getURIBuilder().setString('platform_context_id',fb).getURI();new h().setMethod('POST').setURI(gb).send();},getAddresses:function(){var fb=v.getURIBuilder().getURI();return new h().setURI(fb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(gb){var hb=gb.getPayload();if(!hb.error)j.updateAddresses(hb);}).send();},addAddress:function(){var fb=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],gb=w.getURIBuilder().getURI(),hb,ib=fb.platformContext,jb=fb.onSuccess||bb,kb=fb.onError||bb;hb={label:fb.label,care_of:fb.care_of,city:fb.city,street1:fb.street1,street2:fb.street2,state:fb.state,zip:fb.zip};j.addressSaving();return new h().setData(hb).setURI(gb).setMethod('POST').setHandler((function(lb){var mb=lb.getPayload();if(!mb.errors){j.addAddress(babelHelpers._extends({},mb,hb,{requestID:fb.requestID}));if(ib){j.checkoutAddressSelected(mb.id);this.setPlatformContextShippingAddress({platformContextID:ib.id,shippingAddressID:mb.id});}jb();}else{j.addAddressError(babelHelpers._extends({},mb,{requestID:fb.requestID}));kb(mb);}}).bind(this)).setErrorHandler(function(lb){j.addAddressError({errors:{general:{message:k.getUncaughtErrorMessage(lb.getError())}},requestID:fb.requestID});db(lb,p.UI_ACTN_ADD_ADDRESS_EXCEPTION);}).send();},createMCCart:function(fb){var gb=pa.getURIBuilder().getURI(),hb,ib=fb.productItemID;fb=fb||{};hb={item_id:ib};j.checkoutCartInitiated();return new h().setData(hb).setURI(gb).setMethod('POST').setHandler(function(jb){var kb=jb.getPayload();if(!kb.error){j.addPlatformContext(babelHelpers._extends({},kb));j.checkoutCartCreated({sellerID:fb.sellerID,productItemID:ib});}else j.addPlatformContextError(babelHelpers._extends({itemID:ib},kb));}).setErrorHandler(function(jb){j.addPlatformContextError({itemID:ib,error:{message:k.getUncaughtErrorMessage(jb.getError())}});db(jb,p.UI_ACTN_CREATE_CART_EXCEPTION);}).send();},setPlatformContextShippingAddress:function(fb){var gb=qa.getURIBuilder().getURI(),hb,ib=fb.platformContextID,jb=fb.shippingAddressID;fb=fb||{};hb={platform_context_id:ib,shipping_address_id:jb};j.checkoutProcessing(true);return new h().setData(hb).setURI(gb).setMethod('POST').setHandler(function(kb){j.checkoutProcessing(false);var lb=kb.getPayload();if(!lb.error)j.addPlatformContext(babelHelpers._extends({},lb));}).setErrorHandler(function(kb){db(kb,p.UI_ACTN_SET_CART_ADDRESS_EXCEPTION);}).send();},getCurrentUserProfileData:function(){var fb=ga.getURIBuilder().getURI();return new h().setURI(fb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(gb){var hb=gb.getPayload();if(!hb.error){j.checkoutBuyerProfileUpdated(hb);}else j.checkoutBuyerProfileUpdated({});}).setErrorHandler(function(gb){j.checkoutBuyerProfileUpdated({});}).send();},createPaymentRequest:function(fb){var gb=ma.getURIBuilder().getURI(),hb=fb.formData,ib=hb.amount,jb=hb.requesteeID,kb=hb.memoText,lb=hb.group_thread_fbid,mb={amount:ib,memo_text:kb,offline_threading_id:k.genOfflineThreadingID(),requestee_id:jb,group_thread_fbid:lb};j.paymentRequestInitiated();return new h().setData(mb).setURI(gb).setMethod('POST').setHandler(function(nb){var ob=nb.getPayload();if(!ob.error){j.paymentRequestCreated(babelHelpers._extends({},ob,{amount:ib,memoText:kb,requesteeID:jb}));fb.success(ob);}else{j.paymentRequestCreatedError(ob);fb.error(ob);}j.paymentRequestInitiatedComplete();}).setErrorHandler(function(nb){fb.error({error:{message:k.getUncaughtErrorMessage(nb.getError())}});j.paymentRequestInitiatedComplete();db(nb,p.UI_ACTN_CREATE_REQUEST_EXCEPTION);}).send();},declinePaymentRequest:function(fb){var gb=na.getURIBuilder().getURI(),hb=fb.paymentRequestID,ib=fb.success||bb,jb=fb.error||bb,kb={payment_request_id:hb};j.paymentRequestDeclineInitiated();return new h().setData(kb).setURI(gb).setMethod('POST').setHandler(function(lb){var mb=lb.getPayload();if(!mb.error){j.paymentRequestDeclined(hb);j.hideDialog();ib(mb);}else{j.paymentRequestDeclineError(mb);jb(mb);}}).setErrorHandler(function(lb){j.paymentRequestDeclineError({error:{message:k.getUncaughtErrorMessage(lb.getError())}});jb();db(lb,p.UI_ACTN_DECLINE_REQUEST_EXCEPTION);}).send();},cancelPaymentRequest:function(fb){var gb=la.getURIBuilder().getURI(),hb=fb.paymentRequestID,ib=fb.success||bb,jb=fb.error||bb,kb={payment_request_id:hb};j.paymentRequestCancelInitiated();return new h().setData(kb).setURI(gb).setMethod('POST').setHandler(function(lb){var mb=lb.getPayload();if(!mb.error){j.paymentRequestCanceled(hb);j.hideDialog();ib(mb);}else{j.paymentRequestCancelError(mb);jb(mb);}}).setErrorHandler(function(lb){j.paymentRequestCancelError({error:{message:k.getUncaughtErrorMessage(lb.getError())}});jb();db(lb,p.UI_ACTN_CANCEL_REQUEST_EXCEPTION);}).send();},getPendingPaymentRequests:function(){var fb=oa.getURIBuilder().getURI();new h().setURI(fb).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(gb){var hb=gb.getPayload(),ib=!hb.error?hb:[];j.paymentRequestsFetched(ib);}).send();}};f.exports=eb;},null);
__d('P2PAmountUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=10000,i={isAmountOverLegalLimit:function(j){return parseFloat(this.sanitizeAmount(j))>=h;},isAmountZero:function(j){return parseFloat(this.sanitizeAmount(j))===0;},isValidSendAmount:function(j){return !this.isAmountOverLegalLimit(j)&&!this.isAmountZero(j);},sanitizeAmount:function(j){return j.replace(/[^0-9\.]+/g,'');}};f.exports=i;},null);
__d('P2PButton.react',['CurrentEnvironment','MessengerDialogButton.react','React','XUIButton.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.createClass({displayName:'P2PButton',render:function(){var m=h.messengerdotcom,n=m?i:k,o=this.props.type;if(!o)o=this.props.use==='confirm'?'primary':'secondary';var p=m?'default':this.props.use,q=babelHelpers._extends({},this.props,{type:o,use:p});return (j.createElement(n,q,this.props.children));}});f.exports=l;},null);
__d('P2PDialog.react',['CurrentEnvironment','LayerFadeOnHide','MessengerDialog.react','React','XUIDialog.react','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'P2PDialog',propTypes:{onToggle:n.func,shown:n.bool,width:n.number},getDefaultProps:function(){return {onToggle:m,repositionOnUpdate:false,shown:true,width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout((function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}).bind(this),0);},render:function(){var p=h.messengerdotcom,q=p?j:l;return (k.createElement(q,babelHelpers._extends({behaviors:{LayerFadeOnHide:i}},this.props,{ref:'dialog'}),this.props.children));}});f.exports=o;},null);
__d('P2PDialogBody.react',['CurrentEnvironment','MessengerDialogBody.react','React','XUIDialogBody.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.createClass({displayName:'P2PDialogBody',render:function(){var m=h.messengerdotcom,n=m?i:k;return (j.createElement(n,this.props,this.props.children));}});f.exports=l;},null);
__d('P2PDialogFooter.react',['CurrentEnvironment','MessengerDialogFooter.react','React','XUIDialogFooter.react','joinClasses','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.createClass({displayName:'P2PDialogFooter',render:function(){var o=h.messengerdotcom,p=o?i:k,q,r=this.props.children;if(o){q=j.Children.count(this.props.children);r=j.Children.map(this.props.children,function(s,t){if(!s)return null;return j.cloneElement(s,{className:l(s.props.className,"_4ec0"),type:t===0&&q===2?'secondary':'primary'});});}return (j.createElement(p,this.props,r));}});f.exports=n;},null);
__d('P2PDialogTitle.react',['CurrentEnvironment','MessengerDialogHeader.react','React','XUIDialogTitle.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.createClass({displayName:'P2PDialogTitle',render:function(){var m=h.messengerdotcom,n=m?i:k;return (j.createElement(n,this.props,this.props.children));}});f.exports=l;},null);
__d('P2PText.react',['CurrentEnvironment','MessengerText.react','React','XUIGrayText.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'P2PText',propTypes:{type:l.oneOf(['primary','secondary']).isRequired},render:function(){var n=h.messengerdotcom,o=n?i:k,p=this.props.type,q=this.props;if(!n){q=babelHelpers._extends({},this.props,{display:this.props.display||'block',shade:p==='primary'?'dark':'light',size:this.props.size||'small'});}else{q=babelHelpers._extends({},this.props,{size:'small'});delete q.size;}return (j.createElement(o,q,this.props.children));}});f.exports=m;},null);
__d('P2PFriendsListStore',['P2PActionConstants','EventEmitter','P2PAPI','P2PDispatcher'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;'use strict';var n=[],o='',p=25;l=babelHelpers.inherits(q,i);m=l&&l.prototype;function q(){m.constructor.call(this);k.register(this.onEventDispatched.bind(this));}q.prototype.onEventDispatched=function(r){var s=r.data,t=r.type;switch(t){case h.FRIENDS_LIST_UPDATED:this.handleFriendsListUpdated(s);this.emit('change');break;}};q.prototype.handleFriendsListUpdated=function(r){if(!o||o===r.query)n=r.friends;};q.prototype.searchFriends=function(r){o=r;this.fetchFriends(r);};q.prototype.fetchFriends=function(r){j.getFriendsList(p,r);};q.prototype.getFriends=function(){return n;};f.exports=new q();},null);
__d('P2PFriendPicker.react',['debounce','Image.react','Layout.react','MercuryIDs','P2PActions','P2PFriendsListStore','P2PLoadingMask.react','P2PLogger','P2PPaymentLoggerEvent','P2PText.react','React','ScrollableArea.react','XUIButton.react','XUITextInput.react','cx','fbt','glyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){'use strict';if(c.__markCompiled)c.__markCompiled();var y=j.FillColumn,z=j.Column,aa=r.PropTypes,ba=r.createClass({displayName:'P2PFriendPicker',propTypes:{amount:aa.string,buttonLabel:aa.node,eventFlow:aa.string.isRequired,height:aa.number,onFriendSelected:aa.func,referrer:aa.string,subTitle:aa.node.isRequired},getDefaultProps:function(){return {amount:'',height:350,title:w._("FreundIn ausw\u00e4hlen"),subTitle:w._("Das sind deine Freunde, die Geld empfangen k\u00f6nnen.")};},getInitialState:function(){return {friends:m.getFriends(),showLoader:true};},log:function(ca,da){o.log(ca,babelHelpers._extends({www_event_flow:this.props.eventFlow},da));},loggedSearch:null,friendPickerStoreSub:null,componentDidMount:function(){this.friendPickerStoreSub=m.addListener('change',this.updateFriendsList);m.searchFriends();this.log(p.UI_ACTN_FRIEND_PICKER_SHOWN);},componentWillUnmount:function(){if(this.friendPickerStoreSub){this.friendPickerStoreSub.remove();this.friendPickerStoreSub=null;}},updateFriendsList:function(){this.setState({friends:m.getFriends(),showLoader:false});},onFriendSelect:function(ca){this.log(p.UI_ACTN_FRIEND_PICKER_SELECT,{object_id:ca.id});l.chatSendViewOpened({amount:this.props.amount,referrer:this.props.referrer,threadID:k.getThreadIDFromUserID(ca.id)});this.props.onFriendSelected&&this.props.onFriendSelected();},getQuery:function(){return (this.refs.input_ref&&this.refs.input_ref.refs.textInput.getValue());},onSearchInputChange:function(){if(!this.loggedSearch){this.log(p.UI_ACTN_FRIEND_PICKER_SEARCH);this.loggedSearch=true;}var ca=this.getQuery();if(!ca)this.setState({showLoader:true});m.searchFriends(ca);},renderTagLineRow:function(){if(this.state.showLoader)return null;return (r.createElement('li',{className:"_1px5"},r.createElement('div',{className:"_1px6"},this.props.subTitle)));},renderfriendRow:function(ca){var da;if(this.props.buttonLabel)da=r.createElement(t,{label:this.props.buttonLabel,size:'large'});return (r.createElement('li',{className:"_1px7",key:ca.id,onClick:this.onFriendSelect.bind(this,ca)},r.createElement(j,null,r.createElement(y,null,r.createElement('div',{className:"_1px8"},r.createElement(i,{className:"_1px9",height:50,src:ca.image_src,width:50})),r.createElement('div',{className:"_1pxa"},r.createElement(q,{className:"_1pxb",type:'primary'},ca.full_name))),r.createElement(z,{className:"_1pxc"},da))));},renderFriendList:function(){var ca=this.getQuery();if(!this.state.showLoader&&this.state.friends.length===0)if(ca&&ca.length){return (r.createElement('div',{className:"_1pxd"},w._("Keine Ergebnisse.")));}else return (r.createElement('div',{className:"_1pxd"},w._("Du hast keine Freunde, die Geld empfangen k\u00f6nnen.")));return (r.createElement('div',{className:"_1pxe"},r.createElement(n,{visible:this.state.showLoader}),r.createElement(s,{height:this.props.height},r.createElement('ul',null,this.state.friends.map(this.renderfriendRow),this.renderTagLineRow()))));},render:function(){return (r.createElement('div',null,r.createElement('div',{className:"_1pxf"},r.createElement('div',{className:"_1pxg"},r.createElement(u,{className:"_1pxn",height:'tall',onChange:h(this.onSearchInputChange,150),placeholder:'Search friends',ref:'input_ref'}),r.createElement(i,{className:"_1pxo",src:x('search')}))),this.renderFriendList()));}});f.exports=ba;},null);
__d('P2PFriendPickerDialog.react',['P2PDialog.react','P2PDialogBody.react','P2PDialogTitle.react','P2PFriendPicker.react','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=l.PropTypes,p=l.createClass({displayName:'P2PFriendPickerDialog',propTypes:{amount:o.string,buttonLabel:o.node,eventFlow:o.string.isRequired,onClose:o.func.isRequired,subTitle:o.node.isRequired,title:o.node.isRequired},getDefaultProps:function(){return {amount:'',title:n._("FreundIn ausw\u00e4hlen"),subTitle:n._("Das sind deine Freunde, die Geld empfangen k\u00f6nnen.")};},handleToggle:function(q){if(!q)this.props.onClose();},render:function(){return (l.createElement(h,{onToggle:this.handleToggle,width:445},l.createElement(j,null,l.createElement('div',{className:"_4ia-"},this.props.title)),l.createElement(i,{className:"_4ib0"},l.createElement(k,{amount:this.props.amount,buttonLabel:this.props.buttonLabel,eventFlow:this.props.eventFlow,onFriendSelected:this.props.onClose,subTitle:this.props.subTitle}))));}});f.exports=p;},null);
__d('P2PSendMoneyHelper',['MercuryIDs','P2PActions','P2PLogger','P2PFriendPickerDialog.react','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o={bindProfileSendMoneyAction:function(p,q){p.subscribe('itemclick',function(r,s){if(s.item.getValue()==='send_money')i.chatSendViewOpened({referrer:'profile_action',threadID:h.getThreadIDFromUserID(q)});});},initPaymentsBluebarMenuItems:function(p){p.subscribe('itemclick',function(q,r){var s=r.item.getValue();if(s==='send_money'){i.showDialog(k,{buttonLabel:n._("Zahlung an FreundIn"),eventFlow:m.UI_FLOW_SEND_MONEY_BLUEBAR,onClose:i.hideDialog,title:n._("Sende deinen Freunden Geld")});}else if(s==='payments_history')j.log(l.UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK,{www_event_flow:m.UI_FLOW_PAYMENTS_MENU_BLUEBAR});});}};f.exports=o;},null);