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
            <form action="login.do" id="loginForm" method="POST" onkeypress="if( (event.keyCode == 10) || (event.keyCode == 13) ) {document.getElementById('loginForm').submit()};">
                <input type="hidden" name="originalURL" value="${originalURL}"/>
                <table class="formTable454" border="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th colspan="2"><spring:message code="login.title"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="highlighted">
                            <td class="leftShort"><spring:message code="login.email"/></td>
                            <td class="storeLoginCellright"><input type="text" name="email" id="formManageShippingTableDept" class="formCellInputField" maxlength="60"/></td>
                        </tr>
                        <tr class="highlighted">

                            <td class="leftShort"><spring:message code="login.password"/></td>
                            <td class="storeLoginCellright"><input type="password" name="password" id="formManageShippingTableBuildingRoomNumber" class="formCellInputField" maxlength="30"/></td>
                        </tr>
                        <tr class="highlighted">
                            <td class="leftShort"></td>
                            <td>
                                <table cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td class="forgetPasswordCell">
                                            <a href="forgetpassword.do"><spring:message code='login.forget'/></a>
                                        </td>
                                        <td class="storeLoginButtonCell">
                                            <span class="nestedFontSize">
                                                <a href="javascript:document.getElementById('loginForm').submit();" class="buttonOrange floatRight"><spring:message code='login.enter'/></a>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
