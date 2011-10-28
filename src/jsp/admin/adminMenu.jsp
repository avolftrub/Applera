<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="leftNavHeader"><spring:message code="administration.menu.title"/></div>
<c:choose>
    <c:when test="${selected eq 'contact'}">
        <a href="mng_users.do" class="leftNavSectionOn"><spring:message code="administration.menu.users"/></a>
    </c:when>
    <c:otherwise>
        <a href="mng_users.do" class="leftNavSection"><spring:message code="administration.menu.users"/></a>
    </c:otherwise>
</c:choose>
<%--
<c:choose>
    <c:when test="${selected eq 'corp_structure'}">
        <a href="mng_applications.do" class="leftNavSectionOn"><spring:message code="administration.menu.applications"/></a>
    </c:when>
    <c:otherwise>
        <a href="mng_applications.do" class="leftNavSection"><spring:message code="administration.menu.applications"/></a>
    </c:otherwise>
</c:choose>
<c:choose>
    <c:when test="${selected eq 'events'}">
        <a href="mng_lib.do" class="leftNavSectionOn"><spring:message code="administration.menu.library"/></a>
    </c:when>
    <c:otherwise>
        <a href="mng_lib.do" class="leftNavSection"><spring:message code="administration.menu.library"/></a>
    </c:otherwise>
</c:choose>
--%>


