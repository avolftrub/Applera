<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<script type="text/javascript">
    function retryRequest() {
        var retryForm = document.getElementById("retryForm");
        retryForm.action="http://www.appliedbiosystems.ru" + document.getElementById("retryUrl").value;
        retryForm.submit();
    }
</script>
<div id="contentLeftColumn">
    &nbsp;
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <h2 class="title"><spring:message code="error.404.header"/></h2>
        <p>
            <spring:message code="error.404.description"/>
        </p>

        <form method="POST" id="retryForm" action="http://www.appliedbiosystems.ru">
            <p>http://www.appliedbiosystems.ru<input type="text" id="retryUrl" value="${path}" size="27"></p>
            <a class="button2" href="javascript: retryRequest();"><spring:message code="button.redirect"/></a>
        </form>
        <img src="/images/shim.gif" alt="" width="15" height="1" border="0">
    </div>
</div>
