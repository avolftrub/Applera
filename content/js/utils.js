/* (c) 2000 RichInStyle.com (www.richinstyle.com */
function loadCss() {
    var ua=navigator.userAgent;
    var linkString ='<link rel="stylesheet" type="text/css" href="<c:url value="css/appbio_'.css"/>"';
    var extentionString ='.css"/>';
    if (ua.indexOf('IE') != -1) {
        document.write(linkString + 'ie' + extentionString)
    } else if (ua.indexOf('MOZILLA') != -1) {
        document.write(linkString + 'mozilla' + extentionString);
    } else if (ua.indexOf("Opera") != -1) {
        document.write(linkString + 'mozilla' + linkString);
    } else {
        document.write(linkString + 'ie' + extentionString)
    }
}

