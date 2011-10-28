/*
 * Superfish v1.4 - jQuery menu widget
 * Copyright (c) 2007 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

(function($){
	$.superfish = {};
	$.superfish.o = [];
	$.superfish.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		oldJquery	: false, /* set to true if using jQuery version below 1.2 */
		disableHI	: false, /* set to true to disable hoverIntent usage */
		// callback functions:
		onInit		: function(){},
		onBeforeShow: function(){},
		onShow		: function(){}, /* note this name changed ('onshow' to 'onShow') from version 1.4 onward */
		onHide		: function(){}
	}
	$.fn.superfish = function(op){
		var bcClass = 'sfbreadcrumb',
			over = function(){
				var $$ = $(this);
				$.superfish.op = getOpts($$);
				clearTimeout(this.sfTimer);
				$$.showSuperfishUl()
				.siblings()
					.hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this);
				var o = $.superfish.op = getOpts($$);
				if ( !$$.is('.'+bcClass) ) {
					this.sfTimer=setTimeout(function(){
						$$.hideSuperfishUl();
						if (!$('.'+o.hoverClass,getMenu($$)).length) {
							if (o.$currents.length)
							over.call(o.$currents.hideSuperfishUl());
						}
					},o.delay);
				}		
			},
			getMenu = function($el){ return $el.parents('ul.superfish:first')[0]; },
			getOpts = function($el){ return $.superfish.o[getMenu($el).serial]; },
			hasUl = function(){ return $.superfish.op.oldJquery ? 'li[ul]' : 'li:has(ul)'; };

		return this.each(function() {
			var s = this.serial = $.superfish.o.length;
			var o = $.extend({},$.superfish.defaults,op);
			o.$currents = $('li.'+o.pathClass,this).each(function(){
				$(this)
				.addClass(o.hoverClass+' '+bcClass)
				.filter(hasUl())
					.removeClass(o.pathClass);
			});
			$.superfish.o[s] = $.superfish.op = o;
			
			$(hasUl(),this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out)
			.not('.'+bcClass)
				.hideSuperfishUl();

			$('a',this).each(function(){
				var $a = $(this), $li = $a.parents('li');
				$a.focus(function(){
					over.call($li);
					return false; /*is this needed?*/
				}).blur(function(){
					$li.removeClass(o.hoverClass);
				});
			});
			
			o.onInit.call(this);
			
		}).addClass('superfish');
	};
	
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = $.superfish.op,
			$ul = $('li.'+o.hoverClass,this).andSelf()
			.removeClass(o.hoverClass)
			.find('>ul')
				.hide()
				.css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = $.superfish.op,
			$ul = this.addClass(o.hoverClass)
			.find('>ul:hidden')
				.css('visibility','visible');
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){
				o.onShow.call(this);
			});
			return this;
		}
	});
	
	$(window).unload(function(){
		$('ul.superfish').each(function(){
			$('li',this).unbind('mouseover').unbind('mouseout');
		});
	});
})(jQuery);