;/*FB_PKG_DELIM*/

__d("CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6261900600538922"}),null);
__d("CometFeedPreferencesControlPanelDialogQuery$Parameters",["CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation"),metadata:{},name:"CometFeedPreferencesControlPanelDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4980175375436403"}),null);
__d("CometFeedPreferencesDialogNoFavoriteQuery$Parameters",["CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation"),metadata:{},name:"CometFeedPreferencesDialogNoFavoriteQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometListCellPulseEffect.react",["CometPulseEffect.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={pulseEffect:{display:"x1lliihq",marginStart:"x1i64zmx",marginLeft:null,marginRight:null,marginEnd:"x1emribx",maxWidth:"x193iq5w",$$css:!0},pulseInner:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",$$css:!0}};function a(a){var b=a.children,d=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]);return i.jsx(c("CometPulseEffect.react"),babelHelpers["extends"]({},a,{xstyle:[j.pulseEffect,d],children:function(a){return i.jsx("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xdj266r x11i5rnm xat24cr x1mh8g0r",ref:a,children:b})}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSettingsDropdownListItem.react",["CometListCellPulseEffect.react","TetraListCell.react","react","useTopNavigationLogging"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useCallback;function a(a){var b=a.cellProps,e=a.itemKey,f=a.position,g=a.selected;a=a.showPulseEffect;a=a===void 0?!1:a;var h=b.onPress;e=d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(e,f,g);var k=e[0];f=e[1];g=j(function(a){k(),h&&h(a)},[k,h]);return a?i.jsx(c("CometListCellPulseEffect.react"),{pulseColor:"primary",children:i.jsx(c("TetraListCell.react"),babelHelpers["extends"]({paddingHorizontal:0},b,{onPress:g,ref:f}))}):i.jsx(c("TetraListCell.react"),babelHelpers["extends"]({},b,{onPress:g,ref:f}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadioGroupList.react",["BaseView.react","CometRadioGroupListContext","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo,l={childListCell:{listStyleType:"x3ct3a4",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0}};function a(a){var b=a.children,d=a.component,e=d===void 0?"div":d;d=a.label;var f=a.name,g=a.onValueChange,i=a.subheader,m=a.testid,n=a.value;m=a.xstyle;a=k(function(){return{name:f,onValueChange:g,value:n}},[f,g,n]);return j.jsxs(c("BaseView.react"),{children:[i&&j.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headline3",children:i}),j.jsx(c("CometRadioGroupListContext").Provider,{value:a,children:j.jsx(e,{"aria-label":d,className:(h||(h=c("stylex")))(m),role:"radiogroup",testid:void 0,children:j.Children.map(b,function(a){var b=e==="ul",d=b?"li":"div";return j.jsx(d,{className:(h||(h=c("stylex")))(b&&l.childListCell),children:a})})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DisclosureAddOn.react",["ix","AddOnEndOverride.react","CometIcon.react","CometListCellContext","Locale","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useContext,l=c("Locale").isRTL(),m={spacer:{width:"x51ohtg",$$css:!0},textNode:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0}};function a(a){var b=a.color,e=a.icon,f=a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","icon","text"]);var g=k(c("CometListCellContext")),i=g.disabled;i=i===void 0?!1:i;g=g.level;g=g===void 0?3:g;e=e;g===3?e=l?d("fbicon")._(h("492521"),24):d("fbicon")._(h("492575"),24):e=l?d("fbicon")._(h("492518"),20):d("fbicon")._(h("492572"),20);b=j.jsx(c("CometIcon.react"),babelHelpers["extends"]({},a,{color:i?"disabled":(a=b)!=null?a:"secondary",disabled:i,icon:e}));f!=null&&(b=j.jsxs(c("AddOnEndOverride.react"),{xstyle:m.textNode,children:[j.jsx(c("TetraText.react"),{color:i?"disabled":"secondary",numberOfLines:1,type:g===3?"body2":"body3",children:f}),j.jsx("div",{className:"x51ohtg"}),b]}));return b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadioListCellPressable.react",["ix","CometIcon.react","CometListCellPressable.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a,b){var e,f=a.radioAddonComponent,g=a.radioAddonProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["radioAddonComponent","radioAddonProps"]);e=(e=a.disabled)!=null?e:!1;var i=g.checked;i=i===void 0?!1:i;var k=g.checkedIcon,l=g.color,m=g.disabled;m=m===void 0?!1:m;var n=g.icon;g["aria-label"];g["aria-labelledby"];g.onBlur;g.onChange;g.onFocus;g.onValueChange;var o=babelHelpers.objectWithoutPropertiesLoose(g,["aria-label","aria-labelledby","onBlur","onChange","onFocus","onValueChange"]);k=(k=k)!=null?k:d("fbicon")._(h("621399"),20);n=(n=n)!=null?n:d("fbicon")._(h("545517"),20);var p=f!=null;o=f!=null?j.jsx(f,babelHelpers["extends"]({},o)):j.jsx(c("CometIcon.react"),{"aria-hidden":!0,color:e||m?"disabled":i?(f=l)!=null?f:"highlight":"secondary",icon:i?k:n});e=j.jsx(c("CometListCellPressable.react"),babelHelpers["extends"]({},a,{addOnEnd:o,"aria-checked":p?void 0:!!g.checked,focusable:!p,ref:b,role:p?"presentation":"radio"}));return p?j.jsx("label",{children:e}):e}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("CometFeedPreferencesControlPanelConstants",["fbt","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";a=c("gkx")("5774");b=h._("__JHASH__jItHsdEfz2R__JHASH__");d=h._("__JHASH__OND77PPZZOh__JHASH__");e=h._("__JHASH__cQOxM0c5wQ9__JHASH__");f=h._("__JHASH__EVgFTKJ0-F4__JHASH__");c=h._("__JHASH__ytyJ1RMkQRz__JHASH__");var i=h._("__JHASH__R1-gwqhMFDg__JHASH__"),j=h._("__JHASH__aimYhLFaQ5c__JHASH__"),k=h._("__JHASH__fT-RTgHRHjV__JHASH__"),l=h._("__JHASH__4zP2K3HkJzj__JHASH__"),m=h._("__JHASH__x1qqxDi6pJ3__JHASH__"),n=h._("__JHASH__u9bkjHzd7wl__JHASH__"),o=h._("__JHASH__f02ngmSiB5U__JHASH__"),p=h._("__JHASH__h4ZnX54LWRc__JHASH__"),q=h._("__JHASH__yzq7fRSvzad__JHASH__"),r=h._("__JHASH__jJLFPP-KXXr__JHASH__"),s=h._("__JHASH__H8ytYrBrt3h__JHASH__"),t=h._("__JHASH__jJLFPP-KXXr__JHASH__"),u=h._("__JHASH__H8ytYrBrt3h__JHASH__"),v=h._("__JHASH__UfwdxLaXC9i__JHASH__"),w=h._("__JHASH__w40YFq3HtDb__JHASH__"),x=h._("__JHASH__mqoutCDuyex__JHASH__"),y=h._("__JHASH__hF87C777iR9__JHASH__"),z=h._("__JHASH__NTPLB20Reeu__JHASH__"),A=h._("__JHASH__t6_k3BTVbR8__JHASH__"),B=h._("__JHASH__HWltnQ_wQof__JHASH__"),C=h._("__JHASH__tFmCeNiGFJW__JHASH__"),D=h._("__JHASH__tn_pYBzPz8g__JHASH__"),E=h._("__JHASH__7bnnDAq13JS__JHASH__"),F=h._("__JHASH__xGmd46-PivH__JHASH__");h=h._("__JHASH__tv7Xl2LlsGg__JHASH__");g.CONTROL_PANEL_LAUNCH_GK=a;g.CONTROL_PANEL_DIALOG_TITLE=b;g.CONTROL_PANEL_NFP_ENTRYPOINT_NAME=d;g.CONTROL_PANEL_INTRO_TEXT=e;g.CONTROL_PANEL_INTRO_LEARN_MORE_HEADLINE=f;g.CONTROL_PANEL_INTRO_LEARN_MORE_TEXT=c;g.CONTROL_PANEL_LEARN_MORE_POSTS_HEADER=i;g.CONTROL_PANEL_LEARN_MORE_POSTS_BODY=j;g.CONTROL_PANEL_LEARN_MORE_PREFERENCE_HEADER=k;g.CONTROL_PANEL_LEARN_MORE_PREFERENCE_BODY=l;g.CONTROL_PANEL_LEARN_MORE_UPDATE_HEADER=m;g.CONTROL_PANEL_LEARN_MORE_UPDATE_BODY=n;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_FRIENDS=o;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_COMMUNITIES=p;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_PPF=q;g.WORK_CONTROL_PANEL_CONTENT_PREFERENCE_HEADER=r;g.WORK_CONTROL_PANEL_CONTENT_PREFERENCE_BODY=s;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_HEADER=t;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_BODY=u;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_BUTTON=v;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_HEADER=w;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_BODY=x;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_LESS_BUTTON=y;g.CONTROL_PANEL_CONNECTIONS_HEADER=z;g.CONTROL_PANEL_SURVEY_MESSAGE=A;g.CONTROL_PANEL_SURVEY_RESPONDED_HEADER=B;g.CONTROL_PANEL_SURVEY_RESPONDED_BODY=C;g.CONTROL_PANEL_EDUCATIONAL_BANNER_HEADER=D;g.CONTROL_PANEL_EDUCATIONAL_BANNER_BODY=E;g.CONTROL_PANEL_TOAST_TEXT=F;g.CONTROL_PANEL_WAIST_TEXT=h}),98);
__d("CometFeedPreferencesControlPanelDialog.entrypoint",["CometFeedPreferencesControlPanelDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{dialogQueryReference:{parameters:c("CometFeedPreferencesControlPanelDialogQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometFeedPreferencesControlPanelDialog.react").__setRef("CometFeedPreferencesControlPanelDialog.entrypoint")};g["default"]=a}),98);
__d("CometFeedPreferencesDialogLoadingState.react",["fbt","CometCardedDialogLegacy.react","CometFeedPreferencesControlPanelConstants","CometGlimmer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k={anchor:{minHeight:"xvv7gvb",$$css:!0},animate:{animationDuration:"x4b6v7d",animationName:"xmqsq3q",animationTimingFunction:"x1ojsi0c",$$css:!0},bodyGlimmer:{borderTopStartRadius:"x1rcc7c0",borderTopEndRadius:"xbtbmw4",borderBottomEndRadius:"x1lie4ck",borderBottomStartRadius:"x16hxpj1",height:"x1v9usgg",marginBottom:"x1u7kmwd",$$css:!0},bodyGlimmerContainer:{paddingTop:"x1cnzs8",paddingEnd:"xc73u3c",paddingBottom:"x1gwgq1z",paddingStart:"x5ib6vp",$$css:!0},bodyGlimmerFirst:{width:"xktia5q",$$css:!0},bodyGlimmerSecond:{width:"xz84dc7",$$css:!0},root:{height:"xnmwye4",$$css:!0}};function a(a){return j.jsx("div",{className:"x4b6v7d xmqsq3q x1ojsi0c",children:j.jsx(c("CometCardedDialogLegacy.react"),babelHelpers["extends"]({anchorXStyle:k.anchor,size:"medium",title:d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_LAUNCH_GK?d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_DIALOG_TITLE:h._("__JHASH__dEuExL-OBiK__JHASH__"),withCloseButton:!0},a,{children:j.jsx("div",{className:"xnmwye4",children:j.jsxs("div",{className:"x1cnzs8 xc73u3c x1gwgq1z x5ib6vp",children:[j.jsx(c("CometGlimmer.react"),{index:1,xstyle:[k.bodyGlimmer,k.bodyGlimmerFirst]}),j.jsx(c("CometGlimmer.react"),{index:2,xstyle:[k.bodyGlimmer,k.bodyGlimmerSecond]})]})})}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedPreferencesDialogNoFavorite.entrypoint",["CometFeedPreferencesDialogNoFavoriteQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{dialogQueryReference:{parameters:b("CometFeedPreferencesDialogNoFavoriteQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometFeedPreferencesDialogNoFavorite.react").__setRef("CometFeedPreferencesDialogNoFavorite.entrypoint")};g["default"]=a}),98);
__d("useCometFeedPreferencesDialog",["CometFeedPreferencesControlPanelConstants","CometFeedPreferencesControlPanelDialog.entrypoint","CometFeedPreferencesDialogLoadingState.react","CometFeedPreferencesDialogNoFavorite.entrypoint","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useRef,l=function(a){return i.jsx(c("CometFeedPreferencesDialogLoadingState.react"),{onClose:a})},m=!1;function a(a){k(null);var b=(a=a)!=null?a:"unknown";a=d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_LAUNCH_GK?c("CometFeedPreferencesControlPanelDialog.entrypoint"):c("CometFeedPreferencesDialogNoFavorite.entrypoint");a=c("useCometEntryPointDialog")(a,{},"button",l);var e=a[0];a[1];a[2];a=a[3];var f=j(function(a){m||(e({controlPanelEntryPoint:b},function(){m=!1,a!=null&&a()}),m=!0)},[e,b]);return[f,a]}g["default"]=a}),98);
__d("useProfileSwitcherEngagementClickCallback",["react","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useMemo,k=c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef("useProfileSwitcherEngagementClickCallback");function a(a,b){var d=j(function(){return babelHelpers["extends"]({profile_event_type:"click",profile_product_bucket:"unknown",profile_surface:"unknown"},a)},[a]);(a==null?void 0:a.profile_product_bucket)==null&&c("recoverableViolation")("profile_product_bucket is a required field for profile engagement logging","profile_comet");(a==null?void 0:a.profile_surface)==null&&c("recoverableViolation")("profile_surface is a required field for profile engagement logging","profile_comet");return i(function(a){k.onReady(function(a){a=a.log;a(function(){return d})}),b&&b(a)},[b,d])}g["default"]=a}),98);
__d("useCometTypeaheadScrollableViewListStrategy",["CometScrollableArea.react","react","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea","useCometTypeaheadViewListStrategy"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useCallback;function a(a){var b=a.emptyStateContent,d=a.extraViewProps,e=a.nullstateContent,f=a.scrollableXStyle,g=a.viewItemStrategyRenderer,h=a.viewListStrategyRenderer;a=a.viewXStyle;var k=c("useCometInternalTypeaheadState")();k=k.highlightedEntry;var l=c("useCometTypeaheadKeyboardForScrollableArea")(k),m=c("useCometTypeaheadViewListStrategy")({emptyStateContent:b,extraViewProps:d,nullstateContent:e,viewItemStrategyRenderer:g,viewListStrategyRenderer:h,viewXStyle:a});return j(function(a){return i.jsx(c("CometScrollableArea.react"),{horizontal:!1,ref:l,xstyle:f,children:i.jsx(m,babelHelpers["extends"]({},a))})},[m,l,f])}g["default"]=a}),98);
__d("ArrowsCircleOutline20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -398)",children:i.jsxs("g",{fillRule:"nonzero",children:[i.jsx("path",{d:"M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z",transform:"translate(352 204.5)"}),i.jsx("path",{d:"M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z",transform:"translate(352 204.5)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("SwitcherUnifiedEntryPointFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5929");b=d("FalcoLoggerInternal").create("switcher_unified_entry_point",a);e=b;g["default"]=e}),98);
__d("XLoginControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/login/",Object.freeze({first_attempt:!1,signed_next:!1,one_time_password:!1,ig_cp_login:!1,pl_dbl:!1,dyiRequest:!1,deact_messaging:!1,user_wants_http:!1,fbconnect:!1,canvas:!1,offline_access:!1,skip_api_login:!1,no_next_msg:!1,_fb_noscript:!1,nothacked:!1,isprivate:!1,fw2x:!1,uc_qa:!1,fl:!1,show_profileshare_nativebanner:!1,crst:!1,from_contact_claiming:!1,kid_directed_site:!1,chat_plugin_upgrade:!1,re_engagement_opt_in:!1,hide_upsell:!1,hide_language_selector:!1,hide_registration:!1,shbl:!1,lara_cancel:!1,is_two_steps_login:!1,one_step_redir:!1,login_from_aymh:!1}),new Set(["first_attempt","fbconnect","canvas","offline_access","no_next_msg","_fb_noscript","uc_qa","fl","show_profileshare_nativebanner"]));b=a;g["default"]=b}),98);
__d("PagesIntegrityEventTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:PagesIntegrityEventLoggerConfig")}),null);