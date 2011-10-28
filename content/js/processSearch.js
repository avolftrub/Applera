	function processSearch(form_input,search_form) {

   		var query = document.getElementById(form_input);				     
   		query.value = trimBadChars(query.value);

   		if(query.value != "") {
			 // strip the query of any illegal terms or chars and replace with whitespace
			 /*
			 var verity_elements = [/<.*>/g, /\[.*\]/, /\band\b/gi, /\bor\b/gi, /\bnot\b/gi, /['"'\(\)\{\}]+/g];
			 var clean_query = query.value;

			 for(var i = 0; i < verity_elements.length; i++)
			 {
				clean_query = clean_query.replace(verity_elements[i], " ");
			 }
			 // normalize whitespace
			 query.value = clean_query.replace(/^(\s*)([\W\w]*)(\b\s*$)/, "$2").replace(/ +/g, " ");
	 		*/	
	  	search_form.submit();
   		}
   		else {
	  		alert("Please enter a search term");
   		}
	}

function trimBadChars(term)
{

	var newterm =  trimLeft(term);
	newterm =     trimRight(newterm);
	return newterm;
}

function trimLeft(term)
{
	var newterm = "";
	for (var i=0; i < term.length; i++)
	{
		var ch = term.charAt(i);
		if (ch != "[" && ch != "@" && ch != ",")
		{
			newterm = term.substring(i,term.length);
			break;
		}
	}
	return newterm;
}

function trimRight(term)
{
	var newterm = "";
	for (i=term.length-1; i >= 0; i--)
	{
		var ch = term.charAt(i);
		if (ch != "=" && ch != "<" && ch != ">" && ch != "\\" && ch != "["){
			newterm = term.substring(0,i+1);
			break;
		}
	}
	return newterm;
};

     