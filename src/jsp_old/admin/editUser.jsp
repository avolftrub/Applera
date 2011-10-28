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
        <form action="editUser.do" method="POST">
            <table cellspacing="5">
                <tr>
                    <td><spring:message code="admin.users.firstName"/></td>
                    <td><input name="firstName" type="text" value="${userEntity.firstName}" class="editFormAttributeValue"/></td>
                </tr>
                <tr>
                    <td><spring:message code="admin.users.lastName"/></td>
                    <td class="editFormAttributeValue"><input name="lastName" type="text" value="${userEntity.lastName}" class="editFormAttributeValue"/></td>
                </tr>
                <tr>
                    <td><spring:message code="admin.users.email"/></td>
                    <td class="editFormAttributeValue"><input name="email" type="text" value="${userEntity.email}" class="editFormAttributeValue"/></td>
                </tr>
                <tr>
                    <td><spring:message code="admin.users.group"/></td>
                    <td class="editFormAttributeValue">
                        <select name="roleId" class="editFormAttributeValue">
                            <c:choose>
                                <c:when test="${userEntity.roleId == 1}">
                                    <option value="1" selected="true"><spring:message code="admin.users.role.admin"/></option>
                                </c:when>
                                <c:otherwise>
                                    <option value="1"><spring:message code="admin.users.role.admin"/></option>
                                </c:otherwise>
                            </c:choose>
                            <c:choose>
                                <c:when test="${userEntity.roleId == 2}">
                                    <option value="2" selected="true"><spring:message code="admin.users.role.staff"/></option>
                                </c:when>
                                <c:otherwise>
                                    <option value="2"><spring:message code="admin.users.role.staff"/></option>
                                </c:otherwise>
                            </c:choose>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><spring:message code="admin.users.password"/></td>
                    <td class="editFormAttributeValue"><input name="password" type="password" value="${userEntity.password}" class="editFormAttributeValue"/></td>
                </tr>
                <tr>
                    <td><spring:message code="admin.users.confirm.password"/></td>
                    <td class="editFormAttributeValue"><input name="password1" type="password" value="${userEntity.password}" class="editFormAttributeValue"/></td>
                </tr>

                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="hidden" name="newEntity" value="${userEntity.newEntity}"/>
                        <input type="hidden" name="id" value="${userEntity.id}"/>
                        <input name="submit" type="submit" value='<spring:message code='button.save'/>'/>
                        <input name="cancel" type="button" onclick="javascript:document.location='mng_users.do'" value='<spring:message code='button.cancel'/>'/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</div>
