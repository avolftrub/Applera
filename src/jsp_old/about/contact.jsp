<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="contentLeftColumn">
    <tiles:insert name="${aboutMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <table cellspacing="0" cellpadding="0" width="100%" class="eventFont">
            <tr>
                <td valign="top">
                    <img src="images/title_contact_us.gif" alt="Contact Us">
                    <table border="0" cellspacing="1" cellpadding="1" class="eventFont">
                        <tr>
						    <td><span class="subhead"><spring:message code="about.us.moscow"/></span><br><spring:message code="about.us.moscow.description"/></td>
						</tr>
                        <tr>
                            <td height="15" valign="top">
                                <br><br>
                                <img src="images/mailicon.gif" width="23" height="15" border="0" alt="E-mail">
                                <b><spring:message code="about.us.address"/></b>
                                <p>
                                    <spring:message code="about.us.moscow.address"/>
                                </p>
                                <p>
                                    <spring:message code="about.us.moscow.email"/>
                                </p>
                            </td>
						</tr>
                    </table>
                </td>
                <!--<td width="15"><img src="images/shim.gif" alt="" width="15" height="500" border="0"></td>-->
                <!--<td width="15"><img src="images/shim.gif" alt="" width="15" height="1" border="0"></td>-->
            </tr>
            <tr>
                <td>
                    <br><br>
                    <p><b><spring:message code="about.us.dilers.russia"/></b></p>
                    <spring:message code="about.us.dilers.russia.list"/>
                </td>
            </tr>
            <tr>
                <td>
                    <br><br>
                    <p><b><spring:message code="about.us.dilers.cis"/></b></p>
                    <spring:message code="about.us.dilers.cis.list"/>
                </td>
            </tr>
        </table>
    </div>
</div>
