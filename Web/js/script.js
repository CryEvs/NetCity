$(document).ready(function(){
	$('select').each(function(){
		$(this).siblings('p').text( $(this).children('option:selected').text() );
	});
	$('select').change(function(){
		$(this).siblings('p').text( $(this).children('option:selected').text() );
	});	
});