$(document).ready(function(){
    // Animate scroll behaviour internal links
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top -70
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//Event listener for menu button toggle
$('#toggle-menu-button').on('click', function(){
	$.each($("ul.nav li"), function(){
		$(this).toggleClass('show');
	})
});

// Portfolio gallery links and behaviour

var linkDict = {
	'capital' : 'https://developer.mozilla.org/',
	'weather': 'https://codepen.io/stevenkuipers/full/GvEyYo/',
	'morse' : 'https://developer.mozilla.org/',
	'quote' : 'https://codepen.io/stevenkuipers/full/yoaRNJ/',
	'to-do' : 'https://developer.mozilla.org/',
	'tribute' : 'https://developer.mozilla.org/',
};

$('.figure').on('click', function(){
	var key = $(this).children('span').attr('name');
	var w = 800;
	var h = 460;
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	window.open(linkDict[key], key + " example", "menubar=1,resizable=1,width="+w+",height="+h+", top="+top+", left="+left);
});

// Animate Logo to rotate come down page depending on scroll behaviour user

$(window).scroll(function(){

var winScroll = $(this).scrollTop();
    if(winScroll <=600){
    $('.header-box-overlay').css("opacity", + winScroll / 500);
    }
    if(winScroll < 100){
        $('.header-box-company-name').css('transform', 'translate(60px,' + (100 + winScroll) +'px)' + 'rotate(90deg)');
    }
    if(winScroll >= 100 && winScroll <= 200){
        $('.header-box-company-name').css('transform', 'translate(60px,' + winScroll * 2 +'px)' + 'rotate(90deg)');
    }
    if(winScroll >=200 && winScroll <= 400){
        var rot = Math.floor(90 - (winScroll - ($('.header-box-company-name').offset().top /2)));
        if(rot < 0){
            rot = 0; //Hack to prevent rotation to hang at 1 or 2 deg because of skipped winScroll int
        }
        $('.header-box-company-name').css('transform', 'translate(60px,' + '400px)' + 'rotate('+ rot  +'deg)');
    }
    if(winScroll >=400 && winScroll <= 600){
        $('.header-box-company-name').css('transform', 'translate(60px,' + winScroll +'px)' + 'rotate(0deg)');
    }

// Add Menu
    if (winScroll > 530){
        $('.menu').addClass("show");
      }
      else{
        $('.menu').removeClass("show");
      }

// Layer Menu on top further down so logo color change happens but afterwards menu is sticky AND on top of rest of page
if (winScroll > 599){
    $('.menu').addClass("on-top");
	$('#toggle-menu-button').css('opacity', '1');
  }
  else{
    $('.menu').removeClass("on-top");
	$('#toggle-menu-button').css('opacity', '0');
	$("ul.nav li").removeClass('show');
}
});
