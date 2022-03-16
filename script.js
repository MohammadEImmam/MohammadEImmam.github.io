var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);

//$(window).load(function() {
 // $(".loader").css("remove");
//});
$('a[href^="#case-studies"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top +1
			},1000
		);
	}
});
$('a[href^="#main"]').on("click", function(event) {
	var target = $(this.getAttribute("href"));

	if (target.length) {
		event.preventDefault();
		$("html, body")
			.stop()
			.animate(
			{
				scrollTop: target.offset().top 
			},1000
		);
	}
});

var AboutMe = function() {
	$(".left").addClass('active');
	$("#nav-icon1").addClass('open');
	$("#about-me").addClass("active");
	$("nav").addClass("about");
	$(".social-vertical-stripe").addClass("about");
	$(".behind-title").addClass("about");
	$(".hero-go-next").addClass("about");
};
var AboutMeTwo = function() {
	$(".right").addClass('active');
};
var Boverflow = function(){
	$("body").addClass("about");
	$(".row").addClass('active');
	$(".behind-title").addClass("zdex");
}
var removeAll = function() {
	$("nav").removeClass("about");
	$(".right").removeClass('active');
	$(".left").removeClass('active');
	$("#nav-icon1").removeClass('open');
	$(".social-vertical-stripe").removeClass("about");
	$(".behind-title").removeClass("about zdex");
	$(".hero-go-next").removeClass("about");
	$(".row").removeClass('active');
};
var zIndex = function(){
	$("#about-me").removeClass("active");
	$("body").removeClass("about");
}
function progressHTML(){
	var test = $("#progressHTML");
	var strokeLen = 85;
	document.getElementById("percentHTML").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressHTML()
function progressJS(){
	var test = $("#progressJS");
	var strokeLen = 65;
	document.getElementById("percentJS").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressJS()
function progressCSS(){
	var test = $("#progressCSS");
	var strokeLen = 90;
	document.getElementById("percentCSS").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressCSS()
function progressJQ(){
	var test = $("#progressJQ");
	var strokeLen = 75;
	document.getElementById("percentJQ").innerHTML = strokeLen + "%";
	var stroke = (strokeLen * 18.01) - 25;
	test.attr({
		'stroke-dasharray': stroke + " 1800",
	},1000)
}
progressJQ()

/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);



(function($) {

	// Global initialisation flag
	var initialized = false;

	// For detecting browser prefix and capabilities
	var el = document.createElement( 'div' );
	var re = /^(Moz|(w|W)ebkit|O|ms)(?=[A-Z])/;

	// Establish vendor prefix and CSS 3D support
	var vendor = (function() { for ( var p in el.style ) if( re.test(p) ) return p.match(re)[0]; })() || '';
	var canRun = vendor + 'Perspective' in el.style;
	var prefix = '-' + vendor.toLowerCase() + '-';

	var $this, $root, $base, $kids, $node, $item, $over, $back;
	var wait, anim, last;

	// Public API
	var api = {

		// Toggle open / closed
		toggle: function() {

			$this = $( this );
			$this.makisu( $this.hasClass( 'open' ) ? 'close' : 'open' );
		},

		// Trigger the unfold animation
		open: function( speed, overlap, easing ) {

			// Cache DOM references
			$this = $(this);
			$root = $this.find( '.root' );
			$kids = $this.find( '.node' ).not( $root );

			// Establish values or fallbacks
			speed = utils.resolve( $this, 'speed', speed );
			easing = utils.resolve( $this, 'easing', easing );
			overlap = utils.resolve( $this, 'overlap', overlap );

			$kids.each( function( index, el ) {

				// Establish settings for this iteration
				anim = 'unfold' + ( !index ? '-first' : '' );
				last = index === $kids.length - 1;
				time = speed * ( 1 - overlap );
				wait = index * time;

				// Cache DOM references
				$item = $( el );
				$over = $item.find( '.over' );

				// Element animation
				$item.css(utils.prefix({
					'transform': 'rotateX(180deg)',
					'animation': anim + ' ' + speed + 's ' + easing + ' ' + wait + 's 1 normal forwards'
				}));

				// Shading animation happens when the next item starts
				if ( !last ) wait = ( index + 1 ) * time;

				// Shading animation
				$over.css(utils.prefix({
					'animation': 'unfold-over ' + (speed * 0.45) + 's ' + easing + ' ' + wait + 's 1 normal forwards'
				}));
			});

			// Add momentum to the container
			$root.css(utils.prefix({
				'animation': 'swing-out ' + ( $kids.length * time * 1.4 ) + 's ease-in-out 0s 1 normal forwards'
			}));

			$this.addClass( 'open' );
		},

		// Trigger the fold animation
		close: function( speed, overlap, easing ) {

			// Cache DOM references
			$this = $(this);
			$root = $this.find( '.root' );
			$kids = $this.find( '.node' ).not( $root );

			// Establish values or fallbacks
			speed = utils.resolve( $this, 'speed', speed ) * 0.66;
			easing = utils.resolve( $this, 'easing', easing );
			overlap = utils.resolve( $this, 'overlap', overlap );

			$kids.each( function( index, el ) {

				// Establish settings for this iteration
				anim = 'fold' + ( !index ? '-first' : '' );
				last = index === 0;
				time = speed * ( 1 - overlap );
				wait = ( $kids.length - index - 1 ) * time;

				// Cache DOM references
				$item = $( el );
				$over = $item.find( '.over' );

				// Element animation
				$item.css(utils.prefix({
					'transform': 'rotateX(0deg)',
					'animation': anim + ' ' + speed + 's ' + easing + ' ' + wait + 's 1 normal forwards'
				}));

				// Adjust delay for shading
				if ( !last ) wait = ( ( $kids.length - index - 2 ) * time ) + ( speed * 0.35 );

				// Shading animation
				$over.css(utils.prefix({
					'animation': 'fold-over ' + (speed * 0.45) + 's ' + easing + ' ' + wait + 's 1 normal forwards'
				}));
			});

			// Add momentum to the container
			$root.css(utils.prefix({
				'animation': 'swing-in ' + ( $kids.length * time * 1.0 ) + 's ease-in-out 0s 1 normal forwards'
			}));

			$this.removeClass( 'open' );
		}
	};

	// Utils
	var utils = {

		// Resolves argument values to defaults
		resolve: function( $el, key, val ) {
			return typeof val === 'undefined' ? $el.data( key ) : val;
		},

		// Prefixes a hash of styles with the current vendor
		prefix: function( style ) {

			for ( var key in style ) {
				style[ prefix + key ] = style[ key ];
			}

			return style;
		},

		// Inserts rules into the document styles
		inject: function( rule ) {

			try {

				var style = document.createElement( 'style' );
				style.innerHTML = rule;
				document.getElementsByTagName( 'head' )[0].appendChild( style );

			} catch ( error ) {}
		}
	};

	// Element templates
	var markup = {
		node: '<span class="node"/>',
		back: '<span class="face back"/>',
		over: '<span class="face over"/>'
	};

	// Plugin definition
	$.fn.makisu = function( options ) {

		// Notify if 3D isn't available
		if ( !canRun ) {

			var message = 'Failed to detect CSS 3D support';

			if( console && console.warn ) {

				// Print warning to the console
				console.warn( message );

				// Trigger errors on elements
				this.each( function() {
					$( this ).trigger( 'error', message );
				});
			}

			return;
		}

		// Fires only once
		if ( !initialized ) {

			initialized = true;

			// Unfold
			utils.inject( '@' + prefix + 'keyframes unfold        {' +

				'0%   {' + prefix + 'transform: rotateX(180deg);  }' +
				'50%  {' + prefix + 'transform: rotateX(-30deg);  }' +
				'100% {' + prefix + 'transform: rotateX(0deg);    }' +

				'}');

			// Unfold (first item)
			utils.inject( '@' + prefix + 'keyframes unfold-first  {' +

				'0%   {' + prefix + 'transform: rotateX(-90deg);  }' +
				'50%  {' + prefix + 'transform: rotateX(60deg);   }' +
				'100% {' + prefix + 'transform: rotateX(0deg);    }' +

				'}');

			// Fold
			utils.inject( '@' + prefix + 'keyframes fold          {' +

				'0%   {' + prefix + 'transform: rotateX(0deg);    }' +
				'100% {' + prefix + 'transform: rotateX(180deg);  }' +

				'}');

			// Fold (first item)
			utils.inject( '@' + prefix + 'keyframes fold-first    {' +

				'0%   {' + prefix + 'transform: rotateX(0deg);    }' +
				'100% {' + prefix + 'transform: rotateX(-180deg); }' +

				'}');

			// Swing out
			utils.inject( '@' + prefix + 'keyframes swing-out     {' +

				'0%   {' + prefix + 'transform: rotateX(0deg);    }' +
				'30%  {' + prefix + 'transform: rotateX(-30deg);  }' +
				'60%  {' + prefix + 'transform: rotateX(15deg);   }' +
				'100% {' + prefix + 'transform: rotateX(0deg);    }' +

				'}');

			// Swing in
			utils.inject( '@' + prefix + 'keyframes swing-in      {' +

				'0%   {' + prefix + 'transform: rotateX(0deg);    }' +
				'50%  {' + prefix + 'transform: rotateX(-10deg);  }' +
				'90%  {' + prefix + 'transform: rotateX(15deg);   }' +
				'100% {' + prefix + 'transform: rotateX(0deg);    }' +

				'}');

			// Shading (unfold)
			utils.inject( '@' + prefix + 'keyframes unfold-over   {' +
				'0%   { opacity: 1.0; }' +
				'100% { opacity: 0.0; }' +
				'}');

			// Shading (fold)
			utils.inject( '@' + prefix + 'keyframes fold-over     {' +
				'0%   { opacity: 0.0; }' +
				'100% { opacity: 1.0; }' +
				'}');

			// Node styles
			utils.inject( '.node {' +
				'position: relative;' +
				'display: block;' +
				'}');

			// Face styles
			utils.inject( '.face {' +
				'pointer-events: none;' +
				'position: absolute;' +
				'display: block;' +
				'height: 100%;' +
				'width: 100%;' +
				'left: 0;' +
				'top: 0;' +
				'}');
		}

		// Merge options & defaults
		var opts = $.extend( {}, $.fn.makisu.defaults, options );

		// Extract api method arguments
		var args = Array.prototype.slice.call( arguments, 1 );

		// Main plugin loop
		return this.each( function () {

			// If the user is calling a method...
			if ( api[ options ] ) {
				return api[ options ].apply( this, args );
			}

			// Store options in view
			$this = $( this ).data( opts );

			// Only proceed if the scene hierarchy isn't already built
			if ( !$this.data( 'initialized' ) ) {

				$this.data( 'initialized', true );

				// Select the first level of matching child elements
				$kids = $this.children( opts.selector );

				// Build a scene graph for elements
				$root = $( markup.node ).addClass( 'root' );
				$base = $root;

				// Process each element and insert into hierarchy
				$kids.each( function( index, el ) {

					$item = $( el );

					// Which animation should this node use?
					anim = 'fold' + ( !index ? '-first' : '' );

					// Since we're adding absolutely positioned children
					$item.css( 'position', 'relative' );

					// Give the item some depth to avoid clipping artefacts
					$item.css(utils.prefix({
						'transform-style': 'preserve-3d',
						'transform': 'translateZ(-0.1px)'
					}));

					// Create back face
					$back = $( markup.back );
					$back.css( 'background', $item.css( 'background' ) );
					$back.css(utils.prefix({ 'transform': 'translateZ(-0.1px)' }));

					// Create shading
					$over = $( markup.over );
					$over.css(utils.prefix({ 'transform': 'translateZ(0.1px)' }));
					$over.css({
						'background': opts.shading,
						'opacity': 0.0
					});

					// Begin folded
					$node = $( markup.node ).append( $item );
					$node.css(utils.prefix({
						'transform-origin': '50% 0%',
						'transform-style': 'preserve-3d',
						'animation': anim + ' 1ms linear 0s 1 normal forwards'
					}));

					// Build display list
					$item.append( $over );
					$item.append( $back );
					$base.append( $node );

					// Use as parent in next iteration
					$base = $node;
				});

				// Set root transform settings
				$root.css(utils.prefix({
					'transform-origin': '50% 0%',
					'transform-style': 'preserve-3d'
				}));

				// Apply perspective
				$this.css(utils.prefix({
					'transform': 'perspective(' + opts.perspective + 'px)'
				}));

				// Display the scene
				$this.append( $root );
			}
		});
	};

	// Default options
	$.fn.makisu.defaults = {

		// Perspective to apply to rotating elements
		perspective: 1200,

		// Default shading to apply (null => no shading)
		shading: 'rgba(0,0,0,0.12)',

		// Area of rotation (fraction or pixel value)
		selector: null,

		// Fraction of speed (0-1)
		overlap: 0.6,

		// Duration per element
		speed: 0.8,

		// Animation curve
		easing: 'ease-in-out'
	};

	$.fn.makisu.enabled = canRun;

})( jQuery );

// The `enabled` flag will be `false` if CSS 3D isn't available

if ( $.fn.makisu.enabled ) {

	var $sashimi = $( '.sashimi' );
	var $nigiri = $( '.nigiri' );
	var $maki = $( '.maki' );

	// Create Makisus

	$nigiri.makisu({
		selector: 'dd',
		overlap: 0.85,
		speed: 1.7
	});

	$maki.makisu({
		selector: 'dd',
		overlap: 0.6,
		speed: 0.85
	});

	$sashimi.makisu({
		selector: 'dd',
		overlap: 0.2,
		speed: 0.5
	});

	// Open all

/*	$( '.list' ).makisu( 'close' );*/

	// Toggle on click

	$( '.toggle' ).on( 'click', function() {
		$( '.list' ).makisu( 'toggle' );
	});

	// Disable all links

	$( '.demo a' ).click( function( event ) {
		event.preventDefault();
	});

} else {

	$( '.warning' ).show();
}

Vue.config.devtools = true;

Vue.component("card", {
	template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
	mounted() {
		this.width = this.$refs.card.offsetWidth;
		this.height = this.$refs.card.offsetHeight;
	},
	props: ["dataImage"],
	data: () => ({
		width: 0,
		height: 0,
		mouseX: 0,
		mouseY: 0,
		mouseLeaveDelay: null }),

	computed: {
		mousePX() {
			return this.mouseX / this.width;
		},
		mousePY() {
			return this.mouseY / this.height;
		},
		cardStyle() {
			const rX = this.mousePX * 30;
			const rY = this.mousePY * -30;
			return {
				transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

		},
		cardBgTransform() {
			const tX = this.mousePX * -40;
			const tY = this.mousePY * -40;
			return {
				transform: `translateX(${tX}px) translateY(${tY}px)` };

		},
		cardBgImage() {
			return {
				backgroundImage: `url(${this.dataImage})` };

		} },

	methods: {
		handleMouseMove(e) {
			this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
			this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
		},
		handleMouseEnter() {
			clearTimeout(this.mouseLeaveDelay);
		},
		handleMouseLeave() {
			this.mouseLeaveDelay = setTimeout(() => {
				this.mouseX = 0;
				this.mouseY = 0;
			}, 1000);
		} } });



const app = new Vue({
	el: "#app" });

$(function(){

	$('.skills-list').find('li span').each(function(){

		$(this).css('width',$(this).data('skill-level')+"%");

	})

});