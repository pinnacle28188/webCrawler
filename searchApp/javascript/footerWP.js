/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-rgba-textshadow-csstransitions-cssclasses-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.rgba=function(){return x("background-color:rgba(150,255,150,.5)"),A(j.backgroundColor,"rgba")},p.textshadow=function(){return b.createElement("div").style.textShadow===""},p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);/**
 
/** SCROLL TO
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.12
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));

/**
 * LOCAL SCROLL
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.3.5
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window};$.fn.localScroll=function(a){a=$.extend({},h.defaults,a);if(a.hash&&location.hash){if(a.target)window.scrollTo(0,0);scroll(0,location,a)}return a.lazy?this.on(a.event,'a,area',function(e){if(filter.call(this)){scroll(e,this,a)}}):this.find('a,area').filter(filter).bind(a.event,function(e){scroll(e,this,a)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==g&&(!a.filter||$(this).is(a.filter))}};h.hash=function(){};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=elem.id===c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location.hash=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])};return h}));

/*! jquery.cookie v1.4.0 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=decodeURIComponent(a.replace(g," "))}catch(b){return}try{return h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}});

var secureAppMap = {};

(function($){

  $(document).ready(function(){
    var lib_path = $("meta[name='application-name']").data('library-path');
    var currentMega = '';

    // - - - mega menu - - -
    $('#nav-button, #site-navigation a, #megashim').on('click',function(e){
      e.preventDefault();
      var clicked_nav = '';
      clicked_nav = $(this).data("megalink");

      if($(this).attr('id') === 'megashim'){
        clicked_nav = currentMega;
      }
      // collapse everything
      $("#site-navigation a, #megashim, #content, #megamenu, #megamenu nav[data-megamenu='"+currentMega+"']").removeClass('is-active');

      // reveal what we need if it's not currently opened, otherwise, close
      // open mobile nav
      if(clicked_nav === "all" && clicked_nav !== currentMega){
        $("#megashim, #megamenu, #content").addClass("is-active");
        $('#megamenu').css('height',$("#megamenu .container").height()+15);
        currentMega = clicked_nav;

      // open regular nav
      } else if(clicked_nav !== currentMega){
        $("#site-navigation a[data-megalink='"+clicked_nav+"'], #megashim, #megamenu, #content, #megamenu nav[data-megamenu='"+clicked_nav+"']").addClass("is-active");
        $('#megamenu').css('height',$("#megamenu nav[data-megamenu='"+clicked_nav+"']").height()+80);
        currentMega = clicked_nav;

      // close nav
      }else{
        currentMega = '';
        $('#megamenu').css('height',0);
      }
    });
    
    // mobile mega-sub link
    $('#megamenu h2 a').on('click', function(e) {
      e.preventDefault();
      var clicked_nav = false;
      var el = false;
      clicked_nav = $(this).data("megalink");
      el = $("#megamenu nav[data-megamenu='"+clicked_nav+"']");
      if(el.hasClass('is-active')){
        el.removeClass('is-active');
      }else{
        el.addClass('is-active');
      }
      $('#megamenu').css('height',$("#megamenu .container").height()+15);
    });

    // - - - sidebar nav toggling - - -
    if($('.mobile-sidebar-bt').length > 0){
      $('.mobile-sidebar-bt').click(function(e){
        e.preventDefault();
        $('#secondary').toggleClass('sidebar-closed');
      });
    }

    // - - - home slider - - -
    if(!$('html').hasClass('oldie') && $('.layer-slides').length > 0){
      $('.layer-slides').layerSlider({
        // responsive: true,
        responsiveUnder: 960,
        skin: 'fullwidth',
        skinsPath: lib_path+'js/vendor/layerslider/skins/',
        navButtons: false,
        navStartStop: false
      });
    }

    // - - - search button in util nav - - -
    $('#utility-navigation .search a').click(function(e){
      e.preventDefault();
      $('#utility-navigation .search').toggleClass('is-active');
      if( $('#utility-navigation .search').hasClass('is-active') ){
        $('#utility-navigation .search input[type=text]').focus();
      }else {
        $('#utility-navigation .search input[type=text]').blur();
      }
    });

	replaceMyYrcLinks();
	processSecureAccess(getUserId(), getServletURI());
	// - - - global cta tabs - - -


    function moveGlobalCtaArrow(li){
      var loffset = li.offset().left - li.parent().offset().left;
      var arrowcenter = loffset + (li.width()/2);
      $('.global-cta-content-panels').css("background-position", (-970+arrowcenter)+"px 0%");
    }

    function toggleGlobalCtaPanels(){
      $('.global-cta-content-panels').slideToggle();
      if($('.global-cta-content-panels').hasClass('is-hidden')){
        $('.global-cta-content-panels').removeClass('is-hidden');
      }else {
        $('.global-cta-content-panels').addClass('is-hidden');
      }
    }

    function showGlobalCtaPanel(ind){
      $('.global-cta-content-panel[data-index='+ind+']').fadeIn();
      $('.global-cta-content-panel[data-index='+ind+']').addClass('is-active');
    }

    function globalCtaCloseClickHandler(){
      $('.global-cta-content-panel.is-active').fadeOut();
      $('.global-cta-content-panel.is-active').removeClass('is-active');
      toggleGlobalCtaPanels();
    }

    function globalCtaClickHandler(e){
      var li = $(e.currentTarget);
      var ind = li.data('index');
      if($('.global-cta-content-panel.is-active').length === 0 || ind !== $(".global-cta-content-panel.is-active").data("index")){
        moveGlobalCtaArrow(li);
        if($('.global-cta-content-panel.is-active').length > 0){
          // hide current panel
          $('.global-cta-content-panel.is-active').fadeOut(400, function(){
            // then show new panel
            showGlobalCtaPanel(ind);
          });
          $('.global-cta-content-panel.is-active').removeClass('is-active');
        }else {
          // show new panel
          showGlobalCtaPanel(ind);
        }
        if($('.global-cta-content-panels').hasClass('is-hidden')){
          toggleGlobalCtaPanels();
        }
      } else {
        globalCtaCloseClickHandler();
      }
    }

    $('.global-cta-tabs li').click(globalCtaClickHandler);
    $('.global-cta-content-panels .btn-close').click(globalCtaCloseClickHandler);

    // - - - module content expander - - -

    $('.content-module-headline').click(function(e){
      e.preventDefault();
      $(this).parents('.expanding-container').toggleClass('is-expanded');
      $(this).siblings('.expanding-content').slideToggle();
    });

    $.localScroll({
        queue:true,
        duration:500,
        hash:true,
        offset:-50,
        onBefore:function(e, anchor){
          // onBefore fires when initializing, but the event is 0.
          // trigger a click only if it's expandable and a link is really clicked 
          // OR it is initializing, the location.hash exists and is expandable
          if((e !== 0 || (e === 0) && $(location.hash).length > 0) && $(anchor).hasClass('content-module-headline') && !$(anchor).parent().hasClass('is-expanded')){
            $(anchor).click();
          }
        }
      }
    );


	// - - - Chat Link - - -
	$(".chat").click(function(event) {
		event.preventDefault();
		window.open(event.target.href, '_blank', 'height=400,width=300');
	});

	$("#megamenu").after("<div id='weather-placeholder'></div>");
	$("#weather-placeholder" ).load( "//yrc.com/external/weather-bar/" + "?ver=" + getDateAndHour() );

    // - - - YRC System Navigation/Login Sync - - -
                        
	function processSecureAccess(userId, servletURI) {
	    if (!(userId == null) && userId != "" ) {
	        var ajaxUrl = servletURI + "?CONTROLLER=com.rdwy.ec.eyemguserapi.http.controller.MyRoadwayUserAPIController";

	        $.ajax({
	            url: ajaxUrl,
	            data: {
	                userId: userId,
	                format: "JSON"
	            },
	            dataType: "json",
	            xhrFields: {
	                    withCredentials: true
                },
 	            success: function (data, status, jqXHR) {
	                processSecureAccessResults(data);
	            }
	            ,
	            error: function (data,status,jqXHR) { 
	            }
	        });
	    }
	}

	function processSecureAccessResults(data) {
	
	    if (data.MYROADWAYUSERINFO.RETURNCODE === "00") {
	    	// Create a map by application key and url
	        $.each(data.MYROADWAYUSERINFO.APPLICATIONACCESS.APPLICATION, function (index, application) {
	            secureAppMap[application.APPLICATIONNAME] = application.APPLICATIONURL;
	        });

	        myYrcSetState(data);
	        
	        // Walk through all elements on the page with a data-appkey attribute
	        $('[data-appkey]').each(function (index, element) {
                    var anchorTag = element;
                    
                    // If the element is not an anchor tag, find a child element that is
	            if($(element).prop('tagName') !== 'a'){
	                anchorTag = $(element).find('a');
                    }

	            var key = $(element).data('appkey');

            	// If the element has an id, try to match it against the secure application map
	            if (key != null) {
	                var secureURL = secureAppMap[key];

                    // If we matched a URL by key, unlock the menu item and replace the url
	                if (secureURL != null && secureURL != "" && anchorTag != null) {
//	                    if (secureURL.match("^/") ) {
//        	                $(anchorTag).attr("href", "https://" + getMyYRCDomain() + secureURL);
//	                    } else {
        	                $(anchorTag).attr("href", secureURL);
//	                    }

	                    $(element).removeClass("locked private");
	                }
	            }
	        });
	    }
	}

    function myYrcSetState(data){
      var login = $('#login a');
      var dest = login.data('myyrc-logout');
      login.attr("href", dest).text('Logout');
      $('#profile').removeClass('hidden');
      $('#profile span').text(data.MYROADWAYUSERINFO.USERINFORMATION.USERNAME.toLowerCase());
      return;
    }

	function getUserId() {
		// If the MYYRC_servletURI is set, use it, otherwise set the user id based on a cookie that is set when the user is logged in
		var userId = "";
		if( window.MYYRC_userId !== undefined && !(MYYRC_userId == null) && MYYRC_userId !== "" ) {
			userId = MYYRC_userId;
		} else if( !($.cookie("REX_PERM_USER_ID") == null ) && $.cookie("REX_PERM_USER_ID") !== "" ) {
			userId = $.cookie("REX_PERM_USER_ID");
		}
		
		return userId;
	}

	function getServletURI() {
		// Default to the prod servlet, but ovveride with the environment specific servlet if possible
		var servletURI = "http://" + window.location.host + "/dynamic/national/servlet";
		if( window.MYYRC_servletURI !== undefined && !(MYYRC_servletURI == null) && MYYRC_servletURI !== "" ) {
			servletURI = MYYRC_servletURI;
		}

                var unsecurePattern = /^http:/g;
                var securePattern = /^https:/g;
                if( "https:" == document.location.protocol) {

                  if( servletURI.match(unsecurePattern)  ) {
                    servletURI = servletURI.replace( unsecurePattern, "https:" );
                  }
                } else {
                  if( servletURI.match( securePattern ) ) {
                    servletURI = servletURI.replace( securePattern, "http:" );
                  }
                }
		return servletURI;
	}

	function getMyYRCDomain() {
		// Default to the prod servlet, but ovveride with the environment specific servlet if possible
		var servletDomain = window.location.host;
		if( window.MYYRC_domain !== undefined && !(MYYRC_domain == null) && MYYRC_domain !== "" ) {
			servletURI = MYYRC_domain;
		}

		return servletDomain;
	}
  
  	// Set my.yrc.com links to local environment's host and port when on a non-prod URL
	function replaceMyYrcLinks() {
		try {
			var nonProdPattern = /my[a-z]{1,5}[0-3]{0,1}.yrc.com/;
			if( window.location.hostname == "localhost" ) {
				$("a").each(replaceMyYrcLinkLocal);
				$('[data-myyrc-logout]').each(replaceMyYrcLogoutLocal);
			} else if( window.location.hostname.match(nonProdPattern) ){
				// If the hostname is a modified my.yrc.com hostname having more than one alpha character following the "my" and possibly a single digit, this is not prod.
				$("a").each(replaceMyYrcLinkDev);
				$('[data-myyrc-logout]').each(replaceMyYrcLogoutDev);				
			}
		} catch (e) {		
		}
	}

	function replaceMyYrcLinkLocal( index, anchorTag ) {
		var pattern = /https{0,1}:\/\/my[a-z]{0,5}[1-3]{0,1}.yrc.com\/dynamic/;
		var link = $(anchorTag).attr('href');
		if( link && link != "" && link.match(pattern) ) {
			link = link.replace( pattern, "http://" + window.location.host )
			$(anchorTag).attr("href", link);
		}
	}

	function replaceMyYrcLogoutLocal( index, anchorTag ) {
		var pattern = /https{0,1}:\/\/my[a-z]{0,5}[1-3]{0,1}.yrc.com\/dynamic/;
		var link = $(anchorTag).attr('data-myyrc-logout');
		if( link && link != "" && link.match(pattern) ) {
			link = link.replace( pattern, "http://" + window.location.host )
			$(anchorTag).attr("data-myyrc-logout", link);
		}
	}

	function replaceMyYrcLinkDev( index, anchorTag ) {
		var pattern = /my[a-z]{0,5}[1-3]{0,1}.yrc.com/;
		var link = $(anchorTag).attr('href');
		if( link && link != "" && link.match(pattern) ) {
			link = link.replace( pattern, window.location.host )
			$(anchorTag).attr("href", link);
		}
	}

	function replaceMyYrcLogoutDev( index, anchorTag ) {
		var pattern = /my[a-z]{0,5}[1-3]{0,1}.yrc.com/;
		var link = $(anchorTag).attr('data-myyrc-logout');
		if( link && link != "" && link.match(pattern) ) {
			link = link.replace( pattern, window.location.host )
			$(anchorTag).attr("data-myyrc-logout", link);
		}
	}

	// Used as a semi-unique ID for resources to allow caching, but effectively limiting that caching to an hour.
	function getDateAndHour() {
		var uniqueId = "";
		var dt = new Date($.now());
		if( dt ) {
			uniqueId = dt.getFullYear().toString() + ("0" + (dt.getMonth() + 1 ).toString()).slice(-2) + ("0" + dt.getDate().toString()).slice(-2) + ("0" + dt.getHours().toString()).slice(-2);
		}
		return uniqueId;
	}
	
  });

})(jQuery);
