;/*FB_PKG_DELIM*/

__d("LSClearThreadLimits",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(287).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSDeleteThenInsertMessagingPrivacySettings",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(288).put({userId:a[0],readReceiptsDisabled:a[1],e2eeXmaPreviewsDisabled:a[3]})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSEncryptedBackupsStatusTriggerUpsert",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.sequence([function(a){return b.forEach(b.filter(b.db.table(195).fetch(),function(a){return!0}),function(a){return a["delete"]()})},function(a){return b.db.table(195).add({pk:void 0})}])},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSEpdCookieSettingsUpsert",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(a){return c.storedProcedure(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.db.table(163).put({fbTrackersOnOtherCompanies:a[0],otherCompanyTrackersOnFoa:a[1]})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSTruncatePakeMessagesDatabase",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return a[0]?b.forEach(b.db.table(258).fetch(),function(a){return a["delete"]()}):b.forEach(b.db.table(258).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);