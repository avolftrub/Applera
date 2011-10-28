<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="contentLeftColumn">
    <div class="leftNavLinkList">&nbsp;&nbsp;&nbsp;</div>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <spring:hasBindErrors name="command">
            <ul>
                <c:forEach var="errMsgObj" items="${errors.allErrors}">
                   <li>
                      <spring:message code="${errMsgObj.code}" text="${errMsgObj.defaultMessage}"/>
                   </li>
                </c:forEach>
            </ul>
        </spring:hasBindErrors>

        <div class="formTable454Wrapper">
            <form action="forgetpassword.do" id="reminderForm" method="POST" onkeypress="if( (event.keyCode == 10) || (event.keyCode == 13) ) {document.getElementById('reminderForm').submit()};">
                <table class="formTable454" border="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th colspan="2"><spring:message code="password.reminder.title"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="highlighted">
                            <td class="reminderDescr"><spring:message code="password.reminder.descripion"/></td>
                            <td class="storeLoginCellright2"><input type="text" name="email" id="formManageShippingTableDept" class="formCellInputField" maxlength="60"/></td>
                        </tr>
                        <tr class="highlighted">
                            <td class="leftShort"></td>
                            <td class="storeLoginCellright2">
                                <span class="nestedFontSize">
                                    <a href="javascript:document.getElementById('reminderForm').submit();" class="buttonOrange floatRight"><spring:message code='password.reminder.submit'/></a>
                                    <div class="clear">&nbsp;</div>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
