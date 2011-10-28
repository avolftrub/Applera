<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="contentLeftColumn">
    &nbsp;
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <h2 class="title"><spring:message code="error.exception.header"/></h2>
        <p>
            <spring:message code="error.exception.description" arguments="${logId}, ${logId}">
                <%--<spring:messageArgument value="${logId}"/>--%>
                <%--<spring:messageArgument value="${logId}"/>--%>
            </spring:message>
        </p>

        <img src="/images/shim.gif" alt="" width="15" height="1" border="0">
    </div>
</div>
