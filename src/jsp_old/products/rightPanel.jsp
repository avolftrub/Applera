<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<script type="text/javascript" language="JavaScript">
    function printerFriendly() {
        var windowName = window.open("printPreview.do?catalogNumber=${catalogPage.parentProduct.catalogNumber}", "Printer", "directories=no,toolbar=no,menubar=yes,scrollbars=yes,resizable=yes");
        document.printerFriendly.target = "Printer";
        document.printerFriendly.submit();
    }
</script>
<!--<div class="clear">&nbsp;</div>-->

<div id="tabContentRightVerticalPad"></div>

<a href="javascript:printerFriendly()" class="printerFriendly">
    <img src="images/icon_printer_friendly.gif" width="20" height="16" alt="Printer friendly" class="floatLeft" /><spring:message code="product.catalog.printer.friendly"/>
	<div class="clear"></div>
</a>

<c:if test="${catalogPage.parentProduct.catalogNumber == 0}">
    <form name="promoForm" autocomplete="off" action='https://products.appliedbiosystems.com:443/ab/en/US/direct/ab;jsessionid=HyYcyppxMkKCnQzJC7QSNJdPkGZ50JnQpDjyR3Qp18S9LTSQzLpq!1185155410'>
        <input type="hidden" name="Operation" value="go" />
        <input type="hidden" name="_Tab" value="QuotesPromotionsTab" />
        <div id="promoCustomerStoriesShadowWrapper">
            <div id="promoCustomerStoriesWrapper2">
                <div id="promoApplicationsHeader"><spring:message code="product.catalog.promotions"/></div>
                <div >
                    <a href="https://products.appliedbiosystems.com:443/ab/en/US/direct/ab;jsessionid=Hwv07ylY61X2ZfSZlwG0YkyCnh2bZb7JnWgmm5J7bswlqM0yzs2T!707623596?cmd=ABQuoteRedeem">
                        <img src="images/promoImage.jpg" width="169" />
					</a>
				</div>
                <div class="leftLoginBottom" ><hr></div>
                <div id="promoApplicationsBody">
                    <div>
                        <spring:message code="product.catalog.promotions.description"/>
                        <select id="formApplicationsSelect" name="basketType">
                            <option value="10" selected><spring:message code="product.catalog.promotions.regular"/></option>
                            <option value="30"><spring:message code="product.catalog.promotions.standing"/></option>
                        </select>
                        <input type="hidden" name="cmd" value="ABQuotesPromotionsWorkspaceDisplay" />

                        <input type="text" name="QuoteNumber" id="formQuestionField" maxlength="50"/>
                        <a href="javascript: processPromotions()">
                            <img src="images/button_right_arrow_white_orange.gif" alt="Go" id="formQuestionGoButton" height="16" width="16">
                        </a>
                        <input type="hidden" name="ref" value="cat" />

                        <table class="font10 quotesAlign">
                            <tr>
                                <td>
                                    <a href='https://products.appliedbiosystems.com:443/ab/en/US/direct/ab;jsessionid=HyYcyppxMkKCnQzJC7QSNJdPkGZ50JnQpDjyR3Qp18S9LTSQzLpq!1185155410?cmd=ABQuotesPromotionsWorkspaceDisplay&_Tab=QuotesPromotionsTab'>
                                        <spring:message code="product.catalog.promotions.view.quotes"/>
                                    </a>
                                </td>
                            </tr>
                        </table>
                        <div class="clear"></div>

                    </div>
                </div>
            </div>
        </div>
        <div id="promoCustomerStoriesBottom"></div>
    </form>
</c:if>



<script language="javascript">
    function processApplication() {
		var actionURL;
        <c:forEach var="application" items="${catalogPage.topLevelApplications}">
            if(document.applicationsForm.formApplicationsSelect.value == <c:out value="${application.id}"/> ) {
                actionURL = 'applications.do?id=<c:out value="${application.id}"/>';
            }
        </c:forEach>
        if(document.applicationsForm.formApplicationsSelect.value == 1000) {
			actionURL = 'http://info.appliedbiosystems.com/ga';
		} else if(document.applicationsForm.formApplicationsSelect.value == 1010) {
			actionURL = 'http://www.sqllims.com/';
		} else if(document.applicationsForm.formApplicationsSelect.value == 1030) {
			actionURL = 'http://www.ambion.com/techlib/Documents.html?fkResSxn=8&fkSubSxn=25';
		} else if(document.applicationsForm.formApplicationsSelect.value == 1060) {
			actionURL = 'http://www.ambion.com/catalog/workflows/index_ab.html';
		}
		document.applicationsForm.action = actionURL;//DE-63331
		document.applicationsForm.submit();
	}

	function submitenter() {
		var keycode;
		if (window.event) {
			keycode = window.event.keyCode;
		}

		if(keycode == 13) {
			processApplication();
			return true;
		}
		else {
			return true;
		}
	}
</script>

<c:if test="${catalogPage.parentProduct.catalogNumber == 0}">
    <div id="featureWrapper">
        <div id="featureHeader">TaqMan&reg; Assays & Arrays</div>
        <div id="featurePromoWrapper"><img src="https://www2.appliedbiosystems.com/images/mktng_ftr_assayarray_2.jpg" width="168" height="51" alt="" /></div>
        <div id="featureBody">&bull;&nbsp;&nbsp;
            <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGEKeywordSearch&catID=600689">
                <spring:message code="product.catalog.tagman.search.gene"/>
            </a>
            <br><br>&bull;&nbsp;&nbsp;
            <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGTKeywordSearch&catID=600769">
                <spring:message code="product.catalog.tagman.search.snp"/>
            </a>
            <br><br>&bull;&nbsp;
            <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600696" >
                <spring:message code="product.catalog.tagman.configure"/>
            </a>
        </div>
	</div>

	<div id="featureWrapper">
		<div id="featurePromoWrapper">
            <img src="https://www.appliedbiosystems.com/images/TGFBetaPathway_3.jpg" width="168" height="51" alt="" />
        </div>
        <div id="featureBody">
            <br>
            <div align="center">
                <span class="nestedFontSize">
                    <a class="buttonOrange" style="DISPLAY:inline" href="http://www.appliedbiosystems.com/atlas.cfm"><spring:message code="product.catalog.geneassist.learnmore"/></a>
                </span>
            </div>
            <br><spring:message code="product.catalog.geneassist.description"/>
		</div>
	</div>
</c:if>
<!--
<form name="applicationsForm" method="post" action="">
	<input type="hidden" name="hierarchyID" value="102"/>
	<div id="promoCustomerStoriesShadowWrapper">

		<div id="promoCustomerStoriesWrapper">
			<div id="promoApplicationsHeader"><spring:message code="product.catalog.applications"/></div>
			<div id="promoApplicationsBody">
				<div>
					<select id="formApplicationsSelect" name="category1st" onKeyPress="return submitenter()">
                        <option value="1000"><spring:message code="application.microsite.generic.analysis"/></option>
                        <c:forEach var="application" items="${catalogPage.topLevelApplications}">
                            <option value="${application.id}"><c:out value="${application.name}"/></option>
                        </c:forEach>
                        <option value="1010"><spring:message code="application.microsite.lims"/></option>
                        <option value="1030"><spring:message code="application.microsite.rna.resources"/></option>
                        <option value="1060"><spring:message code="application.microsite.experimental.workflows"/></option>
					</select>
					<a href="javascript:processApplication()"><img src="images/button_right_arrow_white_orange.gif" width="16" height="16" alt="Go" id="formQuestionGoButton" /></a>
					<div class="clear"></div>
				</div>
                <spring:message code="product.catalog.applications.description"/>
			</div>
		</div>
	</div>
	<div id="promoCustomerStoriesBottom"></div>
</form>
-->

<div class="clear"></div>
<div class="clear"></div>


