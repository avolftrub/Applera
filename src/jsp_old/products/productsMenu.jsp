<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
    <c:when test="${catalogPage.catalogMenu != null}">
        <div class="leftNavHeader">Products & Services</div>
        <c:forEach var="product" items="${catalogPage.catalogMenu}">
            <c:choose>
                <c:when test="${product.subProducts != null}">
                    <a href="products.do?catalogNumber=${product.catalogNumber}" class="leftNavSectionOn"><c:out value="${product.productName}"/></a>
                    <ul class="leftNavLinkList">
                    <!--<table>-->
                    <c:forEach var="subProduct" items="${product.subProducts}">
                        <!--<tr>-->
                            <!--<td>-->
                                <li>
                                    <a href="products.do?catalogNumber=${subProduct.catalogNumber}"><c:out value="${subProduct.productName}"/></a>
                                </li>
                            <!--</td>-->
                        <!--</tr>-->
                    </c:forEach>
                    <!--</table>-->
                    </ul>
                </c:when>
                <c:otherwise>
                    <a href="products.do?catalogNumber=${product.catalogNumber}" class="leftNavSection"><c:out value="${product.productName}"/></a>
                </c:otherwise>
            </c:choose>
        </c:forEach>
    </c:when>
    <c:otherwise>
        <div class="leftNavLinkList emptyBlock">&nbsp;&nbsp;&nbsp;</div>
    </c:otherwise>
</c:choose>
