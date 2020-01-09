function showFull(path){
	if($('#show-image')){
		$('#show-image').remove()
	}
	var layer = '<div id="show-image" onclick="closeFull()"></div>';
	$('body').prepend(layer);
	var layer1 = '<div style="height: 10%;"></div>';
	$('#show-image').append(layer1);
	var image = '<img src="'+ path + '" />';
	$('#show-image').append(image);
	$(document).scroll(closeFull);
}
function closeFull(){
	$('#show-image').fadeOut(150);
	$('#show-image').remove;
	$(document).unbind('scroll', closeFull); 
}
