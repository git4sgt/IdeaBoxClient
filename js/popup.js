// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
	$('body').css('overflow', 'hidden');
	document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
	$('body').css('overflow', 'auto');
	document.getElementById('abc').style.display = "none";
}

function div_show_login() {
	$('body').css('overflow', 'hidden');
	document.getElementById('loginId').style.display = "block";
}
//Function to Hide Popup
function div_hide_login(){
	$('body').css('overflow', 'auto');
	document.getElementById('loginId').style.display = "none";
}

	var active = 0;
	var answerArray = [];
	  
    jQuery(document).ready(function(){
		var n = jQuery('#slider .inner-sliders .slide').length; 
        jQuery('#slider .inner-sliders .slide').hide();
        showElement(1);
        jQuery("#next-btn").click(function(){
			var curr = active-1;
			//answerArray.push(jQuery('#question'+active).val());
			answerArray.splice(curr, 1, jQuery('#question'+active).val());
			
            if (active < n) showElement(active + 1);
			var progressBar = document.querySelector(".active .progress-line");
			var scrollPercentage = (100 / 7) * active;
			progressBar.style.width = scrollPercentage + "%";
        });
        jQuery("#previous-btn").click(function(){
			var curr = active-1;
			//answerArray.push(jQuery('#question'+active).val());
			answerArray.splice(curr, 1, jQuery('#question'+active).val());
            if (active > 1) showElement(active - 1);
			var progressBar = document.querySelector(".active .progress-line");
			var scrollPercentage = (100 / 7) * active;
			progressBar.style.width = scrollPercentage + "%";
			
        });
    });
    function showElement(id) {
        jQuery('#slider .inner-sliders .slide').hide();
		
       jQuery('#' + id).show(500);
        active = id;
    }
	
	
	
	
	
	