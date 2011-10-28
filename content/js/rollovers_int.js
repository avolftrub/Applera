function rollovers_swap(id){
	if (id != null) {	
		var image = document.images[id];
		if (image == null) 
			return;
		var newimage = this.images[id];
		if (newimage == null)
			return;
		this.temp_image = image;
		this.temp_src = image.src;		
		image.src = newimage.src;
	} else {
		if ((this.temp_image != null) && (this.temp_src != null))
			this.temp_image.src = this.temp_src;
		this.temp_image = null;
		this.temp_src = null;
	}
}
	
function rollovers(image_list){
	this.images = new Object();
	this.init = rollovers_init;
	this.swap = rollovers_swap;
	this.temp_image = null;
	this.temp_src = null;
	for (var i=0; i < image_list.length; i++) {
		var id = image_list[i][0];
		var src = image_list[i][1];
		var image = new Image();
		image.src = src;
		this.images[id] = image;
	}
}

function rollovers_init() {
	var _this = this;
	var swap_out = function() {
		_this.swap(null);
	}
	var set = function (id) {
		var image = document.images[id];
		if (image == null)
			return;
		image.onmouseover = function() {
			_this.swap(id);
		}
		image.onmouseout = swap_out;
	}	
	for (var id in this.images)
		set(id);
}

/* set up top nav rollovers */
rollovers = new rollovers([
	["navtab_home", "images/navtab_home_hover.gif"],
	["navtab_products_and_services", "images/navtab_products_and_services_hover.gif"],
	["navtab_support", "images/navtab_support_hover.gif"],
	["navtab_aboutus", "images/navtab_about_hover.gif"],
    ["navtab_admin", "images/navtab_admin_hover.gif"]
    ]);