<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="leftNavHeader"><spring:message code="about.aboutus"/></div>
<c:choose>
    <c:when test="${selected eq 'contact'}">
        <a href="contact.do" class="leftNavSectionOn"><spring:message code="about.contactus"/></a>
    </c:when>
    <c:otherwise>
        <a href="contact.do" class="leftNavSection"><spring:message code="about.contactus"/></a>
    </c:otherwise>
</c:choose>
<c:choose>
    <c:when test="${selected eq 'corp_structure'}">
        <a href="corp_structure.do" class="leftNavSectionOn"><spring:message code="about.structure"/></a>
    </c:when>
    <c:otherwise>
        <a href="corp_structure.do" class="leftNavSection"><spring:message code="about.structure"/></a>
    </c:otherwise>
</c:choose>
<c:choose>
    <c:when test="${selected eq 'events'}">
        <a href="events.do" class="leftNavSectionOn"><spring:message code="about.events"/></a>
    </c:when>
    <c:otherwise>
        <a href="events.do" class="leftNavSection"><spring:message code="about.events"/></a>
    </c:otherwise>
</c:choose>


