<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib prefix="joda" uri="http://www.joda.org/joda/time/tags" %>
<style type="text/css">@import url(js/calendar/calendar-blue.css);</style>
<script type="text/javascript" src="js/calendar/calendar.js"></script>
<script type="text/javascript" src="js/calendar/lang/calendar-en.js"></script>
<script type="text/javascript" src="js/calendar/calendar-setup.js"></script>
<div id="contentLeftColumn">
    &nbsp;
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <spring:hasBindErrors name="command">
            <p><spring:message code="errors.title"/></p>
            <ul>
                <c:forEach var="errMsgObj" items="${errors.allErrors}">
                   <li>
                      <spring:message code="${errMsgObj.code}" text="${errMsgObj.defaultMessage}"/>
                   </li>
                </c:forEach>
            </ul>
        </spring:hasBindErrors>
        <form id="eventEditForm" action="eventEdit.do" method="POST">

            <table cellspacing="5" class="eventFont">
                <tr>
                    <td><spring:message code="event.edit.name"/></td>
                    <td><input class="textField" name="eventName" type="text" value="<c:out value="${eventEntity.eventName}"/>"/></td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.agenda"/></td>
                    <td><input class="textField" name="agendaUrl" type="text" value="${eventEntity.agendaUrl}"/></td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.organizerEmail"/></td>
                    <td><input class="textField" name="organizerEmail" type="text" value="${eventEntity.organizerEmail}"/></td>
                </tr>

                <tr>
                    <td><spring:message code="event.edit.description"/></td>
                    <td><textarea class="discriptionField" name="description" rows="10" cols="30"><c:out value="${eventEntity.description}"/></textarea></td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.location"/></td>
                    <td><input class="textField" name="location" type="text" value="<c:out value="${eventEntity.location}"/>"/></td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.booth"/></td>
                    <td><input class="textField" name="booth" type="text" value="<c:out value="${eventEntity.booth}"/>"/></td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.startDate"/></td>
                    <td>                                                  
                        <input name="startDate" id="startDate" type="text" onkeypress="javascript: return false;" value="<joda:format value='${eventEntity.startDate}' pattern='d/M/yyyy'/>"/>&nbsp;
                        <img src="images/calendar.gif" id="trigger_start_date" style="cursor: pointer;" title="<spring:message code="event.date.select"/>"/>
                    </td>
                </tr>
                <tr>
                    <td><spring:message code="event.edit.endDate"/></td>
                    <td>
                        <input name="endDate" id="endDate" type="text" onkeypress="javascript: return false;" value="<joda:format value='${eventEntity.endDate}' pattern='d/M/yyyy'/>"/>&nbsp;
                        <img src="images/calendar.gif" id="trigger_end_date" style="cursor: pointer;" title="<spring:message code="event.date.select"/>"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <table class="eventFont">
                            <c:forEach var="workDay" items="${eventEntity.workDays}" varStatus="nextRow">
                                <tr>
                                    <td>
                                        <b><joda:format value='${workDay.date}' pattern='MMMM d'/>:</b>
                                    </td>
                                    <td>
                                        <b>&nbsp;From&nbsp;</b>
                                        <input type="hidden" name="workDays[${nextRow.index}].id" value="${workDay.id}"/>
                                        <input type="hidden" name="workDays[${nextRow.index}].date" value="<joda:format value='${workDay.date}' pattern='d/M/yyyy'/>"/>
                                        <input type="hidden" name="workDays[${nextRow.index}].eventId" value="${eventEntity.id}"/>
                                        <select name="workDays[${nextRow.index}].openTime">
                                            <c:forEach var="nextHour" items="${eventEntity.hoursOfWorking}">
                                                <c:choose>
                                                    <c:when test="${workDay.openTime == nextHour}">
                                                        <option selected="true"><joda:format value='${nextHour}' pattern='HH:mm'/></option>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <option ><joda:format value='${nextHour}' pattern='HH:mm'/></option>
                                                    </c:otherwise>
                                                </c:choose>
                                            </c:forEach>
                                        </select>
                                    </td>
                                    <td>
                                        <b>&nbsp;To&nbsp;</b>
                                        <select name="workDays[${nextRow.index}].closeTime">
                                            <c:forEach var="nextHour" items="${eventEntity.hoursOfWorking}">
                                                <c:choose>
                                                    <c:when test="${workDay.closeTime eq nextHour}">
                                                        <option selected="true"><joda:format value='${nextHour}' pattern='HH:mm'/></option>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <option ><joda:format value='${nextHour}' pattern='HH:mm'/></option>
                                                    </c:otherwise>
                                                </c:choose>
                                            </c:forEach>
                                        </select>

                                        <%--<input type="text" name="workDays[${nextRow.index}].openTime" value="<joda:format value='${workDay.openTime}' pattern='h:m a'/>"/>--%>
                                        <%--<input type="text" name="workDays[${nextRow.index}].closeTime" value="<joda:format value='${workDay.closeTime}' pattern='h:m a'/>"/>--%>

                                    </td>
                                </tr>
                            </c:forEach>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <input type="hidden" name="id" value="${eventEntity.id}"/>
                        <input type="hidden" name="newEntity" value="${eventEntity.newEntity}"/>

                        <input name="save" type="button" value='<spring:message code='button.save'/>' onclick="document.getElementById('eventEditForm').submit();"/>
                        <input name="cancel" type="button" onclick="javascript:document.location='events.do'" value='<spring:message code='button.cancel'/>'/>
                    </td>
                </tr>
            </table>
        </form>
        <script type="text/javascript">

            function startDateChanged(calendar) {
                // Beware that this function is called even if the end-user only
                // changed the month/year.  In order to determine if a date was
                // clicked you can use the dateClicked property of the calendar:
                if (document.getElementById("endDate").value != null && document.getElementById("endDate").value != '') {
                    if (calendar.dateClicked) {
                        var startDate = Date.parseDate(document.getElementById("startDate").value, "%d/%m/%Y");
                        var endDate = Date.parseDate(document.getElementById("endDate").value, "%d/%m/%Y");
                        var eventForm = document.getElementById("eventEditForm");
                        eventForm.action = "periodChanged.do";
                        eventForm.submit();
                    }
                }
            };


            function endDateChanged(calendar) {
                // Beware that this function is called even if the end-user only
                // changed the month/year.  In order to determine if a date was
                // clicked you can use the dateClicked property of the calendar:
                if (document.getElementById("startDate").value != null && document.getElementById("startDate").value != '') {
                    if (calendar.dateClicked) {
                        var startDate = Date.parseDate(document.getElementById("startDate").value, "%d/%m/%Y");
                        var endDate = Date.parseDate(document.getElementById("endDate").value, "%d/%m/%Y");
                        var eventForm = document.getElementById("eventEditForm");
                        eventForm.action = "periodChanged.do";
                        eventForm.submit();
                    }
                }
            };


            Calendar.setup(
                {
                    inputField : "startDate", // ID of the input field
                    ifFormat : "%d/%m/%Y", // the date format
                    button : "trigger_start_date", // ID of the button
                    weekNumbers : false,
                    firstDay: 1,
                    onUpdate : startDateChanged

                }
            );

            Calendar.setup(
                {
                    inputField : "endDate", // ID of the input field
                    ifFormat : "%d/%m/%Y", // the date format
                    button : "trigger_end_date", // ID of the button
                    weekNumbers : false,
                    firstDay: 1,
                    onUpdate : endDateChanged
                }
            );
            
        </script>
    </div>
</div>
