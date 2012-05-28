<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://appliedbiosystems.ru/tags" prefix="appbio" %>
<div id="footer">                                                         
    <div id="footer-wrapper">
        <div id="footer-help">
            <h4>Help</h4>
            <ul>
                <li><a target="_blank" href="https://products.appliedbiosystems.com/ab/en/US/help.jsp?id=FirstTimeVis&helpSet=AB_ANON">Web Ordering Help</a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support.html">Technical Support</a></li>
                <li><a href="http://appliedbiosystems.ru/contact.do"><spring:message code="footer.contactus"/></a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/site-map.html" target="_blank"><spring:message code="footer.sitemap"/></a></li>
            </ul>
        </div>
        <div id="shop">
            <h4>Shop</h4>
            <ul class="col-1">
                <li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABQuickOrder">Quick Order</a></li>
                <li><a href="https://products.appliedbiosystems.com/ab/en/US/partnerMkt/ab?cmd=ABUserRegBasicInfo">Register</a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/special-offers.html">Special Offers</a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/new-products.html">New Products</a></li>
            </ul>
            <ul class="col-2">
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/real-time-pcr.html">Real-Time PCR</a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/gene-expression-analysis.html">Gene Expression</a></li>
                <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604435">Custom Primers &amp; Probes</a></li>
                <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/solid-next-generation-sequencing.html">Next Generation Sequencing</a></li>
                <li><strong class="see-more png"><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab">See More</a></strong></li>
            </ul>
        </div>
        <!-- / #shop -->
        <div id="guides-and-tools">
            <h4>Guides &amp; Tools</h4>
            <ul>
                <li><a href="http://www5.appliedbiosystems.com/tools/citations/">Citation Library</a></li>
                <li><a href="http://www4.appliedbiosystems.com/techlib/trees/qpcr/">Real-Time PCR Decision Tree</a></li>
                <li><a href="http://www6.appliedbiosystems.com/support/techtools/tm_calculator.cfm">TM Calculator for PCR Primers</a></li>
                <li><a href="http://www5.appliedbiosystems.com/tools/sirna/">siRNA Workflow Builder</a></li>
                <li><strong class="see-more png"><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/tools.html">See More</a></strong></li>
            </ul>
        </div>
        <!-- / #guides-and-tools -->
        <div id="life-technologies">
            <h4>Life Technologies</h4>
            <ul>
                <li><a target="_blank" href="http://www.lifetechnologies.com/careers.html">Careers</a></li>
                <li><a target="_blank" href="http://ir.lifetechnologies.com/phoenix.zhtml?c=61498&p=irol-irhome">Investor Relations</a></li>
                <li><a target="_blank" href="http://ir.lifetechnologies.com/phoenix.zhtml?c=61498&p=irol-news&nyo=0">Press Releases</a></li>
                <li><a target="_blank" href="http://www.lifetechnologies.com/about-life-technologies/out-licensing-and-oem-sales.html">Licensing</a></li>
            </ul>
            <div id="follow-us">
                <h5>Follow Us:</h5>
                <ul>
                    <li><a target="_blank"  href="http://twitter.com/LIFECorporation"><img src="abshared-static/media/images/footer/icon-twitter.png" width="16" height="16" alt="Twitter" title="Twitter" /></a></li>
                    <li><a target="_blank" href="http://www.facebook.com/pages/Life-Technologies/100685839626?ref=ts"><img src="abshared-static/media/images/footer/icon-facebook.png" width="16" height="16" alt="Facebook" title="Facebook" /></a></li>
                    <li><a target="_blank"  href="http://ir.lifetechnologies.com/phoenix.zhtml?c=61498&p=rssSubscription&t=&id=&"><img src="abshared-static/media/images/footer/icon-rss.png" width="16" height="16" alt="RSS" title="RSS" /></a></li>
                </ul>
            </div>
            <!-- / #follow-us -->
            <form action="#" method="post">
                <fieldset>
                    <select id="more-sites" onchange="javascript:moreSites(this.value);">
                        <option value="">More Life Technologies Sites</option>
                        <option value="http://www.invitrogen.com">invitrogen.com</option>
                        <option value="http://www.lifetechnologies.com">lifetechnologies.com</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <!-- / #life-technologies -->
    </div>
    <!-- / #footer-wrapper -->
<div class="hr"><hr /></div>
<div id="legal-info">
    <ul>
        <li class="first"><a href="http://www.appliedbiosystems.com/absite/us/en/home/privacypolicy.html" target="_blank"><spring:message code="footer.policy"/></a></li>
        <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/terms-of-use.html" target="_blank"><spring:message code="footer.terms"/></a></li>
        <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/legal/terms-and-conditions.html">Terms &amp; Conditions</a></li>
        <li><a target="_blank" href="http://www6.appliedbiosystems.com/trademarks">Trademarks</a></li>
    </ul>
    <p><small>&copy; 2010 Life Technologies</small></p>
</div>
<!-- / #legal-info -->
<div id="site-feedback">
    <p>[+] <a href="http://www6.appliedbiosystems.com/about/contact/contact.cfm?areaid=7">Feedback</a></p>
</div>
</div>
<!-- / #footer -->
</div>
<div id="b2b-exit-modal" style="display:none">
<a onclick="openB2BPopup(); return false;" id="exit-modal-yes" class="yes" href="#">Yes</a>
<a id="exit-modal-no" class="no" href="#" onclick="b2bExitModalHide(); return false">No</a>
</div>
<!-- / #b2b-exit-modal -->
<div id="b2b-exit-modal-underlay" style="display:none" onclick="b2bExitModalHide(); return false">
&nbsp;
</div>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter14842063 = new Ya.Metrika({id:14842063, enableAll: true});
            } catch(e) {}
        });

        var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/14842063" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- / #b2b-exit-modal-underlay -->
