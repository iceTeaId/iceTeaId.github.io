/*! jQuery UI - v1.12.1 - 2016-09-=14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.j=
s, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.j=
s, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.j=
s, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff=
.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-sha=
ke.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-tran=
sfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labe=
ls.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, w=
idgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widget=
s/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/dragga=
ble.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/pr=
ogressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectme=
nu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/=
tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"=3D=3Dtypeof define&amp;&amp;define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=3Dt.css("visibility");"inherit"=3D=3D=3De;)t=3Dt.parent(),e=3Dt.css("visibility");return"hidden"!=3D=3De}function i(t){for(var e,i;t.length&amp;&amp;t[0]!=3D=3Ddocument;){if(e=3Dt.css("position"),("absolute"=3D=3D=3De||"relative"=3D=3D=3De||"fixed"=3D=3D=3De)&amp;&amp;(i=3DparseInt(t.css("zIndex"),10),!isNaN(i)&amp;&amp;0!=3D=3Di))return i;t=3Dt.parent()}return 0}function s(){this._curInst=3Dnull,this._keyEvent=3D!1,this._disabledInputs=3D[],this._datepickerShowing=3D!1,this._inDialog=3D!1,this._mainDivId=3D"ui-datepicker-div",this._inlineClass=3D"ui-datepicker-inline",this._appendClass=3D"ui-datepicker-append",this._triggerClass=3D"ui-datepicker-trigger",this._dialogClass=3D"ui-datepicker-dialog",this._disableClass=3D"ui-datepicker-disabled",this._unselect-current-day",this._dayOverClass=3D"ui-datepicker-days-cell-over",this.regional=3D[],this.regional[""]=3D{closeText:"Done",prevText:"Prev",nextText:"=
Next",currentText:"Today",monthNames:["January","February","March","April",=
"May","June","July","August","September","October","November","December"],m=
onthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"=
,"Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday",=
"Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sa=
t"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFo=
rmat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},th=
is._defaults=3D{showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate=
:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hide=
IfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,cha=
ngeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,sh=
owWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null=
,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:n=
ull,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0=
,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,s=
howButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.reg=
ional[""]),this.regional.en=3Dt.extend(!0,{},this.regional[""]),this.region=
al["en-US"]=3Dt.extend(!0,{},this.regional.en),this.dpDiv=3Dn(t("&lt;div id=
=3D'"+this._mainDivId+"' class=3D'ui-datepicker ui-widget ui-widget-content=
 ui-helper-clearfix ui-corner-all'&gt;&lt;/div&gt;"))}function n(e){var i=
=3D"button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calend=
ar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-=
hover"),-1!=3D=3Dthis.className.indexOf("ui-datepicker-prev")&amp;&amp;t(th=
is).removeClass("ui-datepicker-prev-hover"),-1!=3D=3Dthis.className.indexOf=
("ui-datepicker-next")&amp;&amp;t(this).removeClass("ui-datepicker-next-hov=
er")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(=
m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-=
calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-sta=
te-hover"),-1!=3D=3Dthis.className.indexOf("ui-datepicker-prev")&amp;&amp;t=
(this).addClass("ui-datepicker-prev-hover"),-1!=3D=3Dthis.className.indexOf=
("ui-datepicker-next")&amp;&amp;t(this).addClass("ui-datepicker-next-hover"=
))}function a(e,i){t.extend(e,i);for(var s in i)null=3D=3Di[s]&amp;&amp;(e[=
s]=3Di[s]);return e}function r(t){return function(){var e=3Dthis.element.va=
l();t.apply(this,arguments),this._refresh(),e!=3D=3Dthis.element.val()&amp;=
&amp;this._trigger("change")}}t.ui=3Dt.ui||{},t.ui.version=3D"1.12.1";var h=
=3D0,l=3DArray.prototype.slice;t.cleanData=3Dfunction(e){return function(i)=
{var s,n,o;for(o=3D0;null!=3D(n=3Di[o]);o++)try{s=3Dt._data(n,"events"),s&a=
mp;&amp;s.remove&amp;&amp;t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.=
cleanData),t.widget=3Dfunction(e,i,s){var n,o,a,r=3D{},h=3De.split(".")[0];=
e=3De.split(".")[1];var l=3Dh+"-"+e;return s||(s=3Di,i=3Dt.Widget),t.isArra=
y(s)&amp;&amp;(s=3Dt.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLow=
erCase()]=3Dfunction(e){return!!t.data(e,l)},t[h]=3Dt[h]||{},n=3Dt[h][e],o=
=3Dt[h][e]=3Dfunction(t,e){return this._createWidget?(arguments.length&amp;=
&amp;this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.ve=
rsion,_proto:t.extend({},s),_childConstructors:[]}),a=3Dnew i,a.options=3Dt=
.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?=
(r[e]=3Dfunction(){function t(){return i.prototype[e].apply(this,arguments)=
}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,=
i=3Dthis._super,o=3Dthis._superApply;return this._super=3Dt,this._superAppl=
y=3Dn,e=3Ds.apply(this,arguments),this._super=3Di,this._superApply=3Do,e}}(=
),void 0):(r[e]=3Ds,void 0)}),o.prototype=3Dt.widget.extend(a,{widgetEventP=
refix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e=
,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=3Di.=
prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._chi=
ldConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widg=
et.extend=3Dfunction(e){for(var i,s,n=3Dl.call(arguments,1),o=3D0,a=3Dn.len=
gth;a&gt;o;o++)for(i in n[o])s=3Dn[o][i],n[o].hasOwnProperty(i)&amp;&amp;vo=
id 0!=3D=3Ds&amp;&amp;(e[i]=3Dt.isPlainObject(s)?t.isPlainObject(e[i])?t.wi=
dget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=
=3Dfunction(e,i){var s=3Di.prototype.widgetFullName||e;t.fn[e]=3Dfunction(n=
){var o=3D"string"=3D=3Dtypeof n,a=3Dl.call(arguments,1),r=3Dthis;return o?=
this.length||"instance"!=3D=3Dn?this.each(function(){var i,o=3Dt.data(this,=
s);return"instance"=3D=3D=3Dn?(r=3Do,!1):o?t.isFunction(o[n])&amp;&amp;"_"!=
=3D=3Dn.charAt(0)?(i=3Do[n].apply(o,a),i!=3D=3Do&amp;&amp;void 0!=3D=3Di?(r=
=3Di&amp;&amp;i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such =
method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on =
"+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=3D=
void 0:(a.length&amp;&amp;(n=3Dt.widget.extend.apply(null,[n].concat(a))),t=
his.each(function(){var e=3Dt.data(this,s);e?(e.option(n||{}),e._init&amp;&=
amp;e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=3Dfunction(){},=
t.Widget._childConstructors=3D[],t.Widget.prototype=3D{widgetName:"widget",=
widgetEventPrefix:"",defaultElement:"&lt;div&gt;",options:{classes:{},disab=
led:!1,create:null},_createWidget:function(e,i){i=3Dt(i||this.defaultElemen=
t||this)[0],this.element=3Dt(i),this.uuid=3Dh++,this.eventNamespace=3D"."+t=
his.widgetName+this.uuid,this.bindings=3Dt(),this.hoverable=3Dt(),this.focu=
sable=3Dt(),this.classesElementLookup=3D{},i!=3D=3Dthis&amp;&amp;(t.data(i,=
this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.ta=
rget=3D=3D=3Di&amp;&amp;this.destroy()}}),this.document=3Dt(i.style?i.owner=
Document:i.document||i),this.window=3Dt(this.document[0].defaultView||this.=
document[0].parentWindow)),this.options=3Dt.widget.extend({},this.options,t=
his._getCreateOptions(),e),this._create(),this.options.disabled&amp;&amp;th=
is._setOptionDisabled(this.options.disabled),this._trigger("create",null,th=
is._getCreateEventData()),this._init()},_getCreateOptions:function(){return=
{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function=
(){var e=3Dthis;this._destroy(),t.each(this.classesElementLookup,function(t=
,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(=
this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("ari=
a-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget=
:function(){return this.element},option:function(e,i){var s,n,o,a=3De;if(0=
=3D=3D=3Darguments.length)return t.widget.extend({},this.options);if("strin=
g"=3D=3Dtypeof e)if(a=3D{},s=3De.split("."),e=3Ds.shift(),s.length){for(n=
=3Da[e]=3Dt.widget.extend({},this.options[e]),o=3D0;s.length-1&gt;o;o++)n[s=
[o]]=3Dn[s[o]]||{},n=3Dn[s[o]];if(e=3Ds.pop(),1=3D=3D=3Darguments.length)re=
turn void 0=3D=3D=3Dn[e]?null:n[e];n[e]=3Di}else{if(1=3D=3D=3Darguments.len=
gth)return void 0=3D=3D=3Dthis.options[e]?null:this.options[e];a[e]=3Di}ret=
urn this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this=
._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"=
=3D=3D=3Dt&amp;&amp;this._setOptionClasses(e),this.options[t]=3De,"disabled=
"=3D=3D=3Dt&amp;&amp;this._setOptionDisabled(e),this},_setOptionClasses:fun=
ction(e){var i,s,n;for(i in e)n=3Dthis.classesElementLookup[i],e[i]!=3D=3Dt=
his.options.classes[i]&amp;&amp;n&amp;&amp;n.length&amp;&amp;(s=3Dt(n.get()=
),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes=
:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget=
(),this.widgetFullName+"-disabled",null,!!t),t&amp;&amp;(this._removeClass(=
this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null=
,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1=
})},disable:function(){return this._setOptions({disabled:!0})},_classes:fun=
ction(e){function i(i,o){var a,r;for(r=3D0;i.length&gt;r;r++)a=3Dn.classesE=
lementLookup[i[r]]||t(),a=3De.add?t(t.unique(a.get().concat(e.element.get()=
))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=3Da,s.push(i[r])=
,o&amp;&amp;e.classes[i[r]]&amp;&amp;s.push(e.classes[i[r]])}var s=3D[],n=
=3Dthis;return e=3Dt.extend({element:this.element,classes:this.options.clas=
ses||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&am=
p;&amp;i(e.keys.match(/\S+/g)||[],!0),e.extra&amp;&amp;i(e.extra.match(/\S+=
/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=3Dthis;t.eac=
h(i.classesElementLookup,function(s,n){-1!=3D=3Dt.inArray(e.target,n)&amp;&=
amp;(i.classesElementLookup[s]=3Dt(n.not(e.target).get()))})},_removeClass:=
function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,=
i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s=3D"=
boolean"=3D=3Dtypeof s?s:i;var n=3D"string"=3D=3Dtypeof t||null=3D=3D=3Dt,o=
=3D{extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element=
.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=3Dthis;"=
boolean"!=3Dtypeof e&amp;&amp;(s=3Di,i=3De,e=3D!1),s?(i=3Dn=3Dt(i),this.bin=
dings=3Dthis.bindings.add(i)):(s=3Di,i=3Dthis.element,n=3Dthis.widget()),t.=
each(s,function(s,a){function r(){return e||o.options.disabled!=3D=3D!0&amp=
;&amp;!t(this).hasClass("ui-state-disabled")?("string"=3D=3Dtypeof a?o[a]:a=
).apply(o,arguments):void 0}"string"!=3Dtypeof a&amp;&amp;(r.guid=3Da.guid=
=3Da.guid||r.guid||t.guid++);var h=3Ds.match(/^([\w:-]*)\s*(.*)$/),l=3Dh[1]=
+o.eventNamespace,c=3Dh[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=
=3D(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.o=
ff(i).off(i),this.bindings=3Dt(this.bindings.not(e).get()),this.focusable=
=3Dt(this.focusable.not(e).get()),this.hoverable=3Dt(this.hoverable.not(e).=
get())},_delay:function(t,e){function i(){return("string"=3D=3Dtypeof t?s[t=
]:t).apply(s,arguments)}var s=3Dthis;return setTimeout(i,e||0)},_hoverable:=
function(e){this.hoverable=3Dthis.hoverable.add(e),this._on(e,{mouseenter:f=
unction(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mousel=
eave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover"=
)}})},_focusable:function(e){this.focusable=3Dthis.focusable.add(e),this._o=
n(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-f=
ocus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-=
state-focus")}})},_trigger:function(e,i,s){var n,o,a=3Dthis.options[e];if(s=
=3Ds||{},i=3Dt.Event(i),i.type=3D(e=3D=3D=3Dthis.widgetEventPrefix?e:this.w=
idgetEventPrefix+e).toLowerCase(),i.target=3Dthis.element[0],o=3Di.original=
Event)for(n in o)n in i||(i[n]=3Do[n]);return this.element.trigger(i,s),!(t=
.isFunction(a)&amp;&amp;a.apply(this.element[0],[i].concat(s))=3D=3D=3D!1||=
i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,=
i){t.Widget.prototype["_"+e]=3Dfunction(s,n,o){"string"=3D=3Dtypeof n&amp;&=
amp;(n=3D{effect:n});var a,r=3Dn?n=3D=3D=3D!0||"number"=3D=3Dtypeof n?i:n.e=
ffect||i:e;n=3Dn||{},"number"=3D=3Dtypeof n&amp;&amp;(n=3D{duration:n}),a=
=3D!t.isEmptyObject(n),n.complete=3Do,n.delay&amp;&amp;s.delay(n.delay),a&a=
mp;&amp;t.effects&amp;&amp;t.effects.effect[r]?s[e](n):r!=3D=3De&amp;&amp;s=
[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&amp;&amp=
;o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFl=
oat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}f=
unction i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=3De[0]=
;return 9=3D=3D=3Di.nodeType?{width:e.width(),height:e.height(),offset:{top=
:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.=
scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset=
:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),o=
ffset:e.offset()}}var n,o=3DMath.max,a=3DMath.abs,r=3D/left|center|right/,h=
=3D/top|center|bottom/,l=3D/[\+\-]\d+(\.[\d]+)?%?/,c=3D/^\w+/,u=3D/%$/,d=3D=
t.fn.position;t.position=3D{scrollbarWidth:function(){if(void 0!=3D=3Dn)ret=
urn n;var e,i,s=3Dt("&lt;div style=3D'display:block;position:absolute;width=
:50px;height:50px;overflow:hidden;'&gt;&lt;div style=3D'height:100px;width:=
auto;'&gt;&lt;/div&gt;&lt;/div&gt;"),o=3Ds.children()[0];return t("body").a=
ppend(s),e=3Do.offsetWidth,s.css("overflow","scroll"),i=3Do.offsetWidth,e=
=3D=3D=3Di&amp;&amp;(i=3Ds[0].clientWidth),s.remove(),n=3De-i},getScrollInf=
o:function(e){var i=3De.isWindow||e.isDocument?"":e.element.css("overflow-x=
"),s=3De.isWindow||e.isDocument?"":e.element.css("overflow-y"),n=3D"scroll"=
=3D=3D=3Di||"auto"=3D=3D=3Di&amp;&amp;e.width&lt;e.element[0].scrollWidth,o=
=3D"scroll"=3D=3D=3Ds||"auto"=3D=3D=3Ds&amp;&amp;e.height&lt;e.element[0].s=
crollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.positio=
n.scrollbarWidth():0}},getWithinInfo:function(e){var i=3Dt(e||window),s=3Dt=
.isWindow(i[0]),n=3D!!i[0]&amp;&amp;9=3D=3D=3Di[0].nodeType,o=3D!s&amp;&amp=
;!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0=
,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidt=
h(),height:i.outerHeight()}}},t.fn.position=3Dfunction(n){if(!n||!n.of)retu=
rn d.apply(this,arguments);n=3Dt.extend({},n);var u,p,f,g,m,_,v=3Dt(n.of),b=
=3Dt.position.getWithinInfo(n.within),y=3Dt.position.getScrollInfo(b),w=3D(=
n.collision||"flip").split(" "),k=3D{};return _=3Ds(v),v[0].preventDefault&=
amp;&amp;(n.at=3D"left top"),p=3D_.width,f=3D_.height,g=3D_.offset,m=3Dt.ex=
tend({},g),t.each(["my","at"],function(){var t,e,i=3D(n[this]||"").split(" =
");1=3D=3D=3Di.length&amp;&amp;(i=3Dr.test(i[0])?i.concat(["center"]):h.tes=
t(i[0])?["center"].concat(i):["center","center"]),i[0]=3Dr.test(i[0])?i[0]:=
"center",i[1]=3Dh.test(i[1])?i[1]:"center",t=3Dl.exec(i[0]),e=3Dl.exec(i[1]=
),k[this]=3D[t?t[0]:0,e?e[0]:0],n[this]=3D[c.exec(i[0])[0],c.exec(i[1])[0]]=
}),1=3D=3D=3Dw.length&amp;&amp;(w[1]=3Dw[0]),"right"=3D=3D=3Dn.at[0]?m.left=
+=3Dp:"center"=3D=3D=3Dn.at[0]&amp;&amp;(m.left+=3Dp/2),"bottom"=3D=3D=3Dn.=
at[1]?m.top+=3Df:"center"=3D=3D=3Dn.at[1]&amp;&amp;(m.top+=3Df/2),u=3De(k.a=
t,p,f),m.left+=3Du[0],m.top+=3Du[1],this.each(function(){var s,r,h=3Dt(this=
),l=3Dh.outerWidth(),c=3Dh.outerHeight(),d=3Di(this,"marginLeft"),_=3Di(thi=
s,"marginTop"),x=3Dl+d+i(this,"marginRight")+y.width,C=3Dc+_+i(this,"margin=
Bottom")+y.height,D=3Dt.extend({},m),I=3De(k.my,h.outerWidth(),h.outerHeigh=
t());"right"=3D=3D=3Dn.my[0]?D.left-=3Dl:"center"=3D=3D=3Dn.my[0]&amp;&amp;=
(D.left-=3Dl/2),"bottom"=3D=3D=3Dn.my[1]?D.top-=3Dc:"center"=3D=3D=3Dn.my[1=
]&amp;&amp;(D.top-=3Dc/2),D.left+=3DI[0],D.top+=3DI[1],s=3D{marginLeft:d,ma=
rginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&amp;&amp=
;t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHei=
ght:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I=
[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&amp;&amp;(r=3Dfu=
nction(t){var e=3Dg.left-D.left,i=3De+p-l,s=3Dg.top-D.top,r=3Ds+f-c,u=3D{ta=
rget:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,=
left:D.left,top:D.top,width:l,height:c},horizontal:0&gt;i?"left":e&gt;0?"ri=
ght":"center",vertical:0&gt;r?"top":s&gt;0?"bottom":"middle"};l&gt;p&amp;&a=
mp;p&gt;a(e+i)&amp;&amp;(u.horizontal=3D"center"),c&gt;f&amp;&amp;f&gt;a(s+=
r)&amp;&amp;(u.vertical=3D"middle"),u.important=3Do(a(e),a(i))&gt;o(a(s),a(=
r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{u=
sing:r}))})},t.ui.position=3D{fit:{left:function(t,e){var i,s=3De.within,n=
=3Ds.isWindow?s.scrollLeft:s.offset.left,a=3Ds.width,r=3Dt.left-e.collision=
Position.marginLeft,h=3Dn-r,l=3Dr+e.collisionWidth-a-n;e.collisionWidth&gt;=
a?h&gt;0&amp;&amp;0&gt;=3Dl?(i=3Dt.left+h+e.collisionWidth-a-n,t.left+=3Dh-=
i):t.left=3Dl&gt;0&amp;&amp;0&gt;=3Dh?n:h&gt;l?n+a-e.collisionWidth:n:h&gt;=
0?t.left+=3Dh:l&gt;0?t.left-=3Dl:t.left=3Do(t.left-r,t.left)},top:function(=
t,e){var i,s=3De.within,n=3Ds.isWindow?s.scrollTop:s.offset.top,a=3De.withi=
n.height,r=3Dt.top-e.collisionPosition.marginTop,h=3Dn-r,l=3Dr+e.collisionH=
eight-a-n;e.collisionHeight&gt;a?h&gt;0&amp;&amp;0&gt;=3Dl?(i=3Dt.top+h+e.c=
ollisionHeight-a-n,t.top+=3Dh-i):t.top=3Dl&gt;0&amp;&amp;0&gt;=3Dh?n:h&gt;l=
?n+a-e.collisionHeight:n:h&gt;0?t.top+=3Dh:l&gt;0?t.top-=3Dl:t.top=3Do(t.to=
p-r,t.top)}},flip:{left:function(t,e){var i,s,n=3De.within,o=3Dn.offset.lef=
t+n.scrollLeft,r=3Dn.width,h=3Dn.isWindow?n.scrollLeft:n.offset.left,l=3Dt.=
left-e.collisionPosition.marginLeft,c=3Dl-h,u=3Dl+e.collisionWidth-r-h,d=3D=
"left"=3D=3D=3De.my[0]?-e.elemWidth:"right"=3D=3D=3De.my[0]?e.elemWidth:0,p=
=3D"left"=3D=3D=3De.at[0]?e.targetWidth:"right"=3D=3D=3De.at[0]?-e.targetWi=
dth:0,f=3D-2*e.offset[0];0&gt;c?(i=3Dt.left+d+p+f+e.collisionWidth-r-o,(0&g=
t;i||a(c)&gt;i)&amp;&amp;(t.left+=3Dd+p+f)):u&gt;0&amp;&amp;(s=3Dt.left-e.c=
ollisionPosition.marginLeft+d+p+f-h,(s&gt;0||u&gt;a(s))&amp;&amp;(t.left+=
=3Dd+p+f))},top:function(t,e){var i,s,n=3De.within,o=3Dn.offset.top+n.scrol=
lTop,r=3Dn.height,h=3Dn.isWindow?n.scrollTop:n.offset.top,l=3Dt.top-e.colli=
sionPosition.marginTop,c=3Dl-h,u=3Dl+e.collisionHeight-r-h,d=3D"top"=3D=3D=
=3De.my[1],p=3Dd?-e.elemHeight:"bottom"=3D=3D=3De.my[1]?e.elemHeight:0,f=3D=
"top"=3D=3D=3De.at[1]?e.targetHeight:"bottom"=3D=3D=3De.at[1]?-e.targetHeig=
ht:0,g=3D-2*e.offset[1];0&gt;c?(s=3Dt.top+p+f+g+e.collisionHeight-r-o,(0&gt=
;s||a(c)&gt;s)&amp;&amp;(t.top+=3Dp+f+g)):u&gt;0&amp;&amp;(i=3Dt.top-e.coll=
isionPosition.marginTop+p+f+g-h,(i&gt;0||u&gt;a(i))&amp;&amp;(t.top+=3Dp+f+=
g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments=
),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.positio=
n.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments=
)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr=
.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):functio=
n(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function()=
{var t=3D"onselectstart"in document.createElement("div")?"selectstart":"mou=
sedown";return function(){return this.on(t+".ui-disableSelection",function(=
t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui=
-disableSelection")}});var c=3D"ui-effects-",u=3D"ui-effects-style",d=3D"ui=
-effects-animated",p=3Dt;t.effects=3D{effect:{}},function(t,e){function i(t=
,e,i){var s=3Du[e.type]||{};return null=3D=3Dt?i||!e.def?null:e.def:(t=3Ds.=
floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0&gt;t?0:t&gt;=
s.max?s.max:t)}function s(i){var s=3Dl(),n=3Ds._rgba=3D[];return i=3Di.toLo=
werCase(),f(h,function(t,o){var a,r=3Do.re.exec(i),h=3Dr&amp;&amp;o.parse(r=
),l=3Do.space||"rgba";return h?(a=3Ds[l](h),s[c[l].cache]=3Da[c[l].cache],n=
=3Ds._rgba=3Da._rgba,!1):e}),n.length?("0,0,0,0"=3D=3D=3Dn.join()&amp;&amp;=
t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=3D(i+1)%1,1&gt=
;6*i?t+6*(e-t)*i:1&gt;2*i?e:2&gt;3*i?t+6*(e-t)*(2/3-i):t}var o,a=3D"backgro=
undColor borderBottomColor borderLeftColor borderRightColor borderTopColor =
color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=
=3D/^([\-+])=3D\s*(\d+\.?\d*)/,h=3D[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3}=
)\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return=
[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+=
)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:functi=
on(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f=
0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(=
t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:f=
unction(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[=
3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s=
*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:func=
tion(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=3Dt.Color=3Dfunction(e,i,s=
,n){return new t.Color.fn.parse(e,i,s,n)},c=3D{rgba:{props:{red:{idx:0,type=
:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{=
hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx=
:2,type:"percent"}}}},u=3D{"byte":{floor:!0,max:255},percent:{max:1},degree=
s:{mod:360,floor:!0}},d=3Dl.support=3D{},p=3Dt("&lt;p&gt;")[0],f=3Dt.each;p=
.style.cssText=3D"background-color:rgba(1,1,1,.5)",d.rgba=3Dp.style.backgro=
undColor.indexOf("rgba")&gt;-1,f(c,function(t,e){e.cache=3D"_"+t,e.props.al=
pha=3D{idx:3,type:"percent",def:1}}),l.fn=3Dt.extend(l.prototype,{parse:fun=
ction(n,a,r,h){if(n=3D=3D=3De)return this._rgba=3D[null,null,null,null],thi=
s;(n.jquery||n.nodeType)&amp;&amp;(n=3Dt(n).css(a),a=3De);var u=3Dthis,d=3D=
t.type(n),p=3Dthis._rgba=3D[];return a!=3D=3De&amp;&amp;(n=3D[n,a,r,h],d=3D=
"array"),"string"=3D=3D=3Dd?this.parse(s(n)||o._default):"array"=3D=3D=3Dd?=
(f(c.rgba.props,function(t,e){p[e.idx]=3Di(n[e.idx],e)}),this):"object"=3D=
=3D=3Dd?(n instanceof l?f(c,function(t,e){n[e.cache]&amp;&amp;(u[e.cache]=
=3Dn[e.cache].slice())}):f(c,function(e,s){var o=3Ds.cache;f(s.props,functi=
on(t,e){if(!u[o]&amp;&amp;s.to){if("alpha"=3D=3D=3Dt||null=3D=3Dn[t])return=
;u[o]=3Ds.to(u._rgba)}u[o][e.idx]=3Di(n[t],e,!0)}),u[o]&amp;&amp;0&gt;t.inA=
rray(null,u[o].slice(0,3))&amp;&amp;(u[o][3]=3D1,s.from&amp;&amp;(u._rgba=
=3Ds.from(u[o])))}),this):e},is:function(t){var i=3Dl(t),s=3D!0,n=3Dthis;re=
turn f(c,function(t,o){var a,r=3Di[o.cache];return r&amp;&amp;(a=3Dn[o.cach=
e]||o.to&amp;&amp;o.to(n._rgba)||[],f(o.props,function(t,i){return null!=3D=
r[i.idx]?s=3Dr[i.idx]=3D=3D=3Da[i.idx]:e})),s}),s},_space:function(){var t=
=3D[],e=3Dthis;return f(c,function(i,s){e[s.cache]&amp;&amp;t.push(i)}),t.p=
op()},transition:function(t,e){var s=3Dl(t),n=3Ds._space(),o=3Dc[n],a=3D0=
=3D=3D=3Dthis.alpha()?l("transparent"):this,r=3Da[o.cache]||o.to(a._rgba),h=
=3Dr.slice();return s=3Ds[o.cache],f(o.props,function(t,n){var o=3Dn.idx,a=
=3Dr[o],l=3Ds[o],c=3Du[n.type]||{};null!=3D=3Dl&amp;&amp;(null=3D=3D=3Da?h[=
o]=3Dl:(c.mod&amp;&amp;(l-a&gt;c.mod/2?a+=3Dc.mod:a-l&gt;c.mod/2&amp;&amp;(=
a-=3Dc.mod)),h[o]=3Di((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1=
=3D=3D=3Dthis._rgba[3])return this;var i=3Dthis._rgba.slice(),s=3Di.pop(),n=
=3Dl(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgb=
aString:function(){var e=3D"rgba(",i=3Dt.map(this._rgba,function(t,e){retur=
n null=3D=3Dt?e&gt;2?1:0:t});return 1=3D=3D=3Di[3]&amp;&amp;(i.pop(),e=3D"r=
gb("),e+i.join()+")"},toHslaString:function(){var e=3D"hsla(",i=3Dt.map(thi=
s.hsla(),function(t,e){return null=3D=3Dt&amp;&amp;(t=3De&gt;2?1:0),e&amp;&=
amp;3&gt;e&amp;&amp;(t=3DMath.round(100*t)+"%"),t});return 1=3D=3D=3Di[3]&a=
mp;&amp;(i.pop(),e=3D"hsl("),e+i.join()+")"},toHexString:function(e){var i=
=3Dthis._rgba.slice(),s=3Di.pop();return e&amp;&amp;i.push(~~(255*s)),"#"+t=
.map(i,function(t){return t=3D(t||0).toString(16),1=3D=3D=3Dt.length?"0"+t:=
t}).join("")},toString:function(){return 0=3D=3D=3Dthis._rgba[3]?"transpare=
nt":this.toRgbaString()}}),l.fn.parse.prototype=3Dl.fn,c.hsla.to=3Dfunction=
(t){if(null=3D=3Dt[0]||null=3D=3Dt[1]||null=3D=3Dt[2])return[null,null,null=
,t[3]];var e,i,s=3Dt[0]/255,n=3Dt[1]/255,o=3Dt[2]/255,a=3Dt[3],r=3DMath.max=
(s,n,o),h=3DMath.min(s,n,o),l=3Dr-h,c=3Dr+h,u=3D.5*c;return e=3Dh=3D=3D=3Dr=
?0:s=3D=3D=3Dr?60*(n-o)/l+360:n=3D=3D=3Dr?60*(o-s)/l+120:60*(s-n)/l+240,i=
=3D0=3D=3D=3Dl?0:.5&gt;=3Du?l/c:l/(2-c),[Math.round(e)%360,i,u,null=3D=3Da?=
1:a]},c.hsla.from=3Dfunction(t){if(null=3D=3Dt[0]||null=3D=3Dt[1]||null=3D=
=3Dt[2])return[null,null,null,t[3]];var e=3Dt[0]/360,i=3Dt[1],s=3Dt[2],o=3D=
t[3],a=3D.5&gt;=3Ds?s*(1+i):s+i-s*i,r=3D2*s-a;return[Math.round(255*n(r,a,e=
+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,functi=
on(s,n){var o=3Dn.props,a=3Dn.cache,h=3Dn.to,c=3Dn.from;l.fn[s]=3Dfunction(=
s){if(h&amp;&amp;!this[a]&amp;&amp;(this[a]=3Dh(this._rgba)),s=3D=3D=3De)re=
turn this[a].slice();var n,r=3Dt.type(s),u=3D"array"=3D=3D=3Dr||"object"=3D=
=3D=3Dr?s:arguments,d=3Dthis[a].slice();return f(o,function(t,e){var s=3Du[=
"object"=3D=3D=3Dr?t:e.idx];null=3D=3Ds&amp;&amp;(s=3Dd[e.idx]),d[e.idx]=3D=
i(s,e)}),c?(n=3Dl(c(d)),n[a]=3Dd,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[=
e]=3Dfunction(n){var o,a=3Dt.type(n),h=3D"alpha"=3D=3D=3De?this._hsla?"hsla=
":"rgba":s,l=3Dthis[h](),c=3Dl[i.idx];return"undefined"=3D=3D=3Da?c:("funct=
ion"=3D=3D=3Da&amp;&amp;(n=3Dn.call(this,c),a=3Dt.type(n)),null=3D=3Dn&amp;=
&amp;i.empty?this:("string"=3D=3D=3Da&amp;&amp;(o=3Dr.exec(n),o&amp;&amp;(n=
=3Dc+parseFloat(o[2])*("+"=3D=3D=3Do[1]?1:-1))),l[i.idx]=3Dn,this[h](l)))})=
})}),l.hook=3Dfunction(e){var i=3De.split(" ");f(i,function(e,i){t.cssHooks=
[i]=3D{set:function(e,n){var o,a,r=3D"";if("transparent"!=3D=3Dn&amp;&amp;(=
"string"!=3D=3Dt.type(n)||(o=3Ds(n)))){if(n=3Dl(o||n),!d.rgba&amp;&amp;1!=
=3D=3Dn._rgba[3]){for(a=3D"backgroundColor"=3D=3D=3Di?e.parentNode:e;(""=3D=
=3D=3Dr||"transparent"=3D=3D=3Dr)&amp;&amp;a&amp;&amp;a.style;)try{r=3Dt.cs=
s(a,"backgroundColor"),a=3Da.parentNode}catch(h){}n=3Dn.blend(r&amp;&amp;"t=
ransparent"!=3D=3Dr?r:"_default")}n=3Dn.toRgbaString()}try{e.style[i]=3Dn}c=
atch(h){}}},t.fx.step[i]=3Dfunction(e){e.colorInit||(e.start=3Dl(e.elem,i),=
e.end=3Dl(e.end),e.colorInit=3D!0),t.cssHooks[i].set(e.elem,e.start.transit=
ion(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor=3D{expand:function(t=
){var e=3D{};return f(["Top","Right","Bottom","Left"],function(i,s){e["bord=
er"+s+"Color"]=3Dt}),e}},o=3Dt.Color.names=3D{aqua:"#00ffff",black:"#000000=
",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00=
ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:=
"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",=
transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function =
e(e){var i,s,n=3De.ownerDocument.defaultView?e.ownerDocument.defaultView.ge=
tComputedStyle(e,null):e.currentStyle,o=3D{};if(n&amp;&amp;n.length&amp;&am=
p;n[0]&amp;&amp;n[n[0]])for(s=3Dn.length;s--;)i=3Dn[s],"string"=3D=3Dtypeof=
 n[i]&amp;&amp;(o[t.camelCase(i)]=3Dn[i]);else for(i in n)"string"=3D=3Dtyp=
eof n[i]&amp;&amp;(o[i]=3Dn[i]);return o}function i(e,i){var s,o,a=3D{};for=
(s in i)o=3Di[s],e[s]!=3D=3Do&amp;&amp;(n[s]||(t.fx.step[s]||!isNaN(parseFl=
oat(o)))&amp;&amp;(a[s]=3Do));return a}var s=3D["add","remove","toggle"],n=
=3D{border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,border=
Top:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRi=
ghtStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=
=3Dfunction(t){("none"!=3D=3Dt.end&amp;&amp;!t.setAttr||1=3D=3D=3Dt.pos&amp=
;&amp;!t.setAttr)&amp;&amp;(p.style(t.elem,i,t.end),t.setAttr=3D!0)}}),t.fn=
.addBack||(t.fn.addBack=3Dfunction(t){return this.add(null=3D=3Dt?this.prev=
Object:this.prevObject.filter(t))}),t.effects.animateClass=3Dfunction(n,o,a=
,r){var h=3Dt.speed(o,a,r);return this.queue(function(){var o,a=3Dt(this),r=
=3Da.attr("class")||"",l=3Dh.children?a.find("*").addBack():a;l=3Dl.map(fun=
ction(){var i=3Dt(this);return{el:i,start:e(this)}}),o=3Dfunction(){t.each(=
s,function(t,e){n[e]&amp;&amp;a[e+"Class"](n[e])})},o(),l=3Dl.map(function(=
){return this.end=3De(this.el[0]),this.diff=3Di(this.start,this.end),this})=
,a.attr("class",r),l=3Dl.map(function(){var e=3Dthis,i=3Dt.Deferred(),s=3Dt=
.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.a=
nimate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o=
(),t.each(arguments,function(){var e=3Dthis.el;t.each(this.diff,function(t)=
{e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(=
e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:=
i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){=
return function(i,s,n,o){return arguments.length&gt;1?t.effects.animateClas=
s.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),t=
oggleClass:function(e){return function(i,s,n,o,a){return"boolean"=3D=3Dtype=
of s||void 0=3D=3D=3Ds?n?t.effects.animateClass.call(this,s?{add:i}:{remove=
:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle=
:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.eff=
ects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){functi=
on e(e,i,s,n){return t.isPlainObject(e)&amp;&amp;(i=3De,e=3De.effect),e=3D{=
effect:e},null=3D=3Di&amp;&amp;(i=3D{}),t.isFunction(i)&amp;&amp;(n=3Di,s=
=3Dnull,i=3D{}),("number"=3D=3Dtypeof i||t.fx.speeds[i])&amp;&amp;(n=3Ds,s=
=3Di,i=3D{}),t.isFunction(s)&amp;&amp;(n=3Ds,s=3Dnull),i&amp;&amp;t.extend(=
e,i),s=3Ds||i.duration,e.duration=3Dt.fx.off?0:"number"=3D=3Dtypeof s?s:s i=
n t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=3Dn||i.complet=
e,e}function i(e){return!e||"number"=3D=3Dtypeof e||t.fx.speeds[e]?!0:"stri=
ng"!=3Dtypeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=3Dtypeof =
e||e.effect?!1:!0:!0}function s(t,e){var i=3De.outerWidth(),s=3De.outerHeig=
ht(),n=3D/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto=
),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=3Dn=
.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"=3D=3D=3D=
o[2]?i:parseFloat(o[2]),bottom:"auto"=3D=3D=3Do[3]?s:parseFloat(o[3]),left:=
parseFloat(o[4])||0}}t.expr&amp;&amp;t.expr.filters&amp;&amp;t.expr.filters=
.animated&amp;&amp;(t.expr.filters.animated=3Dfunction(e){return function(i=
){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!=3D=
=3D!1&amp;&amp;t.extend(t.effects,{save:function(t,e){for(var i=3D0,s=3De.l=
ength;s&gt;i;i++)null!=3D=3De[i]&amp;&amp;t.data(c+e[i],t[0].style[e[i]])},=
restore:function(t,e){for(var i,s=3D0,n=3De.length;n&gt;s;s++)null!=3D=3De[=
s]&amp;&amp;(i=3Dt.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){retur=
n"toggle"=3D=3D=3De&amp;&amp;(e=3Dt.is(":hidden")?"show":"hide"),e},createW=
rapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent(=
);var i=3D{width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("f=
loat")},s=3Dt("&lt;div&gt;&lt;/div&gt;").addClass("ui-effects-wrapper").css=
({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0=
}),n=3D{width:e.width(),height:e.height()},o=3Ddocument.activeElement;try{o=
.id}catch(a){o=3Ddocument.body}return e.wrap(s),(e[0]=3D=3D=3Do||t.contains=
(e[0],o))&amp;&amp;t(o).trigger("focus"),s=3De.parent(),"static"=3D=3D=3De.=
css("position")?(s.css({position:"relative"}),e.css({position:"relative"}))=
:(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each([=
"top","left","bottom","right"],function(t,s){i[s]=3De.css(s),isNaN(parseInt=
(i[s],10))&amp;&amp;(i[s]=3D"auto")}),e.css({position:"relative",top:0,left=
:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:fu=
nction(e){var i=3Ddocument.activeElement;return e.parent().is(".ui-effects-=
wrapper")&amp;&amp;(e.parent().replaceWith(e),(e[0]=3D=3D=3Di||t.contains(e=
[0],i))&amp;&amp;t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1=
.12.1",define:function(e,i,s){return s||(s=3Di,i=3D"effect"),t.effects.effe=
ct[e]=3Ds,t.effects.effect[e].mode=3Di,s},scaledDimensions:function(t,e,i){=
if(0=3D=3D=3De)return{height:0,width:0,outerHeight:0,outerWidth:0};var s=3D=
"horizontal"!=3D=3Di?(e||100)/100:1,n=3D"vertical"!=3D=3Di?(e||100)/100:1;r=
eturn{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,o=
uterWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.righ=
t-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.t=
op}},unshift:function(t,e,i){var s=3Dt.queue();e&gt;1&amp;&amp;s.splice.app=
ly(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data=
(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=3Dt.dat=
a(u)||"",t.removeData(u)},mode:function(t,e){var i=3Dt.is(":hidden");return=
"toggle"=3D=3D=3De&amp;&amp;(e=3Di?"show":"hide"),(i?"hide"=3D=3D=3De:"show=
"=3D=3D=3De)&amp;&amp;(e=3D"none"),e},getBaseline:function(t,e){var i,s;swi=
tch(t[0]){case"top":i=3D0;break;case"middle":i=3D.5;break;case"bottom":i=3D=
1;break;default:i=3Dt[0]/e.height}switch(t[1]){case"left":s=3D0;break;case"=
center":s=3D.5;break;case"right":s=3D1;break;default:s=3Dt[1]/e.width}retur=
n{x:s,y:i}},createPlaceholder:function(e){var i,s=3De.css("position"),n=3De=
.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("=
marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRigh=
t")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|rel=
ative)/.test(s)&amp;&amp;(s=3D"absolute",i=3Dt("&lt;"+e[0].nodeName+"&gt;")=
.insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inlin=
e-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBot=
tom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css(=
"marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHei=
ght(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placehold=
er",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:func=
tion(t){var e=3Dc+"placeholder",i=3Dt.data(e);i&amp;&amp;(i.remove(),t.remo=
veData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removeP=
laceholder(e)},setTransition:function(e,i,s,n){return n=3Dn||{},t.each(i,fu=
nction(t,i){var o=3De.cssUnit(i);o[0]&gt;0&amp;&amp;(n[i]=3Do[0]*s+o[1])}),=
n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData=
(d),t.effects.cleanUp(r),"hide"=3D=3D=3Ds.mode&amp;&amp;r.hide(),a()}functi=
on a(){t.isFunction(h)&amp;&amp;h.call(r[0]),t.isFunction(e)&amp;&amp;e()}v=
ar r=3Dt(this);s.mode=3Dc.shift(),t.uiBackCompat=3D=3D=3D!1||o?"none"=3D=3D=
=3Ds.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"=3D=3D=3Dl:"=
show"=3D=3D=3Dl)?(r[l](),a()):n.call(r[0],s,a)}var s=3De.apply(this,argumen=
ts),n=3Dt.effects.effect[s.effect],o=3Dn.mode,a=3Ds.queue,r=3Da||"fx",h=3Ds=
.complete,l=3Ds.mode,c=3D[],u=3Dfunction(e){var i=3Dt(this),s=3Dt.effects.m=
ode(i,l)||o;i.data(d,!0),c.push(s),o&amp;&amp;("show"=3D=3D=3Ds||s=3D=3D=3D=
o&amp;&amp;"hide"=3D=3D=3Ds)&amp;&amp;i.show(),o&amp;&amp;"none"=3D=3D=3Ds|=
|t.effects.saveStyle(i),t.isFunction(e)&amp;&amp;e()};return t.fx.off||!n?l=
?this[l](s.duration,h):this.each(function(){h&amp;&amp;h.call(this)}):a=3D=
=3D=3D!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){=
return function(s){if(i(s))return t.apply(this,arguments);var n=3De.apply(t=
his,arguments);return n.mode=3D"show",this.effect.call(this,n)
}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(th=
is,arguments);var n=3De.apply(this,arguments);return n.mode=3D"hide",this.e=
ffect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(=
s)||"boolean"=3D=3Dtypeof s)return t.apply(this,arguments);var n=3De.apply(=
this,arguments);return n.mode=3D"toggle",this.effect.call(this,n)}}(t.fn.to=
ggle),cssUnit:function(e){var i=3Dthis.css(e),s=3D[];return t.each(["em","p=
x","%","pt"],function(t,e){i.indexOf(e)&gt;0&amp;&amp;(s=3D[parseFloat(i),e=
])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.=
right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer=
:function(e,i){var s=3Dt(this),n=3Dt(e.to),o=3D"fixed"=3D=3D=3Dn.css("posit=
ion"),a=3Dt("body"),r=3Do?a.scrollTop():0,h=3Do?a.scrollLeft():0,l=3Dn.offs=
et(),c=3D{top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWid=
th()},u=3Ds.offset(),d=3Dt("&lt;div class=3D'ui-effects-transfer'&gt;&lt;/d=
iv&gt;").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.lef=
t-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolut=
e"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&am=
p;&amp;i()})}}),t.fx.step.clip=3Dfunction(e){e.clipInit||(e.start=3Dt(e.ele=
m).cssClip(),"string"=3D=3Dtypeof e.end&amp;&amp;(e.end=3Ds(e.end,e.elem)),=
e.clipInit=3D!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.sta=
rt.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(=
e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.=
left)+e.start.left})}}(),function(){var e=3D{};t.each(["Quad","Cubic","Quar=
t","Quint","Expo"],function(t,i){e[i]=3Dfunction(e){return Math.pow(e,t+2)}=
}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:functi=
on(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0=3D=3D=3Dt||1=
=3D=3D=3Dt?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back=
:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=3D4;((e=3DM=
ath.pow(2,--i))-1)/11&gt;t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-=
2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=3Di,t.easing["eas=
eOut"+e]=3Dfunction(t){return 1-i(1-t)},t.easing["easeInOut"+e]=3Dfunction(=
t){return.5&gt;t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=3Dt.effects;t.effects.d=
efine("blind","hide",function(e,i){var s=3D{up:["bottom","top"],vertical:["=
bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["rig=
ht","left"],right:["left","right"]},n=3Dt(this),o=3De.direction||"up",a=3Dn=
.cssClip(),r=3D{clip:t.extend({},a)},h=3Dt.effects.createPlaceholder(n);r.c=
lip[s[o][0]]=3Dr.clip[s[o][1]],"show"=3D=3D=3De.mode&amp;&amp;(n.cssClip(r.=
clip),h&amp;&amp;h.css(t.effects.clipToBox(r)),r.clip=3Da),h&amp;&amp;h.ani=
mate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,dura=
tion:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",fu=
nction(e,i){var s,n,o,a=3Dt(this),r=3De.mode,h=3D"hide"=3D=3D=3Dr,l=3D"show=
"=3D=3D=3Dr,c=3De.direction||"up",u=3De.distance,d=3De.times||5,p=3D2*d+(l|=
|h?1:0),f=3De.duration/p,g=3De.easing,m=3D"up"=3D=3D=3Dc||"down"=3D=3D=3Dc?=
"top":"left",_=3D"up"=3D=3D=3Dc||"left"=3D=3D=3Dc,v=3D0,b=3Da.queue().lengt=
h;for(t.effects.createPlaceholder(a),o=3Da.css(m),u||(u=3Da["top"=3D=3D=3Dm=
?"outerHeight":"outerWidth"]()/3),l&amp;&amp;(n=3D{opacity:1},n[m]=3Do,a.cs=
s("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&amp;&amp;(u/=3DMath.pow(=
2,d-1)),n=3D{},n[m]=3Do;d&gt;v;v++)s=3D{},s[m]=3D(_?"-=3D":"+=3D")+u,a.anim=
ate(s,f,g).animate(n,f,g),u=3Dh?2*u:u/2;h&amp;&amp;(s=3D{opacity:0},s[m]=3D=
(_?"-=3D":"+=3D")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)=
}),t.effects.define("clip","hide",function(e,i){var s,n=3D{},o=3Dt(this),a=
=3De.direction||"vertical",r=3D"both"=3D=3D=3Da,h=3Dr||"horizontal"=3D=3D=
=3Da,l=3Dr||"vertical"=3D=3D=3Da;s=3Do.cssClip(),n.clip=3D{top:l?(s.bottom-=
s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)=
/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o=
),"show"=3D=3D=3De.mode&amp;&amp;(o.cssClip(n.clip),n.clip=3Ds),o.animate(n=
,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.def=
ine("drop","hide",function(e,i){var s,n=3Dt(this),o=3De.mode,a=3D"show"=3D=
=3D=3Do,r=3De.direction||"left",h=3D"up"=3D=3D=3Dr||"down"=3D=3D=3Dr?"top":=
"left",l=3D"up"=3D=3D=3Dr||"left"=3D=3D=3Dr?"-=3D":"+=3D",c=3D"+=3D"=3D=3D=
=3Dl?"-=3D":"+=3D",u=3D{opacity:0};t.effects.createPlaceholder(n),s=3De.dis=
tance||n["top"=3D=3D=3Dh?"outerHeight":"outerWidth"](!0)/2,u[h]=3Dl+s,a&amp=
;&amp;(n.css(u),u[h]=3Dc+s,u.opacity=3D1),n.animate(u,{queue:!1,duration:e.=
duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",f=
unction(e,i){function s(){b.push(this),b.length=3D=3D=3Du*d&amp;&amp;n()}fu=
nction n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,=
u=3De.pieces?Math.round(Math.sqrt(e.pieces)):3,d=3Du,p=3Dt(this),f=3De.mode=
,g=3D"show"=3D=3D=3Df,m=3Dp.show().css("visibility","hidden").offset(),_=3D=
Math.ceil(p.outerWidth()/d),v=3DMath.ceil(p.outerHeight()/u),b=3D[];for(o=
=3D0;u&gt;o;o++)for(h=3Dm.top+o*v,c=3Do-(u-1)/2,a=3D0;d&gt;a;a++)r=3Dm.left=
+a*_,l=3Da-(d-1)/2,p.clone().appendTo("body").wrap("&lt;div&gt;&lt;/div&gt;=
").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).paren=
t().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidde=
n",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animat=
e({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing=
,s)}),t.effects.define("fade","toggle",function(e,i){var s=3D"show"=3D=3D=
=3De.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,du=
ration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","h=
ide",function(e,i){var s=3Dt(this),n=3De.mode,o=3D"show"=3D=3D=3Dn,a=3D"hid=
e"=3D=3D=3Dn,r=3De.size||15,h=3D/([0-9]+)%/.exec(r),l=3D!!e.horizFirst,c=3D=
l?["right","bottom"]:["bottom","right"],u=3De.duration/2,d=3Dt.effects.crea=
tePlaceholder(s),p=3Ds.cssClip(),f=3D{clip:t.extend({},p)},g=3D{clip:t.exte=
nd({},p)},m=3D[p[c[0]],p[c[1]]],_=3Ds.queue().length;h&amp;&amp;(r=3DparseI=
nt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=3Dr,g.clip[c[0]]=3Dr,g.clip[c[1]]=3D=
0,o&amp;&amp;(s.cssClip(g.clip),d&amp;&amp;d.css(t.effects.clipToBox(g)),g.=
clip=3Dp),s.queue(function(i){d&amp;&amp;d.animate(t.effects.clipToBox(f),u=
,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.e=
asing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.=
define("highlight","show",function(e,i){var s=3Dt(this),n=3D{backgroundColo=
r:s.css("backgroundColor")};"hide"=3D=3D=3De.mode&amp;&amp;(n.opacity=3D0),=
t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.colo=
r||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,comp=
lete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=3Dt(this),r=3D=
["fontSize"],h=3D["borderTopWidth","borderBottomWidth","paddingTop","paddin=
gBottom"],l=3D["borderLeftWidth","borderRightWidth","paddingLeft","paddingR=
ight"],c=3De.mode,u=3D"effect"!=3D=3Dc,d=3De.scale||"both",p=3De.origin||["=
middle","center"],f=3Da.css("position"),g=3Da.position(),m=3Dt.effects.scal=
edDimensions(a),_=3De.from||m,v=3De.to||t.effects.scaledDimensions(a,0);t.e=
ffects.createPlaceholder(a),"show"=3D=3D=3Dc&amp;&amp;(o=3D_,_=3Dv,v=3Do),n=
=3D{from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:=
v.width/m.width}},("box"=3D=3D=3Dd||"both"=3D=3D=3Dd)&amp;&amp;(n.from.y!=
=3D=3Dn.to.y&amp;&amp;(_=3Dt.effects.setTransition(a,h,n.from.y,_),v=3Dt.ef=
fects.setTransition(a,h,n.to.y,v)),n.from.x!=3D=3Dn.to.x&amp;&amp;(_=3Dt.ef=
fects.setTransition(a,l,n.from.x,_),v=3Dt.effects.setTransition(a,l,n.to.x,=
v))),("content"=3D=3D=3Dd||"both"=3D=3D=3Dd)&amp;&amp;n.from.y!=3D=3Dn.to.y=
&amp;&amp;(_=3Dt.effects.setTransition(a,r,n.from.y,_),v=3Dt.effects.setTra=
nsition(a,r,n.to.y,v)),p&amp;&amp;(s=3Dt.effects.getBaseline(p,m),_.top=3D(=
m.outerHeight-_.outerHeight)*s.y+g.top,_.left=3D(m.outerWidth-_.outerWidth)=
*s.x+g.left,v.top=3D(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=3D(m.out=
erWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"=3D=3D=3Dd||"both"=3D=
=3D=3Dd)&amp;&amp;(h=3Dh.concat(["marginTop","marginBottom"]).concat(r),l=
=3Dl.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(=
){var i=3Dt(this),s=3Dt.effects.scaledDimensions(i),o=3D{height:s.height*n.=
from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth=
:s.outerWidth*n.from.x},a=3D{height:s.height*n.to.y,width:s.width*n.to.x,ou=
terHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!=3D=3Dn.to.y&=
amp;&amp;(o=3Dt.effects.setTransition(i,h,n.from.y,o),a=3Dt.effects.setTran=
sition(i,h,n.to.y,a)),n.from.x!=3D=3Dn.to.x&amp;&amp;(o=3Dt.effects.setTran=
sition(i,l,n.from.x,o),a=3Dt.effects.setTransition(i,l,n.to.x,a)),u&amp;&am=
p;t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(=
){u&amp;&amp;t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:=
e.duration,easing:e.easing,complete:function(){var e=3Da.offset();0=3D=3D=
=3Dv.opacity&amp;&amp;a.css("opacity",_.opacity),u||(a.css("position","stat=
ic"=3D=3D=3Df?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.ef=
fects.define("scale",function(e,i){var s=3Dt(this),n=3De.mode,o=3DparseInt(=
e.percent,10)||(0=3D=3D=3DparseInt(e.percent,10)?0:"effect"!=3D=3Dn?0:100),=
a=3Dt.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDime=
nsions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.=
fade&amp;&amp;(a.from.opacity=3D1,a.to.opacity=3D0),t.effects.effect.size.c=
all(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=3Dt.exte=
nd(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.=
scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var =
s=3Dt(this),n=3De.mode,o=3D"show"=3D=3D=3Dn,a=3D"hide"=3D=3D=3Dn,r=3Do||a,h=
=3D2*(e.times||5)+(r?1:0),l=3De.duration/h,c=3D0,u=3D1,d=3Ds.queue().length=
;for((o||!s.is(":visible"))&amp;&amp;(s.css("opacity",0).show(),c=3D1);h&gt=
;u;u++)s.animate({opacity:c},l,e.easing),c=3D1-c;s.animate({opacity:c},l,e.=
easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",fu=
nction(e,i){var s=3D1,n=3Dt(this),o=3De.direction||"left",a=3De.distance||2=
0,r=3De.times||3,h=3D2*r+1,l=3DMath.round(e.duration/h),c=3D"up"=3D=3D=3Do|=
|"down"=3D=3D=3Do?"top":"left",u=3D"up"=3D=3D=3Do||"left"=3D=3D=3Do,d=3D{},=
p=3D{},f=3D{},g=3Dn.queue().length;for(t.effects.createPlaceholder(n),d[c]=
=3D(u?"-=3D":"+=3D")+a,p[c]=3D(u?"+=3D":"-=3D")+2*a,f[c]=3D(u?"-=3D":"+=3D"=
)+2*a,n.animate(d,l,e.easing);r&gt;s;s++)n.animate(p,l,e.easing).animate(f,=
l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effe=
cts.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,=
n,o=3Dt(this),a=3D{up:["bottom","top"],down:["top","bottom"],left:["right",=
"left"],right:["left","right"]},r=3De.mode,h=3De.direction||"left",l=3D"up"=
=3D=3D=3Dh||"down"=3D=3D=3Dh?"top":"left",c=3D"up"=3D=3D=3Dh||"left"=3D=3D=
=3Dh,u=3De.distance||o["top"=3D=3D=3Dl?"outerHeight":"outerWidth"](!0),d=3D=
{};t.effects.createPlaceholder(o),s=3Do.cssClip(),n=3Do.position()[l],d[l]=
=3D(c?-1:1)*u+n,d.clip=3Do.cssClip(),d.clip[a[h][1]]=3Dd.clip[a[h][0]],"sho=
w"=3D=3D=3Dr&amp;&amp;(o.cssClip(d.clip),o.css(l,d[l]),d.clip=3Ds,d[l]=3Dn)=
,o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});v=
ar f;t.uiBackCompat!=3D=3D!1&amp;&amp;(f=3Dt.effects.define("transfer",func=
tion(e,i){t(this).transfer(e,i)})),t.ui.focusable=3Dfunction(i,s){var n,o,a=
,r,h,l=3Di.nodeName.toLowerCase();return"area"=3D=3D=3Dl?(n=3Di.parentNode,=
o=3Dn.name,i.href&amp;&amp;o&amp;&amp;"map"=3D=3D=3Dn.nodeName.toLowerCase(=
)?(a=3Dt("img[usemap=3D'#"+o+"']"),a.length&gt;0&amp;&amp;a.is(":visible"))=
:!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=3D!i.disabled,r&=
amp;&amp;(h=3Dt(i).closest("fieldset")[0],h&amp;&amp;(r=3D!h.disabled))):r=
=3D"a"=3D=3D=3Dl?i.href||s:s,r&amp;&amp;t(i).is(":visible")&amp;&amp;e(t(i)=
))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,nul=
l!=3Dt.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=3Dfunction(){return"=
string"=3D=3Dtypeof this[0].form?this.closest("form"):t(this[0].form)},t.ui=
.formResetMixin=3D{_formResetHandler:function(){var e=3Dt(this);setTimeout(=
function(){var i=3De.data("ui-form-reset-instances");t.each(i,function(){th=
is.refresh()})})},_bindFormResetHandler:function(){if(this.form=3Dthis.elem=
ent.form(),this.form.length){var t=3Dthis.form.data("ui-form-reset-instance=
s")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler=
),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormRes=
etHandler:function(){if(this.form.length){var e=3Dthis.form.data("ui-form-r=
eset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-=
form-reset-instances",e):this.form.removeData("ui-form-reset-instances").of=
f("reset.ui-form-reset")}}},"1.7"=3D=3D=3Dt.fn.jquery.substring(0,3)&amp;&a=
mp;(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.ea=
ch(n,function(){i-=3DparseFloat(t.css(e,"padding"+this))||0,s&amp;&amp;(i-=
=3DparseFloat(t.css(e,"border"+this+"Width"))||0),o&amp;&amp;(i-=3DparseFlo=
at(t.css(e,"margin"+this))||0)}),i}var n=3D"Width"=3D=3D=3Di?["Left","Right=
"]:["Top","Bottom"],o=3Di.toLowerCase(),a=3D{innerWidth:t.fn.innerWidth,inn=
erHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outer=
Height};t.fn["inner"+i]=3Dfunction(e){return void 0=3D=3D=3De?a["inner"+i].=
call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["oute=
r"+i]=3Dfunction(e,n){return"number"!=3Dtypeof e?a["outer"+i].call(this,e):=
this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=
=3Dfunction(t){return this.add(null=3D=3Dt?this.prevObject:this.prevObject.=
filter(t))}),t.ui.keyCode=3D{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35=
,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGH=
T:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=3Dfunction(){var t=3D/([!"#$=
%&amp;'()*+,.\/:;&lt;=3D&gt;?@[\]^`{|}~])/g;return function(e){return e.rep=
lace(t,"\\$1")}}(),t.fn.labels=3Dfunction(){var e,i,s,n,o;return this[0].la=
bels&amp;&amp;this[0].labels.length?this.pushStack(this[0].labels):(n=3Dthi=
s.eq(0).parents("label"),s=3Dthis.attr("id"),s&amp;&amp;(e=3Dthis.eq(0).par=
ents().last(),o=3De.add(e.length?e.siblings():this.siblings()),i=3D"label[f=
or=3D'"+t.ui.escapeSelector(s)+"']",n=3Dn.add(o.find(i).addBack(i))),this.p=
ushStack(n))},t.fn.scrollParent=3Dfunction(e){var i=3Dthis.css("position"),=
s=3D"absolute"=3D=3D=3Di,n=3De?/(auto|scroll|hidden)/:/(auto|scroll)/,o=3Dt=
his.parents().filter(function(){var e=3Dt(this);return s&amp;&amp;"static"=
=3D=3D=3De.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+=
e.css("overflow-x"))}).eq(0);return"fixed"!=3D=3Di&amp;&amp;o.length?o:t(th=
is[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){=
var i=3Dt.attr(e,"tabindex"),s=3Dnull!=3Di;return(!s||i&gt;=3D0)&amp;&amp;t=
.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=3D0;return fun=
ction(){return this.each(function(){this.id||(this.id=3D"ui-id-"+ ++t)})}}(=
),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(=
this.id)&amp;&amp;t(this).removeAttr("id")})}}),t.widget("ui.accordion",{ve=
rsion:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":=
"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordi=
on-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"&gt; l=
i &gt; :first-child, &gt; :not(li):even",heightStyle:"auto",icons:{activeHe=
ader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,be=
foreActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide=
",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTo=
pWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"sho=
w",height:"show"},_create:function(){var e=3Dthis.options;this.prevShow=3Dt=
his.prevHide=3Dt(),this._addClass("ui-accordion","ui-widget ui-helper-reset=
"),this.element.attr("role","tablist"),e.collapsible||e.active!=3D=3D!1&amp=
;&amp;null!=3De.active||(e.active=3D0),this._processPanels(),0&gt;e.active&=
amp;&amp;(e.active+=3Dthis.headers.length),this._refresh()},_getCreateEvent=
Data:function(){return{header:this.active,panel:this.active.length?this.act=
ive.next():t()}},_createIcons:function(){var e,i,s=3Dthis.options.icons;s&a=
mp;&amp;(e=3Dt("&lt;span&gt;"),this._addClass(e,"ui-accordion-header-icon",=
"ui-icon "+s.header),e.prependTo(this.headers),i=3Dthis.active.children(".u=
i-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.=
activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:=
function(){this._removeClass(this.headers,"ui-accordion-icons"),this.header=
s.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t=
;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expande=
d aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcon=
s(),t=3Dthis.headers.next().css("display","").removeAttr("role aria-hidden =
aria-labelledby").removeUniqueId(),"content"!=3D=3Dthis.options.heightStyle=
&amp;&amp;t.css("height","")},_setOption:function(t,e){return"active"=3D=3D=
=3Dt?(this._activate(e),void 0):("event"=3D=3D=3Dt&amp;&amp;(this.options.e=
vent&amp;&amp;this._off(this.headers,this.options.event),this._setupEvents(=
e)),this._super(t,e),"collapsible"!=3D=3Dt||e||this.options.active!=3D=3D!1=
||this._activate(0),"icons"=3D=3D=3Dt&amp;&amp;(this._destroyIcons(),e&amp;=
&amp;this._createIcons()),void 0)},_setOptionDisabled:function(t){this._sup=
er(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state=
-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),nul=
l,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&amp;&amp;!e.c=
trlKey){var i=3Dt.ui.keyCode,s=3Dthis.headers.length,n=3Dthis.headers.index=
(e.target),o=3D!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=3Dthis.heade=
rs[(n+1)%s];break;case i.LEFT:case i.UP:o=3Dthis.headers[(n-1+s)%s];break;c=
ase i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=3Dthis.h=
eaders[0];break;case i.END:o=3Dthis.headers[s-1]}o&amp;&amp;(t(e.target).at=
tr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDe=
fault())}},_panelKeyDown:function(e){e.keyCode=3D=3D=3Dt.ui.keyCode.UP&amp;=
&amp;e.ctrlKey&amp;&amp;t(e.currentTarget).prev().trigger("focus")},refresh=
:function(){var e=3Dthis.options;this._processPanels(),e.active=3D=3D=3D!1&=
amp;&amp;e.collapsible=3D=3D=3D!0||!this.headers.length?(e.active=3D!1,this=
.active=3Dt()):e.active=3D=3D=3D!1?this._activate(0):this.active.length&amp=
;&amp;!t.contains(this.element[0],this.active[0])?this.headers.length=3D=3D=
=3Dthis.headers.find(".ui-state-disabled").length?(e.active=3D!1,this.activ=
e=3Dt()):this._activate(Math.max(0,e.active-1)):e.active=3Dthis.headers.ind=
ex(this.active),this._destroyIcons(),this._refresh()},_processPanels:functi=
on(){var t=3Dthis.headers,e=3Dthis.panels;this.headers=3Dthis.element.find(=
this.options.header),this._addClass(this.headers,"ui-accordion-header ui-ac=
cordion-header-collapsed","ui-state-default"),this.panels=3Dthis.headers.ne=
xt().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(thi=
s.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&amp;=
&amp;(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refre=
sh:function(){var e,i=3Dthis.options,s=3Di.heightStyle,n=3Dthis.element.par=
ent();this.active=3Dthis._findActive(i.active),this._addClass(this.active,"=
ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui=
-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordi=
on-content-active"),this.active.next().show(),this.headers.attr("role","tab=
").each(function(){var e=3Dt(this),i=3De.uniqueId().attr("id"),s=3De.next()=
,n=3Ds.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelle=
dby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr=
({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr=
({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-=
selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hid=
den":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),th=
is._setupEvents(i.event),"fill"=3D=3D=3Ds?(e=3Dn.height(),this.element.sibl=
ings(":visible").each(function(){var i=3Dt(this),s=3Di.css("position");"abs=
olute"!=3D=3Ds&amp;&amp;"fixed"!=3D=3Ds&amp;&amp;(e-=3Di.outerHeight(!0))})=
,this.headers.each(function(){e-=3Dt(this).outerHeight(!0)}),this.headers.n=
ext().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(t=
his).height()))}).css("overflow","auto")):"auto"=3D=3D=3Ds&amp;&amp;(e=3D0,=
this.headers.next().each(function(){var i=3Dt(this).is(":visible");i||t(thi=
s).show(),e=3DMath.max(e,t(this).css("height","").height()),i||t(this).hide=
()}).height(e))},_activate:function(e){var i=3Dthis._findActive(e)[0];i!=3D=
=3Dthis.active[0]&amp;&amp;(i=3Di||this.active[0],this._eventHandler({targe=
t:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){retur=
n"number"=3D=3Dtypeof e?this.headers.eq(e):t()},_setupEvents:function(e){va=
r i=3D{keydown:"_keydown"};e&amp;&amp;t.each(e.split(" "),function(t,e){i[e=
]=3D"_eventHandler"}),this._off(this.headers.add(this.headers.next())),this=
._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}=
),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandle=
r:function(e){var i,s,n=3Dthis.options,o=3Dthis.active,a=3Dt(e.currentTarge=
t),r=3Da[0]=3D=3D=3Do[0],h=3Dr&amp;&amp;n.collapsible,l=3Dh?t():a.next(),c=
=3Do.next(),u=3D{oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.pre=
ventDefault(),r&amp;&amp;!n.collapsible||this._trigger("beforeActivate",e,u=
)=3D=3D=3D!1||(n.active=3Dh?!1:this.headers.index(a),this.active=3Dr?t():a,=
this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-=
active"),n.icons&amp;&amp;(i=3Do.children(".ui-accordion-header-icon"),this=
._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)=
),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-=
accordion-header-active","ui-state-active"),n.icons&amp;&amp;(s=3Da.childre=
n(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._ad=
dClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-=
content-active")))},_toggle:function(e){var i=3De.newPanel,s=3Dthis.prevSho=
w.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,=
!0),this.prevShow=3Di,this.prevHide=3Ds,this.options.animate?this._animate(=
i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"t=
rue"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.l=
ength&amp;&amp;s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}=
):i.length&amp;&amp;this.headers.filter(function(){return 0=3D=3D=3DparseIn=
t(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","=
false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex=
:0})},_animate:function(t,e,i){var s,n,o,a=3Dthis,r=3D0,h=3Dt.css("box-sizi=
ng"),l=3Dt.length&amp;&amp;(!e.length||t.index()&lt;e.index()),c=3Dthis.opt=
ions.animate||{},u=3Dl&amp;&amp;c.down||c,d=3Dfunction(){a._toggleComplete(=
i)};return"number"=3D=3Dtypeof u&amp;&amp;(o=3Du),"string"=3D=3Dtypeof u&am=
p;&amp;(n=3Du),n=3Dn||u.easing||c.easing,o=3Do||u.duration||c.duration,e.le=
ngth?t.length?(s=3Dt.show().outerHeight(),e.animate(this.hideProps,{duratio=
n:o,easing:n,step:function(t,e){e.now=3DMath.round(t)}}),t.hide().animate(t=
his.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=3DMa=
th.round(t),"height"!=3D=3Di.prop?"content-box"=3D=3D=3Dh&amp;&amp;(r+=3Di.=
now):"content"!=3D=3Da.options.heightStyle&amp;&amp;(i.now=3DMath.round(s-e=
.outerHeight()-r),r=3D0)}}),void 0):e.animate(this.hideProps,o,n,d):t.anima=
te(this.showProps,o,n,d)},_toggleComplete:function(t){var e=3Dt.oldPanel,i=
=3De.prev();this._removeClass(e,"ui-accordion-content-active"),this._remove=
Class(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-coll=
apsed"),e.length&amp;&amp;(e.parent()[0].className=3De.parent()[0].classNam=
e),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=3Dfunction(t)=
{var e;try{e=3Dt.activeElement}catch(i){e=3Dt.body}return e||(e=3Dt.body),e=
.nodeName||(e=3Dt.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElem=
ent:"&lt;ul&gt;",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},ite=
ms:"&gt; *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",=
blur:null,focus:null,select:null},_create:function(){this.activeMenu=3Dthis=
.element,this.mouseHandled=3D!1,this.element.uniqueId().attr({role:this.opt=
ions.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-conten=
t"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"cl=
ick .ui-menu-item":function(e){var i=3Dt(e.target),s=3Dt(t.ui.safeActiveEle=
ment(this.document[0]));!this.mouseHandled&amp;&amp;i.not(".ui-state-disabl=
ed").length&amp;&amp;(this.select(e),e.isPropagationStopped()||(this.mouseH=
andled=3D!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":foc=
us")&amp;&amp;s.closest(".ui-menu").length&amp;&amp;(this.element.trigger("=
focus",[!0]),this.active&amp;&amp;1=3D=3D=3Dthis.active.parents(".ui-menu")=
.length&amp;&amp;clearTimeout(this.timer)))},"mouseenter .ui-menu-item":fun=
ction(e){if(!this.previousFilter){var i=3Dt(e.target).closest(".ui-menu-ite=
m"),s=3Dt(e.currentTarget);i[0]=3D=3D=3Ds[0]&amp;&amp;(this._removeClass(s.=
siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(=
e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:=
function(t,e){var i=3Dthis.active||this.element.find(this.options.items).eq=
(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=3D!t.=
contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&amp;&a=
mp;this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this=
.document,{click:function(t){this._closeOnDocumentClick(t)&amp;&amp;this.co=
llapseAll(t),this.mouseHandled=3D!1}})},_destroy:function(){var e=3Dthis.el=
ement.find(".ui-menu-item").removeAttr("role aria-disabled"),i=3De.children=
(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-h=
aspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu")=
.addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-=
disabled tabIndex").removeUniqueId().show(),i.children().each(function(){va=
r e=3Dt(this);e.data("ui-menu-submenu-caret")&amp;&amp;e.remove()})},_keydo=
wn:function(e){var i,s,n,o,a=3D!0;switch(e.keyCode){case t.ui.keyCode.PAGE_=
UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);=
break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.=
keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.pre=
vious(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.=
LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&amp;&amp;!t=
his.active.is(".ui-state-disabled")&amp;&amp;this.expand(e);break;case t.ui=
.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.ke=
yCode.ESCAPE:this.collapse(e);break;default:a=3D!1,s=3Dthis.previousFilter|=
|"",o=3D!1,n=3De.keyCode&gt;=3D96&amp;&amp;105&gt;=3De.keyCode?""+(e.keyCod=
e-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n=3D=3D=
=3Ds?o=3D!0:n=3Ds+n,i=3Dthis._filterMenuItems(n),i=3Do&amp;&amp;-1!=3D=3Di.=
index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||=
(n=3DString.fromCharCode(e.keyCode),i=3Dthis._filterMenuItems(n)),i.length?=
(this.focus(e,i),this.previousFilter=3Dn,this.filterTimer=3Dthis._delay(fun=
ction(){delete this.previousFilter},1e3)):delete this.previousFilter}a&amp;=
&amp;e.preventDefault()},_activate:function(t){this.active&amp;&amp;!this.a=
ctive.is(".ui-state-disabled")&amp;&amp;(this.active.children("[aria-haspop=
up=3D'true']").length?this.expand(t):this.select(t))},refresh:function(){va=
r e,i,s,n,o,a=3Dthis,r=3Dthis.options.icons.submenu,h=3Dthis.element.find(t=
his.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.fi=
nd(".ui-icon").length),s=3Dh.filter(":not(.ui-menu)").hide().attr({role:thi=
s.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function=
(){var e=3Dt(this),i=3De.prev(),s=3Dt("&lt;span&gt;").data("ui-menu-submenu=
-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopu=
p","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addCla=
ss(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=3Dh.add(this.eleme=
nt),i=3De.find(this.options.items),i.not(".ui-menu-item").each(function(){v=
ar e=3Dt(this);a._isDivider(e)&amp;&amp;a._addClass(e,"ui-menu-divider","ui=
-widget-content")}),n=3Di.not(".ui-menu-item, .ui-menu-divider"),o=3Dn.chil=
dren().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()})=
,this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.fil=
ter(".ui-state-disabled").attr("aria-disabled","true"),this.active&amp;&amp=
;!t.contains(this.element[0],this.active[0])&amp;&amp;this.blur()},_itemRol=
e:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_=
setOption:function(t,e){if("icons"=3D=3D=3Dt){var i=3Dthis.element.find(".u=
i-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClas=
s(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._=
super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui=
-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&amp;&amp=
;"focus"=3D=3D=3Dt.type),this._scrollIntoView(e),this.active=3De.first(),s=
=3Dthis.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-=
state-active"),this.options.role&amp;&amp;this.element.attr("aria-activedes=
cendant",s.attr("id")),n=3Dthis.active.parent().closest(".ui-menu-item").ch=
ildren(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&=
amp;&amp;"keydown"=3D=3D=3Dt.type?this._close():this.timer=3Dthis._delay(fu=
nction(){this._close()},this.delay),i=3De.children(".ui-menu"),i.length&amp=
;&amp;t&amp;&amp;/^mouse/.test(t.type)&amp;&amp;this._startOpening(i),this.=
activeMenu=3De.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:=
function(e){var i,s,n,o,a,r;this._hasScroll()&amp;&amp;(i=3DparseFloat(t.cs=
s(this.activeMenu[0],"borderTopWidth"))||0,s=3DparseFloat(t.css(this.active=
Menu[0],"paddingTop"))||0,n=3De.offset().top-this.activeMenu.offset().top-i=
-s,o=3Dthis.activeMenu.scrollTop(),a=3Dthis.activeMenu.height(),r=3De.outer=
Height(),0&gt;n?this.activeMenu.scrollTop(o+n):n+r&gt;a&amp;&amp;this.activ=
eMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),t=
his.active&amp;&amp;(this._removeClass(this.active.children(".ui-menu-item-=
wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}=
),this.active=3Dnull)},_startOpening:function(t){clearTimeout(this.timer),"=
true"=3D=3D=3Dt.attr("aria-hidden")&amp;&amp;(this.timer=3Dthis._delay(func=
tion(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=
=3Dt.extend({of:this.active},this.options.position);clearTimeout(this.timer=
),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("ari=
a-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","=
true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this=
.timer=3Dthis._delay(function(){var s=3Di?this.element:t(e&amp;&amp;e.targe=
t).closest(this.element.find(".ui-menu"));s.length||(s=3Dthis.element),this=
._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"=
ui-state-active"),this.activeMenu=3Ds},this.delay)},_close:function(t){t||(=
t=3Dthis.active?this.active.parent():this.element),t.find(".ui-menu").hide(=
).attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumen=
tClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivide=
r:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:functio=
n(t){var e=3Dthis.active&amp;&amp;this.active.parent().closest(".ui-menu-it=
em",this.element);e&amp;&amp;e.length&amp;&amp;(this._close(),this.focus(t,=
e))},expand:function(t){var e=3Dthis.active&amp;&amp;this.active.children("=
.ui-menu ").find(this.options.items).first();e&amp;&amp;e.length&amp;&amp;(=
this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:func=
tion(t){this._move("next","first",t)},previous:function(t){this._move("prev=
","last",t)},isFirstItem:function(){return this.active&amp;&amp;!this.activ=
e.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active=
&amp;&amp;!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,=
i){var s;this.active&amp;&amp;(s=3D"first"=3D=3D=3Dt||"last"=3D=3D=3Dt?this=
.active["first"=3D=3D=3Dt?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this=
.active[t+"All"](".ui-menu-item").eq(0)),s&amp;&amp;s.length&amp;&amp;this.=
active||(s=3Dthis.activeMenu.find(this.options.items)[e]()),this.focus(i,s)=
},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(th=
is._hasScroll()?(s=3Dthis.active.offset().top,n=3Dthis.element.height(),thi=
s.active.nextAll(".ui-menu-item").each(function(){return i=3Dt(this),0&gt;i=
.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this=
.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void =
0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem=
()||(this._hasScroll()?(s=3Dthis.active.offset().top,n=3Dthis.element.heigh=
t(),this.active.prevAll(".ui-menu-item").each(function(){return i=3Dt(this)=
,i.offset().top-s+n&gt;0}),this.focus(e,i)):this.focus(e,this.activeMenu.fi=
nd(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:=
function(){return this.element.outerHeight()&lt;this.element.prop("scrollHe=
ight")},select:function(e){this.active=3Dthis.active||t(e.target).closest("=
.ui-menu-item");var i=3D{item:this.active};this.active.has(".ui-menu").leng=
th||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:fu=
nction(e){var i=3De.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&amp;"),s=3DR=
egExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".u=
i-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-=
menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12=
.1",defaultElement:"&lt;input&gt;",options:{appendTo:null,autoFocus:!1,dela=
y:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"=
},source:null,change:null,close:null,focus:null,open:null,response:null,sea=
rch:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s=
,n=3Dthis.element[0].nodeName.toLowerCase(),o=3D"textarea"=3D=3D=3Dn,a=3D"i=
nput"=3D=3D=3Dn;
this.isMultiLine=3Do||!a&amp;&amp;this._isContentEditable(this.element),thi=
s.valueMethod=3Dthis.element[o||a?"val":"text"],this.isNewMenu=3D!0,this._a=
ddClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),th=
is._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))r=
eturn e=3D!0,s=3D!0,i=3D!0,void 0;e=3D!1,s=3D!1,i=3D!1;var o=3Dt.ui.keyCode=
;switch(n.keyCode){case o.PAGE_UP:e=3D!0,this._move("previousPage",n);break=
;case o.PAGE_DOWN:e=3D!0,this._move("nextPage",n);break;case o.UP:e=3D!0,th=
is._keyEvent("previous",n);break;case o.DOWN:e=3D!0,this._keyEvent("next",n=
);break;case o.ENTER:this.menu.active&amp;&amp;(e=3D!0,n.preventDefault(),t=
his.menu.select(n));break;case o.TAB:this.menu.active&amp;&amp;this.menu.se=
lect(n);break;case o.ESCAPE:this.menu.element.is(":visible")&amp;&amp;(this=
.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());brea=
k;default:i=3D!0,this._searchTimeout(n)}},keypress:function(s){if(e)return =
e=3D!1,(!this.isMultiLine||this.menu.element.is(":visible"))&amp;&amp;s.pre=
ventDefault(),void 0;if(!i){var n=3Dt.ui.keyCode;switch(s.keyCode){case n.P=
AGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("next=
Page",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:thi=
s._keyEvent("next",s)}}},input:function(t){return s?(s=3D!1,t.preventDefaul=
t(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selected=
Item=3Dnull,this.previous=3Dthis._value()},blur:function(t){return this.can=
celBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.=
close(t),this._change(t),void 0)}}),this._initSource(),this.menu=3Dt("&lt;u=
l&gt;").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"=
),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(t=
his.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=
=3D!0,this._delay(function(){delete this.cancelBlur,this.element[0]!=3D=3Dt=
.ui.safeActiveElement(this.document[0])&amp;&amp;this.element.trigger("focu=
s")})},menufocus:function(e,i){var s,n;return this.isNewMenu&amp;&amp;(this=
.isNewMenu=3D!1,e.originalEvent&amp;&amp;/^mouse/.test(e.originalEvent.type=
))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).t=
rigger(e.originalEvent)}),void 0):(n=3Di.item.data("ui-autocomplete-item"),=
!1!=3D=3Dthis._trigger("focus",e,{item:n})&amp;&amp;e.originalEvent&amp;&am=
p;/^key/.test(e.originalEvent.type)&amp;&amp;this._value(n.value),s=3Di.ite=
m.attr("aria-label")||n.value,s&amp;&amp;t.trim(s).length&amp;&amp;(this.li=
veRegion.children().hide(),t("&lt;div&gt;").text(s).appendTo(this.liveRegio=
n)),void 0)},menuselect:function(e,i){var s=3Di.item.data("ui-autocomplete-=
item"),n=3Dthis.previous;this.element[0]!=3D=3Dt.ui.safeActiveElement(this.=
document[0])&amp;&amp;(this.element.trigger("focus"),this.previous=3Dn,this=
._delay(function(){this.previous=3Dn,this.selectedItem=3Ds})),!1!=3D=3Dthis=
._trigger("select",e,{item:s})&amp;&amp;this._value(s.value),this.term=3Dth=
is._value(),this.close(e),this.selectedItem=3Ds}}),this.liveRegion=3Dt("&lt=
;div&gt;",{role:"status","aria-live":"assertive","aria-relevant":"additions=
"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui=
-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){t=
his.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout=
(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.=
remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e=
),"source"=3D=3D=3Dt&amp;&amp;this._initSource(),"appendTo"=3D=3D=3Dt&amp;&=
amp;this.menu.element.appendTo(this._appendTo()),"disabled"=3D=3D=3Dt&amp;&=
amp;e&amp;&amp;this.xhr&amp;&amp;this.xhr.abort()},_isEventTargetInWidget:f=
unction(e){var i=3Dthis.menu.element[0];return e.target=3D=3D=3Dthis.elemen=
t[0]||e.target=3D=3D=3Di||t.contains(i,e.target)},_closeOnClickOutside:func=
tion(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){=
var e=3Dthis.options.appendTo;return e&amp;&amp;(e=3De.jquery||e.nodeType?t=
(e):this.document.find(e).eq(0)),e&amp;&amp;e[0]||(e=3Dthis.element.closest=
(".ui-front, dialog")),e.length||(e=3Dthis.document[0].body),e},_initSource=
:function(){var e,i,s=3Dthis;t.isArray(this.options.source)?(e=3Dthis.optio=
ns.source,this.source=3Dfunction(i,s){s(t.ui.autocomplete.filter(e,i.term))=
}):"string"=3D=3Dtypeof this.options.source?(i=3Dthis.options.source,this.s=
ource=3Dfunction(e,n){s.xhr&amp;&amp;s.xhr.abort(),s.xhr=3Dt.ajax({url:i,da=
ta:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):=
this.source=3Dthis.options.source},_searchTimeout:function(t){clearTimeout(=
this.searching),this.searching=3Dthis._delay(function(){var e=3Dthis.term=
=3D=3D=3Dthis._value(),i=3Dthis.menu.element.is(":visible"),s=3Dt.altKey||t=
.ctrlKey||t.metaKey||t.shiftKey;(!e||e&amp;&amp;!i&amp;&amp;!s)&amp;&amp;(t=
his.selectedItem=3Dnull,this.search(null,t))},this.options.delay)},search:f=
unction(t,e){return t=3Dnull!=3Dt?t:this._value(),this.term=3Dthis._value()=
,t.length&lt;this.options.minLength?this.close(e):this._trigger("search",e)=
!=3D=3D!1?this._search(t):void 0},_search:function(t){this.pending++,this._=
addClass("ui-autocomplete-loading"),this.cancelSearch=3D!1,this.source({ter=
m:t},this._response())},_response:function(){var e=3D++this.requestIndex;re=
turn t.proxy(function(t){e=3D=3D=3Dthis.requestIndex&amp;&amp;this.__respon=
se(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loadi=
ng")},this)},__response:function(t){t&amp;&amp;(t=3Dthis._normalize(t)),thi=
s._trigger("response",null,{content:t}),!this.options.disabled&amp;&amp;t&a=
mp;&amp;t.length&amp;&amp;!this.cancelSearch?(this._suggest(t),this._trigge=
r("open")):this._close()},close:function(t){this.cancelSearch=3D!0,this._cl=
ose(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.e=
lement.is(":visible")&amp;&amp;(this.menu.element.hide(),this.menu.blur(),t=
his.isNewMenu=3D!0,this._trigger("close",t))},_change:function(t){this.prev=
ious!=3D=3Dthis._value()&amp;&amp;this._trigger("change",t,{item:this.selec=
tedItem})},_normalize:function(e){return e.length&amp;&amp;e[0].label&amp;&=
amp;e[0].value?e:t.map(e,function(e){return"string"=3D=3Dtypeof e?{label:e,=
value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},=
_suggest:function(e){var i=3Dthis.menu.element.empty();this._renderMenu(i,e=
),this.isNewMenu=3D!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.pos=
ition(t.extend({of:this.element},this.options.position)),this.options.autoF=
ocus&amp;&amp;this.menu.next(),this._on(this.document,{mousedown:"_closeOnC=
lickOutside"})},_resizeMenu:function(){var t=3Dthis.menu.element;t.outerWid=
th(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_render=
Menu:function(e,i){var s=3Dthis;t.each(i,function(t,i){s._renderItemData(e,=
i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-a=
utocomplete-item",e)},_renderItem:function(e,i){return t("&lt;li&gt;").appe=
nd(t("&lt;div&gt;").text(i.label)).appendTo(e)},_move:function(t,e){return =
this.menu.element.is(":visible")?this.menu.isFirstItem()&amp;&amp;/^previou=
s/.test(t)||this.menu.isLastItem()&amp;&amp;/^next/.test(t)?(this.isMultiLi=
ne||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0=
):(this.search(null,e),void 0)},widget:function(){return this.menu.element}=
,_value:function(){return this.valueMethod.apply(this.element,arguments)},_=
keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible")=
)&amp;&amp;(this._move(t,e),e.preventDefault())},_isContentEditable:functio=
n(t){if(!t.length)return!1;var e=3Dt.prop("contentEditable");return"inherit=
"=3D=3D=3De?this._isContentEditable(t.parent()):"true"=3D=3D=3De}}),t.exten=
d(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*=
+?.,\\\^$|#\s]/g,"\\$&amp;")},filter:function(e,i){var s=3DRegExp(t.ui.auto=
complete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.la=
bel||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options=
:{messages:{noResults:"No search results.",results:function(t){return t+(t&=
gt;1?" results are":" result is")+" available, use up and down arrow keys t=
o navigate."}}},__response:function(e){var i;this._superApply(arguments),th=
is.options.disabled||this.cancelSearch||(i=3De&amp;&amp;e.length?this.optio=
ns.messages.results(e.length):this.options.messages.noResults,this.liveRegi=
on.children().hide(),t("&lt;div&gt;").text(i).appendTo(this.liveRegion))}})=
,t.ui.autocomplete;var g=3D/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgr=
oup",{version:"1.12.1",defaultElement:"&lt;div&gt;",options:{direction:"hor=
izontal",disabled:null,onlyVisible:!0,items:{button:"input[type=3Dbutton], =
input[type=3Dsubmit], input[type=3Dreset], button, a",controlgroupLabel:".u=
i-controlgroup-label",checkboxradio:"input[type=3D'checkbox'], input[type=
=3D'radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:func=
tion(){this._enhance()},_enhance:function(){this.element.attr("role","toolb=
ar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),t=
his.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr=
("role"),this.options.items.controlgroupLabel&amp;&amp;this.element.find(th=
is.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents")=
.contents().unwrap()},_initWidgets:function(){var e=3Dthis,i=3D[];t.each(th=
is.options.items,function(s,n){var o,a=3D{};return n?"controlgroupLabel"=3D=
=3D=3Ds?(o=3De.element.find(n),o.each(function(){var e=3Dt(this);e.children=
(".ui-controlgroup-label-contents").length||e.contents().wrapAll("&lt;span =
class=3D'ui-controlgroup-label-contents'&gt;&lt;/span&gt;")}),e._addClass(o=
,null,"ui-widget ui-widget-content ui-state-default"),i=3Di.concat(o.get())=
,void 0):(t.fn[s]&amp;&amp;(a=3De["_"+s+"Options"]?e["_"+s+"Options"]("midd=
le"):{classes:{}},e.element.find(n).each(function(){var n=3Dt(this),o=3Dn[s=
]("instance"),r=3Dt.widget.extend({},a);if("button"!=3D=3Ds||!n.parent(".ui=
-spinner").length){o||(o=3Dn[s]()[s]("instance")),o&amp;&amp;(r.classes=3De=
._resolveClassesValues(r.classes,o)),n[s](r);var h=3Dn[s]("widget");t.data(=
h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):=
void 0}),this.childWidgets=3Dt(t.unique(i)),this._addClass(this.childWidget=
s,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.e=
ach(function(){var i=3Dt(this),s=3Di.data("ui-controlgroup-data");s&amp;&am=
p;s[e]&amp;&amp;s[e]()})},_updateCornerClass:function(t,e){var i=3D"ui-corn=
er-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=3Dt=
his._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i=
),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i=3D"vert=
ical"=3D=3D=3Dthis.options.direction,s=3D{classes:{}};return s.classes[e]=
=3D{middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bot=
tom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=
=3Dthis._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up=
"]=3D"",e.classes["ui-spinner-down"]=3D"",e},_buttonOptions:function(t){ret=
urn this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function=
(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmen=
uOptions:function(t){var e=3D"vertical"=3D=3D=3Dthis.options.direction;retu=
rn{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-se=
lectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"=
+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")=
},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-butt=
on-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-o=
pen":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_=
resolveClassesValues:function(e,i){var s=3D{};return t.each(e,function(n){v=
ar o=3Di.options.classes[n]||"";o=3Dt.trim(o.replace(g,"")),s[n]=3D(o+" "+e=
[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"=3D=
=3D=3Dt&amp;&amp;this._removeClass("ui-controlgroup-"+this.options.directio=
n),this._super(t,e),"disabled"=3D=3D=3Dt?(this._callChildMethod(e?"disable"=
:"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=3Dth=
is;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction=
),"horizontal"=3D=3D=3Dthis.options.direction&amp;&amp;this._addClass(null,=
"ui-helper-clearfix"),this._initWidgets(),e=3Dthis.childWidgets,this.option=
s.onlyVisible&amp;&amp;(e=3De.filter(":visible")),e.length&amp;&amp;(t.each=
(["first","last"],function(t,s){var n=3De[s]().data("ui-controlgroup-data")=
;if(n&amp;&amp;i["_"+n.widgetName+"Options"]){var o=3Di["_"+n.widgetName+"O=
ptions"](1=3D=3D=3De.length?"only":s);o.classes=3Di._resolveClassesValues(o=
.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}=
),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.fo=
rmResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,cl=
asses:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui=
-corner-all"}},_getCreateOptions:function(){var e,i,s=3Dthis,n=3Dthis._supe=
r()||{};return this._readType(),i=3Dthis.element.labels(),this.label=3Dt(i[=
i.length-1]),this.label.length||t.error("No label found for checkboxradio w=
idget"),this.originalLabel=3D"",this.label.contents().not(this.element[0]).=
each(function(){s.originalLabel+=3D3=3D=3D=3Dthis.nodeType?t(this).text():t=
his.outerHTML}),this.originalLabel&amp;&amp;(n.label=3Dthis.originalLabel),=
e=3Dthis.element[0].disabled,null!=3De&amp;&amp;(n.disabled=3De),n},_create=
:function(){var t=3Dthis.element[0].checked;this._bindFormResetHandler(),nu=
ll=3D=3Dthis.options.disabled&amp;&amp;(this.options.disabled=3Dthis.elemen=
t[0].disabled),this._setOption("disabled",this.options.disabled),this._addC=
lass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.=
label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"=3D=3D=3Dthis.=
type&amp;&amp;this._addClass(this.label,"ui-checkboxradio-radio-label"),thi=
s.options.label&amp;&amp;this.options.label!=3D=3Dthis.originalLabel?this._=
updateLabel():this.originalLabel&amp;&amp;(this.options.label=3Dthis.origin=
alLabel),this._enhance(),t&amp;&amp;(this._addClass(this.label,"ui-checkbox=
radio-checked","ui-state-active"),this.icon&amp;&amp;this._addClass(this.ic=
on,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function=
(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:f=
unction(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus=
")}})},_readType:function(){var e=3Dthis.element[0].nodeName.toLowerCase();=
this.type=3Dthis.element[0].type,"input"=3D=3D=3De&amp;&amp;/radio|checkbox=
/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName=
=3D"+e+" and element.type=3D"+this.type)},_enhance:function(){this._updateI=
con(this.element[0].checked)},widget:function(){return this.label},_getRadi=
oGroup:function(){var e,i=3Dthis.element[0].name,s=3D"input[name=3D'"+t.ui.=
escapeSelector(i)+"']";return i?(e=3Dthis.form.length?t(this.form[0].elemen=
ts).filter(s):t(s).filter(function(){return 0=3D=3D=3Dt(this).form().length=
}),e.not(this.element)):t([])},_toggleClasses:function(){var e=3Dthis.eleme=
nt[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-s=
tate-active",e),this.options.icon&amp;&amp;"checkbox"=3D=3D=3Dthis.type&amp=
;&amp;this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e).=
_toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"=3D=3D=3Dthis.type&a=
mp;&amp;this._getRadioGroup().each(function(){var e=3Dt(this).checkboxradio=
("instance");e&amp;&amp;e._removeClass(e.label,"ui-checkboxradio-checked","=
ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),thi=
s.icon&amp;&amp;(this.icon.remove(),this.iconSpace.remove())},_setOption:fu=
nction(t,e){return"label"!=3D=3Dt||e?(this._super(t,e),"disabled"=3D=3D=3Dt=
?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].=
disabled=3De,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(=
e){var i=3D"ui-icon ui-icon-background ";this.options.icon?(this.icon||(thi=
s.icon=3Dt("&lt;span&gt;"),this.iconSpace=3Dt("&lt;span&gt; &lt;/span&gt;")=
,this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"=
=3D=3D=3Dthis.type?(i+=3De?"ui-icon-check ui-state-checked":"ui-icon-blank"=
,this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+=3D=
"ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this=
._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.pr=
ependTo(this.label).after(this.iconSpace)):void 0!=3D=3Dthis.icon&amp;&amp;=
(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel=
:function(){var t=3Dthis.label.contents().not(this.element[0]);this.icon&am=
p;&amp;(t=3Dt.not(this.icon[0])),this.iconSpace&amp;&amp;(t=3Dt.not(this.ic=
onSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:func=
tion(){var t=3Dthis.element[0].checked,e=3Dthis.element[0].disabled;this._u=
pdateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-st=
ate-active",t),null!=3D=3Dthis.options.label&amp;&amp;this._updateLabel(),e=
!=3D=3Dthis.options.disabled&amp;&amp;this._setOptions({disabled:e})}}]),t.=
ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"&lt=
;button&gt;",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,i=
con:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOption=
s:function(){var t,e=3Dthis._super()||{};return this.isInput=3Dthis.element=
.is("input"),t=3Dthis.element[0].disabled,null!=3Dt&amp;&amp;(e.disabled=3D=
t),this.originalLabel=3Dthis.isInput?this.element.val():this.element.html()=
,this.originalLabel&amp;&amp;(e.label=3Dthis.originalLabel),e},_create:func=
tion(){!this.option.showLabel&amp;!this.options.icon&amp;&amp;(this.options=
.showLabel=3D!0),null=3D=3Dthis.options.disabled&amp;&amp;(this.options.dis=
abled=3Dthis.element[0].disabled||!1),this.hasTitle=3D!!this.element.attr("=
title"),this.options.label&amp;&amp;this.options.label!=3D=3Dthis.originalL=
abel&amp;&amp;(this.isInput?this.element.val(this.options.label):this.eleme=
nt.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._=
setOption("disabled",this.options.disabled),this._enhance(),this.element.is=
("a")&amp;&amp;this._on({keyup:function(e){e.keyCode=3D=3D=3Dt.ui.keyCode.S=
PACE&amp;&amp;(e.preventDefault(),this.element[0].click?this.element[0].cli=
ck():this.element.trigger("click"))}})},_enhance:function(){this.element.is=
("button")||this.element.attr("role","button"),this.options.icon&amp;&amp;(=
this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateT=
ooltip:function(){this.title=3Dthis.element.attr("title"),this.options.show=
Label||this.title||this.element.attr("title",this.options.label)},_updateIc=
on:function(e,i){var s=3D"iconPosition"!=3D=3De,n=3Ds?this.options.iconPosi=
tion:i,o=3D"top"=3D=3D=3Dn||"bottom"=3D=3D=3Dn;this.icon?s&amp;&amp;this._r=
emoveClass(this.icon,null,this.options.icon):(this.icon=3Dt("&lt;span&gt;")=
,this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabe=
l||this._addClass("ui-button-icon-only")),s&amp;&amp;this._addClass(this.ic=
on,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-=
icon-block"),this.iconSpace&amp;&amp;this.iconSpace.remove()):(this.iconSpa=
ce||(this.iconSpace=3Dt("&lt;span&gt; &lt;/span&gt;"),this._addClass(this.i=
conSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wige=
t-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.=
removeAttr("role"),this.icon&amp;&amp;this.icon.remove(),this.iconSpace&amp=
;&amp;this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title=
")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"befor=
e":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|=
bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){va=
r e=3Dvoid 0=3D=3D=3Dt.showLabel?this.options.showLabel:t.showLabel,i=3Dvoi=
d 0=3D=3D=3Dt.icon?this.options.icon:t.icon;e||i||(t.showLabel=3D!0),this._=
super(t)},_setOption:function(t,e){"icon"=3D=3D=3Dt&amp;&amp;(e?this._updat=
eIcon(t,e):this.icon&amp;&amp;(this.icon.remove(),this.iconSpace&amp;&amp;t=
his.iconSpace.remove())),"iconPosition"=3D=3D=3Dt&amp;&amp;this._updateIcon=
(t,e),"showLabel"=3D=3D=3Dt&amp;&amp;(this._toggleClass("ui-button-icon-onl=
y",null,!e),this._updateTooltip()),"label"=3D=3D=3Dt&amp;&amp;(this.isInput=
?this.element.val(e):(this.element.html(e),this.icon&amp;&amp;(this._attach=
Icon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosi=
tion)))),this._super(t,e),"disabled"=3D=3D=3Dt&amp;&amp;(this._toggleClass(=
null,"ui-state-disabled",e),this.element[0].disabled=3De,e&amp;&amp;this.el=
ement.blur())},refresh:function(){var t=3Dthis.element.is("input, button")?=
this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!=3D=
=3Dthis.options.disabled&amp;&amp;this._setOptions({disabled:t}),this._upda=
teTooltip()}}),t.uiBackCompat!=3D=3D!1&amp;&amp;(t.widget("ui.button",t.ui.=
button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:funct=
ion(){this.options.showLabel&amp;&amp;!this.options.text&amp;&amp;(this.opt=
ions.showLabel=3Dthis.options.text),!this.options.showLabel&amp;&amp;this.o=
ptions.text&amp;&amp;(this.options.text=3Dthis.options.showLabel),this.opti=
ons.icon||!this.options.icons.primary&amp;&amp;!this.options.icons.secondar=
y?this.options.icon&amp;&amp;(this.options.icons.primary=3Dthis.options.ico=
n):this.options.icons.primary?this.options.icon=3Dthis.options.icons.primar=
y:(this.options.icon=3Dthis.options.icons.secondary,this.options.iconPositi=
on=3D"end"),this._super()},_setOption:function(t,e){return"text"=3D=3D=3Dt?=
(this._super("showLabel",e),void 0):("showLabel"=3D=3D=3Dt&amp;&amp;(this.o=
ptions.text=3De),"icon"=3D=3D=3Dt&amp;&amp;(this.options.icons.primary=3De)=
,"icons"=3D=3D=3Dt&amp;&amp;(e.primary?(this._super("icon",e.primary),this.=
_super("iconPosition","beginning")):e.secondary&amp;&amp;(this._super("icon=
",e.secondary),this._super("iconPosition","end"))),this._superApply(argumen=
ts),void 0)}}),t.fn.button=3Dfunction(e){return function(){return!this.leng=
th||this.length&amp;&amp;"INPUT"!=3D=3Dthis[0].tagName||this.length&amp;&am=
p;"INPUT"=3D=3D=3Dthis[0].tagName&amp;&amp;"checkbox"!=3D=3Dthis.attr("type=
")&amp;&amp;"radio"!=3D=3Dthis.attr("type")?e.apply(this,arguments):(t.ui.c=
heckboxradio||t.error("Checkboxradio widget missing"),0=3D=3D=3Darguments.l=
ength?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments=
))}}(t.fn.button),t.fn.buttonset=3Dfunction(){return t.ui.controlgroup||t.e=
rror("Controlgroup widget missing"),"option"=3D=3D=3Darguments[0]&amp;&amp;=
"items"=3D=3D=3Darguments[1]&amp;&amp;arguments[2]?this.controlgroup.apply(=
this,[arguments[0],"items.button",arguments[2]]):"option"=3D=3D=3Darguments=
[0]&amp;&amp;"items"=3D=3D=3Darguments[1]?this.controlgroup.apply(this,[arg=
uments[0],"items.button"]):("object"=3D=3Dtypeof arguments[0]&amp;&amp;argu=
ments[0].items&amp;&amp;(arguments[0].items=3D{button:arguments[0].items}),=
this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datep=
icker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"has=
Datepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDe=
faults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:f=
unction(e,i){var s,n,o;s=3De.nodeName.toLowerCase(),n=3D"div"=3D=3D=3Ds||"s=
pan"=3D=3D=3Ds,e.id||(this.uuid+=3D1,e.id=3D"dp"+this.uuid),o=3Dthis._newIn=
st(t(e),n),o.settings=3Dt.extend({},i||{}),"input"=3D=3D=3Ds?this._connectD=
atepicker(e,o):n&amp;&amp;this._inlineDatepicker(e,o)},_newInst:function(e,=
i){var s=3De[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input=
:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inli=
ne:i,dpDiv:i?n(t("&lt;div class=3D'"+this._inlineClass+" ui-datepicker ui-w=
idget ui-widget-content ui-helper-clearfix ui-corner-all'&gt;&lt;/div&gt;")=
):this.dpDiv}},_connectDatepicker:function(e,i){var s=3Dt(e);i.append=3Dt([=
]),i.trigger=3Dt([]),s.hasClass(this.markerClassName)||(this._attachments(s=
,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keyp=
ress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(=
e,"datepicker",i),i.settings.disabled&amp;&amp;this._disableDatepicker(e))}=
,_attachments:function(e,i){var s,n,o,a=3Dthis._get(i,"appendText"),r=3Dthi=
s._get(i,"isRTL");i.append&amp;&amp;i.append.remove(),a&amp;&amp;(i.append=
=3Dt("&lt;span class=3D'"+this._appendClass+"'&gt;"+a+"&lt;/span&gt;"),e[r?=
"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&=
amp;&amp;i.trigger.remove(),s=3Dthis._get(i,"showOn"),("focus"=3D=3D=3Ds||"=
both"=3D=3D=3Ds)&amp;&amp;e.on("focus",this._showDatepicker),("button"=3D=
=3D=3Ds||"both"=3D=3D=3Ds)&amp;&amp;(n=3Dthis._get(i,"buttonText"),o=3Dthis=
._get(i,"buttonImage"),i.trigger=3Dt(this._get(i,"buttonImageOnly")?t("&lt;=
img/&gt;").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("&lt;=
button type=3D'button'&gt;&lt;/button&gt;").addClass(this._triggerClass).ht=
ml(o?t("&lt;img/&gt;").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"=
](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepicke=
rShowing&amp;&amp;t.datepicker._lastInput=3D=3D=3De[0]?t.datepicker._hideDa=
tepicker():t.datepicker._datepickerShowing&amp;&amp;t.datepicker._lastInput=
!=3D=3De[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[=
0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(thi=
s._get(t,"autoSize")&amp;&amp;!t.inline){var e,i,s,n,o=3Dnew Date(2009,11,2=
0),a=3Dthis._get(t,"dateFormat");a.match(/[DM]/)&amp;&amp;(e=3Dfunction(t){=
for(i=3D0,s=3D0,n=3D0;t.length&gt;n;n++)t[n].length&gt;i&amp;&amp;(i=3Dt[n]=
.length,s=3Dn);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames=
":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"da=
yNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).le=
ngth)}},_inlineDatepicker:function(e,i){var s=3Dt(e);s.hasClass(this.marker=
ClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"dat=
epicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepic=
ker(i),this._updateAlternate(i),i.settings.disabled&amp;&amp;this._disableD=
atepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,=
i,s,n,o){var r,h,l,c,u,d=3Dthis._dialogInst;return d||(this.uuid+=3D1,r=3D"=
dp"+this.uuid,this._dialogInput=3Dt("&lt;input type=3D'text' id=3D'"+r+"' s=
tyle=3D'position: absolute; top: -100px; width: 0px;'/&gt;"),this._dialogIn=
put.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=3Dt=
his._dialogInst=3Dthis._newInst(this._dialogInput,!1),d.settings=3D{},t.dat=
a(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=3Di&amp;&amp;=
i.constructor=3D=3D=3DDate?this._formatDate(d,i):i,this._dialogInput.val(i)=
,this._pos=3Do?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=3Ddocument.d=
ocumentElement.clientWidth,l=3Ddocument.documentElement.clientHeight,c=3Ddo=
cument.documentElement.scrollLeft||document.body.scrollLeft,u=3Ddocument.do=
cumentElement.scrollTop||document.body.scrollTop,this._pos=3D[h/2-100+c,l/2=
-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this.=
_pos[1]+"px"),d.settings.onSelect=3Ds,this._inDialog=3D!0,this.dpDiv.addCla=
ss(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&=
amp;&amp;t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),=
this},_destroyDatepicker:function(e){var i,s=3Dt(e),n=3Dt.data(e,"datepicke=
r");s.hasClass(this.markerClassName)&amp;&amp;(i=3De.nodeName.toLowerCase()=
,t.removeData(e,"datepicker"),"input"=3D=3D=3Di?(n.append.remove(),n.trigge=
r.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepi=
cker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("=
keyup",this._doKeyUp)):("div"=3D=3D=3Di||"span"=3D=3D=3Di)&amp;&amp;s.remov=
eClass(this.markerClassName).empty(),m=3D=3D=3Dn&amp;&amp;(m=3Dnull))},_ena=
bleDatepicker:function(e){var i,s,n=3Dt(e),o=3Dt.data(e,"datepicker");n.has=
Class(this.markerClassName)&amp;&amp;(i=3De.nodeName.toLowerCase(),"input"=
=3D=3D=3Di?(e.disabled=3D!1,o.trigger.filter("button").each(function(){this=
.disabled=3D!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"=
=3D=3D=3Di||"span"=3D=3D=3Di)&amp;&amp;(s=3Dn.children("."+this._inlineClas=
s),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepick=
er-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledIn=
puts=3Dt.map(this._disabledInputs,function(t){return t=3D=3D=3De?null:t}))}=
,_disableDatepicker:function(e){var i,s,n=3Dt(e),o=3Dt.data(e,"datepicker")=
;n.hasClass(this.markerClassName)&amp;&amp;(i=3De.nodeName.toLowerCase(),"i=
nput"=3D=3D=3Di?(e.disabled=3D!0,o.trigger.filter("button").each(function()=
{this.disabled=3D!0}).end().filter("img").css({opacity:"0.5",cursor:"defaul=
t"})):("div"=3D=3D=3Di||"span"=3D=3D=3Di)&amp;&amp;(s=3Dn.children("."+this=
._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui=
-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._d=
isabledInputs=3Dt.map(this._disabledInputs,function(t){return t=3D=3D=3De?n=
ull:t}),this._disabledInputs[this._disabledInputs.length]=3De)},_isDisabled=
Datepicker:function(t){if(!t)return!1;for(var e=3D0;this._disabledInputs.le=
ngth&gt;e;e++)if(this._disabledInputs[e]=3D=3D=3Dt)return!0;return!1},_getI=
nst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing in=
stance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,=
o,r,h,l=3Dthis._getInst(e);return 2=3D=3D=3Darguments.length&amp;&amp;"stri=
ng"=3D=3Dtypeof i?"defaults"=3D=3D=3Di?t.extend({},t.datepicker._defaults):=
l?"all"=3D=3D=3Di?t.extend({},l.settings):this._get(l,i):null:(n=3Di||{},"s=
tring"=3D=3Dtypeof i&amp;&amp;(n=3D{},n[i]=3Ds),l&amp;&amp;(this._curInst=
=3D=3D=3Dl&amp;&amp;this._hideDatepicker(),o=3Dthis._getDateDatepicker(e,!0=
),r=3Dthis._getMinMaxDate(l,"min"),h=3Dthis._getMinMaxDate(l,"max"),a(l.set=
tings,n),null!=3D=3Dr&amp;&amp;void 0!=3D=3Dn.dateFormat&amp;&amp;void 0=3D=
=3D=3Dn.minDate&amp;&amp;(l.settings.minDate=3Dthis._formatDate(l,r)),null!=
=3D=3Dh&amp;&amp;void 0!=3D=3Dn.dateFormat&amp;&amp;void 0=3D=3D=3Dn.maxDat=
e&amp;&amp;(l.settings.maxDate=3Dthis._formatDate(l,h)),"disabled"in n&amp;=
&amp;(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this=
._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlte=
rnate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e=
,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=3Dt=
his._getInst(t);e&amp;&amp;this._updateDatepicker(e)},_setDateDatepicker:fu=
nction(t,e){var i=3Dthis._getInst(t);i&amp;&amp;(this._setDate(i,e),this._u=
pdateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t=
,e){var i=3Dthis._getInst(t);return i&amp;&amp;!i.inline&amp;&amp;this._set=
DateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,=
n,o=3Dt.datepicker._getInst(e.target),a=3D!0,r=3Do.dpDiv.is(".ui-datepicker=
-rtl");if(o._keyEvent=3D!0,t.datepicker._datepickerShowing)switch(e.keyCode=
){case 9:t.datepicker._hideDatepicker(),a=3D!1;break;case 13:return n=3Dt("=
td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.d=
pDiv),n[0]&amp;&amp;t.datepicker._selectDay(e.target,o.selectedMonth,o.sele=
ctedYear,n[0]),i=3Dt.datepicker._get(o,"onSelect"),i?(s=3Dt.datepicker._for=
matDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepi=
cker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker=
._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.da=
tepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e=
.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(=
o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&amp;&amp;t.datepi=
cker._clearDate(e.target),a=3De.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey=
||e.metaKey)&amp;&amp;t.datepicker._gotoToday(e.target),a=3De.ctrlKey||e.me=
taKey;break;case 37:(e.ctrlKey||e.metaKey)&amp;&amp;t.datepicker._adjustDat=
e(e.target,r?1:-1,"D"),a=3De.ctrlKey||e.metaKey,e.originalEvent.altKey&amp;=
&amp;t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"step=
BigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKe=
y||e.metaKey)&amp;&amp;t.datepicker._adjustDate(e.target,-7,"D"),a=3De.ctrl=
Key||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&amp;&amp;t.datepicker._=
adjustDate(e.target,r?-1:1,"D"),a=3De.ctrlKey||e.metaKey,e.originalEvent.al=
tKey&amp;&amp;t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._ge=
t(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:=
(e.ctrlKey||e.metaKey)&amp;&amp;t.datepicker._adjustDate(e.target,7,"D"),a=
=3De.ctrlKey||e.metaKey;break;default:a=3D!1}else 36=3D=3D=3De.keyCode&amp;=
&amp;e.ctrlKey?t.datepicker._showDatepicker(this):a=3D!1;a&amp;&amp;(e.prev=
entDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=3Dt.da=
tepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=
=3Dt.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=3DStrin=
g.fromCharCode(null=3D=3De.charCode?e.keyCode:e.charCode),e.ctrlKey||e.meta=
Key||" "&gt;s||!i||i.indexOf(s)&gt;-1):void 0},_doKeyUp:function(e){var i,s=
=3Dt.datepicker._getInst(e.target);if(s.input.val()!=3D=3Ds.lastVal)try{i=
=3Dt.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input=
.val():null,t.datepicker._getFormatConfig(s)),i&amp;&amp;(t.datepicker._set=
DateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatep=
icker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=3De.target||=
e,"input"!=3D=3De.nodeName.toLowerCase()&amp;&amp;(e=3Dt("input",e.parentNo=
de)[0]),!t.datepicker._isDisabledDatepicker(e)&amp;&amp;t.datepicker._lastI=
nput!=3D=3De){var s,n,o,r,h,l,c;s=3Dt.datepicker._getInst(e),t.datepicker._=
curInst&amp;&amp;t.datepicker._curInst!=3D=3Ds&amp;&amp;(t.datepicker._curI=
nst.dpDiv.stop(!0,!0),s&amp;&amp;t.datepicker._datepickerShowing&amp;&amp;t=
.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=3Dt.datepick=
er._get(s,"beforeShow"),o=3Dn?n.apply(e,[e,s]):{},o!=3D=3D!1&amp;&amp;(a(s.=
settings,o),s.lastVal=3Dnull,t.datepicker._lastInput=3De,t.datepicker._setD=
ateFromField(s),t.datepicker._inDialog&amp;&amp;(e.value=3D""),t.datepicker=
._pos||(t.datepicker._pos=3Dt.datepicker._findPos(e),t.datepicker._pos[1]+=
=3De.offsetHeight),r=3D!1,t(e).parents().each(function(){return r|=3D"fixed=
"=3D=3D=3Dt(this).css("position"),!r}),h=3D{left:t.datepicker._pos[0],top:t=
.datepicker._pos[1]},t.datepicker._pos=3Dnull,s.dpDiv.empty(),s.dpDiv.css({=
position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDat=
epicker(s),h=3Dt.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.dat=
epicker._inDialog&amp;&amp;t.blockUI?"static":r?"fixed":"absolute",display:=
"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=3Dt.datepicker._get(s=
,"showAnim"),c=3Dt.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(=
e))+1),t.datepicker._datepickerShowing=3D!0,t.effects&amp;&amp;t.effects.ef=
fect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"sh=
ow"](l?c:null),t.datepicker._shouldFocusInput(s)&amp;&amp;s.input.trigger("=
focus"),t.datepicker._curInst=3Ds))
}},_updateDatepicker:function(e){this.maxRows=3D4,m=3De,e.dpDiv.empty().app=
end(this._generateHTML(e)),this._attachHandlers(e);var i,s=3Dthis._getNumbe=
rOfMonths(e),n=3Ds[1],a=3D17,r=3De.dpDiv.find("."+this._dayOverClass+" a");=
r.length&gt;0&amp;&amp;o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker=
-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n&gt;1&amp=
;&amp;e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dp=
Div[(1!=3D=3Ds[0]||1!=3D=3Ds[1]?"add":"remove")+"Class"]("ui-datepicker-mul=
ti"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-=
rtl"),e=3D=3D=3Dt.datepicker._curInst&amp;&amp;t.datepicker._datepickerShow=
ing&amp;&amp;t.datepicker._shouldFocusInput(e)&amp;&amp;e.input.trigger("fo=
cus"),e.yearshtml&amp;&amp;(i=3De.yearshtml,setTimeout(function(){i=3D=3D=
=3De.yearshtml&amp;&amp;e.yearshtml&amp;&amp;e.dpDiv.find("select.ui-datepi=
cker-year:first").replaceWith(e.yearshtml),i=3De.yearshtml=3Dnull},0))},_sh=
ouldFocusInput:function(t){return t.input&amp;&amp;t.input.is(":visible")&a=
mp;&amp;!t.input.is(":disabled")&amp;&amp;!t.input.is(":focus")},_checkOffs=
et:function(e,i,s){var n=3De.dpDiv.outerWidth(),o=3De.dpDiv.outerHeight(),a=
=3De.input?e.input.outerWidth():0,r=3De.input?e.input.outerHeight():0,h=3Dd=
ocument.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=3Ddocu=
ment.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.le=
ft-=3Dthis._get(e,"isRTL")?n-a:0,i.left-=3Ds&amp;&amp;i.left=3D=3D=3De.inpu=
t.offset().left?t(document).scrollLeft():0,i.top-=3Ds&amp;&amp;i.top=3D=3D=
=3De.input.offset().top+r?t(document).scrollTop():0,i.left-=3DMath.min(i.le=
ft,i.left+n&gt;h&amp;&amp;h&gt;n?Math.abs(i.left+n-h):0),i.top-=3DMath.min(=
i.top,i.top+o&gt;l&amp;&amp;l&gt;o?Math.abs(o+r):0),i},_findPos:function(e)=
{for(var i,s=3Dthis._getInst(e),n=3Dthis._get(s,"isRTL");e&amp;&amp;("hidde=
n"=3D=3D=3De.type||1!=3D=3De.nodeType||t.expr.filters.hidden(e));)e=3De[n?"=
previousSibling":"nextSibling"];return i=3Dt(e).offset(),[i.left,i.top]},_h=
ideDatepicker:function(e){var i,s,n,o,a=3Dthis._curInst;!a||e&amp;&amp;a!=
=3D=3Dt.data(e,"datepicker")||this._datepickerShowing&amp;&amp;(i=3Dthis._g=
et(a,"showAnim"),s=3Dthis._get(a,"duration"),n=3Dfunction(){t.datepicker._t=
idyDialog(a)},t.effects&amp;&amp;(t.effects.effect[i]||t.effects[i])?a.dpDi=
v.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"=3D=3D=
=3Di?"slideUp":"fadeIn"=3D=3D=3Di?"fadeOut":"hide"](i?s:null,n),i||n(),this=
._datepickerShowing=3D!1,o=3Dthis._get(a,"onClose"),o&amp;&amp;o.apply(a.in=
put?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=3Dnull,th=
is._inDialog&amp;&amp;(this._dialogInput.css({position:"absolute",left:"0",=
top:"-100px"}),t.blockUI&amp;&amp;(t.unblockUI(),t("body").append(this.dpDi=
v))),this._inDialog=3D!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this=
._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function=
(e){if(t.datepicker._curInst){var i=3Dt(e.target),s=3Dt.datepicker._getInst=
(i[0]);(i[0].id!=3D=3Dt.datepicker._mainDivId&amp;&amp;0=3D=3D=3Di.parents(=
"#"+t.datepicker._mainDivId).length&amp;&amp;!i.hasClass(t.datepicker.marke=
rClassName)&amp;&amp;!i.closest("."+t.datepicker._triggerClass).length&amp;=
&amp;t.datepicker._datepickerShowing&amp;&amp;(!t.datepicker._inDialog||!t.=
blockUI)||i.hasClass(t.datepicker.markerClassName)&amp;&amp;t.datepicker._c=
urInst!=3D=3Ds)&amp;&amp;t.datepicker._hideDatepicker()}},_adjustDate:funct=
ion(e,i,s){var n=3Dt(e),o=3Dthis._getInst(n[0]);this._isDisabledDatepicker(=
n[0])||(this._adjustInstDate(o,i+("M"=3D=3D=3Ds?this._get(o,"showCurrentAtP=
os"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=3Dt(e=
),n=3Dthis._getInst(s[0]);this._get(n,"gotoCurrent")&amp;&amp;n.currentDay?=
(n.selectedDay=3Dn.currentDay,n.drawMonth=3Dn.selectedMonth=3Dn.currentMont=
h,n.drawYear=3Dn.selectedYear=3Dn.currentYear):(i=3Dnew Date,n.selectedDay=
=3Di.getDate(),n.drawMonth=3Dn.selectedMonth=3Di.getMonth(),n.drawYear=3Dn.=
selectedYear=3Di.getFullYear()),this._notifyChange(n),this._adjustDate(s)},=
_selectMonthYear:function(e,i,s){var n=3Dt(e),o=3Dthis._getInst(n[0]);o["se=
lected"+("M"=3D=3D=3Ds?"Month":"Year")]=3Do["draw"+("M"=3D=3D=3Ds?"Month":"=
Year")]=3DparseInt(i.options[i.selectedIndex].value,10),this._notifyChange(=
o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=3Dt(e);t(n).ha=
sClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=3Dthi=
s._getInst(a[0]),o.selectedDay=3Do.currentDay=3Dt("a",n).html(),o.selectedM=
onth=3Do.currentMonth=3Di,o.selectedYear=3Do.currentYear=3Ds,this._selectDa=
te(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clea=
rDate:function(e){var i=3Dt(e);this._selectDate(i,"")},_selectDate:function=
(e,i){var s,n=3Dt(e),o=3Dthis._getInst(n[0]);i=3Dnull!=3Di?i:this._formatDa=
te(o),o.input&amp;&amp;o.input.val(i),this._updateAlternate(o),s=3Dthis._ge=
t(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&amp;&amp;o=
.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDate=
picker(),this._lastInput=3Do.input[0],"object"!=3Dtypeof o.input[0]&amp;&am=
p;o.input.trigger("focus"),this._lastInput=3Dnull)},_updateAlternate:functi=
on(e){var i,s,n,o=3Dthis._get(e,"altField");o&amp;&amp;(i=3Dthis._get(e,"al=
tFormat")||this._get(e,"dateFormat"),s=3Dthis._getDate(e),n=3Dthis.formatDa=
te(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=
=3Dt.getDay();return[e&gt;0&amp;&amp;6&gt;e,""]},iso8601Week:function(t){va=
r e,i=3Dnew Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7=
)),e=3Di.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/8=
64e5)/7)+1},parseDate:function(e,i,s){if(null=3D=3De||null=3D=3Di)throw"Inv=
alid arguments";if(i=3D"object"=3D=3Dtypeof i?""+i:i+"",""=3D=3D=3Di)return=
 null;var n,o,a,r,h=3D0,l=3D(s?s.shortYearCutoff:null)||this._defaults.shor=
tYearCutoff,c=3D"string"!=3Dtypeof l?l:(new Date).getFullYear()%100+parseIn=
t(l,10),u=3D(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=3D(s?s=
.dayNames:null)||this._defaults.dayNames,p=3D(s?s.monthNamesShort:null)||th=
is._defaults.monthNamesShort,f=3D(s?s.monthNames:null)||this._defaults.mont=
hNames,g=3D-1,m=3D-1,_=3D-1,v=3D-1,b=3D!1,y=3Dfunction(t){var i=3De.length&=
gt;n+1&amp;&amp;e.charAt(n+1)=3D=3D=3Dt;return i&amp;&amp;n++,i},w=3Dfuncti=
on(t){var e=3Dy(t),s=3D"@"=3D=3D=3Dt?14:"!"=3D=3D=3Dt?20:"y"=3D=3D=3Dt&amp;=
&amp;e?4:"o"=3D=3D=3Dt?3:2,n=3D"y"=3D=3D=3Dt?s:1,o=3DRegExp("^\\d{"+n+","+s=
+"}"),a=3Di.substring(h).match(o);if(!a)throw"Missing number at position "+=
h;return h+=3Da[0].length,parseInt(a[0],10)},k=3Dfunction(e,s,n){var o=3D-1=
,a=3Dt.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return=
-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=3De[1];return =
i.substr(h,s.length).toLowerCase()=3D=3D=3Ds.toLowerCase()?(o=3De[0],h+=3Ds=
.length,!1):void 0}),-1!=3D=3Do)return o+1;throw"Unknown name at position "=
+h},x=3Dfunction(){if(i.charAt(h)!=3D=3De.charAt(n))throw"Unexpected litera=
l at position "+h;h++};for(n=3D0;e.length&gt;n;n++)if(b)"'"!=3D=3De.charAt(=
n)||y("'")?x():b=3D!1;else switch(e.charAt(n)){case"d":_=3Dw("d");break;cas=
e"D":k("D",u,d);break;case"o":v=3Dw("o");break;case"m":m=3Dw("m");break;cas=
e"M":m=3Dk("M",p,f);break;case"y":g=3Dw("y");break;case"@":r=3Dnew Date(w("=
@")),g=3Dr.getFullYear(),m=3Dr.getMonth()+1,_=3Dr.getDate();break;case"!":r=
=3Dnew Date((w("!")-this._ticksTo1970)/1e4),g=3Dr.getFullYear(),m=3Dr.getMo=
nth()+1,_=3Dr.getDate();break;case"'":y("'")?x():b=3D!0;break;default:x()}i=
f(i.length&gt;h&amp;&amp;(a=3Di.substr(h),!/^\s+/.test(a)))throw"Extra/unpa=
rsed characters found in date: "+a;if(-1=3D=3D=3Dg?g=3D(new Date).getFullYe=
ar():100&gt;g&amp;&amp;(g+=3D(new Date).getFullYear()-(new Date).getFullYea=
r()%100+(c&gt;=3Dg?0:-100)),v&gt;-1)for(m=3D1,_=3Dv;;){if(o=3Dthis._getDays=
InMonth(g,m-1),o&gt;=3D_)break;m++,_-=3Do}if(r=3Dthis._daylightSavingAdjust=
(new Date(g,m-1,_)),r.getFullYear()!=3D=3Dg||r.getMonth()+1!=3D=3Dm||r.getD=
ate()!=3D=3D_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M=
 yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"=
D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!=
",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor=
(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!=
e)return"";var s,n=3D(i?i.dayNamesShort:null)||this._defaults.dayNamesShort=
,o=3D(i?i.dayNames:null)||this._defaults.dayNames,a=3D(i?i.monthNamesShort:=
null)||this._defaults.monthNamesShort,r=3D(i?i.monthNames:null)||this._defa=
ults.monthNames,h=3Dfunction(e){var i=3Dt.length&gt;s+1&amp;&amp;t.charAt(s=
+1)=3D=3D=3De;return i&amp;&amp;s++,i},l=3Dfunction(t,e,i){var s=3D""+e;if(=
h(t))for(;i&gt;s.length;)s=3D"0"+s;return s},c=3Dfunction(t,e,i,s){return h=
(t)?s[e]:i[e]},u=3D"",d=3D!1;if(e)for(s=3D0;t.length&gt;s;s++)if(d)"'"!=3D=
=3Dt.charAt(s)||h("'")?u+=3Dt.charAt(s):d=3D!1;else switch(t.charAt(s)){cas=
e"d":u+=3Dl("d",e.getDate(),2);break;case"D":u+=3Dc("D",e.getDay(),n,o);bre=
ak;case"o":u+=3Dl("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.g=
etDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);brea=
k;case"m":u+=3Dl("m",e.getMonth()+1,2);break;case"M":u+=3Dc("M",e.getMonth(=
),a,r);break;case"y":u+=3Dh("y")?e.getFullYear():(10&gt;e.getFullYear()%100=
?"0":"")+e.getFullYear()%100;break;case"@":u+=3De.getTime();break;case"!":u=
+=3D1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+=3D"'":d=3D!0;=
break;default:u+=3Dt.charAt(s)}return u},_possibleChars:function(t){var e,i=
=3D"",s=3D!1,n=3Dfunction(i){var s=3Dt.length&gt;e+1&amp;&amp;t.charAt(e+1)=
=3D=3D=3Di;return s&amp;&amp;e++,s};for(e=3D0;t.length&gt;e;e++)if(s)"'"!=
=3D=3Dt.charAt(e)||n("'")?i+=3Dt.charAt(e):s=3D!1;else switch(t.charAt(e)){=
case"d":case"m":case"y":case"@":i+=3D"0123456789";break;case"D":case"M":ret=
urn null;case"'":n("'")?i+=3D"'":s=3D!0;break;default:i+=3Dt.charAt(e)}retu=
rn i},_get:function(t,e){return void 0!=3D=3Dt.settings[e]?t.settings[e]:th=
is._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!=3D=3Dt.l=
astVal){var i=3Dthis._get(t,"dateFormat"),s=3Dt.lastVal=3Dt.input?t.input.v=
al():null,n=3Dthis._getDefaultDate(t),o=3Dn,a=3Dthis._getFormatConfig(t);tr=
y{o=3Dthis.parseDate(i,s,a)||n}catch(r){s=3De?"":s}t.selectedDay=3Do.getDat=
e(),t.drawMonth=3Dt.selectedMonth=3Do.getMonth(),t.drawYear=3Dt.selectedYea=
r=3Do.getFullYear(),t.currentDay=3Ds?o.getDate():0,t.currentMonth=3Ds?o.get=
Month():0,t.currentYear=3Ds?o.getFullYear():0,this._adjustInstDate(t)}},_ge=
tDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(=
t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var=
 n=3Dfunction(t){var e=3Dnew Date;return e.setDate(e.getDate()+t),e},o=3Dfu=
nction(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat=
"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=3D(i.toLowerCase=
().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=3Dn.getFullYear()=
,a=3Dn.getMonth(),r=3Dn.getDate(),h=3D/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/=
g,l=3Dh.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=3DparseInt(l[1],10=
);break;case"w":case"W":r+=3D7*parseInt(l[1],10);break;case"m":case"M":a+=
=3DparseInt(l[1],10),r=3DMath.min(r,t.datepicker._getDaysInMonth(o,a));brea=
k;case"y":case"Y":o+=3DparseInt(l[1],10),r=3DMath.min(r,t.datepicker._getDa=
ysInMonth(o,a))}l=3Dh.exec(i)}return new Date(o,a,r)},a=3Dnull=3D=3Di||""=
=3D=3D=3Di?s:"string"=3D=3Dtypeof i?o(i):"number"=3D=3Dtypeof i?isNaN(i)?s:=
n(i):new Date(i.getTime());return a=3Da&amp;&amp;"Invalid Date"=3D=3D""+a?s=
:a,a&amp;&amp;(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseco=
nds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){re=
turn t?(t.setHours(t.getHours()&gt;12?t.getHours()+2:0),t):null},_setDate:f=
unction(t,e,i){var s=3D!e,n=3Dt.selectedMonth,o=3Dt.selectedYear,a=3Dthis._=
restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=3Dt.curre=
ntDay=3Da.getDate(),t.drawMonth=3Dt.selectedMonth=3Dt.currentMonth=3Da.getM=
onth(),t.drawYear=3Dt.selectedYear=3Dt.currentYear=3Da.getFullYear(),n=3D=
=3D=3Dt.selectedMonth&amp;&amp;o=3D=3D=3Dt.selectedYear||i||this._notifyCha=
nge(t),this._adjustInstDate(t),t.input&amp;&amp;t.input.val(s?"":this._form=
atDate(t))},_getDate:function(t){var e=3D!t.currentYear||t.input&amp;&amp;"=
"=3D=3D=3Dt.input.val()?null:this._daylightSavingAdjust(new Date(t.currentY=
ear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var=
 i=3Dthis._get(e,"stepMonths"),s=3D"#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.f=
ind("[data-handler]").map(function(){var e=3D{prev:function(){t.datepicker.=
_adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},=
hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepick=
er._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+th=
is.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},sel=
ectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},se=
lectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t=
(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler=
")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b=
,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=3Dnew Date,B=3Dthis._daylightSav=
ingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=3Dthis._get=
(t,"isRTL"),j=3Dthis._get(t,"showButtonPanel"),q=3Dthis._get(t,"hideIfNoPre=
vNext"),K=3Dthis._get(t,"navigationAsDateFormat"),U=3Dthis._getNumberOfMont=
hs(t),V=3Dthis._get(t,"showCurrentAtPos"),$=3Dthis._get(t,"stepMonths"),X=
=3D1!=3D=3DU[0]||1!=3D=3DU[1],G=3Dthis._daylightSavingAdjust(t.currentDay?n=
ew Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=3D=
this._getMinMaxDate(t,"min"),J=3Dthis._getMinMaxDate(t,"max"),Z=3Dt.drawMon=
th-V,te=3Dt.drawYear;if(0&gt;Z&amp;&amp;(Z+=3D12,te--),J)for(e=3Dthis._dayl=
ightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDat=
e())),e=3DQ&amp;&amp;Q&gt;e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1)=
)&gt;e;)Z--,0&gt;Z&amp;&amp;(Z=3D11,te--);for(t.drawMonth=3DZ,t.drawYear=3D=
te,i=3Dthis._get(t,"prevText"),i=3DK?this.formatDate(i,this._daylightSaving=
Adjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=3Dthis._canAdjustM=
onth(t,-1,te,Z)?"&lt;a class=3D'ui-datepicker-prev ui-corner-all' data-hand=
ler=3D'prev' data-event=3D'click' title=3D'"+i+"'&gt;&lt;span class=3D'ui-i=
con ui-icon-circle-triangle-"+(Y?"e":"w")+"'&gt;"+i+"&lt;/span&gt;&lt;/a&gt=
;":q?"":"&lt;a class=3D'ui-datepicker-prev ui-corner-all ui-state-disabled'=
 title=3D'"+i+"'&gt;&lt;span class=3D'ui-icon ui-icon-circle-triangle-"+(Y?=
"e":"w")+"'&gt;"+i+"&lt;/span&gt;&lt;/a&gt;",n=3Dthis._get(t,"nextText"),n=
=3DK?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this.=
_getFormatConfig(t)):n,o=3Dthis._canAdjustMonth(t,1,te,Z)?"&lt;a class=3D'u=
i-datepicker-next ui-corner-all' data-handler=3D'next' data-event=3D'click'=
 title=3D'"+n+"'&gt;&lt;span class=3D'ui-icon ui-icon-circle-triangle-"+(Y?=
"w":"e")+"'&gt;"+n+"&lt;/span&gt;&lt;/a&gt;":q?"":"&lt;a class=3D'ui-datepi=
cker-next ui-corner-all ui-state-disabled' title=3D'"+n+"'&gt;&lt;span clas=
s=3D'ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'&gt;"+n+"&lt;/span&gt;=
&lt;/a&gt;",a=3Dthis._get(t,"currentText"),r=3Dthis._get(t,"gotoCurrent")&a=
mp;&amp;t.currentDay?G:B,a=3DK?this.formatDate(a,r,this._getFormatConfig(t)=
):a,h=3Dt.inline?"":"&lt;button type=3D'button' class=3D'ui-datepicker-clos=
e ui-state-default ui-priority-primary ui-corner-all' data-handler=3D'hide'=
 data-event=3D'click'&gt;"+this._get(t,"closeText")+"&lt;/button&gt;",l=3Dj=
?"&lt;div class=3D'ui-datepicker-buttonpane ui-widget-content'&gt;"+(Y?h:""=
)+(this._isInRange(t,r)?"&lt;button type=3D'button' class=3D'ui-datepicker-=
current ui-state-default ui-priority-secondary ui-corner-all' data-handler=
=3D'today' data-event=3D'click'&gt;"+a+"&lt;/button&gt;":"")+(Y?"":h)+"&lt;=
/div&gt;":"",c=3DparseInt(this._get(t,"firstDay"),10),c=3DisNaN(c)?0:c,u=3D=
this._get(t,"showWeek"),d=3Dthis._get(t,"dayNames"),p=3Dthis._get(t,"dayNam=
esMin"),f=3Dthis._get(t,"monthNames"),g=3Dthis._get(t,"monthNamesShort"),m=
=3Dthis._get(t,"beforeShowDay"),_=3Dthis._get(t,"showOtherMonths"),v=3Dthis=
._get(t,"selectOtherMonths"),b=3Dthis._getDefaultDate(t),y=3D"",k=3D0;U[0]&=
gt;k;k++){for(x=3D"",this.maxRows=3D4,C=3D0;U[1]&gt;C;C++){if(D=3Dthis._day=
lightSavingAdjust(new Date(te,Z,t.selectedDay)),I=3D" ui-corner-all",T=3D""=
,X){if(T+=3D"&lt;div class=3D'ui-datepicker-group",U[1]&gt;1)switch(C){case=
 0:T+=3D" ui-datepicker-group-first",I=3D" ui-corner-"+(Y?"right":"left");b=
reak;case U[1]-1:T+=3D" ui-datepicker-group-last",I=3D" ui-corner-"+(Y?"lef=
t":"right");break;default:T+=3D" ui-datepicker-group-middle",I=3D""}T+=3D"'=
&gt;"}for(T+=3D"&lt;div class=3D'ui-datepicker-header ui-widget-header ui-h=
elper-clearfix"+I+"'&gt;"+(/all|left/.test(I)&amp;&amp;0=3D=3D=3Dk?Y?o:s:""=
)+(/all|right/.test(I)&amp;&amp;0=3D=3D=3Dk?Y?s:o:"")+this._generateMonthYe=
arHeader(t,Z,te,Q,J,k&gt;0||C&gt;0,f,g)+"&lt;/div&gt;&lt;table class=3D'ui-=
datepicker-calendar'&gt;&lt;thead&gt;"+"&lt;tr&gt;",P=3Du?"&lt;th class=3D'=
ui-datepicker-week-col'&gt;"+this._get(t,"weekHeader")+"&lt;/th&gt;":"",w=
=3D0;7&gt;w;w++)M=3D(w+c)%7,P+=3D"&lt;th scope=3D'col'"+((w+c+6)%7&gt;=3D5?=
" class=3D'ui-datepicker-week-end'":"")+"&gt;"+"&lt;span title=3D'"+d[M]+"'=
&gt;"+p[M]+"&lt;/span&gt;&lt;/th&gt;";for(T+=3DP+"&lt;/tr&gt;&lt;/thead&gt;=
&lt;tbody&gt;",S=3Dthis._getDaysInMonth(te,Z),te=3D=3D=3Dt.selectedYear&amp=
;&amp;Z=3D=3D=3Dt.selectedMonth&amp;&amp;(t.selectedDay=3DMath.min(t.select=
edDay,S)),H=3D(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=3DMath.ceil((H+S)/7)=
,O=3DX?this.maxRows&gt;z?this.maxRows:z:z,this.maxRows=3DO,A=3Dthis._daylig=
htSavingAdjust(new Date(te,Z,1-H)),N=3D0;O&gt;N;N++){for(T+=3D"&lt;tr&gt;",=
W=3Du?"&lt;td class=3D'ui-datepicker-week-col'&gt;"+this._get(t,"calculateW=
eek")(A)+"&lt;/td&gt;":"",w=3D0;7&gt;w;w++)E=3Dm?m.apply(t.input?t.input[0]=
:null,[A]):[!0,""],F=3DA.getMonth()!=3D=3DZ,L=3DF&amp;&amp;!v||!E[0]||Q&amp=
;&amp;Q&gt;A||J&amp;&amp;A&gt;J,W+=3D"&lt;td class=3D'"+((w+c+6)%7&gt;=3D5?=
" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTim=
e()=3D=3D=3DD.getTime()&amp;&amp;Z=3D=3D=3Dt.selectedMonth&amp;&amp;t._keyE=
vent||b.getTime()=3D=3D=3DA.getTime()&amp;&amp;b.getTime()=3D=3D=3DD.getTim=
e()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-di=
sabled":"")+(F&amp;&amp;!_?"":" "+E[1]+(A.getTime()=3D=3D=3DG.getTime()?" "=
+this._currentClass:"")+(A.getTime()=3D=3D=3DB.getTime()?" ui-datepicker-to=
day":""))+"'"+(F&amp;&amp;!_||!E[2]?"":" title=3D'"+E[2].replace(/'/g,"&amp=
;#39;")+"'")+(L?"":" data-handler=3D'selectDay' data-event=3D'click' data-m=
onth=3D'"+A.getMonth()+"' data-year=3D'"+A.getFullYear()+"'")+"&gt;"+(F&amp=
;&amp;!_?"&amp;#xa0;":L?"&lt;span class=3D'ui-state-default'&gt;"+A.getDate=
()+"&lt;/span&gt;":"&lt;a class=3D'ui-state-default"+(A.getTime()=3D=3D=3DB=
.getTime()?" ui-state-highlight":"")+(A.getTime()=3D=3D=3DG.getTime()?" ui-=
state-active":"")+(F?" ui-priority-secondary":"")+"' href=3D'#'&gt;"+A.getD=
ate()+"&lt;/a&gt;")+"&lt;/td&gt;",A.setDate(A.getDate()+1),A=3Dthis._daylig=
htSavingAdjust(A);T+=3DW+"&lt;/tr&gt;"}Z++,Z&gt;11&amp;&amp;(Z=3D0,te++),T+=
=3D"&lt;/tbody&gt;&lt;/table&gt;"+(X?"&lt;/div&gt;"+(U[0]&gt;0&amp;&amp;C=
=3D=3D=3DU[1]-1?"&lt;div class=3D'ui-datepicker-row-break'&gt;&lt;/div&gt;"=
:""):""),x+=3DT}y+=3Dx}return y+=3Dl,t._keyEvent=3D!1,y},_generateMonthYear=
Header:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=3Dthis._get(t,"chang=
eMonth"),_=3Dthis._get(t,"changeYear"),v=3Dthis._get(t,"showMonthAfterYear"=
),b=3D"&lt;div class=3D'ui-datepicker-title'&gt;",y=3D"";if(o||!m)y+=3D"&lt=
;span class=3D'ui-datepicker-month'&gt;"+a[e]+"&lt;/span&gt;";else{for(h=3D=
s&amp;&amp;s.getFullYear()=3D=3D=3Di,l=3Dn&amp;&amp;n.getFullYear()=3D=3D=
=3Di,y+=3D"&lt;select class=3D'ui-datepicker-month' data-handler=3D'selectM=
onth' data-event=3D'change'&gt;",c=3D0;12&gt;c;c++)(!h||c&gt;=3Ds.getMonth(=
))&amp;&amp;(!l||n.getMonth()&gt;=3Dc)&amp;&amp;(y+=3D"&lt;option value=3D'=
"+c+"'"+(c=3D=3D=3De?" selected=3D'selected'":"")+"&gt;"+r[c]+"&lt;/option&=
gt;");y+=3D"&lt;/select&gt;"}if(v||(b+=3Dy+(!o&amp;&amp;m&amp;&amp;_?"":"&a=
mp;#xa0;")),!t.yearshtml)if(t.yearshtml=3D"",o||!_)b+=3D"&lt;span class=3D'=
ui-datepicker-year'&gt;"+i+"&lt;/span&gt;";else{for(u=3Dthis._get(t,"yearRa=
nge").split(":"),d=3D(new Date).getFullYear(),p=3Dfunction(t){var e=3Dt.mat=
ch(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(=
t,10):parseInt(t,10);return isNaN(e)?d:e},f=3Dp(u[0]),g=3DMath.max(f,p(u[1]=
||"")),f=3Ds?Math.max(f,s.getFullYear()):f,g=3Dn?Math.min(g,n.getFullYear()=
):g,t.yearshtml+=3D"&lt;select class=3D'ui-datepicker-year' data-handler=3D=
'selectYear' data-event=3D'change'&gt;";g&gt;=3Df;f++)t.yearshtml+=3D"&lt;o=
ption value=3D'"+f+"'"+(f=3D=3D=3Di?" selected=3D'selected'":"")+"&gt;"+f+"=
&lt;/option&gt;";t.yearshtml+=3D"&lt;/select&gt;",b+=3Dt.yearshtml,t.yearsh=
tml=3Dnull}return b+=3Dthis._get(t,"yearSuffix"),v&amp;&amp;(b+=3D(!o&amp;&=
amp;m&amp;&amp;_?"":"&amp;#xa0;")+y),b+=3D"&lt;/div&gt;"},_adjustInstDate:f=
unction(t,e,i){var s=3Dt.selectedYear+("Y"=3D=3D=3Di?e:0),n=3Dt.selectedMon=
th+("M"=3D=3D=3Di?e:0),o=3DMath.min(t.selectedDay,this._getDaysInMonth(s,n)=
)+("D"=3D=3D=3Di?e:0),a=3Dthis._restrictMinMax(t,this._daylightSavingAdjust=
(new Date(s,n,o)));t.selectedDay=3Da.getDate(),t.drawMonth=3Dt.selectedMont=
h=3Da.getMonth(),t.drawYear=3Dt.selectedYear=3Da.getFullYear(),("M"=3D=3D=
=3Di||"Y"=3D=3D=3Di)&amp;&amp;this._notifyChange(t)},_restrictMinMax:functi=
on(t,e){var i=3Dthis._getMinMaxDate(t,"min"),s=3Dthis._getMinMaxDate(t,"max=
"),n=3Di&amp;&amp;i&gt;e?i:e;return s&amp;&amp;n&gt;s?s:n},_notifyChange:fu=
nction(t){var e=3Dthis._get(t,"onChangeMonthYear");e&amp;&amp;e.apply(t.inp=
ut?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonth=
s:function(t){var e=3Dthis._get(t,"numberOfMonths");return null=3D=3De?[1,1=
]:"number"=3D=3Dtypeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this.=
_determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e)=
{return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirs=
tDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:=
function(t,e,i,s){var n=3Dthis._getNumberOfMonths(t),o=3Dthis._daylightSavi=
ngAdjust(new Date(i,s+(0&gt;e?e:n[0]*n[1]),1));return 0&gt;e&amp;&amp;o.set=
Date(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,=
o)},_isInRange:function(t,e){var i,s,n=3Dthis._getMinMaxDate(t,"min"),o=3Dt=
his._getMinMaxDate(t,"max"),a=3Dnull,r=3Dnull,h=3Dthis._get(t,"yearRange");=
return h&amp;&amp;(i=3Dh.split(":"),s=3D(new Date).getFullYear(),a=3DparseI=
nt(i[0],10),r=3DparseInt(i[1],10),i[0].match(/[+\-].*/)&amp;&amp;(a+=3Ds),i=
[1].match(/[+\-].*/)&amp;&amp;(r+=3Ds)),(!n||e.getTime()&gt;=3Dn.getTime())=
&amp;&amp;(!o||e.getTime()&lt;=3Do.getTime())&amp;&amp;(!a||e.getFullYear()=
&gt;=3Da)&amp;&amp;(!r||r&gt;=3De.getFullYear())},_getFormatConfig:function=
(t){var e=3Dthis._get(t,"shortYearCutoff");return e=3D"string"!=3Dtypeof e?=
e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesSh=
ort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthName=
sShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}=
},_formatDate:function(t,e,i,s){e||(t.currentDay=3Dt.selectedDay,t.currentM=
onth=3Dt.selectedMonth,t.currentYear=3Dt.selectedYear);var n=3De?"object"=
=3D=3Dtypeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylight=
SavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return th=
is.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn=
.datepicker=3Dfunction(e){if(!this.length)return this;t.datepicker.initiali=
zed||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepi=
cker.initialized=3D!0),0=3D=3D=3Dt("#"+t.datepicker._mainDivId).length&amp;=
&amp;t("body").append(t.datepicker.dpDiv);var i=3DArray.prototype.slice.cal=
l(arguments,1);return"string"!=3Dtypeof e||"isDisabled"!=3D=3De&amp;&amp;"g=
etDate"!=3D=3De&amp;&amp;"widget"!=3D=3De?"option"=3D=3D=3De&amp;&amp;2=3D=
=3D=3Darguments.length&amp;&amp;"string"=3D=3Dtypeof arguments[1]?t.datepic=
ker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(f=
unction(){"string"=3D=3Dtypeof e?t.datepicker["_"+e+"Datepicker"].apply(t.d=
atepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.date=
picker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datep=
icker=3Dnew s,t.datepicker.initialized=3D!1,t.datepicker.uuid=3D(new Date).=
getTime(),t.datepicker.version=3D"1.12.1",t.datepicker,t.ui.ie=3D!!/msie [\=
w.]+/.exec(navigator.userAgent.toLowerCase());var _=3D!1;t(document).on("mo=
useup",function(){_=3D!1}),t.widget("ui.mouse",{version:"1.12.1",options:{c=
ancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseI=
nit:function(){var e=3Dthis;this.element.on("mousedown."+this.widgetName,fu=
nction(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){=
return!0=3D=3D=3Dt.data(i.target,e.widgetName+".preventClickEvent")?(t.remo=
veData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagati=
on(),!1):void 0}),this.started=3D!1},_mouseDestroy:function(){this.element.=
off("."+this.widgetName),this._mouseMoveDelegate&amp;&amp;this.document.off=
("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.=
widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mous=
eMoved=3D!1,this._mouseStarted&amp;&amp;this._mouseUp(e),this._mouseDownEve=
nt=3De;var i=3Dthis,s=3D1=3D=3D=3De.which,n=3D"string"=3D=3Dtypeof this.opt=
ions.cancel&amp;&amp;e.target.nodeName?t(e.target).closest(this.options.can=
cel).length:!1;return s&amp;&amp;!n&amp;&amp;this._mouseCapture(e)?(this.mo=
useDelayMet=3D!this.options.delay,this.mouseDelayMet||(this._mouseDelayTime=
r=3DsetTimeout(function(){i.mouseDelayMet=3D!0},this.options.delay)),this._=
mouseDistanceMet(e)&amp;&amp;this._mouseDelayMet(e)&amp;&amp;(this._mouseSt=
arted=3Dthis._mouseStart(e)!=3D=3D!1,!this._mouseStarted)?(e.preventDefault=
(),!0):(!0=3D=3D=3Dt.data(e.target,this.widgetName+".preventClickEvent")&am=
p;&amp;t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mo=
useMoveDelegate=3Dfunction(t){return i._mouseMove(t)},this._mouseUpDelegate=
=3Dfunction(t){return i._mouseUp(t)},this.document.on("mousemove."+this.wid=
getName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseU=
pDelegate),e.preventDefault(),_=3D!0,!0)):!0}},_mouseMove:function(e){if(th=
is._mouseMoved){if(t.ui.ie&amp;&amp;(!document.documentMode||9&gt;document.=
documentMode)&amp;&amp;!e.button)return this._mouseUp(e);if(!e.which)if(e.o=
riginalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.or=
iginalEvent.shiftKey)this.ignoreMissingWhich=3D!0;else if(!this.ignoreMissi=
ngWhich)return this._mouseUp(e)}return(e.which||e.button)&amp;&amp;(this._m=
ouseMoved=3D!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):=
(this._mouseDistanceMet(e)&amp;&amp;this._mouseDelayMet(e)&amp;&amp;(this._=
mouseStarted=3Dthis._mouseStart(this._mouseDownEvent,e)!=3D=3D!1,this._mous=
eStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseU=
p:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMov=
eDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mous=
eStarted&amp;&amp;(this._mouseStarted=3D!1,e.target=3D=3D=3Dthis._mouseDown=
Event.target&amp;&amp;t.data(e.target,this.widgetName+".preventClickEvent",=
!0),this._mouseStop(e)),this._mouseDelayTimer&amp;&amp;(clearTimeout(this._=
mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=3D!1=
,_=3D!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(M=
ath.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.p=
ageY-t.pageY))&gt;=3Dthis.options.distance},_mouseDelayMet:function(){retur=
n this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mou=
seStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin=3D{add=
:function(e,i,s){var n,o=3Dt.ui[e].prototype;for(n in s)o.plugins[n]=3Do.pl=
ugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=3D=
t.plugins[e];if(o&amp;&amp;(s||t.element[0].parentNode&amp;&amp;11!=3D=3Dt.=
element[0].parentNode.nodeType))for(n=3D0;o.length&gt;n;n++)t.options[o[n][=
0]]&amp;&amp;o[n][1].apply(t.element,i)}},t.ui.safeBlur=3Dfunction(e){e&amp=
;&amp;"body"!=3D=3De.nodeName.toLowerCase()&amp;&amp;t(e).trigger("blur")},=
t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"dra=
g",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,co=
ntainment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",=
iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,sc=
ope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMod=
e:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null=
},_create:function(){"original"=3D=3D=3Dthis.options.helper&amp;&amp;this._=
setPositionRelative(),this.options.addClasses&amp;&amp;this._addClass("ui-d=
raggable"),this._setHandleClassName(),this._mouseInit()},_setOption:functio=
n(t,e){this._super(t,e),"handle"=3D=3D=3Dt&amp;&amp;(this._removeHandleClas=
sName(),this._setHandleClassName())},_destroy:function(){return(this.helper=
||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=3D!0,void=
 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapt=
ure:function(e){var i=3Dthis.options;return this.helper||i.disabled||t(e.ta=
rget).closest(".ui-resizable-handle").length&gt;0?!1:(this.handle=3Dthis._g=
etHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.ifr=
ameFix=3D=3D=3D!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){t=
his.iframeBlocks=3Dthis.document.find(e).map(function(){var e=3Dt(this);ret=
urn t("&lt;div&gt;").css("position","absolute").appendTo(e.parent()).outerW=
idth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},=
_unblockFrames:function(){this.iframeBlocks&amp;&amp;(this.iframeBlocks.rem=
ove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=3Dt.u=
i.safeActiveElement(this.document[0]),s=3Dt(e.target);s.closest(i).length||=
t.ui.safeBlur(i)},_mouseStart:function(e){var i=3Dthis.options;return this.=
helper=3Dthis._createHelper(e),this._addClass(this.helper,"ui-draggable-dra=
gging"),this._cacheHelperProportions(),t.ui.ddmanager&amp;&amp;(t.ui.ddmana=
ger.current=3Dthis),this._cacheMargins(),this.cssPosition=3Dthis.helper.css=
("position"),this.scrollParent=3Dthis.helper.scrollParent(!0),this.offsetPa=
rent=3Dthis.helper.offsetParent(),this.hasFixedAncestor=3Dthis.helper.paren=
ts().filter(function(){return"fixed"=3D=3D=3Dt(this).css("position")}).leng=
th&gt;0,this.positionAbs=3Dthis.element.offset(),this._refreshOffsets(e),th=
is.originalPosition=3Dthis.position=3Dthis._generatePosition(e,!1),this.ori=
ginalPageX=3De.pageX,this.originalPageY=3De.pageY,i.cursorAt&amp;&amp;this.=
_adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("s=
tart",e)=3D=3D=3D!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui=
.ddmanager&amp;&amp;!i.dropBehaviour&amp;&amp;t.ui.ddmanager.prepareOffsets=
(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&amp;&amp;t.ui.ddmanager.dragS=
tart(this,e),!0)},_refreshOffsets:function(t){this.offset=3D{top:this.posit=
ionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,sc=
roll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},=
this.offset.click=3D{left:t.pageX-this.offset.left,top:t.pageY-this.offset.=
top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&amp;&amp;(this.offs=
et.parent=3Dthis._getParentOffset()),this.position=3Dthis._generatePosition=
(e,!0),this.positionAbs=3Dthis._convertPositionTo("absolute"),!i){var s=3Dt=
his._uiHash();if(this._trigger("drag",e,s)=3D=3D=3D!1)return this._mouseUp(=
new t.Event("mouseup",e)),!1;this.position=3Ds.position}return this.helper[=
0].style.left=3Dthis.position.left+"px",this.helper[0].style.top=3Dthis.pos=
ition.top+"px",t.ui.ddmanager&amp;&amp;t.ui.ddmanager.drag(this,e),!1},_mou=
seStop:function(e){var i=3Dthis,s=3D!1;return t.ui.ddmanager&amp;&amp;!this=
.options.dropBehaviour&amp;&amp;(s=3Dt.ui.ddmanager.drop(this,e)),this.drop=
ped&amp;&amp;(s=3Dthis.dropped,this.dropped=3D!1),"invalid"=3D=3D=3Dthis.op=
tions.revert&amp;&amp;!s||"valid"=3D=3D=3Dthis.options.revert&amp;&amp;s||t=
his.options.revert=3D=3D=3D!0||t.isFunction(this.options.revert)&amp;&amp;t=
his.options.revert.call(this.element,s)?t(this.helper).animate(this.origina=
lPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("s=
top",e)!=3D=3D!1&amp;&amp;i._clear()}):this._trigger("stop",e)!=3D=3D!1&amp=
;&amp;this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t=
.ui.ddmanager&amp;&amp;t.ui.ddmanager.dragStop(this,e),this.handleElement.i=
s(e.target)&amp;&amp;this.element.trigger("focus"),t.ui.mouse.prototype._mo=
useUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-=
dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):t=
his._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.=
target).closest(this.element.find(this.options.handle)).length:!0},_setHand=
leClassName:function(){this.handleElement=3Dthis.options.handle?this.elemen=
t.find(this.options.handle):this.element,this._addClass(this.handleElement,=
"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass=
(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=
=3Dthis.options,s=3Dt.isFunction(i.helper),n=3Ds?t(i.helper.apply(this.elem=
ent[0],[e])):"clone"=3D=3D=3Di.helper?this.element.clone().removeAttr("id")=
:this.element;return n.parents("body").length||n.appendTo("parent"=3D=3D=3D=
i.appendTo?this.element[0].parentNode:i.appendTo),s&amp;&amp;n[0]=3D=3D=3Dt=
his.element[0]&amp;&amp;this._setPositionRelative(),n[0]=3D=3D=3Dthis.eleme=
nt[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolu=
te"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css(=
"position"))||(this.element[0].style.position=3D"relative")},_adjustOffsetF=
romHelper:function(e){"string"=3D=3Dtypeof e&amp;&amp;(e=3De.split(" ")),t.=
isArray(e)&amp;&amp;(e=3D{left:+e[0],top:+e[1]||0}),"left"in e&amp;&amp;(th=
is.offset.click.left=3De.left+this.margins.left),"right"in e&amp;&amp;(this=
.offset.click.left=3Dthis.helperProportions.width-e.right+this.margins.left=
),"top"in e&amp;&amp;(this.offset.click.top=3De.top+this.margins.top),"bott=
om"in e&amp;&amp;(this.offset.click.top=3Dthis.helperProportions.height-e.b=
ottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(=
t.tagName)||t=3D=3D=3Dthis.document[0]},_getParentOffset:function(){var e=
=3Dthis.offsetParent.offset(),i=3Dthis.document[0];return"absolute"=3D=3D=
=3Dthis.cssPosition&amp;&amp;this.scrollParent[0]!=3D=3Di&amp;&amp;t.contai=
ns(this.scrollParent[0],this.offsetParent[0])&amp;&amp;(e.left+=3Dthis.scro=
llParent.scrollLeft(),e.top+=3Dthis.scrollParent.scrollTop()),this._isRootN=
ode(this.offsetParent[0])&amp;&amp;(e=3D{top:0,left:0}),{top:e.top+(parseIn=
t(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(thi=
s.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function=
(){if("relative"!=3D=3Dthis.cssPosition)return{top:0,left:0};var t=3Dthis.e=
lement.position(),e=3Dthis._isRootNode(this.scrollParent[0]);return{top:t.t=
op-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTo=
p()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scroll=
Parent.scrollLeft())}
},_cacheMargins:function(){this.margins=3D{left:parseInt(this.element.css("=
marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right=
:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.eleme=
nt.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.hel=
perProportions=3D{width:this.helper.outerWidth(),height:this.helper.outerHe=
ight()}},_setContainment:function(){var e,i,s,n=3Dthis.options,o=3Dthis.doc=
ument[0];return this.relativeContainer=3Dnull,n.containment?"window"=3D=3D=
=3Dn.containment?(this.containment=3D[t(window).scrollLeft()-this.offset.re=
lative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relat=
ive.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-thi=
s.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window=
).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-t=
his.margins.top],void 0):"document"=3D=3D=3Dn.containment?(this.containment=
=3D[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).h=
eight()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this=
.margins.top],void 0):n.containment.constructor=3D=3D=3DArray?(this.contain=
ment=3Dn.containment,void 0):("parent"=3D=3D=3Dn.containment&amp;&amp;(n.co=
ntainment=3Dthis.helper[0].parentNode),i=3Dt(n.containment),s=3Di[0],s&amp;=
&amp;(e=3D/(scroll|auto)/.test(i.css("overflow")),this.containment=3D[(pars=
eInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0=
),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),1=
0)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.=
css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-thi=
s.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(=
s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBotto=
mWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperPropor=
tions.height-this.margins.top-this.margins.bottom],this.relativeContainer=
=3Di),void 0):(this.containment=3Dnull,void 0)},_convertPositionTo:function=
(t,e){e||(e=3Dthis.position);var i=3D"absolute"=3D=3D=3Dt?1:-1,s=3Dthis._is=
RootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+=
this.offset.parent.top*i-("fixed"=3D=3D=3Dthis.cssPosition?-this.offset.scr=
oll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left=
*i+this.offset.parent.left*i-("fixed"=3D=3D=3Dthis.cssPosition?-this.offset=
.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,=
e){var i,s,n,o,a=3Dthis.options,r=3Dthis._isRootNode(this.scrollParent[0]),=
h=3Dt.pageX,l=3Dt.pageY;return r&amp;&amp;this.offset.scroll||(this.offset.=
scroll=3D{top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLe=
ft()}),e&amp;&amp;(this.containment&amp;&amp;(this.relativeContainer?(s=3Dt=
his.relativeContainer.offset(),i=3D[this.containment[0]+s.left,this.contain=
ment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=3Dth=
is.containment,t.pageX-this.offset.click.left&lt;i[0]&amp;&amp;(h=3Di[0]+th=
is.offset.click.left),t.pageY-this.offset.click.top&lt;i[1]&amp;&amp;(l=3Di=
[1]+this.offset.click.top),t.pageX-this.offset.click.left&gt;i[2]&amp;&amp;=
(h=3Di[2]+this.offset.click.left),t.pageY-this.offset.click.top&gt;i[3]&amp=
;&amp;(l=3Di[3]+this.offset.click.top)),a.grid&amp;&amp;(n=3Da.grid[1]?this=
.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.=
originalPageY,l=3Di?n-this.offset.click.top&gt;=3Di[1]||n-this.offset.click=
.top&gt;i[3]?n:n-this.offset.click.top&gt;=3Di[1]?n-a.grid[1]:n+a.grid[1]:n=
,o=3Da.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[=
0])*a.grid[0]:this.originalPageX,h=3Di?o-this.offset.click.left&gt;=3Di[0]|=
|o-this.offset.click.left&gt;i[2]?o:o-this.offset.click.left&gt;=3Di[0]?o-a=
.grid[0]:o+a.grid[0]:o),"y"=3D=3D=3Da.axis&amp;&amp;(h=3Dthis.originalPageX=
),"x"=3D=3D=3Da.axis&amp;&amp;(l=3Dthis.originalPageY)),{top:l-this.offset.=
click.top-this.offset.relative.top-this.offset.parent.top+("fixed"=3D=3D=3D=
this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h=
-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(=
"fixed"=3D=3D=3Dthis.cssPosition?-this.offset.scroll.left:r?0:this.offset.s=
croll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable=
-dragging"),this.helper[0]=3D=3D=3Dthis.element[0]||this.cancelHelperRemova=
l||this.helper.remove(),this.helper=3Dnull,this.cancelHelperRemoval=3D!1,th=
is.destroyOnClear&amp;&amp;this.destroy()},_trigger:function(e,i,s){return =
s=3Ds||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|=
stop)/.test(e)&amp;&amp;(this.positionAbs=3Dthis._convertPositionTo("absolu=
te"),s.offset=3Dthis.positionAbs),t.Widget.prototype._trigger.call(this,e,i=
,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.=
position,originalPosition:this.originalPosition,offset:this.positionAbs}}})=
,t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var=
 n=3Dt.extend({},i,{item:s.element});s.sortables=3D[],t(s.options.connectTo=
Sortable).each(function(){var i=3Dt(this).sortable("instance");i&amp;&amp;!=
i.options.disabled&amp;&amp;(s.sortables.push(i),i.refreshPositions(),i._tr=
igger("activate",e,n))})},stop:function(e,i,s){var n=3Dt.extend({},i,{item:=
s.element});s.cancelHelperRemoval=3D!1,t.each(s.sortables,function(){var t=
=3Dthis;t.isOver?(t.isOver=3D0,s.cancelHelperRemoval=3D!0,t.cancelHelperRem=
oval=3D!1,t._storedCSS=3D{position:t.placeholder.css("position"),top:t.plac=
eholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.option=
s.helper=3Dt.options._helper):(t.cancelHelperRemoval=3D!0,t._trigger("deact=
ivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=3D=
!1,o=3Dthis;o.positionAbs=3Ds.positionAbs,o.helperProportions=3Ds.helperPro=
portions,o.offset.click=3Ds.offset.click,o._intersectsWith(o.containerCache=
)&amp;&amp;(n=3D!0,t.each(s.sortables,function(){return this.positionAbs=3D=
s.positionAbs,this.helperProportions=3Ds.helperProportions,this.offset.clic=
k=3Ds.offset.click,this!=3D=3Do&amp;&amp;this._intersectsWith(this.containe=
rCache)&amp;&amp;t.contains(o.element[0],this.element[0])&amp;&amp;(n=3D!1)=
,n})),n?(o.isOver||(o.isOver=3D1,s._parent=3Di.helper.parent(),o.currentIte=
m=3Di.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._hel=
per=3Do.options.helper,o.options.helper=3Dfunction(){return i.helper[0]},e.=
target=3Do.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.of=
fset.click.top=3Ds.offset.click.top,o.offset.click.left=3Ds.offset.click.le=
ft,o.offset.parent.left-=3Ds.offset.parent.left-o.offset.parent.left,o.offs=
et.parent.top-=3Ds.offset.parent.top-o.offset.parent.top,s._trigger("toSort=
able",e),s.dropped=3Do.element,t.each(s.sortables,function(){this.refreshPo=
sitions()}),s.currentItem=3Ds.element,o.fromOutside=3Ds),o.currentItem&amp;=
&amp;(o._mouseDrag(e),i.position=3Do.position)):o.isOver&amp;&amp;(o.isOver=
=3D0,o.cancelHelperRemoval=3D!0,o.options._revert=3Do.options.revert,o.opti=
ons.revert=3D!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.optio=
ns.revert=3Do.options._revert,o.options.helper=3Do.options._helper,o.placeh=
older&amp;&amp;o.placeholder.remove(),i.helper.appendTo(s._parent),s._refre=
shOffsets(e),i.position=3Ds._generatePosition(e,!0),s._trigger("fromSortabl=
e",e),s.dropped=3D!1,t.each(s.sortables,function(){this.refreshPositions()}=
))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=
=3Dt("body"),o=3Ds.options;n.css("cursor")&amp;&amp;(o._cursor=3Dn.css("cur=
sor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=3Ds.options;n._=
cursor&amp;&amp;t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("dragg=
able","opacity",{start:function(e,i,s){var n=3Dt(i.helper),o=3Ds.options;n.=
css("opacity")&amp;&amp;(o._opacity=3Dn.css("opacity")),n.css("opacity",o.o=
pacity)},stop:function(e,i,s){var n=3Ds.options;n._opacity&amp;&amp;t(i.hel=
per).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{sta=
rt:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=3Di.he=
lper.scrollParent(!1)),i.scrollParentNotHidden[0]!=3D=3Di.document[0]&amp;&=
amp;"HTML"!=3D=3Di.scrollParentNotHidden[0].tagName&amp;&amp;(i.overflowOff=
set=3Di.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=3Ds.opt=
ions,o=3D!1,a=3Ds.scrollParentNotHidden[0],r=3Ds.document[0];a!=3D=3Dr&amp;=
&amp;"HTML"!=3D=3Da.tagName?(n.axis&amp;&amp;"x"=3D=3D=3Dn.axis||(s.overflo=
wOffset.top+a.offsetHeight-e.pageY&lt;n.scrollSensitivity?a.scrollTop=3Do=
=3Da.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top&lt;n.scrollSensit=
ivity&amp;&amp;(a.scrollTop=3Do=3Da.scrollTop-n.scrollSpeed)),n.axis&amp;&a=
mp;"y"=3D=3D=3Dn.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX&lt;n.sc=
rollSensitivity?a.scrollLeft=3Do=3Da.scrollLeft+n.scrollSpeed:e.pageX-s.ove=
rflowOffset.left&lt;n.scrollSensitivity&amp;&amp;(a.scrollLeft=3Do=3Da.scro=
llLeft-n.scrollSpeed))):(n.axis&amp;&amp;"x"=3D=3D=3Dn.axis||(e.pageY-t(r).=
scrollTop()&lt;n.scrollSensitivity?o=3Dt(r).scrollTop(t(r).scrollTop()-n.sc=
rollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())&lt;n.scrollSensiti=
vity&amp;&amp;(o=3Dt(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&=
amp;&amp;"y"=3D=3D=3Dn.axis||(e.pageX-t(r).scrollLeft()&lt;n.scrollSensitiv=
ity?o=3Dt(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-=
(e.pageX-t(r).scrollLeft())&lt;n.scrollSensitivity&amp;&amp;(o=3Dt(r).scrol=
lLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!=3D=3D!1&amp;&amp;t.ui.ddmanage=
r&amp;&amp;!n.dropBehaviour&amp;&amp;t.ui.ddmanager.prepareOffsets(s,e)}}),=
t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=3Ds.options=
;s.snapElements=3D[],t(n.snap.constructor!=3D=3DString?n.snap.items||":data=
(ui-draggable)":n.snap).each(function(){var e=3Dt(this),i=3De.offset();this=
!=3D=3Ds.element[0]&amp;&amp;s.snapElements.push({item:this,width:e.outerWi=
dth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s=
){var n,o,a,r,h,l,c,u,d,p,f=3Ds.options,g=3Df.snapTolerance,m=3Di.offset.le=
ft,_=3Dm+s.helperProportions.width,v=3Di.offset.top,b=3Dv+s.helperProportio=
ns.height;for(d=3Ds.snapElements.length-1;d&gt;=3D0;d--)h=3Ds.snapElements[=
d].left-s.margins.left,l=3Dh+s.snapElements[d].width,c=3Ds.snapElements[d].=
top-s.margins.top,u=3Dc+s.snapElements[d].height,h-g&gt;_||m&gt;l+g||c-g&gt=
;b||v&gt;u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElemen=
ts[d].item)?(s.snapElements[d].snapping&amp;&amp;s.options.snap.release&amp=
;&amp;s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapIte=
m:s.snapElements[d].item})),s.snapElements[d].snapping=3D!1):("inner"!=3D=
=3Df.snapMode&amp;&amp;(n=3Dg&gt;=3DMath.abs(c-b),o=3Dg&gt;=3DMath.abs(u-v)=
,a=3Dg&gt;=3DMath.abs(h-_),r=3Dg&gt;=3DMath.abs(l-m),n&amp;&amp;(i.position=
.top=3Ds._convertPositionTo("relative",{top:c-s.helperProportions.height,le=
ft:0}).top),o&amp;&amp;(i.position.top=3Ds._convertPositionTo("relative",{t=
op:u,left:0}).top),a&amp;&amp;(i.position.left=3Ds._convertPositionTo("rela=
tive",{top:0,left:h-s.helperProportions.width}).left),r&amp;&amp;(i.positio=
n.left=3Ds._convertPositionTo("relative",{top:0,left:l}).left)),p=3Dn||o||a=
||r,"outer"!=3D=3Df.snapMode&amp;&amp;(n=3Dg&gt;=3DMath.abs(c-v),o=3Dg&gt;=
=3DMath.abs(u-b),a=3Dg&gt;=3DMath.abs(h-m),r=3Dg&gt;=3DMath.abs(l-_),n&amp;=
&amp;(i.position.top=3Ds._convertPositionTo("relative",{top:c,left:0}).top)=
,o&amp;&amp;(i.position.top=3Ds._convertPositionTo("relative",{top:u-s.help=
erProportions.height,left:0}).top),a&amp;&amp;(i.position.left=3Ds._convert=
PositionTo("relative",{top:0,left:h}).left),r&amp;&amp;(i.position.left=3Ds=
._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).le=
ft)),!s.snapElements[d].snapping&amp;&amp;(n||o||a||r||p)&amp;&amp;s.option=
s.snap.snap&amp;&amp;s.options.snap.snap.call(s.element,e,t.extend(s._uiHas=
h(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=3Dn||o||=
a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var =
n,o=3Ds.options,a=3Dt.makeArray(t(o.stack)).sort(function(e,i){return(parse=
Int(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.len=
gth&amp;&amp;(n=3DparseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(=
e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugi=
n.add("draggable","zIndex",{start:function(e,i,s){var n=3Dt(i.helper),o=3Ds=
.options;n.css("zIndex")&amp;&amp;(o._zIndex=3Dn.css("zIndex")),n.css("zInd=
ex",o.zIndex)},stop:function(e,i,s){var n=3Ds.options;n._zIndex&amp;&amp;t(=
i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable"=
,t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResiz=
e:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1=
,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal=
-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:=
null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:nul=
l,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t=
){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"=3D=3D=
=3Dt(e).css("overflow"))return!1;var s=3Di&amp;&amp;"left"=3D=3D=3Di?"scrol=
lLeft":"scrollTop",n=3D!1;return e[s]&gt;0?!0:(e[s]=3D1,n=3De[s]&gt;0,e[s]=
=3D0,n)},_create:function(){var e,i=3Dthis.options,s=3Dthis;this._addClass(=
"ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.a=
spectRatio,originalElement:this.element,_proportionallyResizeElements:[],_h=
elper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),t=
his.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/=
i)&amp;&amp;(this.element.wrap(t("&lt;div class=3D'ui-wrapper' style=3D'ove=
rflow: hidden;'&gt;&lt;/div&gt;").css({position:this.element.css("position"=
),width:this.element.outerWidth(),height:this.element.outerHeight(),top:thi=
s.element.css("top"),left:this.element.css("left")})),this.element=3Dthis.e=
lement.parent().data("ui-resizable",this.element.resizable("instance")),thi=
s.elementIsWrapper=3D!0,e=3D{marginTop:this.originalElement.css("marginTop"=
),marginRight:this.originalElement.css("marginRight"),marginBottom:this.ori=
ginalElement.css("marginBottom"),marginLeft:this.originalElement.css("margi=
nLeft")},this.element.css(e),this.originalElement.css("margin",0),this.orig=
inalResizeStyle=3Dthis.originalElement.css("resize"),this.originalElement.c=
ss("resize","none"),this._proportionallyResizeElements.push(this.originalEl=
ement.css({position:"static",zoom:1,display:"block"})),this.originalElement=
.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&amp;&=
amp;t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass(=
"ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.=
disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide=
())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=
=3Dfunction(e){t(e).removeData("resizable").removeData("ui-resizable").off(=
".resizable").find(".ui-resizable-handle").remove()};return this.elementIsW=
rapper&amp;&amp;(i(this.element),e=3Dthis.element,this.originalElement.css(=
{position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top=
:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.original=
Element.css("resize",this.originalResizeStyle),i(this.originalElement),this=
},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._r=
emoveHandles(),this._setupHandles();break;default:}},_setupHandles:function=
(){var e,i,s,n,o,a=3Dthis.options,r=3Dthis;if(this.handles=3Da.handles||(t(=
".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-res=
izable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:=
".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),t=
his._handles=3Dt(),this.handles.constructor=3D=3D=3DString)for("all"=3D=3D=
=3Dthis.handles&amp;&amp;(this.handles=3D"n,e,s,w,se,sw,ne,nw"),s=3Dthis.ha=
ndles.split(","),this.handles=3D{},i=3D0;s.length&gt;i;i++)e=3Dt.trim(s[i])=
,n=3D"ui-resizable-"+e,o=3Dt("&lt;div&gt;"),this._addClass(o,"ui-resizable-=
handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=3D".ui-resizable-"+e,t=
his.element.append(o);this._renderAxis=3Dfunction(e){var i,s,n,o;e=3De||thi=
s.element;for(i in this.handles)this.handles[i].constructor=3D=3D=3DString?=
this.handles[i]=3Dthis.element.children(this.handles[i]).first().show():(th=
is.handles[i].jquery||this.handles[i].nodeType)&amp;&amp;(this.handles[i]=
=3Dt(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),t=
his.elementIsWrapper&amp;&amp;this.originalElement[0].nodeName.match(/^(tex=
tarea|input|select|button)$/i)&amp;&amp;(s=3Dt(this.handles[i],this.element=
),o=3D/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=3D["paddin=
g",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right"=
:"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=3D=
this._handles.add(this.handles[i])},this._renderAxis(this.element),this._ha=
ndles=3Dthis._handles.add(this.element.find(".ui-resizable-handle")),this._=
handles.disableSelection(),this._handles.on("mouseover",function(){r.resizi=
ng||(this.className&amp;&amp;(o=3Dthis.className.match(/ui-resizable-(se|sw=
|ne|nw|n|e|s|w)/i)),r.axis=3Do&amp;&amp;o[1]?o[1]:"se")}),a.autoHide&amp;&a=
mp;(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeH=
andles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s=
,n=3D!1;for(i in this.handles)s=3Dt(this.handles[i])[0],(s=3D=3D=3De.target=
||t.contains(s,e.target))&amp;&amp;(n=3D!0);return!this.options.disabled&am=
p;&amp;n},_mouseStart:function(e){var i,s,n,o=3Dthis.options,a=3Dthis.eleme=
nt;return this.resizing=3D!0,this._renderProxy(),i=3Dthis._num(this.helper.=
css("left")),s=3Dthis._num(this.helper.css("top")),o.containment&amp;&amp;(=
i+=3Dt(o.containment).scrollLeft()||0,s+=3Dt(o.containment).scrollTop()||0)=
,this.offset=3Dthis.helper.offset(),this.position=3D{left:i,top:s},this.siz=
e=3Dthis._helper?{width:this.helper.width(),height:this.helper.height()}:{w=
idth:a.width(),height:a.height()},this.originalSize=3Dthis._helper?{width:a=
.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},t=
his.sizeDiff=3D{width:a.outerWidth()-a.width(),height:a.outerHeight()-a.hei=
ght()},this.originalPosition=3D{left:i,top:s},this.originalMousePosition=3D=
{left:e.pageX,top:e.pageY},this.aspectRatio=3D"number"=3D=3Dtypeof o.aspect=
Ratio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=
=3Dt(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto=
"=3D=3D=3Dn?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),=
this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=3Dthis.orig=
inalMousePosition,o=3Dthis.axis,a=3De.pageX-n.left||0,r=3De.pageY-n.top||0,=
h=3Dthis._change[o];return this._updatePrevProperties(),h?(i=3Dh.apply(this=
,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.s=
hiftKey)&amp;&amp;(i=3Dthis._updateRatio(i,e)),i=3Dthis._respectSize(i,e),t=
his._updateCache(i),this._propagate("resize",e),s=3Dthis._applyChanges(),!t=
his._helper&amp;&amp;this._proportionallyResizeElements.length&amp;&amp;thi=
s._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties()=
,this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseSt=
op:function(e){this.resizing=3D!1;var i,s,n,o,a,r,h,l=3Dthis.options,c=3Dth=
is;return this._helper&amp;&amp;(i=3Dthis._proportionallyResizeElements,s=
=3Di.length&amp;&amp;/textarea/i.test(i[0].nodeName),n=3Ds&amp;&amp;this._h=
asScroll(i[0],"left")?0:c.sizeDiff.height,o=3Ds?0:c.sizeDiff.width,a=3D{wid=
th:c.helper.width()-o,height:c.helper.height()-n},r=3DparseFloat(c.element.=
css("left"))+(c.position.left-c.originalPosition.left)||null,h=3DparseFloat=
(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.anim=
ate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.he=
ight),c.helper.width(c.size.width),this._helper&amp;&amp;!l.animate&amp;&am=
p;this._proportionallyResize()),t("body").css("cursor","auto"),this._remove=
Class("ui-resizable-resizing"),this._propagate("stop",e),this._helper&amp;&=
amp;this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosi=
tion=3D{top:this.position.top,left:this.position.left},this.prevSize=3D{wid=
th:this.size.width,height:this.size.height}},_applyChanges:function(){var t=
=3D{};return this.position.top!=3D=3Dthis.prevPosition.top&amp;&amp;(t.top=
=3Dthis.position.top+"px"),this.position.left!=3D=3Dthis.prevPosition.left&=
amp;&amp;(t.left=3Dthis.position.left+"px"),this.size.width!=3D=3Dthis.prev=
Size.width&amp;&amp;(t.width=3Dthis.size.width+"px"),this.size.height!=3D=
=3Dthis.prevSize.height&amp;&amp;(t.height=3Dthis.size.height+"px"),this.he=
lper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=3Dthis.=
options;o=3D{minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this=
._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)=
?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this=
._aspectRatio||t)&amp;&amp;(e=3Do.minHeight*this.aspectRatio,s=3Do.minWidth=
/this.aspectRatio,i=3Do.maxHeight*this.aspectRatio,n=3Do.maxWidth/this.aspe=
ctRatio,e&gt;o.minWidth&amp;&amp;(o.minWidth=3De),s&gt;o.minHeight&amp;&amp=
;(o.minHeight=3Ds),o.maxWidth&gt;i&amp;&amp;(o.maxWidth=3Di),o.maxHeight&gt=
;n&amp;&amp;(o.maxHeight=3Dn)),this._vBoundaries=3Do},_updateCache:function=
(t){this.offset=3Dthis.helper.offset(),this._isNumber(t.left)&amp;&amp;(thi=
s.position.left=3Dt.left),this._isNumber(t.top)&amp;&amp;(this.position.top=
=3Dt.top),this._isNumber(t.height)&amp;&amp;(this.size.height=3Dt.height),t=
his._isNumber(t.width)&amp;&amp;(this.size.width=3Dt.width)},_updateRatio:f=
unction(t){var e=3Dthis.position,i=3Dthis.size,s=3Dthis.axis;return this._i=
sNumber(t.height)?t.width=3Dt.height*this.aspectRatio:this._isNumber(t.widt=
h)&amp;&amp;(t.height=3Dt.width/this.aspectRatio),"sw"=3D=3D=3Ds&amp;&amp;(=
t.left=3De.left+(i.width-t.width),t.top=3Dnull),"nw"=3D=3D=3Ds&amp;&amp;(t.=
top=3De.top+(i.height-t.height),t.left=3De.left+(i.width-t.width)),t},_resp=
ectSize:function(t){var e=3Dthis._vBoundaries,i=3Dthis.axis,s=3Dthis._isNum=
ber(t.width)&amp;&amp;e.maxWidth&amp;&amp;e.maxWidth&lt;t.width,n=3Dthis._i=
sNumber(t.height)&amp;&amp;e.maxHeight&amp;&amp;e.maxHeight&lt;t.height,o=
=3Dthis._isNumber(t.width)&amp;&amp;e.minWidth&amp;&amp;e.minWidth&gt;t.wid=
th,a=3Dthis._isNumber(t.height)&amp;&amp;e.minHeight&amp;&amp;e.minHeight&g=
t;t.height,r=3Dthis.originalPosition.left+this.originalSize.width,h=3Dthis.=
originalPosition.top+this.originalSize.height,l=3D/sw|nw|w/.test(i),c=3D/nw=
|ne|n/.test(i);return o&amp;&amp;(t.width=3De.minWidth),a&amp;&amp;(t.heigh=
t=3De.minHeight),s&amp;&amp;(t.width=3De.maxWidth),n&amp;&amp;(t.height=3De=
.maxHeight),o&amp;&amp;l&amp;&amp;(t.left=3Dr-e.minWidth),s&amp;&amp;l&amp;=
&amp;(t.left=3Dr-e.maxWidth),a&amp;&amp;c&amp;&amp;(t.top=3Dh-e.minHeight),=
n&amp;&amp;c&amp;&amp;(t.top=3Dh-e.maxHeight),t.width||t.height||t.left||!t=
.top?t.width||t.height||t.top||!t.left||(t.left=3Dnull):t.top=3Dnull,t},_ge=
tPaddingPlusBorderDimensions:function(t){for(var e=3D0,i=3D[],s=3D[t.css("b=
orderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css(=
"borderLeftWidth")],n=3D[t.css("paddingTop"),t.css("paddingRight"),t.css("p=
addingBottom"),t.css("paddingLeft")];4&gt;e;e++)i[e]=3DparseFloat(s[e])||0,=
i[e]+=3DparseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_prop=
ortionallyResize:function(){if(this._proportionallyResizeElements.length)fo=
r(var t,e=3D0,i=3Dthis.helper||this.element;this._proportionallyResizeEleme=
nts.length&gt;e;e++)t=3Dthis._proportionallyResizeElements[e],this.outerDim=
ensions||(this.outerDimensions=3Dthis._getPaddingPlusBorderDimensions(t)),t=
.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this=
.outerDimensions.width||0})},_renderProxy:function(){var e=3Dthis.element,i=
=3Dthis.options;this.elementOffset=3De.offset(),this._helper?(this.helper=
=3Dthis.helper||t("&lt;div style=3D'overflow:hidden;'&gt;&lt;/div&gt;"),thi=
s._addClass(this.helper,this._helper),this.helper.css({width:this.element.o=
uterWidth(),height:this.element.outerHeight(),position:"absolute",left:this=
.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}=
),this.helper.appendTo("body").disableSelection()):this.helper=3Dthis.eleme=
nt},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:fun=
ction(t,e){var i=3Dthis.originalSize,s=3Dthis.originalPosition;return{left:=
s.left+e,width:i.width-e}},n:function(t,e,i){var s=3Dthis.originalSize,n=3D=
this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e=
,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.=
extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,=
s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,argument=
s),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(=
this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},n=
w:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this=
._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call=
(this,e,[i,this.ui()]),"resize"!=3D=3De&amp;&amp;this._trigger(e,i,this.ui(=
))},plugins:{},ui:function(){return{originalElement:this.originalElement,el=
ement:this.element,helper:this.helper,position:this.position,size:this.size=
,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),=
t.ui.plugin.add("resizable","animate",{stop:function(e){var i=3Dt(this).res=
izable("instance"),s=3Di.options,n=3Di._proportionallyResizeElements,o=3Dn.=
length&amp;&amp;/textarea/i.test(n[0].nodeName),a=3Do&amp;&amp;i._hasScroll=
(n[0],"left")?0:i.sizeDiff.height,r=3Do?0:i.sizeDiff.width,h=3D{width:i.siz=
e.width-r,height:i.size.height-a},l=3DparseFloat(i.element.css("left"))+(i.=
position.left-i.originalPosition.left)||null,c=3DparseFloat(i.element.css("=
top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.ex=
tend(h,c&amp;&amp;l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s=
.animateEasing,step:function(){var s=3D{width:parseFloat(i.element.css("wid=
th")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.c=
ss("top")),left:parseFloat(i.element.css("left"))};n&amp;&amp;n.length&amp;=
&amp;t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._prop=
agate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:fu=
nction(){var e,i,s,n,o,a,r,h=3Dt(this).resizable("instance"),l=3Dh.options,=
c=3Dh.element,u=3Dl.containment,d=3Du instanceof t?u.get(0):/parent/.test(u=
)?c.parent().get(0):u;d&amp;&amp;(h.containerElement=3Dt(d),/document/.test=
(u)||u=3D=3D=3Ddocument?(h.containerOffset=3D{left:0,top:0},h.containerPosi=
tion=3D{left:0,top:0},h.parentData=3D{element:t(document),left:0,top:0,widt=
h:t(document).width(),height:t(document).height()||document.body.parentNode=
.scrollHeight}):(e=3Dt(d),i=3D[],t(["Top","Right","Left","Bottom"]).each(fu=
nction(t,s){i[t]=3Dh._num(e.css("padding"+s))}),h.containerOffset=3De.offse=
t(),h.containerPosition=3De.position(),h.containerSize=3D{height:e.innerHei=
ght()-i[3],width:e.innerWidth()-i[1]},s=3Dh.containerOffset,n=3Dh.container=
Size.height,o=3Dh.containerSize.width,a=3Dh._hasScroll(d,"left")?d.scrollWi=
dth:o,r=3Dh._hasScroll(d)?d.scrollHeight:n,h.parentData=3D{element:d,left:s=
.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=3Dt(t=
his).resizable("instance"),r=3Da.options,h=3Da.containerOffset,l=3Da.positi=
on,c=3Da._aspectRatio||e.shiftKey,u=3D{top:0,left:0},d=3Da.containerElement=
,p=3D!0;d[0]!=3D=3Ddocument&amp;&amp;/static/.test(d.css("position"))&amp;&=
amp;(u=3Dh),l.left&lt;(a._helper?h.left:0)&amp;&amp;(a.size.width=3Da.size.=
width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&amp;&amp;=
(a.size.height=3Da.size.width/a.aspectRatio,p=3D!1),a.position.left=3Dr.hel=
per?h.left:0),l.top&lt;(a._helper?h.top:0)&amp;&amp;(a.size.height=3Da.size=
.height+(a._helper?a.position.top-h.top:a.position.top),c&amp;&amp;(a.size.=
width=3Da.size.height*a.aspectRatio,p=3D!1),a.position.top=3Da._helper?h.to=
p:0),n=3Da.containerElement.get(0)=3D=3D=3Da.element.parent().get(0),o=3D/r=
elative|absolute/.test(a.containerElement.css("position")),n&amp;&amp;o?(a.=
offset.left=3Da.parentData.left+a.position.left,a.offset.top=3Da.parentData=
.top+a.position.top):(a.offset.left=3Da.element.offset().left,a.offset.top=
=3Da.element.offset().top),i=3DMath.abs(a.sizeDiff.width+(a._helper?a.offse=
t.left-u.left:a.offset.left-h.left)),s=3DMath.abs(a.sizeDiff.height+(a._hel=
per?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width&gt;=3Da.parentDa=
ta.width&amp;&amp;(a.size.width=3Da.parentData.width-i,c&amp;&amp;(a.size.h=
eight=3Da.size.width/a.aspectRatio,p=3D!1)),s+a.size.height&gt;=3Da.parentD=
ata.height&amp;&amp;(a.size.height=3Da.parentData.height-s,c&amp;&amp;(a.si=
ze.width=3Da.size.height*a.aspectRatio,p=3D!1)),p||(a.position.left=3Da.pre=
vPosition.left,a.position.top=3Da.prevPosition.top,a.size.width=3Da.prevSiz=
e.width,a.size.height=3Da.prevSize.height)},stop:function(){var e=3Dt(this)=
.resizable("instance"),i=3De.options,s=3De.containerOffset,n=3De.containerP=
osition,o=3De.containerElement,a=3Dt(e.helper),r=3Da.offset(),h=3Da.outerWi=
dth()-e.sizeDiff.width,l=3Da.outerHeight()-e.sizeDiff.height;e._helper&amp;=
&amp;!i.animate&amp;&amp;/relative/.test(o.css("position"))&amp;&amp;t(this=
).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&amp;&amp;!i.a=
nimate&amp;&amp;/static/.test(o.css("position"))&amp;&amp;t(this).css({left=
:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","al=
soResize",{start:function(){var e=3Dt(this).resizable("instance"),i=3De.opt=
ions;t(i.alsoResize).each(function(){var e=3Dt(this);e.data("ui-resizable-a=
lsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:=
parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function=
(e,i){var s=3Dt(this).resizable("instance"),n=3Ds.options,o=3Ds.originalSiz=
e,a=3Ds.originalPosition,r=3D{height:s.size.height-o.height||0,width:s.size=
.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||=
0};t(n.alsoResize).each(function(){var e=3Dt(this),s=3Dt(this).data("ui-res=
izable-alsoresize"),n=3D{},o=3De.parents(i.originalElement[0]).length?["wid=
th","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=
=3D(s[e]||0)+(r[e]||0);i&amp;&amp;i&gt;=3D0&amp;&amp;(n[e]=3Di||null)}),e.c=
ss(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t=
.ui.plugin.add("resizable","ghost",{start:function(){var e=3Dt(this).resiza=
ble("instance"),i=3De.size;e.ghost=3De.originalElement.clone(),e.ghost.css(=
{opacity:.25,display:"block",position:"relative",height:i.height,width:i.wi=
dth,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiB=
ackCompat!=3D=3D!1&amp;&amp;"string"=3D=3Dtypeof e.options.ghost&amp;&amp;e=
.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:func=
tion(){var e=3Dt(this).resizable("instance");e.ghost&amp;&amp;e.ghost.css({=
position:"relative",height:e.size.height,width:e.size.width})},stop:functio=
n(){var e=3Dt(this).resizable("instance");e.ghost&amp;&amp;e.helper&amp;&am=
p;e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable=
","grid",{resize:function(){var e,i=3Dt(this).resizable("instance"),s=3Di.o=
ptions,n=3Di.size,o=3Di.originalSize,a=3Di.originalPosition,r=3Di.axis,h=3D=
"number"=3D=3Dtypeof s.grid?[s.grid,s.grid]:s.grid,l=3Dh[0]||1,c=3Dh[1]||1,=
u=3DMath.round((n.width-o.width)/l)*l,d=3DMath.round((n.height-o.height)/c)=
*c,p=3Do.width+u,f=3Do.height+d,g=3Ds.maxWidth&amp;&amp;p&gt;s.maxWidth,m=
=3Ds.maxHeight&amp;&amp;f&gt;s.maxHeight,_=3Ds.minWidth&amp;&amp;s.minWidth=
&gt;p,v=3Ds.minHeight&amp;&amp;s.minHeight&gt;f;s.grid=3Dh,_&amp;&amp;(p+=
=3Dl),v&amp;&amp;(f+=3Dc),g&amp;&amp;(p-=3Dl),m&amp;&amp;(f-=3Dc),/^(se|s|e=
)$/.test(r)?(i.size.width=3Dp,i.size.height=3Df):/^(ne)$/.test(r)?(i.size.w=
idth=3Dp,i.size.height=3Df,i.position.top=3Da.top-d):/^(sw)$/.test(r)?(i.si=
ze.width=3Dp,i.size.height=3Df,i.position.left=3Da.left-u):((0&gt;=3Df-c||0=
&gt;=3Dp-l)&amp;&amp;(e=3Di._getPaddingPlusBorderDimensions(this)),f-c&gt;0=
?(i.size.height=3Df,i.position.top=3Da.top-d):(f=3Dc-e.height,i.size.height=
=3Df,i.position.top=3Da.top+o.height-f),p-l&gt;0?(i.size.width=3Dp,i.positi=
on.left=3Da.left-u):(p=3Dl-e.width,i.size.width=3Dp,i.position.left=3Da.lef=
t+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",opti=
ons:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner=
-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Clo=
se",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHe=
ight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,=
collision:"fit",using:function(e){var i=3Dt(this).css(e).offset().top;0&gt;=
i&amp;&amp;t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,w=
idth:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null=
,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRel=
atedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,min=
Width:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHei=
ght:!0,minWidth:!0},_create:function(){this.originalCss=3D{display:this.ele=
ment[0].style.display,width:this.element[0].style.width,minHeight:this.elem=
ent[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:thi=
s.element[0].style.height},this.originalPosition=3D{parent:this.element.par=
ent(),index:this.element.parent().children().index(this.element)},this.orig=
inalTitle=3Dthis.element.attr("title"),null=3D=3Dthis.options.title&amp;&am=
p;null!=3Dthis.originalTitle&amp;&amp;(this.options.title=3Dthis.originalTi=
tle),this.options.disabled&amp;&amp;(this.options.disabled=3D!1),this._crea=
teWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog)=
,this._addClass("ui-dialog-content","ui-widget-content"),this._createTitleb=
ar(),this._createButtonPane(),this.options.draggable&amp;&amp;t.fn.draggabl=
e&amp;&amp;this._makeDraggable(),this.options.resizable&amp;&amp;t.fn.resiz=
able&amp;&amp;this._makeResizable(),this._isOpen=3D!1,this._trackFocus()},_=
init:function(){this.options.autoOpen&amp;&amp;this.open()},_appendTo:funct=
ion(){var e=3Dthis.options.appendTo;return e&amp;&amp;(e.jquery||e.nodeType=
)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=3Dt=
his.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.el=
ement.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(=
),this.originalTitle&amp;&amp;this.element.attr("title",this.originalTitle)=
,t=3De.parent.children().eq(e.index),t.length&amp;&amp;t[0]!=3D=3Dthis.elem=
ent[0]?t.before(this.element):e.parent.append(this.element)},widget:functio=
n(){return this.uiDialog
},disable:t.noop,enable:t.noop,close:function(e){var i=3Dthis;this._isOpen&=
amp;&amp;this._trigger("beforeClose",e)!=3D=3D!1&amp;&amp;(this._isOpen=3D!=
1,this._focusedElement=3Dnull,this._destroyOverlay(),this._untrackInstance(=
),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t=
.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.opti=
ons.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this=
._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){=
var s=3D!1,n=3Dthis.uiDialog.siblings(".ui-front:visible").map(function(){r=
eturn+t(this).css("z-index")}).get(),o=3DMath.max.apply(null,n);return o&gt=
;=3D+this.uiDialog.css("z-index")&amp;&amp;(this.uiDialog.css("z-index",o+1=
),s=3D!0),s&amp;&amp;!i&amp;&amp;this._trigger("focus",e),s},open:function(=
){var e=3Dthis;return this._isOpen?(this._moveToTop()&amp;&amp;this._focusT=
abbable(),void 0):(this._isOpen=3D!0,this.opener=3Dt(t.ui.safeActiveElement=
(this.document[0])),this._size(),this._position(),this._createOverlay(),thi=
s._moveToTop(null,!0),this.overlay&amp;&amp;this.overlay.css("z-index",this=
.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,func=
tion(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),thi=
s._trigger("open"),void 0)},_focusTabbable:function(){var t=3Dthis._focused=
Element;t||(t=3Dthis.element.find("[autofocus]")),t.length||(t=3Dthis.eleme=
nt.find(":tabbable")),t.length||(t=3Dthis.uiDialogButtonPane.find(":tabbabl=
e")),t.length||(t=3Dthis.uiDialogTitlebarClose.filter(":tabbable")),t.lengt=
h||(t=3Dthis.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){fun=
ction i(){var e=3Dt.ui.safeActiveElement(this.document[0]),i=3Dthis.uiDialo=
g[0]=3D=3D=3De||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.p=
reventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this=
.uiDialog=3Dt("&lt;div&gt;").hide().attr({tabIndex:-1,role:"dialog"}).appen=
dTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget u=
i-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(=
this.options.closeOnEscape&amp;&amp;!e.isDefaultPrevented()&amp;&amp;e.keyC=
ode&amp;&amp;e.keyCode=3D=3D=3Dt.ui.keyCode.ESCAPE)return e.preventDefault(=
),this.close(e),void 0;if(e.keyCode=3D=3D=3Dt.ui.keyCode.TAB&amp;&amp;!e.is=
DefaultPrevented()){var i=3Dthis.uiDialog.find(":tabbable"),s=3Di.filter(":=
first"),n=3Di.filter(":last");e.target!=3D=3Dn[0]&amp;&amp;e.target!=3D=3Dt=
his.uiDialog[0]||e.shiftKey?e.target!=3D=3Ds[0]&amp;&amp;e.target!=3D=3Dthi=
s.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.=
preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDef=
ault())}},mousedown:function(t){this._moveToTop(t)&amp;&amp;this._focusTabb=
able()}}),this.element.find("[aria-describedby]").length||this.uiDialog.att=
r({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar=
:function(){var e;this.uiDialogTitlebar=3Dt("&lt;div&gt;"),this._addClass(t=
his.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clear=
fix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).clo=
sest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.u=
iDialogTitlebarClose=3Dt("&lt;button type=3D'button'&gt;&lt;/button&gt;").b=
utton({label:t("&lt;a&gt;").text(this.options.closeText).html(),icon:"ui-ic=
on-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClas=
s(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDi=
alogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=
=3Dt("&lt;span&gt;").uniqueId().prependTo(this.uiDialogTitlebar),this._addC=
lass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(th=
is.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:f=
unction(t){this.options.title?t.text(this.options.title):t.html("&amp;#160;=
")},_createButtonPane:function(){this.uiDialogButtonPane=3Dt("&lt;div&gt;")=
,this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-c=
ontent ui-helper-clearfix"),this.uiButtonSet=3Dt("&lt;div&gt;").appendTo(th=
is.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset=
"),this._createButtons()},_createButtons:function(){var e=3Dthis,i=3Dthis.o=
ptions.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.emp=
ty(),t.isEmptyObject(i)||t.isArray(i)&amp;&amp;!i.length?(this._removeClass=
(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o=
;s=3Dt.isFunction(s)?{click:s,text:i}:s,s=3Dt.extend({type:"button"},s),n=
=3Ds.click,o=3D{icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLab=
el,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPos=
ition,delete s.showLabel,delete s.icons,"boolean"=3D=3Dtypeof s.text&amp;&a=
mp;delete s.text,t("&lt;button&gt;&lt;/button&gt;",s).button(o).appendTo(e.=
uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this=
._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appen=
dTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{=
position:t.position,offset:t.offset}}var i=3Dthis,s=3Dthis.options;this.uiD=
ialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",han=
dle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._add=
Class(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart"=
,s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){=
var a=3Do.offset.left-i.document.scrollLeft(),r=3Do.offset.top-i.document.s=
crollTop();s.position=3D{my:"left top",at:"left"+(a&gt;=3D0?"+":"")+a+" "+"=
top"+(r&gt;=3D0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dr=
agging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizabl=
e:function(){function e(t){return{originalPosition:t.originalPosition,origi=
nalSize:t.originalSize,position:t.position,size:t.size}}var i=3Dthis,s=3Dth=
is.options,n=3Ds.resizable,o=3Dthis.uiDialog.css("position"),a=3D"string"=
=3D=3Dtypeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui=
-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.=
maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeigh=
t(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing")=
,i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i.=
_trigger("resize",t,e(s))},stop:function(n,o){var a=3Di.uiDialog.offset(),r=
=3Da.left-i.document.scrollLeft(),h=3Da.top-i.document.scrollTop();s.height=
=3Di.uiDialog.height(),s.width=3Di.uiDialog.width(),s.position=3D{my:"left =
top",at:"left"+(r&gt;=3D0?"+":"")+r+" "+"top"+(h&gt;=3D0?"+":"")+h,of:i.win=
dow},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._tri=
gger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this=
._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focus=
edElement=3Dt(e.target)}})},_makeFocusTarget:function(){this._untrackInstan=
ce(),this._trackingInstances().unshift(this)},_untrackInstance:function(){v=
ar e=3Dthis._trackingInstances(),i=3Dt.inArray(this,e);-1!=3D=3Di&amp;&amp;=
e.splice(i,1)},_trackingInstances:function(){var t=3Dthis.document.data("ui=
-dialog-instances");return t||(t=3D[],this.document.data("ui-dialog-instanc=
es",t)),t},_minHeight:function(){var t=3Dthis.options;return"auto"=3D=3D=3D=
t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){v=
ar t=3Dthis.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.p=
osition(this.options.position),t||this.uiDialog.hide()},_setOptions:functio=
n(e){var i=3Dthis,s=3D!1,n=3D{};t.each(e,function(t,e){i._setOption(t,e),t =
in i.sizeRelatedOptions&amp;&amp;(s=3D!0),t in i.resizableRelatedOptions&am=
p;&amp;(n[t]=3De)}),s&amp;&amp;(this._size(),this._position()),this.uiDialo=
g.is(":data(ui-resizable)")&amp;&amp;this.uiDialog.resizable("option",n)},_=
setOption:function(e,i){var s,n,o=3Dthis.uiDialog;"disabled"!=3D=3De&amp;&a=
mp;(this._super(e,i),"appendTo"=3D=3D=3De&amp;&amp;this.uiDialog.appendTo(t=
his._appendTo()),"buttons"=3D=3D=3De&amp;&amp;this._createButtons(),"closeT=
ext"=3D=3D=3De&amp;&amp;this.uiDialogTitlebarClose.button({label:t("&lt;a&g=
t;").text(""+this.options.closeText).html()}),"draggable"=3D=3D=3De&amp;&am=
p;(s=3Do.is(":data(ui-draggable)"),s&amp;&amp;!i&amp;&amp;o.draggable("dest=
roy"),!s&amp;&amp;i&amp;&amp;this._makeDraggable()),"position"=3D=3D=3De&am=
p;&amp;this._position(),"resizable"=3D=3D=3De&amp;&amp;(n=3Do.is(":data(ui-=
resizable)"),n&amp;&amp;!i&amp;&amp;o.resizable("destroy"),n&amp;&amp;"stri=
ng"=3D=3Dtypeof i&amp;&amp;o.resizable("option","handles",i),n||i=3D=3D=3D!=
1||this._makeResizable()),"title"=3D=3D=3De&amp;&amp;this._title(this.uiDia=
logTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=3Dthis=
.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none"=
,height:0}),s.minWidth&gt;s.width&amp;&amp;(s.width=3Ds.minWidth),t=3Dthis.=
uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=3DMath.max(0,s.=
minHeight-t),i=3D"number"=3D=3Dtypeof s.maxHeight?Math.max(0,s.maxHeight-t)=
:"none","auto"=3D=3D=3Ds.height?this.element.css({minHeight:e,maxHeight:i,h=
eight:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is=
(":data(ui-resizable)")&amp;&amp;this.uiDialog.resizable("option","minHeigh=
t",this._minHeight())},_blockFrames:function(){this.iframeBlocks=3Dthis.doc=
ument.find("iframe").map(function(){var e=3Dt(this);return t("&lt;div&gt;")=
.css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).app=
endTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.i=
frameBlocks&amp;&amp;(this.iframeBlocks.remove(),delete this.iframeBlocks)}=
,_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").len=
gth?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:funct=
ion(){if(this.options.modal){var e=3D!0;this._delay(function(){e=3D!1}),thi=
s.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:func=
tion(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingIns=
tances()[0]._focusTabbable())}}),this.overlay=3Dt("&lt;div&gt;").appendTo(t=
his._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-fro=
nt"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui=
-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destr=
oyOverlay:function(){if(this.options.modal&amp;&amp;this.overlay){var t=3Dt=
his.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-o=
verlays",t):(this._off(this.document,"focusin"),this.document.removeData("u=
i-dialog-overlays")),this.overlay.remove(),this.overlay=3Dnull}}}),t.uiBack=
Compat!=3D=3D!1&amp;&amp;t.widget("ui.dialog",t.ui.dialog,{options:{dialogC=
lass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(thi=
s.options.dialogClass)},_setOption:function(t,e){"dialogClass"=3D=3D=3Dt&am=
p;&amp;this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this=
._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.=
12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,=
scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:nu=
ll,out:null,over:null},_create:function(){var e,i=3Dthis.options,s=3Di.acce=
pt;this.isover=3D!1,this.isout=3D!0,this.accept=3Dt.isFunction(s)?s:functio=
n(t){return t.is(s)},this.proportions=3Dfunction(){return arguments.length?=
(e=3Darguments[0],void 0):e?e:e=3D{width:this.element[0].offsetWidth,height=
:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&am=
p;&amp;this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddman=
ager.droppables[e]=3Dt.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppa=
bles[e].push(this)},_splice:function(t){for(var e=3D0;t.length&gt;e;e++)t[e=
]=3D=3D=3Dthis&amp;&amp;t.splice(e,1)},_destroy:function(){var e=3Dt.ui.ddm=
anager.droppables[this.options.scope];this._splice(e)},_setOption:function(=
e,i){if("accept"=3D=3D=3De)this.accept=3Dt.isFunction(i)?i:function(t){retu=
rn t.is(i)};else if("scope"=3D=3D=3De){var s=3Dt.ui.ddmanager.droppables[th=
is.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_=
activate:function(e){var i=3Dt.ui.ddmanager.current;this._addActiveClass(),=
i&amp;&amp;this._trigger("activate",e,this.ui(i))},_deactivate:function(e){=
var i=3Dt.ui.ddmanager.current;this._removeActiveClass(),i&amp;&amp;this._t=
rigger("deactivate",e,this.ui(i))},_over:function(e){var i=3Dt.ui.ddmanager=
.current;i&amp;&amp;(i.currentItem||i.element)[0]!=3D=3Dthis.element[0]&amp=
;&amp;this.accept.call(this.element[0],i.currentItem||i.element)&amp;&amp;(=
this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e)=
{var i=3Dt.ui.ddmanager.current;i&amp;&amp;(i.currentItem||i.element)[0]!=
=3D=3Dthis.element[0]&amp;&amp;this.accept.call(this.element[0],i.currentIt=
em||i.element)&amp;&amp;(this._removeHoverClass(),this._trigger("out",e,thi=
s.ui(i)))},_drop:function(e,i){var s=3Di||t.ui.ddmanager.current,n=3D!1;ret=
urn s&amp;&amp;(s.currentItem||s.element)[0]!=3D=3Dthis.element[0]?(this.el=
ement.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(functi=
on(){var i=3Dt(this).droppable("instance");return i.options.greedy&amp;&amp=
;!i.options.disabled&amp;&amp;i.options.scope=3D=3D=3Ds.options.scope&amp;&=
amp;i.accept.call(i.element[0],s.currentItem||s.element)&amp;&amp;v(s,t.ext=
end(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=3D!0,!1):void =
0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._=
removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui=
(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t=
.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHov=
erClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:=
function(){this._removeClass("ui-droppable-hover")},_addActiveClass:functio=
n(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){th=
is._removeClass("ui-droppable-active")}});var v=3Dt.ui.intersect=3Dfunction=
(){function t(t,e,i){return t&gt;=3De&amp;&amp;e+i&gt;t}return function(e,i=
,s,n){if(!i.offset)return!1;var o=3D(e.positionAbs||e.position.absolute).le=
ft+e.margins.left,a=3D(e.positionAbs||e.position.absolute).top+e.margins.to=
p,r=3Do+e.helperProportions.width,h=3Da+e.helperProportions.height,l=3Di.of=
fset.left,c=3Di.offset.top,u=3Dl+i.proportions().width,d=3Dc+i.proportions(=
).height;switch(s){case"fit":return o&gt;=3Dl&amp;&amp;u&gt;=3Dr&amp;&amp;a=
&gt;=3Dc&amp;&amp;d&gt;=3Dh;case"intersect":return o+e.helperProportions.wi=
dth/2&gt;l&amp;&amp;u&gt;r-e.helperProportions.width/2&amp;&amp;a+e.helperP=
roportions.height/2&gt;c&amp;&amp;d&gt;h-e.helperProportions.height/2;case"=
pointer":return t(n.pageY,c,i.proportions().height)&amp;&amp;t(n.pageX,l,i.=
proportions().width);case"touch":return(a&gt;=3Dc&amp;&amp;d&gt;=3Da||h&gt;=
=3Dc&amp;&amp;d&gt;=3Dh||c&gt;a&amp;&amp;h&gt;d)&amp;&amp;(o&gt;=3Dl&amp;&a=
mp;u&gt;=3Do||r&gt;=3Dl&amp;&amp;u&gt;=3Dr||l&gt;o&amp;&amp;r&gt;u);default=
:return!1}}}();t.ui.ddmanager=3D{current:null,droppables:{"default":[]},pre=
pareOffsets:function(e,i){var s,n,o=3Dt.ui.ddmanager.droppables[e.options.s=
cope]||[],a=3Di?i.type:null,r=3D(e.currentItem||e.element).find(":data(ui-d=
roppable)").addBack();t:for(s=3D0;o.length&gt;s;s++)if(!(o[s].options.disab=
led||e&amp;&amp;!o[s].accept.call(o[s].element[0],e.currentItem||e.element)=
)){for(n=3D0;r.length&gt;n;n++)if(r[n]=3D=3D=3Do[s].element[0]){o[s].propor=
tions().height=3D0;continue t}o[s].visible=3D"none"!=3D=3Do[s].element.css(=
"display"),o[s].visible&amp;&amp;("mousedown"=3D=3D=3Da&amp;&amp;o[s]._acti=
vate.call(o[s],i),o[s].offset=3Do[s].element.offset(),o[s].proportions({wid=
th:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},dro=
p:function(e,i){var s=3D!1;return t.each((t.ui.ddmanager.droppables[e.optio=
ns.scope]||[]).slice(),function(){this.options&amp;&amp;(!this.options.disa=
bled&amp;&amp;this.visible&amp;&amp;v(e,this,this.options.tolerance,i)&amp;=
&amp;(s=3Dthis._drop.call(this,i)||s),!this.options.disabled&amp;&amp;this.=
visible&amp;&amp;this.accept.call(this.element[0],e.currentItem||e.element)=
&amp;&amp;(this.isout=3D!0,this.isover=3D!1,this._deactivate.call(this,i)))=
}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.dro=
ppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffset=
s(e,i)})},drag:function(e,i){e.options.refreshPositions&amp;&amp;t.ui.ddman=
ager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]|=
|[],function(){if(!this.options.disabled&amp;&amp;!this.greedyChild&amp;&am=
p;this.visible){var s,n,o,a=3Dv(e,this,this.options.tolerance,i),r=3D!a&amp=
;&amp;this.isover?"isout":a&amp;&amp;!this.isover?"isover":null;r&amp;&amp;=
(this.options.greedy&amp;&amp;(n=3Dthis.options.scope,o=3Dthis.element.pare=
nts(":data(ui-droppable)").filter(function(){return t(this).droppable("inst=
ance").options.scope=3D=3D=3Dn}),o.length&amp;&amp;(s=3Dt(o[0]).droppable("=
instance"),s.greedyChild=3D"isover"=3D=3D=3Dr)),s&amp;&amp;"isover"=3D=3D=
=3Dr&amp;&amp;(s.isover=3D!1,s.isout=3D!0,s._out.call(s,i)),this[r]=3D!0,th=
is["isout"=3D=3D=3Dr?"isover":"isout"]=3D!1,this["isover"=3D=3D=3Dr?"_over"=
:"_out"].call(this,i),s&amp;&amp;"isout"=3D=3D=3Dr&amp;&amp;(s.isout=3D!1,s=
.isover=3D!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.paren=
tsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.dd=
manager.prepareOffsets(e,i)}},t.uiBackCompat!=3D=3D!1&amp;&amp;t.widget("ui=
.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActi=
veClass:function(){this._super(),this.options.activeClass&amp;&amp;this.ele=
ment.addClass(this.options.activeClass)},_removeActiveClass:function(){this=
._super(),this.options.activeClass&amp;&amp;this.element.removeClass(this.o=
ptions.activeClass)},_addHoverClass:function(){this._super(),this.options.h=
overClass&amp;&amp;this.element.addClass(this.options.hoverClass)},_removeH=
overClass:function(){this._super(),this.options.hoverClass&amp;&amp;this.el=
ement.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.p=
rogressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner=
-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui=
-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:fu=
nction(){this.oldValue=3Dthis.options.value=3Dthis._constrainedValue(),this=
.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass=
("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=3Dt("&lt;div=
&gt;").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-=
value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.e=
lement.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.va=
lueDiv.remove()},value:function(t){return void 0=3D=3D=3Dt?this.options.val=
ue:(this.options.value=3Dthis._constrainedValue(t),this._refreshValue(),voi=
d 0)},_constrainedValue:function(t){return void 0=3D=3D=3Dt&amp;&amp;(t=3Dt=
his.options.value),this.indeterminate=3Dt=3D=3D=3D!1,"number"!=3Dtypeof t&a=
mp;&amp;(t=3D0),this.indeterminate?!1:Math.min(this.options.max,Math.max(th=
is.min,t))},_setOptions:function(t){var e=3Dt.value;delete t.value,this._su=
per(t),this.options.value=3Dthis._constrainedValue(e),this._refreshValue()}=
,_setOption:function(t,e){"max"=3D=3D=3Dt&amp;&amp;(e=3DMath.max(this.min,e=
)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.ele=
ment.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t=
)},_percentage:function(){return this.indeterminate?100:100*(this.options.v=
alue-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=
=3Dthis.options.value,i=3Dthis._percentage();this.valueDiv.toggle(this.inde=
terminate||e&gt;this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.va=
lueDiv,"ui-progressbar-complete",null,e=3D=3D=3Dthis.options.max)._toggleCl=
ass("ui-progressbar-indeterminate",null,this.indeterminate),this.indetermin=
ate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overla=
yDiv=3Dt("&lt;div&gt;").appendTo(this.valueDiv),this._addClass(this.overlay=
Div,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.op=
tions.max,"aria-valuenow":e}),this.overlayDiv&amp;&amp;(this.overlayDiv.rem=
ove(),this.overlayDiv=3Dnull)),this.oldValue!=3D=3De&amp;&amp;(this.oldValu=
e=3De,this._trigger("change")),e=3D=3D=3Dthis.options.max&amp;&amp;this._tr=
igger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",=
options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"to=
uch",selected:null,selecting:null,start:null,stop:null,unselected:null,unse=
lecting:null},_create:function(){var e=3Dthis;this._addClass("ui-selectable=
"),this.dragged=3D!1,this.refresh=3Dfunction(){e.elementPos=3Dt(e.element[0=
]).offset(),e.selectees=3Dt(e.options.filter,e.element[0]),e._addClass(e.se=
lectees,"ui-selectee"),e.selectees.each(function(){var i=3Dt(this),s=3Di.of=
fset(),n=3D{left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.dat=
a(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,rig=
ht:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,sele=
cted:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselec=
ting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),thi=
s.helper=3Dt("&lt;div&gt;"),this._addClass(this.helper,"ui-selectable-helpe=
r")},_destroy:function(){this.selectees.removeData("selectable-item"),this.=
_mouseDestroy()},_mouseStart:function(e){var i=3Dthis,s=3Dthis.options;this=
.opos=3D[e.pageX,e.pageY],this.elementPos=3Dt(this.element[0]).offset(),thi=
s.options.disabled||(this.selectees=3Dt(s.filter,this.element[0]),this._tri=
gger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.p=
ageX,top:e.pageY,width:0,height:0}),s.autoRefresh&amp;&amp;this.refresh(),t=
his.selectees.filter(".ui-selected").each(function(){var s=3Dt.data(this,"s=
electable-item");s.startselected=3D!0,e.metaKey||e.ctrlKey||(i._removeClass=
(s.$element,"ui-selected"),s.selected=3D!1,i._addClass(s.$element,"ui-unsel=
ecting"),s.unselecting=3D!0,i._trigger("unselecting",e,{unselecting:s.eleme=
nt}))}),t(e.target).parents().addBack().each(function(){var s,n=3Dt.data(th=
is,"selectable-item");return n?(s=3D!e.metaKey&amp;&amp;!e.ctrlKey||!n.$ele=
ment.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"=
ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.uns=
electing=3D!s,n.selecting=3Ds,n.selected=3Ds,s?i._trigger("selecting",e,{se=
lecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1)=
:void 0}))},_mouseDrag:function(e){if(this.dragged=3D!0,!this.options.disab=
led){var i,s=3Dthis,n=3Dthis.options,o=3Dthis.opos[0],a=3Dthis.opos[1],r=3D=
e.pageX,h=3De.pageY;return o&gt;r&amp;&amp;(i=3Dr,r=3Do,o=3Di),a&gt;h&amp;&=
amp;(i=3Dh,h=3Da,a=3Di),this.helper.css({left:o,top:a,width:r-o,height:h-a}=
),this.selectees.each(function(){var i=3Dt.data(this,"selectable-item"),l=
=3D!1,c=3D{};i&amp;&amp;i.element!=3D=3Ds.element[0]&amp;&amp;(c.left=3Di.l=
eft+s.elementPos.left,c.right=3Di.right+s.elementPos.left,c.top=3Di.top+s.e=
lementPos.top,c.bottom=3Di.bottom+s.elementPos.top,"touch"=3D=3D=3Dn.tolera=
nce?l=3D!(c.left&gt;r||o&gt;c.right||c.top&gt;h||a&gt;c.bottom):"fit"=3D=3D=
=3Dn.tolerance&amp;&amp;(l=3Dc.left&gt;o&amp;&amp;r&gt;c.right&amp;&amp;c.t=
op&gt;a&amp;&amp;h&gt;c.bottom),l?(i.selected&amp;&amp;(s._removeClass(i.$e=
lement,"ui-selected"),i.selected=3D!1),i.unselecting&amp;&amp;(s._removeCla=
ss(i.$element,"ui-unselecting"),i.unselecting=3D!1),i.selecting||(s._addCla=
ss(i.$element,"ui-selecting"),i.selecting=3D!0,s._trigger("selecting",e,{se=
lecting:i.element}))):(i.selecting&amp;&amp;((e.metaKey||e.ctrlKey)&amp;&am=
p;i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=3D=
!1,s._addClass(i.$element,"ui-selected"),i.selected=3D!0):(s._removeClass(i=
.$element,"ui-selecting"),i.selecting=3D!1,i.startselected&amp;&amp;(s._add=
Class(i.$element,"ui-unselecting"),i.unselecting=3D!0),s._trigger("unselect=
ing",e,{unselecting:i.element}))),i.selected&amp;&amp;(e.metaKey||e.ctrlKey=
||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=3D!=
1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=3D!0,s._trigger("u=
nselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){va=
r i=3Dthis;return this.dragged=3D!1,t(".ui-unselecting",this.element[0]).ea=
ch(function(){var s=3Dt.data(this,"selectable-item");i._removeClass(s.$elem=
ent,"ui-unselecting"),s.unselecting=3D!1,s.startselected=3D!1,i._trigger("u=
nselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).e=
ach(function(){var s=3Dt.data(this,"selectable-item");i._removeClass(s.$ele=
ment,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=3D!1,s=
.selected=3D!0,s.startselected=3D!0,i._trigger("selected",e,{selected:s.ele=
ment})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.se=
lectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"&lt;select=
&gt;",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corne=
r-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{=
button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",col=
lision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:=
null},_create:function(){var e=3Dthis.element.uniqueId().attr("id");this.id=
s=3D{element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._=
drawMenu(),this._bindFormResetHandler(),this._rendered=3D!1,this.menuItems=
=3Dt()},_drawButton:function(){var e,i=3Dthis,s=3Dthis._parseOption(this.el=
ement.find("option:selected"),this.element[0].selectedIndex);this.labels=3D=
this.element.labels().attr("for",this.ids.button),this._on(this.labels,{cli=
ck:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(=
),this.button=3Dt("&lt;span&gt;",{tabindex:this.options.disabled?-1:0,id:th=
is.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"=
list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.a=
ttr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-sel=
ectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=3Dt("&=
lt;span&gt;").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","=
ui-icon "+this.options.icons.button),this.buttonItem=3Dthis._renderButtonIt=
em(s).appendTo(this.button),this.options.width!=3D=3D!1&amp;&amp;this._resi=
zeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusi=
n",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=
=3Dthis;this.menu=3Dt("&lt;ul&gt;",{"aria-hidden":"true","aria-labelledby":=
this.ids.button,id:this.ids.menu}),this.menuWrap=3Dt("&lt;div&gt;").append(=
this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),th=
is.menuWrap.appendTo(this._appendTo()),this.menuInstance=3Dthis.menu.menu({=
classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){=
t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-i=
tem"),t)},focus:function(t,i){var s=3Di.item.data("ui-selectmenu-item");nul=
l!=3De.focusIndex&amp;&amp;s.index!=3D=3De.focusIndex&amp;&amp;(e._trigger(=
"focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=3Ds.index,e.butt=
on.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu=
("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstan=
ce._closeOnDocumentClick=3Dfunction(){return!1},this.menuInstance._isDivide=
r=3Dfunction(){return!1}},refresh:function(){this._refreshMenu(),this.butto=
nItem.replaceWith(this.buttonItem=3Dthis._renderButtonItem(this._getSelecte=
dItem().data("ui-selectmenu-item")||{})),null=3D=3D=3Dthis.options.width&am=
p;&amp;this._resizeButton()},_refreshMenu:function(){var t,e=3Dthis.element=
.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(th=
is.menu,this.items),this.menuInstance.refresh(),this.menuItems=3Dthis.menu.=
find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),thi=
s._rendered=3D!0,e.length&amp;&amp;(t=3Dthis._getSelectedItem(),this.menuIn=
stance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setO=
ption("disabled",this.element.prop("disabled")))},open:function(t){this.opt=
ions.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state=
-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSel=
ectedItem())):this._refreshMenu(),this.menuItems.length&amp;&amp;(this.isOp=
en=3D!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(thi=
s.document,this._documentClick),this._trigger("open",t)))},_position:functi=
on(){this.menuWrap.position(t.extend({of:this.button},this.options.position=
))},close:function(t){this.isOpen&amp;&amp;(this.isOpen=3D!1,this._toggleAt=
tr(),this.range=3Dnull,this._off(this.document),this._trigger("close",t))},=
widget:function(){return this.button},menuWidget:function(){return this.men=
u},_renderButtonItem:function(e){var i=3Dt("&lt;span&gt;");return this._set=
Text(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:funct=
ion(e,i){var s=3Dthis,n=3D"";t.each(i,function(i,o){var a;o.optgroup!=3D=3D=
n&amp;&amp;(a=3Dt("&lt;li&gt;",{text:o.optgroup}),s._addClass(a,"ui-selectm=
enu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disable=
d")?" ui-state-disabled":"")),a.appendTo(e),n=3Do.optgroup),s._renderItemDa=
ta(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data(=
"ui-selectmenu-item",e)},_renderItem:function(e,i){var s=3Dt("&lt;li&gt;"),=
n=3Dt("&lt;div&gt;",{title:i.element.attr("title")});return i.disabled&amp;=
&amp;this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.=
append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&amp;#160=
;")},_move:function(t,e){var i,s,n=3D".ui-menu-item";this.isOpen?i=3Dthis.m=
enuItems.eq(this.focusIndex).parent("li"):(i=3Dthis.menuItems.eq(this.eleme=
nt[0].selectedIndex).parent("li"),n+=3D":not(.ui-state-disabled)"),s=3D"fir=
st"=3D=3D=3Dt||"last"=3D=3D=3Dt?i["first"=3D=3D=3Dt?"prevAll":"nextAll"](n)=
.eq(-1):i[t+"All"](n).eq(0),s.length&amp;&amp;this.menuInstance.focus(e,s)}=
,_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selec=
tedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"=
](t)},_setSelection:function(){var t;this.range&amp;&amp;(window.getSelecti=
on?(t=3Dwindow.getSelection(),t.removeAllRanges(),t.addRange(this.range)):t=
his.range.select(),this.button.focus())},_documentClick:{mousedown:function=
(e){this.isOpen&amp;&amp;(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui=
.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{m=
ousedown:function(){var t;window.getSelection?(t=3Dwindow.getSelection(),t.=
rangeCount&amp;&amp;(this.range=3Dt.getRangeAt(0))):this.range=3Ddocument.s=
election.createRange()},click:function(t){this._setSelection(),this._toggle=
(t)},keydown:function(e){var i=3D!0;switch(e.keyCode){case t.ui.keyCode.TAB=
:case t.ui.keyCode.ESCAPE:this.close(e),i=3D!1;break;case t.ui.keyCode.ENTE=
R:this.isOpen&amp;&amp;this._selectFocusedItem(e);break;case t.ui.keyCode.U=
P:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOW=
N:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPA=
CE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.k=
eyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("=
next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move(=
"first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._mo=
ve("last",e);break;default:this.menu.trigger(e),i=3D!1}i&amp;&amp;e.prevent=
Default()}},_selectFocusedItem:function(t){var e=3Dthis.menuItems.eq(this.f=
ocusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.dat=
a("ui-selectmenu-item"),t)},_select:function(t,e){var i=3Dthis.element[0].s=
electedIndex;this.element[0].selectedIndex=3Dt.index,this.buttonItem.replac=
eWith(this.buttonItem=3Dthis._renderButtonItem(t)),this._setAria(t),this._t=
rigger("select",e,{item:t}),t.index!=3D=3Di&amp;&amp;this._trigger("change"=
,e,{item:t}),this.close(e)},_setAria:function(t){var e=3Dthis.menuItems.eq(=
t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedesce=
ndant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t=
,e){if("icons"=3D=3D=3Dt){var i=3Dthis.button.find("span.ui-icon");this._re=
moveClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this=
._super(t,e),"appendTo"=3D=3D=3Dt&amp;&amp;this.menuWrap.appendTo(this._app=
endTo()),"width"=3D=3D=3Dt&amp;&amp;this._resizeButton()},_setOptionDisable=
d:function(t){this._super(t),this.menuInstance.option("disabled",t),this.bu=
tton.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-d=
isabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",=
-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var =
e=3Dthis.options.appendTo;return e&amp;&amp;(e=3De.jquery||e.nodeType?t(e):=
this.document.find(e).eq(0)),e&amp;&amp;e[0]||(e=3Dthis.element.closest(".u=
i-front, dialog")),e.length||(e=3Dthis.document[0].body),e},_toggleAttr:fun=
ction(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(thi=
s.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(t=
his.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleCl=
ass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("ar=
ia-hidden",!this.isOpen)},_resizeButton:function(){var t=3Dthis.options.wid=
th;return t=3D=3D=3D!1?(this.button.css("width",""),void 0):(null=3D=3D=3Dt=
&amp;&amp;(t=3Dthis.element.show().outerWidth(),this.element.hide()),this.b=
utton.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Ma=
th.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getC=
reateOptions:function(){var t=3Dthis._super();return t.disabled=3Dthis.elem=
ent.prop("disabled"),t},_parseOptions:function(e){var i=3Dthis,s=3D[];e.eac=
h(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=3Ds},_parseOpti=
on:function(t,e){var i=3Dt.parent("optgroup");return{element:t,index:e,valu=
e:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disa=
bled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandl=
er(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.e=
lement.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widg=
et("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",optio=
ns:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-=
corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,=
max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,=
change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){=
this._keySliding=3D!1,this._mouseSliding=3D!1,this._animateOff=3D!0,this._h=
andleIndex=3Dnull,this._detectOrientation(),this._mouseInit(),this._calcula=
teNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widge=
t ui-widget-content"),this._refresh(),this._animateOff=3D!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setup=
Events(),this._refreshValue()},_createHandles:function(){var e,i,s=3Dthis.o=
ptions,n=3Dthis.element.find(".ui-slider-handle"),o=3D"&lt;span tabindex=3D=
'0'&gt;&lt;/span&gt;",a=3D[];for(i=3Ds.values&amp;&amp;s.values.length||1,n=
.length&gt;i&amp;&amp;(n.slice(i).remove(),n=3Dn.slice(0,i)),e=3Dn.length;i=
&gt;e;e++)a.push(o);this.handles=3Dn.add(t(a.join("")).appendTo(this.elemen=
t)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this=
.handle=3Dthis.handles.eq(0),this.handles.each(function(e){t(this).data("ui=
-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var =
e=3Dthis.options;e.range?(e.range=3D=3D=3D!0&amp;&amp;(e.values?e.values.le=
ngth&amp;&amp;2!=3D=3De.values.length?e.values=3D[e.values[0],e.values[0]]:=
t.isArray(e.values)&amp;&amp;(e.values=3De.values.slice(0)):e.values=3D[thi=
s._valueMin(),this._valueMin()]),this.range&amp;&amp;this.range.length?(thi=
s._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.r=
ange.css({left:"",bottom:""})):(this.range=3Dt("&lt;div&gt;").appendTo(this=
.element),this._addClass(this.range,"ui-slider-range")),("min"=3D=3D=3De.ra=
nge||"max"=3D=3D=3De.range)&amp;&amp;this._addClass(this.range,"ui-slider-r=
ange-"+e.range)):(this.range&amp;&amp;this.range.remove(),this.range=3Dnull=
)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,th=
is._handleEvents),this._hoverable(this.handles),this._focusable(this.handle=
s)},_destroy:function(){this.handles.remove(),this.range&amp;&amp;this.rang=
e.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,=
h,l,c=3Dthis,u=3Dthis.options;return u.disabled?!1:(this.elementSize=3D{wid=
th:this.element.outerWidth(),height:this.element.outerHeight()},this.elemen=
tOffset=3Dthis.element.offset(),i=3D{x:e.pageX,y:e.pageY},s=3Dthis._normVal=
ueFromMouse(i),n=3Dthis._valueMax()-this._valueMin()+1,this.handles.each(fu=
nction(e){var i=3DMath.abs(s-c.values(e));(n&gt;i||n=3D=3D=3Di&amp;&amp;(e=
=3D=3D=3Dc._lastChangedValue||c.values(e)=3D=3D=3Du.min))&amp;&amp;(n=3Di,o=
=3Dt(this),a=3De)}),r=3Dthis._start(e,a),r=3D=3D=3D!1?!1:(this._mouseSlidin=
g=3D!0,this._handleIndex=3Da,this._addClass(o,null,"ui-state-active"),o.tri=
gger("focus"),h=3Do.offset(),l=3D!t(e.target).parents().addBack().is(".ui-s=
lider-handle"),this._clickOffset=3Dl?{left:0,top:0}:{left:e.pageX-h.left-o.=
width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),=
10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("margi=
nTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s)=
,this._animateOff=3D!0,!0))},_mouseStart:function(){return!0},_mouseDrag:fu=
nction(t){var e=3D{x:t.pageX,y:t.pageY},i=3Dthis._normValueFromMouse(e);ret=
urn this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return th=
is._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=3D!=
1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._h=
andleIndex=3Dnull,this._clickOffset=3Dnull,this._animateOff=3D!1,!1},_detec=
tOrientation:function(){this.orientation=3D"vertical"=3D=3D=3Dthis.options.=
orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,=
i,s,n,o;return"horizontal"=3D=3D=3Dthis.orientation?(e=3Dthis.elementSize.w=
idth,i=3Dt.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.l=
eft:0)):(e=3Dthis.elementSize.height,i=3Dt.y-this.elementOffset.top-(this._=
clickOffset?this._clickOffset.top:0)),s=3Di/e,s&gt;1&amp;&amp;(s=3D1),0&gt;=
s&amp;&amp;(s=3D0),"vertical"=3D=3D=3Dthis.orientation&amp;&amp;(s=3D1-s),n=
=3Dthis._valueMax()-this._valueMin(),o=3Dthis._valueMin()+s*n,this._trimAli=
gnValue(o)},_uiHash:function(t,e,i){var s=3D{handle:this.handles[t],handleI=
ndex:t,value:void 0!=3D=3De?e:this.value()};return this._hasMultipleValues(=
)&amp;&amp;(s.value=3Dvoid 0!=3D=3De?e:this.values(t),s.values=3Di||this.va=
lues()),s},_hasMultipleValues:function(){return this.options.values&amp;&am=
p;this.options.values.length},_start:function(t,e){return this._trigger("st=
art",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=3Dthis.value(),a=
=3Dthis.values();this._hasMultipleValues()&amp;&amp;(n=3Dthis.values(e?0:1)=
,o=3Dthis.values(e),2=3D=3D=3Dthis.options.values.length&amp;&amp;this.opti=
ons.range=3D=3D=3D!0&amp;&amp;(i=3D0=3D=3D=3De?Math.min(n,i):Math.max(n,i))=
,a[e]=3Di),i!=3D=3Do&amp;&amp;(s=3Dthis._trigger("slide",t,this._uiHash(e,i=
,a)),s!=3D=3D!1&amp;&amp;(this._hasMultipleValues()?this.values(e,i):this.v=
alue(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_ch=
ange:function(t,e){this._keySliding||this._mouseSliding||(this._lastChanged=
Value=3De,this._trigger("change",t,this._uiHash(e)))},value:function(t){ret=
urn arguments.length?(this.options.value=3Dthis._trimAlignValue(t),this._re=
freshValue(),this._change(null,0),void 0):this._value()},values:function(e,=
i){var s,n,o;if(arguments.length&gt;1)return this.options.values[e]=3Dthis.=
_trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arg=
uments.length)return this._values();if(!t.isArray(arguments[0]))return this=
._hasMultipleValues()?this._values(e):this.value();for(s=3Dthis.options.val=
ues,n=3Darguments[0],o=3D0;s.length&gt;o;o+=3D1)s[o]=3Dthis._trimAlignValue=
(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){=
var s,n=3D0;switch("range"=3D=3D=3De&amp;&amp;this.options.range=3D=3D=3D!0=
&amp;&amp;("min"=3D=3D=3Di?(this.options.value=3Dthis._values(0),this.optio=
ns.values=3Dnull):"max"=3D=3D=3Di&amp;&amp;(this.options.value=3Dthis._valu=
es(this.options.values.length-1),this.options.values=3Dnull)),t.isArray(thi=
s.options.values)&amp;&amp;(n=3Dthis.options.values.length),this._super(e,i=
),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slid=
er-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation)=
,this._refreshValue(),this.options.range&amp;&amp;this._refreshRange(i),thi=
s.handles.css("horizontal"=3D=3D=3Di?"bottom":"left","");break;case"value":=
this._animateOff=3D!0,this._refreshValue(),this._change(null,0),this._anima=
teOff=3D!1;break;case"values":for(this._animateOff=3D!0,this._refreshValue(=
),s=3Dn-1;s&gt;=3D0;s--)this._change(null,s);this._animateOff=3D!1;break;ca=
se"step":case"min":case"max":this._animateOff=3D!0,this._calculateNewMax(),=
this._refreshValue(),this._animateOff=3D!1;break;case"range":this._animateO=
ff=3D!0,this._refresh(),this._animateOff=3D!1}},_setOptionDisabled:function=
(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:=
function(){var t=3Dthis.options.value;return t=3Dthis._trimAlignValue(t)},_=
values:function(t){var e,i,s;if(arguments.length)return e=3Dthis.options.va=
lues[t],e=3Dthis._trimAlignValue(e);if(this._hasMultipleValues()){for(i=3Dt=
his.options.values.slice(),s=3D0;i.length&gt;s;s+=3D1)i[s]=3Dthis._trimAlig=
nValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueM=
in()&gt;=3Dt)return this._valueMin();if(t&gt;=3Dthis._valueMax())return thi=
s._valueMax();var e=3Dthis.options.step&gt;0?this.options.step:1,i=3D(t-thi=
s._valueMin())%e,s=3Dt-i;return 2*Math.abs(i)&gt;=3De&amp;&amp;(s+=3Di&gt;0=
?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=3Dthis.o=
ptions.max,e=3Dthis._valueMin(),i=3Dthis.options.step,s=3DMath.round((t-e)/=
i)*i;t=3Ds+e,t&gt;this.options.max&amp;&amp;(t-=3Di),this.max=3DparseFloat(=
t.toFixed(this._precision()))},_precision:function(){var t=3Dthis._precisio=
nOf(this.options.step);return null!=3D=3Dthis.options.min&amp;&amp;(t=3DMat=
h.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){v=
ar e=3D""+t,i=3De.indexOf(".");return-1=3D=3D=3Di?0:e.length-i-1},_valueMin=
:function(){return this.options.min},_valueMax:function(){return this.max},=
_refreshRange:function(t){"vertical"=3D=3D=3Dt&amp;&amp;this.range.css({wid=
th:"",left:""}),"horizontal"=3D=3D=3Dt&amp;&amp;this.range.css({height:"",b=
ottom:""})},_refreshValue:function(){var e,i,s,n,o,a=3Dthis.options.range,r=
=3Dthis.options,h=3Dthis,l=3Dthis._animateOff?!1:r.animate,c=3D{};this._has=
MultipleValues()?this.handles.each(function(s){i=3D100*((h.values(s)-h._val=
ueMin())/(h._valueMax()-h._valueMin())),c["horizontal"=3D=3D=3Dh.orientatio=
n?"left":"bottom"]=3Di+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate=
),h.options.range=3D=3D=3D!0&amp;&amp;("horizontal"=3D=3D=3Dh.orientation?(=
0=3D=3D=3Ds&amp;&amp;h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.an=
imate),1=3D=3D=3Ds&amp;&amp;h.range[l?"animate":"css"]({width:i-e+"%"},{que=
ue:!1,duration:r.animate})):(0=3D=3D=3Ds&amp;&amp;h.range.stop(1,1)[l?"anim=
ate":"css"]({bottom:i+"%"},r.animate),1=3D=3D=3Ds&amp;&amp;h.range[l?"anima=
te":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=3Di}):(s=3Dt=
his.value(),n=3Dthis._valueMin(),o=3Dthis._valueMax(),i=3Do!=3D=3Dn?100*((s=
-n)/(o-n)):0,c["horizontal"=3D=3D=3Dthis.orientation?"left":"bottom"]=3Di+"=
%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"=3D=3D=3Da&am=
p;&amp;"horizontal"=3D=3D=3Dthis.orientation&amp;&amp;this.range.stop(1,1)[=
l?"animate":"css"]({width:i+"%"},r.animate),"max"=3D=3D=3Da&amp;&amp;"horiz=
ontal"=3D=3D=3Dthis.orientation&amp;&amp;this.range.stop(1,1)[l?"animate":"=
css"]({width:100-i+"%"},r.animate),"min"=3D=3D=3Da&amp;&amp;"vertical"=3D=
=3D=3Dthis.orientation&amp;&amp;this.range.stop(1,1)[l?"animate":"css"]({he=
ight:i+"%"},r.animate),"max"=3D=3D=3Da&amp;&amp;"vertical"=3D=3D=3Dthis.ori=
entation&amp;&amp;this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"=
},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=3Dt(e.targe=
t).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:=
case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN=
:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t=
.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&amp;&amp;(this._ke=
ySliding=3D!0,this._addClass(t(e.target),null,"ui-state-active"),i=3Dthis._=
start(e,a),i=3D=3D=3D!1))return}switch(o=3Dthis.options.step,s=3Dn=3Dthis._=
hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCod=
e.HOME:n=3Dthis._valueMin();break;case t.ui.keyCode.END:n=3Dthis._valueMax(=
);break;case t.ui.keyCode.PAGE_UP:n=3Dthis._trimAlignValue(s+(this._valueMa=
x()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=3D=
this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);b=
reak;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s=3D=3D=3Dthis._valueM=
ax())return;n=3Dthis._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case=
 t.ui.keyCode.LEFT:if(s=3D=3D=3Dthis._valueMin())return;n=3Dthis._trimAlign=
Value(s-o)}this._slide(e,a,n)},keyup:function(e){var i=3Dt(e.target).data("=
ui-slider-handle-index");this._keySliding&amp;&amp;(this._keySliding=3D!1,t=
his._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-sta=
te-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widget=
EventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:=
!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholder=
Size:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"&gt; =
*",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrol=
lSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,be=
foreStop:null,change:null,deactivate:null,out:null,over:null,receive:null,r=
emove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function=
(t,e,i){return t&gt;=3De&amp;&amp;e+i&gt;t},_isFloating:function(t){return/=
left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display")=
)},_create:function(){this.containerCache=3D{},this._addClass("ui-sortable"=
),this.refresh(),this.offset=3Dthis.element.offset(),this._mouseInit(),this=
._setHandleClassName(),this.ready=3D!0},_setOption:function(t,e){this._supe=
r(t,e),"handle"=3D=3D=3Dt&amp;&amp;this._setHandleClassName()},_setHandleCl=
assName:function(){var e=3Dthis;this._removeClass(this.element.find(".ui-so=
rtable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addCl=
ass(this.instance.options.handle?this.item.find(this.instance.options.handl=
e):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestro=
y();for(var t=3Dthis.items.length-1;t&gt;=3D0;t--)this.items[t].item.remove=
Data(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var =
s=3Dnull,n=3D!1,o=3Dthis;return this.reverting?!1:this.options.disabled||"s=
tatic"=3D=3D=3Dthis.options.type?!1:(this._refreshItems(e),t(e.target).pare=
nts().each(function(){return t.data(this,o.widgetName+"-item")=3D=3D=3Do?(s=
=3Dt(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")=3D=3D=3Do&amp=
;&amp;(s=3Dt(e.target)),s?!this.options.handle||i||(t(this.options.handle,s=
).find("*").addBack().each(function(){this=3D=3D=3De.target&amp;&amp;(n=3D!=
0)}),n)?(this.currentItem=3Ds,this._removeCurrentsFromItems(),!0):!1:!1)},_=
mouseStart:function(e,i,s){var n,o,a=3Dthis.options;if(this.currentContaine=
r=3Dthis,this.refreshPositions(),this.helper=3Dthis._createHelper(e),this._=
cacheHelperProportions(),this._cacheMargins(),this.scrollParent=3Dthis.help=
er.scrollParent(),this.offset=3Dthis.currentItem.offset(),this.offset=3D{to=
p:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}=
,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-thi=
s.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffs=
et()}),this.helper.css("position","absolute"),this.cssPosition=3Dthis.helpe=
r.css("position"),this.originalPosition=3Dthis._generatePosition(e),this.or=
iginalPageX=3De.pageX,this.originalPageY=3De.pageY,a.cursorAt&amp;&amp;this=
._adjustOffsetFromHelper(a.cursorAt),this.domPosition=3D{prev:this.currentI=
tem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=3D=3Dthi=
s.currentItem[0]&amp;&amp;this.currentItem.hide(),this._createPlaceholder()=
,a.containment&amp;&amp;this._setContainment(),a.cursor&amp;&amp;"auto"!=3D=
=3Da.cursor&amp;&amp;(o=3Dthis.document.find("body"),this.storedCursor=3Do.=
css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=3Dt("&lt;style=
&gt;*{ cursor: "+a.cursor+" !important; }&lt;/style&gt;").appendTo(o)),a.op=
acity&amp;&amp;(this.helper.css("opacity")&amp;&amp;(this._storedOpacity=3D=
this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&=
amp;&amp;(this.helper.css("zIndex")&amp;&amp;(this._storedZIndex=3Dthis.hel=
per.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]=
!=3D=3Dthis.document[0]&amp;&amp;"HTML"!=3D=3Dthis.scrollParent[0].tagName&=
amp;&amp;(this.overflowOffset=3Dthis.scrollParent.offset()),this._trigger("=
start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelper=
Proportions(),!s)for(n=3Dthis.containers.length-1;n&gt;=3D0;n--)this.contai=
ners[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&amp=
;&amp;(t.ui.ddmanager.current=3Dthis),t.ui.ddmanager&amp;&amp;!a.dropBehavi=
our&amp;&amp;t.ui.ddmanager.prepareOffsets(this,e),this.dragging=3D!0,this.=
_addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDr=
ag:function(e){var i,s,n,o,a=3Dthis.options,r=3D!1;for(this.position=3Dthis=
._generatePosition(e),this.positionAbs=3Dthis._convertPositionTo("absolute"=
),this.lastPositionAbs||(this.lastPositionAbs=3Dthis.positionAbs),this.opti=
ons.scroll&amp;&amp;(this.scrollParent[0]!=3D=3Dthis.document[0]&amp;&amp;"=
HTML"!=3D=3Dthis.scrollParent[0].tagName?(this.overflowOffset.top+this.scro=
llParent[0].offsetHeight-e.pageY&lt;a.scrollSensitivity?this.scrollParent[0=
].scrollTop=3Dr=3Dthis.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this=
.overflowOffset.top&lt;a.scrollSensitivity&amp;&amp;(this.scrollParent[0].s=
crollTop=3Dr=3Dthis.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowO=
ffset.left+this.scrollParent[0].offsetWidth-e.pageX&lt;a.scrollSensitivity?=
this.scrollParent[0].scrollLeft=3Dr=3Dthis.scrollParent[0].scrollLeft+a.scr=
ollSpeed:e.pageX-this.overflowOffset.left&lt;a.scrollSensitivity&amp;&amp;(=
this.scrollParent[0].scrollLeft=3Dr=3Dthis.scrollParent[0].scrollLeft-a.scr=
ollSpeed)):(e.pageY-this.document.scrollTop()&lt;a.scrollSensitivity?r=3Dth=
is.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.=
height()-(e.pageY-this.document.scrollTop())&lt;a.scrollSensitivity&amp;&am=
p;(r=3Dthis.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.=
pageX-this.document.scrollLeft()&lt;a.scrollSensitivity?r=3Dthis.document.s=
crollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.=
pageX-this.document.scrollLeft())&lt;a.scrollSensitivity&amp;&amp;(r=3Dthis=
.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!=3D=3D!1=
&amp;&amp;t.ui.ddmanager&amp;&amp;!a.dropBehaviour&amp;&amp;t.ui.ddmanager.=
prepareOffsets(this,e)),this.positionAbs=3Dthis._convertPositionTo("absolut=
e"),this.options.axis&amp;&amp;"y"=3D=3D=3Dthis.options.axis||(this.helper[=
0].style.left=3Dthis.position.left+"px"),this.options.axis&amp;&amp;"x"=3D=
=3D=3Dthis.options.axis||(this.helper[0].style.top=3Dthis.position.top+"px"=
),i=3Dthis.items.length-1;i&gt;=3D0;i--)if(s=3Dthis.items[i],n=3Ds.item[0],=
o=3Dthis._intersectsWithPointer(s),o&amp;&amp;s.instance=3D=3D=3Dthis.curre=
ntContainer&amp;&amp;n!=3D=3Dthis.currentItem[0]&amp;&amp;this.placeholder[=
1=3D=3D=3Do?"next":"prev"]()[0]!=3D=3Dn&amp;&amp;!t.contains(this.placehold=
er[0],n)&amp;&amp;("semi-dynamic"=3D=3D=3Dthis.options.type?!t.contains(thi=
s.element[0],n):!0)){if(this.direction=3D1=3D=3D=3Do?"down":"up","pointer"!=
=3D=3Dthis.options.tolerance&amp;&amp;!this._intersectsWithSides(s))break;t=
his._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return t=
his._contactContainers(e),t.ui.ddmanager&amp;&amp;t.ui.ddmanager.drag(this,=
e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=3Dthis.posit=
ionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&amp;&amp;!this.=
options.dropBehaviour&amp;&amp;t.ui.ddmanager.drop(this,e),this.options.rev=
ert){var s=3Dthis,n=3Dthis.placeholder.offset(),o=3Dthis.options.axis,a=3D{=
};o&amp;&amp;"x"!=3D=3Do||(a.left=3Dn.left-this.offset.parent.left-this.mar=
gins.left+(this.offsetParent[0]=3D=3D=3Dthis.document[0].body?0:this.offset=
Parent[0].scrollLeft)),o&amp;&amp;"y"!=3D=3Do||(a.top=3Dn.top-this.offset.p=
arent.top-this.margins.top+(this.offsetParent[0]=3D=3D=3Dthis.document[0].b=
ody?0:this.offsetParent[0].scrollTop)),this.reverting=3D!0,t(this.helper).a=
nimate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}els=
e this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mou=
seUp(new t.Event("mouseup",{target:null})),"original"=3D=3D=3Dthis.options.=
helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.curren=
tItem,"ui-sortable-helper")):this.currentItem.show();for(var e=3Dthis.conta=
iners.length-1;e&gt;=3D0;e--)this.containers[e]._trigger("deactivate",null,=
this._uiHash(this)),this.containers[e].containerCache.over&amp;&amp;(this.c=
ontainers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].con=
tainerCache.over=3D0)}return this.placeholder&amp;&amp;(this.placeholder[0]=
.parentNode&amp;&amp;this.placeholder[0].parentNode.removeChild(this.placeh=
older[0]),"original"!=3D=3Dthis.options.helper&amp;&amp;this.helper&amp;&am=
p;this.helper[0].parentNode&amp;&amp;this.helper.remove(),t.extend(this,{he=
lper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.pre=
v?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.paren=
t).prepend(this.currentItem)),this},serialize:function(e){var i=3Dthis._get=
ItemsAsjQuery(e&amp;&amp;e.connected),s=3D[];return e=3De||{},t(i).each(fun=
ction(){var i=3D(t(e.item||this).attr(e.attribute||"id")||"").match(e.expre=
ssion||/(.+)[\-=3D_](.+)/);i&amp;&amp;s.push((e.key||i[1]+"[]")+"=3D"+(e.ke=
y&amp;&amp;e.expression?i[1]:i[2]))}),!s.length&amp;&amp;e.key&amp;&amp;s.p=
ush(e.key+"=3D"),s.join("&amp;")},toArray:function(e){var i=3Dthis._getItem=
sAsjQuery(e&amp;&amp;e.connected),s=3D[];return e=3De||{},i.each(function()=
{s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:f=
unction(t){var e=3Dthis.positionAbs.left,i=3De+this.helperProportions.width=
,s=3Dthis.positionAbs.top,n=3Ds+this.helperProportions.height,o=3Dt.left,a=
=3Do+t.width,r=3Dt.top,h=3Dr+t.height,l=3Dthis.offset.click.top,c=3Dthis.of=
fset.click.left,u=3D"x"=3D=3D=3Dthis.options.axis||s+l&gt;r&amp;&amp;h&gt;s=
+l,d=3D"y"=3D=3D=3Dthis.options.axis||e+c&gt;o&amp;&amp;a&gt;e+c,p=3Du&amp;=
&amp;d;return"pointer"=3D=3D=3Dthis.options.tolerance||this.options.forcePo=
interForContainers||"pointer"!=3D=3Dthis.options.tolerance&amp;&amp;this.he=
lperProportions[this.floating?"width":"height"]&gt;t[this.floating?"width":=
"height"]?p:e+this.helperProportions.width/2&gt;o&amp;&amp;a&gt;i-this.help=
erProportions.width/2&amp;&amp;s+this.helperProportions.height/2&gt;r&amp;&=
amp;h&gt;n-this.helperProportions.height/2},_intersectsWithPointer:function=
(t){var e,i,s=3D"x"=3D=3D=3Dthis.options.axis||this._isOverAxis(this.positi=
onAbs.top+this.offset.click.top,t.top,t.height),n=3D"y"=3D=3D=3Dthis.option=
s.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.lef=
t,t.width),o=3Ds&amp;&amp;n;return o?(e=3Dthis._getDragVerticalDirection(),=
i=3Dthis._getDragHorizontalDirection(),this.floating?"right"=3D=3D=3Di||"do=
wn"=3D=3D=3De?2:1:e&amp;&amp;("down"=3D=3D=3De?2:1)):!1},_intersectsWithSid=
es:function(t){var e=3Dthis._isOverAxis(this.positionAbs.top+this.offset.cl=
ick.top,t.top+t.height/2,t.height),i=3Dthis._isOverAxis(this.positionAbs.le=
ft+this.offset.click.left,t.left+t.width/2,t.width),s=3Dthis._getDragVertic=
alDirection(),n=3Dthis._getDragHorizontalDirection();return this.floating&a=
mp;&amp;n?"right"=3D=3D=3Dn&amp;&amp;i||"left"=3D=3D=3Dn&amp;&amp;!i:s&amp;=
&amp;("down"=3D=3D=3Ds&amp;&amp;e||"up"=3D=3D=3Ds&amp;&amp;!e)},_getDragVer=
ticalDirection:function(){var t=3Dthis.positionAbs.top-this.lastPositionAbs=
.top;return 0!=3D=3Dt&amp;&amp;(t&gt;0?"down":"up")},_getDragHorizontalDire=
ction:function(){var t=3Dthis.positionAbs.left-this.lastPositionAbs.left;re=
turn 0!=3D=3Dt&amp;&amp;(t&gt;0?"right":"left")},refresh:function(t){return=
 this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),t=
his},_connectWith:function(){var t=3Dthis.options;return t.connectWith.cons=
tructor=3D=3D=3DString?[t.connectWith]:t.connectWith},_getItemsAsjQuery:fun=
ction(e){function i(){r.push(this)}var s,n,o,a,r=3D[],h=3D[],l=3Dthis._conn=
ectWith();if(l&amp;&amp;e)for(s=3Dl.length-1;s&gt;=3D0;s--)for(o=3Dt(l[s],t=
his.document[0]),n=3Do.length-1;n&gt;=3D0;n--)a=3Dt.data(o[n],this.widgetFu=
llName),a&amp;&amp;a!=3D=3Dthis&amp;&amp;!a.options.disabled&amp;&amp;h.pus=
h([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.option=
s.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder=
"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call=
(this.element,null,{options:this.options,item:this.currentItem}):t(this.opt=
ions.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-place=
holder"),this]),s=3Dh.length-1;s&gt;=3D0;s--)h[s][0].each(i);return t(r)},_=
removeCurrentsFromItems:function(){var e=3Dthis.currentItem.find(":data("+t=
his.widgetName+"-item)");this.items=3Dt.grep(this.items,function(t){for(var=
 i=3D0;e.length&gt;i;i++)if(e[i]=3D=3D=3Dt.item[0])return!1;return!0})},_re=
freshItems:function(e){this.items=3D[],this.containers=3D[this];var i,s,n,o=
,a,r,h,l,c=3Dthis.items,u=3D[[t.isFunction(this.options.items)?this.options=
.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items=
,this.element),this]],d=3Dthis._connectWith();if(d&amp;&amp;this.ready)for(=
i=3Dd.length-1;i&gt;=3D0;i--)for(n=3Dt(d[i],this.document[0]),s=3Dn.length-=
1;s&gt;=3D0;s--)o=3Dt.data(n[s],this.widgetFullName),o&amp;&amp;o!=3D=3Dthi=
s&amp;&amp;!o.options.disabled&amp;&amp;(u.push([t.isFunction(o.options.ite=
ms)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.option=
s.items,o.element),o]),this.containers.push(o));for(i=3Du.length-1;i&gt;=3D=
0;i--)for(a=3Du[i][1],r=3Du[i][0],s=3D0,l=3Dr.length;l&gt;s;s++)h=3Dt(r[s])=
,h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height=
:0,left:0,top:0})},refreshPositions:function(e){this.floating=3Dthis.items.=
length?"x"=3D=3D=3Dthis.options.axis||this._isFloating(this.items[0].item):=
!1,this.offsetParent&amp;&amp;this.helper&amp;&amp;(this.offset.parent=3Dth=
is._getParentOffset());var i,s,n,o;for(i=3Dthis.items.length-1;i&gt;=3D0;i-=
-)s=3Dthis.items[i],s.instance!=3D=3Dthis.currentContainer&amp;&amp;this.cu=
rrentContainer&amp;&amp;s.item[0]!=3D=3Dthis.currentItem[0]||(n=3Dthis.opti=
ons.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.w=
idth=3Dn.outerWidth(),s.height=3Dn.outerHeight()),o=3Dn.offset(),s.left=3Do=
.left,s.top=3Do.top);if(this.options.custom&amp;&amp;this.options.custom.re=
freshContainers)this.options.custom.refreshContainers.call(this);else for(i=
=3Dthis.containers.length-1;i&gt;=3D0;i--)o=3Dthis.containers[i].element.of=
fset(),this.containers[i].containerCache.left=3Do.left,this.containers[i].c=
ontainerCache.top=3Do.top,this.containers[i].containerCache.width=3Dthis.co=
ntainers[i].element.outerWidth(),this.containers[i].containerCache.height=
=3Dthis.containers[i].element.outerHeight();return this},_createPlaceholder=
:function(e){e=3De||this;var i,s=3De.options;s.placeholder&amp;&amp;s.place=
holder.constructor!=3D=3DString||(i=3Ds.placeholder,s.placeholder=3D{elemen=
t:function(){var s=3De.currentItem[0].nodeName.toLowerCase(),n=3Dt("&lt;"+s=
+"&gt;",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.=
currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"=3D=
=3D=3Ds?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("&lt;tr&gt;=
",e.document[0]).appendTo(n)):"tr"=3D=3D=3Ds?e._createTrPlaceholder(e.curre=
ntItem,n):"img"=3D=3D=3Ds&amp;&amp;n.attr("src",e.currentItem.attr("src")),=
i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceho=
lderSize)&amp;&amp;(n.height()||n.height(e.currentItem.innerHeight()-parseI=
nt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddi=
ngBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e=
.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingR=
ight")||0,10)))}}),e.placeholder=3Dt(s.placeholder.element.call(e.element,e=
.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.=
placeholder)},_createTrPlaceholder:function(e,i){var s=3Dthis;e.children().=
each(function(){t("&lt;td&gt;&amp;#160;&lt;/td&gt;",s.document[0]).attr("co=
lspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:functi=
on(e){var i,s,n,o,a,r,h,l,c,u,d=3Dnull,p=3Dnull;for(i=3Dthis.containers.len=
gth-1;i&gt;=3D0;i--)if(!t.contains(this.currentItem[0],this.containers[i].e=
lement[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d=
&amp;&amp;t.contains(this.containers[i].element[0],d.element[0]))continue;d=
=3Dthis.containers[i],p=3Di}else this.containers[i].containerCache.over&amp=
;&amp;(this.containers[i]._trigger("out",e,this._uiHash(this)),this.contain=
ers[i].containerCache.over=3D0);if(d)if(1=3D=3D=3Dthis.containers.length)th=
is.containers[p].containerCache.over||(this.containers[p]._trigger("over",e=
,this._uiHash(this)),this.containers[p].containerCache.over=3D1);else{for(n=
=3D1e4,o=3Dnull,c=3Dd.floating||this._isFloating(this.currentItem),a=3Dc?"l=
eft":"top",r=3Dc?"width":"height",u=3Dc?"pageX":"pageY",s=3Dthis.items.leng=
th-1;s&gt;=3D0;s--)t.contains(this.containers[p].element[0],this.items[s].i=
tem[0])&amp;&amp;this.items[s].item[0]!=3D=3Dthis.currentItem[0]&amp;&amp;(=
h=3Dthis.items[s].item.offset()[a],l=3D!1,e[u]-h&gt;this.items[s][r]/2&amp;=
&amp;(l=3D!0),n&gt;Math.abs(e[u]-h)&amp;&amp;(n=3DMath.abs(e[u]-h),o=3Dthis=
.items[s],this.direction=3Dl?"up":"down"));if(!o&amp;&amp;!this.options.dro=
pOnEmpty)return;if(this.currentContainer=3D=3D=3Dthis.containers[p])return =
this.currentContainer.containerCache.over||(this.containers[p]._trigger("ov=
er",e,this._uiHash()),this.currentContainer.containerCache.over=3D1),void 0=
;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].e=
lement,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._tri=
gger("change",e,this._uiHash(this)),this.currentContainer=3Dthis.containers=
[p],this.options.placeholder.update(this.currentContainer,this.placeholder)=
,this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p=
].containerCache.over=3D1}},_createHelper:function(e){var i=3Dthis.options,=
s=3Dt.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.current=
Item])):"clone"=3D=3D=3Di.helper?this.currentItem.clone():this.currentItem;=
return s.parents("body").length||t("parent"!=3D=3Di.appendTo?i.appendTo:thi=
s.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]=3D=3D=3Dthis.current=
Item[0]&amp;&amp;(this._storedCSS=3D{width:this.currentItem[0].style.width,=
height:this.currentItem[0].style.height,position:this.currentItem.css("posi=
tion"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),=
(!s[0].style.width||i.forceHelperSize)&amp;&amp;s.width(this.currentItem.wi=
dth()),(!s[0].style.height||i.forceHelperSize)&amp;&amp;s.height(this.curre=
ntItem.height()),s},_adjustOffsetFromHelper:function(e){"string"=3D=3Dtypeo=
f e&amp;&amp;(e=3De.split(" ")),t.isArray(e)&amp;&amp;(e=3D{left:+e[0],top:=
+e[1]||0}),"left"in e&amp;&amp;(this.offset.click.left=3De.left+this.margin=
s.left),"right"in e&amp;&amp;(this.offset.click.left=3Dthis.helperProportio=
ns.width-e.right+this.margins.left),"top"in e&amp;&amp;(this.offset.click.t=
op=3De.top+this.margins.top),"bottom"in e&amp;&amp;(this.offset.click.top=
=3Dthis.helperProportions.height-e.bottom+this.margins.top)},_getParentOffs=
et:function(){this.offsetParent=3Dthis.helper.offsetParent();var e=3Dthis.o=
ffsetParent.offset();return"absolute"=3D=3D=3Dthis.cssPosition&amp;&amp;thi=
s.scrollParent[0]!=3D=3Dthis.document[0]&amp;&amp;t.contains(this.scrollPar=
ent[0],this.offsetParent[0])&amp;&amp;(e.left+=3Dthis.scrollParent.scrollLe=
ft(),e.top+=3Dthis.scrollParent.scrollTop()),(this.offsetParent[0]=3D=3D=3D=
this.document[0].body||this.offsetParent[0].tagName&amp;&amp;"html"=3D=3D=
=3Dthis.offsetParent[0].tagName.toLowerCase()&amp;&amp;t.ui.ie)&amp;&amp;(e=
=3D{top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWid=
th"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth")=
,10)||0)}},_getRelativeOffset:function(){if("relative"=3D=3D=3Dthis.cssPosi=
tion){var t=3Dthis.currentItem.position();return{top:t.top-(parseInt(this.h=
elper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseIn=
t(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{to=
p:0,left:0}},_cacheMargins:function(){this.margins=3D{left:parseInt(this.cu=
rrentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("margi=
nTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
=3D{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setC=
ontainment:function(){var e,i,s,n=3Dthis.options;"parent"=3D=3D=3Dn.contain=
ment&amp;&amp;(n.containment=3Dthis.helper[0].parentNode),("document"=3D=3D=
=3Dn.containment||"window"=3D=3D=3Dn.containment)&amp;&amp;(this.containmen=
t=3D[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.rela=
tive.top-this.offset.parent.top,"document"=3D=3D=3Dn.containment?this.docum=
ent.width():this.window.width()-this.helperProportions.width-this.margins.l=
eft,("document"=3D=3D=3Dn.containment?this.document.height()||document.body=
.parentNode.scrollHeight:this.window.height()||this.document[0].body.parent=
Node.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(docu=
ment|window|parent)$/.test(n.containment)||(e=3Dt(n.containment)[0],i=3Dt(n=
.containment).offset(),s=3D"hidden"!=3D=3Dt(e).css("overflow"),this.contain=
ment=3D[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e)=
.css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("bor=
derTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins=
.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseI=
nt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),1=
0)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.s=
crollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWi=
dth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperPropor=
tions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=3Dt=
his.position);var s=3D"absolute"=3D=3D=3De?1:-1,n=3D"absolute"!=3D=3Dthis.c=
ssPosition||this.scrollParent[0]!=3D=3Dthis.document[0]&amp;&amp;t.contains=
(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetPa=
rent,o=3D/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.rel=
ative.top*s+this.offset.parent.top*s-("fixed"=3D=3D=3Dthis.cssPosition?-thi=
s.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.rel=
ative.left*s+this.offset.parent.left*s-("fixed"=3D=3D=3Dthis.cssPosition?-t=
his.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:fun=
ction(e){var i,s,n=3Dthis.options,o=3De.pageX,a=3De.pageY,r=3D"absolute"!=
=3D=3Dthis.cssPosition||this.scrollParent[0]!=3D=3Dthis.document[0]&amp;&am=
p;t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:t=
his.offsetParent,h=3D/(html|body)/i.test(r[0].tagName);return"relative"!=3D=
=3Dthis.cssPosition||this.scrollParent[0]!=3D=3Dthis.document[0]&amp;&amp;t=
his.scrollParent[0]!=3D=3Dthis.offsetParent[0]||(this.offset.relative=3Dthi=
s._getRelativeOffset()),this.originalPosition&amp;&amp;(this.containment&am=
p;&amp;(e.pageX-this.offset.click.left&lt;this.containment[0]&amp;&amp;(o=
=3Dthis.containment[0]+this.offset.click.left),e.pageY-this.offset.click.to=
p&lt;this.containment[1]&amp;&amp;(a=3Dthis.containment[1]+this.offset.clic=
k.top),e.pageX-this.offset.click.left&gt;this.containment[2]&amp;&amp;(o=3D=
this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top&g=
t;this.containment[3]&amp;&amp;(a=3Dthis.containment[3]+this.offset.click.t=
op)),n.grid&amp;&amp;(i=3Dthis.originalPageY+Math.round((a-this.originalPag=
eY)/n.grid[1])*n.grid[1],a=3Dthis.containment?i-this.offset.click.top&gt;=
=3Dthis.containment[1]&amp;&amp;i-this.offset.click.top&lt;=3Dthis.containm=
ent[3]?i:i-this.offset.click.top&gt;=3Dthis.containment[1]?i-n.grid[1]:i+n.=
grid[1]:i,s=3Dthis.originalPageX+Math.round((o-this.originalPageX)/n.grid[0=
])*n.grid[0],o=3Dthis.containment?s-this.offset.click.left&gt;=3Dthis.conta=
inment[0]&amp;&amp;s-this.offset.click.left&lt;=3Dthis.containment[2]?s:s-t=
his.offset.click.left&gt;=3Dthis.containment[0]?s-n.grid[0]:s+n.grid[0]:s))=
,{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.t=
op+("fixed"=3D=3D=3Dthis.cssPosition?-this.scrollParent.scrollTop():h?0:r.s=
crollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.of=
fset.parent.left+("fixed"=3D=3D=3Dthis.cssPosition?-this.scrollParent.scrol=
lLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChi=
ld(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[=
0],"down"=3D=3D=3Dthis.direction?e.item[0]:e.item[0].nextSibling),this.coun=
ter=3Dthis.counter?++this.counter:1;var n=3Dthis.counter;
this._delay(function(){n=3D=3D=3Dthis.counter&amp;&amp;this.refreshPosition=
s(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigg=
er(t,s,e._uiHash(e))}}this.reverting=3D!1;var s,n=3D[];if(!this._noFinalSor=
t&amp;&amp;this.currentItem.parent().length&amp;&amp;this.placeholder.befor=
e(this.currentItem),this._noFinalSort=3Dnull,this.helper[0]=3D=3D=3Dthis.cu=
rrentItem[0]){for(s in this._storedCSS)("auto"=3D=3D=3Dthis._storedCSS[s]||=
"static"=3D=3D=3Dthis._storedCSS[s])&amp;&amp;(this._storedCSS[s]=3D"");thi=
s.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-s=
ortable-helper")}else this.currentItem.show();for(this.fromOutside&amp;&amp=
;!e&amp;&amp;n.push(function(t){this._trigger("receive",t,this._uiHash(this=
.fromOutside))}),!this.fromOutside&amp;&amp;this.domPosition.prev=3D=3D=3Dt=
his.currentItem.prev().not(".ui-sortable-helper")[0]&amp;&amp;this.domPosit=
ion.parent=3D=3D=3Dthis.currentItem.parent()[0]||e||n.push(function(t){this=
._trigger("update",t,this._uiHash())}),this!=3D=3Dthis.currentContainer&amp=
;&amp;(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.=
push(function(t){return function(e){t._trigger("receive",e,this._uiHash(thi=
s))}}.call(this,this.currentContainer)),n.push(function(t){return function(=
e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContai=
ner)))),s=3Dthis.containers.length-1;s&gt;=3D0;s--)e||n.push(i("deactivate"=
,this,this.containers[s])),this.containers[s].containerCache.over&amp;&amp;=
(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache=
.over=3D0);if(this.storedCursor&amp;&amp;(this.document.find("body").css("c=
ursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpaci=
ty&amp;&amp;this.helper.css("opacity",this._storedOpacity),this._storedZInd=
ex&amp;&amp;this.helper.css("zIndex","auto"=3D=3D=3Dthis._storedZIndex?"":t=
his._storedZIndex),this.dragging=3D!1,e||this._trigger("beforeStop",t,this.=
_uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),=
this.cancelHelperRemoval||(this.helper[0]!=3D=3Dthis.currentItem[0]&amp;&am=
p;this.helper.remove(),this.helper=3Dnull),!e){for(s=3D0;n.length&gt;s;s++)=
n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOu=
tside=3D!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototyp=
e._trigger.apply(this,arguments)=3D=3D=3D!1&amp;&amp;this.cancel()},_uiHash=
:function(e){var i=3De||this;return{helper:i.helper,placeholder:i.placehold=
er||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.=
positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spi=
nner",{version:"1.12.1",defaultElement:"&lt;input&gt;",widgetEventPrefix:"s=
pin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-c=
orner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon=
-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,=
numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null=
},_create:function(){this._setOption("max",this.options.max),this._setOptio=
n("min",this.options.min),this._setOption("step",this.options.step),""!=3D=
=3Dthis.value()&amp;&amp;this._value(this.element.val(),!0),this._draw(),th=
is._on(this._events),this._refresh(),this._on(this.window,{beforeunload:fun=
ction(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:funct=
ion(){var e=3Dthis._super(),i=3Dthis.element;return t.each(["min","max","st=
ep"],function(t,s){var n=3Di.attr(s);null!=3Dn&amp;&amp;n.length&amp;&amp;(=
e[s]=3Dn)}),e},_events:{keydown:function(t){this._start(t)&amp;&amp;this._k=
eydown(t)&amp;&amp;t.preventDefault()},keyup:"_stop",focus:function(){this.=
previous=3Dthis.element.val()},blur:function(t){return this.cancelBlur?(del=
ete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!=3D=
=3Dthis.element.val()&amp;&amp;this._trigger("change",t),void 0)},mousewhee=
l:function(t,e){if(e){if(!this.spinning&amp;&amp;!this._start(t))return!1;t=
his._spin((e&gt;0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTi=
mer),this.mousewheelTimer=3Dthis._delay(function(){this.spinning&amp;&amp;t=
his._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":func=
tion(e){function i(){var e=3Dthis.element[0]=3D=3D=3Dt.ui.safeActiveElement=
(this.document[0]);e||(this.element.trigger("focus"),this.previous=3Ds,this=
._delay(function(){this.previous=3Ds}))}var s;s=3Dthis.element[0]=3D=3D=3Dt=
.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.=
preventDefault(),i.call(this),this.cancelBlur=3D!0,this._delay(function(){d=
elete this.cancelBlur,i.call(this)}),this._start(e)!=3D=3D!1&amp;&amp;this.=
_repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup=
 .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){re=
turn t(e.currentTarget).hasClass("ui-state-active")?this._start(e)=3D=3D=3D=
!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,=
e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:functi=
on(){this.uiSpinner=3Dthis.element.attr("autocomplete","off").wrap("&lt;spa=
n&gt;").parent().append("&lt;a&gt;&lt;/a&gt;&lt;a&gt;&lt;/a&gt;")},_draw:fu=
nction(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-wid=
get ui-widget-content"),this._addClass("ui-spinner-input"),this.element.att=
r("role","spinbutton"),this.buttons=3Dthis.uiSpinner.children("a").attr("ta=
bIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this.=
_removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.firs=
t(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"=
ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.=
options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.optio=
ns.icons.down,showLabel:!1}),this.buttons.height()&gt;Math.ceil(.5*this.uiS=
pinner.height())&amp;&amp;this.uiSpinner.height()&gt;0&amp;&amp;this.uiSpin=
ner.height(this.uiSpinner.height())},_keydown:function(e){var i=3Dthis.opti=
ons,s=3Dt.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1=
,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return =
this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i=
.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigge=
r("start",t)!=3D=3D!1?(this.counter||(this.counter=3D1),this.spinning=3D!0,=
!0):!1},_repeat:function(t,e,i){t=3Dt||500,clearTimeout(this.timer),this.ti=
mer=3Dthis._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.opt=
ions.step,i)},_spin:function(t,e){var i=3Dthis.value()||0;this.counter||(th=
is.counter=3D1),i=3Dthis._adjustValue(i+t*this._increment(this.counter)),th=
is.spinning&amp;&amp;this._trigger("spin",e,{value:i})=3D=3D=3D!1||(this._v=
alue(i),this.counter++)},_increment:function(e){var i=3Dthis.options.increm=
ental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1=
):1},_precision:function(){var t=3Dthis._precisionOf(this.options.step);ret=
urn null!=3D=3Dthis.options.min&amp;&amp;(t=3DMath.max(t,this._precisionOf(=
this.options.min))),t},_precisionOf:function(t){var e=3D""+t,i=3De.indexOf(=
".");return-1=3D=3D=3Di?0:e.length-i-1},_adjustValue:function(t){var e,i,s=
=3Dthis.options;return e=3Dnull!=3D=3Ds.min?s.min:0,i=3Dt-e,i=3DMath.round(=
i/s.step)*s.step,t=3De+i,t=3DparseFloat(t.toFixed(this._precision())),null!=
=3D=3Ds.max&amp;&amp;t&gt;s.max?s.max:null!=3D=3Ds.min&amp;&amp;s.min&gt;t?=
s.min:t},_stop:function(t){this.spinning&amp;&amp;(clearTimeout(this.timer)=
,clearTimeout(this.mousewheelTimer),this.counter=3D0,this.spinning=3D!1,thi=
s._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"=
=3D=3D=3Dt||"numberFormat"=3D=3D=3Dt?(i=3Dthis._parse(this.element.val()),t=
his.options[t]=3De,this.element.val(this._format(i)),void 0):(("max"=3D=3D=
=3Dt||"min"=3D=3D=3Dt||"step"=3D=3D=3Dt)&amp;&amp;"string"=3D=3Dtypeof e&am=
p;&amp;(e=3Dthis._parse(e)),"icons"=3D=3D=3Dt&amp;&amp;(s=3Dthis.buttons.fi=
rst().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this=
._addClass(s,null,e.up),n=3Dthis.buttons.last().find(".ui-icon"),this._remo=
veClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this=
._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._t=
oggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("=
disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(fun=
ction(t){this._super(t)}),_parse:function(t){return"string"=3D=3Dtypeof t&a=
mp;&amp;""!=3D=3Dt&amp;&amp;(t=3Dwindow.Globalize&amp;&amp;this.options.num=
berFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""=3D=3D=3Dt|=
|isNaN(t)?null:t},_format:function(t){return""=3D=3D=3Dt?"":window.Globaliz=
e&amp;&amp;this.options.numberFormat?Globalize.format(t,this.options.number=
Format,this.options.culture):t},_refresh:function(){this.element.attr({"ari=
a-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valueno=
w":this._parse(this.element.val())})},isValid:function(){var t=3Dthis.value=
();return null=3D=3D=3Dt?!1:t=3D=3D=3Dthis._adjustValue(t)},_value:function=
(t,e){var i;""!=3D=3Dt&amp;&amp;(i=3Dthis._parse(t),null!=3D=3Di&amp;&amp;(=
e||(i=3Dthis._adjustValue(i)),t=3Dthis._format(i))),this.element.val(t),thi=
s._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAt=
tr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSp=
inner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_st=
epUp:function(t){this._start()&amp;&amp;(this._spin((t||1)*this.options.ste=
p),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:func=
tion(t){this._start()&amp;&amp;(this._spin((t||1)*-this.options.step),this.=
_stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pag=
eDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:functi=
on(t){return arguments.length?(r(this._value).call(this,t),void 0):this._pa=
rse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBac=
kCompat!=3D=3D!1&amp;&amp;t.widget("ui.spinner",t.ui.spinner,{_enhance:func=
tion(){this.uiSpinner=3Dthis.element.attr("autocomplete","off").wrap(this._=
uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:functi=
on(){return"&lt;span&gt;"},_buttonHtml:function(){return"&lt;a&gt;&lt;/a&gt=
;&lt;a&gt;&lt;/a&gt;"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",=
delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-=
nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-c=
orner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,sh=
ow:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLoc=
al:function(){var t=3D/#.*$/;return function(e){var i,s;i=3De.href.replace(=
t,""),s=3Dlocation.href.replace(t,"");try{i=3DdecodeURIComponent(i)}catch(n=
){}try{s=3DdecodeURIComponent(s)}catch(n){}return e.hash.length&gt;1&amp;&a=
mp;i=3D=3D=3Ds}}(),_create:function(){var e=3Dthis,i=3Dthis.options;this.ru=
nning=3D!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._to=
ggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.a=
ctive=3Dthis._initialActive(),t.isArray(i.disabled)&amp;&amp;(i.disabled=3D=
t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),fun=
ction(t){return e.tabs.index(t)}))).sort()),this.active=3Dthis.options.acti=
ve!=3D=3D!1&amp;&amp;this.anchors.length?this._findActive(i.active):t(),thi=
s._refresh(),this.active.length&amp;&amp;this.load(i.active)},_initialActiv=
e:function(){var e=3Dthis.options.active,i=3Dthis.options.collapsible,s=3Dl=
ocation.hash.substring(1);return null=3D=3D=3De&amp;&amp;(s&amp;&amp;this.t=
abs.each(function(i,n){return t(n).attr("aria-controls")=3D=3D=3Ds?(e=3Di,!=
1):void 0}),null=3D=3D=3De&amp;&amp;(e=3Dthis.tabs.index(this.tabs.filter("=
.ui-tabs-active"))),(null=3D=3D=3De||-1=3D=3D=3De)&amp;&amp;(e=3Dthis.tabs.=
length?0:!1)),e!=3D=3D!1&amp;&amp;(e=3Dthis.tabs.index(this.tabs.eq(e)),-1=
=3D=3D=3De&amp;&amp;(e=3Di?!1:0)),!i&amp;&amp;e=3D=3D=3D!1&amp;&amp;this.an=
chors.length&amp;&amp;(e=3D0),e},_getCreateEventData:function(){return{tab:=
this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}=
},_tabKeydown:function(e){var i=3Dt(t.ui.safeActiveElement(this.document[0]=
)).closest("li"),s=3Dthis.tabs.index(i),n=3D!0;if(!this._handlePageNav(e)){=
switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;=
case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=3D!1,s--;break;case t.ui.keyC=
ode.END:s=3Dthis.anchors.length-1;break;case t.ui.keyCode.HOME:s=3D0;break;=
case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activat=
ing),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefau=
lt(),clearTimeout(this.activating),this._activate(s=3D=3D=3Dthis.options.ac=
tive?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activ=
ating),s=3Dthis._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-sele=
cted","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=
=3Dthis._delay(function(){this.option("active",s)},this.delay))}},_panelKey=
down:function(e){this._handlePageNav(e)||e.ctrlKey&amp;&amp;e.keyCode=3D=3D=
=3Dt.ui.keyCode.UP&amp;&amp;(e.preventDefault(),this.active.trigger("focus"=
))},_handlePageNav:function(e){return e.altKey&amp;&amp;e.keyCode=3D=3D=3Dt=
.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-=
1,!1)),!0):e.altKey&amp;&amp;e.keyCode=3D=3D=3Dt.ui.keyCode.PAGE_DOWN?(this=
._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findN=
extTab:function(e,i){function s(){return e&gt;n&amp;&amp;(e=3D0),0&gt;e&amp=
;&amp;(e=3Dn),e}for(var n=3Dthis.tabs.length-1;-1!=3D=3Dt.inArray(s(),this.=
options.disabled);)e=3Di?e+1:e-1;return e},_focusNextTab:function(t,e){retu=
rn t=3Dthis._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOptio=
n:function(t,e){return"active"=3D=3D=3Dt?(this._activate(e),void 0):(this._=
super(t,e),"collapsible"=3D=3D=3Dt&amp;&amp;(this._toggleClass("ui-tabs-col=
lapsible",null,e),e||this.options.active!=3D=3D!1||this._activate(0)),"even=
t"=3D=3D=3Dt&amp;&amp;this._setupEvents(e),"heightStyle"=3D=3D=3Dt&amp;&amp=
;this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?=
t.replace(/[!"$%&amp;'()*+,.\/:;&lt;=3D&gt;?@\[\]\^`{|}~]/g,"\\$&amp;"):""}=
,refresh:function(){var e=3Dthis.options,i=3Dthis.tablist.children(":has(a[=
href])");e.disabled=3Dt.map(i.filter(".ui-state-disabled"),function(t){retu=
rn i.index(t)}),this._processTabs(),e.active!=3D=3D!1&amp;&amp;this.anchors=
.length?this.active.length&amp;&amp;!t.contains(this.tablist[0],this.active=
[0])?this.tabs.length=3D=3D=3De.disabled.length?(e.active=3D!1,this.active=
=3Dt()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.acti=
ve=3Dthis.tabs.index(this.active):(e.active=3D!1,this.active=3Dt()),this._r=
efresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled=
),this._setupEvents(this.options.event),this._setupHeightStyle(this.options=
.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","ari=
a-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this=
.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.acti=
ve.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._a=
ddClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTa=
b(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("=
tabIndex",0)},_processTabs:function(){var e=3Dthis,i=3Dthis.tabs,s=3Dthis.a=
nchors,n=3Dthis.panels;this.tablist=3Dthis._getList().attr("role","tablist"=
),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clea=
rfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"&g=
t; li",function(e){t(this).is(".ui-state-disabled")&amp;&amp;e.preventDefau=
lt()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).=
closest("li").is(".ui-state-disabled")&amp;&amp;this.blur()}),this.tabs=3Dt=
his.tablist.find("&gt; li:has(a[href])").attr({role:"tab",tabIndex:-1}),thi=
s._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=3Dthis=
.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabI=
ndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=3Dt(),t=
his.anchors.each(function(i,s){var n,o,a,r=3Dt(s).uniqueId().attr("id"),h=
=3Dt(s).closest("li"),l=3Dh.attr("aria-controls");e._isLocal(s)?(n=3Ds.hash=
,a=3Dn.substring(1),o=3De.element.find(e._sanitizeSelector(n))):(a=3Dh.attr=
("aria-controls")||t({}).uniqueId()[0].id,n=3D"#"+a,o=3De.element.find(n),o=
.length||(o=3De._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.=
attr("aria-live","polite")),o.length&amp;&amp;(e.panels=3De.panels.add(o)),=
l&amp;&amp;h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"ari=
a-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","ta=
bpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&=
amp;&amp;(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._=
off(n.not(this.panels)))},_getList:function(){return this.tablist||this.ele=
ment.find("ol, ul").eq(0)},_createPanel:function(e){return t("&lt;div&gt;")=
.attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){va=
r i,s,n;for(t.isArray(e)&amp;&amp;(e.length?e.length=3D=3D=3Dthis.anchors.l=
ength&amp;&amp;(e=3D!0):e=3D!1),n=3D0;s=3Dthis.tabs[n];n++)i=3Dt(s),e=3D=3D=
=3D!0||-1!=3D=3Dt.inArray(n,e)?(i.attr("aria-disabled","true"),this._addCla=
ss(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._remove=
Class(i,null,"ui-state-disabled"));this.options.disabled=3De,this._toggleCl=
ass(this.widget(),this.widgetFullName+"-disabled",null,e=3D=3D=3D!0)},_setu=
pEvents:function(e){var i=3D{};e&amp;&amp;t.each(e.split(" "),function(t,e)=
{i[e]=3D"_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.pa=
nels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),th=
is._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on=
(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._ho=
verable(this.tabs)},_setupHeightStyle:function(e){var i,s=3Dthis.element.pa=
rent();"fill"=3D=3D=3De?(i=3Ds.height(),i-=3Dthis.element.outerHeight()-thi=
s.element.height(),this.element.siblings(":visible").each(function(){var e=
=3Dt(this),s=3De.css("position");"absolute"!=3D=3Ds&amp;&amp;"fixed"!=3D=3D=
s&amp;&amp;(i-=3De.outerHeight(!0))}),this.element.children().not(this.pane=
ls).each(function(){i-=3Dt(this).outerHeight(!0)}),this.panels.each(functio=
n(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).=
css("overflow","auto")):"auto"=3D=3D=3De&amp;&amp;(i=3D0,this.panels.each(f=
unction(){i=3DMath.max(i,t(this).height("").height())}).height(i))},_eventH=
andler:function(e){var i=3Dthis.options,s=3Dthis.active,n=3Dt(e.currentTarg=
et),o=3Dn.closest("li"),a=3Do[0]=3D=3D=3Ds[0],r=3Da&amp;&amp;i.collapsible,=
h=3Dr?t():this._getPanelForTab(o),l=3Ds.length?this._getPanelForTab(s):t(),=
c=3D{oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.ha=
sClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a=
&amp;&amp;!i.collapsible||this._trigger("beforeActivate",e,c)=3D=3D=3D!1||(=
i.active=3Dr?!1:this.tabs.index(o),this.active=3Da?t():o,this.xhr&amp;&amp;=
this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching f=
ragment identifier."),h.length&amp;&amp;this.load(this.tabs.index(o),e),thi=
s._toggle(e,c))},_toggle:function(e,i){function s(){o.running=3D!1,o._trigg=
er("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs=
-active","ui-state-active"),a.length&amp;&amp;o.options.show?o._show(a,o.op=
tions.show,s):(a.show(),s())}var o=3Dthis,a=3Di.newPanel,r=3Di.oldPanel;thi=
s.running=3D!0,r.length&amp;&amp;this.options.hide?this._hide(r,this.option=
s.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","u=
i-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-a=
ctive","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldT=
ab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&amp;&am=
p;r.length?i.oldTab.attr("tabIndex",-1):a.length&amp;&amp;this.tabs.filter(=
function(){return 0=3D=3D=3Dt(this).attr("tabIndex")}).attr("tabIndex",-1),=
a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-e=
xpanded":"true",tabIndex:0})},_activate:function(e){var i,s=3Dthis._findAct=
ive(e);s[0]!=3D=3Dthis.active[0]&amp;&amp;(s.length||(s=3Dthis.active),i=3D=
s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,p=
reventDefault:t.noop}))},_findActive:function(e){return e=3D=3D=3D!1?t():th=
is.tabs.eq(e)},_getIndex:function(e){return"string"=3D=3Dtypeof e&amp;&amp;=
(e=3Dthis.anchors.index(this.anchors.filter("[href$=3D'"+t.ui.escapeSelecto=
r(e)+"']"))),e},_destroy:function(){this.xhr&amp;&amp;this.xhr.abort(),this=
.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAtt=
r("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(functio=
n(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("rol=
e tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden ar=
ia-expanded")}),this.tabs.each(function(){var e=3Dt(this),i=3De.data("ui-ta=
bs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-con=
trols"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!=3D=3D=
this.options.heightStyle&amp;&amp;this.panels.css("height","")},enable:func=
tion(e){var i=3Dthis.options.disabled;i!=3D=3D!1&amp;&amp;(void 0=3D=3D=3De=
?i=3D!1:(e=3Dthis._getIndex(e),i=3Dt.isArray(i)?t.map(i,function(t){return =
t!=3D=3De?t:null}):t.map(this.tabs,function(t,i){return i!=3D=3De?i:null}))=
,this._setOptionDisabled(i))},disable:function(e){var i=3Dthis.options.disa=
bled;if(i!=3D=3D!0){if(void 0=3D=3D=3De)i=3D!0;else{if(e=3Dthis._getIndex(e=
),-1!=3D=3Dt.inArray(e,i))return;i=3Dt.isArray(i)?t.merge([e],i).sort():[e]=
}this._setOptionDisabled(i)}},load:function(e,i){e=3Dthis._getIndex(e);var =
s=3Dthis,n=3Dthis.tabs.eq(e),o=3Dn.find(".ui-tabs-anchor"),a=3Dthis._getPan=
elForTab(n),r=3D{tab:n,panel:a},h=3Dfunction(t,e){"abort"=3D=3D=3De&amp;&am=
p;s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("ar=
ia-busy"),t=3D=3D=3Ds.xhr&amp;&amp;delete s.xhr};this._isLocal(o[0])||(this=
.xhr=3Dt.ajax(this._ajaxSettings(o,i,r)),this.xhr&amp;&amp;"canceled"!=3D=
=3Dthis.xhr.statusText&amp;&amp;(this._addClass(n,"ui-tabs-loading"),a.attr=
("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.=
html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(f=
unction(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=3Dthis;return=
{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._t=
rigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelFor=
Tab:function(e){var i=3Dt(e).attr("aria-controls");return this.element.find=
(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!=3D=3D!1&amp;&amp;t.widge=
t("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),=
this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{vers=
ion:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow=
"},content:function(){var e=3Dt(this).attr("title")||"";return t("&lt;a&gt;=
").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"le=
ft top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,clos=
e:null,open:null},_addDescribedBy:function(e,i){var s=3D(e.attr("aria-descr=
ibedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-d=
escribedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=3De.=
data("ui-tooltip-id"),s=3D(e.attr("aria-describedby")||"").split(/\s+/),n=
=3Dt.inArray(i,s);-1!=3D=3Dn&amp;&amp;s.splice(n,1),e.removeData("ui-toolti=
p-id"),s=3Dt.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr(=
"aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:=
"open"}),this.tooltips=3D{},this.parents=3D{},this.liveRegion=3Dt("&lt;div&=
gt;").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}=
).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-h=
elper-hidden-accessible"),this.disabledTitles=3Dt([])},_setOption:function(=
e,i){var s=3Dthis;this._super(e,i),"content"=3D=3D=3De&amp;&amp;t.each(this=
.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:f=
unction(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=3Dthis=
;t.each(this.tooltips,function(i,s){var n=3Dt.Event("blur");n.target=3Dn.cu=
rrentTarget=3Ds.element[0],e.close(n,!0)}),this.disabledTitles=3Dthis.disab=
ledTitles.add(this.element.find(this.options.items).addBack().filter(functi=
on(){var e=3Dt(this);return e.is("[title]")?e.data("ui-tooltip-title",e.att=
r("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabled=
Titles.each(function(){var e=3Dt(this);e.data("ui-tooltip-title")&amp;&amp;=
e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=3Dt([])},o=
pen:function(e){var i=3Dthis,s=3Dt(e?e.target:this.element).closest(this.op=
tions.items);s.length&amp;&amp;!s.data("ui-tooltip-id")&amp;&amp;(s.attr("t=
itle")&amp;&amp;s.data("ui-tooltip-title",s.attr("title")),s.data("ui-toolt=
ip-open",!0),e&amp;&amp;"mouseover"=3D=3D=3De.type&amp;&amp;s.parents().eac=
h(function(){var e,s=3Dt(this);s.data("ui-tooltip-open")&amp;&amp;(e=3Dt.Ev=
ent("blur"),e.target=3De.currentTarget=3Dthis,i.close(e,!0)),s.attr("title"=
)&amp;&amp;(s.uniqueId(),i.parents[this.id]=3D{element:this,title:s.attr("t=
itle")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._update=
Content(s,e))},_updateContent:function(t,e){var i,s=3Dthis.options.content,=
n=3Dthis,o=3De?e.type:null;return"string"=3D=3Dtypeof s||s.nodeType||s.jque=
ry?this._open(e,t,s):(i=3Ds.call(t[0],function(i){n._delay(function(){t.dat=
a("ui-tooltip-open")&amp;&amp;(e&amp;&amp;(e.type=3Do),this._open(e,t,i))})=
}),i&amp;&amp;this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t=
){l.of=3Dt,a.is(":hidden")||a.position(l)}var o,a,r,h,l=3Dt.extend({},this.=
options.position);if(s){if(o=3Dthis._find(i))return o.tooltip.find(".ui-too=
ltip-content").html(s),void 0;i.is("[title]")&amp;&amp;(e&amp;&amp;"mouseov=
er"=3D=3D=3De.type?i.attr("title",""):i.removeAttr("title")),o=3Dthis._tool=
tip(i),a=3Do.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-toolt=
ip-content").html(s),this.liveRegion.children().hide(),h=3Dt("&lt;div&gt;")=
.html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[nam=
e]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.=
appendTo(this.liveRegion),this.options.track&amp;&amp;e&amp;&amp;/^mouse/.t=
est(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.exten=
d({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),t=
his.options.track&amp;&amp;this.options.show&amp;&amp;this.options.show.del=
ay&amp;&amp;(r=3Dthis.delayedShow=3DsetInterval(function(){a.is(":visible")=
&amp;&amp;(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",=
e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s=3D{keyup:functi=
on(e){if(e.keyCode=3D=3D=3Dt.ui.keyCode.ESCAPE){var s=3Dt.Event(e);s.curren=
tTarget=3Di[0],this.close(s,!0)}}};i[0]!=3D=3Dthis.element[0]&amp;&amp;(s.r=
emove=3Dfunction(){this._removeTooltip(this._find(i).tooltip)}),e&amp;&amp;=
"mouseover"!=3D=3De.type||(s.mouseleave=3D"close"),e&amp;&amp;"focusin"!=3D=
=3De.type||(s.focusout=3D"close"),this._on(!0,i,s)},close:function(e){var i=
,s=3Dthis,n=3Dt(e?e.currentTarget:this.element),o=3Dthis._find(n);return o?=
(i=3Do.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-toolt=
ip-title")&amp;&amp;!n.attr("title")&amp;&amp;n.attr("title",n.data("ui-too=
ltip-title")),this._removeDescribedBy(n),o.hiding=3D!0,i.stop(!0),this._hid=
e(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("=
ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!=3D=3Dthis.=
element[0]&amp;&amp;this._off(n,"remove"),this._off(this.document,"mousemov=
e"),e&amp;&amp;"mouseleave"=3D=3D=3De.type&amp;&amp;t.each(this.parents,fun=
ction(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closi=
ng=3D!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=3D!1)),vo=
id 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=
=3Dt("&lt;div&gt;").attr("role","tooltip"),s=3Dt("&lt;div&gt;").appendTo(i)=
,n=3Di.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),=
this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(thi=
s._appendTo(e)),this.tooltips[n]=3D{element:e,tooltip:i}},_find:function(t)=
{var e=3Dt.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeToo=
ltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:f=
unction(t){var e=3Dt.closest(".ui-front, dialog");return e.length||(e=3Dthi=
s.document[0].body),e},_destroy:function(){var e=3Dthis;t.each(this.tooltip=
s,function(i,s){var n=3Dt.Event("blur"),o=3Ds.element;n.target=3Dn.currentT=
arget=3Do[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&amp=
;&amp;(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.remove=
Data("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!=3D=
=3D!1&amp;&amp;t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:nu=
ll},_tooltip:function(){var t=3Dthis._superApply(arguments);return this.opt=
ions.tooltipClass&amp;&amp;t.tooltip.addClass(this.options.tooltipClass),t}=
}),t.ui.tooltip});<