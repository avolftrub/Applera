<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head profile="http://gmpg.org/xfn/11">
		<script type="text/javascript" src="abshared-static/media/scripts/combined/header-combined-prototype.js"></script>
		<!--[if lte IE 6]>
			<script type="text/javascript" src="abshared-static/media/scripts/DD_belatedPNG_0.0.8a-min.js"></script>
			<script type="text/javascript">
				DD_belatedPNG.fix('.png');
			</script>
		<![endif]-->
    <script type="text/javascript">
      Cufon.replace('#search-again legend, #boilerplate h2:not(.nocufon), #boilerplate h3:not(.nocufon), #boilerplate (.homepage h3)', { fontFamily: 'DIN Pro Light' });
      Cufon.replace('#boilerplate h4, .homepage #news h2, .homepage .slide-info h3, .homepage #solution-info h3', { fontFamily: 'DIN Pro Medium' });
    </script>
		<link rel="stylesheet" href="abshared-static/media/styles/header-combined.css" media="screen, projection" />
		<!--[if lte IE 7]><link rel="stylesheet" href="abshared-static/media/styles/ie-7-header-combined.css" media="screen, projection" /><![endif]-->
		<!--[if lte IE 6]><link rel="stylesheet" href="abshared-static/media/styles/ie-6-header-combined.css" media="screen, projection" /><![endif]-->
</head>
<body style="margin:0;">
<!--******* HEADER CODE START *******-->
<div id="container">
	<div id="headWrapper">
		<div id="header">
			<h2><a class="png" href="http://www.appliedbiosystems.com/absite/us/en/home.html">Applied Biosystems &trade; &ndash; by Life Technologies&trade;</a></h2>
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
		<ul id="my-account" style="display: none;">
          		<!-- anonymous list items -->
			<li class="user-message anonymous-header first nofy" style="display:none;"><a title="Log In or Register to see your product prices &amp; to place orders." id="loginLink" href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLogin">Store Log In</a></li>
			<li class="anonymous-header nofy" style="display:none;"><a title="Log In or Register to see your product prices &amp; to place orders." href="https://products.appliedbiosystems.com/ab/en/US/partnerMkt/ab?cmd=ABUserRegBasicInfo">Register</a></li>
         		 <!-- end anonymous list items -->
          		<!-- logged in list items -->
			<li class="user-message logged-in-header first nofy" style="display:none;"><strong class="welcomeMessage">Hello, Jane Smith</strong> <span class="hideB2B">[<a id="logoutLink" href="https://products.appliedbiosystems.com/ab/en/US/partnerMkt/ab?cmd=LogoutDisplay&dest=ABLogin">Log Out</a>]</span></li>
          		<!-- end logged in list items -->
          		<!-- expired login list items -->
			<li class="user-message expired-login-header first nofy" style="display:none;"><strong class="welcomeMessage">Hello, Jane Smith</strong></li>
			<li class="expired-login-header nofy" style="display:none;"><a title="Log In or Register to see your product prices &amp; to place orders." id="loginLink" href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABLogin">Store Log In</a></li>
         		 <!-- end expired login list items -->
			<li class="my-account">
				<span><a class="my-account-trigger" href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserProfile">My Account</a></span>
				<div class="my-account-top">
					<!--[if lte IE 6]>
					<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
					<![endif]-->
				</div>
				<ul>
					<!--[if lte IE 6]>
					<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
					<![endif]-->
					<li class="hideB2B"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABChangePassword">Change Password</a></li>
					<li class="hideB2B"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserRegContactInfo&Mode=Profile">Contact Information</a></li>
					<li class="hideB2B"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserRegAddresses&Mode=Profile">Shipping &amp; Billing Information</a></li>
					<li class="hideB2B"><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserPaymentOptions">Payment Options</a></li>
					<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABUserPreferences">Contact Preferences</a></li>
				</ul>
			</li>
			<li class="quick-order nofy"><a class="png" href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABQuickOrder">Quick Order</a></li>
			<li class="country nofy"><img id="countryImage" width="16" height="11" /> <span id="countryName">United States</span> <span id="changeCountry">[<a href="http://www.appliedbiosystems.com/absite/us/en/home.html" class="changeCountryModalLink" id="changeCountryModalLink">Change Country</a>]</span></li>
		</ul>
		<div id="global-nav" class="png">
			<ul id="primary-nav">
				<li id="nav-products">
					<a href="http://www.appliedbiosystems.com/absite/us/en/home/products.html">Products</a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<div class="drop-down-divider">
							<div class="column-1">
								<ul>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600522"><abbr title="Deoxyribonucleic Acid">DNA</abbr> Sequencing by Capillary Electrophoresis</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=603013"><abbr title="Deoxyribonucleic Acid">DNA</abbr>/<abbr title="Ribonucleic Acid">RNA</abbr> Detection, Labeling &amp; Synthesis</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600644"><abbr title="Deoxyribonucleic Acid">DNA</abbr>/<abbr title="Ribonucleic Acid">RNA</abbr> Purification</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=606820">Flow Cytometry</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607000">Food Testing &amp; Animal Health</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600674">Gene Expression</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600743">Genotyping</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600799">Human Identification &amp; Forensic <abbr title="Deoxyribonucleic Acid">DNA</abbr></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604409">Next-Generation Sequencing</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=600961"><acronym title="Polymerase Chain Reaction">PCR</acronym></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607002">Pharmaceutical Analytics</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607001">Protein Research</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=601246">Real-Time <acronym title="Polymerase Chain Reaction">PCR</acronym></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=604433">Services</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/adirect/ab?cmd=catNavigate2&catID=607003"><acronym title="Small Interfering RNA">siRNA</acronym>, miRNA &amp; Non-Coding <abbr title="RNA Interference">RNA</abbr></a></li>
								</ul>
							</div>
							<!-- / .column-1 -->
							<div class="column-2">
								<h5>What&rsquo;s New:</h5>
								<ul>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/new-products.html">New Products</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/products/special-offers.html">Special Offers</a></li>
								</ul>
								<h5>Assay Searches:</h5>
								<ul>
									<li><a href="http://www5.appliedbiosystems.com/tools/sirna/">Silencer&reg; <acronym title="Small Interfering RNA">siRNA</acronym></a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=catNavigate2&catID=601274">Custom TaqMan&reg; Array</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABGEKeywordSearch&catID=600689">TaqMan&reg; Gene Expression Assays</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABmiRNAKeywordSearch&catID=601803">TaqMan&reg; MicroRNA Assays</a></li>
									<li><a href="https://products.appliedbiosystems.com/ab/en/US/direct/ab?cmd=ABCNVKeywordSearch&catID=606182">TaqMan&reg; Copy Number Assays</a></li>
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
					<a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies.html">Applications &amp; Technologies</a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<div class="drop-down-divider">
							<div class="column-1">
								<h5>Applications:</h5>
								<ul>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/animal-health.html">Animal Health</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/biotherapeutics-vaccine-production.html">Biotherapeutics &amp; Vaccine Production</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/dna-sequencing.html"><abbr title="Deoxyribonucleic Acid">DNA</abbr> Sequencing</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/epigenetics.html">Epigenetics</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/food-pathogen-detection.html">Food Pathogen Detection</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/gene-expression-analysis.html">Gene Expression Analysis</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/genotyping-genetic-variation.html">Genotyping &amp; Genetic Variation</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/human-identification.html">Human Identification</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/influenza-a-h1n1-research.html">Influenza A (H1N1) Research</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/mirna-non-coding-rna-analysis.html"><abbr title="MicroRNA">miRNA</abbr> &amp; Non-Coding <abbr title="Ribonucleic Acid">RNA</abbr> Analysis</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/real-time-pcr/protein-expression.html">Protein Expression</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/stem-cell-research.html">Stem Cell Research</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/solid-next-generation-sequencing/whole-transcriptome-analysis.html">Whole Transcriptome Analysis</a></li>
								</ul>
							</div>
							<!-- / .column-1 -->
							<div class="column-2">
								<h5>Technologies:</h5>
								<ul>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/dna-sequencing-fragment-analysis.html"><abbr title="Deoxyribonucleic Acid">DNA</abbr> Sequencing &amp; Fragment Analysis by Capillary Electrophoresis</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/flow-cytometry.html">Flow Cytometry</a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/pcr.html"><acronym title="Polymerase Chain Reaction">PCR</acronym></a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/real-time-pcr.html">Real-Time <acronym title="Polymerase Chain Reaction">PCR</acronym></a></li>
									<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/applications-technologies/solid-next-generation-sequencing.html">The SOLiD&trade; System: Next-Generation Sequencing</a></li>
								</ul>
							</div>
							<!-- / .column-2 -->
						</div>
						<!-- / .drop-down-divider -->
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-services">
					<a href="http://www.appliedbiosystems.com/absite/us/en/home/services.html">Services</a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/instrument-services.html">Instrument Services</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/compliance-validation-services.html">Compliance &amp; Validation Services</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/it-software-services.html"><acronym title="Information Technology">IT</acronym> &amp; Software Services</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/custom-products.html">Custom Products</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/business-to-business.html">Business to Business</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/onsite-stocking-program.html"><acronym title="Applied Bio">AB</acronym> OnSite Stocking Program</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/services/financing.html">Financing Options</a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-support">
					<a href="http://www.appliedbiosystems.com/absite/us/en/home/support.html">Support</a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/contact-support.html">Contact Support</a></li>
						</ul>
						<h5>Documents:</h5>
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/documents.html">General Documents</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/msds.html"><acronym title="Material Safety Data Sheets">MSDS</acronym></a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/certificates-of-analysis.html">Certificates of Analysis</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/citations.html">Citations</a></li>
						</ul>
						<h5>Downloads:</h5>
						<ul>
						<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/software.html">Software Downloads</a></li>
						<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/software-community.html">Software Community Program</a></li>
						</ul>
						<h5>Technical Resources:</h5>
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/faqs.html"><acronym title="Frequently Asked Questions">FAQ</acronym>s</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/tools.html">Tools</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support/tutorials.html">Tutorials &amp; Troubleshooting</a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
				<li id="nav-learning-and-events">
					<a href="javascript:void(0);">Learning &amp; Events</a>
					<div class="drop-down">
						<!--[if lte IE 6]>
						<iframe frameborder="0" tabindex="-1" src="javascript:false;" style="display:block; position:absolute; z-index:-1; filter:Alpha(Opacity='0'); top:0; left:4px; width:expression((this.parentNode.offsetWidth - 8) + 'px'); height:expression((this.parentNode.offsetHeight - 5) + 'px');"></iframe>
						<![endif]-->
						<ul>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/learning/training.html">Training</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/learning/events.html">Events</a></li>
							<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/learning/webinars.html">Webinars</a></li>
						</ul>
					</div>
					<!-- / .drop-down -->
				</li>
			</ul>
			<!-- / #primary-nav -->
			<ul id="secondary-nav">
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
	<!-- / #headWrapper -->
	<script type="text/javascript">
	setTimeout("updateHeaderInfo()",500);
	</script>
<!--******* HEADER CODE END *******-->
<div>ADD YOUR CONTENT  HERE</div>
<!--******* FOOTER CODE START *******-->
	<div id="footer">
		<div id="footer-wrapper">
			<div id="footer-help">
				<h4>Help</h4>
				<ul>
					<li><a target="_blank" href="https://products.appliedbiosystems.com/ab/en/US/help.jsp?id=FirstTimeVis&helpSet=AB_ANON">Web Ordering Help</a></li>
					<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/support.html">Technical Support</a></li>
					<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/contact-us.html">Contact Us</a></li>
					<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/site-map.html">Site Map</a></li>
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
			<li class="first"><a href="http://www.appliedbiosystems.com/absite/us/en/home/privacypolicy.html">Privacy Policy</a></li>
			<li><a href="http://www.appliedbiosystems.com/absite/us/en/home/terms-of-use.html">Terms of Use</a></li>
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
<!-- / #b2b-exit-modal-underlay -->
<!--******* FOOTER CODE END *******-->
</body>
</html>