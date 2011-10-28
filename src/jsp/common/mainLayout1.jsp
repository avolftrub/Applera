<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://jakarta.apache.org/struts/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page buffer="256kb" %>
<tiles:importAttribute scope="request" />
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head profile="http://gmpg.org/xfn/11">
        <title>Applied Biosystems Russia</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        
<script type="text/javascript" src="abshared-static/media/scripts/jquery-1.3.2.js"></script>
<script type="text/javascript">$.noConflict();</script>
<script type="text/javascript" src="abshared-static/media/scripts/combined/header-combined-countryselect.js"></script>
<script type="text/javascript" src="abshared-static/media/scripts/libraries.js"></script>
<script type="text/javascript" src="abshared-static/media/scripts/homepage.js"></script>
<script type="text/javascript">
      Cufon.replace('#search-again legend, h2:not(.nocufon), h3:not(.nocufon, .homepage h3), .homepage #solutions h4', { fontFamily: 'Arial' });
      Cufon.replace('#boilerplate h4, .homepage #news h5, .homepage .slide-info h3, .homepage #solution-info h3', { fontFamily: 'Arial' });
</script>
<link href="http://www.appliedbiosystems.com/abshared-static/media/images/icons/favicon.ico" rel="icon" />
<link href="http://www.appliedbiosystems.com/abshared-static/media/images/icons/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<!--style for feedback link in footer-->
<link rel="stylesheet" type="text/css" media="screen" href="abshared-static/media/feedback/css/k_button.css" />
<!--style for  header-->
<link rel="stylesheet" href="abshared-static/media/styles/header-combined.css" media="screen, projection" />
<!--style for  homepage-->
<link rel="stylesheet" href="abshared-static/media/styles/homepage-reset.css" media="screen, projection" />
<link rel="stylesheet" href="abshared-static/media/styles/homepage.css" media="screen, projection" />
<!--[if lte IE 7]><link rel="stylesheet" href="abshared-static/media/styles/ie-7-header-combined.css" media="screen, projection" /><![endif]-->
<!--[if lte IE 6]><link rel="stylesheet" href="abshared-static/media/styles/ie-6-header-combined.css" media="screen, projection" /><![endif]-->
<!--[if lte IE 8]><link rel="stylesheet" href="abshared-static/media/styles/ie-8-combined.css" media="screen, projection"><![endif]-->
<!--[if lte IE 7]><link rel="stylesheet" href="abshared-static/media/styles/ie-7-combined.css" media="screen, projection"><![endif]-->
<!--[if lte IE 6]><link rel="stylesheet" href="abshared-static/media/styles/ie-6-combined.css" media="screen, projection"><![endif]-->
<!--[if lte IE 6]>
		<script type="text/javascript" src="abshared-static/media/scripts/DD_belatedPNG_0.0.8a-min.js"></script>
		<script type="text/javascript">
			// Apply PNG fix to all elements with class "png"
			DD_belatedPNG.fix('.png');
		</script>
		<![endif]-->


<%--
        <script type="text/javascript" src="abshared-static/media/scripts/combined/header-combined-prototype.js"></script>
--%>

        <link href="css/global_nav.css" rel="stylesheet" type="text/css" />
        
        <script type="text/javascript">
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
        </script>

        <%--<script src="js/SpryEffects.js" type="text/javascript"></script>--%>
        <%--<script src="js/scripts.js?20100429" type="text/javascript"></script>--%>
        <link href="css/addon.css" rel="stylesheet" type="text/css" />

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
    <body id="home" class="page-600 homepage G-I">

        <div id="container">
            <tiles:insert attribute="header" flush="false"/>

            <%--<script type="text/javascript">--%>
<%--//                setTimeout("updateHeaderInfo()",500);--%>
<%--//            </script>--%>

            <c:if test="${not empty body}">
                <%--<div id="contentWrapperProdDef" style="display: inline;">--%>
                    <tiles:insert name="${body}"/>
                <%--</div>--%>
            </c:if>
            
            <tiles:insert attribute="footer" flush="false"/>
        </div>

        <div id="b2b-exit-modal" style="display:none">
            <a onclick="openB2BPopup(); return false;" id="exit-modal-yes" class="yes" href="#">Yes</a>
            <a id="exit-modal-no" class="no" href="#" onclick="b2bExitModalHide(); return false">No</a>
        </div>
        <!-- / #b2b-exit-modal -->
        <div id="b2b-exit-modal-underlay" style="display:none" onclick="b2bExitModalHide(); return false">
            &nbsp;
        </div>
        <div id="k_close_button" class="k_float kc_bottom kc_right"></div>
        <div><a href="https://www.kampyle.com/feedback_form/ff-feedback-form.php&page_id=0&amp;form_id=49918&lang=en"  target="kampyleWindow" id="kampylink" class="k_float k_bottom_sl k_right" onclick="javascript:k_button.open_ff('site_code=4361518&amp;form_id=49918&lang=en');return false;"><img src="abshared-static/media/feedback/images/en-blue-band-low-right.gif" alt="Website Feedback" border="0"/></a></div>
        <script src="abshared-static/media/feedback/js/k_button.js" type="text/javascript"></script>
    

    </body>
</html>
