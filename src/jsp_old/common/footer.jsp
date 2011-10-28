<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<div style="position:relative; ">
<div id="footer">
    <ul id="footerNav" class="footerText">
        <li class="first"><a href="http://www.appliedbiosystems.ru/about.do"><spring:message code="footer.company.info"/></a></li>
        <li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=61498&p=irol-irhome" target="_blank"><spring:message code="footer.investors"/></a></li>
        <li><a href="http://www.appliedbiosystems.com/about/newsroom/" target="_blank"><spring:message code="footer.media"/></a></li>
        <li><a href="http://appliedbiosystemscareers.com/europe/index.php" target="_blank"><spring:message code="footer.careers"/></a></li>
        <li><a href="http://www.appliedbiosystems.com/webfeedback" target="_blank"><spring:message code="footer.feedback"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/siteMap.cfm" target="_blank"><spring:message code="footer.sitemap"/></a></li>
        <li><a href="http://appliedbiosystems.ru/contact.do"><spring:message code="footer.contactus"/></a></li>
<%--
        <appbio:userInRole role="GUEST">
            <li><a href="login.do?originalURL=${pageUri}?${pageContext.request.queryString}"><spring:message code="login.link"/></a></li>
        </appbio:userInRole>
--%>
    </ul>
    <div id="copyright" class="footerText">
        <spring:message code="footer.copyright"/>
    </div>
    <ul id="utility" class="footerText">
        <li class="first"><a href="https://www2.appliedbiosystems.com/privacypolicy.cfm" target="_blank"><spring:message code="footer.policy"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/termsofuse.cfm" target="_blank"><spring:message code="footer.terms"/></a></li>
        <li><a href="https://www2.appliedbiosystems.com/legal/" target="_blank"><spring:message code="footer.license"/></a></li>
    </ul>
</div>
</div>