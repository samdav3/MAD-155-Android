;/*FB_PKG_DELIM*/

__d("CometPrivacySelectorForScope_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"renderLocation",variableName:"renderLocation"}];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorForScope_scope",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"cOoG"}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorEditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeEditableRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorForScope_scope",fragmentName:"CometPrivacySelectorUneditable_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorEntryPointTestID_renderer"}],storageKey:'privacy_scope_renderer(supported:"cOoG")'}],type:"PrivacyScope",abstractKey:null}}();e.exports=a}),null);
__d("useCometPrivacySelectorEntryPointTestID_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorEntryPointTestID_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"};e.exports=a}),null);
__d("BaseList.react",["CometCompositeStructureContext","CometFocusGroup.react","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo;function a(a,b){var e=a.children,f=a.keyNavOrientation,g=a.label,i=a.role,l=a.xstyle,m=(a=i)!=null?a:"list";a=k(function(){return{role:m}},[m]);return f!=null?j.jsx(c("CometFocusGroup.react"),{orientation:f,role:i,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,children:function(a){return j.jsx("div",{className:(h||(h=c("stylex")))([a,l]),ref:b,role:(a=i)!=null?a:void 0,children:e})}}):j.jsx("div",{"aria-label":(f=g)!=null?f:void 0,className:(h||(h=c("stylex")))(l),ref:b,role:m,children:j.jsx(c("CometCompositeStructureContext").Provider,{value:a,children:e})})}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("CometList.react",["BaseList.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={margins:{marginBottom:"x1oo3vh0",marginTop:"x1rdy4ex",$$css:!0}};function a(a,b){var d=a.children,e=a.items,f=a.withNegativeMargins;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","items","withNegativeMargins"]);e=typeof d==="function"?((e=e)!=null?e:[]).map(function(a,b){return d({item:a,props:{key:(a=a.key)!=null?a:b}})}):d;return i.jsx(c("BaseList.react"),babelHelpers["extends"]({},a,{ref:b,xstyle:f&&j.margins,children:e}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("TetraList.react",["CometList.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("CometList.react"),babelHelpers["extends"]({withNegativeMargins:!0},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorContextInitialState",[],(function(a,b,c,d,e,f){"use strict";a={localPrivacyRow:null};f["default"]=a}),66);
__d("CometPrivacySelectorContext",["CometPrivacySelectorContextInitialState","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=function(){};e=a.createContext([c("CometPrivacySelectorContextInitialState"),b]);g["default"]=e}),98);
__d("CometPrivacySelectorContextWrapper",["CometPrivacySelectorContext","CometPrivacySelectorContextInitialState","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useMemo,k=b.useReducer;function l(a,b){var c=b.type;switch(c){case"setLocalPrivacyRow":return{localPrivacyRow:b.localPrivacyRow};default:return a}}function a(a){var b=a.children,d=a.dispatch,e=a.initialState,f=a.state;e=k(l,(a=e)!=null?a:c("CometPrivacySelectorContextInitialState"));var g=e[0],h=e[1];a=j(function(){var a;return[(a=f)!=null?a:g,(a=d)!=null?a:h]},[d,f,g]);return i.jsx(c("CometPrivacySelectorContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometPrivacySelectorEntryPointTestID",["CometRelay","react","useCometPrivacySelectorEntryPointTestID_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useMemo;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorEntryPointTestID_renderer.graphql"),a);var c=a.id;return j(function(){if(c==null)return void 0;try{var a;a=(a=JSON.parse((a=atob(c))==null?void 0:a.substring(23)))==null?void 0:a.id;return a==null?void 0:"privacy_selector_"+a}catch(a){return void 0}},[c])}g["default"]=a}),98);
__d("CometPrivacySelectorForScope.react",["CometPrivacySelectorContextWrapper","CometPrivacySelectorForScope_scope.graphql","CometRelay","react","stylex","unrecoverableViolation","useCometPrivacySelectorEntryPointTestID"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react")),l=j.useMemo,m={root:{alignItems:"x6s0dn4",display:"x3nfvp2",justifyContent:"xl56j7k",$$css:!0},rootFullWidth:{display:"x78zum5",$$css:!0}};function a(a){var e=a.isFullWidth;e=e===void 0?!1:e;var f=a.localPrivacyRow,g=a.plugins,j=a.scope;a=babelHelpers.objectWithoutPropertiesLoose(a,["isFullWidth","localPrivacyRow","plugins","scope"]);j=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorForScope_scope.graphql"),j);if(j==null)throw c("unrecoverableViolation")("CometPrivacySelectorForScope did not receive a PrivacyScope","comet_privacy_selector");var n=j.privacy_scope_renderer;if(n==null)throw c("unrecoverableViolation")("CometPrivacySelectorForScope did not receive a PrivacyScopeRenderer","comet_privacy_selector");n=c("useCometPrivacySelectorEntryPointTestID")(n);n=l(function(){return{localPrivacyRow:f}},[f]);return k.jsx("div",{className:(i||(i=c("stylex")))(m.root,e&&m.rootFullWidth),"data-testid":void 0,suppressHydrationWarning:!0,children:k.jsxs(c("CometPrivacySelectorContextWrapper"),{initialState:n,children:[k.jsx(d("CometRelay").MatchContainer,{match:j.privacy_scope_renderer,props:babelHelpers["extends"]({},a,{renderer:j.privacy_scope_renderer})}),g]})})}a.displayName=a.name+" [from "+f.id+"]";e=k.memo(a);g["default"]=e}),98);