<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:if test="${catalogPage.breadCrumbsDepth == 1}">
    &nbsp;
</c:if>
<c:if test="${catalogPage.breadCrumbsDepth > 1}">
    <c:forEach var="product" items="${catalogPage.breadCrumbsList}" varStatus="vs">
        <c:choose>
            <c:when test="${product.group}">
                <a href="products.do?catalogNumber=${product.catalogNumber}"><c:out value="${product.productName}"/></a>
            </c:when>
            <c:otherwise>
                <a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=${product.catalogNumber}"><c:out value="${product.productName}"/></a>
            </c:otherwise>
        </c:choose>
        <c:if test="${vs.count < catalogPage.breadCrumbsDepth}">
            &gt;
        </c:if>
    </c:forEach>
</c:if>

