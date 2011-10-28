<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<title>Applied Biosystems</title>

<link href="css/global_nav.css" rel="stylesheet" type="text/css" />
<link href="css/addon.css" rel="stylesheet" type="text/css" />
<script src="js/SpryEffects.js" type="text/javascript"></script>
<script src="js/scripts.js" type="text/javascript"></script>

<script src="http://www.appliedbiosystems.com/js/processSearch.js" type="text/javascript" language="javascript1.2"></script>
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.bgiframe.js" type="text/javascript"></script>

<script type="text/javascript">
        var isB2BSession = 'false';

        function MM_preloadImages() { //v3.0
            var d=document;
            if (d.images) {
                if (!d.MM_p) d.MM_p=new Array();
                var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
                for(i=0; i<a.length; i++)
                    if (a[i].indexOf("#")!=0) {
                        d.MM_p[j]=new Image;
                        d.MM_p[j++].src=a[i];
                    }
            }
        }


        var dom = {};
        dom.query = jQuery.noConflict(true);
        dom.query(document).ready(
            function() {
                dom.query("#topMenu ul li").eq(0).addClass("first");

                dom.query("#topMenu ul li").hover(
                    function() {
                        dom.query(this).find("a").eq(0).addClass("active");
                    },
                    function() {
                        dom.query(this).find("a").eq(0).removeClass("active");
                    });

                    dom.query("li.toplevel").bind("mouseenter",
                        function() {
                            dom.query(this).find("div.subMenu").show();
                        }).bind("mouseleave",
                        function() {
                            dom.query(this).find("div.subMenu").hide();
                        });

                    dom.query("div.subMenu").hover(
                        function() {
                            dom.query(this).addClass("active");
                        },
                        function() {
                            dom.query(this).removeClass("active");
                        });

                    dom.query("li.toplevel").bind("mouseenter",
                        function() {
                            dom.query(this).find("div.subMenuAlt").show();
                        }).bind("mouseleave",
                        function() {
                            dom.query(this).find("div.subMenuAlt").hide();
                        });

                    dom.query("div.subMenuAlt").hover(
                        function() {
                            dom.query(this).addClass("active");
                        },
                        function() {
                            dom.query(this).removeClass("active");
                        });

                    dom.query('div.trigger').hide();
                    dom.query('div.trigger').bgIframe();
                    dom.query('div.subMenuAlt').bgIframe();
                    dom.query('div.subMenu').bgIframe();

                    dom.query("li#myAccount, li#myBasket").bind("mouseenter",
                        function() {
                            dom.query(this).find("a").eq(0).addClass("active");
                            dom.query(this).find("div.trigger").show();
                            dom.query("#topMenu ul li").css("position", "static");
                        }).bind("mouseleave",
                        function() {
                            dom.query(this).find("a").eq(0).removeClass("active");
                            dom.query(this).find("div.trigger").hide();
                            dom.query("#topMenu ul li").css("position", "relative");
                        });
                    });
    </script>



</head>

<body onload="loadBanner();"  id="home">


<!---->
<!---->
<!-- WRAPPER FOR THE ENTIRE HOME PAGE -->
<!---->
<!---->

<div id="homePageWrapper">

<!---->
<!---->
<!-- RIGHT FEATURE BOX - I WANT TO BOX -->
<!---->
<!---->

	<div id="featureBoxWrapper">

    	<!-- HEADER TEXT -->
		<div id="featureBoxHeader">

    		<p>Поиск и заказ</p>
    	</div>

        <!-- MAIN CONTENT -->

		<div id="featureBoxMiddle">
    		<div id="content">
  				<!--<div class="subhead">Find & Order</div>-->
          		<ul>
        			<li><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=603885">Праймеры и зонды на заказ</a></li>
        			<li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601264">Наборы праймеров для экспрессионного анализа TaqMan®</a></li>
        			<li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600701">Анализ микро-РНК</a></li>
			        <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601277">Наборы праймеров для SNP-генотипирования TaqMan®</a></li>

          		</ul>
    		</div>
    	</div>

        <!-- BOTTOM IMAGE -->

    	<div id="featureBoxBottom">
			<img src="images/special.jpg" width="220" height="73" border="0" name="SO" id="SO" />
        </div>
	</div>

<!---->
<!---->
<!-- END FEATURE BOX-->
<!---->
<!---->


<!---->
<!---->
<!-- BANNER SPACE -->
<!---->
<!---->
	<!---->
	<!---->
	<!-- DEFAULT BACKGROUND - DON'T CHANGE -->
	<!---->
	<!---->

	    <div class="clearfix" id="fixBanners">
    <div id="defalutBG"></div>

	<!---->
	<!---->
    <!-- DIVS FOR EACH INDIVIDUAL BANNERS -->
    <!---->
	<!---->


    <div id="banner1"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/SOLiDSystemSequencing/WholeTranscriptomeAnalysis/index.htm" target="_blank"><img src="images/banner1.jpg" width="730" height="296" border="0" /></a></div>

    <div id="banner2"><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=605557&tab=DetailInfo&utm_source=AB-EU-hpg&utm_medium=banner&utm_campaign=SOLiDSmallRNA" target="_blank"><img src="images/banner2.jpg" width="730" height="296" border="0" /></a></div>

    <div id="banner3"><a href="http://marketing.appliedbiosystems.com/mk/get/IDPLUS_Landing?CID=020110_HIP-RU-HP" target="_blank"><img src="images/banner3.jpg?20100301" width="730" height="296" border="0" /></a></div>

    <div id="banner4"><a href="http://marketing.appliedbiosystems.com/mk/get/MAGMAX_LANDING?utm_source=AB-RUS-hpg&utm_medium=banner&utm_campaign=MagMAX" target="_blank"><img src="images/banner4.jpg" width="730" height="296" border="0" /></a></div>

    <div id="banner5"><a href="http://marketing.appliedbiosystems.com/mk/get/3500_HID_LANDING?ICID=FL-88403_3500hid-RU-HP" target="_blank"><img src="images/banner5.jpg" width="730" height="296" border="0" /></a></div>
	</div>

	<!---->
	<!---->
    <!-- NUMBER BAR - ONE LINK FOR FOR EACH IMAGE -->
    <!---->
	<!---->

    <div id="numberBar">
            <a href="javascript:swapBanner('1')" onmouseover="MM_swapImage('thumb1','','images/1_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img style="z-index: 110;" border="0" src="images/1.jpg" alt="Banner 1" name="thumb1" id="thumb1" width="22" height="22" /></a>

            <a href="javascript:swapBanner('2')" onmouseover="MM_swapImage('thumb2','','images/2_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img style="z-index: 110;" border="0" src="images/2.jpg" alt="Banner 2" name="thumb2" id="thumb2" width="22" height="22" /></a>

            <a href="javascript:swapBanner('3')" onmouseover="MM_swapImage('thumb3','','images/3_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/3.jpg" alt="Banner 3" name="thumb3" id="thumb3" width="22" height="22" /></a>

            <a href="javascript:swapBanner('4')" onmouseover="MM_swapImage('thumb4','','images/4_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/4.jpg" alt="Banner 4" name="thumb4" id="thumb4" width="22" height="22" /></a>

            <a href="javascript:swapBanner('5')" onmouseover="MM_swapImage('thumb5','','images/5_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/5.jpg" alt="Banner 5" name="thumb5" id="thumb5" width="22" height="22" /></a>    </div>
    <!---->
	<!---->
    <!-- END NUMBER BAR -->
    <!---->
	<!---->

	<!---->
	<!---->
    <!-- INDIVIDUAL DIVS FOR EACH NUMBERS ROLLOVER STATE DURING BANNER ROTATION -->
    <!---->
	<!---->

    <div id="numberBar1">
    <img src="images/1_up.jpg" alt="Banner 1" name="thumb1_up" id="thumb1_up" width="22" height="22"/>    </div>

    <div id="numberBar2">
    <img src="images/2_up.jpg" alt="Banner 2" name="thumb2_up" id="thumb2_up" width="22" height="22"/>    </div>

    <div id="numberBar3">
    <img src="images/3_up.jpg" alt="Banner 3" name="thumb3_up" id="thumb3_up" width="22" height="22"/>    </div>

    <div id="numberBar4">
    <img src="images/4_up.jpg" alt="Banner 4" name="thumb4_up" id="thumb4_up" width="22" height="22"/>    </div>

    <div id="numberBar5">
    <img src="images/5_up.jpg" alt="Banner 5" name="thumb5_up" id="thumb5_up" width="22" height="22"/>    </div>

<!---->
<!---->
<!-- END BANNERS -->
<!---->
<!---->

</div>
<!--END HOME PAGE WRAPPER-->


</body>






</html>
