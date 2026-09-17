/* originally written by paul sowden paul@idontsmoke.co.uk http://idontsmoke.co.uk */
tooltip = {	attr_name: "tooltip", blank_text: language.Generic.Common.kOpenInNewWindow, newline_entity: "  ",	max_width: 0, delay: 50,
	
	t: document.createElement("DIV"),
	c: null,
	g: false,
	m: function(e){
		if (tooltip.g){
			var scroll = tooltip.getPageScroll();
			var x = window.event ? event.clientX + scroll.left : e.pageX;
			var y = window.event ? event.clientY + scroll.top : e.pageY;
			tooltip.a(x, y);
		}
	},
	getPageScroll: (window.pageXOffset != undefined) ?
		function() { return { left: pageXOffset, top: pageYOffset };} :
		function() {
			var html = document.documentElement;
			var body = document.body;
			var top = html.scrollTop || body && body.scrollTop || 0;
			top -= html.clientTop;
			var left = html.scrollLeft || body && body.scrollLeft || 0;
			left -= html.clientLeft;
			return { top: top, left: left };
		},
	d: function(){
		tooltip.t.setAttribute("id", "tooltip");
		document.body.appendChild(tooltip.t);
		a = document.all ? document.all : document.getElementsByTagName("*");
		aLength = a.length;
		for (var i = 0; i < aLength; i++){

			if (!a[i]) continue;

			tooltip_title = a[i].getAttribute("title");
			tooltip_alt = a[i].getAttribute("alt");
			tooltip_blank = a[i].getAttribute("target") && a[i].getAttribute("target") == "_blank" && tooltip.blank_text;
			if (tooltip_title || tooltip_blank){
				a[i].setAttribute(tooltip.attr_name, tooltip_blank ? (tooltip_title ? tooltip_title + " " + tooltip.blank_text : tooltip.blank_text) : tooltip_title);
				if (a[i].getAttribute(tooltip.attr_name)){
					a[i].removeAttribute("title");
					if (tooltip_alt && a[i].complete) a[i].removeAttribute("alt");
					tooltip.l(a[i], "mouseover", tooltip.s);
					tooltip.l(a[i], "mouseout", tooltip.h);
				}
			}else if (tooltip_alt && a[i].complete){
				a[i].setAttribute(tooltip.attr_name, tooltip_alt);
				if (a[i].getAttribute(tooltip.attr_name)){
					a[i].removeAttribute("alt");
					tooltip.l(a[i], "mouseover", tooltip.s);
					tooltip.l(a[i], "mouseout", tooltip.h);
				}
			}
			if (!a[i].getAttribute(tooltip.attr_name) && tooltip_blank){
				// empty now
			}
		}
		document.onmousemove = tooltip.m;
		window.onscroll = tooltip.h;
		tooltip.a(-99, -99);
	},
	s: function(e){
		d = window.event ? window.event.srcElement : e.target;
		var elem = $(d);
		var attrValue = elem.attr(tooltip.attr_name);
		if (!attrValue) {
			var btn = elem.parent('.ui-button');
			if (btn.length > 0)
			{
				attrValue = btn.attr(tooltip.attr_name);
				if (!attrValue) {
					return;
				}
			}
			else {
				return;
			}
		}
		s = attrValue;
		if ( typeof(s) != 'string' ) return;
		if (tooltip.newline_entity){
			if( s.indexOf("#WTM#") != -1 )
			{
				s = s.replace("#WTM#","");
				s = s.replace(/\&/g,"&amp;");
				s = s.replace(/([^<])(<(?!<))/g,"$1&lt;")
				s = s.replace(/([^>])(>(?!>))/g,"$1&gt;")
				s =	s.replace(/>{2}/g,">");
				s =	s.replace(/<{2}/g,"<");
			}
			else if( s.indexOf("#WFM#") != -1 )
			{
				s = s.replace("#WFM#","");
			}
			else
			{
				s = s.replace(/\&/g,"&amp;");
				s = s.replace(/\</g,"&lt;");
				s = s.replace(/\>/g,"&gt;");
				s = s.replace(eval("/" + tooltip.newline_entity + "/g"), "<br />");
			}
			tooltip.t.innerHTML = s;
		}else{
			if (tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
			tooltip.t.appendChild(document.createTextNode(s));
			//tooltip.t.innerText = s;
		}
		tooltip.c = setTimeout("tooltip.t.style.visibility = 'visible';", tooltip.delay);
		tooltip.g = true;
	},
	h: function(e){
		tooltip.t.style.visibility = "hidden";
		if (!tooltip.newline_entity && tooltip.t.firstChild) tooltip.t.removeChild(tooltip.t.firstChild);
		clearTimeout(tooltip.c);
		tooltip.g = false;
		tooltip.a(-99, -99);
	},
	l: function(o, e, a){
		if (o.addEventListener) o.addEventListener(e, a, false); // was true--Opera 7b workaround!
		else if (o.attachEvent) o.attachEvent("on" + e, a);
			else return null;
	},
	a: function(x, y){
		oCanvas = document.getElementsByTagName(
		(document.compatMode && document.compatMode == "CSS1Compat") ? "HTML" : "BODY")[0];
		
		w_width = oCanvas.clientWidth ? oCanvas.clientWidth + oCanvas.scrollLeft : window.innerWidth + window.pageXOffset;
		w_height = window.innerHeight ? window.innerHeight + window.pageYOffset : oCanvas.clientHeight + oCanvas.scrollTop; // should be vice verca since Opera 7 is crazy!

		tooltip.t.style.width = ((tooltip.max_width) && (tooltip.t.offsetWidth > tooltip.max_width)) ? tooltip.max_width + "px" : "auto";
		
		t_width = tooltip.t.offsetWidth;
		t_height = tooltip.t.offsetHeight;

		tooltip.t.style.left = x + 8 + "px";
		tooltip.t.style.top = y + 8 + "px";
		
		if (x + t_width > w_width) tooltip.t.style.left = w_width - t_width + "px";
		if (y + t_height > w_height) tooltip.t.style.top = w_height - t_height + "px";
	}
}

var root = window.addEventListener || window.attachEvent ? window : document.addEventListener ? document : null;
if (root){
	if (root.addEventListener) root.addEventListener("load", tooltip.d, false);
	else if (root.attachEvent) root.attachEvent("onload", tooltip.d);
}