<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="leftNavHeader">Applications</div>
<c:forEach var="application" items="${applicationPage.topLevelList}">
    <c:choose>
        <c:when test="${applicationPage.parentApplication.id == application.id}">
            <a class="leftNavSectionOn" href="applications.do?id=${application.id}"><c:out value="${application.name}"/></a>
        </c:when>
        <c:otherwise>
            <a class="leftNavSection" href="applications.do?id=${application.id}"><c:out value="${application.name}"/></a>
        </c:otherwise>
    </c:choose>
</c:forEach>
<a class="leftNavSection" href="https://www2.appliedbiosystems.com/applications/lims.cfm"><spring:message code="application.microsite.information.management"/></a>
