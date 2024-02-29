;/*FB_PKG_DELIM*/

__d("WAPromiseTimeout",["Promise","WACustomError"],(function(a,b,c,d,e,f,g){var h;a=function(a,c,e){var f=null,g=new(h||(h=b("Promise")))(function(a,b){f=setTimeout(function(){b(new(d("WACustomError").TimeoutError)(e)),clearTimeout(f)},c)});return h.race([a,g])["finally"](function(){clearTimeout(f)})};g.promiseTimeout=a}),98);
__d("WAResultOrError",["Promise","regeneratorRuntime"],(function(a,b,c,d,e,f){var g;function h(a,b){if(b!=null)return{success:!1,error:a,payload:b};else return{success:!1,error:a}}function i(a){return{success:!0,value:a}}function a(a,b){return!a.success?a:i(b(a.value))}function c(a,c){var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:e.next=2;return b("regeneratorRuntime").awrap(a);case 2:d=e.sent;if(d.success){e.next=5;break}return e.abrupt("return",d);case 5:return e.abrupt("return",i(c(d.value)));case 6:case"end":return e.stop()}},null,this)}function j(a,c){var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:if(a.success){e.next=2;break}return e.abrupt("return",a);case 2:e.next=4;return b("regeneratorRuntime").awrap(c(a.value));case 4:d=e.sent;return e.abrupt("return",i(d));case 6:case"end":return e.stop()}},null,this)}function d(a,b){return a.success?i(a.value):h(b(a.error),a.payload)}function k(a,c){var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:if(!a.success){e.next=2;break}return e.abrupt("return",i(a.value));case 2:e.next=4;return b("regeneratorRuntime").awrap(c(a.error));case 4:d=e.sent;return e.abrupt("return",h(d,a.payload));case 6:case"end":return e.stop()}},null,this)}function e(a,b){return a.success?b(a.value):a}function l(a,c){return a.success?c(a.value):(g||(g=b("Promise"))).resolve(a)}function m(a){return function(b){return j(b,a)}}function n(a){return function(c){return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:d.next=2;return b("regeneratorRuntime").awrap(k(c,a));case 2:case"end":return d.stop()}},null,this)}}f.makeError=h;f.makeResult=i;f.mapResult=a;f.mapAsyncResult=c;f.asyncMapResult=j;f.mapError=d;f.asyncMapError=k;f.chain=e;f.asyncChain=l;f.onResult=m;f.catchError=n}),66);
__d("ReStoreIndex",["ReQLBounds","ReStoreTransactionLock","ReStoreUtils","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(a,b,c,e,f){var g=this;this.entries=function(a,b,c){b===void 0&&(b="asc");return d("ReStoreTransactionLock").lockIterator(d("ReStoreUtils").entries(g.$5,a,g.$1,g.$3,b,c,g.$2),g.$4)};this.get=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return g.$4.chainPromiseOrValue(function(a){return d("ReStoreUtils").getLocked(g.$5,new WeakMap(),g.$1.name,g.$3,b,a,g.$2)})};this.getKey=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return g.$4.chainPromiseOrValue(function(a){return g.$6(g.$5,new WeakMap(),b,a)})};this.keys=function(a,b,c){b===void 0&&(b="asc");return d("ReStoreTransactionLock").lockIterator(d("ReStoreUtils").keys(g.$5,a,g.$1,g.$3,b,c),g.$4)};this.$3=a;this.keyFields=b.indexes[a];this.$1=b;this.$2=c;this.$4=e;this.$5=f}var c=a.prototype;c.$6=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,c,e){a=(yield d("ReStoreUtils").getLocked(a,b,this.$1.name,this.$3,c,e,this.$2));return a===void 0?void 0:d("ReStoreUtils").searchKey(this.$1,a)});function c(b,c,d,e){return a.apply(this,arguments)}return c}();return a}();c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,e,f,g,i){var j;j=a.call(this,b,c,e,f,g)||this;j.subscribe=function(a,b,c){return j.$ReStoreIndex$p_3.subscribeIndex(j.$ReStoreIndex$p_1.name,j.$ReStoreIndex$p_2,a,(h||(h=d("ReQLBounds"))).extendBounds(b,j.$ReStoreIndex$p_1.indexes[j.$ReStoreIndex$p_2].length),c)};j.$ReStoreIndex$p_2=b;j.$ReStoreIndex$p_1=c;j.$ReStoreIndex$p_3=i;return j}return b}(a);g.ReStoreTransactionIndex=c;g.ReStoreIndex=e}),98);
__d("ReStoreTable",["I64","LSTransactionLogger","Promise","PromiseOrValue","ReQLBounds","ReStoreIndex","ReStoreTransactionLock","ReStoreUtils","asyncToGeneratorRuntime","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k;function l(a){a=(k||(k=d("I64"))).cast(a);if(a===void 0)throw c("unrecoverableViolation")("Expected int64","messenger_web_product");return k.to_float(a)}function m(a,b,c,d,e){b=JSON.stringify([b,c]);c=a.get(b);a.set(b,[c==null?d:c[0],e])}a=function(a,e,f,g){var i=this;this.$1=new Map();this.entries=function(a,b,c){b===void 0&&(b="asc");return d("ReStoreTransactionLock").lockIterator(d("ReStoreUtils").entries(i.$5,a,i.$2,void 0,b,c,i.$3),i.$4)};this.get=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return i.$4.chainPromiseOrValue(function(a){return d("ReStoreUtils").getLocked(i.$5,new WeakMap(),i.$2.name,void 0,b,a,i.$3)})};this.keys=function(a,b,c){b===void 0&&(b="asc");return d("ReStoreTransactionLock").lockIterator(d("ReStoreUtils").keys(i.$5,a,i.$2,void 0,b,c),i.$4)};this.peekNextAutoIncrementId=function(){return(h||(h=b("Promise"))).resolve(i.$4.chainPromiseOrValue(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){a=i.$2.autoIncrement;if(!a)throw c("unrecoverableViolation")("only supported for auto-incrementing tables","messenger_web_product");a=(yield d("ReStoreUtils").gen(i.$5.table(i.$2.name).readSeed(new WeakMap())));if(a===void 0)throw c("unrecoverableViolation")("unexpected undefined autoIncrementSeed","messenger_web_product");return(k||(k=d("I64"))).of_float(a)});return function(b){return a.apply(this,arguments)}}()))};this.keyFields=a.primaryKeyIds;this.$2=a;this.$3=e;this.$4=f;this.$5=g};e=function(a){babelHelpers.inheritsLoose(e,a);function e(e,f,g,j,k,l,m,n,o){var p;e=f.tableNames[e];p=a.call(this,e,g,j,k)||this;p.$ReStoreTransactionTable$p_1=new Map();p.$ReStoreTransactionTable$p_10=new Map();p.add=function(a){return(h||(h=b("Promise"))).resolve((i||(i=d("PromiseOrValue"))).map(p.$ReStoreTransactionTable$p_4.beforeAdd({tableName:p.$ReStoreTransactionTable$p_3.name,transaction:p.$ReStoreTransactionTable$p_8,value:a}),function(a){return p.$ReStoreTransactionTable$p_11(function(b,e){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(p.$ReStoreTransactionTable$p_9);return d("ReStoreUtils").gen(p.$ReStoreTransactionTable$p_13(p.$ReStoreTransactionTable$p_10,e,new WeakMap(),p.$ReStoreTransactionTable$p_3.name,a,b))})}))};p["delete"]=function(){for(var a=arguments.length,e=new Array(a),f=0;f<a;f++)e[f]=arguments[f];return(h||(h=b("Promise"))).resolve(p.$ReStoreTransactionTable$p_11(function(a,b){var f=babelHelpers.assertThisInitialized(p);return d("ReStoreUtils").gen(function*(){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(f.$ReStoreTransactionTable$p_9),yield* d("ReStoreUtils").deleteItemLocked(f.$ReStoreTransactionTable$p_2,f.$ReStoreTransactionTable$p_10,b,new WeakMap(),f.$ReStoreTransactionTable$p_3.name,e,a),yield* d("ReStoreUtils").cascadeKeyUpdatesLocked(f.$ReStoreTransactionTable$p_2,f.$ReStoreTransactionTable$p_10,b,new WeakMap(),f.$ReStoreTransactionTable$p_3.name,e,void 0,f.$ReStoreTransactionTable$p_4,a)}())}))};p.deleteThenInsert=function(a){return(h||(h=b("Promise"))).resolve((i||(i=d("PromiseOrValue"))).map(p.$ReStoreTransactionTable$p_4.beforeDeleteThenInsert({tableName:p.$ReStoreTransactionTable$p_3.name,transaction:p.$ReStoreTransactionTable$p_8,value:d("ReStoreUtils").appendDefaultValues(a,p.$ReStoreTransactionTable$p_3.name)}),function(a){return p.$ReStoreTransactionTable$p_11(function(b,e){var f=babelHelpers.assertThisInitialized(p);return d("ReStoreUtils").gen(function*(){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(f.$ReStoreTransactionTable$p_9),yield* d("ReStoreUtils").putLocked(f.$ReStoreTransactionTable$p_2,f.$ReStoreTransactionTable$p_10,e,new WeakMap(),f.$ReStoreTransactionTable$p_3.name,a,f.$ReStoreTransactionTable$p_4,b),yield* d("ReStoreUtils").cascadeKeyUpdatesLocked(f.$ReStoreTransactionTable$p_2,f.$ReStoreTransactionTable$p_10,e,new WeakMap(),f.$ReStoreTransactionTable$p_3.name,d("ReStoreUtils").searchKey(f.$ReStoreTransactionTable$p_3,a),void 0,f.$ReStoreTransactionTable$p_4,b)}())})}))};p.put=function(a){return(h||(h=b("Promise"))).resolve((i||(i=d("PromiseOrValue"))).map(p.$ReStoreTransactionTable$p_4.beforePut({tableName:p.$ReStoreTransactionTable$p_3.name,transaction:p.$ReStoreTransactionTable$p_8,value:a}),function(a){return p.$ReStoreTransactionTable$p_11(function(b,e){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(p.$ReStoreTransactionTable$p_9);return d("ReStoreUtils").gen(d("ReStoreUtils").putLocked(p.$ReStoreTransactionTable$p_2,p.$ReStoreTransactionTable$p_10,e,new WeakMap(),p.$ReStoreTransactionTable$p_3.name,a,p.$ReStoreTransactionTable$p_4,b))})}))};p.upsert=function(a,e){return(h||(h=b("Promise"))).resolve((i||(i=d("PromiseOrValue"))).map(p.$ReStoreTransactionTable$p_4.beforeUpsert({tableName:p.$ReStoreTransactionTable$p_3.name,transaction:p.$ReStoreTransactionTable$p_8,value:e}),function(b){return p.$ReStoreTransactionTable$p_11(function(f,g){var h=babelHelpers.assertThisInitialized(p);return d("ReStoreUtils").gen(function*(){c("LSTransactionLogger")==null?void 0:c("LSTransactionLogger").recordLogicalWrite(h.$ReStoreTransactionTable$p_9),yield* d("ReStoreUtils").upsertLocked(h.$ReStoreTransactionTable$p_2,h.$ReStoreTransactionTable$p_10,g,new WeakMap(),h.$ReStoreTransactionTable$p_3.name,a,b,h.$ReStoreTransactionTable$p_4,f),yield* d("ReStoreUtils").cascadeKeyUpdatesLocked(h.$ReStoreTransactionTable$p_2,h.$ReStoreTransactionTable$p_10,g,new WeakMap(),h.$ReStoreTransactionTable$p_3.name,a,d("ReStoreUtils").searchKey(h.$ReStoreTransactionTable$p_3,e),h.$ReStoreTransactionTable$p_4,f)}())})}))};p.index=function(a){return d("ReStoreUtils").getOrCreate(p.$ReStoreTransactionTable$p_1,a,function(){return new(d("ReStoreIndex").ReStoreTransactionIndex)(a,p.$ReStoreTransactionTable$p_3,p.$ReStoreTransactionTable$p_4,p.$ReStoreTransactionTable$p_5,p.$ReStoreTransactionTable$p_6)})};p.$ReStoreTransactionTable$p_3=e;p.$ReStoreTransactionTable$p_2=f;p.$ReStoreTransactionTable$p_4=g;p.$ReStoreTransactionTable$p_5=j;p.$ReStoreTransactionTable$p_6=k;p.$ReStoreTransactionTable$p_7=l;p.$ReStoreTransactionTable$p_8=m;p.$ReStoreTransactionTable$p_9=n;p.$ReStoreTransactionTable$p_10=o;return p}var f=e.prototype;f.$ReStoreTransactionTable$p_11=function(a){var b=this;return this.$ReStoreTransactionTable$p_5.chainPromiseOrValue(function(c){var e=b.$ReStoreTransactionTable$p_6.createNested(b.$ReStoreTransactionTable$p_9);return(i||(i=d("PromiseOrValue"))).map(a(c,e),function(a){e.flush();return a})})};f.$ReStoreTransactionTable$p_12=function(a,b,c,d,e){b=JSON.stringify([b,c]);c=a.get(b);a.set(b,[c==null?d:c[0],e])};f.getLocked=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,c,e,f,g){g=a.table(c);a=(yield d("ReStoreUtils").gen(g.readId(b,e,f)));if(a===void 0)return void 0;e=(yield d("ReStoreUtils").gen(g.readDataExn(b,a)));return this.$ReStoreTransactionTable$p_4.afterGet({tableName:c,value:e})});function c(b,c,d,e,f,g){return a.apply(this,arguments)}return c}();f.$ReStoreTransactionTable$p_13=function*(a,b,c,e,f,g){var h=b.table(e),i=this.$ReStoreTransactionTable$p_2.tableNames[e];if(i.autoIncrement){var j=f[i.primaryKeyIds[0]];j=(k||(k=d("I64"))).of_float(yield* h.incrementSeed(c,j===void 0?j:l(j)));f[i.primaryKeyIds[0]]=j}j=d("ReStoreUtils").appendDefaultValues(f,i.name);f=d("ReStoreUtils").searchKey(i,j);if(f==null)throw new Error("Evaluating the object store's key path did not yield a value");if((yield* h.readId(c,void 0,f))==null){i=d("ReStoreUtils").indicesWithKeyForValue(this.$ReStoreTransactionTable$p_3,Object.keys(i.indexes),j);yield* d("ReStoreUtils").deconflictIndicesLocked(this.$ReStoreTransactionTable$p_2,a,b,c,e,i,this.$ReStoreTransactionTable$p_4,g);g=(yield* h.writeNewData(c,j));yield* h.writeId(c,void 0,f,g);yield* d("ReStoreUtils").addIdToIndices(b,c,e,g,i);m(a,e,f,void 0,j)}};return e}(a);f=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,e,f,g){var h;h=a.call(this,b,c,e,f)||this;h.$ReStoreTable$p_1=new Map();h.index=function(a){return d("ReStoreUtils").getOrCreate(h.$ReStoreTable$p_1,a,function(){return new(d("ReStoreIndex").ReStoreIndex)(a,h.$ReStoreTable$p_2,h.$ReStoreTable$p_3,h.$ReStoreTable$p_4,h.$ReStoreTable$p_5,h.$ReStoreTable$p_6)})};h.subscribe=function(a,b,c){return h.$ReStoreTable$p_6.subscribeTable(h.$ReStoreTable$p_2.name,a,(j||(j=d("ReQLBounds"))).extendBounds(b,h.$ReStoreTable$p_2.primaryKeyIds.length),c)};h.$ReStoreTable$p_2=b;h.$ReStoreTable$p_3=c;h.$ReStoreTable$p_4=e;h.$ReStoreTable$p_5=f;h.$ReStoreTable$p_6=g;return h}return b}(a);g.ReStoreTransactionTable=e;g.ReStoreTable=f}),98);