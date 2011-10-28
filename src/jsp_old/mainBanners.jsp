<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>


<div id="homePageWrapper">

<!---->
<!---->
<!-- RIGHT FEATURE BOX - I WANT TO BOX -->
<!---->
<!---->

    <div id="featureBoxWrapper">

        <!-- HEADER TEXT -->
        <div id="featureBoxHeader">

            <p>I want to...</p>
        </div>

        <!-- MAIN CONTENT -->

        <div id="featureBoxMiddle">
            <div id="content">
                  <div class="subheadFont"><spring:message code="banner.find"/></div>
                  <ul class="bannerFont">
                    <li><a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=603885"><spring:message code="banner.ad.primery"/></a></li>
                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601264"><spring:message code="banner.ad.primery.set"/></a></li>
                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=600701"><spring:message code="banner.ad.micro.rnk"/></a></li>
                    <li><a href="http://appliedbiosystems.ru/products.do?catalogNumber=601277"><spring:message code="banner.ad.snp"/></a></li>
                  </ul>
            </div>
        </div>

        <!-- BOTTOM IMAGE -->

        <div id="featureBoxBottom">
            <a href="http://www3.appliedbiosystems.com/prod/SpecialOffers/index.htm?abhomepage=eur" onmouseover="MM_swapImage('SO','','images/special_over.jpg',1)" onmouseout="MM_swapImage('SO','','images/special.jpg',1)">
                <img src="images/special.jpg" width="220" height="73" border="0" name="SO" id="SO" />
            </a>
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

        <!--<div id="banner1"><a href="#"><img src="images/banner1.jpg" width="730" height="296" border="0" /></a></div>-->

        <div id="banner2"><a href="#"><img src="images/banner2.jpg" width="730" height="296" border="0" /></a></div>

        <div id="banner3"><a href="#"><img src="images/banner3.jpg" width="730" height="296" border="0" /></a></div>

        <div id="banner4"><a href="#"><img src="images/banner2.jpg" width="730" height="296" border="0" /></a></div>

        <div id="banner5"><a href="#"><img src="images/banner3.jpg" width="730" height="296" border="0" /></a></div>
    </div>

    <!---->
    <!---->
    <!-- NUMBER BAR - ONE LINK FOR FOR EACH IMAGE -->
    <!---->
    <!---->

    <div id="numberBar">
        <%--<a href="javascript:swapBanner('1')" onmouseover="MM_swapImage('thumb1','','images/1_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/1.jpg" alt="Banner 1" name="thumb1" width="22" height="22" id="thumb1" /></a>--%>
        <a href="javascript:swapBanner('2')" onmouseover="MM_swapImage('thumb2','','images/2_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/2.jpg" name="thumb2" id="thumb2" alt="Banner 2" width="22" height="22" /></a>
        <a href="javascript:swapBanner('3')" onmouseover="MM_swapImage('thumb3','','images/3_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/3.jpg" alt="Banner 3" name="thumb3" id="thumb3" width="22" height="22" /></a>
        <a href="javascript:swapBanner('4')" onmouseover="MM_swapImage('thumb4','','images/4_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/4.jpg" alt="Banner 4" name="thumb4" id="thumb4" width="22" height="22" /></a>
        <a href="javascript:swapBanner('5')" onmouseover="MM_swapImage('thumb5','','images/5_up.jpg',1)" onmouseout="MM_swapImgRestore()"><img border="0" src="images/5.jpg" alt="Banner 5" name="thumb5" id="thumb5" width="22" height="22" /></a>
    </div>
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

<%--
    <div id="numberBar1">
        <img src="images/1_up.jpg" alt="Banner 1" name="thumb1_up" id="thumb1_up" width="22" height="22" />
    </div>
--%>


    <div id="numberBar2">
        <img src="images/2_up.jpg" alt="Banner 1" name="thumb2_up" id="thumb2_up" width="22" height="22" />
    </div>

    <div id="numberBar3">
        <img src="images/3_up.jpg" alt="Banner 1" name="thumb3_up" id="thumb3_up" width="22" height="22" />
    </div>

    <div id="numberBar4">
        <img src="images/4_up.jpg" alt="Banner 1" name="thumb4_up" id="thumb4_up" width="22" height="22" />
    </div>

    <div id="numberBar5">
        <img src="images/5_up.jpg" alt="Banner 1" name="thumb5_up" id="thumb5_up" width="22" height="22" />
    </div>

<!---->
<!---->
<!-- END BANNERS -->
<!---->
<!---->
    <div id="TabbedPanelWrapper">

<!---->
<!---->
<!--BEGIN TABBED CONTENT-->
<!---->
<!---->

        <div id="TabbedPanels1" class="TabbedPanels" style="padding-left:14px;">
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
                          <h3>Featured Topics</h3>
                              <p>
                              <a href="#">New methods in SNP Genotyping</a><br /><br />
                              <a href="#">LC/MS/MS techniques for Pharmaceutical QA/QC</a>                        </p>
                      </div>

                         <!--DIV TAG FOR RIGHT BANNER IMAGE-->
                      <div id="TabContentImage">
                          <img src="images/smallBanner.jpg" />                </div>


                      <!--DIV TAG FOR MAIN (CENTER) CONTENT-->
                      <div id="TabContentMain">
                          <h3>What Applied Biosystems can do for:</h3>
                              <p>
                                  <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                  <tr>

                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">DNA Analysis</span>
                                         <ul >
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">RNA Analysis</span>
                                         <ul >
                                         <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">Protein Analysis</span>
                                         <ul >
                                          <li><a href="#">Mass Spectrometry</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">Forensics</span>
                                         <ul >
                                          <li><a href="#">Human Identification</a></li>
                                          </ul>                                </td>
                                  </tr>
                                  </table>
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
                          <h3>Featured Topics</h3>
                              <p>
                              <a href="#">New methods in SNP Genotyping</a><br /><br />
                              <a href="#">LC/MS/MS techniques for Pharmaceutical QA/QC</a>                        </p>
                      </div>


                      <!--DIV TAG FOR MAIN (CENTER) CONTENT - NOTE: CLASS NAME CHANGES IF NO BANNER IS PRESENT -->
                      <div id="TabContentMainNoImage">
                          <h3>What Applied Biosystems can do for:</h3>
                              <p>
                                  <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                  <tr>

                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">DNA Analysis</span>
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">RNA Analysis</span>
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">Protein Analysis</span>
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Mass Spectrometry</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                          <span style="font-weight:bold; color:#003366; padding-left:5px;">Forensics</span>
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Human Identification</a></li>
                                          </ul>                                </td>
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
                          <h3>Training</h3>
                              <p>
                              <a href="#">Cras leo diam, feugiat in</a><br /><br />
                              <a href="#">Quisque non magna non enim faucibus rhoncus</a>                        </p>
                      </div>


                      <!--DIV TAG FOR MAIN (CENTER) CONTENT - NOTE: CLASS NAME CHANGES IF NO BANNER IS PRESENT -->
                      <div id="TabContentMainNoImage">
                          <h3>Find Documents:</h3>
                              <p>
                                  <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                  <tr>

                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                            <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Mass Spectrometry</a></li>
                                             <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Human Identification</a></li>
                                          </ul>                                </td>
                                  </tr>
                                  </table>
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
                          <h3>Training</h3>
                              <p>
                              <a href="#">Cras leo diam, feugiat in</a><br /><br />
                              <a href="#">Quisque non magna non enim faucibus rhoncus</a>                        </p>
                      </div>


                      <!--DIV TAG FOR MAIN (CENTER) CONTENT - NOTE: CLASS NAME CHANGES IF NO BANNER IS PRESENT -->
                      <div id="TabContentMainNoImage">
                          <h3>Find Documents:</h3>
                              <p>
                                  <table width="98%" cellspacing="0" cellpadding="0" border="0">
                                  <tr>

                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                         <li><a href="#">DNA Sequencing</a></li>
                                         <li><a href="#">Genotyping</a></li>
                                         <li><a href="#">PCR</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="15%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                         <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                            <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Mass Spectrometry</a></li>
                                             <li><a href="#">Gene Expression</a></li>
                                         <li><a href="#">Real-Time PCR</a></li>
                                         <li><a href="#">siRNA/RNAi</a></li>
                                          </ul>                                </td>
                                      <td style="padding:6px;padding-top:0px;" valign="top" width="14%">
                                         <ul style="color:#1279c6; padding-left:25px; padding-right:0px; margin:0px; margin-top:5px;">
                                          <li><a href="#">Human Identification</a></li>
                                          </ul>                                </td>
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
            <ul id="footerNav">
                <li class="first"><a href="#"><spring:message code="footer.company.info"/></a></li>
                <li><a href="http://ir.appliedbiosystems.com/"><spring:message code="footer.investors"/></a></li>
                <li><a href="http://www.applera.com/applera/careers.nsf"><spring:message code="footer.careers"/></a></li>
                <li><a href="http://websurveyor.net/wsb.dll/12024/customer_feedback.htm"><spring:message code="footer.feedback"/></a></li>
                <li><a href="https://www2.appliedbiosystems.com/siteMap.cfm"><spring:message code="footer.sitemap"/></a></li>
                <li><a href="http://appliedbiosystems.ru/contact.do"><spring:message code="footer.contactus"/></a></li>
            </ul>
            <div id="copyright">
                <spring:message code="footer.copyright"/>
            </div>
            <ul id="utility">
                <li class="first"><a href="https://www2.appliedbiosystems.com/privacypolicy.cfm"><spring:message code="footer.policy"/></a></li>
                <li><a href="https://www2.appliedbiosystems.com/termsofuse.cfm"><spring:message code="footer.terms"/></a></li>
                <li><a href="https://www2.appliedbiosystems.com/legal/"><spring:message code="footer.license"/></a></li>
            </ul>
        </div>
        <!---->
        <!---->
        <!--END FOOTER CODE-->
        <!---->
        <!---->

    </div>
</div>

