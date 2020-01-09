function showFull(path){
	if(jQuery('#show-image')){
		jQuery('#show-image').remove()
	}
	var layer = '<div id="show-image" onclick="closeFull()"></div>';
	$('body').prepend(layer);
	var layer1 = '<div style="height: 10%;"></div>';
	$('#show-image').append(layer1);
	var image = '<img src="'+ path + '" />';
	$('#show-image').append(image);
}
function closeFull(){
	jQuery('#show-image').fadeOut(500);
	jQuery('#show-image').remove;
}
function loadText(dir, tar){
	$.get(dir + '/text.txt', function(data){
		if(data.length > 30){
			var txt = data.replace(/\n/g, '</p>\n<p>');
			jQuery(tar).html('<p>' + txt + '</p>');
		}
	}, 'html');
}

function loadImage(dir, tar, list, wid ){
	$.each(list, function(index, value) { 
		if(wid == null){
			var code = '';
		}else{
			var code = ' width="' + wid + 'px" onclick="showFull(\'' + dir + '/' + value + '.jpg\');"';
		}
		var path = dir + '/' + value + '.jpg';
		$({}).imageLoader({
			images: [path],
			async: true,
			complete: function(e, ui) {
				var i = ( ui.i + 1 );
				var img = $( '<img' + code + ' src="'+ ui.data[ ui.i ].src + '" />');
				$(tar).append(img);
			},
			error: function(e, ui) {
				return false;
			}
		});
 
	});
}