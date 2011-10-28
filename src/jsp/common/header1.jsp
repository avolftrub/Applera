<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="appbio" uri="http://appliedbiosystems.ru/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!--******* HEADER CODE START *******-->
	<div id="headWrapper">
		<div id="header">
			<h2><a class="png" href="http://www.appliedbiosystems.ru">Applied Biosystems &trade; &ndash; by Life Technologies&trade;</a></h2>
		</div>
		<!-- / #header -->
		<form id="global-search" action="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGenSearch" method="post">
			<fieldset class="png">
				<div id="global-search-category-wrapper">
					<div id="global-search-category">
						<a id="global-search-trigger" class="png" href="#">All Categories</a>
						<div id="global-search-drop-down" class="drop-down">
<!--
Values for the hidden input, hidden label, and defaultValue for the search box are taken from the <li> the user selects
Defaults to "All Categories"
-->
							<!--[if lte IE 6]>
							<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:1px; width:expression((this.parentNode.offsetWidth - 2) + 'px'); height:expression((this.parentNode.offsetHeight - 2) + 'px');"></iframe>
							<![endif]-->
							<ul id="categoryList">
								<li class="selected"><a href="#">All Categories</a></li>
								<li><a href="#">Product Catalog</a></li>
								<li><a href="#">Part Numbers</a></li>
								<li><a href="#">Gene Specific Assays</a></li>
								<li><a href="#">Documents</a></li>
								<li><a href="#">Applications &amp; Technologies</a></li>
								<li><a href="#">FAQs</a></li>
								<li><a href="#">Support</a></li>
							</ul>
						</div>
						<!-- / .drop-down -->
					</div>
					<!-- / #global-search-category -->
				</div>
				<!-- / #global-search-category-wrapper -->
<!--
This hidden input is modified by Javascript based on user selection in global-search-category
The value is changed to match the text of the item they chose
-->
				<input type="hidden" id="search-scope" name="SearchRequest.Parametric.TreeView.Node.AB" value="All Categories" />
				<label>
<!--
This hidden input is modified by Javascript based on user selection in global-search-category
The value is changed to match the text of the item they chose
-->
					<span id="search-accessible" class="hidden">All Categories Search</span>
					<input class="text png" type="text" id="search" name="SearchRequest.Common.QueryText" value="Enter Search Term" />
				</label>
				<button type="submit" class="png">Search</button>
			</fieldset>
		</form>
		<ul id="my-account">
            <appbio:userLoggedIn>
                <li>
                    <a href="mng_users.do"><spring:message code="administration.menu.title"/></a>&nbsp;|&nbsp;<a href="logout.do"><spring:message code="logout.link"/></a>
                <li>
            </appbio:userLoggedIn>
            <li class="country nofy">
                <img id="countryImage" width="16" height="11" src="http://www.appliedbiosystems.com/abshared-static/media/images/icons/flags/ru.gif" alt="Russia" title="Russia"/> <span id="countryName">Russia/CIS</span> <span>[<a href="http://www.appliedbiosystems.com/absite/us/en/home.html?showCountrySelect=true"><spring:message code="link.change"/></a>]</span>
            </li>
		</ul>
		<div id="global-nav" class="png">
			<ul id="primary-nav">
				<li id="nav-products">
					<a href="http://appliedbiosystems.ru/products.do?catalogNumber=0"><spring:message code="menu.hint.catalog"/></a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<div class="drop-down-divider">
							<div class="column-1">
								<ul>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600522"><spring:message code="header.menu.sequince.dnk"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=603013"><spring:message code="header.menu.modification.rnk"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600644"><spring:message code="header.menu.cleaning.rnk"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=606820">Проточная цитометрия</a></li>
                                    <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607000"><spring:message code="header.menu.animal.health"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600674">Экспрессия генов</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600743">Генотипирование</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600799">Идентификация личности и криминалистика</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607501">Лазерная захватывающая микродиссекция</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604409">Секвенирование следующего поколения</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600961"><spring:message code="header.menu.prc"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607002">Очистка и анализ фармацевтических препаратов</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607001">Изучение белков</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=601246"><spring:message code="header.menu.realtime.prc"/></a></li>
                                    <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=608161">Секвенирование с применением технологии полупроводников</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604433">Сервис</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607003">киРНК, миРНК и некодирующие РНК</a></li>
								</ul>
							</div>
							<!-- / .column-1 -->
							<div class="column-2">
								<h5><spring:message code="header.menu.whats.new"/>:</h5>
								<ul>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/new-products.html" title=""><spring:message code="header.menu.new.products"/></a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/special-offers.html" title=""><spring:message code="header.menu.special.offers"/></a></li>
								</ul>
								<h5><spring:message code="header.menu.tag.production"/>:</h5>
								<ul>
									<li><a href="http://www5.appliedbiosystems.com/tools/sirna/"><spring:message code="header.menu.tag.production.siRNAs"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=catNavigate2&catID=601274">Custom TaqMan&reg; Array</a></li>


                                    <li><a href="http://bioinfo.appliedbiosystems.com/genomic-products/gene-expression.html">TaqMan&reg; Gene Expression Assays</a></li>
                                    <%--<c:choose>--%>
                                        <%--<c:when test="${param['testUrl'] == 'true'}">--%>
                                            <%--<li><a href="http://bioinfo.appliedbiosystems.com/genomic-products/gene-expression.html">TaqMan&reg; Gene Expression Assays</a></li>--%>
                                        <%--</c:when>--%>
                                        <%--<c:otherwise>--%>
                                            <%--<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABGEKeywordSearch&catID=600689">TaqMan&reg; Gene Expression Assays</a></li>--%>
                                        <%--</c:otherwise>--%>
                                    <%--</c:choose>--%>
                                    <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=601803"><spring:message code="header.menu.micro.rnk"/></a></li>
                                    <li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=ABCNVKeywordSearch&catID=606182" target="_blank"><spring:message code="header.menu.tag.production.copy.number.assays"/></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABGTKeywordSearch&catID=600769">TaqMan&reg; <acronym title="Single-Nucleotide Polymorphism">SNP</acronym> Genotyping Assays</a></li>
								</ul>
							</div>
							<!-- / .column-2 -->
					     </div>
					     <!-- / .drop-down-divider -->
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-applications-and-technologies">
					<a href="http://www.appliedbiosystems.ru/apptech.do"><spring:message code="header.menu.applications.technologies"/></a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<div class="drop-down-divider">
							<div class="column-1">
								<h5><spring:message code="header.menu.applications"/>:</h5>
								<ul>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/animal-health.html" target="_blank">Ветеринария </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/biotherapeutics-vaccine-production.html" target="_blank">Биотерапевтическая продукция и Вакцина</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/dna-sequencing.html" target="_blank"><abbr title="Deoxyribonucleic Acid">ДНК секвенирование </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/epigenetics.html" target="_blank">Эпигенетика </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/food-pathogen-detection.html" target="_blank">Детекция пищевых патогенов </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/gene-expression-analysis.html" target="_blank">Анализ экспрессии генов </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/genotyping-genetic-variation.html" target="_blank">Генотипирование и генетическая изменчивость</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/human-identification.html" title="" target="_blank"><spring:message code="header.menu.applications.human.identification"/></a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/influenza-a-h1n1-research.html" target="_blank">Анализ Гриппа A (H1N1)</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/mirna-non-coding-rna-analysis.html" target="_blank">Анализ миРНК и некодирующих РНК</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/real-time-pcr/protein-expression.html" target="_blank">Анализ экспрессии белков </a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/stem-cell-research.html" target="_blank">Исследования стволовых клеток</a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/waterborne-pathogen-detection.html" target="_blank">Детекция патогенов в водной среде</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/solid-next-generation-sequencing/whole-transcriptome-analysis.html" target="_blank">Анализ полного транскриптома</a></li>
								</ul>
							</div>
							<!-- / .column-1 -->
							<div class="column-2">
								<h5><spring:message code="header.menu.technologies"/>:</h5>
								<ul>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/dna-sequencing-fragment-analysis.html" title="" target="_blank"><spring:message code="header.menu.technologies.dna.sequencing"/></a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/flow-cytometry.html" title="" target="_blank">Проточная цитометрия</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/flow-cytometry.html" title="" target="_blank">Лазерная захватывающая микродиссекция</a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/pcr.html" title="" target="_blank"><spring:message code="header.menu.technologies.pcr"/></a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/real-time-pcr.html" title="" target="_blank"><spring:message code="header.menu.technologies.realtime.pcr"/></a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/semiconductor-sequencing.html" title="" target="_blank">Секвенирование с применением технологии полупроводников</a></li>
                                    <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/solid-next-generation-sequencing.html" title="" target="_blank"><spring:message code="header.menu.technologies.dna.legitation"/></a></li>
								</ul>
							</div>
							<!-- / .column-2 -->
						</div>
						<!-- / .drop-down-divider -->
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-services">
					<a href="http://www.appliedbiosystems.ru/products.do?catalogNumber=23233"><spring:message code="header.menu.services"/></a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/instrument-services.html"><spring:message code="header.menu.services.instrumental"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/compliance-validation-services.html"><spring:message code="header.menu.services.validation"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/it-software-services.html"><spring:message code="header.menu.services.it"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/custom-products.html"><spring:message code="header.menu.services.custom"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/business-to-business.html">Business to Business</a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/onsite-stocking-program.html">AB OnSite Stocking Program</a></li>
                            <li class="lastRow"><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/financing.html">Financing Options</a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-support">
					<a href="http://www.appliedbiosystems.ru/support.do"><spring:message code="menu.hint.support"/></a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
							<li><a href="http://www.appliedbiosystems.ru/support.do"><spring:message code="header.menu.support"/></a></li>
						</ul>
						<h5>Documents:</h5>
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/documents.html" target="_blank"><spring:message code="header.menu.support.literature"/></a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/msds.html" target="_blank"><spring:message code="header.menu.support.msds"/></a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/certificates-of-analysis.html" target="_blank"><spring:message code="header.menu.support.certificates"/></a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/citations.html" target="_blank"><spring:message code="header.menu.support.citation"/></a></li>
						</ul>
						<h5>Downloads:</h5>
						<ul>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/software.html" target="_blank"><spring:message code="header.menu.support.software.download"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/software-community.html" target="_blank"><spring:message code="header.menu.support.software.community"/></a></li>
						</ul>
						<h5>Technical Resources:</h5>
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/faqs.html" target="_blank"><spring:message code="header.menu.support.faq"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/tools.html" target="_blank">Tools</a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/tutorials.html" target="_blank"><spring:message code="header.menu.support.presentations"/></a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-learning-and-events">
					<a href="javascript:void(0);"><spring:message code="header.menu.training"/></a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/learning/training.html" target="_blank"><spring:message code="header.menu.training.users"/></a></li>
                            <li><a href="http://www.appliedbiosystems.ru/events.do" title=""><spring:message code="header.menu.training.events"/></a></li>
                            <li><a href="http://www.appliedbiosystems.com/absite/us/en/home/learning/webinars.html" title="" target="_blank"><spring:message code="header.menu.training.presentations"/></a></li>
						</ul>

					</div>
					<!-- / .drop-down -->
				</li>
			</ul>
			<!-- / #primary-nav -->
			<ul id="secondary-nav" style="display: none;">
				<li id="my-baskets-orders">
					<a class="icon" href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=OILDisplay"><span>My Baskets/Orders</span></a>
					<div class="drop-down-top">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
					</div>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=OILDisplay">View My Basket</a></li>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABManageActiveBaskets">Manage Shopping Baskets</a></li>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABMyOrders">Order History/Reorder</a></li>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABManageFavorites&_Tab=ActiveFavorites">Favorites</a></li>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABQuotesPromotionsWorkspaceDisplay&_Tab=QuotesPromotionsTab">Promotions/Quotes</a></li>
							<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLaunchWorkspaceDisplay">Workspace</a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
			</ul>
			<!-- / #secondary-nav -->
		</div>
		<!-- / #global-nav -->
	</div>
