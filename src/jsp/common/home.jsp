<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<title>Applied Biosystems</title>

<link href="css/SpryTabbedPanels.css" rel="stylesheet" type="text/css" />
<script src="js/SpryTabbedPanels.js" type="text/javascript"></script>


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


<script type="text/javascript">
    function setTabs() {
    var tabCount = 4;
    var tabWidth = (100/tabCount) + 1;

    for (i=1; i<tabCount+1;i++){
        document.getElementById('tab'+i).style.zIndex=i;
    }
    changecss('.TabbedPanelsTab','width',tabWidth +'%');
}
</script>



</head>

<body onload="setTabs();loadBanner();"  id="home">

<!---->
<!---->
<!--BEGIN HEADER CODE-->
<!---->
<!---->



<script type="text/javascript">
MM_preloadImages('images/icons/login.jpg','images/icons/account.jpg','images/icons/basket.jpg','images/icons/qo.jpg');
</script>

<!-- Code added for Omniture -->
<script language="JavaScript" type="text/javascript" src=" http://www3.appliedbiosystems.com/cms/fragments/ab_header/scripts/s_code.js"></script> 
<script language="JavaScript" type="text/javascript" >
  s.pageName=document.title;
  s.channel="";
  s.prop1="";
  var s_code=s.t();

  if(s_code)document.write(s_code)

 </script>
<!-- end Code  for Omniture -->



	<div id="header" class="clearfix">

		<div id="mainHead" class="clearfix">

<!---->
<!--HOME LINK ON LOGO-->
<!---->
<!--CHANGE TO BE YOUR HOMEPAGE LINK-->
<!---->


			<div class="logoblock"><a href="http://www.appliedbiosystems.ru/"><img alt="Applied Biosystems" src="images/ab_Logo.jpg"  border="0" class="logo" /></a>


			<span class="location">


<!---->
<!--ENTER YOUR COUNTRY NAME HERE-->
<!---->

			<span class="makeBold">Russia/CIS</span> [<a href="http://www3.appliedbiosystems.com/index.htm?changehp=true"><spring:message code="link.change"/></a>]</span>



			</div>

<!---->
<!---->
<!--BEGIN LINKS ALONG THE TOP OF THE PAGE-->
<!---->
<!---->

<!---->
<!--Removing for Russia-->
<!--

			<div class="mainMenu">

				<ul>



				<li class="first"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLogin" class="storeLogin">Store Log In</a></li>


					<li id="myAccount"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserProfile" class="myAccount"><span class="arrowBack">My Account</span></a>
						<div class="trigger">
							<ul>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABChangePassword">Change Password</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserRegContactInfo&Mode=Profile">Contact Information</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserRegAddresses&Mode=Profile">Shipping &amp; Billing Information</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserPaymentOptions">Payment Options</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserPreferences">Contact Preferences</a></li>
							</ul>
						</div>
					</li>



					<li id="myBasket"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=OILDisplay" class="myBasket"><span class="arrowBack">My Baskets/Orders</span></a>
						<div class="trigger">
							<ul>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=OILDisplay">View My Basket</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABManageActiveBaskets">Manage Shopping Baskets</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABMyOrders">Order History/Reorder</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABManageFavorites&_Tab=ActiveFavorites">Favorites</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABQuotesPromotionsWorkspaceDisplay&_Tab=QuotesPromotionsTab">Promotions/Quotes</a></li>
								<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLaunchWorkspaceDisplay">Workspace</a></li>
							</ul>
						</div>
					</li>




					<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABQuickOrder" class="quickOrder">Quick Order</a></li>
				</ul>
			</div>


-->
<!---->
<!--END LINKS ALONG THE TOP OF THE PAGE-->
<!---->
<!---->

		</div>

<!---->
<!---->
<!--BEGIN LINKS ALONG THE BLUE BAR-->
<!---->
<!---->

		<div id="topMenu">
			<ul>

<!---->
<!--HOME LINK-->
<!---->
<!--CHANGE TO BE YOUR HOMEPAGE LINK-->
<!---->

				<li><a href="http://www.appliedbiosystems.ru/index.do" title='<spring:message code="menu.hint.home"/>'><spring:message code="menu.hint.home"/></a></li>

<!---->
<!--PRODUCTS LINK-->
<!---->
                <li class="toplevel"><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=0" title='<spring:message code="menu.hint.catalog.title"/>'><spring:message code="menu.hint.catalog"/></a>


	<!---->
	<!--DROPDOWN FOR PRODUCTS LINK-->
	<!---->
					<div class="subMenu clear">
						<div class="left">
							<h3><spring:message code="menu.hint.catalog"/></h3>
							<div class="mleft">
								<ul>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601803"><spring:message code="header.menu.micro.rnk"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=606300"><spring:message code="header.menu.animal.health"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600644"><spring:message code="header.menu.cleaning.rnk"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600734"><spring:message code="header.menu.genotyping"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600799"><spring:message code="header.menu.crime"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601595"><spring:message code="header.menu.cell.biology"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601224"><spring:message code="header.menu.qa"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=602380"><spring:message code="header.menu.microchip"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=603013"><spring:message code="header.menu.modification.rnk"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601246"><spring:message code="header.menu.realtime.prc"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600961"><spring:message code="header.menu.prc"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=603885"><spring:message code="header.menu.primery"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=602984"><spring:message code="header.menu.ribo.analysis"/></a></li>
								</ul>
							</div>
							<div class="mright">
								<ul>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=60522"><spring:message code="header.menu.dna.sequencing"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601192"><spring:message code="header.menu.protein.sequencing"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600587"><spring:message code="header.menu.synthesis.dna"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601116"><spring:message code="header.menu.synthesis.peptid"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=602991"><spring:message code="header.menu.translation.systems"/></a></li>
                                    <%-- <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600818"><spring:message code="header.menu.information.mangement"/></a></li> --%>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600670"><spring:message code="header.menu.spectrophotometry"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600500"><spring:message code="header.menu.chromotography"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600674"><spring:message code="header.menu.expression"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=602391"><spring:message code="header.menu.rnk.rnki"/></a></li>
								</ul>
							</div>
						</div>
						<div class="right" style="padding-right:8px; padding-left:8px;">
							<h3><spring:message code="header.menu.whats.new"/></h3>
							<ul>
							    <li><a href="http://www3.appliedbiosystems.com/prod/SpecialOffers/index.htm?abhomepage=eur" title=""><spring:message code="header.menu.special.offers"/></a></li>
							</ul>

                            <h3><spring:message code="header.menu.tag.production"/></h3>
                            <ul>
                                <li><a href="http://www4.appliedbiosystems.com/tools/workflow/workflow.php"><spring:message code="header.menu.tag.production.siRNAs"/></a></li>
                                <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABCNVKeywordSearch&catID=606182" target="_blank"><spring:message code="header.menu.tag.production.copy.number.assays"/></a></li>
                                <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601264"><spring:message code="header.menu.special.offers.primery.set"/></a></li>
                                <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601272"><spring:message code="header.menu.special.offers.cards"/></a></li>
                                <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600701"><spring:message code="header.menu.special.offers.micro.rnk"/></a></li>
                                <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601277"><spring:message code="header.menu.special.offers.snp.primery.set"/></a></li>
                            </ul>

						</div>
					</div>
	<!---->
	<!--END DROPDOWN FOR PRODUCTS LINK-->
	<!---->
				</li>


<!---->
<!--APPLICATIONS LINK-->
<!---->
				<li class="toplevel"><a href="http://www3.appliedbiosystems.com/applicationstechnologies/index.htm" title='<spring:message code="header.menu.applications.technologies"/>'><spring:message code="header.menu.applications.technologies"/></a>

	<!---->
	<!--DROPDOWN FOR APPLICATIONS LINK-->
	<!---->

					<div class="subMenu clear">
						<div class="left">
							<h3><spring:message code="header.menu.applications"/></h3>
							<div class="mleft">
								<ul>
									<%--<li><a href="http://marketing.appliedbiosystems.com/mk/get/ANIMAL_HEALTH_0807_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.animal"/></a></li>--%>
                                    <li><a href="http://marketing.appliedbiosystems.com/mk/get/APMMS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.environmental"/></a></li>
                                    <%-- <li><a href="http://marketing.appliedbiosystems.com/mk/get/BIOSECURITY_MS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.biosecurity"/></a></li> --%>
									<li><a href="http://marketing.appliedbiosystems.com/mk/get/CLINICAL_RESMS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.clinical.research"/></a></li>
								
									<li class="subHead"><spring:message code="header.menu.applications.beverage.testing"/></li>
									<li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/foodbev_landing" target="_blank" title=""><spring:message code="header.menu.applications.beverage"/></a></li>
									<li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/FoodPathogenDetection/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.food"/></a></li>
									<li class="subHead"><spring:message code="header.menu.applications.forensics"/></li>
									<li class="subContent"><a href="http://www3.appliedbiosystems.com/applicationstechnologies/HID/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.human.identification"/></a></li>
                                    <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/FTMS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.toxicology"/></a></li>
								</ul>
                            </div>
							<div class="mright">
								<ul>
									<li class="subHead"><spring:message code="header.menu.applications.genomics"/></li>
									<li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/GENETIC_ANALYSIS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.genomics.analysis"/></a></li>
									<li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/ALLSNPS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.genomics.genotyping"/></a></li>
									<li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/ALLGENES_MS_LANDING" target="_blank" title=""><spring:message code="header.menu.applications.genomics.gene"/></a></li>
                                    <li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/High-Resolution-Melting/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.genomics.prc.curve"/></a></li>
                                    <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/MIRNA_TOOLS_MLANDING" target="_blank" title=""><spring:message code="header.menu.applications.genomics.micro.rnk.research"/></a></li>

                                    <li class="subHead"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Influenza-A-H1N1-Research/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.genomics.testing.h1n1"/></a></li>
                                    
									<li class="subHead"><spring:message code="header.menu.applications.genomics.testing"/></li>
									<li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/pharma_landing" target="_blank" title=""><spring:message code="header.menu.applications.genomics.research"/></a></li>
									<li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/PharmaceuticalManufacturing/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.genomics.manufacturing"/></a></li>
									<li class="subHead"><spring:message code="header.menu.applications.genomics.proteomics"/></li>
                                    <li class="subContent"><a href="http://www3.appliedbiosystems.com/applicationstechnologies/Proteomics/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.genomics.protein"/></a></li>
									<li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Biomarker/index.htm" target="_blank" title=""><spring:message code="header.menu.applications.genomics.biomarker"/></a></li>
									<li><a href="http://www4.appliedbiosystems.com/stemcells/" target="_blank"><spring:message code="header.menu.applications.genomics.stem"/></a></li>
								</ul>
							</div>                                    be
						</div>
						<div class="right" style="padding-right:8px;">
							<h3><spring:message code="header.menu.technologies"/></h3>
							<ul>
								<%-- <li><a href="http://www.sqllims.com/" target="_blank" title=""><spring:message code="header.menu.technologies.lims"/></a></li> --%>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/PCR/index.htm" target="_blank" title=""><spring:message code="header.menu.technologies.pcr"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/real-timepcr/index.htm" target="_blank" title=""><spring:message code="header.menu.technologies.realtime.pcr"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/DNASequencingbyCapillaryElectrophoresis/index.htm" target="_blank" title=""><spring:message code="header.menu.technologies.dna.sequencing"/></a></li>
								<li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/SOLiDSystemSequencing/index.htm" target="_blank" title=""><spring:message code="header.menu.technologies.dna.legitation"/></a></li>
							</ul>

						</div>
					</div>
	<!---->
	<!--END DROPDOWN FOR APPLICATIONS LINK-->
	<!---->
				</li>

<!---->
<!--SERVICES LINK-->
<!---->
				<li class="toplevel"><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=23233" title='<spring:message code="header.menu.services"/>'><spring:message code="header.menu.services"/></a>	<!---->
	<!--DROPDOWN FOR SUPPORT LINK-->
	<!---->

					<div class="clear subMenuAlt">
                        <ul>
                            <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604655" target="_blank"><spring:message code="header.menu.services.instrumental"/></a></li>
                            <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604445" target="_blank"><spring:message code="header.menu.services.validation"/></a></li>
                            <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604438" target="_blank"><spring:message code="header.menu.services.it"/></a></li>
                            <li class="lastRow"><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604434" target="_blank"><spring:message code="header.menu.services.custom"/></a></li>
						</ul>

					</div>
	<!---->
	<!--END DROPDOWN FOR SUPPORT LINK-->
	<!---->
				</li>

<!---->
<!--SUPPORT LINK-->
<!---->
				<li class="toplevel"><a href="http://www.appliedbiosystems.ru/support.do" title='<spring:message code="menu.hint.support"/>'><spring:message code="menu.hint.support"/></a>
	<!---->
	<!--DROPDOWN FOR SUPPORT LINK-->
	<!---->

					<div class="clear subMenuAlt">
                        <ul>
							<li><a href="http://www.appliedbiosystems.ru/support.do"><spring:message code="header.menu.support"/></a></li>
							<li><a href="http://marketing.appliedbiosystems.com/mk/submit/GLOBAL_SERVICES_EU_ARD?_JS=T&rd=d" target="_blank"><spring:message code="header.menu.support.global"/></a></li>
							<li><a href="http://faqs.appliedbiosystems.com" target="_blank"><spring:message code="header.menu.support.faq"/></a></li>
							<li><a href="http://www.appliedbiosystems.com/support/apptech/" target="_blank"><spring:message code="header.menu.support.presentations"/></a></li>
							<li><a href="http://www.appliedbiosystems.com/support/software/" target="_blank"><spring:message code="header.menu.support.software.download"/></a></li>
							<li><a href="http://www3.appliedbiosystems.com/sup/gl/search.htm" target="_blank"><spring:message code="header.menu.support.literature"/></a></li>
							<li><a href="http://www3.appliedbiosystems.com/sup/msds/search.htm" target="_blank"><spring:message code="header.menu.support.msds"/></a></li>
							<li><a href="http://www3.appliedbiosystems.com/sup/coa/search.htm" target="_blank"><spring:message code="header.menu.support.certificates"/></a></li>
                            <li><a href="http://www4.appliedbiosystems.com/tools/citations/" target="_blank"><spring:message code="header.menu.support.citation"/></a></li>

                            <li><a href="http://www.appliedbiosystems.com/support/servicecall.cfm" target="_blank"><spring:message code="header.menu.support.support.center"/></a></li>
							<li><a target="new window4" href="http://www.ambion.com/contact/techserv.html" target="_blank"><spring:message code="header.menu.support.technical.service"/></a></li>

							<li><a href="http://www.appliedbiosystems.com/support/software_community/" target="_blank"><spring:message code="header.menu.support.software.community"/></a></li>
							<li class="lastRow"><a href="http://abinformatics.custhelp.com/cgi-bin/abinformatics.cfg/php/enduser/home.php" target="_blank"><spring:message code="header.menu.support.lims"/></a></li>

						</ul>

					</div>
	<!---->
	<!--END DROPDOWN FOR SUPPORT LINK-->
	<!---->
				</li>

<!---->
<!--LEARNING LINK-->
<!---->
				<li class="toplevel"><a style="cursor:default;" href="javascript:void(0);" title='<spring:message code="header.menu.training"/>'><spring:message code="header.menu.training"/></a>
	<!---->
	<!--DROPDOWN FOR LEARNING LINK-->
	<!---->

					<div class="clear subMenuAlt">

						<ul>
                            <li><a href="http://appliedbiosystems.com/service/training/" target="_blank"><spring:message code="header.menu.training.users"/></a></li>
                            <li><a href="http://www.appliedbiosystems.ru/events.do" title=""><spring:message code="header.menu.training.events"/></a></li>
                            <li class="lastRow"><a href="http://events-na.appliedbiosystems.com/mk/submit/webinar_ard?_JS=T&rd=cm" title="" target="_blank"><spring:message code="header.menu.training.presentations"/></a></li>
                        </ul>

                    </div>

	<!---->
	<!--END DROPDOWN FOR LEARNING LINK-->
	<!---->

				</li>
			</ul>
		</div>

<!---->
<!---->
<!--END  LINKS ALONG THE BLUE BAR-->
<!---->
<!---->

		<div id="subheader_menu" class="clear">

<!---->
<!---->
<!--BEGIN LOGIN AREA-->
<!---->
<!--
			<div class="subleft">
				<a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLogin">Log In</a> or <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABUserRegBasicInfo" class="makeBold">Register</a> to see your product prices &amp; to place orders.

			</div>
-->
<!---->
<!---->
<!--END LOGIN AREA-->
<!---->
<!---->


<!---->
<!---->
<!--BEGIN SEARCH AREA-->
<!---->
<!---->

			<div class="subright clear">
				<form  style="display: inline;" action="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGenSearch" method="POST" name="headerSearchForm" id="headerSearchForm">
				<input type="text" class="searchTextBox" value="Enter search term" name="SearchRequest.Common.QueryText" onfocus="this.value=''"/>

				<select id="formHeaderSearchSelect" name="SearchRequest.Parametric.TreeView.Node.AB" class="searchDropdown">
							<option value="" selected="selected">All Categories</option>

							<option value="Product Catalog">Product Catalog</option>

							<option value="Part Numbers">Part Numbers</option>

							<option value="Gene-specific Assays">Gene-specific Assays</option>

							<option value="Documents">Product &amp; Technical Literature</option>


							<option value="Applications & Technologies">Applications & Technologies</option>

							<option value="FAQs">FAQs</option>

							<option value="Support">Support</option>

							<option value="About Applied Biosystems">About Applied Biosystems</option>
				</select>
				<span class="buttonfix clear">
					<a href="javascript:processSearch('formHeaderSearchField',document.forms['headerSearchForm']);"><input type="image" src="images/button_right_arrow.gif" class="searchButton" id="formHeaderSearchButton" value="Go" /></a>
				</span>
				</form>
			</div>

<!---->
<!---->
<!--END SEARCH AREA-->
<!---->
<!---->


		</div>
	</div>

<!---->
<!---->
<!--END HEADER CODE-->
<!---->
<!---->




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

    <div id="banner2"><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607222&tab=Overview?ICID=ABM2-KRBR-0410-RU-HP" target="_blank"><img src="images/banner2.jpg?20100429" width="730" height="296" border="0" /></a></div>

    <div id="banner3"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Real-TimePCR/GeneExpressionmRNAAssaysArrays/index.htm?ICID=ABM3-TQA-0410-RU-HP" target="_blank"><img src="images/banner3.jpg?20100429" width="730" height="296" border="0" /></a></div>        

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

<!---->
<!---->
<!--TABBED PANEL WRAPPER-->
<!---->
<!---->

	<div id="TabbedPanelWrapper">

	<!---->
	<!---->
	<!--BEGIN TABBED CONTENT-->
	<!---->
	<!---->

    <div id="TabbedPanels1" class="TabbedPanels" style="padding-left:14px;">


    <!---->
	<!---->
    <!--INDIVIDUAL TAB HEADERS-->
	<!---->
	<!---->

            <ul class="TabbedPanelsTabGroup">
              <li id="tab4" class="TabbedPanelsTab" tabindex="0">
                  <div id="tabContent"><spring:message code="home.learn"/></div>
              <img id="tabImage4" src="images/tabs/whiteTabBeg_first.jpg"  width="15" height="27" style="display:none;" class="corner" />        </li>

            <li id="tab3" class="TabbedPanelsTab" tabindex="0">
                  <div id="tabContent"><spring:message code="home.shop"/></div>
              <img id="tabImage3" src="images/tabs/greyTabBeg_first.jpg"  width="15" height="27" style="display:none;" class="corner" />        </li>

            <li id="tab2" class="TabbedPanelsTab" tabindex="0">
                  <div id="tabContent"><spring:message code="home.support"/></div>
              <img id="tabImage2" src="images/tabs/greyTabBeg_first.jpg"  width="15" height="27" style="display:none;" class="corner" />        </li>

            <li id="tab1" class="TabbedPanelsTab lastTab" tabindex="0">
                  <div id="tabContent"><spring:message code="home.news"/></div>
              <img id="tabImage1" src="images/tabs/greyTabBeg_first.jpg"  width="15" height="27" style="display:none;" class="corner" />        </li>
            </ul>

		<!---->
		<!---->
      <!--END TAB HEADERS-->
		<!---->
		<!---->


      <!---->
      <!---->
      <!--BEGIN TAB CONTENT GROUP - CONTENT IS ASSIGNED TO TABS IN ORDER (FIRST CONTENT CONTAINER GOES WITH FIRST TAB HEADER, ETC.-->
      <!---->
      <!---->

      <div class="TabbedPanelsContentGroup">

		<!---->
		<!---->
      	<!--CONTENT FOR FIRST TAB-->
      	<!---->
      	<!---->

        <div class="TabbedPanelsContent">


            <div id="TabContentContainer">

                <!--DIV TAG FOR LEFT LINKS-->
                <div id="TabContentFeature">
                    <h3><spring:message code="tab.learn.featured.topics"/></h3>
                        <p>
                        <a href="http://www.appliedbiosystems.com/welcome/?page=eur" target="_blank"><spring:message code="tab.learn.featured.topics.more.info"/></a><br /><br />
                        <a href="http://www4.appliedbiosystems.com/tools/citations/" target="_blank"><spring:message code="tab.learn.featured.topics.search"/></a>                        </p>
                </div>

   				<!--DIV TAG FOR RIGHT BANNER IMAGE-->
                <div id="TabContentImage">
                    <a href="http://www3.appliedbiosystems.com/AB_Home/massspec/index.htm">
                        <%--<img border="0" src="images/cms_072009.jpg"/>--%>
                    </a>
                </div>

                <!--DIV TAG FOR MAIN (CENTER) CONTENT-->
                <div id="TabContentMain">
                    <h3><spring:message code="tab.learn.featured.topics.solutions"/></h3>
                        <p>
                            <table width="98%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.learn.featured.topics.solutions.dna"/></span>
                                   <ul >
                                   <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/DNASequencingbyCapillaryElectrophoresis/index.htm" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.capillary"/></a></li>
                                   <li><a href="http://marketing.appliedbiosystems.com/mk/get/ALLSNPS_LANDING" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.genotyping"/></a></li>
                                   <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/PCR/index.htm" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.prc"/></a></li>
                                   <li><a href="http://marketing.appliedbiosystems.com/mk/get/SOLID_KNOWLEDGE_LANDING" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.solid"/></a></li>
                                    </ul>
                                </td>
                                <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.learn.featured.topics.solutions.rna"/></span>
                                   <ul >
                                   <li><a href="http://events-na.appliedbiosystems.com/mk/get/0905_allgene_landing" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.gene"/></a></li>
                                   <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Real-TimePCR/index.htm" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.realrime.prc"/></a></li>
                                   <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Real-TimePCR/index.htm" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.sirna"/></a></li>
                                    </ul>                                </td>
                                <td style="padding:6px;padding-top:0px; width: 120px;" valign="top" width="44%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.learn.featured.topics.solutions.protein"/></span>
                                </td>
                                <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.learn.featured.topics.solutions.forensics"/></span>
                                   <ul >
                                    <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/HID/index.htm" target="_blank"><spring:message code="tab.learn.featured.topics.solutions.human.identification"/></a></li>
                                    </ul>                                </td>
                            </tr>
                            </table>
                    <p>
                        <a href="http://www3.appliedbiosystems.com/applicationstechnologies/index.htm" target="_blank" style="CLEAR: both; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 5px; MARGIN-RIGHT: 7px; PADDING-TOP: 5px; FONT-FAMILY: verdana;"><spring:message code="tab.links.all.applications"/></a><br><br>
                    </p>
                    
                      </p>
                </div>

                <br class="clearfloat" />
            </div>
        </div><!--END CONTENT FOR FIRST TAB-->


		<!---->
		<!---->
      	<!--CONTENT FOR SECOND TAB-->
      	<!---->
      	<!---->

        <div class="TabbedPanelsContent">


            <div id="TabContentContainer">

                <!--DIV TAG FOR LEFT LINKS-->
                <div id="TabContentFeature">
                    <h3><spring:message code="tab.shop.news"/></h3>
                        <p>
                            <a href="http://marketing.appliedbiosystems.com/mk/get/SELECT_MLANDING?utm_source=AB-tab&utm_medium=listing-shop-NA&utm_campaign=silencer" target="_blank">
                                <spring:message code="tab.shop.silencing"/>
                            </a><br/>
                        </p>
                </div>


                <!--DIV TAG FOR MAIN (CENTER) CONTENT - NOTE: CLASS NAME CHANGES IF NO BANNER IS PRESENT -->
                <div id="TabContentMainNoImage">
                    <!--<h3>What Applied Biosystems can do for:</h3>-->
                        <p>
                            <table width="98%" cellspacing="0" cellpadding="0" border="0">
                            <tr>

                                <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                    <%--<span style="font-weight:bold; color:#003366; padding-left:5px;">DNA Analysis</span>--%>
                                   <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                   <li><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=0"><spring:message code="tab.shop.browse"/></a></li>
                                   <li><a href="http://www.appliedbiosystems.ru/contact.do"><spring:message code="tab.shop.browse.contact"/></a></li>
                                   <li><a href="http://www.ambion.com/contact/litreq/index.html" target="_blank"><spring:message code="tab.shop.browse.catalog.request"/></a></li>
                                    </ul>
                                </td>
                            </tr>
                            </table>
                      </p>
                </div>

                <br class="clearfloat" />
            </div>
        </div><!--END CONTENT FOR SECOND TAB-->


      	<!---->
      	<!---->
      	<!--CONTENT FOR THIRD TAB-->
      	<!---->
      	<!---->


        <div class="TabbedPanelsContent">


            <div id="TabContentContainer">

                <!--DIV TAG FOR LEFT LINKS-->
                <div id="TabContentFeature">
                    <h3><spring:message code="tab.learn.featured.topics"/></h3>
                    <p>
                        <a href="http://www4.appliedbiosystems.com/tools/citations/" target="_blank"><spring:message code="tab.support.other"/></a><br /><br />
                        <a href="http://www.appliedbiosystems.eu.com/mk/get/pcrcourse?utm_source=AB-EU-tab&utm_medium=listing-learn&utm_campaign=PCRCourse" target="_blank"><spring:message code="tab.support.training"/></a>
                    </p>
                </div>


                <!--DIV TAG FOR MAIN (CENTER) CONTENT - NOTE: CLASS NAME CHANGES IF NO BANNER IS PRESENT -->
                <div id="TabContentMainNoImage">
                    <table>
                        <tr>
                            <td valign="top">
                                <h3 style="margin-top: 6px;"><spring:message code="tab.support.find.literature"/></h3>
                                    <p>
                                        <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                               <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                               <li><a href="http://www3.appliedbiosystems.com/sup/gl/search.htm" target="_blank"><spring:message code="tab.support.find.general.literature"/></a><br><span style="color: #4B4B4B;"><spring:message code="tab.support.find.protocols"/></span></li>
                                               <li><a href="http://www3.appliedbiosystems.com/sup/msds/search.htm" target="_blank"><spring:message code="tab.support.find.msds"/></a></li>
                                               <li><a href="http://www3.appliedbiosystems.com/sup/coa/search.htm" target="_blank"><spring:message code="tab.support.find.certificates"/></a></li>
                                               <li><a href="http://www4.appliedbiosystems.com/tools/citations/" target="_blank"><spring:message code="tab.support.find.citations"/></a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </table>
                                  </p>
                            </td>
                            <td valign="top">
                                <h3 style="margin-top: 6px;"><spring:message code="tab.support.get.support"/></h3>
                                    <p>
                                        <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                               <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                               <li><a href="https://www2.appliedbiosystems.com/support/contact/" target="_blank"><spring:message code="tab.support.contact.support"/></a><br><span style="color: #4B4B4B;"><spring:message code="tab.support.consultation"/></span></li>
                                               <li><a href="http://faqs.appliedbiosystems.com/cgi-bin/appliedbio.cfg/php/enduser/std_alp.php" target="_blank"><spring:message code="tab.support.search.faq"/></a><br><span style="color: #4B4B4B;"><spring:message code="tab.support.search.faq.descr"/></span></li>
                                               <li><a href="https://www2.appliedbiosystems.com/support/software/" target="_blank"><spring:message code="tab.support.downloads"/></a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </table>
                                  </p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <a href="http://www.appliedbiosystems.ru/support.do" style="CLEAR: both; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 5px; MARGIN-RIGHT: 7px; PADDING-TOP: 5px; FONT-FAMILY: verdana;"><spring:message code="tab.links.all.support"/></a><br><br>
                    </p>
                    
                </div>
                

                <br class="clearfloat" />
            </div>
        </div><!--END CONTENT FOR THIRD TAB-->

      	<!---->
      	<!---->
      	<!--CONTENT FOR FOURTH TAB-->
      	<!---->
      	<!---->


        <div class="TabbedPanelsContent">


            <div id="TabContentContainer">

                <!--DIV TAG FOR LEFT LINKS-->
                <div id="TabContentFeature">
                    <h3><spring:message code="tab.news.latest"/></h3>
                        <p>
                        <a href="http://press.appliedbiosystems.com/corpcomm/applerapress.nsf/ABIDisplayPress/C55BAE26EEBA2C1888257487007BB427?OpenDocument&type=abi" target="_blank"><spring:message code="tab.news.1"/></a><br /><br />
                        <a href="http://press.appliedbiosystems.com/corpcomm/applerapress.nsf/ABIDisplayPress/B2725E396BD5D4D2882574870043E7CB?OpenDocument&type=abi" target="_blank"><spring:message code="tab.news.2"/></a>
                        </p>
                        <p>
                            <a href="http://www.appliedbiosystems.ru/events.do" style="CLEAR: both; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 5px; MARGIN-RIGHT: 7px; PADDING-TOP: 5px; FONT-FAMILY: verdana;"><spring:message code="tab.links.all.events"/></a>
                        </p>

                </div>

                <div id="TabContentMain">
                    <h3><spring:message code="tab.news.join"/></h3>
                        <p>
                            <table width="98%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.news.conferences"/></span>
                                   <ul >
                                   <li><a href="http://www.hupo2008.nl/" target="_blank"><spring:message code="tab.news.conferences.1"/></a></li>
                                   <li><a href="http://hgm2008.hugo-international.org/" target="_blank"><spring:message code="tab.news.conferences.2"/></a></li>
                                   <%--<li><a href="http://www.geneticsberlin2008.com/" target="_blank"><spring:message code="tab.news.conferences.3"/></a></li>--%>
                                    </ul>
                                </td>

                                <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.news.workshops"/></span>
                                   <ul >
                                   <li><a href="http://marketing.appliedbiosystems.com/mk/get/EU_DDD_0308_LANDING?utm_source=AB-EU-tab&utm_medium=listing-NE&utm_campaign=DDDSS" target="_blank"><spring:message code="tab.news.workshops.european"/></a></li>
                                    </ul>
                                </td>
                                <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                    <span style="font-weight:bold; color:#003366; padding-left:5px;"><spring:message code="tab.news.webinars"/></span>
                                   <ul >
                                       <li><a href="http://appliedbiosystems.cnpg.com/Video/flatFiles/546/?utm_source=AB-NA-tab&utm_medium=listing-NE&utm_campaign=VeritiWbnr" target="_blank"><spring:message code="tab.news.webinars.veritilink"/></a></li>
                                       <li><a href="http://appliedbiosystems.cnpg.com/Video/flatFiles/559/index.aspx?utm_source=AB-NA-tab&utm_medium=listing-NE&utm_campaign=LightSightWbnr" target="_blank"><spring:message code="tab.news.webinars.lightsight"/></a></li>
                                       <li><a href="http://appliedbiosystems.feedroom.com/?skin=showcase2&fr_story=183585ef38721ed3fe28c01a86bd5282d719721b&rf=ev&autoplay=true?utm_source=AB-NA-tab&utm_medium=listing-NE&utm_campaign=C2CTWbnr" target="_blank"><spring:message code="tab.news.webinars.taqman"/></a></li>
                                    </ul>
                                </td>
                            </tr>
                            </table>
                      </p>
                </div>                
                                     
                <br class="clearfloat" />
            </div>
        </div><!--END CONTENT FOR FOURTH TAB-->
      </div>
    </div>
<!---->
<!---->
<!--BEGIN FOOTER CODE-->
<!---->
<!---->
 <br class="clearfloat" />
<div id="footer">
    <ul id="footerNav" class="footerText">
        <li class="first"><a href="http://www.lifetechnologies.com" target="_blank"><spring:message code="footer.company.info"/></a></li>
        <li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=61498&p=irol-irhome" target="_blank"><spring:message code="footer.investors"/></a></li>
        <li><a href="http://www.lifetechnologies.com/about-life-technologies/media-resources.html" target="_blank"><spring:message code="footer.media"/></a></li>
        <li><a href="http://www.lifetechnologies.com/careers" target="_blank"><spring:message code="footer.careers"/></a></li>
        <li><a href="http://www.appliedbiosystems.com/webfeedback" target="_blank"><spring:message code="footer.feedback"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/siteMap.cfm" target="_blank"><spring:message code="footer.sitemap"/></a></li>
        <li><a href="http://appliedbiosystems.ru/contact.do"><spring:message code="footer.contactus"/></a></li>
<%--
        <appbio:userInRole role="GUEST">
            <li><a href="login.do?originalURL=${pageUri}?${pageContext.request.queryString}"><spring:message code="login.link"/></a></li>
        </appbio:userInRole>
--%>
        <appbio:userInRole role="ADMIN, STAFF">
            <li><a href="logout.do"><spring:message code="logout.link"/></a></li>
        </appbio:userInRole>
    </ul>
    <div id="copyright" class="footerText">
        <spring:message code="footer.copyright"/>
    </div>
    <ul id="utility" class="footerText">
        <li class="first"><a href="https://www2.appliedbiosystems.com/privacypolicy.cfm" target="_blank"><spring:message code="footer.policy"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/termsofuse.cfm" target="_blank"><spring:message code="footer.terms"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/legal/" target="_blank"><spring:message code="footer.license"/></a></li>
    </ul>
</div>


<!---->
<!---->
<!--END FOOTER CODE-->
<!---->
<!---->



    </div>

    <!--END TABBED PANEL WRAPPER-->


</div>
<!--END HOME PAGE WRAPPER-->

<script type="text/javascript">
<!--
var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1");


//-->
</script>



</body>






</html>
