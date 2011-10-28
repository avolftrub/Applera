<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
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
	<!---->
	<!---->
	<!--BEGIN HEADER CODE-->
	<!---->
	<!---->


    <div id="header" class="clearfix">

        <div id="mainHead" class="clearfix">

            <!---->
            <!--HOME LINK ON LOGO-->
            <!---->
            <!--CHANGE TO BE YOUR HOMEPAGE LINK-->
            <!---->


            <div class="logoblock">
                <a href="http://www.appliedbiosystems.ru/"><img alt="Applied Biosystems" src="images/ab_Logo.jpg"  border="0" class="logo" /></a>
                <span class="location">


                <!---->
                <!-- Country selector -->
                <!---->
                <span class="makeBold">Russia/CIS</span> [<a href="http://www3.appliedbiosystems.com/index.htm?changehp=true"><spring:message code="link.change"/></a>]</span>

            </div>
            <div style="position: fixed; top: 20px; left: 700px; font-size: 12px; font-weight: bold;">
                <appbio:userInRole role="ADMIN, STAFF">
                    <a href="mng_users.do"><spring:message code="administration.menu.title"/></a>&nbsp;|&nbsp;<a href="logout.do"><spring:message code="logout.link"/></a>
                </appbio:userInRole>
            </div>



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
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600644"><spring:message code="header.menu.cleaning.rnk"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600734"><spring:message code="header.menu.genotyping"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600799"><spring:message code="header.menu.crime"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601595"><spring:message code="header.menu.cell.biology"/></a></li>
                                        <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601224"><spring:message code="header.menu.qa"/></a></li>
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600832"><spring:message code="header.menu.mass.spectro"/></a></li>
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
                                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600818"><spring:message code="header.menu.information.mangement"/></a></li>
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
                                    <%--<li><a href="http://marketing.appliedbiosystems.com/mk/get/ANIMAL_HEALTH_0807_LANDING" title=""><spring:message code="header.menu.applications.animal"/></a></li>--%>
                                    <li><a href="http://marketing.appliedbiosystems.com/mk/get/APMMS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.environmental"/></a></li>
                                    <li><a href="http://marketing.appliedbiosystems.com/mk/get/BIOSECURITY_MS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.biosecurity"/></a></li>
                                    <li><a href="http://marketing.appliedbiosystems.com/mk/get/CLINICAL_RESMS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.clinical.research"/></a></li>
                                    <li class="subHead"><spring:message code="header.menu.applications.beverage.testing"/></li>
                                    <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/foodbev_landing" title="" target="_blank"><spring:message code="header.menu.applications.beverage"/></a></li>
                                    <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/PDK_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.food"/></a></li>
                                    <li class="subHead"><spring:message code="header.menu.applications.forensics"/></li>
                                    <li class="subContent"><a href="http://www3.appliedbiosystems.com/applicationstechnologies/HID/index.htm" title="" target="_blank"><spring:message code="header.menu.applications.human.identification"/></a></li>
                                    <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/FTMS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.toxicology"/></a></li>
                                </ul>
                            </div>
                            <div class="mright">
                                <ul>
                                        <li class="subHead"><spring:message code="header.menu.applications.genomics"/></li>
                                        <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/GENETIC_ANALYSIS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.genomics.analysis"/></a></li>
                                        <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/ALLSNPS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.genomics.genotyping"/></a></li>
                                        <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/ALLGENES_MS_LANDING" title="" target="_blank"><spring:message code="header.menu.applications.genomics.gene"/></a></li>
                                        <li class="subHead"><spring:message code="header.menu.applications.genomics.testing"/></li>
                                        <li class="subContent"><a href="http://marketing.appliedbiosystems.com/mk/get/pharma_landing" title="" target="_blank"><spring:message code="header.menu.applications.genomics.research"/></a></li>
                                        <li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/PharmaceuticalManufacturing/index.htm" title="" target="_blank"><spring:message code="header.menu.applications.genomics.manufacturing"/></a></li>
                                        <li class="subHead"><spring:message code="header.menu.applications.genomics.proteomics"/></li>
                                        <li class="subContent"><a href="http://www3.appliedbiosystems.com/applicationstechnologies/Proteomics/index.htm" title="" target="_blank"><spring:message code="header.menu.applications.genomics.protein"/></a></li>
                                        <li class="subContent"><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/Biomarker/index.htm" title="" target="_blank"><spring:message code="header.menu.applications.genomics.biomarker"/></a></li>
                                        <li><a href="http://www4.appliedbiosystems.com/stemcells/" target="_blank"><spring:message code="header.menu.applications.genomics.stem"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="right" style="padding-right:8px;">
                            <h3><spring:message code="header.menu.technologies"/></h3>
                            <ul>
                                <li><a href="http://www.sqllims.com/" title="" target="_blank"><spring:message code="header.menu.technologies.lims"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/MassSpectrometry/index.htm" title="" target="_blank"><spring:message code="header.menu.technologies.mass.spectro"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/PCR/index.htm" title="" target="_blank"><spring:message code="header.menu.technologies.pcr"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/real-timepcr/index.htm" title="" target="_blank"><spring:message code="header.menu.technologies.realtime.pcr"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/applicationstechnologies/DNASequencingbyCapillaryElectrophoresis/index.htm" title="" target="_blank"><spring:message code="header.menu.technologies.dna.sequencing"/></a></li>
                                <li><a href="http://www3.appliedbiosystems.com/AB_Home/applicationstechnologies/SOLiDSystemSequencing/index.htm" title="" target="_blank"><spring:message code="header.menu.technologies.dna.legitation"/></a></li>
                            </ul>
                        </div>
                    </div>

                <!---->
                <!--END DROPDOWN FOR APPLICATIONS LINK-->
                <!---->                                                 
                </li>



                <!--SERVICES LINK-->
                <!---->
                <li class="toplevel"><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=23233" title='<spring:message code="header.menu.services"/>'><spring:message code="header.menu.services"/></a>

                    <!---->
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

        <div id="subheader_menu1" class="clear">

            <!---->
            <!---->
            <!--BEGIN SEARCH AREA-->
            <!---->
            <!---->
            <div class="subright clear">
                <form  style="display: inline;" action="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGenSearch" method="POST" name="headerSearchForm" id="headerSearchForm">
                    <input type="text" class="searchTextBoxHeader" value="Enter search term" name="SearchRequest.Common.QueryText" onfocus="this.value=''"/>
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
    
