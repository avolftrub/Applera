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
                    <p><img src="images/title_corp_structure.gif" border="0" alt="Corporate Structure"></p><br/>
                    <%--<div align="center"><img src="images/corp_structure.gif" border="0" alt="Diagram of Corporate Structure"><br><br></div>--%>
                    <p style="color: #666666; font-weight:bold;"><spring:message code="life.technologies.descr.header"/></p>
                    <spring:message code="about.corporate.structure.main"/>
                </td>
                <td width="15"><img src="images/shim.gif" alt="" width="15" height="1" border="0"></td>
            </tr>
        </table>
    </div>
</div>