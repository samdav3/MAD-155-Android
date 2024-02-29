;/*FB_PKG_DELIM*/

__d("CometEntityHeaderCoverDraggable.react",["fbt","ix","ARIA_LABEL_PLACEHOLDER_FIXME","BaseFocusRing.react","BaseScrollableArea.react","CometAspectRatioContainer.react","CometIcon.react","FocusWithinHandler.react","Locale","TetraText.react","UserAgent","clamp","fbicon","react","stylex","useGlobalEventListener"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;var m=b.useCallback,n=b.useEffect,o=b.useLayoutEffect,p=b.useRef,q=b.useState,r={container:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},coverDraggable:{bottom:"x1ey2m1c",boxSizing:"x9f619",cursor:"xv5twrn",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",touchAction:"x1o5wbz4",$$css:!0},dragInstructions:{alignItems:"x6s0dn4",backgroundColor:"x18l40ae",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",display:"x78zum5",paddingBottom:"xwib8y2",paddingEnd:"xn6708d",paddingLeft:null,paddingRight:null,paddingStart:"x1ye3gou",paddingTop:"x1y1aw1k",position:"x10l6tqk",start:"xtzzx4i",left:null,right:null,top:"xwa60dl",$$css:!0},dragInstructionsIcon:{display:"x78zum5",marginEnd:"x1emribx",marginLeft:null,marginRight:null,$$css:!0},dragInstructionsLTR:{transform:"x11lhmoz",$$css:!0},dragInstructionsRTL:{transform:"x147yg2k",$$css:!0}},s={x:.5,y:.5};function a(a){var b=a.children,e=a.containerAspectRatio,f=a.contentAspectRatio,g=a.focus;g=g===void 0?s:g;var k=a.onDrag;a=a.xstyle;var u=c("UserAgent").isBrowser("Firefox < 53"),v=u?{minHeight:"100%"}:{},w=p({x:g.x,y:g.y});u=q(!0);var x=u[0],y=u[1],z=p(null),A=p(k);A.current=k;g=t(z);var B=g[0],C=g[1],D=m(function(){var a;a=(a=z.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=a.scrollHeight,d=a.scrollLeft,g=a.scrollTop;a=a.scrollWidth;var h=w.current.x,i=w.current.y;if(f<e){var j=1-f/e;i=g/b/j}else if(f>e){g=1-e/f;h=d/a/g}A.current(c("clamp")(h,0,1),c("clamp")(i,0,1))},[e,f]);o(function(){var a;a=(a=z.current)==null?void 0:a.getDOMNode();if(a==null)return;var b=(a.scrollHeight-a.offsetHeight)*w.current.y;a.scrollTop=b;C.current.top=b;b=(a.scrollWidth-a.offsetWidth)*w.current.x;a.scrollLeft=b;C.current.left=b},[C,D]);n(function(){var a,b=(a=z.current)==null?void 0:a.getDOMNode();if(b==null)return;var c=function a(){y(!1),b.removeEventListener("mousewheel",a,{passive:!0}),b.removeEventListener("touchstart",a,{passive:!0}),b.removeEventListener("mousedown",a,{passive:!0})};b.addEventListener("mousewheel",c,{passive:!0});b.addEventListener("touchstart",c,{passive:!0});b.addEventListener("mousedown",c,{passive:!0});return function(){b.removeEventListener("mousewheel",c,{passive:!0}),b.removeEventListener("touchstart",c,{passive:!0}),b.removeEventListener("mousedown",c,{passive:!0})}},[]);return l.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:e,xstyle:a,children:l.jsx(c("FocusWithinHandler.react"),{children:function(a,g){return l.jsxs("div",{className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy",onMouseDown:B,children:[l.jsx(c("BaseScrollableArea.react"),{"aria-label":c("ARIA_LABEL_PLACEHOLDER_FIXME"),hideScrollbar:!0,horizontal:!0,onScroll:D,ref:z,tabIndex:0,vertical:!0,xstyle:r.coverDraggable,children:f<e?l.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:f,style:v,children:b}):l.jsx("div",{style:{width:100*f/e+"%"},children:l.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:f,children:b})})}),x&&l.jsx(c("BaseFocusRing.react"),{children:function(b){return l.jsxs("div",{className:(j||(j=c("stylex")))(r.dragInstructions,c("Locale").isRTL()?r.dragInstructionsRTL:r.dragInstructionsLTR,a&&g&&c("BaseFocusRing.react").focusRingXStyle,b),children:[l.jsx("div",{className:"x78zum5 x1emribx",children:l.jsx(c("CometIcon.react"),{color:"white",icon:d("fbicon")._(i("697185"),20)})}),l.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized4",children:h._("__JHASH__hQ5Qmldyc2V__JHASH__")})]})}})]})}})})}a.displayName=a.name+" [from "+f.id+"]";function t(a){var b=p({x:0,y:0}),d=p({left:0,top:0}),e=q(!1),f=e[0],g=e[1];e=function(c){var e;if(c.button!==0)return;e=(e=a.current)==null?void 0:e.getDOMNode();if(e==null)return;g(!0);b.current={x:c.clientX,y:c.clientY};d.current.top=e.scrollTop;d.current.left=e.scrollLeft;c.preventDefault()};var h=m(function(c){var e;e=(e=a.current)==null?void 0:e.getDOMNode();if(e==null)return;if(!f)return;var g=c.clientX-b.current.x,h=c.clientY-b.current.y;e.scrollTop=d.current.top-h;e.scrollLeft=d.current.left-g;c.preventDefault()},[f,a]),i=m(function(a){g(!1),a.preventDefault()},[]);c("useGlobalEventListener")("mousemove",f?h:null,{capture:!0});c("useGlobalEventListener")("mouseup",f?i:null,{capture:!0});return[e,d]}g["default"]=a}),98);
__d("CometObjectFitContainerNext.react",["CometAspectRatioContainer.react","UserAgent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={absoluteCenter:{left:"x1nrll8i",start:null,end:null,position:"x10l6tqk",top:"xwa60dl",transform:"x11lhmoz",$$css:!0},hideOverflow:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0}};function a(a){var b=a.children,d=a.containerAspectRatio,e=a.containerChildrenAfter;e=e===void 0?null:e;var f=a.containerChildrenBefore;f=f===void 0?null:f;var g=a.contentAspectRatio,h=a.focus;h=h===void 0?{x:.5,y:.5}:h;var k=a.mode;k=k===void 0?"cover":k;a=a.showOverflow;a=a===void 0?!1:a;var l=c("UserAgent").isBrowser("Firefox < 53");l=l?{minHeight:"100%"}:{};if(d>g)if(k==="cover")return i.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:d,xstyle:!a&&j.hideOverflow,children:[f,i.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:g,style:babelHelpers["extends"]({},l,{left:h.x*100+"%",position:"absolute",top:h.y*100+"%",transform:"translate("+h.x*-100+"%, "+h.y*-100+"%)"}),xstyle:!a&&j.hideOverflow,children:b}),e]});else return i.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:d,xstyle:!a&&j.hideOverflow,children:[f,i.jsx("div",{className:"x1nrll8i x10l6tqk xwa60dl x11lhmoz",style:{width:100*g/d+"%"},children:i.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:g,xstyle:!a&&j.hideOverflow,children:b})}),e]});else if(k==="cover")return i.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:d,xstyle:!a&&j.hideOverflow,children:[f,i.jsx("div",{style:{left:h.x*100+"%",position:"absolute",top:h.y*100+"%",transform:"translate("+h.x*-100+"%, "+h.y*-100+"%)",width:100*g/d+"%"},children:i.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:g,xstyle:!a&&j.hideOverflow,children:b})}),e]});else return i.jsxs(c("CometAspectRatioContainer.react"),{aspectRatio:d,xstyle:!a&&j.hideOverflow,children:[f,i.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:g,xstyle:[j.absoluteCenter,!a&&j.hideOverflow],children:b}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderCoverMedia.react",["BaseImage.react","BaseRow.react","BaseRowItem.react","CometAspectRatioContainer.react","CometEntityHeaderScrollToContext","CometFeedWidthStyles","CometObjectFitContainerNext.react","CometPlaceholder.react","CometPressable.react","CometRouteRenderType","CometRow.react","CometRowItem.react","deferredLoadComponent","emptyFunction","gkx","react","requireDeferredForDisplay","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useContext,l=b.useEffect,m=b.useRef,n=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometEntityHeaderCoverDraggable.react").__setRef("CometEntityHeaderCoverMedia.react")),o={accessory:{bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",$$css:!0},backgroundCover:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},backgroundMask:{backgroundImage:"xyuz3pd",bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},backgroundMaskWash:{backgroundImage:"xm1cfgf",bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},coverActionBarContainer:{backgroundColor:"x18l40ae",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0},coverActionBarContainerPushView:{top:"x1w1tb2m",$$css:!0},coverButton:{marginBottom:"x1yztbdb",$$css:!0},coverButtonRow:{paddingEnd:"xc73u3c",paddingLeft:null,paddingRight:null,paddingStart:"x5ib6vp",position:"x1n2onr6",$$css:!0},coverButtonShade:{backgroundImage:"x11v4dcs",$$css:!0},coverButtonStacked:{marginBottom:"x1e56ztr",$$css:!0},coverButtonStackedOnly:{marginBottom:"x1dtbblo",$$css:!0},coverFooterExternal:{overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0},coverHeaderRow:{display:"x78zum5",justifyContent:"xl56j7k",paddingTop:"x1ow4hk9",position:"x1n2onr6",$$css:!0},coverMedia:{overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0},coverMediaLarge:{maxWidth:"xric181",$$css:!0},coverMediaPlaceholder:{backgroundColor:"x443n21",$$css:!0},coverMediaRoundCornersBottom:{borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c","@media (max-width: 939px)_borderBottomEndRadius":"x1nxjzwp","@media (max-width: 939px)_borderBottomStartRadius":"xd7htx2",$$css:!0},coverMediaRoundCornersTop:{borderTopEndRadius:"xgqcy7u",borderTopStartRadius:"x1lq5wgf","@media (max-width: 939px)_borderTopEndRadius":"x1m27jid","@media (max-width: 939px)_borderTopStartRadius":"xv84f0e",$$css:!0},coverPhoto:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"xl56j7k",$$css:!0},coverTopStartButtonRow:{position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0},image:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",$$css:!0},mediaOverlayContainer:{backgroundColor:"x18l40ae",bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},mediaOverlayContainerNoShade:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},navBarPushViewBackground:{backgroundColor:"x2bj2ny",height:"xng8ra",$$css:!0},pressable:{display:"x1lliihq",$$css:!0}},p=d("CometFeedWidthStyles").getEntityHeaderWidthStyles(),q=1.9,r=1.8,s=2.7,t=9.4,u=1.1;function a(a){var b=a.backgroundMask;b=b===void 0?"card":b;var e=a.backgroundMedia,f=a.coverActionBar,g=a.coverButton,i=a.coverFooter,v=a.coverHeader,w=a.coverMedia,x=a.coverMediaContainerRef,y=a.coverOverlay,z=a.coverTopStartButton,A=a.isDraggable;A=A===void 0?!1:A;var B=a.onDrag;B=B===void 0?c("emptyFunction"):B;var C=a.renderCoverFooterBelow;C=C===void 0?!1:C;var D=a.roundCorners,E=a.scrollToBottom,F=E===void 0?!1:E;E=a.showCoverButtonShade;E=E===void 0?!0:E;var G=a.showCoverOverlayShade;G=G===void 0?!0:G;var H=a.size;H=H===void 0?"normal":H;a=a.stackedCoverButton;var I=.5,J=.5,K=0,L=null,M=0,N=null;if(w!=null){var O=w.focusX,P=w.focusY,Q=w.height,R=w.mediaSource,S=w.width;w=babelHelpers.objectWithoutPropertiesLoose(w,["focusX","focusY","height","mediaSource","width"]);I=(O=O)!=null?O:I;J=(O=P)!=null?O:J;K=(P=Q)!=null?P:K;L=(O=R)!=null?O:L;M=(Q=S)!=null?Q:M;N=(P=w)!=null?P:N}R={large:q,mobile:u,normal:s,permalinkHeader:r,"short":t};O=R[H];S=d("CometRouteRenderType").useIsPushView();var T=k(c("CometEntityHeaderScrollToContext")),U=m(null);l(function(){F&&T.scrollToTop(U,316)},[T,F]);Q=c("gkx")("708253");P=((w=e==null?void 0:e.focusX)!=null?w:.5)*100+"%";R=M>0&&K>0?M/K:O;w=typeof L==="string"?j.jsx(c("BaseImage.react"),{"data-imgperflogname":"profileCoverPhoto",src:L,xstyle:o.image}):L;M=typeof L==="string"?j.jsx(c("CometObjectFitContainerNext.react"),{containerAspectRatio:O,contentAspectRatio:R,focus:{x:I,y:J},mode:"cover",children:j.jsx(c("BaseImage.react"),{"data-imgperflogname":"profileCoverPhoto",src:L,xstyle:o.image})}):j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:O,children:L});K=A?j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:O,children:j.jsx(c("CometPlaceholder.react"),{fallback:M,children:j.jsx(n,{containerAspectRatio:O,contentAspectRatio:R,focus:{x:I,y:J},onDrag:B,xstyle:o.image,children:w})})}):M;return j.jsxs(j.Fragment,{children:[f!=null&&j.jsxs(j.Fragment,{children:[j.jsx("div",{className:(h||(h=c("stylex")))(S&&o.navBarPushViewBackground)}),j.jsx("div",{className:(h||(h=c("stylex")))(o.coverActionBarContainer,S&&o.coverActionBarContainerPushView),children:f})]}),j.jsxs(c("BaseRow.react"),{align:"center",children:[Q&&e!=null&&j.jsxs("div",{className:(h||(h=c("stylex")))(o.backgroundCover,e.xstyle),children:[j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:R,style:{left:P,position:"absolute",top:0,transform:"translateX(-"+P+")"},children:j.jsx(c("BaseImage.react"),{src:e.uri,xstyle:o.image})}),j.jsx("div",{className:(h||(h=c("stylex")))(b==="card"&&o.backgroundMask,b==="wash"&&o.backgroundMaskWash)})]}),j.jsxs(c("BaseRowItem.react"),{expanding:!0,ref:(L=x)!=null?L:null,useDeprecatedStyles:!0,xstyle:[o.coverPhoto,p.coverMediaContainer],children:[j.jsxs("div",{className:(h||(h=c("stylex")))(o.coverMedia,(H==="large"||H==="permalinkHeader")&&o.coverMediaLarge,!C&&D!=="none"&&Q&&o.coverMediaRoundCornersBottom,D==="all"&&o.coverMediaRoundCornersTop,w==null&&o.coverMediaPlaceholder),ref:U,style:{borderRadius:!C&&D!=="none"?"max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px":void 0,borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:[v!=null&&j.jsx("div",{className:"x78zum5 xl56j7k x1ow4hk9 x1n2onr6",children:v}),((A=N)==null?void 0:A.linkProps)!=null||((O=N)==null?void 0:O.onPress)!=null?j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},N,{display:"inline",overlayDisabled:!0,testid:void 0,xstyle:o.pressable,children:K})):K,z!=null&&j.jsx("div",{className:"x10l6tqk x17qophe x13vifvy",children:z}),y!=null&&j.jsx("div",{className:(h||(h=c("stylex")))(G?o.mediaOverlayContainer:o.mediaOverlayContainerNoShade),children:y}),(g!=null||i!=null||a!=null)&&j.jsxs("div",{className:"x1ey2m1c xds687c x10l6tqk x17qophe",children:[(g!=null||a!=null)&&j.jsx("div",{className:(h||(h=c("stylex")))(o.coverButtonRow,E&&o.coverButtonShade),children:j.jsx(c("CometRow.react"),{align:"end",children:j.jsxs(c("CometRowItem.react"),{children:[a!==null?j.jsx("div",{className:(h||(h=c("stylex")))(g!=null&&o.coverButtonStacked,g==null&&o.coverButtonStackedOnly),children:a}):null,g!==null&&j.jsx("div",{className:"x1yztbdb",children:g})]})})}),!C&&i]})]}),C&&j.jsx("div",{className:(h||(h=c("stylex")))(o.coverFooterExternal,D!=="none"&&Q&&o.coverMediaRoundCornersBottom),children:i})]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometCoverPhotoEditReducer",[],(function(a,b,c,d,e,f){"use strict";function a(){return{canReposition:!1,coverPhoto:null,editSlideshow:!1,file:null,isUploading:!1,selectedSlideshowIndex:null,shouldShowEditMenu:!1,slideshowData:[],videoUploadState:null}}function b(a,b){switch(b.type){case"REPOSITION":return babelHelpers["extends"]({},a,{canReposition:!0,coverPhoto:b.data});case"REPOSITION_CANCEL":return babelHelpers["extends"]({},a,{canReposition:!1,coverPhoto:null});case"EDIT_SLIDESHOW":return babelHelpers["extends"]({},a,{coverPhoto:b.data,editSlideshow:!0,isUploading:!1,slideshowData:b.slideshowData});case"EDIT_SLIDESHOW_CANCEL":return babelHelpers["extends"]({},a,{editSlideshow:!1,isUploading:!1,selectedSlideshowIndex:null,slideshowData:[]});case"CHOOSE_SLIDESHOW":return babelHelpers["extends"]({},a,{selectedSlideshowIndex:b.selectedSlideshowIndex});case"EDIT_SLIDESHOW_STARTED":return babelHelpers["extends"]({},a,{isUploading:!0});case"UPLOAD_FAILED":return babelHelpers["extends"]({},a,{file:null,isUploading:!1});case"UPLOAD_STARTED":return babelHelpers["extends"]({},a,{file:b.file,isUploading:!0});case"UPLOAD_SUCCESS":return babelHelpers["extends"]({},a,{canReposition:!0,coverPhoto:b.data,file:null,isUploading:!1});case"VIDEO_UPLOAD_FAILED":return babelHelpers["extends"]({},a,{videoUploadState:"FAILED"});case"VIDEO_UPLOAD_ATTACHED":return babelHelpers["extends"]({},a,{videoUploadState:"ATTACHED"});case"VIDEO_UPLOAD_STARTED":return babelHelpers["extends"]({},a,{videoUploadState:"UPLOADING"});case"VIDEO_UPLOAD_POSTPROCESSING":return babelHelpers["extends"]({},a,{videoUploadState:"POSTPROCESSING"});case"VIDEO_UPLOAD_SUCCESS":return babelHelpers["extends"]({},a,{videoUploadState:null});case"UPLOAD_SLIDESHOW_SUCCESS":return babelHelpers["extends"]({},a,{canReposition:!1,editSlideshow:!0,file:null,isUploading:!1,slideshowData:b.slideshowData});case"SHOW_EDIT_MENU":return babelHelpers["extends"]({},a,{shouldShowEditMenu:!0});case"DID_SHOW_EDIT_MENU":return babelHelpers["extends"]({},a,{shouldShowEditMenu:!1});default:return a}}f.getInitialState=a;f.reducer=b}),66);
__d("ProfileCometCoverPhotoEditContext",["CometCoverPhotoEditReducer","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({dispatch:c("emptyFunction"),state:d("CometCoverPhotoEditReducer").getInitialState()});g["default"]=b}),98);