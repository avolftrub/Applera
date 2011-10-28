/*
--------------------------------------------------

Applied Bio Firefly
"Suckerfish" drop-down menu layer for IE6 [suckerfish.js]

David Munger [david.munger@acquitygroup.com]
11/27/2009

Copyright (c) 2009 Acquity Group LLC

NOTE: This script should only be included for IE6 clients,
preferably by using IE's comment-style conditionals
in the <head> block

--------------------------------------------------
*/

startList = function() {

	suckerfy("primary-nav");
	suckerfy("secondary-nav");
	suckerfy("my-account-menu");

	// Need to treat "search in.." differently, since not a nested ul
	var searchTrigger = document.getElementById("global-search-trigger");
	var ddParent = document.getElementById("global-search-category");
	ddParent.onmouseover = function() {
		ddParent.className += " over";
	}

	ddParent.onmouseout = function() {
		ddParent.className=this.className.replace(" over", "");
	}

}

function suckerfy(elementIdIn) {
	var navRoot = document.getElementById(elementIdIn);
	for (i=0; i<navRoot.childNodes.length; i++) {
		var node = navRoot.childNodes[i];
		if (node.nodeName=="LI") {
			node.onmouseover=function() {
				this.className+=" over";
			}
			node.onmouseout=function() {
				this.className=this.className.replace(" over", "");
			}
		}
	}
}

// call wrapper to add this to any existing onload functions
addLoadEvent(startList);

// For adding multiple functions to onload
function addLoadEvent(functionIn) { 
  var oldonload = window.onload; 
  if (typeof window.onload != 'function') { 
    window.onload = functionIn; 
  } else { 
    window.onload = function() { 
      if (oldonload) { 
        oldonload(); 
      } 
      functionIn(); 
    } 
  } 
}

