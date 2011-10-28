/*
--------------------------------------------------

Applied Bio Firefly
Global Scripts [global.js]

Lee Allen [lee.allen@acquitygroup.com]
10/27/2009

Copyright (c) 2009 Acquity Group LLC

--------------------------------------------------
*/

sendCorrectHomepage();

// Default time for non-Flash Homepage carousel and promo carousel instances
var homepageDefaultCarouselTime = 7000;
var homepageCarouselTimeout;

jQuery(function() {
	
	// Homepage Carousel
	switchSlide = function(direction) {
		
		currentSlideListItem = jQuery('#homepage-carousel ol li a.selected').parent();
		
		// Hide current
		if (direction == 'next') {
			currentSlideListItem.children('a').removeClass('selected');
			jQuery('#homepage-carousel .carousel-slide').fadeOut();
		} else if (direction == 'prev') {
			currentSlideListItem.children('a').removeClass('selected');
			jQuery('#homepage-carousel .carousel-slide').fadeOut();
		}
		
		// Show next (or first)
		if (direction == 'next') {
			if (currentSlideListItem.next().length > 0) {
				currentSlideListItem.next().children('a').addClass('selected');
				jQuery(currentSlideListItem.next().children('a').attr('href')).fadeIn();
			} else {
				jQuery('#homepage-carousel ol li:first a').addClass('selected');
				jQuery('#homepage-carousel .carousel-slide:first').fadeIn();
			}
		} else if (direction == 'prev') {
			if (currentSlideListItem.prev().length > 0) {
				currentSlideListItem.prev().children('a').addClass('selected');
				jQuery(currentSlideListItem.prev().children('a').attr('href')).fadeIn();
			} else {
				jQuery('#homepage-carousel ol li:last a').addClass('selected');
				jQuery('#homepage-carousel .carousel-slide:last').fadeIn();
			}
		}
		
		// Set new timeout
		clearTimeout(homepageCarouselTimeout);
		homepageCarouselTimeout = setTimeout(function() { switchSlide('next'); }, homepageGetSlideTime(jQuery('#homepage-carousel ol li a.selected')));
		
	}
	if (jQuery('#homepage-carousel .carousel-slide').length > 0) {
		
		// Set initial state
		jQuery('#homepage-carousel ol li:first a').addClass('selected');
		
		// Hide all slides except first slide
		jQuery('#homepage-carousel .carousel-slide:not(:first)').hide();
		
		// Set click behaviour
		jQuery('#homepage-carousel ol li a').click(function() {
			
			// Only perform switch if we're not clicking on the active slide
			if (!jQuery(this).hasClass('selected')) {
				jQuery('#homepage-carousel ol li a').removeClass('selected');
				jQuery('#homepage-carousel .carousel-slide').fadeOut();
				
				jQuery(this).addClass('selected');
				jQuery(jQuery(this).attr('href')).fadeIn();
				
				clearTimeout(homepageCarouselTimeout);
				homepageCarouselTimeout = setTimeout(switchSlide, homepageGetSlideTime, homepageGetSlideTime(jQuery('#homepage-carousel ol li a.selected')));
				
			}

			return false;
			
		});
		
		// Set rollover behaviour
		jQuery('#homepage-carousel ol li a').hover(function(){
			
			var slide = jQuery(this).attr('href').replace('#', '');
			jQuery('#homepage-slide-text .' + slide).show();
			
		}, function() {
			
			var slide = jQuery(this).attr('href').replace('#', '');
			jQuery('#homepage-slide-text .' + slide).hide();
			
		});
		
		// Set previous/next behavior
		jQuery('#homepage-carousel .next').click(function() {
			switchSlide('next');
			return false;
		});
		jQuery('#homepage-carousel .prev').click(function() {
			switchSlide('prev');
			return false;
		});
		
		homepageCarouselTimeout = setTimeout(switchSlide, homepageGetSlideTime(jQuery('#homepage-carousel ol li a.selected')));
		
		// Adjust Next button positioning based on number of slides
		var homepageCarouselItems = jQuery('#homepage-carousel ol li a').length;
		var setHomepageCarouselPositioning = function(value) {
			var nextLeftValue = value + 'px';
			var captionLeftValue = (parseInt(value) + 39) + 'px';
			jQuery('#homepage-carousel .next').css('left',nextLeftValue);
			jQuery('#homepage-carousel #homepage-slide-text p').css('left',captionLeftValue);
		}
		switch (homepageCarouselItems) {
			case 1:
				setHomepageCarouselPositioning('64');
				break;
			case 2:
				setHomepageCarouselPositioning('91');
				break;
			case 3:
				setHomepageCarouselPositioning('118');
				break;
			case 4:
				setHomepageCarouselPositioning('145');
				break;
			case 5:
				setHomepageCarouselPositioning('172');
				break;
		}
		
		// Hide navigation if there's only one slide
		if (homepageCarouselItems > 1) {
			jQuery('#homepage-carousel ol, #homepage-carousel .next, #homepage-carousel .prev').show();
		} else {
			if (homepageCarouselTimeout) {
				clearTimeout(homepageCarouselTimeout);
			}
		}
		
	}
	function homepageGetSlideTime(jqObj) {
		// Takes a selected carousel item and returns its associated time. Defaults to homepageDefaultCarouselTime
		return jQuery(jqObj.attr('href')).attr('data-time') ? jQuery(jqObj.attr('href')).attr('data-time') : homepageDefaultCarouselTime;
	}
	
	// Handle item clicks
	jQuery('#solutions-carousel li > a').click(function() {
		
		// Add modal
		if (!jQuery('#solution-info').length > 0) {
			jQuery('body').append('<div id="solution-info"></div>');
		}
		
		var solutionInfoModal = jQuery('#solution-info');
		
		var liPosition = jQuery(this).parent().position();
		var ulPosition = jQuery(this).parent().parent().position();
		var offset = liPosition.left + 23 + ulPosition.left;
		
		// Set background sprite carrot based on which item was clicked
 		switch (offset) {
 			case 23:
			case 25:
 				solutionInfoModal.css({ 'background-position': '0 -206px' });
 				break;
 			case 173:
			case 175:
 				solutionInfoModal.css({ 'background-position': '0 -393px' });
 				break;
 			case 323:
			case 325:
 				solutionInfoModal.css({ 'background-position': '0 -580px' });
 				break;
 			case 473:
			case 475:
 				solutionInfoModal.css({ 'background-position': '0 -767px' });
 				break;
 			case 623:
			case 625:
 				solutionInfoModal.css({ 'background-position': '0 -954px' });
 				break;
 			case 773:
			case 775:
 				solutionInfoModal.css({ 'background-position': '0 -1141px' });
 				break;
 		}
		
		if (jQuery(this).hasClass('selected')) {
			var currentlySelected = true;
		}
		
		// Remove any selected classes
		jQuery('#solutions-carousel li > a').each(function() {
			jQuery(this).removeClass('selected');
		});
		
		// Populate modal
		solutionInfoModal.empty().html(jQuery(this).parent().find('.solution-info-content').html());
		Cufon.refresh();
		
		// Add selected class if not currently selected
		if (!currentlySelected) {
			jQuery(this).addClass('selected');
		} else {
			solutionInfoModal.remove();
		}
		
		// Close modal and deselect carousel item on "Close" or body click
		solutionInfoModal.find('a.close').bind('click', resetSolutions);

		jQuery("body").unbind("click");
	    jQuery("body").bind("click", function(event) {
	        if(jQuery(event.target).parents("#solution-info").length != 1) {
	        	resetSolutions();
	        }
	    });
		
		return false;
	});
	
	// Workaround for global-nav disappearence on homepage in IE6
	if (jQuery('body').hasClass('browserIE6')) {
		jQuery('#global-nav').hide().show().css('background-color','white');
	}
	
});

	// Clear selected and remove modal on carousel move or on close button click
	function resetSolutions() {
		// Remove any selected classes
		jQuery('#solutions-carousel li > a').each(function() {
			jQuery(this).removeClass('selected');
		});
		// Unbind unnessesary event handlers
		jQuery('#solution-info a.close').unbind('click', resetSolutions);
		jQuery('body').unbind('click', resetSolutions);
		jQuery('#solution-info').bind('click', function() { return false; });
		// Remove modal
		jQuery('#solution-info').remove();
		return false;
	}

// Utility function for Flash movies that need to stop homepage carousel
function stopHomepageCarousel() {
	clearTimeout(homepageCarouselTimeout);
}

/*
	reflection.js for jQuery v1.03
	(c) 2006-2009 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(a){a.fn.extend({reflect:function(b){b=a.extend({height:1/3,opacity:0.5},b);return this.unreflect().each(function(){var c=this;if(/^img$/i.test(c.tagName)){function d(){var g=c.width,f=c.height,l,i,m,h,k;i=Math.floor((b.height>1)?Math.min(f,b.height):f*b.height);if(a.browser.msie){l=a("<img />").attr("src",c.src).css({width:g,height:f,marginBottom:i-f,filter:"flipv progid:DXImageTransform.Microsoft.Alpha(opacity="+(b.opacity*100)+", style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy="+(i/f*100)+")"})[0]}else{l=a("<canvas />")[0];if(!l.getContext){return}h=l.getContext("2d");try{a(l).attr({width:g,height:i});h.save();h.translate(0,f-1);h.scale(1,-1);h.drawImage(c,0,0,g,f);h.restore();h.globalCompositeOperation="destination-out";k=h.createLinearGradient(0,0,0,i);k.addColorStop(0,"rgba(255, 255, 255, "+(1-b.opacity)+")");k.addColorStop(1,"rgba(255, 255, 255, 1.0)");h.fillStyle=k;h.rect(0,0,g,i);h.fill()}catch(j){return}}a(l).css({display:"block",border:0});m=a(/^a$/i.test(c.parentNode.tagName)?"<span />":"<div />").insertAfter(c).append([c,l])[0];m.className=c.className;a.data(c,"reflected",m.style.cssText=c.style.cssText);a(m).css({width:g,height:f+i,overflow:"hidden"});c.style.cssText="display: block; border: 0px";c.className="reflected"}if(c.complete){d()}else{a(c).load(d)}}})},unreflect:function(){return this.unbind("load").each(function(){var c=this,b=a.data(this,"reflected"),d;if(b!==undefined){d=c.parentNode;c.className=d.className;c.style.cssText=b;a.removeData(c,"reflected");d.parentNode.replaceChild(c,d)}})}})})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
jQuery(function($) {
//	jQuery('#homepage-carousel img').reflect({ 'opacity': '0.12', 'height': '45' });
});