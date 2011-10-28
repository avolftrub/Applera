<!--
var sponsor = 1;
var max = 5;
var timer;
var alertTimerId = 0;
function MM_effectAppearFade(targetElement, duration, from, to, toggle)
{
	Spry.Effect.DoFade(targetElement, {duration: duration, from: from, to: to, toggle: toggle});
    if (targetElement.search('banner') >= 0) {
        if (to == 100) {
            document.getElementById(targetElement).style.zIndex = 3;
        } else {
            document.getElementById(targetElement).style.zIndex = 2;
        }
    } 
}

function changecss(theClass,element,value) {
	 var cssRules;
	 if (document.all) {
	  cssRules = 'rules';
	 }
	 else if (document.getElementById) {
	  cssRules = 'cssRules';
	 }
	 for (var S = 0; S < document.styleSheets.length; S++){
	  for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
	   if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
		document.styleSheets[S][cssRules][R].style[element] = value;
	   }
	  }
	 }	
}

function loadBanner() {
    var bannerElement = document.getElementById('banner1'); //trying to achieve at least one banner element to be sure that we are on the home page
    if (bannerElement != null) {
        MM_preloadImages('images/1_up.jpg','images/2_up.jpg','images/3_up.jpg','images/4_up.jpg','images/5_up.jpg','images/default_bg.jpg','images/special_over.jpg','images/tabs/greyTabBeg.jpg','images/tabs/greyTabBeg_first.jpg','images/tabs/greyTab_last.jpg','images/tabs/whiteTab_last.jpg','images/tabs/whiteTabBeg.jpg','images/tabs/whiteTabBeg_first.jpg');
        setTimeout('MM_effectAppearFade(\'banner1\', 1000, 0, 100, false)',1000);
        setTimeout('MM_effectAppearFade(\'numberBar1\', 1000, 0, 100, false)',1000);
        alertTimerId = setInterval('swapBanner2();',10000);
    }
}




function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function swapBanner(banner) {
	clearInterval ( alertTimerId );
	for (i=1; i<6;i++){
		if (banner != i) {

		MM_effectAppearFade('banner'+i, 1, 0, 0, false);
	
		document.getElementById('numberBar'+i).style.visibility='hidden';

		} else {
		document.getElementById('numberBar'+i).style.visibility='visible';
		MM_effectAppearFade('banner'+i, 1000, 0, 100, false);
	
		}
	}
	sponsor = banner++;
	alertTimerId = setInterval('swapBanner2();',10000);

}

function swapBanner2() {
	 if (++sponsor > max) sponsor = 1;
	for (i=1; i<6;i++){
		if (sponsor != i) {

		MM_effectAppearFade('banner'+i, 1, 0, 0, false);
	
		document.getElementById('numberBar'+i).style.visibility='hidden';

		} else {
		document.getElementById('numberBar'+i).style.visibility='visible';
		MM_effectAppearFade('banner'+i, 1000, 0, 100, false);
	
		}
	}



}
//-->// JavaScript Document