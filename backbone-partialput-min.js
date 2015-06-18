(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","backbone","exports"],function(i,s,r){t.Backbone=e(t,r,i,s)})}else if(typeof exports!=="undefined"){var i=require("underscore"),s=require("backbone");e(t,exports,i,s)}else{t.Backbone=e(t,{},t._,t.Backbone)}})(this,function(t,e,i,s){var r=i.extend({},s);var n=function(t,e){var s={};for(var r in e){if(!i.isEqual(t[r],e[r])){s[r]=e[r]}}return s};r.Model=s.Model.extend({partialAttributesCore:["id"],unsavedAttributes:function(t){t=t||this.attributes;if(!this._syncedAttributes)return t;return n(this._syncedAttributes,t)},hasUnsavedChanges:function(){return!i.isEmpty(this.unsavedAttributes())},discardUnsavedChanges:function(){this.set(this._syncedAttributes,{silent:true});i.each(this.attributes,function(t,e){if(this._syncedAttributes[e]){return}this.unset(e,{silent:true})},this);this.trigger("change")},save:function(t,e,r){var n=this;var a;if(i.isUndefined(t)||i.isNull(t)||typeof t==="object"){a=t;r=e}else{(a={})[t]=e}r||(r={});if(!this.isNew()&&!this.hasUnsavedChanges(r)){if(r.success)r.success({});return}if(r.partial===void 0)r.partial=true;if(r.partial)r.partialBaseline=i.clone(this.attributes);var u=r.success;r.success=function(t){n._resetSyncedAttributes();if(u){u(t)}};var o=r.error;r.error=function(t){if(i.isEqual(n._syncedAttributes,r.partialBaseline)){n._syncedAttributes=d}if(o){o(t)}};var c=s.Model.prototype.save.call(this,a,r);var d=this._syncedAttributes;this._resetSyncedAttributes();return c},fetch:function(t){var e=this;t||(t={});var i=t.success;t.success=function(t){e._resetSyncedAttributes();if(i){i(t)}};return s.Model.prototype.fetch.call(this,t)},parse:function(t,e){var i=s.Model.prototype.parse.apply(this,arguments);e||(e={});if(e.partial&&e.partialBaseline){i=n(e.partialBaseline,i);delete e.partialBaseline}return i},toJSON:function(t){var e,r,n;t||(t={});if(t.partial){n=this.get(this.idAttribute||"id");e=this.attributes;this.attributes=i.extend(this.unsavedAttributes(),i.pick(e,this.partialAttributesCore));this.attributes[this.idAttribute||"id"]=n;r=s.Model.prototype.toJSON.apply(this,arguments);this.attributes=e}else{r=s.Model.prototype.toJSON.apply(this,arguments)}return r},set:function(t,e,r){var n,a;if(t===null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(r.protectUnsaved){a=i.keys(this.unsavedAttributes());n=i.omit(n,a)}return s.Model.prototype.set.apply(this,[n,r])},_resetSyncedAttributes:function(){this._syncedAttributes=i.clone(this.attributes)}});i.extend(e,r);return r});
//# sourceMappingURL=backbone-partialput-min.js.map