function calc(){
	var width=document.getElementById("width").value;
	var height=document.getElementById("height").value;
	if(width=="" || height==""){
		document.getElementById("message").innerHTML="*field missing";
		document.getElementById("answer").value=NaN;
	}
	else{
		var area= width*height;
		document.getElementById("answer").value=area;
		document.getElementById("message").innerHTML="";
	}

}