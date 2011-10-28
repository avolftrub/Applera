<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="contentLeftColumn">
    <tiles:insert name="${adminMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <h2 class="title"><spring:message code="admin.users.title"/></h2>
        <form action="mng_users.do" method="post">
            <table class="productOverviewTable">
                <thead>
                    <tr>
                        <th class="productNameCol"><spring:message code="admin.users.name"/></th>
                        <th class="iconCol"></th>
                        <th class="productNameCol"><spring:message code="admin.users.email"/></th>
                        <th class="iconCol"></th>
                        <th class="productNameCol"><spring:message code="admin.users.role"/></th>
                        <th class="iconCol"></th>
                        <th class="productNameCol">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                <c:forEach var="user" items="${usersList}">
                    <tr>

                        <td class="productNameCol">
                            <a href="editUser.do?id=${user.id}" title="<spring:message code="admin.users.edit.hint"/>"><c:out value="${user.firstName}"/>&nbsp;<c:out value="${user.lastName}"/></a>
                        </td>
                        <td class="iconCol"></td>
                        <td class="productNameCol">
                            <c:out value="${user.email}"/>
                        </td>
                        <td class="iconCol"></td>
                        <td class="productNameCol">
                            <c:choose>
                                <c:when test="${user.roleId == 1}">
                                    <spring:message code="admin.users.role.admin"/>
                                </c:when>
                                <c:when test="${user.roleId == 2}">
                                    <spring:message code="admin.users.role.staff"/>
                                </c:when>
                            </c:choose>
                        </td>
                        <td class="iconCol"></td>
                        <td>
                            <a href="editUser.do?id=${user.id}"><img src="images/edit.gif" title="<spring:message code="admin.users.edit.hint"/>"/></a>&nbsp;
                            <a href="deleteUser.do?id=${user.id}&back=mng_users.do&type=user" onclick="return confirm('<spring:message code="admin.users.delete.confirm"/>');"><img src="images/trash.gif" title="<spring:message code="admin.users.delete.hint"/>"/></a>
                        </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </form>
        <table>
            <tr>
                <td>
                    <a href="editUser.do">
                        <img src="images/add_cross.gif" alt="Add"/>
                    </a>
                    <a href="editUser.do">
                        <spring:message code="admin.users.add"/>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</div>
