<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="contentLeftColumn">
    <tiles:get name="${applicationsMenu}" flush="false"/>
</div>
<div id="contentRightColumnsWrapper">
    <div id="pageContentMiddle">
        <table cellspacing="0" cellpadding="0" width="589" border="0">
		    <tr>
                <td width="574">
				    <h2 class="title"><c:out value="${applicationPage.parentApplication.name}"/></h2>
                    <p class="descriptionText">
                        <c:out value="${applicationPage.parentApplication.description}"/>
                    </p>
                    <p>
                        <b><spring:message code="applications.header"/><c:out value="${applicationPage.parentApplication.name}"/>:</b>
                    </p>
                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
	                    <tr>
                            <td valign="top">
                                <c:forEach var="application" items="${applicationPage.firstListPart}">
                                    <p>
                                        <c:choose>
                                            <c:when test="${application.group}">
                                                <a href="application.do?id=${application.id}"><c:out value="${application.name}"/></a>
                                            </c:when>
                                            <c:otherwise>
                                                <a href="${application.pageLink}"><c:out value="${application.name}"/></a>
                                            </c:otherwise>
                                        </c:choose>
                                        <br><br>
                                    </p>
                                </c:forEach>
                        	</td>
                            <td>
                                <img src="images/shim.gif" alt="" width="21" height="1" border="0">
                            </td>
                            <td valign="top" id="which">
                                <c:forEach var="application" items="${applicationPage.secondListPart}">
                                    <p>
                                        <c:choose>
                                            <c:when test="${application.group}">
                                                <a href="application.do?id=${application.id}"><c:out value="${application.name}"/></a>
                                            </c:when>
                                            <c:otherwise>
                                                <a href="${application.pageLink}"><c:out value="${application.name}"/></a>
                                            </c:otherwise>
                                        </c:choose>
                                        <br><br>
                                    </p>
                                </c:forEach>
                        	</td>
	                    </tr>
                        <c:if test="${applicationPage.parentApplication.note ne null}">
                            <tr>
                                <td colspan="3">
                                    <c:out value="${applicationPage.parentApplication.note}" escapeXml="false"/>
                                     
                                </td>
                            </tr>
                        </c:if>
                        <tr>
                            <td align="left" colspan="3">
                                <br/>
                                <p><spring:message code="applications.recomended.browsers"/></p>
		                        <hr size="1" noshade="noshade" color="#666666" />
                                <p>
                                    <spring:message code="applications.note"/>
                                </p>&nbsp;<br/>
                            </td>
	                    </tr>
                    </table>
                </td>
                <td width="15">
                    <img src="images/shim.gif" alt="" width="15" height="1" border="0">
                </td>
	        </tr>
        </table>
    </div>
</div>
