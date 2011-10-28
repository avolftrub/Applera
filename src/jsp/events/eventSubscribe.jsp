<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
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
        <c:choose>
            <c:when test="${eventEntity == null}">
                <h1>Event not found</h1>
            </c:when>
            <c:otherwise>
                <form action="eventRegister.do" method="POST">
                    <table cellspacing="5" class="eventSubscribe">
                        <tr>
                            <td><spring:message code="event.register.name"/></td>
                            <td><input name="name" type="text" value="" class="editFormAttributeValue"/></td>
                        </tr>
                        <tr>
                            <td><spring:message code="event.register.email"/></td>
                            <td class="editFormAttributeValue"><input name="email" type="text" value="" class="editFormAttributeValue"/></td>
                        </tr>
                        <tr>
                            <td><spring:message code="event.register.company"/></td>
                            <td class="editFormAttributeValue"><input name="company" type="text" value="" class="editFormAttributeValue"/></td>
                        </tr>
                        <tr>
                            <td><spring:message code="event.register.position"/></td>
                            <td class="editFormAttributeValue"><input name="position" type="text" value="" class="editFormAttributeValue"/></td>
                        </tr>
                        <tr>
                            <td><spring:message code="event.register.phoneNumber"/></td>
                            <td class="editFormAttributeValue"><input name="phoneNumber" type="text" value="" class="editFormAttributeValue"/></td>
                        </tr>
                        <tr>
                            <td><spring:message code="event.register.message"/></td>
                            <td class="editFormAttributeValue"><textarea name="text" cols="30" rows="5" class="editFormAttributeValue"></textarea></td>
                        </tr>

                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="hidden" name="organizerEmail" value="${eventEntity.organizerEmail}"/>
                                <input type="hidden" name="eventName" value="${eventEntity.eventName}"/>
                                <input type="hidden" name="id" value="${eventEntity.id}"/>
                                <input name="submit" type="submit" value='<spring:message code='button.send'/>'/>
                                <input name="cancel" type="button" onclick="javascript:document.location='events.do'" value='<spring:message code='button.cancel'/>'/>
                            </td>
                        </tr>
                    </table>
                </form>
            </c:otherwise>
        </c:choose>
    </div>
</div>
