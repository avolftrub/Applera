<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page buffer="256kb" %>
<tiles:importAttribute scope="request" />
<html>
    <head>
        <title>Applied Biosystems</title>
        <LINK rel="icon" type="image/x-icon" href="images/favicon.ico"/>
        <LINK rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
        <META http-equiv=Content-Type content="text/html; charset=UTF-8">
        <script type="text/javascript">
<!--
            var ua=navigator.userAgent;
            var linkString ='<link rel="stylesheet" type="text/css" href="css/appbio_';
            var extentionString ='.css"/>';
            if (ua.indexOf('IE') != -1) {
                document.write(linkString + 'ie' + extentionString)
            } else if (ua.indexOf('Mozilla') != -1) {
                document.write(linkString + 'mozilla' + extentionString);
            } else if (ua.indexOf("Opera") != -1) {
                document.write(linkString + 'mozilla' + linkString);
            } else {
                document.write(linkString + 'ie' + extentionString)
            }
// -->
        </script>

        <!--<link href="css/SpryTabbedPanels.css" rel="stylesheet" type="text/css" />-->
        <!--<script src="js/SpryTabbedPanels.js" type="text/javascript"></script>-->
        <link href="css/global_nav.css" rel="stylesheet" type="text/css" />

        <script src="js/SpryEffects.js" type="text/javascript"></script>
        <script src="js/scripts.js" type="text/javascript"></script>

        <script src="js/processSearch.js" type="text/javascript" language="javascript1.2"></script>
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/jquery.bgiframe.js" type="text/javascript"></script>
        <link href="css/addon.css" rel="stylesheet" type="text/css" />


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

        <!--<link rel="shortcut icon" href="/favicon.ico">-->
        <!--<link rel="icon" href="/favicon.ico">-->

        <script type="text/javascript">
            function setTabs() {
                var tabCount = 4;
                var tabWidth = (100/tabCount) + 1;

                for (i=1; i<tabCount+1;i++){
                    document.getElementById('tab'+i).style.zIndex=i;
                }
                changecss('.TabbedPanelsTab','width',tabWidth +'%');
            }
        </script>

    </head>
    <%--<body id="home" onload="setTabs();loadBanner();">--%>
    <body id="home">

<%--
    <table cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
                <tiles:insert attribute="header" flush="false"/>
                <c:if test="${not empty body}">
                    <div id="contentWrapperProdDef">
                        <tiles:insert name="${body}"/>
                    </div>
                </c:if>
            </td>
        </tr>
        <tr>
            <td>
                <div id="contentLeftColumn2">
                    <c:if test="${not empty footerInfo}">
                        <tiles:insert name="${footerInfo}" flush="false"/>
                    </c:if>
                    <tiles:insert attribute="footer" flush="false"/>
                </div>
            </td>
        </tr>
    </table>
--%>
    <tiles:insert attribute="header" flush="false"/>
    <%--<tiles:insert name="${body}"/>--%>
    <%--<tiles:insert attribute="footer" flush="false"/>--%>

<table cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            <c:if test="${not empty body}">
                <div id="contentWrapperProdDef">
                    <tiles:insert name="${body}"/>
                </div>
            </c:if>
        </td>
    </tr>
    <tr>
        <td>
            <div id="contentLeftColumn2" style="position: static;">
                <c:if test="${not empty footerInfo}">
                    <tiles:insert name="${footerInfo}" flush="false"/>
                </c:if>
                <tiles:insert attribute="footer" flush="false"/>
            </div>
        </td>
    </tr>
</table>




<%--
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



            <td align="left">
                <div id="contentRightColumnsWrapper">
--%>



<%-- todo implement navigation here
                    <c:if test="${not empty navigation.value}">
                    <tr>
                        <td valign="bottom" height="38"><tiles:insert name="${navigation}" flush="false"/>
                            <c:if test="${not empty leftPanel}"><hr size="1"></c:if>
                        </td>
                    </tr>
                    </c:if>
--%>


<%--
                    <tiles:insert name="${bodyHeader}" flush="false"/>
                    <tiles:insert name="${body}" flush="false"/>
                    <div id="noTabContentRight">
                        <div id="tabContentRightVerticalPad">&nbsp;</div>
                        <c:forEach var="item" items="${rightPanel}">
                            <tiles:insert name="${item}" flush="false"/>
                        </c:forEach>
                    </div>
                </div>
            </td>
        </tr>
    </table>
--%>

    </body>
</html>
