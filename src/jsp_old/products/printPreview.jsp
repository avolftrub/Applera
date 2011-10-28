<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!--<tiles:importAttribute scope="request" />-->
<html>
    <head>
        <!--<script type="text/javascript">-->
<%--
            var ua=navigator.userAgent;
            var linkString ='<link rel="stylesheet" type="text/css" href="css/appbio_';
            var extentionString ='.css"/>';
            if (ua.indexOf('IE') != -1) {
                document.write(linkString + 'ie' + extentionString)
            } else if (ua.indexOf('Mozilla') != -1) {
                document.write(linkString + 'mozilla' + extentionString);
            } else if (ua.indexOf("Opera") != -1) {
                document.write(linkString + 'mozilla' + linkString);
            } else {
                document.write(linkString + 'ie' + extentionString)
            }
// --%>
        <!--</script>-->

		<title><c:out value="${catalogPage.parentProduct.productName}"/></title>
		<meta name="Keywords" content="">
		<meta name="Description" content="">
		<link rel='stylesheet' href='css/screen.css' type='text/css'>

    </head>
    <body>
        <div class="popupHeaderWrapper column660">
			<img src="images/applied_biosystems_logo_small.gif" width="130" height="44" alt="Applied Biosystems" />
		</div>

        <div class="column660">
			<div class="column660 contentPrintCart">
                <div id="noTabContentWrapper">
					<div id="noTabContentMiddle">
                        <h2 class="title"><c:out value="${catalogPage.parentProduct.productName}"/></h2>
                        <c:if test="${catalogPage.parentProduct.description ne null}">
                            <p class="noTabHeaderText"><c:out value="${catalogPage.parentProduct.description}"/><br>&#160;</p>
                        </c:if>
                        <div id="contentListWrapper">
                            <c:forEach var="product" items="${catalogPage.firstListPart}">
                                <ul class="contentList">
                                    <li>
                                        <c:out value="${product.productName}"/>
                                    </li>
                                </ul>
                                <div class="contentSubList">
                                    <ul>
                                        <c:forEach var="subProduct" items="${product.subProducts}">
                                            <li>
                                                <c:out value="${subProduct.productName}"/>
                                            </li>
                                        </c:forEach>
                                    </ul>
                                </div>
                            </c:forEach>
                        </div>

                        <div id="listSpacer"></div>

                        <div id="contentListWrapper">
                            <c:forEach var="product" items="${catalogPage.secondListPart}">
                                <ul class="contentList">
                                    <li>
                                        <c:out value="${product.productName}"/>
                                    </li>
                                </ul>
                                <div class="contentSubList">
                                    <ul>
                                        <c:forEach var="subProduct" items="${product.subProducts}">
                                            <li>
                                                <c:out value="${subProduct.productName}"/>
                                            </li>
                                        </c:forEach>
                                    </ul>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <div class="noTabInnerFooter column660">
                    <p>
                        <spring:message code="product.catalog.note"/>
                    </p>
                </div>
            </div>
        </div>
        <div class="column668 floatLeft">
            <div class="hRule"></div>
                <p align="right">
                    <spring:message code="print.preview.copyright"/>
                </p>
        </div>
    </body>
</html>
