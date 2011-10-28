<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<div id="contentLeftColumn">
    <tiles:get name="${productsMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="breadcrumbWrapper" >
        <tiles:get name="${breadCrumbs}" flush="false"/>
    </div>

    <div id="noTabContentWrapper">
        <div id="noTabContentMiddle">
            <h2 class="title"><c:out value="${catalogPage.parentProduct.productName}"/></h2>
            <c:if test="${catalogPage.parentProduct.validDescription eq true}">
                <p class="noTabHeaderText"><c:out value="${catalogPage.parentProduct.description}"/><br>&#160;</p>
            </c:if>
            <appbio:userInRole role="ADMIN, STAFF">
                <p align="left">
                    <table>
                        <tr>
                            <td>
                                <a href="addProduct.do?parentProduct=${catalogPage.parentProduct.catalogNumber}">
                                    <img src="images/add_cross.gif" alt="Add"/>
                                </a>
                            </td>
                            <td style="font-size: 15px; font-weight: bold; padding-left: 5px;">
                                <a href="addProduct.do?parentProduct=${catalogPage.parentProduct.catalogNumber}">
                                    <spring:message code="product.cataloge.add"/>
                                </a>
                            </td>
                        </tr>
                    </table>
                </p>
            </appbio:userInRole>

            <div id="contentListWrapper">
                <table>
                <c:forEach var="product" items="${catalogPage.firstListPart}">
                        <tr>
                            <td>
                                <ul class="contentList">
                                    <li>
                                        <c:choose>
                                            <c:when test="${product.group}">
                                                <a href="products.do?catalogNumber=${product.catalogNumber}"><c:out value="${product.productName}"/></a>
                                            </c:when>
                                            <c:otherwise>
                                                <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=${product.catalogNumber}" target="_blank"><c:out value="${product.productName}"/></a>
                                            </c:otherwise>
                                        </c:choose>
                                    </li>
                                </ul>
                                    <div class="contentSubList">
                                    <ul>
                                        <c:forEach var="subProduct" items="${product.subProducts}">
                                            <li>
                                                <c:choose>
                                                    <c:when test="${subProduct.group}">
                                                        <a href="products.do?catalogNumber=${subProduct.catalogNumber}"><c:out value="${subProduct.productName}"/></a>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=${subProduct.catalogNumber}" target="_blank"><c:out value="${subProduct.productName}"/></a>
                                                    </c:otherwise>
                                                </c:choose>
                                            </li>
                                            <%--<li><c:out value="${subProduct.group}"/></li>--%>
                    <%--
                                                        <td>
                                                            <a href="addProduct.do?parentProduct=${product.catalogNumber}&catalogNumber=${subProduct.catalogNumber}">
                                                                <img src="images/edit.gif" alt="Edit"/>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="deleteProduct.do?catalogNumber=${subProduct.catalogNumber}">
                                                                <img src="images/trash.gif" alt="Edit"/>
                                                            </a>
                                                        </td>
                    --%>
                                        </c:forEach>
                                    </ul>
                                    </div>

                            </td>
                            <appbio:userInRole role="ADMIN, STAFF">
                                <td valign="top">
                                    <a href="addProduct.do?parentProduct=${product.parentId}&catalogNumber=${product.catalogNumber}">
                                        <img src="images/edit.gif" alt="Edit" style="margin-top: 10px"/>
                                    </a>
                                </td>
                                <td valign="top">
                                    <a href="deleteProduct.do?type=product&catalogNumber=${product.catalogNumber}&back=products.do?catalogNumber=${product.parentId}" onclick="return confirm('<spring:message code="product.delete.confirmation"/>');">
                                        <img src="images/trash.gif" alt="Edit" style="margin-top: 10px"/>
                                    </a>
                                </td>
                            </appbio:userInRole>
                        </tr>
                </c:forEach>
                </table>
            </div>

            <div id="listSpacer"></div>
            
            <div id="contentListWrapper">
                <table>
                <c:forEach var="product" items="${catalogPage.secondListPart}">
                        <tr>
                            <td>
                                <ul class="contentList">
                                    <li>
                                        <c:choose>
                                            <c:when test="${product.group}">
                                                <a href="products.do?catalogNumber=${product.catalogNumber}"><c:out value="${product.productName}"/></a>
                                            </c:when>
                                            <c:otherwise>
                                                <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=${product.catalogNumber}" target="_blank"><c:out value="${product.productName}"/></a>
                                            </c:otherwise>
                                        </c:choose>
                                    </li>
                                </ul>
                                    <div class="contentSubList">
                                    <ul>
                                        <c:forEach var="subProduct" items="${product.subProducts}">
                                            <li>
                                                <c:choose>
                                                    <c:when test="${subProduct.group}">
                                                        <a href="products.do?catalogNumber=${subProduct.catalogNumber}"><c:out value="${subProduct.productName}"/></a>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=${subProduct.catalogNumber}" target="_blank"><c:out value="${subProduct.productName}"/></a>
                                                    </c:otherwise>
                                                </c:choose>
                                            </li>
                                            <%--<li><c:out value="${subProduct.group}"/></li>--%>
                    <%--
                                                        <td>
                                                            <a href="addProduct.do?parentProduct=${product.catalogNumber}&catalogNumber=${subProduct.catalogNumber}">
                                                                <img src="images/edit.gif" alt="Edit"/>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="deleteProduct.do?catalogNumber=${subProduct.catalogNumber}">
                                                                <img src="images/trash.gif" alt="Edit"/>
                                                            </a>
                                                        </td>
                    --%>
                                        </c:forEach>
                                    </ul>
                                    </div>

                            </td>
                            <appbio:userInRole role="ADMIN, STAFF">
                                <td valign="top">
                                    <a href="addProduct.do?parentProduct=${product.parentId}&catalogNumber=${product.catalogNumber}">
                                        <img src="images/edit.gif" alt="Edit" style="margin-top: 10px"/>
                                    </a>
                                </td>
                                <td valign="top">
                                    <a href="deleteProduct.do?type=product&catalogNumber=${product.catalogNumber}&back=products.do?catalogNumber=${product.parentId}" onclick="return confirm('<spring:message code="product.delete.confirmation"/>');">
                                        <img src="images/trash.gif" alt="Edit" style="margin-top: 10px"/>
                                    </a>
                                </td>
                            </appbio:userInRole>
                        </tr>
                </c:forEach>
                </table>


            </div>
            <div class="clear">&nbsp;</div>
        </div>
        
        <!--Right menu-->
            <div id="noTabContentRight">
                <tiles:get name="${rightPanel}" flush="false"/>
            </div>


            <div class="clear">&nbsp;</div>

<%--
            <div class="noTabInnerFooter">

                <c:if test="${catalogPage.parentProduct.catalogNumber == 0}">
                    <p><b>
                        <a href="https://www2.appliedbiosystems.com/legal/warranty_information.cfm"><spring:message code="product.catalog.warranty.link"/></a>
                        <spring:message code="product.catalog.warranty.description"/>
                    </b></p>
                </c:if>

                <p>
                    <spring:message code="product.catalog.note"/>
                </p>
            </div>
--%>

            <div class="clear">&nbsp;</div>

            <div class="clear">&nbsp;</div>
    </div>
</div>

