//Google Analytic
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58677317-1', 'auto');
ga('send', 'pageview');

var timer;
$(document).on('pagecreate', '#intro',  function(event){
    intro();
}).on('pagecreate', '#production', function(event){
	var n = $('.production-slide').length;
    $('.production-slide').css({'position':'absolute', 'height':300, 'opacity':0, 'font-size':'0'}).appendTo( $( "#production-slideshow" ) );
    $('#production-slide1').css({'z-index':'1', 'opacity':1});
    $( "#production-slideshow" ).css('opacity', 1)
    $('#production1').css('display', 'block');
    $('#production-slideshow-play').show().click(function () {
        productionSlide(1, n);
        $('#production-slideshow-play').hide();
    })
  	$('#production-slideshow-next').click(function () {
  	    $('#production-slideshow').stop(true, true);
  	    productionSlide(2, n);
    });
});

$('#intro').live('pagehide',function(){ $(this).remove(); });

function intro(){
	setTimeout(function() {
        //jQuery("#intro-title").delay(1000).fadeOut(2000);
		jQuery("#intro-tie1").delay(300).fadeIn(1900).animate({
			'margin-left': '150px'
		}, {queue: false, duration: 1900});
		jQuery("#intro-tie2").delay(300).fadeIn(1900).animate({
			'margin-left': '50px'
		}, {queue: false, duration: 1900});
		jQuery("#intro-tie3").delay(300).fadeIn(1900).animate({
			'margin-left': '-50px'
		}, {queue: false, duration: 1900});
		jQuery("#intro-tie4").delay(300).fadeIn(1900).animate({
			'margin-left': '-150px'
		}, {queue: false, duration: 1900});
		jQuery("#intro-tie5").delay(300).fadeIn(1900).animate({
			'margin-left': '-250px'
		}, {queue: false, duration: 1900});
	} , 1500);
		/*setTimeout(function() {
			jQuery(".ties").fadeOut(1900);
		} , 6000);
		setTimeout(function() {
			jQuery("#intro-slogan").fadeIn(2000);
			jQuery("#intro-profession1").fadeIn(2000);
		} , 7000);
		setTimeout(function() {
			jQuery("#intro-profession1").fadeOut(1500);
		} , 10100);
		setTimeout(function() {
			jQuery("#intro-profession2").fadeIn(1500);
			jQuery("#intro-slogan").delay(1000).html('專業的領帶生產');
		} , 10300);
		setTimeout(function() {
			jQuery("#intro-profession2").fadeOut(1200);
		} , 13400);
		setTimeout(function() {
			jQuery("#intro-tie1").fadeIn(1900);
			jQuery("#intro-tie2").fadeIn(1900);
			jQuery("#intro-tie3").fadeIn(1900);
			jQuery("#intro-tie4").fadeIn(1900);
			jQuery("#intro-tie5").fadeIn(1900);
			jQuery("#intro-slogan").delay(1500).html('多樣的款式選擇');
		} , 13700);
		setTimeout(function() {
			
			jQuery("#intro-tie1").fadeOut(1900);
			jQuery("#intro-tie2").fadeOut(1900);
			jQuery("#intro-tie3").fadeOut(1900);
			jQuery("#intro-tie4").fadeOut(1900);
			jQuery("#intro-tie5").fadeOut(1900);
			jQuery("#intro-slogan").fadeOut(1200);
			jQuery("#intro-title").fadeIn(4000);
		} , 17000);*/
}

function productionSlide(cur, n) {
    var previous = cur-1,
        next = cur+1;
    clearTimeout(timer);
    $('#production-slideshow-play').hide();
    $('#production-slide' + cur).clearQueue().fadeTo(0, 1).css({'z-index':1, 'font-size':'1em'});
    $('#production-slide' + previous).clearQueue().fadeTo(0, 0).css({'z-index':0, 'font-size':0});
    $('#production-slide' + next).clearQueue().fadeTo(0, 1).css({'z-index':0, 'font-size':0});
    $('#production-slideshow-previous').unbind('click').click(function () {
        productionSlide(previous, n);
    });
    $('#production-slideshow-next').unbind('click').click(function () {
        productionSlide(next, n);
    });
    if(cur == 1){
        $('#production-slide' + n).clearQueue().fadeTo(0, 0).css({'z-index':0, 'font-size':0});
        $('#production-slideshow-previous').addClass('inactive').unbind('click');
    }else{
        $('#production-slideshow-previous').removeClass('inactive');
    }
    if(cur == n){
        $('#production-slideshow-next').addClass('inactive').css('cursor','auto').unbind('click');
        timer = setTimeout(function(){
        $('#production-slideshow-play').show();
        }, 3000);
    } else {
        $('#production-slideshow-next').removeClass('inactive').css('cursor','pointer');
        $('#production-slide' + cur).delay(4000).fadeTo(900, 0);
        timer = setTimeout(function(){ productionSlide(cur+1, n) },4900);
    }
}


