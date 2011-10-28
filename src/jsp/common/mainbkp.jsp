<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page buffer="256kb" %>
<tiles:importAttribute scope="request" />
<html>
    <head>
        <tiles:insert name="title" flush="false"/>

        <c:forEach items="${scripts}" var="script">
            <script language="JavaScript" src="<c:url value="${script}"/>"></script>
        </c:forEach>

        <c:if test="${not empty startupScripts}">
            <script language="JavaScript">
            <!--
            function startup() {
            <c:forEach items="${startupScripts}" var="startupScript">
                ${startupScript}
            </c:forEach>
            }
            // -->
            </script>
        </c:if>

    <%-- without surrounding HTML comments! --%>

            <c:forEach items="${dynamicScripts}" var="dynamicScript">
                <c:import url="${dynamicScript}"/>
            </c:forEach>

    </head>
    <body onload="rollovers.init();">
    <%--<body <c:if test="${not empty startupScripts}"> onLoad="startup()"</c:if> >--%>
    <tiles:insert attribute="header" flush="false"/>
    <table border="0" cellspacing="0" cellpadding="0">
        <tr>
            <c:if test="${not empty leftPanel}">
            <div id="contentLeftColumn">
            <td valign="top" align="left" width="155">
                <table border="0" cellspacing="0" cellpadding="0">
                    <c:forEach var="item" items="${leftPanel}">
                        <tr><td><tiles:insert name="${item}" flush="false"/></td></tr>
                    </c:forEach>
                </table>
              </td>
            </div>
            </c:if>

            <%-- Main table --%>


            <td align="left">
                <div id="contentRightColumnsWrapper">
                <table border="0" cellpadding="0" cellspacing="0">
<%-- todo implement navigation here
                    <c:if test="${not empty navigation.value}">
                    <tr>
                        <td valign="bottom" height="38"><tiles:insert name="${navigation}" flush="false"/>
                            <c:if test="${not empty leftPanel}"><hr size="1"></c:if>
                        </td>
                    </tr>
                    </c:if>
--%>
                    <tr>
                        <td>
                            <!--<div id="pageContentMiddle">-->
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td align="left">

                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <c:if test="${not empty bodyHeader}">
                                                <tr>
                                                    <td><tiles:insert name="${bodyHeader}" flush="false"/></td>
                                                </tr>
                                                </c:if>
                                                <tr>
                                                    <td align="left"><tiles:insert name="${body}" flush="false"/></td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="15">
                                            <img src="images/shim.gif" alt="" width="15" height="30" border="0">
                                        </td>
                                        <!-- right start -->
                                         <c:if test="${not empty rightPanel}">
                                        <td valign="top" align="right">
                                            <table border="0" cellspacing="0" cellpadding="0">
                                                <c:forEach var="item" items="${rightPanel}">
                                                    <tr><td height="12"><img src="images/shim.gif" alt="" width="12" height="12" border="0"></td></tr>
                                                    <tr><td><tiles:insert name="${item}" flush="false"/></td></tr>
                                                </c:forEach>
                                            </table>
                                          </td>
                                        </c:if>
                                        <!-- right stop ***((())) -->
                                    </tr>
                                </table>
                            <!--</div>-->
                        </td>
                    </tr>
                </table>
                </div>
            </td>
        </tr>
    </table>
    <tiles:insert attribute="footer" flush="false"/>
    </body>
</html>
