<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<div id="contentLeftColumn">
    <tiles:insert name="${aboutMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
			<table cellspacing="0" cellpadding="0" width="589" border="0">
				<tr>
					<td><img src="images/shim.gif" alt="" width="1" height="30" border="0"></td>
					<td width="15"><img src="images/shim.gif" alt="" width="15" height="30" border="0"></td>
					<td rowspan="2" valign="top">
    				</td>
        		</tr>
				<tr>
					<td width="574">
                        <table border="0" cellpadding="1" cellspacing="1" class="eventFont">
                            <c:forEach var="event" items="${events}">
                                <tr valign="top">
                                    <td colspan="2">
                                        <div align="left">
                                            <img src="images/divider_wide.gif" height="2" border="0" alt="" vspace="6">
                                        </div>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <td height="13" colspan="2">
                                        <b><c:out value="${event.formattedStartDate}"/></b>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr valign="bottom">
                                    <td valign="bottom" colspan="2">
                                        <b><c:out value="${event.formattedPeriod}"/></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" valign="bottom">
                                        <b class="labelLink"><c:out value="${event.eventName}"/></b>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <c:set var="escapedDescription" value="${fn:escapeXml(event.formattedDescription)}"/>
                                        <c:out value="${fn:replace(escapedDescription, '&lt;br&gt;', '<br>')}" escapeXml="false"/>
                                    </td>
                                    <td bgcolor="#CCCCCC" valign="top">
                                        <p>
                                            <b><spring:message code="events.location"/></b><br>
                                            <c:out value="${event.location}"/>
                                        </p>
                                        <p>
                                            <b><spring:message code="events.booth"/><br></b>
                                            <c:out value="${event.booth}"/>
                                        </p>
                                    </td>
                                </tr>
                                <tr valign="top">
                                    <td>
                                        <p>
                                            <b>&nbsp;</b>
                                        </p>
                                        <p>
                                            <img src="images/bluearrow_event.gif">&nbsp;
                                            <a href="eventRegister.do?id=${event.id}" title="<spring:message code="events.register"/>"><b><spring:message code="events.register"/></b></a><br>
                                        </p>
                                        <c:if test="${event.agendaUrl != null}">
                                            <p>
                                                <img src="images/bluearrow_event.gif">&nbsp;
                                                <a href="http://appliedbiosystems.ru/documents/<c:out value="${event.agendaUrl}"/>"><b><spring:message code="events.view.agenda"/></b></a><br>
                                            </p>
                                        </c:if>
                                        <appbio:userInRole role="ADMIN, STAFF">
                                            <p>
                                                <a href="eventEdit.do?id=${event.id}">
                                                    <img src="images/edit.gif" title="<spring:message code="button.edit"/>"/>&nbsp;<spring:message code="button.edit"/>
                                                </a>
                                            </p>

                                            <p>
                                                <a href="eventDelete.do?id=${event.id}&back=events.do&type=event" onclick="return confirm('<spring:message code="event.delete.confirmation"/>');">
                                                    <img src="images/trash.gif" title="<spring:message code="button.delete"/>"/>&nbsp;<spring:message code="button.delete"/>
                                                </a>
                                            </p>
                                            
                                        </appbio:userInRole>
                                    </td>
                                    <td nowrap>
                                        <p>
                                            <b><spring:message code="events.hours"/></b>
                                            <c:forEach var="nextDay" items="${event.workedHours}">
                                                <br><c:out value="${nextDay}"/>
                                            </c:forEach>
                                        </p>
                                    </td>
                                </tr>
                            </c:forEach>
                            <appbio:userInRole role="ADMIN, STAFF">
                                <tr valign="top">
                                    <td colspan="2">
                                        <div align="left">
                                            <img src="images/divider_wide.gif" height="2" border="0" alt="" vspace="6">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="eventFont">
                                            <tr>
                                                <td>
                                                    <a href="eventEdit.do">
                                                        <img src="images/add_cross.gif" alt="Add"/>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="eventEdit.do">
                                                        <spring:message code="events.add"/>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </appbio:userInRole>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
