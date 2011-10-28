var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var jsVersion = 1.1;

function JSGetSwfVer(i){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
      		var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			if ( descArray[3] != "" ) {
				var tempArrayMinor = descArray[3].split("r");
			} else {
				tempArrayMinor = descArray[4].split("r");
			}
      		var versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
            var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
      	} else {
			flashVer = -1;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	// Can't detect in all other cases
	else {
		flashVer = -1;
	}
	return flashVer;
}

// If called with no parameters this function returns a floating point value
// which should be the version of the Flash Player or 0.0
// ex: Flash Player 7r14 returns 7.14
// If called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
 	var reqVer = parseFloat(reqMajorVer + "." + reqRevision);
   	// loop backwards through the versions until we find the newest version
	for (var i=25;i>0;i--) {
		if (isIE && isWin && !isOpera) {
			var versionStr = VBGetSwfVer(i);
		} else {
			versionStr = JSGetSwfVer(i);
		}
		if (versionStr == -1 ) {
			return false;
		} else if (versionStr != 0) {
			if(isIE && isWin && !isOpera) {
				var tempArray         = versionStr.split(" ");
				var tempString        = tempArray[1];
				var versionArray      = tempString .split(",");
			} else {
				var versionArray      = versionStr.split(".");
			}
			var versionMajor      = versionArray[0];
			var versionMinor      = versionArray[1];
			var versionRevision   = versionArray[2];

			var versionString     = versionMajor + "." + versionRevision;   // 7.0r24 == 7.24
			var versionNum        = parseFloat(versionString);
        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
			if ( (versionMajor > reqMajorVer) && (versionNum >= reqVer) ) {
				return true;
			} else {
				return ((versionNum >= reqVer && versionMinor >= reqMinorVer) ? true : false );
			}
		}
	}
	return (reqVer ? false : 0.0);
}