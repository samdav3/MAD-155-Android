;/*FB_PKG_DELIM*/

__d("FriendingCometFriendRequestsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4851458921570237"}),null);
__d("FriendingCometFriendRequestsRootQuery$Parameters",["FriendingCometFriendRequestsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometFriendRequestsRootQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendRequestsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometFriendRequestsRoot.entrypoint",["FriendingCometFriendRequestsRootQuery$Parameters","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","ProfileCometTimelineListViewRouteRoot.entrypoint","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e={scale:d("WebPixelRatio").get()},f=a.routeProps,g=f.profileID;f=f.viewerID;g=g!=null&&f!=null?d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:c("ProfileCometTimelineListViewRouteRoot.entrypoint"),entryPointParams:{routeProps:{userID:a.routeProps.profileID,viewerID:a.routeProps.viewerID}}}):void 0;return{entryPoints:{profileEntryPoint:g},queries:{friendingCometFriendRequestsRootQueryReference:{parameters:b("FriendingCometFriendRequestsRootQuery$Parameters"),variables:e}}}},root:c("JSResourceForInteraction")("FriendingCometFriendRequestsRoot.react").__setRef("FriendingCometFriendRequestsRoot.entrypoint")};g["default"]=a}),98);