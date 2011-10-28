<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="contentLeftColumn">
    <tiles:insert name="${aboutMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <table cellspacing="0" cellpadding="0" width="589" border="0">
            <tr>
                <td width="574">
                    <img src="images/aboutus_title.gif" border="0" alt="About Us">
                    <spring:message code="about.description"/>
                </td>
                <td width="15"><img src="images/shim.gif" alt="" width="15" height="1" border="0"></td>
            </tr>
        </table>
    </div>
</div>
