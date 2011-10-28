<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="contentLeftColumn">
    <tiles:insert name="${supportMenu}"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
    <table cellspacing="0" cellpadding="0" width="100%" border="0">
        <tr>
            <td>
                <img src="images/title_support.gif" alt="Support" border="0">
                <p>
                    <spring:message code="support.desc"/>
                </p>

                <p>

                    <a href="http://marketing.appliedbiosystems.com/mk/submit/GLOBAL_SERVICES_EU_ARD?_JS=T&rd=d"><spring:message code="support.global.services"/></a><br>
                    <spring:message code="support.global.services.desc"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/service/training/"><spring:message code="support.training"/></a><br>
                    <spring:message code="support.training.desc"/>
                </p>

                <p><a href="http://faqs.appliedbiosystems.com"><spring:message code="support.faq"/></a><br>
                    <spring:message code="support.faq.desc"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/support/apptech/"><spring:message code="support.tools.tutorials"/></a><br>
                    <spring:message code="support.tools.tutorials.desc"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/support/software/"><spring:message code="support.software.download"/></a><br>
                    <spring:message code="support.software.download.desc"/>
                </p>

                <p><a href="http://www3.appliedbiosystems.com/sup/gl/search.htm"><spring:message code="support.products.services.literature"/></a><br>
                    <spring:message code="support.products.services.literature.description"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/support/contact/"><spring:message code="support.contacts"/></a><br>
                    <spring:message code="Contact.Support.desc"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/support/servicecall.cfm"><spring:message code="support.care.center"/></a><br>
                    <spring:message code="support.care.center.desc"/>
                </p>

                <p><a href="http://www.appliedbiosystems.com/service/financing/"><spring:message code="support.item.financing"/></a><br>
                    <spring:message code="Financing.Solutions.Desc"/>
                </p>

<%--
                <p><a target="new window4" href="http://www.ambion.com/contact/techserv.html"><spring:message code="support.item.customer.technical.service"/></a><br>
                    <spring:message code="Ambion.customer.desc"/>
                </p>
--%>

                <p><a href="http://www.appliedbiosystems.com/support/software_community/"><spring:message code="support.community"/></a><br>
                    <spring:message code="support.community.desc"/>
                </p>

                <p><a href="http://abinformatics.custhelp.com/cgi-bin/abinformatics.cfg/php/enduser/home.php"><spring:message code="support.item.lims"/></a><br>
                    <spring:message code="LIMS.Support.desc"/>
                </p>
            </td>
			<td width="15"><img src="images/shim.gif" alt="" width="15" height="30" border="0"></td>
            <td rowspan="2" valign="top">
                <tiles:insert name="${supportRight}" flush="false"/>
            </td>
        </tr>
    </table>
    </div>
</div>
