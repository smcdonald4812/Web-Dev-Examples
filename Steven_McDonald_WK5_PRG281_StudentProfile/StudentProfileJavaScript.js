$(document).ready(function() {
	$('#showHide1').removeClass('showHide');
	$('#b1').on('click', function() {	
		$('div').addClass('showHide');
		$('#showHide1').removeClass('showHide');
    });
	$('#b2').on('click', function() {	
		$('div').addClass('showHide');
		$('#showHide2').removeClass('showHide');
    });
	$('#b3').on('click', function() {	
		$('div').addClass('showHide');
		$('#showHide3').removeClass('showHide');
    });
	$('#b4').on('click', function() {	
		$('div').addClass('showHide');
		$('#showHide4').removeClass('showHide');
	});
});
	