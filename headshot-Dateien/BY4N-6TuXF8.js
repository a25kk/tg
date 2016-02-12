/*!CK:504814817!*//*1455218400,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NPAuh"]); }

__d('ChainingActionLink',['CSS','DOM','Event','csx','tidyEvent','BanzaiODS'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n="._4sb9",o="._5g3q",p="._5g3r",q={listenForClick:function(r){var s=i.scry(r,n),t=i.find(r,o),u=i.find(r,p);s.forEach(function(v){l(j.listen(v,'click',function(){t&&h.hide(t);u&&h.show(u);}));});},countSavesAndShares:function(r,s,t){j.listen(r,'click',function(event){m.bumpEntityKey('pubcontent','pubcontent_chaining.article_chaining.save_gk_'+t);});j.listen(s,'click',function(event){m.bumpEntityKey('pubcontent','pubcontent_chaining.article_chaining.share_gk_'+t);});}};f.exports=q;},null);
__d("XUploadVideoCalloutController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/composerx\/pages\/seen_upload_video\/",{});},null);